import styles from './authLayout.module.css';
import { useAuthContext } from '@/contexts/authContext';
import { Link, Navigate, NavLink, Outlet } from 'react-router-dom';

export default function AuthLayout() {
	const { user } = useAuthContext();

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
