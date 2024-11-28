import cookie from 'js-cookie';
import { useEffect } from 'react';
import styles from './authLayout.module.css';
import { useAuthContext } from '@/contexts/authContext';
import { Navigate, NavLink, Outlet, useSearchParams } from 'react-router-dom';

export default function AuthLayout() {
	const [params] = useSearchParams();
	const token = params.get('token');
	const { user, refetch } = useAuthContext();

	useEffect(() => {
		if (token) {
			cookie.set('token', token);
			refetch();
		}
	}, [token]);

	if (user) return <Navigate to='/quizzes' />;

	return (
		<main className={styles.page}>
			<section className={styles.main}>
				<header className={styles.header}>
					<NavLink to='/signin'>Signin</NavLink>
					<NavLink to='/signup'>Signup</NavLink>
				</header>
				<Outlet />
			</section>
		</main>
	);
}
