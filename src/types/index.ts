export type Country = Pick<CountryDetails, 'name' | 'population' |  'region' | 'capital' | 'flags'>

export type CountryDetails = {
  name: Name,
  population: number,
  region: string,
  subregion: string,
  capital: string[],
  flags: Flags,
  tld: string[],
  currencies?: Currencies,
  languages: string,
  borders?: string[],
}

export type Name = {
  common: string,
  official: string,
  nativeName?: Record<string, NativeName>
}

export type NativeName = {
  official: string,
  common: string
}

export type Flags = {
  svg: string,
  png: string,
  alt: string,
}

export type Currency = {
  name: string,
  symbol: string,
}

export type Currencies = Record<string, Currency>

export type CountryCodes = {
  name: Name,
  cca3: string,
}

export type MappedCountryCodes = Record<string, string>