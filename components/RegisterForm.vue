<template>
	<section v-if="activeStep.id === 0" class="grid justify-items-stretch max-w-2xl w-screen">
		<div class="px-4 sm:px-2">
			<h3 class="text-base font-semibold leading-7 text-tbase">{{ activeStep.title }}</h3>
			<p class="mt-1 max-w-2xl text-sm leading-6 text-tlight">{{ activeStep.description }}</p>
		</div>
		<div class="mt-6 border-y border-tbase">
			<dl class="divide-y divide-tlight">
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Full name</dt>
					<dd class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0">Margot Foster</dd>
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Full name</dt>
					<dd class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0">Margot Foster</dd>
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Full name</dt>
					<dd class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0">Margot Foster</dd>
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Full name</dt>
					<dd class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0">Margot Foster</dd>
				</div>
			</dl>
		</div>
	</section>

	<section v-if="activeStep.id === 1" class="grid justify-items-stretch max-w-2xl w-screen">
		<div class="px-4 sm:px-2">
			<h3 class="text-base font-semibold leading-7 text-tbase">{{ activeStep.title }}</h3>
			<p class="mt-1 max-w-2xl text-sm leading-6 text-tlight">{{ activeStep.description }}</p>
		</div>
		<div class="mt-6 border-y border-tbase">
			<dl class="divide-y divide-tlight">
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Full name</dt>
					<dd class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0">Margot Foster</dd>
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Full name</dt>
					<dd class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0">Margot Foster</dd>
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Full name</dt>
					<dd class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0">Margot Foster</dd>
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Full name</dt>
					<dd class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0">Margot Foster</dd>
				</div>
			</dl>
		</div>
	</section>

	<section v-if="activeStep.id === 2" class="grid justify-items-stretch max-w-2xl w-screen">
		<div class="px-4 sm:px-2">
			<h3 class="text-base font-semibold leading-7 text-tbase">{{ activeStep.title }}</h3>
			<p class="mt-1 max-w-2xl text-sm leading-6 text-tlight">{{ activeStep.description }}</p>
		</div>
		<div class="mt-6 border-y border-tbase">
			<dl class="divide-y divide-tlight">
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Full name</dt>
					<dd class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0">Margot Foster</dd>
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Full name</dt>
					<dd class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0">Margot Foster</dd>
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Full name</dt>
					<dd class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0">Margot Foster</dd>
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Full name</dt>
					<dd class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0">Margot Foster</dd>
				</div>
			</dl>
		</div>
	</section>

	<section v-if="activeStep.id === 3" class="grid justify-items-stretch max-w-2xl w-screen">
		<div class="px-4 sm:px-2">
			<h3 class="text-base font-semibold leading-7 text-tbase">{{ activeStep.title }}</h3>
			<p class="mt-1 max-w-2xl text-sm leading-6 text-tlight">{{ activeStep.description }}</p>
		</div>
		<div class="mt-6 border-y border-tbase">
			<dl class="divide-y divide-tlight">
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Full name</dt>
					<dd class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0">Margot Foster</dd>
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Full name</dt>
					<dd class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0">Margot Foster</dd>
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Full name</dt>
					<dd class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0">Margot Foster</dd>
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Full name</dt>
					<dd class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0">Margot Foster</dd>
				</div>
			</dl>
		</div>
	</section>

	<div class="flex items-center justify-end px-2 pt-10">
		<NuxtLink class="text-tlight hover:text-tlight/80 hover:underline decoration-tlight/80 cursor-pointer" @click="previousStep()"> Previous step </NuxtLink>
		<ButtonGradient v-if="activeStep.id != 3" :text="'Next Step →'" @click="nextStep()" class="ml-10" />
		<ButtonGradient v-else="activeStep.id === 3" :text="'Submit'" class="ml-10" />
	</div>
</template>

<script setup>
const steps = [
	{
		id: 0,
		title: 'Choose a plan',
		description: "The plan should cover your instituition's needs"
	},
	{
		id: 1,
		title: 'Institution info',
		description: 'Who are you'
	},
	{
		id: 2,
		title: 'Contact info',
		description: 'This information will be used by your students and us in case we need to contact your institution.'
	},
	{
		id: 3,
		title: 'Application',
		description: 'add your institution contact info'
	}
];
const activeStep = ref(steps[0]);

function previousStep() {
	if (activeStep.value.id > 0) {
		activeStep.value = steps[activeStep.value.id - 1];
	}
}

function nextStep() {
	if (activeStep.value.id < 3) {
		activeStep.value = steps[activeStep.value.id + 1];
	}
}
</script>
