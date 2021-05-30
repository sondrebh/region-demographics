import { 
	SortOptionsModel,
	SortDirection,
	SortMode
} from "Sorting";

const defaultSortPropertyName = "name"; //null for no default

/**
 * Holds information regarding what data to sort, how
 * to sort it and in what direction.
 */
export default class SortOptions implements SortOptionsModel
{
	dataPropertyName: string;
	sortDirection: SortDirection;
	sortMode: SortMode;

	constructor(
		dataPropertyName: string = defaultSortPropertyName,
		sortDirection: SortDirection = "Ascending",
		sortMode: SortMode = "Auto"
	) {
		this.dataPropertyName = dataPropertyName;
		this.sortDirection = sortDirection;
		this.sortMode = sortMode;
	}
}