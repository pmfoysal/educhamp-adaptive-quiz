import cookie from 'js-cookie';
import toast from 'react-hot-toast';
import { Icon } from '@iconify/react';
import Form from '../components/base/form';
import Input from '../components/base/input';
import Button from '../components/base/button';
import Divider from '../components/base/divider';
import { useAuthContext } from '../contexts/authContext';
import { useSignup, useGoogleAuth } from '../hooks/useAuth';

export default function SignupPage() {
	const signupApi = useSignup();
	const { setUser } = useAuthContext();
	const googleAuthApi = useGoogleAuth();

	function handleSubmit(event) {
		event.preventDefault();
		const tId = toast.loading('Signing you up...');
		signupApi
			.mutateAsync({
				name: event.target.name.value,
				email: event.target.email.value,
				password: event.target.password.value,
			})
			.then(data => {
				setUser(data);
				cookie.set('token', data.token, { expires: 3 });
				toast.success('Successfuly signed up!', { id: tId });
			})
			.catch(() => {
				toast.remove(tId);
			});
	}

	function handleGoogle() {
		const tId = toast.loading('Signing you up...');
		googleAuthApi
			.mutateAsync()
			.then(data => {
				console.log({ data });
				toast.success('Successfuly signed up!', { id: tId });
			})
			.catch(() => {
				toast.remove(tId);
			});
	}

	return (
		<Form onSubmit={handleSubmit}>
			<h1>Create an account!</h1>
			<p>Please provide your information as requested</p>
			<Input name='name' holder='Full Name' type='text' />
			<Input name='email' holder='Email ID' type='email' />
			<Input name='password' holder='Password' type='password' />
			<Button color='prime' type='submit' isLoading={signupApi.isPending} isDisabled={googleAuthApi.isPending}>
				Signup
			</Button>
			<Divider />
			<Button
				color='second'
				onClick={handleGoogle}
				isDisabled={signupApi.isPending}
				isLoading={googleAuthApi.isPending}>
				<Icon icon='flat-color-icons:google' />
				Signup with Google
			</Button>
		</Form>
	);
}
