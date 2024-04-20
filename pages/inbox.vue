<template>
	<div>This is the ./index or overview route test</div>
</template>

<script setup>
import { Auth } from '../assets/script/MidlewareAuth.js';

const authenticate = async () => {
    const isAuthenticated = await Auth();
    if (isAuthenticated) {
      console.log('Autenticación exitosa');
    } else {
      console.error('La autenticación falló');
    }
};

onBeforeMount(() => {
	authenticate();
});
</script>

<style scoped></style>
