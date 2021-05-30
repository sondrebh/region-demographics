import type {
	RegionDemographicsStateModel as StateModel
} from "StateModels";

import type {
	RegionDemographicsReducerAction as Action
} from "ReducersActions";

import type { Regions } from "ApiModels";
import type { Lists } from "Lists";
import type { SortOptionsModel } from "Sorting";

/**
 * @param currentState Represents the current state object before 
 * the reducer sequence has run.
 * 
 * @param action Represents the type and data of the action the
 * reducer should preform.
 * 
 * @returns The new state.
 */
function RegionDemographicsReducer(currentState: StateModel, action: Action): StateModel
{
    switch (action.type)
	{
        case "SetSelectedRegion":
		{
			return {
				...currentState,
				selectedRegion: action.data as Regions
			};
        }

		case "SetSelectedListType":
		{
			return {
				...currentState,
				selectedList: action.data as Lists
			};
        }

		case "SetActiveSortOptions":
		{
			return {
				...currentState,
				sortOptions: action.data as SortOptionsModel
			};
        }

        default:
		{
            return currentState;
        }
    }
}

export default RegionDemographicsReducer;