import styles from './button.module.css';
import { RotatingLines } from 'react-loader-spinner';

export default function Button({ type, color, onClick, isDisabled, isLoading, children }) {
	return (
		<button
			onClick={onClick}
			type={type || 'button'}
			disabled={isDisabled || isLoading}
			className={`${styles.button} ${styles[color]}`}>
			{isLoading ? (
				<RotatingLines
					width='20'
					height='20'
					color='white'
					visible={true}
					strokeWidth='5'
					animationDuration='0.75'
				/>
			) : (
				children
			)}
		</button>
	);
}
