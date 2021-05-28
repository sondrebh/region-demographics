import React from "react";

import Country from "CountryTypes";
import RegionSelector from "@components/RegionSelector/RegionSelector";
import styles from "./RegionDemographics.module.scss";

interface RegionDemographicsProps
{
    allCountriesData: Array<Country>
}

function RegionDemographics(props: RegionDemographicsProps)
{
    const { allCountriesData } = props;

    return (
        <main className={styles.main}>
            <RegionSelector
                allCountriesData={allCountriesData}
            />

            
        </main>
    );
}

export default RegionDemographics;