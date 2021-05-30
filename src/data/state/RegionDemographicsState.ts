import type { RegionDemographicsStateModel } from "StateModels";
import type { Regions } from "ApiModels";
import type { Lists } from "Lists";
import type { SortOptionsModel } from "Sorting";

import SortOptions from "@data/sorting/SortOptions";

export default class RegionDemographicsState implements RegionDemographicsStateModel
{
	selectedRegion: Regions = null;
	selectedList: Lists = "CountriesList";
	sortOptions: SortOptionsModel = new SortOptions();
}