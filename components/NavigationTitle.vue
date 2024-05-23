<template>
	<NuxtLink @click="authenticate" :to="props.href" class="my-link text-primary/80 border-l-8 border-transparent hover:shadow-md border-y hover:border-primary/80 hover:text-primary/80 flex gap-x-4 p-2 pl-4 text-sm leading-6 font-semibold transition-colors duration-300">
		<component :is="props.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
		{{ props.name }}
	</NuxtLink>
</template>

<style scoped>
.my-link.router-link-exact-active {
	@apply border-l-8 hover:shadow-md border-y shadow-md border-primary text-primary font-bold transition-colors duration-300;
}
</style>

<script setup>
const props = defineProps({
	href: {
		type: String,
		default: ''
	},

	icon: {
		type: Object,
		default: ''
	},

	name: {
		type: String,
		default: ''
	}
});
import { Auth } from '../assets/script/MiddlewareAuth';

const authenticate = async () => {
	const isAuthenticated = await Auth();
	if (isAuthenticated) {
		console.log('Authentication successful');
		// Proceed with other actions if authentication is successful
	} else {
		// console.error('Authentication failed');
		// Handle authentication failure
	}
};
</script>
