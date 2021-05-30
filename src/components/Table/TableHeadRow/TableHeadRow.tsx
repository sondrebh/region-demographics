import styles from "./TableHeadRow.module.scss";

interface TableHeadRowProps
{
	children: any
}

function TableHeadRow({ children }: TableHeadRowProps)
{
	return (
		<tr className={styles.main}>
			{children}
		</tr>
	);
}

export default TableHeadRow;