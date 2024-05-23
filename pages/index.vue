<template>
	<div>
		<div class="relative isolate pt-14 overflow-hidden">
			<div class="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
				<div
					class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent to-lightaccent opacity-100 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				/>
			</div>
			<div class="py-24 sm:py-40">
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div class="mx-auto max-w-2xl text-center">
						<h1 class="text-4xl font-bold tracking-tight text-tbase sm:text-6xl transition-colors duration-300">Taking <span class="text-accent transition-colors duration-300">learning</span> to the next level</h1>
						<p class="mt-6 text-lg leading-8 text-tlight">A fully customizable online learning tool designed to give teaching a more modern and flexible aproach and made for institutions of all sizes.</p>
						<div class="mt-10 flex items-center justify-center gap-x-6">
							<ButtonGradient link="/register" text="Get started" />
							<NuxtLink href="#" class="text-sm font-semibold leading-6 text-tbase">Learn more <span aria-hidden="true">→</span></NuxtLink>
						</div>
					</div>
					<div class="mt-16 flow-root sm:mt-24">
						<div class="-m-2 rounded-xl bg-tbase/5 p-2 ring-1 ring-inset ring-tbase/10 lg:-m-4 lg:rounded-2xl lg:p-4">
							<NuxtImg src="https://tailwindui.com/img/component-images/project-app-screenshot.png" alt="App screenshot" format="webp" width="2432" height="1442" class="rounded-md shadow-2xl ring-1 ring-tbase/10" />
						</div>
					</div>
				</div>
				<div class="mx-auto space-y-16 max-w-7xl px-6 lg:px-8 mt-20">
					<!-- Key features section -->
					<section id="KeyFeatures" class="py-24 sm:py-32">
						<div class="mx-auto max-w-7xl px-6 lg:px-8">
							<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
								<div data-aos="fade-right">
									<h2 class="text-base font-semibold leading-7 text-primary">Everything you need</h2>
									<p class="mt-2 text-3xl font-bold tracking-tight text-tbase sm:text-4xl">All-in-one platform</p>
									<p class="mt-6 text-base leading-7 text-tlight">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
								</div>
								<dl class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-tlight sm:grid-cols-2 lg:gap-y-16">
									<div v-for="feature in features" :key="feature.name" class="relative pl-9" data-aos="fade-in">
										<dt class="font-semibold text-tbase">
											<IconHeroicons:check class="absolute left-0 top-1 h-5 w-5 text-primary-300" aria-hidden="true" />
											{{ feature.name }}
										</dt>
										<dd class="mt-2">{{ feature.description }}</dd>
									</div>
								</dl>
							</div>
						</div>
					</section>

					<!-- How it works section -->
					<section id="HowItWorks" class="overflow-hidden py-24 sm:py-32">
						<div class="mx-auto max-w-7xl md:px-6 lg:px-8">
							<div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
								<div class="px-6 lg:px-0 lg:pr-4 lg:pt-4" data-aos="fade-right">
									<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
										<h2 class="text-base font-semibold leading-7 text-primary">Deploy faster</h2>
										<p class="mt-2 text-3xl font-bold tracking-tight text-tbase sm:text-4xl">A better workflow</p>
										<p class="mt-6 text-lg leading-8 text-tlight">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
										<dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-tlight lg:max-w-none">
											<div v-for="feature in usage" :key="feature.name" class="relative pl-9">
												<dt class="inline font-semibold text-tbase">
													<component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-accent" aria-hidden="true" />
													{{ feature.name }}
												</dt>
												{{ ' ' }}
												<dd class="inline">{{ feature.description }}</dd>
											</div>
										</dl>
									</div>
								</div>
								<div class="sm:px-6 lg:px-0" data-aos="fade-left">
									<div class="relative isolate overflow-hidden rounded-3xl bg-primary-300 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl shadow-lg sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
										<div class="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-priamry-100 opacity-20 ring-1 ring-inset ring-white" aria-hidden="true" />
										<div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
											<NuxtImg src="https://tailwindui.com/img/component-images/project-app-screenshot.png" alt="Product screenshot" width="2432" height="1442" format="webp" loading="lazy" class="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10" />
										</div>
										<div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-tbase/10 sm:rounded-3xl" aria-hidden="true" />
									</div>
								</div>
							</div>
						</div>
					</section>

					<!-- Benefits for students section -->
					<section id="Benefits" class="relative isolate pb-32 pt-24 sm:pt-32">
						<div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
							<div
								class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-secondary to-primary"
								style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
							/>
						</div>
						<div class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end" aria-hidden="true">
							<div
								class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-accent to-darkaccent xl:ml-0 xl:mr-[calc(50%-12rem)]"
								style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
							/>
						</div>
						<div class="mx-auto max-w-7xl px-6 lg:px-8">
							<div class="mx-auto max-w-xl text-center" data-aos="fade-down">
								<h2 class="text-lg font-semibold leading-8 tracking-tight text-primary">Testimonials</h2>
								<p class="mt-2 text-3xl font-bold tracking-tight text-tbase sm:text-4xl">We have worked with thousands of amazing people</p>
							</div>
							<div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-tbase sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4" data-aos="fade-in" data-aos-duration="300">
								<figure class="rounded-2xl bg-bglight/30 shadow-lg ring-1 ring-tbasse/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
									<blockquote class="p-6 text-lg font-semibold leading-7 tracking-tight text-tbase sm:p-12 sm:text-xl sm:leading-8">
										<p>{{ `“${featuredTestimonial.body}”` }}</p>
									</blockquote>
									<figcaption class="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-tbase/10 px-6 py-4 sm:flex-nowrap">
										<NuxtImg format="webp" loading="lazy" sizes="40px" class="h-10 w-10 flex-none rounded-full bg-bg" :src="featuredTestimonial.author.imageUrl" alt="" />
										<div class="flex-auto">
											<div class="font-semibold">{{ featuredTestimonial.author.name }}</div>
											<div class="text-tlight">{{ `@${featuredTestimonial.author.handle}` }}</div>
										</div>
										<NuxtImg format="webp" loading="lazy" class="h-10 w-auto flex-none" :src="featuredTestimonial.author.logoUrl" alt="" />
									</figcaption>
								</figure>
								<div v-for="(columnGroup, columnGroupIdx) in testimonials" :key="columnGroupIdx" class="space-y-8 xl:contents xl:space-y-0">
									<div
										v-for="(column, columnIdx) in columnGroup"
										:key="columnIdx"
										:class="[(columnGroupIdx === 0 && columnIdx === 0) || (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1) ? 'xl:row-span-2' : 'xl:row-start-1', 'space-y-8']"
										data-aos="fade-left"
										:data-aos-offset="Math.floor(Math.random() * (300 - 100 + 1)) + 100"
									>
										<figure v-for="testimonial in column" :key="testimonial.author.handle" class="rounded-2xl bg-bglight/30 p-6 shadow-lg ring-1 ring-tbase/5">
											<blockquote class="text-tbase">
												<p>{{ `“${testimonial.body}”` }}</p>
											</blockquote>
											<figcaption class="mt-6 flex items-center gap-x-4">
												<NuxtImg format="webp" loading="lazy" sizes="40px" class="h-10 w-10 rounded-full bg-bg" :src="testimonial.author.imageUrl" alt="" />
												<div>
													<div class="font-semibold">{{ testimonial.author.name }}</div>
													<div class="text-tlight">{{ `@${testimonial.author.handle}` }}</div>
												</div>
											</figcaption>
										</figure>
									</div>
								</div>
							</div>
						</div>
					</section>
					<!-- Showcase section -->
					<section id="Showcase">
						<div class="pt-8 lg:pt-12">
							<div class="mx-auto max-w-7xl px-6 lg:px-8">
								<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none" data-aos="fade-up">
									<p class="text-base font-semibold leading-7 text-primary-300">Deploy faster</p>
									<h1 class="mt-2 text-3xl font-bold tracking-tight text-tbase sm:text-4xl">A better workflow</h1>
									<div class="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-tlight lg:max-w-none lg:grid-cols-2">
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
										<div v-for="(stat, statIdx) in stats" :key="statIdx" class="flex flex-col-reverse gap-y-3 border-l border-tlight/70 pl-6" data-aos="fade-left" :data-aos-offset="statIdx * 75">
											<dt class="text-base leading-7 text-tlight">{{ stat.label }}</dt>
											<dd class="text-3xl font-semibold tracking-tight text-tbase">{{ stat.value }}</dd>
										</div>
									</dl>
								</div>
							</div>
						</div>

						<div class="py-24 sm:py-32">
							<div class="mx-auto max-w-7xl px-6 lg:px-8">
								<div class="mx-auto max-w-2xl lg:max-w-none" data-aos="fade-right" data-aos-duration="500" data-aos-easing="linear">
									<h2 class="text-lg font-semibold leading-8 text-tbase">Trusted by the world’s most innovative teams</h2>
									<div class="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
										<NuxtImg format="webp" loading="lazy" class="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1" src="https://tailwindui.com/img/logos/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48" />
										<NuxtImg format="webp" loading="lazy" class="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1" src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg" alt="Reform" width="158" height="48" />
										<NuxtImg format="webp" loading="lazy" class="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1" src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48" />
										<NuxtImg format="webp" loading="lazy" class="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1" src="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48" />
										<NuxtImg format="webp" loading="lazy" class="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1" src="https://tailwindui.com/img/logos/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48" />
									</div>
								</div>
							</div>
						</div>
					</section>
					<!-- FAQ section -->
					<section id="FAQ">
						<div class="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
							<div class="mx-auto max-w-4xl divide-y divide-tbase/10">
								<h2 class="text-2xl font-bold leading-10 tracking-tight text-tbase" data-aos="fade-in">Frequently asked questions</h2>
								<dl class="mt-10 space-y-6 divide-y divide-tbase/10">
									<ClientOnly>
										<Disclosure as="div" v-for="(faq, index) in faqs" :key="faq.question" class="pt-6" v-slot="{ open }" data-aos="fade-right" :data-aos-offset="index * 30">
											<dt>
												<DisclosureButton :id="`headlessui-disclosure-button-${index}`" class="flex w-full items-start justify-between text-left text-tbase">
													<span class="text-base font-semibold leading-7">{{ faq.question }}</span>
													<span class="ml-6 flex h-7 items-center">
														<IconHeroicons:plus-20-solid v-if="!open" class="h-6 w-6" aria-hidden="true" />
														<IconHeroicons:minus-20-solid v-else class="h-6 w-6" aria-hidden="true" />
													</span>
												</DisclosureButton>
											</dt>
											<DisclosurePanel as="dd" class="mt-2 pr-12">
												<p class="text-base leading-7 text-tlight">{{ faq.answer }}</p>
											</DisclosurePanel>
										</Disclosure>
									</ClientOnly>
								</dl>
							</div>
						</div>
					</section>

					<!-- CTA section -->
					<section id="CTA">
						<div class="px-6 py-16 sm:px-6 sm:py-20 lg:px-8" data-aos="fade-in" data-aos-anchor-placement="top-center" data-aos-offset="50">
							<div class="mx-auto max-w-2xl text-center">
								<h2 class="text-3xl font-bold tracking-tight text-tbase sm:text-4xl">Boost your productivity.<br />Start using our app today.</h2>
								<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-tlight">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
								<div class="mt-10 flex items-center justify-center gap-x-6">
									<ButtonGradient link="#" text="Get started" />
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
				<div
					class="relative left-[calc(50%)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-accent to-lightaccent opacity-100 sm:left-[calc(50%)] sm:w-[72.1875rem]"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

