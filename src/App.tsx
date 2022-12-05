import React from 'react';
import AddressForm from './components/AddressForm';
import Page from './components/Page';
import AddressFormState from './models/AddressFormState';
import queryString from 'query-string';
import axios from 'axios';

function App() {
  const getWeatherForecast = (item: string) => {
    console.log(item);
  };

  const submitAddressParams = (inputs: AddressFormState) => {
    const url = 'https://geocoding.geo.census.gov/geocoder/locations/address';
    const qs = queryString.stringifyUrl({
      url: url,
      query: inputs,
    });

    await axios.get(qs);
  };
  return (
    <Page>
      {/* <Header /> */}
      <AddressForm onGetWeatherForecast={getWeatherForecast} />
      {/* <WeatherForecast /> */}
    </Page>
  );
}

export default App;
