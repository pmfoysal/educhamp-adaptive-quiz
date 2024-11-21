import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../contexts/authContext';

export default function AuthChecker() {
	const { user } = useAuthContext();

	if (user) return <Outlet />;
	return <Navigate to='/auth/signin' />;
}
