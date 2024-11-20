import { createContext, useContext } from 'react';

const Context = createContext(null);

export default function AuthContext({ children }) {
	return <Context.Provider value={{}}>{children}</Context.Provider>;
}

export function useAuthContext() {
	return useContext(Context);
}
