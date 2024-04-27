<template>
	<div class="block items-center justify-start">
		<section v-if="activeStep.id === 0">
			<div class="px-4 sm:px-0">
				<h3 class="text-base font-semibold leading-7 text-tbase">{{ activeStep.title }}</h3>
				<p class="mt-1 max-w-2xl text-sm leading-6 text-tlight">{{ activeStep.description }}</p>
			</div>
			<div class="mt-6 border-t border-tbase">
				<dl class="divide-y divide-tlight">
					<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt class="text-sm font-medium leading-6 text-tbase">Full name</dt>
						<dd class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0">Margot Foster</dd>
					</div>

					<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt class="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
						<dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
							<ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
								<li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
									<div class="flex w-0 flex-1 items-center">
										<div class="ml-4 flex min-w-0 flex-1 gap-2">
											<span class="truncate font-medium">resume_back_end_developer.pdf</span>
											<span class="flex-shrink-0 text-gray-400">2.4mb</span>
										</div>
									</div>
									<div class="ml-4 flex-shrink-0">
										<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
									</div>
								</li>
								<li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
									<div class="flex w-0 flex-1 items-center">
										<div class="ml-4 flex min-w-0 flex-1 gap-2">
											<span class="truncate font-medium">coverletter_back_end_developer.pdf</span>
											<span class="flex-shrink-0 text-gray-400">4.5mb</span>
										</div>
									</div>
									<div class="ml-4 flex-shrink-0">
										<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
									</div>
								</li>
							</ul>
						</dd>
					</div>
				</dl>
			</div>
		</section>
		<section v-if="activeStep.id === 1">
			<div class="px-4 sm:px-0">
				<h3 class="text-base font-semibold leading-7 text-tbase">{{ activeStep.title }}</h3>
				<p class="mt-1 max-w-2xl text-sm leading-6 text-tlight">{{ activeStep.description }}</p>
			</div>
			<div class="mt-6 border-t border-tbase">
				<dl class="divide-y divide-tlight">
					<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt class="text-sm font-medium leading-6 text-tbase">Full name</dt>
						<dd class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0">Margot Foster</dd>
					</div>

					<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt class="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
						<dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
							<ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
								<li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
									<div class="flex w-0 flex-1 items-center">
										<div class="ml-4 flex min-w-0 flex-1 gap-2">
											<span class="truncate font-medium">resume_back_end_developer.pdf</span>
											<span class="flex-shrink-0 text-gray-400">2.4mb</span>
										</div>
									</div>
									<div class="ml-4 flex-shrink-0">
										<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
									</div>
								</li>
								<li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
									<div class="flex w-0 flex-1 items-center">
										<div class="ml-4 flex min-w-0 flex-1 gap-2">
											<span class="truncate font-medium">coverletter_back_end_developer.pdf</span>
											<span class="flex-shrink-0 text-gray-400">4.5mb</span>
										</div>
									</div>
									<div class="ml-4 flex-shrink-0">
										<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
									</div>
								</li>
							</ul>
						</dd>
					</div>
				</dl>
			</div>
		</section>
		<section v-if="activeStep.id === 2">
			<div class="px-4 sm:px-0">
				<h3 class="text-base font-semibold leading-7 text-tbase">{{ activeStep.title }}</h3>
				<p class="mt-1 max-w-2xl text-sm leading-6 text-tlight">{{ activeStep.description }}</p>
			</div>
			<div class="mt-6 border-t border-tbase">
				<dl class="divide-y divide-tlight">
					<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt class="text-sm font-medium leading-6 text-tbase">Full name</dt>
						<dd class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0">Margot Foster</dd>
					</div>

					<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt class="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
						<dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
							<ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
								<li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
									<div class="flex w-0 flex-1 items-center">
										<div class="ml-4 flex min-w-0 flex-1 gap-2">
											<span class="truncate font-medium">resume_back_end_developer.pdf</span>
											<span class="flex-shrink-0 text-gray-400">2.4mb</span>
										</div>
									</div>
									<div class="ml-4 flex-shrink-0">
										<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
									</div>
								</li>
								<li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
									<div class="flex w-0 flex-1 items-center">
										<div class="ml-4 flex min-w-0 flex-1 gap-2">
											<span class="truncate font-medium">coverletter_back_end_developer.pdf</span>
											<span class="flex-shrink-0 text-gray-400">4.5mb</span>
										</div>
									</div>
									<div class="ml-4 flex-shrink-0">
										<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
									</div>
								</li>
							</ul>
						</dd>
					</div>
				</dl>
			</div>
		</section>
		<section v-if="activeStep.id === 3">
			<div class="px-4 sm:px-0">
				<h3 class="text-base font-semibold leading-7 text-tbase">{{ activeStep.title }}</h3>
				<p class="mt-1 max-w-2xl text-sm leading-6 text-tlight">{{ activeStep.description }}</p>
			</div>
			<div class="mt-6 border-t border-tbase">
				<dl class="divide-y divide-tlight">
					<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt class="text-sm font-medium leading-6 text-tbase">Full name</dt>
						<dd class="mt-1 text-sm leading-6 text-tlight sm:col-span-2 sm:mt-0">Margot Foster</dd>
					</div>

					<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt class="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
						<dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
							<ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
								<li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
									<div class="flex w-0 flex-1 items-center">
										<div class="ml-4 flex min-w-0 flex-1 gap-2">
											<span class="truncate font-medium">resume_back_end_developer.pdf</span>
											<span class="flex-shrink-0 text-gray-400">2.4mb</span>
										</div>
									</div>
									<div class="ml-4 flex-shrink-0">
										<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
									</div>
								</li>
								<li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
									<div class="flex w-0 flex-1 items-center">
										<div class="ml-4 flex min-w-0 flex-1 gap-2">
											<span class="truncate font-medium">coverletter_back_end_developer.pdf</span>
											<span class="flex-shrink-0 text-gray-400">4.5mb</span>
										</div>
									</div>
									<div class="ml-4 flex-shrink-0">
										<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
									</div>
								</li>
							</ul>
						</dd>
					</div>
				</dl>
			</div>
		</section>
	</div>
</template>

<script setup>
const steps = [
	{
		id: 0,
		title: 'Contact info',
		description: 'add your institution contact info'
	},
	{
		id: 1,
		title: 'Contact info1',
		description: 'add your institution contact info'
	},
	{
		id: 2,
		title: 'Contact info2',
		description: 'add your institution contact info'
	},
	{
		id: 3,
		title: 'Contact info3',
		description: 'add your institution contact info'
	}
];
const activeStep = ref(steps[3]);
</script>
