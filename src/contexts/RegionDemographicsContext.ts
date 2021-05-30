import { createContext } from "react";
import { RegionDemographicsContextModel } from "StateModels";

const context: RegionDemographicsContextModel = {
	state: null,
	dispatch: null
};
const RegionDemographicsContext = createContext(context);

export default RegionDemographicsContext;
