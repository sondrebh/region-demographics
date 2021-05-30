import styles from "./TableBodyRow.module.scss";

interface TableBodyRowProps
{
	children: any
}

function TableBodyRow({ children }: TableBodyRowProps)
{
	return (
		<tr className={styles.main}>
			{children}
		</tr>
	);
}

export default TableBodyRow;