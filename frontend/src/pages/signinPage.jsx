import styles from './signinPage.module.css';
import Input from '../components/base/input';

export default function SigninPage() {
	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<h1>Welcome Back!</h1>
			<p>Please provide your credentials for Signin</p>
			<Input name='email' holder='Email ID' type='email' />
			<Input name='password' holder='Password' type='password' />
			<button className={styles.button} type='submit'>
				Signin
			</button>
		</form>
	);
}