import CloudArrowUpIcon from '~icons/fluent/grid-24-filled';
import LockClosedIcon from '~icons/fluent/grid-24-filled';
import ServerIcon from '~icons/fluent/grid-24-filled';

function getId(index) {
	const id = `headlessui-disclosure-button-${index}`;
	console.log(`Generated ID for index ${index}: ${id}`);
	return id;
}
const usage = [
	{
		name: 'Push to deploy.',
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
		icon: CloudArrowUpIcon
	},
	{
		name: 'SSL certificates.',
		description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
		icon: LockClosedIcon
	},
	{
		name: 'Database backups.',
		description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
		icon: ServerIcon
	}
];
const features = [
	{
		name: 'Invite team members',
		description: 'Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.'
	},
	{ name: 'List view', description: 'Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.' },
	{
		name: 'Keyboard shortcuts',
		description: 'In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.'
	},
	{
		name: 'Calendars',
		description: 'Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi fugiat sequi.'
	},
	{ name: 'Notifications', description: 'Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci.' },
	{ name: 'Boards', description: 'Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.' },
	{
		name: 'Reporting',
		description: 'Eos laudantium repellat sed architecto earum unde incidunt. Illum sit dolores voluptatem.'
	},
	{
		name: 'Mobile app',
		description: 'Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.'
	}
];
const featuredTestimonial = {
	body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
	author: {
		name: 'Brenna Goyette',
		handle: 'brennagoyette',
		imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
		logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg'
	}
};
const testimonials = [
	[
		[
			{
				body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
				author: {
					name: 'Leslie Alexander',
					handle: 'lesliealexander',
					imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
				}
			}
			// More testimonials...
		],
		[
			{
				body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
				author: {
					name: 'Lindsay Walton',
					handle: 'lindsaywalton',
					imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
				}
			}
			// More testimonials...
		]
	],
	[
		[
			{
				body: 'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.',
				author: {
					name: 'Tom Cook',
					handle: 'tomcook',
					imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
				}
			}
			// More testimonials...
		],
		[
			{
				body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
				author: {
					name: 'Leonard Krasner',
					handle: 'leonardkrasner',
					imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
				}
			}
			// More testimonials...
		]
	]
];
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
