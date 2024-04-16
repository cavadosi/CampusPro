<template>
	<Html class="h-full scrollbar overflow-x-auto">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</Html>
</template>

<style>
html {
	height: 100%;
	overflow: clip;
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

.scrollbar {
	scrollbar-color: #185987 rgba(0, 0, 0, 0);
	scrollbar-width: thin;
}
</style>
