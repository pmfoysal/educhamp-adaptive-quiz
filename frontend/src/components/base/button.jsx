import styles from './button.module.css';

export default function Button({ type, color, onClick, disabled, children }) {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			type={type || 'button'}
			className={`${styles.button} ${styles[color]}`}>
			{children}
		</button>
	);
}
