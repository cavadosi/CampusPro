<template>
	<Html class="bg-bg scrollbar overflow-y-auto transition-colors duration-300">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</Html>
</template>

<style>
html {
	height: 100%;
	overflow: clip;
	font-family: Poppins;
}

body {
	min-height: 100%;
	margin: 0;
	position: relative;
	z-index: 1;
	@apply h-screen bg-gradient-to-bl from-accent-800 to-slate-900;
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

/*.scrollbar {
	scrollbar-color: #185987 rgba(0, 0, 0, 0);
	scrollbar-width: thin;
}*/

.scrollbar::-webkit-scrollbar {
	height: 5px;
	width: 5px;
	background: transparent;
}

.scrollbar::-webkit-scrollbar-thumb {
	border-radius: 50px;
	@apply bg-primary;
}
</style>
