import Button from '../base/button';
import styles from './result.module.css';
import { useNavigate } from 'react-router-dom';

export default function Result({ onStart }) {
	const navigate = useNavigate();

	function handleResult() {
		navigate('/results');
	}

	return (
		<div className={styles.welcome}>
			<h1>You have already answered the quizzes!</h1>
			<p>
				Suggestions and reports are generated based on your submissions. You can take the quiz again if you want.
			</p>
			<div className={styles.buttons}>
				<Button color='prime' onClick={onStart}>
					Re-take Quiz
				</Button>
				<Button color='blue' onClick={handleResult}>
					See Results
				</Button>
			</div>
		</div>
	);
}
