import axios from 'axios';
import { setAuthorizationToken } from './MiddlewareSetToken.js';
import { baseUrl } from './url.js';


export async function Auth() {
	setAuthorizationToken();
	try {
		const response = await axios.post(' https://campuspro-246a1b5a089a.herokuapp.com/api/auth');

		if (response.status !== 201) {
			window.location.href = `${baseUrl}/campus`;
		}
		return true;
	} catch (error) {
		window.location.href = `${baseUrl}/login`;
		return false;
	}
}
