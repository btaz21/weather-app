import axios from 'axios';
import { Forecast } from '../../models/WeatherAPIForecast';
import { Points } from '../../models/WeatherAPIPoints';

const apiClient = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/api.weather.gov/',
  headers: {
    'Content-type': 'application/json',
  },
});

const findWeatherForecast = async (url: string) => {
  const response = await apiClient.get<Forecast>(url);
  return response.data.properties.periods;
};

const findForecastURL = async (coords: { x: number; y: number }) => {
  const response = await apiClient.get<Points>(
    `/points/${coords.y},${coords.x}`
  );
  console.log(response);

  return response.data.properties.forecast;
};

const WeatherService = {
  findForecastURL,
  findWeatherForecast,
};

export default WeatherService;
