import React, { useState, useEffect } from "react";
import "./App.css";

import MyTable from "./components/MyTable";
import SimpleSelect from "./components/SimpleSelect";

function App() {
  const [year, setYear] = useState("2021");
  const [weekValue, setWeekValue] = useState("1");
  const [weekName, setWeekName] = useState("Week 1");
  const [seasonType, setSeasonType] = useState(2);

  return (
    <div className="App">
      <SimpleSelect
        year={year}
        setYear={setYear}
        weekName={weekName}
        weekValue={weekValue}
        setWeekValue={setWeekValue}
        seasonType={seasonType}
        setWeekName={setWeekName}
        setSeasonType={setSeasonType}
      ></SimpleSelect>

      <MyTable
        year={year}
        key={weekName}
        weekValue={weekValue}
        seasonType={seasonType}
      ></MyTable>
    </div>
  );
}

export default App;
