<template>
	<div class="flex flex-col items-start justify-start gap-y-2 max-w-full h-full overflow-x-auto overflow-clip m-2 pb-4">
		<h1 class="text-xl text-tbase">Task details</h1>
		<div class="grid grid-cols-12 w-full h-full bg-bg divide-x divide-tbase overflow-hidden">
			<div class="flex flex-col relative gap-y-6 col-span-9 py-6 px-8 pr-20 overflow-y-auto scrollbar">
				<!-- task title -->
				<div>
					<h2 class="text-xl font-bold text-tbase">Task title : User can add a short description here</h2>
				</div>
				<!-- task description -->
				<div class="flex flex-col gap-y-4">
					<h2 class="font-semibold text-tbase">Task description</h2>
					<p class="text-tbase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde repudiandae eum ratione quod tenetur in ea exercitationem molestias dolorum temporibus, repellat, officia consequatur cumque suscipit praesentium nihil est veniam.</p>
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
						<NuxtLink v-for="element in referenceMaterial.links" :key="element.name" :to="element.link" class="flex flex-row grow items-center border border-tbase/20 rounded-full group py-2 px-4">
							<IconHeroicons:link-20-solid class="h-6 w-auto mr-4 text-tbase group-hover:text-tbase" />
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
					<div v-show="active == 'comments'" class="m">
						<div class="flex items-start space-x-4">
							<div class="flex-shrink-0">
								<img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
							</div>
							<div class="min-w-0 flex-1">
								<form action="#" class="relative">
									<div class="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-tbase focus-within:ring-2 focus-within:ring-accent">
										<label for="comment" class="sr-only">Add your comment</label>
										<textarea rows="3" name="comment" id="comment" class="block w-full resize-none bg-transparent py-1.5 text-tbase placeholder:text-tbase sm:text-sm sm:leading-6" placeholder="Add your comment..." />
										<!-- Spacer element to match the height of the toolbar -->
										<div class="py-2" aria-hidden="true">
											<!-- Matches height of button in toolbar (1px border + 36px content height) -->
											<div class="py-px">
												<div class="h-9" />
											</div>
										</div>
									</div>

									<div class="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
										<div class="flex items-center space-x-5">
											<div class="flex items-center">
												<button type="button" class="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
													<IconF7:paperclip class="h-5 w-5" aria-hidden="true" />
													<span class="sr-only">Attach a file</span>
												</button>
											</div>
										</div>
										<div class="flex-shrink-0">
											<button
												type="submit"
												class="inline-flex items-center rounded-md bg-accent px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
											>
												Post
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-col col-span-3 gap-y-4 w-full pt-4 divide-y divide-tbase text-tbase">
				<div class="flex flex-col space-y-4 px-2">
					<div class="flex flex-row grow items-center gap-x-4 rounded-md">
						<IconHeroicons:information-circle-16-solid class="h-8 w-auto text-accent" />
						<h2 class="text-xl font-bold text-tbase">Task info</h2>
					</div>
					<div v-for="(item, index) in taskInfo" :key="index" class="flex flex-row grow items-center gap-x-4 rounded-md p-2 bg-bg/30">
						<IconHeroicons:rectangle-group-16-solid class="h-5 ml-2 w-auto text-accent" />
						<h2 class=" ">{{ item }}</h2>
					</div>
					<div class="flex flex-row grow items-center gap-x-4 rounded-md p-2 bg-bg/30">
						<IconTeenyicons:tick-circle-solid v-if="entrega" class="h-5 ml-2 w-auto text-accent" />
						<IconGridicons:cross-circle v-else class="h-5 ml-2 w-auto text-accent" />
						<h2 class=" ">Entregada: {{ entrega }}</h2>
					</div>
					<div class="flex flex-row grow items-center gap-x-4 rounded-md p-2 bg-bg/30">
						<IconMaterial-symbols:event-available class="h-5 ml-2 w-auto text-accent" />
						{{ startDate }}
					</div>
					<div class="flex flex-row grow items-center gap-x-4 rounded-md p-2 bg-bg/30">
						<IconMaterial-symbols:event-busy class="h-5 ml-2 w-auto text-accent" />
						{{ dueDate }}
					</div>
				</div>
				<!-- <div class="flex flex-col space-y-4 p-2">
					<div v-if="reminder" class="flex flex-row grow items-center gap-x-4 rounded-md p-2 bg-bg/30">
						
						<IconIc:outline-alarm-on class="h-5 ml-2 w-auto text-accent "/>
						{{ reminder }}
					</div>
					<div v-else class="flex flex-row grow items-center gap-x-4 rounded-md p-2 bg-bg/30">
						<IconIc:outline-alarm-add class="h-5 ml-2 w-auto text-accent "/>
						<h2>DD/MM/YYYY</h2>
					</div>
					<div class="flex flex-row grow items-center gap-x-4 rounded-md p-2 bg-bg/30">
						<IconIc:outline-alarm class="h-5 ml-2 w-auto text-accent "/>
						<input type="button" value="123123">
					</div>
				</div> -->
			</div>
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

const startDate = '12-07-24';
const dueDate = '12-08-24';
const entrega = '26-07-24';
const reminder = '26-07-24';
const taskInfo = {
	class: 'clase1',
	unit: 'UF1',
	Grade: '0/10'
};

const active = ref('entregas');
</script>
