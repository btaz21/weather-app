import { Period } from '../models/WeatherAPIForecast';
import ForecastListItem from './ForecastListItem';

export interface Props {
  list: Period[];
}

const ForecastList = ({ list }: Props): JSX.Element => {
  return (
    <div className="row row-cols-1 row-cols-md-2">
      {list.map((l) => (
        <ForecastListItem
          key={l.number}
          name={l.name}
          temp={l.temperature}
          tempUnit={l.temperatureUnit}
          detail={l.detailedForecast}
          windDirection={l.windDirection}
          windSpeed={l.windSpeed}
          short={l.shortForecast}
        />
      ))}
    </div>
  );
};

export default ForecastList;
