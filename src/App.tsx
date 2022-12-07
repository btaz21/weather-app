import { useEffect, useState } from 'react';
import Page from './components/Page';
import GeocodingService from './api/services/GeocodingService';
import WeatherService from './api/services/WeatherService';
import CurrentForecast from './components/CurrentForecastBox';
import ForecastList from './components/ForecastList';
import background from './assets/background.png';
import Header from './components/Header';
import { Period } from './models/WeatherAPIForecast';
import { BiDownArrow } from 'react-icons/bi';
import './App.css';

const App = (): JSX.Element => {
  const [forecast, setForecast] = useState<Period[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<boolean>(false);
  const [address, setAddress] = useState<string>('');
  const [currentForecast, setCurrentForecast] = useState<Period>(Object);

  useEffect(() => {
    const setInitialWeather = async () => {
      const url = await getForecastUrl({ x: -98.35, y: 39.5 });
      const forecast = await getWeatherForecast(url);
      setAddress('Geographic Center of the USA');
      setCurrentForecast(forecast[0]);
    };
    setInitialWeather();
  }, []);

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

  return (
    <>
      <Page bgImage={background}>
        <Header
          title="Weather App"
          submitForm={getCoordinates}
          setErrorMsg={setErrorMsg}
        />
        <CurrentForecast
          loading={loading}
          errorMsg={errorMsg}
          address={address}
          currentForecast={currentForecast}
        />
        {forecast.length ? (
          <div className="d-flex flex-column align-items-center">
            <div className="text-white">Weekly Forecast</div>
            <BiDownArrow
              size="2em"
              color="rgba(255,255,255,0.7)"
              className="mb-2"
            />
          </div>
        ) : (
          <div></div>
        )}
      </Page>
      <ForecastList list={forecast} />
    </>
  );
};

export default App;
