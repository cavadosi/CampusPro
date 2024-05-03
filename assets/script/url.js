// Define la base de la URL
let baseUrl;
let mode = 0;

if (mode === 1) {
	baseUrl = 'https://campus-pro.vercel.app/';
} else {
    baseUrl = 'http://localhost:3000';
}

export { baseUrl };
