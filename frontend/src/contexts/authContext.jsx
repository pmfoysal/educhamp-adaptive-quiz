import { useAuthToken } from '../hooks/useAuth';
import PageLoader from '../components/loaders/pageLoader';
import { createContext, useContext, useEffect, useState } from 'react';

const Context = createContext(null);

export default function AuthContext({ children }) {
	const authApi = useAuthToken();
	const [user, setUser] = useState(null);

	useEffect(() => {
		setUser(authApi.data);
	}, [authApi.data]);

	return (
		<Context.Provider value={{ user, setUser }}>{authApi.isPending ? <PageLoader /> : children}</Context.Provider>
	);
}

export function useAuthContext() {
	return useContext(Context);
}
