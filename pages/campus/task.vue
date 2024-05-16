<template>
	<div class="flex flex-col items-start justify-start gap-y-2 max-w-full h-full overflow-x-auto overflow-clip m-2 pb-4">
		<h1 class="text-xl text-tbase">Task details</h1>
		<div class="grid grid-cols-12 w-full h-full bg-bg divide-x divide-tlight overflow-hidden">
			<div class="flex flex-col relative gap-y-6 col-span-9 py-6 px-8 overflow-y-auto scrollbar">
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
					<!-- Images -->
					<div class="flex flex-row gap-x-4 overflow-x-scroll scrollbar">
						<TaskReferenceImage v-for="element in referenceMaterial.images" :key="element.name" :imgSrc="element.imgSrc" />
					</div>
					<!-- Links and pdfs, etc. -->
					<div class="grid grid-cols-2 gap-2">
						<NuxtLink v-for="element in referenceMaterial.links" :key="element.name" :to="element.link" class="flex flex-row grow items-center border border-tlight/20 rounded-full group py-2 px-4">
							<IconHeroicons:link-20-solid class="h-6 w-auto mr-4 text-tlight group-hover:text-tbase" />
							<h3 class="text-sm text-accent group-hover:text-primary">{{ element.name }}</h3>
						</NuxtLink>
					</div>
				</div>

				<div class="flex flex-row gap-x-4 font-semibold text-tbase">
					<!-- entregas -->
					<div :class="[active == 'entregas' ? 'border-b-2 border-primary' : '', 'cursor-pointer']" @click="active = 'entregas'">Entregas</div>

					<!-- comentarios -->
					<div :class="[active == 'comments' ? 'border-b-2 border-primary' : '', 'cursor-pointer']" @click="active = 'comments'">Comentarios</div>
				</div>
				<div>
					<div v-show="active == 'entregas'">holaaaa entrega</div>
					<div v-show="active == 'comments'">holaaaa comentario</div>
				</div>
			</div>
			<div class="px-2">sadasda</div>
		</div>
	</div>
</template>
<script setup>
const referenceMaterial = {
	images: [
		{
			name: 'example document',
			imgSrc: '/color-palette.png'
		},
		{
			name: 'example document',
			imgSrc: '/color-palette.png'
		},
		{
			name: 'example document',
			imgSrc: '/color-palette.png'
		}
	],
	links: [
		{
			name: 'example document',
			link: '#'
		},
		{
			name: 'example document',
			link: '#'
		},
		{
			name: 'example document',
			link: '#'
		},
		{
			name: 'example document',
			link: '#'
		},
		{
			name: 'example document',
			link: '#'
		}
	]
};

const active = ref('entregas');
</script>
