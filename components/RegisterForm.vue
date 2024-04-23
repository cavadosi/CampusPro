<template>
	<div class="max-w-2xl mx-5 mt-10">
		<div class="px-4 sm:px-0">
			<h3 class="text-base font-semibold leading-7 text-gray-900">Applicant Information</h3>
			<p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
		</div>
		<div class="mt-6">
			<dl class="grid grid-cols-1 sm:grid-cols-2">
				<div class="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
					<dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
					<dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">Margot Foster</dd>
				</div>
				<div class="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
					<dt class="text-sm font-medium leading-6 text-gray-900">Application for</dt>
					<dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">Backend Developer</dd>
				</div>
				<div class="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
					<dt class="text-sm font-medium leading-6 text-gray-900">Email address</dt>
					<dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">margotfoster@example.com</dd>
				</div>
				<div class="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
					<dt class="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
					<dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">$120,000</dd>
				</div>
				<div class="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
					<dt class="text-sm font-medium leading-6 text-gray-900">About</dt>
					<dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
						Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
					</dd>
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
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const step = ref('choose-a-plan');
const stepNames = ['choose-a-plan', 'organization-info', 'contact-info', 'application'];

const camel2title = (str) =>
	str
		.replace(/([A-Z])/g, (match) => ` ${match}`)
		.replace(/(-)/g, (match) => ` `)
		.replace(/^./, (match) => match.toUpperCase())
		.trim();
</script>

<style></style>
