<template>
	<span class="relative inline-block overflow-hidden rounded-full p-[1px]">
		<div class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full border border-primary text-primary bg-bg/80 px-3 py-0.5 text-sm font-medium backdrop-blur-3xl">
			{{ props.content }}
		</div>
	</span>
</template>

<script setup>
const props = defineProps({
	content: {
		type: String,
		default: null
	}
});
</script>
