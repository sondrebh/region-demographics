import React, { useContext } from "react";

import RegionDemographicsContext from "@src/contexts/RegionDemographicsContext";
import AscendingIcon from "@icons/ascending.svg";
import DescendingIcon from "@icons/descending.svg";
import SortableIcon from "@icons/sortable.svg";
import styles from "./TableHeadColumn.module.scss";
import SortOptions from "@src/data/sorting/SortOptions";

interface TableHeadColumnProps
{
	title: string,
	dataProperty: string,
	sortable: boolean
}

function TableHeadColumn({ title, dataProperty, sortable }: TableHeadColumnProps)
{
	const { state, dispatch } = useContext(RegionDemographicsContext);

	function setSortOptions()
	{
		const sortIsAscending = (state.sortOptions.sortDirection === "Ascending");

		if(dataPropertyIsThis()) {
			if(sortIsAscending) {
				dispatch({
					type: "SetActiveSortOptions",
					data: new SortOptions(dataProperty, "Descending", "Auto")
				});
			} else {
				dispatch({
					type: "SetActiveSortOptions",
					data: new SortOptions()
				});
			}
		} else {
			dispatch({
				type: "SetActiveSortOptions",
				data: new SortOptions(dataProperty, "Ascending", "Auto")
			});
		}
	}

	function getCorrectIcon()
	{
		const sortIsAscending = (state.sortOptions.sortDirection === "Ascending");

		if(dataPropertyIsThis()) {
			if(sortIsAscending) {
				return <AscendingIcon />;
			} else {
				return <DescendingIcon />;
			}
		} else {
			return <SortableIcon />;
		}
	}

	const dataPropertyIsThis = () => (state.sortOptions.dataPropertyName === dataProperty);

	return (
		<>
			<td className={styles.main}>
				{sortable ? (
					<button
						onClick={setSortOptions}
						className={dataPropertyIsThis() ? styles.iconVisible : null}
					>
						{title}
						{getCorrectIcon()}
					</button>
				) : title}
			</td>
		</>
	);
}

export default TableHeadColumn;