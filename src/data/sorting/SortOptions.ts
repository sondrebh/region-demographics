import { 
	SortOptionsModel,
	SortDirection,
	SortMode
} from "Sorting";

/**
 * Holds information regarding what data to sort, how
 * to sort it and in what direction.
 */
export default class SortOptions implements SortOptionsModel
{
	dataPropertyName: string = null;
	sortDirection: SortDirection = SortDirection.Ascending;
	sortMode: SortMode = SortMode.Auto;

	constructor(
		dataPropertyName?: string,
		sortDirection?: SortDirection,
		sortMode?: SortMode
	) {}
}