import axios from 'axios';
import cookie from 'js-cookie';
import toast from 'react-hot-toast';

const api = axios.create({ baseURL: `http://localhost:5000/api` });

api.interceptors.request.use(
	function (config) {
		config.headers.set('authorization', `Bearer ${cookie.get('token')}`);
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

api.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		if (error.status === 401) cookie.remove('token');
		else toast.error(error.response.data);
		return Promise.reject(error);
	}
);

export default api;
