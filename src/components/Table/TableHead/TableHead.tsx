import styles from "./TableHead.module.scss";

interface TableHeadProps
{
	children: any
}

function TableHead({ children }: TableHeadProps)
{
	return (
		<thead className={styles.main}>
			{children}
		</thead>
	);
}

export default TableHead;