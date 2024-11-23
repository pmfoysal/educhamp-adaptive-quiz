import styles from './quiz.module.css';

export default function Quiz() {
	return (
		<div className={styles.quiz}>
			<h1 className={styles.title}>
				01. Which of the following best describes the derivative of a function in calculus?
				<span className={`${styles.tag} ${styles.topic}`}>Calculus</span>{' '}
				<span className={`${styles.tag} ${styles['easy']}`}>Easy</span>
			</h1>
			<fieldset className={styles.options}>
				<label className={styles.option}>
					<input type='radio' name='' />
					The slope of the tangent line to the function at a given point.
				</label>
				<label className={styles.option}>
					<input type='radio' name='' />
					The total area under the curve of the function.
				</label>
				<label className={styles.option}>
					<input type='radio' name='' />
					The maximum value of the function.
				</label>
				<label className={styles.option}>
					<input type='radio' name='' />
					The value of the function at a given point.
				</label>
			</fieldset>
		</div>
	);
}
