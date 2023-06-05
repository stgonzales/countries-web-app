import { Country, CountryCodes, CountryDetails, MappedCountryCodes } from "@/types";

export async function getAllCountries() {
  return await fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json()) as Country[];
}

export async function getCountryDetails(country: string) {
  return await fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((res) => res.json())
    .then((data) => data[0]) as CountryDetails;
}

export async function getMappedCountryCodes() {
  return await fetch('https://restcountries.com/v3.1/all?fields=name,cca3')
    .then((res) => res.json())
    .then((data: CountryCodes[]) => data.reduce((acc, cur) => {
      if(!cur.cca3) return acc
      acc = {...acc, [cur.cca3]: cur.name.common}
      return acc
    },{})) as MappedCountryCodes
}