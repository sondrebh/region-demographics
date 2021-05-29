import type { RegionDemographicsStateModel } from "StateModels";
import type { SortOptionsModel } from "Sorting";
import { ListType } from "Lists";

import SortOptions from "@data/sorting/SortOptions";

export default class RegionDemographicsState implements RegionDemographicsStateModel
{
	selectedRegion: string = null;
	selectedListType: ListType = ListType.Countries;
	sortOptions: SortOptionsModel = new SortOptions();
}