import "./App.css";
import { getSchedule } from "./schedules";

const getData = async () => {
  const week = 2;
  const year = 2021;
  const resp = await getSchedule(year, week);
  console.log(resp);
};

const middle = () => {
  getData();
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {middle()}
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
