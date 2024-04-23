<template>
	<header>
		<nav class="mx-auto inset-0 flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
			<div class="flex lg:flex-1">
				<NuxtLink href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">CampusPro</span>
					<Favicon class="h-10 w-auto" />
				</NuxtLink>
			</div>
			<div class="flex lg:hidden">
				<button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-tlight" @click="mobileMenuOpen = true">
					<span class="sr-only">Open main menu</span>
					<IconHeroicons:bars-3 class="h-6 w-6" aria-hidden="true" />
				</button>
			</div>
			<PopoverGroup class="hidden lg:flex lg:gap-x-12">
				<Popover class="relative">
					<PopoverButton class="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 transition-colors duration-100 text-tbase pl-0.5">
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
							<div class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-bg text-sm leading-6 shadow-lg ring-1 ring-tbase/5 lg:max-w-3xl">
								<div class="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
									<div v-for="item in product" :key="item.name" class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-bglight">
										<div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-bg group-hover:bg-bg-light">
											<component :is="item.icon" class="h-6 w-6 text-tlight group-hover:text-primary" aria-hidden="true" />
										</div>
										<div>
											<NuxtLink :href="item.href" class="font-semibold text-tbase">
												{{ item.name }}
												<span class="absolute inset-0" />
											</NuxtLink>
											<p class="mt-1 text-tlight">{{ item.description }}</p>
										</div>
									</div>
								</div>
							</div>
						</PopoverPanel>
					</transition>
				</Popover>
				<NuxtLink href="/pricing" class="text-sm font-semibold leading-6 text-tbase -ml-2 px-1">Pricing</NuxtLink>
				<NuxtLink href="/about-us" class="text-sm font-semibold leading-6 text-tbase px-1">About us</NuxtLink>
			</PopoverGroup>
			<div class="hidden lg:flex lg:flex-1 lg:justify-end">
				<ThemeSwitch />
				<NuxtLink href="/login" class="text-sm font-semibold leading-6 text-tbase ml-6">Log in <span aria-hidden="true">&rarr;</span></NuxtLink>
			</div>
		</nav>
		<Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
			<div class="fixed inset-0 z-10" />
			<DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-bg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-tbase/10">
				<div class="flex items-center justify-between">
					<NuxtLink href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">CampusPro</span>
						<Favicon class="h-10 w-auto" />
					</NuxtLink>
					<button type="button" class="-m-2.5 rounded-md p-2.5 text-tlight" @click="mobileMenuOpen = false">
						<span class="sr-only">Close menu</span>
						<IconHeroicons:x-mark-solid class="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							<Disclosure as="div" class="-mx-3" v-slot="{ open }">
								<DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-tbase hover:bg-bg">
									Product
									<IconHeroicons:chevron-down-solid :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
								</DisclosureButton>
								<DisclosurePanel class="mt-2 space-y-2">
									<DisclosureButton v-for="item in [...product, ...callsToAction]" :key="item.name" as="a" :href="item.href" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-tbase hover:bg-bg">{{ item.name }}</DisclosureButton>
								</DisclosurePanel>
							</Disclosure>
							<NuxtLink href="/pricing" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-tbase hover:bg-bg">Pricing</NuxtLink>
							<NuxtLink href="/about-us" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-tbase hover:bg-bg">About us</NuxtLink>
						</div>
						<div class="py-6">
							<NuxtLink href="/login" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-tbase hover:bg-bg">Log in</NuxtLink>
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

import TipsIcon from '~icons/material-symbols/tips-and-updates-outline-rounded';
import SystemIcon from '~icons/tdesign/system-coordinate';
import GraphIcon from '~icons/streamline/money-graph-bar-increase-up-product-performance-increase-arrow-graph-business-chart';
import PresentationIcon from '~icons/ph/presentation-bold';
import FAQsIcon from '~icons/mdi/comment-question-outline';
import ContactIcon from '~icons/ic/outline-contacts';

const product = [
	{
		name: 'Key features',
		description: 'The essential traits of our product that set us apart from others',
		href: '/#KeyFeatures',
		icon: TipsIcon
	},
	{
		name: 'How It Works',
		description: 'Discover how our unique system works',
		href: '/#HowItWorks',
		icon: SystemIcon
	},
	{
		name: 'Benefits for Students/Teachers',
		description: 'Find out how Campus Pro enhances efficiency and organization',
		href: '/#Benefits',
		icon: GraphIcon
	},
	{
		name: 'Showcase',
		description: 'A visual demonstration of our software',
		href: '/#Showcase',
		icon: PresentationIcon
	},
	{
		name: 'FAQs (Frequently Asked Questions)',
		description: 'Find quick answers in our FAQs',
		href: '/#FAQ',
		icon: FAQsIcon
	},
	{
		name: 'Contact us',
		description: 'Get in touch for further details',
		href: '/#CTA',
		icon: ContactIcon
	}
];
const callsToAction = [
	{ name: 'Watch demo', href: '#', icon: TipsIcon },
	{ name: 'Contact sales', href: '#', icon: TipsIcon }
];

const mobileMenuOpen = ref(false);
</script>
