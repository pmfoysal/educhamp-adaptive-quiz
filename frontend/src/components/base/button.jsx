import styles from './button.module.css';

export default function Button({ type, color, onClick, children }) {
	return (
		<button className={`${styles.button} ${styles[color]}`} type={type || 'button'} onClick={onClick}>
			{children}
		</button>
	);
}
