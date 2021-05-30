import { Country } from "ApiModels";

/**
 * Fetches fresh data from the restcountries API and
 * returns an array of countries with linked metadata
 * like region, population etc.
 * 
 * To read more about the API check out this
 * link {@link https://restcountries.eu/}.
 */
async function getAllCountriesDataAsync(): Promise<Array<Country>>
{
    const allCountriesDataEndpoint: string = "https://restcountries.eu/rest/v2/all";
    
    let allCountriesData: Array<Country> = [];

    try {
        allCountriesData
            = await fetchAndGetParsedJsonFromUrlAsync(allCountriesDataEndpoint) as Array<Country>;
    } catch (exception) {
        console.error(
            `api -> getAllCountriesDataAsync: Error occured while fetching or parsing the url. Error: ${exception}`
        );
    }

    return allCountriesData;
}

async function fetchAndGetParsedJsonFromUrlAsync(url: string): Promise<any>
{
    const fetchResponse: Response = await fetch(url);
    const parsedJson = fetchResponse.json();
    return parsedJson;
}

export default getAllCountriesDataAsync;