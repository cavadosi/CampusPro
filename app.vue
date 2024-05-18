<template>
	<!doctype html>
	<Head>
		<Title>CampusPro</Title>
		<Meta name="description" content="CampusPro" />
		<Meta charset="UTF-8" />
		<Meta name="viewport" content="width=device-width, initial-scale=1.0" />
	</Head>
	<Html class="bg-bgscrollbar scrollbar overflow-y-auto transition-colors duration-300" lang="en">
		<body>
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</body>
	</Html>
</template>

<style>
html {
	height: 100%;
	overflow: clip;
	font-family: Poppins;
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
