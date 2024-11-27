import Button from '../components/base/button';
import styles from './notFoundPage.module.css';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
	const navigate = useNavigate();

	function handleClick() {
		navigate('/', { replace: true });
	}

	return (
		<main className={styles.page}>
			<h1>
				<span>Opps!</span> Looks like you have lost the track
			</h1>
			<Button color='prime' onClick={handleClick}>
				Back to Home
			</Button>
		</main>
	);
}
