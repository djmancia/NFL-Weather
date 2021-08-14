import { getSchedule } from "./nflweather/src/schedules.js";

const week = 2;
const year = 2021;

const formatter = () => {
  const data = getter();
  console.log(data);
};

const getter = async () => {
  return await getSchedule(year, week);
};

formatter();
