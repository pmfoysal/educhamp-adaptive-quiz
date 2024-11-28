import { Fragment } from 'react';
import styles from './quiz.module.css';

export default function Quiz({ data, hasResult, count, setQuizList }) {
	function handleSelect(index) {
		return event => {
			if (event.target.checked) {
				setQuizList(prev =>
					prev.map(item => {
						if (item._id !== data._id) return item;
						return {
							...item,
							selectedOption: index + 1,
						};
					})
				);
			}
		};
	}

	function getColorName(selectedOption, correctOption, index) {
		if (selectedOption === correctOption) {
			if (correctOption === index + 1) return styles.isCorrect;
			return '';
		}
		if (correctOption === index + 1) return styles.isCorrect;
		if (selectedOption === index + 1) return styles.isWrong;
		return '';
	}

	return (
		<div className={styles.quiz}>
			<h1 className={styles.title}>
				{String(count).padStart(2, '0')}. {data.title}
				<div className={styles.tags}>
					<span className={`${styles.tag} ${styles.topic}`}>{data.topic}</span>{' '}
					<span className={`${styles.tag} ${styles[data.difficulty]}`}>{data.difficulty}</span>
				</div>
			</h1>
			<fieldset className={styles.options}>
				{data.options.map((item, index) => (
					<Fragment key={index}>
						{hasResult ? (
							<label
								key={index}
								className={`${styles.option} ${getColorName(data.selectedOption, data.correctOption, index)}`}>
								<input
									readOnly
									type='radio'
									checked={data.selectedOption === index + 1 || data.correctOption === index + 1}
								/>
								{item}
							</label>
						) : (
							<label key={index} className={styles.option}>
								<input
									type='radio'
									name={data._id}
									onChange={handleSelect(index)}
									checked={data.selectedOption === index + 1}
								/>
								{item}
							</label>
						)}
					</Fragment>
				))}
			</fieldset>
		</div>
	);
}
