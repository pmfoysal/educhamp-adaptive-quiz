import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLoader from './components/loaders/pageLoader';

const SigninPage = lazy(() => import('./pages/signinPage'));
const SignupPage = lazy(() => import('./pages/signupPage'));
const QuizzesPage = lazy(() => import('./pages/quizzesPage'));
const ResultsPage = lazy(() => import('./pages/resultsPage'));
const HomeLayout = lazy(() => import('./layouts/homeLayout'));
const AuthLayout = lazy(() => import('./layouts/authLayout'));
const NotFoundPage = lazy(() => import('./pages/notFoundPage'));
const AnalyticsPage = lazy(() => import('./pages/analyticsPage'));

export default function App() {
	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				<Route path='/' element={<HomeLayout />}>
					<Route path='quizzes' element={<QuizzesPage />} />
					<Route path='results' element={<ResultsPage />} />
					<Route path='analytics' element={<AnalyticsPage />} />
				</Route>
				<Route path='/' element={<AuthLayout />}>
					<Route path='signin' element={<SigninPage />} />
					<Route path='signup' element={<SignupPage />} />
				</Route>
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</Suspense>
	);
}
