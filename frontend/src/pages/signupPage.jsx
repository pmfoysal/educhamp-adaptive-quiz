import cookie from 'js-cookie';
import toast from 'react-hot-toast';
import { Icon } from '@iconify/react';
import Form from '../components/base/form';
import Input from '../components/base/input';
import { useSignup } from '../hooks/useAuth';
import Button from '../components/base/button';
import Divider from '../components/base/divider';
import { useAuthContext } from '../contexts/authContext';

export default function SignupPage() {
	const signupApi = useSignup();
	const { setUser } = useAuthContext();

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
		window.open(`${import.meta.env.VITE_BACKEND_URL}/api/auth/google`, '_self');
	}

	return (
		<Form onSubmit={handleSubmit}>
			<h1>Create an account!</h1>
			<p>Please provide your information as requested</p>
			<Input name='name' holder='Full Name' type='text' />
			<Input name='email' holder='Email ID' type='email' />
			<Input name='password' holder='Password' type='password' />
			<Button color='prime' type='submit' isLoading={signupApi.isPending}>
				Signup
			</Button>
			<Divider />
			<Button color='second' onClick={handleGoogle} isDisabled={signupApi.isPending}>
				<Icon icon='flat-color-icons:google' />
				Signup with Google
			</Button>
		</Form>
	);
}
