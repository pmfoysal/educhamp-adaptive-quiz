import { Icon } from '@iconify/react';
import styles from './signinPage.module.css';
import Input from '../components/base/input';
import Button from '../components/base/button';
import Divider from '../components/base/divider';

export default function SigninPage() {
	function handleSubmit(event) {
		event.preventDefault();
	}

	function handleGoogle() {}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<h1>Welcome Back!</h1>
			<p>Please provide your credentials for Signin</p>
			<Input name='email' holder='Email ID' type='email' />
			<Input name='password' holder='Password' type='password' />
			<Button color='prime' type='submit'>
				Signin
			</Button>
			<Divider />
			<Button color='second' onClick={handleGoogle}>
				<Icon icon='flat-color-icons:google' />
				Signin with Google
			</Button>
		</form>
	);
}
