import { Dispatch } from "react";
import { RegionDemographicsStateModel } from "StateModels";
import { RegionDemographicsReducerAction } from "ReducersActions";

declare module "StateModels"
{
	export interface RegionDemographicsContextModel
	{
		state: RegionDemographicsStateModel,
		dispatch(action: RegionDemographicsReducerAction)
	}
}