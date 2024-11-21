import styles from './input.module.css';

export default function Input({ name, holder, type, value, setValue }) {
	return (
		<input
			name={name}
			type={type}
			value={value}
			placeholder={holder}
			className={styles.input}
			onChange={e => setValue(e.target.value)}
		/>
	);
}
