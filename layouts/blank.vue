<template>
	<NuxtPage />
</template>

<script setup></script>

<style>
html {
	height: 100%;
	overflow: auto;
}

body {
	background: url('/public/background.svg') no-repeat center center fixed;
	background-size: cover;
	min-height: 100%;
	margin: 0;
	position: relative;
	z-index: 1;
}

body::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	background-size: cover;
}
</style>
