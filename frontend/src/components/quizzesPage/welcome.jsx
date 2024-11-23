import Button from '../base/button';
import styles from './welcome.module.css';

export default function Welcome({ onStart }) {
	return (
		<div className={styles.welcome}>
			<h1>Welcome to the adaptive quiz platform!</h1>
			<p>
				You will be given a total of 20 quizzes consecutively. The difficulty level of the next quiz will be
				determined based on your performance. Are you ready to start?
			</p>
			<Button color='prime' onClick={onStart}>
				Start Quiz
			</Button>
		</div>
	);
}
