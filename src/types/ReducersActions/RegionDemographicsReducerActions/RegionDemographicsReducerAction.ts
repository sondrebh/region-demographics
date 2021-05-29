declare module "ReducersActions"
{
	import { RegionDemographicsReducerActionTypes } from "ReducersActions";

	export interface RegionDemographicsReducerAction
	{
		Type: RegionDemographicsReducerActionTypes,
		Data: any
	}
}