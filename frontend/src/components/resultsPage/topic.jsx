import Quiz from '../quizzesPage/quiz';
import styles from './topic.module.css';

export default function Topic() {
	return (
		<div className={styles.topic}>
			<h1 className={styles.title}>
				Topic: <span>Calculus</span>
			</h1>
			<p className={styles.score}>
				Your Score: <span>05/10</span>
			</p>
			<div className={styles.list}>
				<Quiz />
				<Quiz />
				<Quiz />
				<Quiz />
				<Quiz />
			</div>
		</div>
	);
}
