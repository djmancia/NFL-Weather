const axios = require("axios");

const week = 2;
const year = 2021;
export async function getSchedule() {
  try {
    const data = await axios.get(
      `https://www.espn.com/nfl/schedule/_/year/${year}/week/${week}?xhr=1`
    );
    console.log(data.data.content);
  } catch (error) {
    console.error(error);
  }
}
