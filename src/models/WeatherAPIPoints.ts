export interface Points {
  '@context': Array<ContextClass | string>;
  id: string;
  type: string;
  geometry: Geometry;
  properties: PokedexProperties;
}

export interface ContextClass {
  '@version': string;
  wx: string;
  s: string;
  geo: string;
  unit: string;
  '@vocab': string;
  geometry: Distance;
  city: string;
  state: string;
  distance: Distance;
  bearing: CountyClass;
  value: Value;
  unitCode: Distance;
  forecastOffice: CountyClass;
  forecastGridData: CountyClass;
  publicZone: CountyClass;
  county: CountyClass;
}

export interface CountyClass {
  '@type': string;
}

export interface Distance {
  '@id': string;
  '@type': string;
}

export interface Value {
  '@id': string;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface PokedexProperties {
  '@id': string;
  '@type': string;
  cwa: string;
  forecastOffice: string;
  gridId: string;
  gridX: number;
  gridY: number;
  forecast: string;
  forecastHourly: string;
  forecastGridData: string;
  observationStations: string;
  relativeLocation: RelativeLocation;
  forecastZone: string;
  county: string;
  fireWeatherZone: string;
  timeZone: string;
  radarStation: string;
}

export interface RelativeLocation {
  type: string;
  geometry: Geometry;
  properties: RelativeLocationProperties;
}

export interface RelativeLocationProperties {
  city: string;
  state: string;
  distance: DistanceClass;
  bearing: DistanceClass;
}

export interface DistanceClass {
  unitCode: string;
  value: number;
}
