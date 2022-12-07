import { useLayoutEffect, useState } from 'react';
import { TbTemperature } from 'react-icons/tb';
import { TiWeatherWindy } from 'react-icons/ti';

interface Props {
  temp: number;
  tempUnit: string;
  detail: string;
  windDirection: string;
  windSpeed: string;
  name: string;
}

const ForecastListItem = ({
  temp,
  tempUnit,
  detail,
  windDirection,
  windSpeed,
  name,
}: Props) => {
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
    <div className="shadow-sm col border p-4" style={{ background: bgColor }}>
      <div className="d-flex justify-content-center fw-bold">{name}</div>
      <div className="text-center mt-4">{detail}</div>
      <div className="mt-4 d-flex justify-content-between">
        <TbTemperature size="2em" />
        <div>
          {temp}°{tempUnit}
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <TiWeatherWindy size="2em" />
        <div>
          {windSpeed} winds out of {windDirection}
        </div>
      </div>
    </div>
  );
};

export default ForecastListItem;
