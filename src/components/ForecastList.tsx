import { useLayoutEffect, useState } from 'react';
import { TbTemperature } from 'react-icons/tb';
import { TiWeatherWindy } from 'react-icons/ti';
import { Period } from '../models/WeatherAPIForecast';

export interface Props {
  list: Period[];
}

const ForecastList = ({ list }: Props): JSX.Element => {
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
    <div className="row row-cols-1 row-cols-sm-2">
      {list.map((l) => (
        <div
          className="shadow-sm col border p-4"
          style={{ background: bgColor }}
        >
          <div className="d-flex justify-content-center fw-bold">{l.name}</div>
          <div className="text-center mt-4">{l.detailedForecast}</div>
          <div className="mt-4 d-flex justify-content-between">
            <TbTemperature size="2em" />
            <div>
              {l.temperature}°{l.temperatureUnit}
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <TiWeatherWindy size="2em" />
            <div>
              {l.windSpeed} winds out of {l.windDirection}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForecastList;
