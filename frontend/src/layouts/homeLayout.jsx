import { Icon } from '@iconify/react';
import styles from './homeLayout.module.css';
import AuthUser from '../components/misc/authUser';
import { useAuthContext } from '../contexts/authContext';
import { Navigate, NavLink, Outlet } from 'react-router-dom';

export default function HomeLayout() {
	const { user, signout } = useAuthContext();

	if (!user) return <Navigate to='/signin' />;

	return (
		<main className={styles.page}>
			<article className={styles.main}>
				<header className={styles.header}>
					<h1>
						Adapt<span>Quizz</span>
					</h1>
					<div className={styles.user}>
						<AuthUser user={user} signout={signout} />
					</div>
				</header>
				<div className={styles.body}>
					<aside className={styles.sidebar}>
						<nav>
							<NavLink to='/quizzes'>
								<Icon icon='fluent:text-bullet-list-square-28-filled' />
								Quizzes
							</NavLink>
							<NavLink to='/results'>
								<Icon icon='fluent:notepad-sparkle-28-filled' />
								Results
							</NavLink>
							<NavLink to='/analytics'>
								<Icon icon='fluent:data-usage-28-filled' />
								Analytics
							</NavLink>
						</nav>
					</aside>
					<section className={styles.content}>
						<Outlet />
					</section>
				</div>
			</article>
		</main>
	);
}
