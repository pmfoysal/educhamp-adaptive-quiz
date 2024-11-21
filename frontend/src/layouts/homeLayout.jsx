import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../contexts/authContext';

export default function HomeLayout() {
	const { user } = useAuthContext();

	if (!user) return <Navigate to='/signin' />;

	return (
		<main>
			<article>
				<aside>Sidebar</aside>
				<section>
					<Outlet />
				</section>
			</article>
		</main>
	);
}
