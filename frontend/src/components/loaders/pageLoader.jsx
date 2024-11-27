import styles from './pageLoader.module.css';
import { Hearts } from 'react-loader-spinner';

export default function PageLoader() {
	return (
		<main className={styles.page}>
			<article className={styles.content}>
				<Hearts height='100' width='100' color='#ef4444' visible={true} />
				<h1>
					Adapt<span>Quiz</span>
				</h1>
			</article>
		</main>
	);
}
