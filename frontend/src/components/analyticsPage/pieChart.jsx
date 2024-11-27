import styles from './pieChart.module.css';
import { Chart } from 'react-google-charts';

export default function PieChart({ data }) {
	const stats = [
		['Name', 'Value'],
		['Correct', data.totalScore],
		['Incorrect', data.totalQuestion - data.totalScore],
	];

	return (
		<div className={styles.container}>
			<Chart
				data={stats}
				width={'100%'}
				height={'275px'}
				chartType='PieChart'
				options={{
					title: data.topic,
					backgroundColor: 'transparent',
					colors: ['#3b82f6', '#ef4444'],
					titleTextStyle: { color: '#1e293b', fontSize: 18 },
					legend: { position: 'bottom', alignment: 'center', textStyle: { color: '#1e293b', fontSize: 14 } },
				}}
			/>
			<p>
				<strong>Suggestions:</strong> {data.suggestions}
			</p>
		</div>
	);
}
