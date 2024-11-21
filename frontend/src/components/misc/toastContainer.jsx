import { Fragment } from 'react';
import { Toaster } from 'react-hot-toast';

export default function ToastContainer({ children }) {
	return (
		<Fragment>
			{children}
			<Toaster position='top-center' reverseOrder={false} />
		</Fragment>
	);
}
