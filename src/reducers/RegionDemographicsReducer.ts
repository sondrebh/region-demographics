import {
	RegionDemographicsStateModel as StateModel
} from "StateModels";

import {
	RegionDemographicsReducerAction as Action,
	RegionDemographicsReducerActionTypes as ActionTypes
} from "ReducersActions";

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
    switch (action.Type)
	{
        case "SetSelectedRegion":
		{
			return {
				...currentState,
				selectedRegion: action.Data
			};
        }

		case "SetSelectedListType":
		{
			return {
				...currentState,
				selectedListType: action.Data
			};
        }

		case "SetActiveSortOptions":
		{
			return {
				...currentState,
				sortOptions: action.Data
			};
        }

        default:
		{
            return currentState;
        }
    }
}

export default RegionDemographicsReducer;