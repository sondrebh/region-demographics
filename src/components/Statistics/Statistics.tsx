import React from "react";

import styles from "./Statistics.module.scss";

interface StatisticsProps
{
	children: any
}

function Statistics({ children }: StatisticsProps)
{
	const noChildren = (children.length < 1);

	if(noChildren) {
		return null;
	}

	return (
		<div className={styles.main}>
			{children}
		</div>
	);
}

export default Statistics;