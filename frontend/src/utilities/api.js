import axios from 'axios';
import cookie from 'js-cookie';

const api = axios.create({ baseURL: `${process.env.SERVER_URL}/api` });

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
		return Promise.reject(error);
	}
);

export default api;
