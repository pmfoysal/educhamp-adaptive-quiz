import styles from './quiz.module.css';

export default function Quiz({ data, count, setQuizList }) {
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

	return (
		<div className={styles.quiz}>
			<h1 className={styles.title}>
				{String(count).padStart(2, '0')}. {data.title}
				<span className={`${styles.tag} ${styles.topic}`}>{data.topic}</span>{' '}
				<span className={`${styles.tag} ${styles[data.difficulty]}`}>{data.difficulty}</span>
			</h1>
			<fieldset className={styles.options}>
				{data.options.map((item, index) => (
					<label key={index} className={styles.option}>
						<input
							type='radio'
							name={data._id}
							onChange={handleSelect(index)}
							checked={data.selectedOption === index + 1}
						/>
						{item}
					</label>
				))}
			</fieldset>
		</div>
	);
}
