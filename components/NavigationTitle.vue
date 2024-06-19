<template>
	<NuxtLink @click="authenticate" :to="props.href" class="my-link text-zinc-400 hover:text-zinc-50 hover:shadow-md hover:bg-accent/10 flex items-center rounded-full gap-x-4 p-1 text-sm leading-6 transition-colors duration-300">
		<div class="bg-accent/15 p-2 rounded-full">
			<component :is="props.icon" class="h-5 w-5 shrink-0" aria-hidden="true" />
		</div>
		<h2 class="text-zinc-50">{{ props.name }}</h2>
	</NuxtLink>
</template>

<style scoped>
.my-link.router-link-exact-active {
	@apply text-zinc-50 shadow-md bg-accent/15;
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
