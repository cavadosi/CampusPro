import axios from 'axios';
import { setAuthorizationToken } from './MiddlewareSetToken.js';

export async function Auth() {
	setAuthorizationToken();
	try {
		const response = await axios.post('http://localhost:3001/api/auth');

		if (response.status !== 201) {
			window.location.href = 'http://localhost:3000/login';
		}
	} catch (error) {
		alert(`Error fetching user: ${error}`);
		window.location.href = 'http://localhost:3000/login'; // cambiar rutas
		return false;
	}
}
