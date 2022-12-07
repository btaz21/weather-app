import { useLayoutEffect, useState } from 'react';
import {
  TiWeatherCloudy,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
} from 'react-icons/ti';
import rain from '../assets/rain.png';
import sun from '../assets/sunny.png';
import clouds from '../assets/cloudy.png';
import snow from '../assets/snowy.png';
import clear from '../assets/clear.png';
import turtledovesunny from '../assets/turtledovesunny.png';
import turtledovesnowy from '../assets/turtledovesnowy.png';
import turtledoverainy from '../assets/turtledoverainy.png';
import turtledove from '../assets/logo.png';

const useWeatherState = (forecast: string) => {
  const [icon, setIcon] = useState<JSX.Element | string>('');
  const [bgImg, setBgImg] = useState<string>('');
  const [logo, setLogo] = useState<string>('');

  useLayoutEffect(() => {
    if (forecast) {
      const arr = forecast.split(' ');
      for (let item of arr) {
        switch (item.toLowerCase()) {
          case 'rain' || 'rainy': {
            setIcon(<TiWeatherStormy size="3.5em" />);
            setBgImg(rain);
            setLogo(turtledoverainy);
            break;
          }
          case 'cloudy' || 'clouds': {
            setIcon(<TiWeatherCloudy size="3.5em" />);
            setBgImg(clouds);
            setLogo(turtledove);
            break;
          }
          case 'sunny' || 'sun': {
            setIcon(<TiWeatherSunny size="3.5em" />);
            setBgImg(sun);
            setLogo(turtledovesunny);

            break;
          }
          case 'clear': {
            setIcon(<TiWeatherSunny size="3.5em" />);
            setBgImg(clear);
            setLogo(turtledove);

            break;
          }
          case 'snow' || 'snowy': {
            setIcon(<TiWeatherSnow size="3.5em" />);
            setBgImg(snow);
            setLogo(turtledovesnowy);
            break;
          }
          default: {
            break;
          }
        }
      }
    }
  }, [forecast]);

  return { bgImg: bgImg, icon: icon, logo: logo };
};

export default useWeatherState;
