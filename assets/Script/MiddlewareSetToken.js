import axios from 'axios';

export function setAuthorizationToken() {
	console.log(token);
	const token = localStorage.getItem('token');

	if (token) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	} else {
		delete axios.defaults.headers.common['Authorization'];
	}
}
