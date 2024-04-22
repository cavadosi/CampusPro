// import dotenv from 'dotenv';

// dotenv.config();

export const getBaseUrl = () => {
	if (process.env.DOMAIN === 'development') {
		console.log('development');
		return 'http://localhost:3000';
	} else {
		return 'https://campus-pro.vercel.app';
	}
};
