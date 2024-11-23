import styles from './quizzesPage.module.css';
import Quiz from '../components/quizzesPage/quiz';

export default function QuizzesPage() {
	return (
		<div className={styles.page}>
			<Quiz />
		</div>
	);
}
