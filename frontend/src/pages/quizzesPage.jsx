import toast from 'react-hot-toast';
import styles from './quizzesPage.module.css';
import Button from '../components/base/button';
import Quiz from '../components/quizzesPage/quiz';
import { Fragment, useEffect, useState } from 'react';
import Result from '../components/quizzesPage/result';
import Welcome from '../components/quizzesPage/welcome';
import { useAuthContext } from '../contexts/authContext';
import { useQuizContext } from '../contexts/quizContext';
import PageLoader from '../components/loaders/pageLoader';
import { useNextQuestion, useTotalQuestion } from '../hooks/useQuestions';
import { useAnswerReport, useGetAnswer, useSubmitAnswer } from '../hooks/useAnswers';

export default function QuizzesPage() {
	const answerApi = useGetAnswer();
	const { user } = useAuthContext();
	const submitApi = useSubmitAnswer();
	const totalApi = useTotalQuestion();
	const reportsApi = useAnswerReport();
	const nextQuizApi = useNextQuestion();
	const { quizList, setQuizList } = useQuizContext();

	const [currQuiz, setCurrQuiz] = useState(0);
	const [totalQuiz, setTotalQuiz] = useState(0);
	const [hasResult, setHasResult] = useState(false);

	function handleRestart() {
		setCurrQuiz(0);
		setHasResult(false);
	}

	function handlePrev() {
		setCurrQuiz(prev => (prev > 0 ? prev - 1 : prev));
	}

	function handleNext() {
		if (currQuiz < quizList.length) setCurrQuiz(prev => (prev < totalQuiz ? prev + 1 : prev));
		else {
			const currQuestion = quizList.at(-1);
			nextQuizApi
				.mutateAsync({
					currId: currQuestion._id,
					currOption: currQuestion.selectedOption,
					answeredIds: quizList.map(item => item._id),
				})
				.then(data => {
					if (data?._id) {
						setQuizList(prev => [...prev, { ...data, selectedOption: null }]);
						setCurrQuiz(prev => (prev < totalQuiz ? prev + 1 : prev));
					}
				});
		}
	}

	function handleStartQuiz() {
		nextQuizApi.mutateAsync({ currId: '', currOption: null, answeredIds: [] }).then(data => {
			if (data?._id) {
				setQuizList([{ ...data, selectedOption: null }]);
				setCurrQuiz(1);
			}
		});
	}

	function handleSubmit() {
		const tId = toast.loading('Submitting your answers...');
		submitApi
			.mutateAsync({
				userId: user._id,
				results: quizList.map(item => ({
					questionId: item._id,
					selectedOption: item.selectedOption,
				})),
			})
			.then(() => {
				toast.success('Successfuly submitted!', { id: tId });
				setCurrQuiz(0);
				answerApi.refetch();
				reportsApi.refetch();
			})
			.catch(error => {
				toast.error(error.message, { id: tId });
			});
	}

	useEffect(() => {
		if (totalApi.data?.count) setTotalQuiz(totalApi.data.count);
	}, [totalApi.data]);

	useEffect(() => {
		if (answerApi.data?.results) setHasResult(true);
	}, [answerApi.data]);

	const isLoading = totalApi.isPending || answerApi.isPending;

	if (isLoading) return <PageLoader />;

	return (
		<div className={styles.page}>
			{hasResult ? (
				<Result onStart={handleRestart} />
			) : (
				<Fragment>
					{!currQuiz ? (
						<Welcome onStart={handleStartQuiz} />
					) : (
						<div>
							{quizList.length ? (
								<Quiz count={currQuiz} data={quizList[currQuiz - 1]} setQuizList={setQuizList} />
							) : null}
							<p className={styles.note}>
								You have completed {quizList.filter(item => item.selectedOption !== null).length} of 20 quizzes!
							</p>
							<div className={styles.buttons}>
								<Button
									color='neutral'
									disabled={!currQuiz}
									onClick={handlePrev}
									isDisabled={nextQuizApi.isPending}>
									Prev
								</Button>
								{currQuiz === totalQuiz ? (
									<Button color='blue' onClick={handleSubmit}>
										Submit
									</Button>
								) : (
									<Button color='prime' onClick={handleNext} isLoading={nextQuizApi.isPending}>
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
