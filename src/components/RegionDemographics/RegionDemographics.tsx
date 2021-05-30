import React, { useReducer  } from "react";

import type { Country } from "ApiModels";
import RegionDemographicsContext from "@contexts/RegionDemographicsContext";
import RegionDemographicsReducer from "@reducers/RegionDemographicsReducer";
import RegionDemographicsState from "@data/state/RegionDemographicsState";
import RegionSelector from "@components/RegionSelector/RegionSelector";
import ListSelector from "@components/ListSelector/ListSelector";
import CountriesList from "@components/CountriesList/CountriesList";
import LanguagesList from "@components/LanguagesList/LanguagesList";
import styles from "./RegionDemographics.module.scss";

interface RegionDemographicsProps
{
    allCountriesData: Array<Country>
}

function RegionDemographics(props: RegionDemographicsProps)
{
    const { allCountriesData } = props;

	const [
		state,
		dispatch
	] = useReducer(RegionDemographicsReducer, new RegionDemographicsState());

    return (
        <main className={styles.main}>
            <RegionDemographicsContext.Provider value={{state, dispatch}}>
				<RegionSelector allCountriesData={allCountriesData} />

				<ListSelector />

				{(state.selectedList === "CountriesList") ? (
					<CountriesList />
				) : (
					<LanguagesList />
				)}
			</RegionDemographicsContext.Provider>
        </main>
    );
}

export default RegionDemographics;