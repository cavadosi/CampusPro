<template>
	<div>
		<TransitionRoot as="template" :show="sidebarOpen">
			<Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
				<TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
					<div class="fixed inset-0" />
				</TransitionChild>

				<div class="fixed inset-0 flex">
					<TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
						<DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
							<TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
								<div class="absolute left-full top-0 flex w-16 justify-center pt-5">
									<button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
										<span class="sr-only">Close sidebar</span>
										<IconHeroicons:x-mark-solid class="h-8 w-8 text-tbase" aria-hidden="true" />
									</button>
								</div>
							</TransitionChild>
							<!-- Sidebar component, swap this element with another sidebar if you like -->
							<div class="flex grow flex-col gap-y-5 bg-gradient-to-bl from-accent-800 to-slate-900 transition-colors duration-300 p-4">
								<div class="flex h-16 shrink-0 items-center border-b border-accent-800 pb-4">
									<NuxtLink href="/campus" class="-m-1.5 p-1.5">
										<span class="sr-only">CampusPro</span>
										<Favicon class="h-10 w-auto" />
									</NuxtLink>
								</div>
								<nav class="flex flex-1 flex-col space-y-4">
									<h2 class="text-zinc-400 font-extralight text-sm uppercase">Navigation</h2>
									<ul role="list" class="flex flex-1 flex-col gap-y-7">
										<li>
											<ul role="list" class="space-y-2">
												<li v-for="item in navigation" :key="item.name">
													<NavigationTitle :href="item.href" :icon="item.icon" :name="item.name" />
												</li>
											</ul>
										</li>
									</ul>
								</nav>
								<div class="grow flex items-end justify-center">
									<Button class="grow flex gap-x-4 items-center bg-accent/15 hover:bg-accent/30 rounded-xl p-1.5 text-zinc-50">
										<NuxtImg class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" format="webp" loading="lazy" />
										<p class="text-pretty">Tom Cook</p>
									</Button>
								</div>
								<div class="-mt-2 flex gap-2">
									<Button class="flex group items-center bg-accent/15 hover:bg-accent/30 rounded-xl p-1.5 text-zinc-50">
										<IconMaterial-symbols:notifications class="h-6 w-6 text-zinc-400 group-hover:hidden" aria-hidden="true" />
										<IconMaterial-symbols:notifications-active class="h-6 w-6 text- hidden group-hover:block" aria-hidden="true" />
									</Button>
									<Button class="flex items-center bg-accent/15 hover:bg-accent/30 rounded-xl p-1.5 text-zinc-400 hover:text-zinc-50">
										<IconHeroicons:cog-6-tooth-20-solid class="h-6 w-6 shrink-0" aria-hidden="true" />
									</Button>
								</div>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</Dialog>
		</TransitionRoot>
		<!-- Static sidebar for desktop -->
		<div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
			<!-- Sidebar component, swap this element with another sidebar if you like -->
			<div class="flex grow flex-col gap-y-5 transition-colors duration-300 p-4">
				<div class="flex h-16 shrink-0 items-center border-b border-accent-800 pb-4">
					<NuxtLink href="/campus" class="-m-1.5 p-1.5">
						<span class="sr-only">CampusPro</span>
						<Favicon class="h-10 w-auto" />
					</NuxtLink>
				</div>
				<inputSpotlight />
				<nav class="flex flex-1 flex-col space-y-4">
					<h2 class="text-zinc-400 font-extralight text-sm uppercase">Navigation</h2>
					<ul role="list" class="flex flex-1 flex-col gap-y-7">
						<li>
							<ul role="list" class="space-y-2">
								<li v-for="item in navigation" :key="item.name">
									<NavigationTitle :href="item.href" :icon="item.icon" :name="item.name" />
								</li>
							</ul>
						</li>
					</ul>
				</nav>
				<div class="grow flex items-end justify-center">
					<Button class="grow flex gap-x-4 items-center bg-accent/15 hover:bg-accent/30 rounded-xl p-1.5 text-zinc-50">
						<NuxtImg class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" format="webp" loading="lazy" />
						<p class="text-pretty">Tom Cook</p>
					</Button>
				</div>
				<div class="-mt-2 flex gap-2">
					<Button class="flex group items-center bg-accent/15 hover:bg-accent/30 rounded-xl p-1.5 text-zinc-50">
						<IconMaterial-symbols:notifications class="h-6 w-6 text-zinc-400 group-hover:hidden" aria-hidden="true" />
						<IconMaterial-symbols:notifications-active class="h-6 w-6 text- hidden group-hover:block" aria-hidden="true" />
					</Button>
					<Button class="flex items-center bg-accent/15 hover:bg-accent/30 rounded-xl p-1.5 text-zinc-400 hover:text-zinc-50">
						<IconHeroicons:cog-6-tooth-20-solid class="h-6 w-6 shrink-0" aria-hidden="true" />
					</Button>
				</div>
			</div>
		</div>
		<div class="sticky top-0 z-40 flex h-16 shrink-0 items-center lg:hidden gap-x-4 bg-transparent border-b border-primary/30 shadow-sm px-4 sm:gap-x-6 sm:px-6 lg:px-8 transition-colors duration-300">
			<button type="button" class="-m-2.5 p-2.5 text-tbase lg:hidden" @click="sidebarOpen = true">
				<span class="sr-only">Open sidebar</span>
				<IconHeroicons:bars-3 class="h-6 w-6" aria-hidden="true" />
			</button>

			<!-- Separator -->
			<div class="h-6 w-px bg-tbase/10 lg:hidden" aria-hidden="true" />

			<div class="flex flex-1 gap-x-4 items-center justify-end lg:gap-x-4 my-2">
				<div class="flex items-center gap-x-2 lg:gap-x-4">
					<!-- Separator -->
					<div class="hidden lg:block lg:h-6 lg:w-px lg:bg-tbase/10" aria-hidden="true" />
				</div>
			</div>
		</div>

		<main class="flex flex-col max-w-full w-screen max-h-full h-[calc(100vh-64px)] lg:h-screen lg:pl-64 lg:p-2">
			<div class="px-2 lg:rounded-md max-w-full w-full max-h-full h-full overflow-x-auto overflow-y-clip scrollbar transition-colors duration-300 bg-bg">
				<!-- Your content -->
				<slot />
			</div>
		</main>
	</div>
</template>

<style scoped></style>

<script setup>
import { ref } from 'vue';
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems, TransitionChild, TransitionRoot } from '@headlessui/vue';

const props = defineProps({
	navigation: {
		type: Object,
		require: true
	},
	elements: {
		type: Object,
		require: true
	},
	userNavigation: {
		type: Object
	}
});

const { navigation, elements, userNavigation } = toRefs(props);
const sidebarOpen = ref(false);
</script>
