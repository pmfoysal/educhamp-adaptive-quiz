import './index.css';
import App from './app';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AuthContext from './contexts/authContext';
import QuizContext from './contexts/quizContext';
import { BrowserRouter } from 'react-router-dom';
import ToastContainer from './components/misc/toastContainer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: { refetchOnWindowFocus: false, refetchOnMount: false, refetchOnReconnect: false, retry: 0 },
	},
});

createRoot(document.getElementById('pmfoysal')).render(
	<StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<ToastContainer>
					<AuthContext>
						<QuizContext>
							<App />
						</QuizContext>
					</AuthContext>
				</ToastContainer>
			</QueryClientProvider>
		</BrowserRouter>
	</StrictMode>
);
