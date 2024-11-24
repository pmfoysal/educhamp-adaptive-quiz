import styles from './pieChart.module.css';
import { Chart } from 'react-google-charts';

export default function PieChart() {
	const data = [
		['Name', 'Value'],
		['Correct', 9],
		['Incorrect', 2],
	];

	return (
		<div className={styles.container}>
			<Chart
				data={data}
				width={'100%'}
				height={'250px'}
				chartType='PieChart'
				options={{
					title: 'Calculus',
					backgroundColor: 'transparent',
					colors: ['#3b82f6', '#ef4444'],
					titleTextStyle: { color: '#1e293b', fontSize: 18 },
					legend: { position: 'bottom', alignment: 'center', textStyle: { color: '#1e293b', fontSize: 14 } },
				}}
			/>
		</div>
	);
}
