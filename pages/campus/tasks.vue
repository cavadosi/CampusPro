<template>
	<div class="flex flex-row items-start justify-start gap-x-2 w-fit h-full overflow-x-auto overflow-clip m-2 pb-4">
		<!-- Card container -->
		<TaskContainer v-for="(tasksList, column) in tasks" :key="column" :columnType="column" :tasks="tasksList.tasks" :icon="tasksList.icon" :color="tasksList.color" />
	</div>
</template>

<script setup>
import checkIcon from '~icons/heroicons/check-circle-20-solid';
import xIcon from '~icons/heroicons/x-circle-20-solid';

const tasks = {
	'To do': {
		color: 'text-accent',
		tasks: [
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
				title: 'Card2',
				pills: {
					unit: 'UF1',
					date: '20-5-2024'
				}
			},
			{
				title: 'Card3',
				pills: {
					unit: 'UF1',
					date: '20-5-2024'
				}
			},
			{
				title: 'Card4',
				pills: {
					unit: 'UF1',
					date: '20-5-2024'
				}
			}
		]
	},
	'In progress': {
		tasks: [
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
		]
	},
	Done: {
		icon: checkIcon,
		color: 'text-green-500',
		tasks: [
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
		]
	},
	Cancelled: {
		icon: xIcon,
		color: 'text-red-500',
		tasks: [
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
		]
	}
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
