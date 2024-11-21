import { createContext, useContext, useState } from 'react';

const Context = createContext(null);

const demoUser = {
	id: 79983010,
	grade: 8,
	name: 'Foysal Ahmmed',
	avatar: 'https://avatars.githubusercontent.com/u/79983010?v=4',
};

export default function AuthContext({ children }) {
	const [user, setUser] = useState(null);
	return <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>;
}

export function useAuthContext() {
	return useContext(Context);
}
