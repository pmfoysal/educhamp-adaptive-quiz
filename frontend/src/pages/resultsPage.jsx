import styles from './resultsPage.module.css';
import Topic from '../components/resultsPage/topic';

export default function ResultsPage() {
	return (
		<div className={styles.page}>
			<h1 className={styles.title}>
				Your Total Score: <span>13/20</span>
			</h1>
			<div className={styles.list}>
				<Topic />
				<Topic />
				<Topic />
			</div>
		</div>
	);
}
