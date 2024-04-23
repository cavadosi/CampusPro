<template>
	<div>This is the ./roadmap route test</div>
</template>

<script setup>
import { Auth } from '../../assets/script/MiddlewareAuth.js';

const authenticate = async () => {
	try {
		const isAuthenticated = await Auth();
		if (isAuthenticated) {
			console.log('Autenticación exitosa');
		} else {
			console.error('La autenticación falló');
		}
	} catch (error) {
		console.error('Error al autenticar:', error);
	}
};

onBeforeMount(() => {
	authenticate();
});
</script>

<style scoped></style>
