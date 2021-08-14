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

export default function MyTable() {
  const classes = useStyles();
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const week = 4;
      const year = 2021;
      const seasonType = 1;
      const resp = await getSchedule(year, week, seasonType);
      // holds list of games
      const list = [];
      // holds teams [away, home]
      const teams = [];

      for (const date in resp) {
        console.log(resp[date]);
        for (const game in resp[date].games) {
          console.log(
            `on ${date} these guys play`,
            resp[date].games[game].name
          );
          list.push(resp[date].games[game].name);
        }
      }
      console.log(list);
      for (const game in list) {
        teams.push(list[game].split(" at "));
      }
      console.log(teams);
      setGames(list);
    }
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
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
