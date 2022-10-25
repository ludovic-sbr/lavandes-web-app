import Axios, { AxiosInstance } from 'axios';

import config from '../../config';

const instance = (token: string): AxiosInstance => {
	return Axios.create({
		baseURL: config.API_BASE_URL,
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		responseType: 'json',
	});
};

export default instance;
