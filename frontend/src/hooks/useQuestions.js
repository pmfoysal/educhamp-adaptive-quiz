import api from '../utilities/api';
import { useMutation, useQuery } from '@tanstack/react-query';

export function useNextQuestion() {
	return useMutation({
		mutationKey: ['nextQuestion'],
		mutationFn: async data => {
			const result = await api.post('/quiz/question/next', data);
			return result.data;
		},
	});
}

export function useTotalQuestion() {
	return useQuery({
		queryKey: ['totalQuestion'],
		queryFn: async () => {
			const result = await api.get('/quiz/question/total');
			return result.data;
		},
	});
}
