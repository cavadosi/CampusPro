import axios from 'axios';

export function setAuthorizationToken() {
    const token = localStorage.getItem('token');

    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}
