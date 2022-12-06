import { useState } from 'react';
import Page from './components/Page';
import GeocodingService from './api/services/GeocodingService';

import WeatherService from './api/services/WeatherService';
import CurrentForecast from './components/CurrentForecast';
import ForecastList from './components/ForecastList';
import background from './assets/sunny.png';
import Header from './components/Header';
import { Period } from './models/WeatherAPIForecast';

const App = (): JSX.Element => {
  const [forecast, setForecast] = useState<Period[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<boolean>(false);
  const [address, setAddress] = useState<string>('');
  const [currentForecast, setCurrentForecast] = useState<Period>(Object);
  const getWeatherForecast = async (url: string) => {
    return await WeatherService.findWeatherForecast(url);
  };

  const getForecastUrl = async (coords: { x: number; y: number }) => {
    return await WeatherService.findForecastURL(coords);
  };

  const getCoordinates = async (street: string, zip: string) => {
    try {
      setErrorMsg(false);
      setLoading(true);
      const data = await GeocodingService.findByAddress(street, zip);
      console.log(data);

      const url = await getForecastUrl(data.coordinates);
      const forecast = await getWeatherForecast(url);
      setLoading(false);
      setForecast(forecast);
      setAddress(data.matchedAddress);
      setCurrentForecast(forecast[0]);
    } catch (error) {
      setLoading(false);
      setErrorMsg(true);
    }
  };

  console.log(address);

  return (
    <>
      <Page bgImage={background}>
        <Header title="Weather App" submitForm={getCoordinates} />
        <CurrentForecast
          loading={loading}
          errorMsg={errorMsg}
          address={address}
          currentForecast={currentForecast}
        />
      </Page>
      <ForecastList list={forecast} />
    </>
  );
};

export default App;
