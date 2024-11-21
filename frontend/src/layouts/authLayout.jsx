import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../contexts/authContext';

export default function AuthLayout() {
	const { user } = useAuthContext();

	if (!user) return <Outlet />;
	return <Navigate to='/dashboard/quizzes' />;
}
