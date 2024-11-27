import { createContext, useContext, useState } from 'react';

const Context = createContext(null);

export default function QuizContext({ children }) {
	const [quizList, setQuizList] = useState([]);
	return <Context.Provider value={{ quizList, setQuizList }}>{children}</Context.Provider>;
}

export function useQuizContext() {
	return useContext(Context);
}
