declare module "StateModels"
{
	import type { Lists } from "Lists";
	import type { SortOptionsModel } from "Sorting";
	
	export interface RegionDemographicsStateModel
	{
		selectedRegion: Regions,
		selectedList: Lists,
		sortOptions: SortOptionsModel,
	}
}