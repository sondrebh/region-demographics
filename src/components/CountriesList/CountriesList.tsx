import React, { useContext, useEffect, useState } from "react";

import type { Country, Regions } from "ApiModels";
import RegionDemographicsContext from "@contexts/RegionDemographicsContext";

import Statistics from "@components/Statistics/Statistics";
import StatisticsEntry from "@components/Statistics/StatisticsEntry/StatisticsEntry";

import Table from "@components/Table/Table";
import TableHead from "@components/Table/TableHead/TableHead";
import TableHeadRow from "@components/Table/TableHeadRow/TableHeadRow";
import TableHeadColumn from "@components/Table/TableHeadColumn/TableHeadColumn";
import TableBody from "@components/Table/TableBody/TableBody";
import TableBodyRow from "@components/Table/TableBodyRow/TableBodyRow";
import TableBodyColumn from "@components/Table/TableBodyColumn/TableBodyColumn";

import styles from "./CountriesList.module.scss";
import { SortOptionsModel } from "Sorting";

interface CountriesListProps
{
	allCountriesData: Array<Country>
}

function CountriesList({ allCountriesData }: CountriesListProps)
{
	const { state } = useContext(RegionDemographicsContext);
	const [sortedAllCountriesData, setSortedAllCountriesData] = useState(allCountriesData);

	useEffect(() => {
		const sortedCountriesData = getSortedCountriesData(state.sortOptions, allCountriesData);
		setSortedAllCountriesData([ ...sortedCountriesData ]);
	}, [state.sortOptions, allCountriesData]);

	return (
		<div className={styles.main}>
			<Statistics>
				<StatisticsEntry
					title={`Countries in ${state.selectedRegion}`}
					value={getCountriesCount(state.selectedRegion, allCountriesData)}
				/>

				<StatisticsEntry
					title={"Population average"}
					value={`${getPopulationAverage(state.selectedRegion, allCountriesData)} Million`}
				/>

				<StatisticsEntry
					title={"Smallest country in area"}
					value={getSmallestAreaCountry(state.selectedRegion, allCountriesData)}
				/>

				<StatisticsEntry
					title={"Largest country in area"}
					value={getLargestAreaCountry(state.selectedRegion, allCountriesData)}
				/>
			</Statistics>

			<Table>
				<TableHead>
					<TableHeadRow>
						<TableHeadColumn
							title="Country"
							dataProperty="name"
							sortable={true}
						/>

						<TableHeadColumn
							title="Area (Sq Mi)"
							dataProperty="area"
							sortable={true}
						/>

						<TableHeadColumn
							title="Propulation (Millions)"
							dataProperty="population"
							sortable={true}
						/>
					</TableHeadRow>
				</TableHead>

				<TableBody>
					{sortedAllCountriesData.map(country => {
						if(country.region !== state.selectedRegion) {
							return null;
						}

						return (
							<TableBodyRow key={country.name}>
								<TableBodyColumn
									text={country.name}
								/>

								<TableBodyColumn
									text={getSquareMetricMiles(country.area)}
								/>

								<TableBodyColumn
									text={getPopulationInMillions(country.population)}
								/>
							</TableBodyRow>
						);
					})}
				</TableBody>
			</Table>
		</div>
	);
}

function getSortedCountriesData(sortOptions: SortOptionsModel, allCountriesData: Array<Country>): Array<Country>
{
	/**
	 * Todo: SortMode is not implemented yet as it
	 * currently is no use for it. But should be
	 * added in the future.
	 */
	if(sortOptions.sortDirection === "Ascending") {
		return getSortedAscending(sortOptions.dataPropertyName, allCountriesData);
	} else {
		return getSortedDescending(sortOptions.dataPropertyName, allCountriesData);
	}
}

function getSortedAscending(dataPropertyName: string, allCountriesData: Array<Country>): Array<Country>
{
	return allCountriesData
		.sort(
			(countryA, countryB) => {
				if(countryA[dataPropertyName] < countryB[dataPropertyName]) { return -1; }
				if(countryA[dataPropertyName] > countryB[dataPropertyName]) { return 1; }
				return 0;
			}
		);
}

function getSortedDescending(dataPropertyName: string, allCountriesData: Array<Country>): Array<Country>
{
	return allCountriesData
		.sort(
			(countryA, countryB) => {
				if(countryA[dataPropertyName] > countryB[dataPropertyName]) { return -1; }
				if(countryA[dataPropertyName] < countryB[dataPropertyName]) { return 1; }
				return 0;
			}
		);
}

function getCountriesCount(selectedRegion: Regions, allCountriesData: Array<Country>): number
{
	return allCountriesData
		.filter(country => country.region === selectedRegion)
		.length;
}

function getPopulationAverage(selectedRegion: Regions, allCountriesData: Array<Country>): string
{
	const countriesInRegion = 
		allCountriesData.filter(country => country.region === selectedRegion);

	const countriesCount = countriesInRegion.length;

	const summedPopulation = 
		countriesInRegion
		.reduce(
			(accumulator, country) => accumulator + country.population, 0
		);

	const populationAverage = summedPopulation / countriesCount;
	const populationInMillions = populationAverage / 1000000;

	return populationInMillions.toFixed(1);
}

function getSmallestAreaCountry(selectedRegion: Regions, allCountriesData: Array<Country>): string
{
	const countriesInRegionSortedByArea
		= allCountriesData
			.filter(country => country.region === selectedRegion)
			.sort((countryA, countryB) => countryA.area - countryB.area);

	const smallestCountryByArea = countriesInRegionSortedByArea[0];

	if(smallestCountryByArea) {
		return smallestCountryByArea.name
	} else {
		return "Unknown";
	}
}


function getLargestAreaCountry(selectedRegion: Regions, allCountriesData: Array<Country>): string
{
	const countriesInRegionSortedByArea
	= allCountriesData
		.filter(country => country.region === selectedRegion)
		.sort((countryA, countryB) => countryB.area - countryA.area);

	const largestCountryByArea = countriesInRegionSortedByArea[0];

	if(largestCountryByArea) {
		return largestCountryByArea.name
	} else {
		return "Unknown";
	}
}

function getSquareMetricMiles(squareKilometers: number): number
{
	return Math.floor(squareKilometers * 0.38610);
}

function getPopulationInMillions(population: number): string
{
	const populationInMillions = population / 1000000;
	return populationInMillions.toFixed(1);
}

export default CountriesList;