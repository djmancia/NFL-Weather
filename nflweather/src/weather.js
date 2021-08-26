const axios = require("axios");

const API_KEY = '5815e5d312fa4ea487c40705212608';
export async function getWeather(city) {
  try {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`;
    
    const data = await axios.get(url);
    return data
  } catch (error) {
    console.error(error);
    return error;
  }
}
