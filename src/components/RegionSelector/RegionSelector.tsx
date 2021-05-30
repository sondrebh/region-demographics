import React, { useContext, useEffect, useState } from "react";

import type { Country, Regions } from "ApiModels";
import RegionDemographicsContext from "@contexts/RegionDemographicsContext";
import ChevronDown from "@icons/chevronDown.svg";
import styles from "./RegionSelector.module.scss";

interface RegionSelectorProps
{
    allCountriesData: Array<Country>
}

function RegionSelector({ allCountriesData }: RegionSelectorProps)
{
	const { state, dispatch } = useContext(RegionDemographicsContext);
	
	const [allDistinctRegions, setAllDistinctRegions] = useState([]);
	const [selectionListIsOpen, setSelectionListIsOpen] = useState(false);

	useEffect(() => {
		setAllDistinctRegions(getAllDistinctRegions(allCountriesData));
	}, [allCountriesData]);

	function setSelectedRegion(region: Regions)
	{
		setSelectionListIsOpen(false);
		dispatch({ type: "SetSelectedRegion", data: region});
	}

    return (
        <div>
			<p>Region demographics</p>

			<div className={styles.selectorContainer}>
				<button
					className={styles.regionDropdownButton}
					onClick={() => setSelectionListIsOpen(!selectionListIsOpen)}
				>
					{state.selectedRegion}
					<ChevronDown
						className={
							selectionListIsOpen ?
							styles.chevronUp :
							styles.chevronDown
						}
					/>
				</button>

				{selectionListIsOpen && (
					<div className={styles.selectionList}>
						{allDistinctRegions.map(region => (
							<button
								key={region}
								onClick={() => setSelectedRegion(region)}
							>
								{region}
							</button>
						))}
					</div>
				)}
			</div>

		</div>
    );
}

function getAllDistinctRegions(allCountriesData: Array<Country>)
{
	const allRegions = allCountriesData
		.filter(country =>
			{
				const regionIsValid = (
					country.region !== null &&
					country.region !== undefined &&
					country.region !== ""
				);

				if(regionIsValid) {
					return true;
				} else {
					return false;
				}
			}
		)
		.map(country => country.region);

		return [
			...new Set(allRegions) as any
		];	
}

export default RegionSelector;