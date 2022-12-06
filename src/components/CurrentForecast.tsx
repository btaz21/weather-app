import { useLayoutEffect, useState } from 'react';
import SearchBar from './SearchBar';
import {
  TbTemperature,
  TbTemperatureFahrenheit,
  TbTemperatureCelsius,
} from 'react-icons/tb';
import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
  TiWeatherWindyCloudy,
  TiWeatherWindy,
} from 'react-icons/ti';
import { BiDownArrow } from 'react-icons/bi';

const CurrentForecast = (): JSX.Element => {
  const [bgColor, setBgColor] = useState<string>('');

  useLayoutEffect(() => {
    const colors = [
      'rgba(187, 217, 174, 0.8)',
      'rgba(154, 175, 207, 0.8)',
      'rgba(223, 151, 129, 0.8)',
      'rgba(244, 239, 136, 0.8)',
    ];
    const item: string = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(item);
  }, []);

  return (
    <>
      <div className="container-fluid shadow-sm bg-white opacity-75">
        <div className="row align-items-center py-3 px-2">
          <div className="col-7">
            <div className="fs-5">Weather App</div>
          </div>
          <div className="col-5">
            <SearchBar />
          </div>
        </div>
      </div>
      <div
        className="border p-4 rounded"
        style={{ height: 200, width: 400, background: 'rgba(255,255,255,0.8)' }}
      >
        <div className="text-center mb-3 fs-4">Medellin, Colombia</div>
        <div className="d-flex justify-content-evenly">
          <div className="d-flex flex-column align-items-center">
            <TbTemperature size="3.5em" />
            <div className="d-flex align-items-center">
              56 <TbTemperatureFahrenheit size="1.3em" />{' '}
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <TiWeatherCloudy size="3.5em" />
            </div>
            <div>Cloudy</div>
          </div>
        </div>
      </div>
      <BiDownArrow size="2em" color="rgba(255,255,255,0.7)" className="mb-2" />
    </>
  );
};

export default CurrentForecast;
