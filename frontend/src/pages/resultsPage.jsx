import styles from './resultsPage.module.css';
import Topic from '../components/resultsPage/topic';
import { useAnswerReport } from '../hooks/useAnswers';
import getTotalScore from '../utilities/getTotalScore';
import { useAuthContext } from '../contexts/authContext';
import { useTotalQuestion } from '../hooks/useQuestions';
import PageLoader from '../components/loaders/pageLoader';

export default function ResultsPage() {
	const { user } = useAuthContext();
	const totalApi = useTotalQuestion();
	const answersApi = useAnswerReport(user?._id);

	if (answersApi.isPending || totalApi.isPending) return <PageLoader />;

	if (!answersApi.data?.length) {
		return (
			<div>
				<h1>No Results to show!</h1>
				<p>You haven&apos;t submitted quiz answers.</p>
			</div>
		);
	}

	const score = getTotalScore(answersApi.data);

	return (
		<div className={styles.page}>
			<h1 className={styles.title}>
				Your Total Score:{' '}
				<span>
					{score}/{totalApi.data?.count || 0}
				</span>
			</h1>
			<div className={styles.list}>
				{answersApi.data.map(item => (
					<Topic key={item.topic} answer={item} />
				))}
			</div>
		</div>
	);
}
