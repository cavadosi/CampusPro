<template>
	<div class="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl transition-colors ease-in-out duration-500 border border-accent hover:border-primary bg-gradient-to-r from-white/30 to-white/50 drop-shadow-sm">
		<!-- Card container -->
		<div class="flex-col min-h-28 w-full p-2">
			<div class="flex justify-between w-full">
				<h2 class="text-accent text-sm pointer-events-none">{{ columnType }}</h2>
			</div>
			<!-- Title -->
			<div>
				<h2 class="text-primary">{{ title }}</h2>
			</div>
			<!-- Pill component -->
			<div class="">pills</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	title: {
		type: String,
		default: ''
	},
	columnType: {
		type: String,
		default: ''
	}
});

const { title, columnType } = toRefs(props);
</script>
