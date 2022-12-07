import { useEffect, useState } from 'react';
import {
  TiWeatherCloudy,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
} from 'react-icons/ti';
import rain from '../assets/rain.png';
import sun from '../assets/rain.png';
import clouds from '../assets/rain.png';
import snow from '../assets/rain.png';

const useWeatherState = (forecast: string) => {
  const [icon, setIcon] = useState<JSX.Element | string>('');
  const [bgImg, setBgImg] = useState<string>('');

  useEffect(() => {
    console.log('test');

    if (forecast) {
      const arr = forecast.split(' ');
      for (let item of arr) {
        switch (item.toLowerCase()) {
          case 'rain': {
            setIcon(<TiWeatherStormy size="3.5em" />);
            setBgImg(rain);
            break;
          }
          case 'cloudy': {
            setIcon(<TiWeatherCloudy size="3.5em" />);
            setBgImg(clouds);
            break;
          }
          case 'sunny': {
            setIcon(<TiWeatherSunny size="3.5em" />);
            setBgImg(sun);
            break;
          }
          case 'snow': {
            setIcon(<TiWeatherSnow size="3.5em" />);
            setBgImg(snow);
            break;
          }
          default: {
            setIcon(<TiWeatherSunny size="3.5em" />);
            setBgImg(sun);
            break;
          }
        }
      }
    }
  }, [forecast]);

  return { bgImg: bgImg, icon: icon };
};

export default useWeatherState;
