import axios from 'axios';
import { setAuthorizationToken } from './MiddlewareSetToken.js';

const frontendUrl = process.env.DOMAIN ? `https://${process.env.DOMAIN}` : 'http://localhost:3000';

export async function Auth() {
	setAuthorizationToken();
	try {
		const response = await axios.post('https://campusprob-43ea2325dc3f.herokuapp.com/api/auth');

		if (response.status !== 201) {
			window.location.href = `${frontendUrl}/`;
		}
		return true;
	} catch (error) {
		window.location.href = `${frontendUrl}/`;
		return false;
	}
}