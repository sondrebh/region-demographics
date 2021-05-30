import styles from "./TableBody.module.scss";

interface TableBodyProps
{
	children: any
}

function TableBody({ children }: TableBodyProps)
{
	return (
		<tbody className={styles.main}>
			{children}
		</tbody>
	);
}

export default TableBody;