<template>
	<NuxtLink
		:href="props.link"
		class="relative rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-gray-50 shadow-sm transition-background inline-flex h-12 items-center justify-center bg-gradient-to-r from-primary to-accent bg-[length:200%_200%] bg-[0%_0%] duration-500 hover:bg-[99%_200%] focus:outline-none focus:ring focus:ring-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
	>
		<div class="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-primary to-accent opacity-75 blur" />
		{{ props.text }}
	</NuxtLink>
</template>

<script setup>
const props = defineProps({
	link: {
		type: String
	},
	text: {
		type: String
	}
});
</script>
