import styles from './input.module.css';

export default function Input({ name, holder, type }) {
	return <input required name={name} type={type} placeholder={holder} className={styles.input} />;
}
