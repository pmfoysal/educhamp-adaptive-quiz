import { Fragment, useState } from 'react';
import styles from './quizzesPage.module.css';
import Button from '../components/base/button';
import Quiz from '../components/quizzesPage/quiz';
import Result from '../components/quizzesPage/result';
import Welcome from '../components/quizzesPage/welcome';

export default function QuizzesPage() {
	const [currQuiz, setCurrQuiz] = useState(0);
	const [totalQuiz, setTotalQuiz] = useState(10);
	const [hasResult, setHasResult] = useState(true);

	function handleRestart() {
		setCurrQuiz(0);
		setHasResult(false);
	}

	function handlePrev() {
		setCurrQuiz(prev => (prev > 0 ? prev - 1 : prev));
	}

	function handleNext() {
		setCurrQuiz(prev => (prev < totalQuiz ? prev + 1 : prev));
	}

	function handleSubmit() {}

	return (
		<div className={styles.page}>
			{hasResult ? (
				<Result onStart={handleRestart} />
			) : (
				<Fragment>
					{!currQuiz ? (
						<Welcome onStart={() => setCurrQuiz(1)} />
					) : (
						<div>
							<Quiz />
							<p className={styles.note}>You have completed 0 of 20 quizzes!</p>
							<div className={styles.buttons}>
								<Button color='neutral' disabled={!currQuiz} onClick={handlePrev}>
									Prev
								</Button>
								{currQuiz === totalQuiz ? (
									<Button color='blue' onClick={handleSubmit}>
										Submit
									</Button>
								) : (
									<Button color='prime' onClick={handleNext}>
										Next
									</Button>
								)}
							</div>
						</div>
					)}
				</Fragment>
			)}
		</div>
	);
}
