import styles from "./TableBodyColumn.module.scss";

interface TableBodyColumnProps
{
	text: any
}

function TableBodyColumn({ text }: TableBodyColumnProps)
{
	return <td className={styles.main}>{text}</td>;
}

export default TableBodyColumn;