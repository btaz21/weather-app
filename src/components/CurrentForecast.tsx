import { useLayoutEffect, useState } from 'react';
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
import { Period } from '../models/WeatherAPIForecast';

const ICON_MAP = {
  cloudy: <TiWeatherCloudy />,
  sunny: <TiWeatherSunny />,
};

interface Props {
  loading: boolean;
  errorMsg: boolean;
  address: string;
  currentForecast: Period;
}

const CurrentForecast = ({
  loading,
  errorMsg,
  address,
  currentForecast,
}: Props): JSX.Element => {
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
      <div
        className="border p-4 rounded"
        style={{
          minHeight: 200,
          width: 400,
          background: 'rgba(255,255,255,0.8)',
        }}
      >
        {loading ? (
          <div className="h-100 d-flex flex-column justify-content-center align-items-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {errorMsg ? (
              <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                <div className="text-center text-danger">
                  No match for this address was found. Make sure that the format
                  is correct and try again
                </div>
              </div>
            ) : (
              <>
                <div className="text-center mb-3 fs-4">{address}</div>
                <div className="d-flex justify-content-evenly">
                  <div className="d-flex flex-column align-items-center">
                    <TbTemperature size="3.5em" />
                    <div className="d-flex align-items-center">
                      {currentForecast.temperature}
                      {currentForecast.temperatureUnit}
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <div>
                      <TiWeatherCloudy size="3.5em" />
                    </div>
                    <div>{currentForecast.shortForecast}</div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
      <BiDownArrow size="2em" color="rgba(255,255,255,0.7)" className="mb-2" />
    </>
  );
};

export default CurrentForecast;
