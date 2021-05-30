declare module "ApiModels"
{
	export interface Country
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
}