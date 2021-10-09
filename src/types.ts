
// type

type CountriesJsonType = {
    Country: string,
    Slug: string,
}[]

type LoadingType = {
    loading: boolean,
}

export type CountryDataType = {
    date:  string,
    newConfirmed: number,
    totalConfirmed: number,
    newRecovered: number,
    totalRecovered:  number,
  }
  
export type TopPageType = {
    countriesJson :CountriesJsonType,
    setCountry: React.Dispatch<React.SetStateAction<string>>,
    countryData: CountryDataType,
    loading: boolean,
}

export type SelectorType = {
    setCountry: React.Dispatch<React.SetStateAction<string>>,
    countriesJson :CountriesJsonType,
}

export type ResultsType = {
    countryData: CountryDataType,
    loading: boolean,
}

// interface

interface SingleCountryDataType  {
    Country: string
    NewConfirmed: number,
    TotalConfirmed: number,
  }

export interface AllCountriesDataType extends Array<SingleCountryDataType> {}

interface SingleCountryDataType {
    Country: string
    NewConfirmed: number,
    TotalConfirmed: number,
}

export interface WorldPageType {
    allCountriesData: Array<SingleCountryDataType>,
    loading: boolean,
}

export interface CardType {
    allCountriesData: Array<SingleCountryDataType>,
    loading: boolean,
}