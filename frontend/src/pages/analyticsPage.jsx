import styles from './analyticsPage.module.css';
import PieChart from '../components/analyticsPage/pieChart';

export default function AnalyticsPage() {
	return (
		<div className={styles.page}>
			<div className={styles.container}>
				<h1 className={styles.title}>Improvement Suggestions:</h1>
				<div className={styles.paras}>
					<p>
						<strong>Calculus:</strong> Great work! To further solidify your understanding, explore advanced topics
						like integration and real-world applications.
					</p>
					<p>
						<strong>Trigonometry:</strong> Spend more time understanding trigonometric identities and their
						applications. Use flashcards for formulas and solve practice questions regularly.
					</p>
					<p>
						<strong>Geometry:</strong> Review concepts of angles, triangles, and circles. Try drawing diagrams for
						visualization and solving related problems.
					</p>
				</div>
				<div className={styles.charts}>
					<PieChart />
					<PieChart />
					<PieChart />
					<PieChart />
					<PieChart />
					<PieChart />
				</div>
			</div>
		</div>
	);
}
