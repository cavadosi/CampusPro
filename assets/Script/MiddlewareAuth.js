import axios from 'axios';
import { setAuthorizationToken } from './MiddlewareSetToken.js';
import getBaseUrl from './getBaseUrl.js';

export async function Auth() {
	setAuthorizationToken();
	try {
		const response = await axios.post('https://campusprob-43ea2325dc3f.herokuapp.com/api/auth');

		// FIX: getBaseUrl is not defined;
		if (response.status !== 201) {
			console.log('URL: ' + getBaseUrl());

			window.location.href = `https://localhost:3000/`;
		}
		return true;
	} catch (error) {
		console.log('URL: ' + getBaseUrl());
		window.location.href = `${getBaseUrl()}/`;
		return false;
	}
}
