import { createContext, useContext } from 'react';

const Context = createContext(null);

export default function QuizContext({ children }) {
	return <Context.Provider>{children}</Context.Provider>;
}

export function useQuizContext() {
	return useContext(Context);
}
