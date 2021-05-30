import { Regions } from "ApiModels";
import { Lists } from "Lists";
import { SortOptionsModel } from "Sorting";

declare module "ReducersActions"
{
	import { RegionDemographicsReducerActionTypes } from "ReducersActions";

	export interface RegionDemographicsReducerAction
	{
		type: RegionDemographicsReducerActionTypes,
		data: SortOptionsModel | Lists | Regions
	}
}