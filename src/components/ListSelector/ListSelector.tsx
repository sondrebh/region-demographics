import React, { useContext } from "react";

import RegionDemographicsContext from "@contexts/RegionDemographicsContext";
import styles from "./ListSelector.module.scss";

function ListSelector()
{
	const {state, dispatch} = useContext(RegionDemographicsContext);

	return (
		<div className={styles.main}>
			<div className={styles.buttonContainers}>
				<button
					className={state.selectedList === "CountriesList" ? styles.buttonActive : ""}
					onClick={() => dispatch({ type: "SetSelectedListType", data: "CountriesList"})}
				>
					Countries
				</button>
				<button
					className={state.selectedList === "LanguagesList" ? styles.buttonActive : ""}
					onClick={() => dispatch({ type: "SetSelectedListType", data: "LanguagesList"})}
				>
					Languages
				</button>
				<hr className={styles.buttonsLine}></hr>
			</div>
		</div>
	);
}

export default ListSelector;