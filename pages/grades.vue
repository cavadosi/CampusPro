<template>
	<div >
		This is the ./grades route test
	</div>
</template>

<script setup>
import { Auth } from '../Script/MidlewareAuh'; 

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

<style scoped>

</style>