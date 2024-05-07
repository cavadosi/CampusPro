<template>
	<section v-show="activeStep.id === 0" class="grid justify-items-stretch max-w-2xl w-screen">
		<div class="px-4 sm:px-2">
			<h3 class="text-base font-semibold leading-7 text-tbase">{{ activeStep.title }}</h3>
			<p class="mt-1 max-w-2xl text-sm leading-6 text-tlight">{{ activeStep.description }}</p>
		</div>
		<div class="mt-6 border-y border-tbase">
			<dl class="divide-y divide-tlight">
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Institution name</dt>
					<input v-model="formData.institutionName" placeholder="Enter the name..." class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0" />
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">institution type</dt>
					<input v-model="formData.institutionType" placeholder="" class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0" />
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">institution adress</dt>
					<input v-model="formData.Adress" placeholder="Enter the adress..." class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0" />
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Phone</dt>
					<input v-model="formData.Phone" placeholder="Enter the phone..." class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0" />
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
					<input v-model="formData.Email" placeholder="Enter the email..." class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0" />
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Website</dt>
					<input v-model="formData.Website" placeholder="Enter the website url..." class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0" />
				</div>
			</dl>
		</div>
	</section>

	<section v-show="activeStep.id === 1" class="grid justify-items-stretch max-w-2xl w-screen">
		<div class="px-4 sm:px-2">
			<h3 class="text-base font-semibold leading-7 text-tbase">{{ activeStep.title }}</h3>
			<p class="mt-1 max-w-2xl text-sm leading-6 text-tlight">{{ activeStep.description }}</p>
		</div>
		<div class="mt-6 border-y border-tbase">
			<dl class="divide-y divide-tlight">
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Total number of students</dt>
					<input v-model="formData.CalendarStartDate" type="date" class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0" />
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Total number of students</dt>
					<input v-model="formData.CalendarEndDate" type="date" class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0" />
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Total number of students</dt>
					<input v-model="formData.TotalStudents" placeholder="Enter the name..." class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0" />
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Average student age</dt>
					<input v-model="formData.AverageStudentAge" placeholder="Enter the name..." class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0" />
				</div>
			</dl>
		</div>
	</section>

	<section v-show="activeStep.id === 2" class="grid justify-items-stretch max-w-2xl w-screen">
		<div class="px-4 sm:px-2">
			<h3 class="text-base font-semibold leading-7 text-tbase">{{ activeStep.title }}</h3>
			<p class="mt-1 max-w-2xl text-sm leading-6 text-tlight">{{ activeStep.description }}</p>
		</div>
		<div class="mt-6 border-y border-tbase">
			<dl class="divide-y divide-tlight">
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Contact person name</dt>
					<input v-model="formData.CPName" placeholder="Enter the name..." class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0" />
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Contact person position</dt>
					<input v-model="formData.CPPosition" placeholder="Enter the position..." class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0" />
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Contact person email</dt>
					<input v-model="formData.CPEmail" placeholder="Enter the email..." class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0" />
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
					<dt class="text-sm font-medium leading-6 text-tbase">Contact person phone</dt>
					<input v-model="formData.CPPhone" placeholder="Enter the phone..." class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0" />
				</div>
			</dl>
		</div>
	</section>

	<div class="flex items-center justify-end px-2 pt-10">
		<NuxtLink class="text-tlight hover:text-tlight/80 hover:underline decoration-tlight/80 cursor-pointer" @click="previousStep()"> Previous step </NuxtLink>
		<ButtonGradient v-if="activeStep.id != steps.length - 1" :text="'Next Step →'" @click="nextStep()" class="ml-10" />
		<ButtonGradient v-else="activeStep.id === steps.length - 1" :text="'Submit'" class="ml-10" />
	</div>
</template>

<script setup>
const steps = [
	{
		id: 0,
		title: 'Institution details',
		description: 'Tell us more about your institution'
	},
	{
		id: 1,
		title: 'Institution details (2)',
		description: 'Tell us more about your institution'
	},
	{
		id: 2,
		title: 'Contact info',
		description: 'This information will be used by your students and us in case we need to contact your institution.'
	}
];

const formData = {};

const activeStep = ref(steps[0]);

function previousStep() {
	if (activeStep.value.id > 0) {
		activeStep.value = steps[activeStep.value.id - 1];
	}
}

function nextStep() {
	if (activeStep.value.id < steps.length - 1) {
		activeStep.value = steps[activeStep.value.id + 1];
	}
	console.log(formData, steps.length - 1);
}
</script>
