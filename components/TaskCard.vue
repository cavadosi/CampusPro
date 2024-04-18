<template>
	<div class="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl transition-colors ease-in-out duration-500 border border-accent hover:border-primary bg-gradient-to-br from-white/70 to-white hover:bg-white/80 drop-shadow-sm">
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
			<div class="flex flex-wrap gap-x-1.5 gap-y-1 mt-6">
				<TaskPill v-for="item in props.pills" :content="item" class="" />
			</div>
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
	},
	pills: {
		type: Object,
		default: {}
	}
});

const { title, columnType } = toRefs(props);
</script>
