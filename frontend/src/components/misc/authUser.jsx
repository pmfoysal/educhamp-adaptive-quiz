import { useState } from 'react';
import { Icon } from '@iconify/react';
import styles from './authUser.module.css';
import { NavLink } from 'react-router-dom';

export default function AuthUser({ user }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>
				Hello, <span>{user.name.split(' ')[0]}</span>
			</h2>
			<img
				alt={user.name}
				className={styles.user}
				onClick={() => setIsOpen(prev => !prev)}
				src='https://avatar.iran.liara.run/public'
			/>
			<div className={`${styles.window} ${isOpen && styles.isOpen}`}>
				<img className={styles.avatar} src='https://avatar.iran.liara.run/public' alt={user.name} />
				<h2 className={styles.name}>{user.name}</h2>
				<nav className={styles.buttons}>
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
					<button className={styles.active}>
						<Icon icon='fluent:door-arrow-right-28-filled' />
						Signout
					</button>
				</nav>
			</div>
		</div>
	);
}
