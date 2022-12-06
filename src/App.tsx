import { useState } from 'react';
import AddressForm from './components/AddressForm';
import Page from './components/Page';
import GeocodingService from './api/services/GeocodingService';
import CurrentForecast from './components/CurrentForecast';
import ForecastList from './components/ForecastList';
import background from './assets/sunny.png';

const App = (): JSX.Element => {
  const [coordinates, setCoordinates] = useState({});

  // const getWeatherForecast = (item: string) => {
  //   console.log(item);
  // };

  const submitAddressParams = async (data: string) => {
    const coords = await GeocodingService.findByAddress('922+W+Ainslie+St');
    console.log(coords);

    setCoordinates(coords);
  };
  return (
    <>
      <Page bgImage={background}>
        <CurrentForecast />
      </Page>
      {/* <AddressForm submitAddressParams={submitAddressParams} /> */}

      <ForecastList />
    </>
  );
};

export default App;
