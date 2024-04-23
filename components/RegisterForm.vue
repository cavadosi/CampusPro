<template>
	<div class="max-w-2xl mx-5 mt-10">
		<FormKit type="form" #default="{ value }">
			<!-- <ul class="steps">
				<li v-for="stepName in stepNames" class="step" @click="step = stepName" :data-step-active="step === stepName">
					{{ camel2title(stepName) }}
				</li>
			</ul> -->
			<div class="px-4 sm:px-0" :data-step-active="activeStep === 'institution-info'">
				<h3 class="text-base font-semibold leading-7 text-tbase">{{ camel2title(activeStep) }}</h3>
				<p class="mt-1 max-w-2xl text-sm leading-6 text-tbase">{{ steps[1].description }}</p>
			</div>
			<div class="mt-6">
				<section v-show="activeStep === 'institution-info'">
					<FormKit type="group" id="institutionInfo" name="institutionInfo">
						<dl class="grid grid-cols-1 sm:grid-cols-2">
							<div class="border-t border-gray-100 px-4 py-4 sm:col-span-1 sm:px-0 w-full">
								<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
								<dd class="text-sm leading-6 text-tlight mb-4">Margot Foster</dd>
								<FormKit type="text" inner-class="max-w-sm sm:mr-10 border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500" input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400" />
							</div>
							<div class="border-t border-gray-100 px-4 py-4 sm:col-span-1 sm:px-0">
								<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
								<dd class="text-sm leading-6 text-tlight mb-4">Margot aksdnshbdjgvbhjugyvbhsdjuhagyhkvbjncdvbjsd hjasdbgsuydgaskjdhgasubdasvhdbagfhvogyubhuvuaofbskcjsabsvhkwjhucbj sadhbgvshoasgvhkbjdasvbsdygbdsivhobvjkxdshgdbvjkvnugjxvclk</dd>
								<FormKit type="text" inner-class="max-w-sm sm:mr-10 border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500" input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400" />
							</div>
							<div class="border-t border-gray-100 px-4 py-4 sm:col-span-1 sm:px-0">
								<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
								<dd class="text-sm leading-6 text-tlight mb-4">Margot Foster</dd>
								<FormKit type="text" inner-class="max-w-sm sm:mr-10 border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500" input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400" />
							</div>
							<div class="border-t border-gray-100 px-4 py-4 sm:col-span-1 sm:px-0">
								<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
								<dd class="text-sm leading-6 text-tlight mb-4">Margot Foster</dd>
								<FormKit type="text" inner-class="max-w-sm sm:mr-10 border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500" input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400" />
							</div>

							<div class="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
								<dt class="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
								<dd class="mt-2 text-sm text-gray-900">
									<ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
										<li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
											<div class="ml-4 flex-shrink-0">
												<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
											</div>
										</li>
									</ul>
								</dd>
							</div>
						</dl>
					</FormKit>
				</section>
			</div>
		</FormKit>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const activeStep = ref('institution-info');

const steps = [
	{
		title: 'choose-a-plan',
		description: 'Pick a plan that fits your organization.'
	},
	{
		title: 'institution-info',
		description: 'Fill with details about your organization.'
	},
	{
		title: 'contact-info',
		description: "What's your contact information."
	},
	{
		title: 'application',
		description: 'Which fields do you want to include in your app.'
	}
];

const camel2title = (str) =>
	str
		.replace(/([A-Z])/g, (match) => ` ${match}`)
		.replace(/^./, (match) => match.toUpperCase())
		.trim();
</script>

<style></style>
