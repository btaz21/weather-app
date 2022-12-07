import React, { useEffect, useState } from 'react';
import { TbTemperature } from 'react-icons/tb';
import {
  TiWeatherCloudy,
  TiWeatherStormy,
  TiWeatherSunny,
} from 'react-icons/ti';
import { Period } from '../models/WeatherAPIForecast';

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
  const [icon, setIcon] = useState<JSX.Element | string>('');

  useEffect(() => {
    if (currentForecast.shortForecast) {
      const arr = currentForecast.shortForecast.split(' ');
      for (let item of arr) {
        switch (item.toLowerCase()) {
          case 'rain': {
            return setIcon(<TiWeatherStormy size="3.5em" />);
          }
          case 'cloudy': {
            return setIcon(<TiWeatherCloudy size="3.5em" />);
          }
          case 'sunny': {
            return setIcon(<TiWeatherSunny size="3.5em" />);
          }
        }
      }
    }
  }, [currentForecast]);

  const formatAddress = (words: string): JSX.Element => {
    const arr = words.split(',');
    console.log(arr);
    return (
      <>
        <div>{arr[0]}</div>
        <div>
          {arr[1]} {arr[2]}
        </div>

        <div>{arr[3]}</div>
      </>
    );
  };

  return (
    <div className="row">
      <div className="col-6">
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
                    No match for this address was found. Make sure that the
                    format is correct and try again
                  </div>
                </div>
              ) : (
                <>
                  <div className="text-center mb-3 fs-4">
                    {formatAddress(address)}
                  </div>
                  <div className="row align-items-start">
                    <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                      <div>{address && <TbTemperature size="3.5em" />}</div>
                      <div>
                        {currentForecast.temperature}°
                        {currentForecast.temperatureUnit}
                      </div>
                    </div>
                    <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                      <div>
                        <div>{icon} </div>
                      </div>
                      <div className="text-center">
                        {currentForecast.shortForecast}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentForecast;
