const axios = require("axios");

export async function getSchedule(year, week) {
  try {
    const data = await axios.get(
      `https://www.espn.com/nfl/schedule/_/year/${year}/week/${week}?xhr=1`
    );
    return data.data.content.schedule;
  } catch (error) {
    console.error(error);
    return error;
  }
}
