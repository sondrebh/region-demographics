declare module "StateModels"
{
	import type { Lists } from "Lists";
	import type { SortOptionsModel } from "Sorting";
	
	export interface RegionDemographicsStateModel
	{
		selectedRegion: string,
		selectedList: Lists,
		sortOptions: SortOptionsModel,
	}
}