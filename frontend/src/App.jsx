import { Suspense } from 'react';
import Auth from './layouts/auth';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Quizzes from './pages/quizzes';
import Dashboard from './layouts/dashboard';
import { Routes, Route } from 'react-router-dom';

export default function App() {
	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				<Route path='/dashboard' element={<Dashboard />}>
					<Route path='quizzes' element={<Quizzes />} />
				</Route>
				<Route path='/auth' element={<Auth />}>
					<Route path='signin' element={<Signin />} />
					<Route path='signup' element={<Signup />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}
