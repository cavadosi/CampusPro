import axios from 'axios';
import { setAuthorizationToken } from './MiddlewareSetToken.js';

export async function Auth() {
	setAuthorizationToken();
	try {
		const response = await axios.post('https://campusprob-43ea2325dc3f.herokuapp.com/api/auth');

		if (response.status !== 201) {
			window.location.href = `${getBaseUrl()}/login`;
		}
		return true;
	} catch (error) {
		window.location.href = `${getBaseUrl()}/login`; 
		return false;
	}
}
