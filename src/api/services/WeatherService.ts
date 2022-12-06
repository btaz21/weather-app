import axios from 'axios';
import { Coordinates } from '../../models/GeocodeResponse';

const apiClient = axios.create({
  baseURL: 'https://geocoding.geo.census.gov/geocoder/locations',
  headers: {
    'Content-type': 'application/json',
  },
});

const findByCoordinates = async (
  street: string,
  city: string,
  state: string
) => {
  const response = await apiClient.get<Coordinates>(
    `/address?street=${street}&city=${city}&state=${state}&format=json`
  );
  return response.data.result.addressMatches[0].coordinates;
};

const GeocodingService = {
  findByCoordinates,
};

export default GeocodingService;
