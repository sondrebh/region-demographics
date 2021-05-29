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
        case ActionTypes.SetSelectedRegion:
		{
            const newState = setSelectedRegion(currentState, action.Data);
			return newState;
        }

        default:
		{
            return currentState;
        }
    }
}

function setSelectedRegion(currentState: StateModel, newRegion: string): StateModel
{
	const newState: StateModel = {
		...currentState,
		selectedRegion: newRegion
	};

	return newState;
}

export default RegionDemographicsReducer;