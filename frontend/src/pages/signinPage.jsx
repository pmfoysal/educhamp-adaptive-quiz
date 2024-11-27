import cookie from 'js-cookie';
import toast from 'react-hot-toast';
import { Icon } from '@iconify/react';
import Form from '../components/base/form';
import Input from '../components/base/input';
import Button from '../components/base/button';
import Divider from '../components/base/divider';
import { useAuthContext } from '../contexts/authContext';
import { useSignin, useGoogleAuth } from '../hooks/useAuth';

export default function SigninPage() {
	const signinApi = useSignin();
	const { setUser } = useAuthContext();
	const googleAuthApi = useGoogleAuth();

	function handleSubmit(event) {
		event.preventDefault();
		const tId = toast.loading('Signing you in...');
		signinApi
			.mutateAsync({ email: event.target.email.value, password: event.target.password.value })
			.then(data => {
				setUser(data);
				cookie.set('token', data.token, { expires: 3 });
				toast.success('Successfuly signed in!', { id: tId });
			})
			.catch(() => {
				toast.remove(tId);
			});
	}

	function handleGoogle() {
		const tId = toast.loading('Signing you in...');
		googleAuthApi
			.mutateAsync()
			.then(data => {
				console.log({ data });
				toast.success('Successfuly signed in!', { id: tId });
			})
			.catch(() => {
				toast.remove(tId);
			});
	}

	return (
		<Form onSubmit={handleSubmit}>
			<h1>Welcome Back!</h1>
			<p>Please provide your credentials for Signin</p>
			<Input name='email' holder='Email ID' type='email' />
			<Input name='password' holder='Password' type='password' />
			<Button color='prime' type='submit' isLoading={signinApi.isPending} isDisabled={googleAuthApi.isPending}>
				Signin
			</Button>
			<Divider />
			<Button
				color='second'
				onClick={handleGoogle}
				isDisabled={signinApi.isPending}
				isLoading={googleAuthApi.isPending}>
				<Icon icon='flat-color-icons:google' />
				Signin with Google
			</Button>
		</Form>
	);
}
