import React from "react";
import "./App.css";

import MyTable from "./components/MyTable";
import SimpleSelect from "./components/SimpleSelect";

function App() {
  const [year, setYear] = React.useState("");
  const [week, setWeek] = React.useState("");

  return (
    <div className="App">
      <SimpleSelect
        year={year}
        setYear={setYear}
        week={week}
        setWeek={setWeek}
      ></SimpleSelect>
      <MyTable></MyTable>
    </div>
  );
}

export default App;
