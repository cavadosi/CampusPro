<template>
	<header>
		<nav class="mx-auto inset-0 flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
			<div class="flex lg:flex-1">
				<NuxtLink href="/landing" class="-m-1.5 p-1.5">
					<span class="sr-only">CampusPro</span>
					<Favicon class="h-10 w-auto" />
				</NuxtLink>
			</div>
			<div class="flex lg:hidden">
				<button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
					<span class="sr-only">Open main menu</span>
					<IconHeroicons:bars-3 class="h-6 w-6" aria-hidden="true" />
				</button>
			</div>
			<PopoverGroup class="hidden lg:flex lg:gap-x-12">
				<Popover class="relative">
					<PopoverButton class="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 pl-0.5">
						<span>Product</span>
						<IconHeroicons:chevron-down class="h-5 w-5" aria-hidden="true" />
					</PopoverButton>

					<transition
						enter-active-class="transition ease-out duration-200"
						enter-from-class="opacity-0 translate-y-1"
						enter-to-class="opacity-100 translate-y-0"
						leave-active-class="transition ease-in duration-150"
						leave-from-class="opacity-100 translate-y-0"
						leave-to-class="opacity-0 translate-y-1"
					>
						<PopoverPanel class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
							<div class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
								<div class="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
									<div v-for="item in product" :key="item.name" class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
										<div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
											<component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-primary" aria-hidden="true" />
										</div>
										<div>
											<NuxtLink :href="item.href" class="font-semibold text-gray-900">
												{{ item.name }}
												<span class="absolute inset-0" />
											</NuxtLink>
											<p class="mt-1 text-gray-600">{{ item.description }}</p>
										</div>
									</div>
								</div>
							</div>
						</PopoverPanel>
					</transition>
				</Popover>
				<NuxtLink href="/landing/pricing" class="text-sm font-semibold leading-6 text-gray-900 -ml-2 px-1">Pricing</NuxtLink>
				<NuxtLink href="/landing/about-us" class="text-sm font-semibold leading-6 text-gray-900 px-1">About us</NuxtLink>
			</PopoverGroup>
			<div class="hidden lg:flex lg:flex-1 lg:justify-end">
				<NuxtLink href="/login" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></NuxtLink>
			</div>
		</nav>
		<Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
			<div class="fixed inset-0 z-10" />
			<DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
				<div class="flex items-center justify-between">
					<NuxtLink href="/landing" class="-m-1.5 p-1.5">
						<span class="sr-only">Your Company</span>
						<Favicon class="h-10 w-auto" />
					</NuxtLink>
					<button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
						<span class="sr-only">Close menu</span>
						<IconHeroicons:x-mark-solid class="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							<Disclosure as="div" class="-mx-3" v-slot="{ open }">
								<DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
									Product
									<IconHeroicons:chevron-down-solid :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
								</DisclosureButton>
								<DisclosurePanel class="mt-2 space-y-2">
									<DisclosureButton v-for="item in [...product, ...callsToAction]" :key="item.name" as="a" :href="item.href" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</DisclosureButton>
								</DisclosurePanel>
							</Disclosure>
							<NuxtLink href="/landing/pricing" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Pricing</NuxtLink>
							<NuxtLink href="/landing/about-us" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About us</NuxtLink>
						</div>
						<div class="py-6">
							<NuxtLink href="/login" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</NuxtLink>
						</div>
					</div>
				</div>
			</DialogPanel>
		</Dialog>
	</header>
</template>

<script setup>
import { ref } from 'vue';
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue';

import NewsIcon from '~icons/fluent/news-24-regular';

const product = [
	{
		name: 'Key features',
		description: 'Get a better understanding of our product',
		href: '/landing#KeyFeatures',
		icon: NewsIcon
	},
	{
		name: 'How It Works',
		description: 'Get a better understanding of your traffic',
		href: '/landing#HowItWorks',
		icon: NewsIcon
	},
	{
		name: 'Benefits for Students/Teachers',
		description: 'Get a better understanding of your traffic',
		href: '/landing#BenefitsForStudents',
		icon: NewsIcon
	},
	{
		name: 'Showcase',
		description: 'Get a better understanding of your traffic',
		href: '/landing#Showcase',
		icon: NewsIcon
	},
	{
		name: 'FAQs (Frequently Asked Questions)',
		description: 'Get a better understanding of your traffic',
		href: '/landing#FAQ',
		icon: NewsIcon
	},
	{
		name: 'Contact us',
		description: 'Get aasdjkkhdskjadhsjkdhajksdhasdkashdkjah ',
		href: '/landing#ContactUs',
		icon: NewsIcon
	}
];
const callsToAction = [
	{ name: 'Watch demo', href: '#', icon: NewsIcon },
	{ name: 'Contact sales', href: '#', icon: NewsIcon }
];

const mobileMenuOpen = ref(false);
</script>
