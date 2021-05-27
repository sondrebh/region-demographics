import React from "react";

import Country from "CountryTypes";
import getAllCountriesDataAsync from "@api/getAllCountriesDataAsync";

interface IndexProps
{
    allCountriesData: Array<Country>
}

/**
 * Index page. This is the entry point of this
 * web app and is responsible for fetching
 * all needed data at build time.
 */
function Index(props: IndexProps)
{
    const { allCountriesData } = props;

    return (
        <div>
            {allCountriesData.map(country => <h2>{country.name}</h2>)}
        </div>
    );
}

export async function getStaticProps(context)
{
    const indexProps: IndexProps = {
        allCountriesData: await getAllCountriesDataAsync()
    };

    return {
        props: indexProps
    };
}

export default Index;