import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const SigninPage = lazy(() => import('./pages/signinPage'));
const SignupPage = lazy(() => import('./pages/signupPage'));
const AuthLayout = lazy(() => import('./layouts/authLayout'));
const QuizzesPage = lazy(() => import('./pages/quizzesPage'));
const NotFoundPage = lazy(() => import('./pages/notFoundPage'));
const DashboardLayout = lazy(() => import('./layouts/dashboardLayout'));
const PageLoader = lazy(() => import('./components/loaders/pageLoader'));

export default function App() {
	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				<Route path='/dashboard' element={<DashboardLayout />}>
					<Route path='quizzes' element={<QuizzesPage />} />
				</Route>
				<Route path='/auth' element={<AuthLayout />}>
					<Route path='signin' element={<SigninPage />} />
					<Route path='signup' element={<SignupPage />} />
				</Route>
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</Suspense>
	);
}
