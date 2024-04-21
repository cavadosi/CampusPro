<template>
	<h1 class="text-2xl text-tbase font-bold mb-4">Carbon Sequestration Grant</h1>

	<FormKit type="form" #default="{ value }">
		<ul class="flex flex-row divide-x-2 divide-tlight bg-bglight/70 rounded-t-md py-3">
			<li v-for="stepName in stepNames" class="px-2" @click="step = stepName" :data-step-active="step === stepName">
				{{ camel2title(stepName) }}
			</li>
		</ul>

		<div class="form-body">
			<section v-show="step === 'contactInfo'">
				<FormKit type="group" id="contactInfo" name="contactInfo">
					<FormKit type="email" label="*Email address" validation="required|email" />
				</FormKit>
			</section>

			<section v-show="step === 'organizationInfo'">
				<FormKit id="organizationInfo" type="group" name="organizationInfo">
					<FormKit type="text" label="*Organization name" validation="required|length:3" />
				</FormKit>
			</section>

			<section v-show="step === 'application'">
				<FormKit id="application" type="group" name="application">
					<FormKit type="textarea" label="*How will you use the money?" validation="required|length:20,500" />
				</FormKit>
			</section>

			<details>
				<summary>Form data</summary>
				<pre>{{ value }}</pre>
			</details>
		</div>
	</FormKit>
</template>

<script setup>
import { ref } from 'vue';

const step = ref('contactInfo');
const stepNames = ['contactInfo', 'organizationInfo', 'application'];

const camel2title = (str) =>
	str
		.replace(/([A-Z])/g, (match) => ` ${match}`)
		.replace(/^./, (match) => match.toUpperCase())
		.trim();
</script>

<style></style>
