<template>
	<div class="flex flex-col items-start justify-start gap-y-2 max-w-full h-full overflow-x-auto overflow-clip m-2 pb-4">
		<h1 class="text-xl text-tbase">Task details</h1>
		<div class="grid grid-cols-12 w-full h-full bg-bg divide-x divide-tlight">
			<div class="flex flex-col gap-y-6 col-span-9 py-6 px-8">
				<!-- task title -->
				<div>
					<h2 class="text-xl font-bold text-tbase">Task title : User can add a short description here</h2>
				</div>
				<!-- task description -->
				<div class="flex flex-col gap-y-4">
					<h2 class="font-semibold text-tbase">Task description</h2>
					<p class="text-tlight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde repudiandae eum ratione quod tenetur in ea exercitationem molestias dolorum temporibus, repellat, officia consequatur cumque suscipit praesentium nihil est veniam.</p>
				</div>
				<!-- reference material -->
				<div class="flex flex-col gap-y-4">
					<h2 class="font-semibold text-tbase">Reference material</h2>
					<div class="flex flex-row gap-x-4">
						<div v-for="element in referenceMaterial" :key="element.name" class="w-32 h-32 bg-[url('../color-palette.png')] rounded-md bg-cover bg-center"></div>
					</div>
				</div>
				<!-- entregas -->
				<div>adsad</div>
				<!-- comentarios -->
				<div>adsad</div>
			</div>
			<div class="px-2">sadasda</div>
		</div>
	</div>
</template>

<script setup>
const referenceMaterial = [
	{
		name: 'example document',
		imgSrc: '../color-palette.png',
		downloadLink: 'example link'
	}
];
</script>
