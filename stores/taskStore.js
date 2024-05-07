import { defineStore } from 'pinia';
import checkIcon from '~icons/heroicons/check-circle-20-solid';
import xIcon from '~icons/heroicons/x-circle-20-solid';

export const useTaskStore = defineStore('task', {
	state: () => ({
		tasks: {
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
				icon: 'checkIcon',
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
				icon: 'xIcon',
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
		}
	}),
	actions: {
		// loadTasks() {
		// 	const savedTasks = localStorage.getItem('tasks');
		// 	if (savedTasks) {
		// 		this.tasks = JSON.parse(savedTasks);
		// 	}
		// },
		// saveTasks() {
		// 	localStorage.setItem('tasks', JSON.stringify(this.tasks));
		// }
	}
});
