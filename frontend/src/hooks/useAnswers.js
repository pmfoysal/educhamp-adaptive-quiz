import api from '../utilities/api';
import { useMutation, useQuery } from '@tanstack/react-query';

export function useGetAnswer(id) {
	return useQuery({
		queryKey: ['getAnswer', id],
		queryFn: async () => {
			const result = await api.get(`/quiz/answer/user/${id}`);
			return result.data;
		},
	});
}

export function useAnswerReport(id) {
	return useQuery({
		queryKey: ['answerReport', id],
		queryFn: async () => {
			const result = await api.get(`/quiz/answer/reports/${id}`);
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
