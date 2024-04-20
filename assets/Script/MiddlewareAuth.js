import axios from 'axios';
import { setAuthorizationToken } from './MiddlewareSetToken.js';

export async function Auth() {
	setAuthorizationToken();
	try {
		const response = await axios.post('http://localhost:3001/api/auth');

		if (response.status !== 201) {
			window.location.href = 'https://campus-pro.vercel.app/login';
		}
		return true;
	} catch (error) {
		window.location.href = 'https://campus-pro.vercel.app/login'; 
		return false;
	}
}
