<template>
	<Switch v-model="enabled" :class="[enabled ? 'bg-primary' : 'bg-primary', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-primary transition-colors duration-200 ease-in-out ']">
		<span class="sr-only">Use setting</span>
		<span :class="[enabled ? 'translate-x-5 ' : 'translate-x-0 ', 'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-bglight shadow transition duration-200 ease-in-out']">
			<span :class="[enabled ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out', 'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity']" aria-hidden="true">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-tbase" viewBox="0 0 20 20"><path fill="currentColor" d="M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586" /></svg>
			</span>
			<span :class="[enabled ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in', 'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity']" aria-hidden="true">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-primary" viewBox="0 0 20 20">
					<path
						fill="currentColor"
						fill-rule="evenodd"
						d="M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m4 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-.464 4.95l.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 1.414m2.12-10.607a1 1 0 0 1 0 1.414l-.706.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0M17 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zm-7 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M5.05 6.464A1 1 0 1 0 6.465 5.05l-.708-.707a1 1 0 0 0-1.414 1.414zm1.414 8.486l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414M4 11a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2z"
						clip-rule="evenodd"
					/>
				</svg>
			</span>
		</span>
	</Switch>
</template>

<script setup>
import { Switch } from '@headlessui/vue';

const enabled = ref(false);

// Execute code after component is mounted
onMounted(() => {
	const preferedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

	enabled.value = preferedTheme;

	const savedTheme = localStorage.getItem('theme');
	if (savedTheme) {
		enabled.value = savedTheme === 'dark';
	}

	watchEffect(() => {
		updateTheme(enabled.value);
		localStorage.setItem('theme', enabled.value ? 'dark' : 'light');
	});
});

// Function to update theme based on `enabled` state
function updateTheme(isEnabled) {
	const root = document.documentElement;
	if (root) {
		if (isEnabled) {
			// Apply dark mode theme by setting data-theme attribute
			root.setAttribute('data-theme', 'dark');
		} else {
			// Remove dark mode theme by removing data-theme attribute
			root.removeAttribute('data-theme');
		}
	}
}
</script>
