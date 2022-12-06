import { TbTemperature } from 'react-icons/tb';
import { TiWeatherWindy } from 'react-icons/ti';
import { Period } from '../models/WeatherAPIForecast';

export interface Props {
  list: Period[];
}

const ForecastList = ({ list }: Props): JSX.Element => {
  return (
    <div className="row row-cols-1 row-cols-sm-2">
      {list.map((l) => (
        <div className="shadow-sm col border p-4">
          <div className="d-flex justify-content-center fw-bold">{l.name}</div>
          <div className="text-center mt-4">{l.detailedForecast}</div>
          <div className="mt-4 d-flex justify-content-between">
            <TbTemperature />
            <div>{l.temperature}</div>
          </div>

          <div className="d-flex justify-content-between">
            <TiWeatherWindy />
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
