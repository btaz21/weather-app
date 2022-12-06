import axios from 'axios';
import { Coordinates } from '../../models/GeocodeResponse';

const apiClient = axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/geocoding.geo.census.gov/geocoder/locations',
  headers: {
    'Content-type': 'application/json',
  },
});

const findByAddress = async (street: string, zip: string) => {
  const response = await apiClient.get<Coordinates>(
    `/address?street=${street}&zip=${zip}&benchmark=2020&format=json`
  );
  return response.data.result.addressMatches[0];
};

const GeocodingService = {
  findByAddress,
};

export default GeocodingService;
