import axios from 'axios';
import AddressFormState from '../../models/AddressFormState';
import { Coordinates } from '../../models/GeocodeResponse';

const apiClient = axios.create({
  baseURL: 'https://geocoding.geo.census.gov/geocoder/locations',
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

const findByAddress = async (data: string) => {
  const response = await apiClient.get<Coordinates>(
    `/address?street=${data}&zip=60640&benchmark=2020&format=json`
  );
  return response.data.result.addressMatches[0].coordinates;
};

const GeocodingService = {
  findByAddress,
};

export default GeocodingService;
