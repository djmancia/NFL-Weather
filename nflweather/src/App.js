import "./App.css";
import React, { useState } from "react";
import { getSchedule } from "./schedules";

function App() {
  const [games, setGames] = useState([]);
  const getData = async () => {
    const week = 2;
    const year = 2021;
    const resp = await getSchedule(year, week);
    const list = [];

    for (const date in resp) {
      for (const game in resp[date].games) {
        console.log(`on ${date} these guys play`, resp[date].games[game].name);
        list.push(resp[date].games[game].name);
      }
    }

    setGames(list);
  };

  const middle = () => {
    getData();
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {middle()}
          Edit <code>src/App.js</code> and save to reload.a
        </p>
      </header>
    </div>
  );
}

export default App;
