import React from "react";

import type { Country } from "ApiModels";
import getAllCountriesDataAsync from "@api/getAllCountriesDataAsync";
import RegionDemographics from "@components/RegionDemographics/RegionDemographics";

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

    return <RegionDemographics allCountriesData={allCountriesData} />;
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