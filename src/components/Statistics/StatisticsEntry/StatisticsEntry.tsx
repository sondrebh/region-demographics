import React from "react";

import styles from "./StatisticsEntry.module.scss";

interface StatisticsEntryProps
{
	title: string,
	value: any
}

function StatisticsEntry({ title, value }: StatisticsEntryProps)
{
	return (
		<div className={styles.main}>
			<p className={styles.title}>{title}</p>
			<p className={styles.value}>{value}</p>
		</div>
	);
}

export default StatisticsEntry;