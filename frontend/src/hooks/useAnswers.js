import api from '../utilities/api';
import { useMutation, useQuery } from '@tanstack/react-query';

export function useGetAnswer() {
	return useQuery({
		queryKey: ['getAnswer'],
		queryFn: async () => {
			const result = await api.get('/quiz/answer/user');
			return result.data;
		},
	});
}

export function useAnswerReport() {
	return useQuery({
		queryKey: ['answerReport'],
		queryFn: async () => {
			const result = await api.get('/quiz/answer/reports');
			return result.data;
		},
	});
}

export function useSubmitAnswer() {
	return useMutation({
		mutationKey: ['submitAnswer'],
		mutationFn: async data => {
			const result = await api.post('/quiz/answer', data);
			return result.data;
		},
	});
}
