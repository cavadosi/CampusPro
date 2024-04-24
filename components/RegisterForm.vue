<template>
	<div class="max-w-4xl w-full sm:mx-4 mt-10 sm:mt-0 rounded-lg">
		<div class="flex items-center justify-between pb-2 px-2">
			<h3
				v-for="(step, stepName) in steps"
				:class="[activeStep == stepName ? 'border-b border-tlight text-tbase scale-110  ' : 'text-tlight hover:scale-110 hover:border-b border-tlight', 'cursor-pointer transition-all duration-300 relative']"
				@click="activeStep = stepName"
				:data-step-valid="step.valid && step.errorCount === 0"
				:data-step-active="activeStep === stepName"
			>
				{{ camel2title(stepName) }}
				<span v-if="checkStepValidity(stepName)" class="bg-red-500 absolute -top-3 -right-4 text-sm w-5 h-auto text-white text-center rounded-full" v-text="step.errorCount + step.blockingCount"></span>
			</h3>
		</div>
		<div class="bg-bgcover py-4 rounded-lg w-full">
			<FormKit type="form" #default="{ value, state: { valid } }" :plugins="[stepPlugin]" @submit="submitApp" :actions="false">
				<div>
					<section v-show="activeStep === 'choose-a-plan'">
						<FormKit type="group" id="choose-a-plan" name="choose-a-plan">
							<dl class="grid grid-cols-1 sm:grid-cols-2 border-b border-tbase">
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit
										type="text"
										validation="required"
										inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary"
										input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight"
									/>
								</div>
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
							</dl>
						</FormKit>
					</section>
					<section v-show="activeStep === 'institution-info'">
						<FormKit type="group" id="institution-info" name="institution-info">
							<dl class="grid grid-cols-1 sm:grid-cols-2">
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
							</dl>
						</FormKit>
					</section>
					<section v-show="activeStep === 'contact-info'">
						<FormKit type="group" id="contact-info" name="contact-info">
							<dl class="grid grid-cols-1 sm:grid-cols-2">
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
							</dl>
						</FormKit>
					</section>
					<section v-show="activeStep === 'application'">
						<FormKit type="group" id="application" name="application">
							<dl class="grid grid-cols-1 sm:grid-cols-2">
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
								<div class="flex flex-col border-t justify-end border-tlight px-4 py-4 sm:col-span-1 sm:px-0 w-full h-full">
									<dt class="text-sm font-medium leading-6 text-tbase">Email</dt>
									<dd class="text-sm leading-6 text-tlight mb-4 sm:mr-10">Margot Foster</dd>
									<FormKit type="text" inner-class="max-w-sm sm:mr-10 bg-bg border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-primary" input-class="w-full h-8 px-3 border-none text-base rounded-lg bg-transparent text-tlight placeholder-tlight" />
								</div>
							</dl>
						</FormKit>
					</section>
					<!-- NEW: Adds Next / Previous navigation buttons. -->

					<details>
						<summary>Form data</summary>
						<pre>{{ value }}</pre>
					</details>
				</div>
				<div class="step-nav">
					<FormKit type="button" :disabled="activeStep === 'choose-a-plan'" @click="setStep(-1)" v-text="'Previous step'" />
					<FormKit type="button" class="next" :disabled="activeStep === 'application'" @click="setStep(1)" v-text="'Next step'" />
				</div>

				<!-- NEW: Adds submit button. -->
				<FormKit type="submit" label="Submit Application" :disabled="!valid" />
			</FormKit>
		</div>
	</div>
</template>

<script setup>
import useSteps from '~/assets/script/register/useSteps';

const { steps, activeStep, stepPlugin, visitedSteps, setStep } = useSteps();

const submitApp = async (formData, node) => {
	try {
		const res = await axios.post(formData);
		node.clearErrors();
		alert('Your application was submitted successfully!');
	} catch (err) {
		node.setErrors(err.formErrors, err.fieldErrors);
	}
};

const checkStepValidity = (stepName) => {
	return (steps[stepName].errorCount > 0 || steps[stepName].blockingCount > 0) && visitedSteps.value.includes(stepName);
};

const camel2title = (str) =>
	str
		.replace(/([A-Z])/g, (match) => ` ${match}`)
		.replace(/(-)/g, ` `)
		.replace(/^./, (match) => match.toUpperCase())
		.trim();
</script>
