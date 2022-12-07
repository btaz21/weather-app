import { TbTemperature } from 'react-icons/tb';
import { TiWeatherWindy } from 'react-icons/ti';
import useWeatherState from '../hooks/useWeatherState';

interface Props {
  temp: number;
  tempUnit: string;
  detail: string;
  windDirection: string;
  windSpeed: string;
  name: string;
  short: string;
}

const ForecastListItem = ({
  temp,
  tempUnit,
  detail,
  short,
  windDirection,
  windSpeed,
  name,
}: Props) => {
  const { bgImg, icon } = useWeatherState(short);

  const bgStyles = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className="shadow-lg col border p-4" style={bgStyles}>
      <div className="d-flex justify-content-center align-items-center fw-bold">
        {name} <span className="ms-3">{icon}</span>
      </div>
      <div className="text-center mt-4">{short}</div>

      <div className="text-center mt-4">{detail}</div>

      <div className="mt-4 d-flex justify-content-between">
        <TbTemperature
          size="2em"
          className="border border-dark rounded-circle bg-dark"
          color="white"
        />
        <div className="shadow-lg rounded border border-dark bg-light p-2">
          {temp}°{tempUnit}
        </div>
      </div>

      <div className="mt-2 d-flex justify-content-between">
        <TiWeatherWindy
          size="2em"
          className="border border-dark rounded-circle bg-dark"
          color="white"
        />
        <div className="shadow-lg rounded border border-dark bg-light p-2">
          {windSpeed} winds out of {windDirection}
        </div>
      </div>
    </div>
  );
};

export default ForecastListItem;
