<template>
	<div :style="backgroundStyle" :class="['min-w-32 h-32 rounded-md bg-cover bg-center mb-0.5']"></div>
</template>

<script setup>
const props = defineProps({
	imgSrc: {
		type: String,
		required: true
	},
	name: {
		type: String
	}
});

const backgroundStyle = computed(() => ({
	backgroundImage: `url('${props.imgSrc}')`,
	backgroundSize: 'cover',
	backgroundPosition: 'center center',
	backgroundRepeat: 'no-repeat'
}));
</script>
