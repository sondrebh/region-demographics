declare module "StateModels"
{
	import type { ListType } from "Lists";
	import type { SortOptionsModel } from "Sorting";
	
	export interface RegionDemographicsStateModel
	{
		selectedRegion: string,
		selectedListType: ListType,
		sortOptions: SortOptionsModel,
	}
}