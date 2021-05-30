import styles from "./Table.module.scss";

interface TableProps
{
	children: any
}

function Table({ children }: TableProps)
{
	return (
		<table className={styles.main}>
			{children}
		</table>
	);
}

export default Table;