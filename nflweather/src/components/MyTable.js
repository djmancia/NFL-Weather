import React, { useState, useEffect } from "react";
import { getSchedule } from "../schedules";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function MyTable(props) {
  const classes = useStyles();
  const [games, setGames] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const week = props.weekValue;
      const year = props.year;
      const seasonType = props.seasonType;
      const resp = await getSchedule(year, week, seasonType);
      console.log(resp);
      // holds list of games
      const list = [];
      // holds teams [away, home]
      const teams = [];

      for (const date in resp) {
        dates.push(date);
        for (const game in resp[date].games) {
          list.push(resp[date].games[game].name);
        }
      }
      for (const game in list) {
        teams.push(list[game].split(" at "));
      }
      setGames(list);
    }
    fetchData();
  }, [props.weekValue, props.year, props.seasonType]);

  return (
    <TableContainer component={Paper} key={props.weekValue}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Game</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {games.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
