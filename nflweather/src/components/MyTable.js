import React, { useState, useEffect } from "react";
import { getSchedule } from "../schedules";
import { getWeather } from "../weather"
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Tab } from "@material-ui/core";
import { weathercell} from './weatherCell'

const useStyles = makeStyles({
  table: {
    maxWidth: '80%',
  },
});

export default function MyTable(props) {
  const classes = useStyles();
  const [teams, setTeams] = useState([]);
  const [logos, setLogos] = useState([]);
  const [locations, setLocations] = useState([]);
  const [data, setData] = useState();

  const fetchWeather = async(city) => {
    const resp = await getWeather(city)
    let returnObject = {temp: resp.data.current.temp_f, windDirection: resp.data.current.wind_dir, wind_mph:resp.data.current.wind_mph }
    const string = `${returnObject.temp}, ${returnObject.windDirection}, ${returnObject.wind_mph}`
    setData(resp)
    return ( data &&
      <weatherCell string={string}/>
  
      ); 
  }

  useEffect(() => {
    async function fetchData() {
      const week = props.weekValue;
      const year = props.year;
      const seasonType = props.seasonType;
      const resp = await getSchedule(year, week, seasonType);
      
      
    
      // holds list of games
      const list = [];
      // holds teams [away, home]
      const temp = [];
      let tempLogos = []
      const tempDate = []
      let tempLocationArray=[]
    

      for (const date in resp) {
        tempDate.push([date,resp[date].games.length])
        for (const game in resp[date].games) {
          let tempLocationObj= {}
          list.push([resp[date].games[game].name, resp[date].games[game].date]);
          tempLogos.push([resp[date].games[game].competitions[0].competitors[0].team.logo, resp[date].games[game].competitions[0].competitors[1].team.logo])
          tempLocationObj.city = resp[date].games[game].competitions[0].venue.address.city
          tempLocationObj.state = resp[date].games[game].competitions[0].venue.address.state
          tempLocationObj.name = resp[date].games[game].competitions[0].venue.fullName
          tempLocationArray.push(tempLocationObj)
        }
      }
    
      for (const game in list) {
        
        temp.push([list[game][0].split(" at "),list[game][1] ]);
      }
 
      setLocations(tempLocationArray)
      setTeams(temp)
      setLogos(tempLogos)

    }
    fetchData();
  }, [props.weekValue, props.year]);





  const formatDate = (date) =>{
    
    let formatted = new Date(date)
    return formatted.toLocaleString()
  }

  return (
    <TableContainer component={Paper} key={props.weekValue}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Date</TableCell>
            <TableCell>Away</TableCell>
            <TableCell>Home</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Current Conditions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map((row, index) => (
            <TableRow key={index}>
             <TableCell>
               {formatDate(row[1])}
              </TableCell>
              <TableCell component="th" scope="row">
              {<img width='25' height ='25'src={logos[index][1]}></img>} {typeof row === 'string' ? row :row[0][0]} 
              </TableCell>
              <TableCell>
              {<img width='25' height ='25'src={logos[index][0]}></img>}{typeof row === 'string' ? row :row[0][1]} 
              </TableCell>
             <TableCell>
               {`${locations[index].name} in ${locations[index].city} ${locations[index].state}`}
             </TableCell>
             
               {/* {fetchWeather(locations[index].city) } */}
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
