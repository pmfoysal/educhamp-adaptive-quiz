import styles from './analyticsPage.module.css';
import { useAnswerReport } from '../hooks/useAnswers';
import { useAuthContext } from '../contexts/authContext';
import PageLoader from '../components/loaders/pageLoader';
import PieChart from '../components/analyticsPage/pieChart';

export default function AnalyticsPage() {
	const { user } = useAuthContext();
	const answersApi = useAnswerReport(user?._id);

	if (answersApi.isPending) return <PageLoader />;

	if (!answersApi.data?.length) {
		return (
			<div>
				<h1>No Analytics to show!</h1>
				<p>You haven&apos;t submitted quiz answers.</p>
			</div>
		);
	}

	return (
		<div className={styles.page}>
			<div className={styles.container}>
				<div className={styles.charts}>
					{answersApi.data.map(item => (
						<PieChart key={item.topic} data={item} />
					))}
				</div>
			</div>
		</div>
	);
}
