import './index.css';
import App from './app';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AuthContext from './contexts/authContext';
import QuizContext from './contexts/quizContext';
import { BrowserRouter } from 'react-router-dom';
import ToastContainer from './components/misc/toastContainer';

createRoot(document.getElementById('pmfoysal')).render(
	<StrictMode>
		<BrowserRouter>
			<ToastContainer>
				<AuthContext>
					<QuizContext>
						<App />
					</QuizContext>
				</AuthContext>
			</ToastContainer>
		</BrowserRouter>
	</StrictMode>
);
