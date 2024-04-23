<template>
	<div class="flex flex-row items-start justify-start gap-x-2 w-fit h-full overflow-x-auto overflow-clip m-2 pb-4">
		<!-- Card container -->
		<TaskContainer v-for="column in Object.keys(tasks)" :columnType="column" :tasks="tasks[column]" />
	</div>
</template>

<script setup>
const tasks = {
	TODO: [
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024',
				unit1: 'UF1',
				date2: '20-5-2024',
				unit3: 'UF1',
				date4: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		}
	],
	INPROGRESS: [
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		}
	],
	DONE: [
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		}
	],
	CANCELLED: [
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		},
		{
			title: 'Card1',
			pills: {
				unit: 'UF1',
				date: '20-5-2024'
			}
		}
	]
};

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
