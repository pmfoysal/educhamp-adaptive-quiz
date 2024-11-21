import styles from './form.module.css';

export default function Form({ onSubmit, children }) {
	return (
		<form className={styles.form} onSubmit={onSubmit}>
			{children}
		</form>
	);
}
