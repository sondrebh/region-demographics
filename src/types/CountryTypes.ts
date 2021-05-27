declare module "CountryTypes"
{
  /**
   * In case some values aren't covered here, take a
   * look at {@link https://restcountries.eu/} to
   * see what a country object contains.
   */
  export default interface Country
  {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    gini: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    currencies: Currency[];
    languages: Language[];
    translations: Translations;
    flag: string;
    regionalBlocs: RegionalBlocs[];
    cioc: string;
  }

  export interface Currency 
  {
    code: string;
    name: string;
    symbol: string;
  }

  export interface Language 
  {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }

  export interface RegionalBlocs
  {
    acronym: string;
    name: string;
    otherAcronyms: any[];
    otherNames: any[];
  }

  export interface Translations
  {
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
  }
}