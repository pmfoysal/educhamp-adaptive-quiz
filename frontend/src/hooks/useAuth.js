import api from '../utilities/api';
import { useMutation, useQuery } from '@tanstack/react-query';

export function useSignin() {
	return useMutation({
		mutationKey: ['signin'],
		mutationFn: async data => {
			const result = await api.post('/auth/signin', data);
			return result.data;
		},
	});
}

export function useSignup() {
	return useMutation({
		mutationKey: ['signup'],
		mutationFn: async data => {
			const result = await api.post('/auth/signup', data);
			return result.data;
		},
	});
}

export function useGoogleSignin() {
	return useQuery({
		queryKey: ['googleSignin'],
		queryFn: async () => {
			const result = await api.get('/auth/google');
			return result.data;
		},
	});
}
