export interface Coordinates {
  result: Result;
}

export interface Result {
  input: Input;
  addressMatches: AddressMatch[];
}

export interface AddressMatch {
  tigerLine: TigerLine;
  coordinates: CoordinatesClass;
  addressComponents: AddressComponents;
  matchedAddress: string;
}

export interface AddressComponents {
  zip: string;
  streetName: string;
  preType: string;
  city: string;
  preDirection: string;
  suffixDirection: string;
  fromAddress: string;
  state: string;
  suffixType: string;
  toAddress: string;
  suffixQualifier: string;
  preQualifier: string;
}

export interface CoordinatesClass {
  x: number;
  y: number;
}

export interface TigerLine {
  side: string;
  tigerLineId: string;
}

export interface Input {
  address: Address;
  benchmark: Benchmark;
}

export interface Address {
  city: string;
  street: string;
  state: string;
}

export interface Benchmark {
  isDefault: boolean;
  benchmarkDescription: string;
  id: string;
  benchmarkName: string;
}
