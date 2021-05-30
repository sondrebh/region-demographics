import type { RegionDemographicsStateModel } from "StateModels";
import type { SortOptionsModel } from "Sorting";
import { Lists } from "Lists";

import SortOptions from "@data/sorting/SortOptions";

export default class RegionDemographicsState implements RegionDemographicsStateModel
{
	selectedRegion: string = null;
	selectedList: Lists = "CountriesList";
	sortOptions: SortOptionsModel = new SortOptions();
}