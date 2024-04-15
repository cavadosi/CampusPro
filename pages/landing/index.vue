<template>
	<div>
		<div class="relative isolate pt-14">
			<div class="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
				<div
					class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent to-lightaccent opacity-100 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				/>
			</div>
			<div class="py-24 sm:py-32 lg:pb-40">
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div class="mx-auto max-w-2xl text-center">
						<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Taking <span class="text-accent">learning</span> to the next level</h1>
						<p class="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
						<div class="mt-10 flex items-center justify-center gap-x-6">
							<a href="#" class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
							<a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
						</div>
					</div>
					<div class="mt-16 flow-root sm:mt-24">
						<div class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
							<img src="https://tailwindui.com/img/component-images/project-app-screenshot.png" alt="App screenshot" width="2432" height="1442" class="rounded-md shadow-2xl ring-1 ring-gray-900/10" />
						</div>
					</div>
				</div>
				<div class="mx-auto space-y-16 max-w-7xl px-6 lg:px-8 mt-20">
					<!-- Key features section -->
					<section id="KeyFeatures" class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"></section>
					<!-- How it works section -->

					<section id="HowItWorks" class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"></section>
					<!-- Benefits for students section -->
					<section id="BenefitsForStudents" class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"></section>
					<!-- Benefits for teachers section -->
					<section id="BenefitsForTeachers" class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"></section>
					<!-- Showcase section -->

					<section id="Showcase" class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
						<div class="bg-white pt-8 lg:pt-12">
							<div class="mx-auto max-w-7xl px-6 lg:px-8">
								<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
									<p class="text-base font-semibold leading-7 text-primary-300">Deploy faster</p>
									<h1 class="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">A better workflow</h1>
									<div class="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 lg:max-w-none lg:grid-cols-2">
										<div>
											<p>
												Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus,
												volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.
											</p>
											<p class="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas.</p>
										</div>
										<div>
											<p>Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim eget. Est augue maecenas risus nulla ultrices congue nunc tortor. Enim et nesciunt doloremque nesciunt voluptate.</p>
											<p class="mt-8">
												Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
												et ut. Ac lorem vel integer orci.
											</p>
										</div>
									</div>
									<dl class="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
										<div v-for="(stat, statIdx) in stats" :key="statIdx" class="flex flex-col-reverse gap-y-3 border-l border-gray/70 pl-6">
											<dt class="text-base leading-7 text-slate-500">{{ stat.label }}</dt>
											<dd class="text-3xl font-semibold tracking-tight text-black">{{ stat.value }}</dd>
										</div>
									</dl>
								</div>
							</div>
						</div>

						<div class="bg-white py-24 sm:py-32">
							<div class="mx-auto max-w-7xl px-6 lg:px-8">
								<div class="mx-auto max-w-2xl lg:max-w-none">
									<h2 class="text-lg font-semibold leading-8 text-gray-900">Trusted by the world’s most innovative teams</h2>
									<div class="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
										<img class="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1" src="https://tailwindui.com/img/logos/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48" />
										<img class="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1" src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg" alt="Reform" width="158" height="48" />
										<img class="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1" src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48" />
										<img class="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1" src="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48" />
										<img class="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1" src="https://tailwindui.com/img/logos/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48" />
									</div>
								</div>
							</div>
						</div>
					</section>
					<!-- FAQ section -->
					<section id="FAQ" class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
						<div class="bg-white">
							<div class="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
								<div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
									<h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
									<dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
										<Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
											<dt>
												<DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
													<span class="text-base font-semibold leading-7">{{ faq.question }}</span>
													<span class="ml-6 flex h-7 items-center">
														<IconHeroicons:plus-20-solid v-if="!open" class="h-6 w-6" aria-hidden="true" />
														<IconHeroicons:minus-20-solid v-else class="h-6 w-6" aria-hidden="true" />
													</span>
												</DisclosureButton>
											</dt>
											<DisclosurePanel as="dd" class="mt-2 pr-12">
												<p class="text-base leading-7 text-gray-600">{{ faq.answer }}</p>
											</DisclosurePanel>
										</Disclosure>
									</dl>
								</div>
							</div>
						</div>
					</section>
					<!-- CTA section -->
					<section id="CTA" class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
						<div class="bg-white">
							<div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
								<div class="mx-auto max-w-2xl text-center">
									<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Boost your productivity.<br />Start using our app today.</h2>
									<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
									<div class="mt-10 flex items-center justify-center gap-x-6">
										<a href="#" class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Get started</a>
										<a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
				<div
					class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-accent to-lightaccent opacity-100 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

const stats = [
	{ label: 'Founded', value: '2021' },
	{ label: 'Employees', value: '37' },
	{ label: 'Countries', value: '12' },
	{ label: 'Raised', value: '$25M' }
];
const faqs = [
	{
		question: "What's the best thing about Switzerland?",
		answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
	},
	{
		question: "What's the best thing about Switzerland?",
		answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
	},
	{
		question: "What's the best thing about Switzerland?",
		answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
	},
	{
		question: "What's the best thing about Switzerland?",
		answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
	}
];
definePageMeta({
	layout: 'landing'
});
</script>

<style scoped></style>
