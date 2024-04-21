<template>
	<div class="flex relative items-center justify-center min-h-screen w-full bg-transparent dark:bg-bg">
		<div class="flex absolute top-4 right-4">
			<ThemeSwitch />
		</div>
		<div class="max-w-7xl">
			<RegisterForm />
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'blank'
});
</script>

<style></style>
