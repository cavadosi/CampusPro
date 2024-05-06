<template>
	<div class="flex flex-row items-start justify-start gap-x-2 w-fit h-full overflow-x-auto overflow-clip m-2 pb-4">
		<!-- Card container -->
		<TaskContainer v-for="(tasksList, column) in tasks" :key="column" :columnType="column" :tasks="tasksList.tasks" :icon="tasksList.icon" :color="tasksList.color" />
	</div>
</template>

<script setup>
import { useTaskStore } from '~/stores/taskStore.js';
import { Auth } from '../../assets/script/MiddlewareAuth.js';

const taskStore = useTaskStore();

// Load tasks when the component is mounted
taskStore.loadTasks();

// Save tasks whenever there's a change
watchEffect(() => {
	taskStore.saveTasks();
});

const tasks = taskStore.tasks;

const authenticate = async () => {
	try {
		const isAuthenticated = await Auth();
		if (isAuthenticated) {
			// console.log('Autenticación exitosa');
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
