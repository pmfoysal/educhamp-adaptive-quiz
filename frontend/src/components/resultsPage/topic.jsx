import Quiz from '../quizzesPage/quiz';
import styles from './topic.module.css';

export default function Topic({ answer }) {
	return (
		<div className={styles.topic}>
			<h1 className={styles.title}>
				Topic: <span>{answer.topic}</span>
			</h1>
			<p className={styles.score}>
				Your Score:{' '}
				<span>
					{answer.totalScore}/{answer.totalQuestion}
				</span>
			</p>
			<div className={styles.list}>
				{answer.questions.map((item, index) => (
					<Quiz key={item.questionId} count={index + 1} data={item} hasResult />
				))}
			</div>
		</div>
	);
}
