import axios from 'axios';
import { setAuthorizationToken } from './MiddlewareSetToken.js';
import { baseUrl } from './baseUrl.js';


export async function Auth() {
	setAuthorizationToken();
	try {
		const response = await axios.post('https://campusprob-43ea2325dc3f.herokuapp.com/api/auth');

		if (response.status !== 201) {
			window.location.href = `${baseUrl}/campus`;
		}
		return true;
	} catch (error) {
		window.location.href = `${baseUrl}/login`;
		return false;
	}
}
