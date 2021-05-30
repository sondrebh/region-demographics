import React, { useReducer, useEffect } from "react";

import type { Country, Regions } from "ApiModels";
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

	useEffect(() => {
		const selectedRegionIsNotSet = (state.selectedRegion === null);

		if(selectedRegionIsNotSet) {
			const firstRegionInList = allCountriesData[0].region;
		
			dispatch({
				type: "SetSelectedRegion",
				data: firstRegionInList as Regions
			});
		}
	}, []);

    return (
        <main className={styles.main}>
            <RegionDemographicsContext.Provider value={{state, dispatch}}>
				<RegionSelector allCountriesData={allCountriesData} />

				<ListSelector />

				{(state.selectedList === "CountriesList") ? (
					<CountriesList allCountriesData={allCountriesData} />
				) : (
					<LanguagesList allCountriesData={allCountriesData} />
				)}
			</RegionDemographicsContext.Provider>
        </main>
    );
}

export default RegionDemographics;