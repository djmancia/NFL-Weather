const axios = require("axios");

export async function getSchedule(year, week, seasonType) {
  try {
    const link = `https://www.espn.com/nfl/schedule/_/year/${year}/week/${week}/seasontype/${seasonType}?xhr=1`;
    const data = await axios.get(link);
    return data.data.content.schedule;
  } catch (error) {
    console.error(error);
    return error;
  }
}
