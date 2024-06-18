<template>
	<form class="relative max-w-xs w-full" action="#" method="GET">
		<input
			v-model="inputValue"
			@mousemove="handleMouseMove"
			@focus="handleFocus"
			@blur="handleBlur"
			@mouseenter="handleMouseEnter"
			@mouseleave="handleMouseLeave"
			autocomplete="off"
			placeholder="Search..."
			type="email"
			name="email"
			class="h-10 w-full cursor-default rounded-full border border-accent-800 p-3.5 text-tbase transition-colors duration-300 placeholder:select-none placeholder-text-tbase/80 bg-transparent focus:border-accent focus:outline-none"
		/>

		<input
			ref="divRef"
			disabled
			:style="{
				border: '1px solid hsl(175.08,52.14%,54.12%)',
				opacity,
				WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`
			}"
			aria-hidden="true"
			class="pointer-events-none absolute left-0 top-0 z-10 h-10 w-full cursor-default rounded-full border border-accent bg-[transparent] p-3.5 opacity-0 transition-opacity duration-500 placeholder:select-none"
		/>
		<IconHeroicons:magnifying-glass-20-solid class="pointer-events-none absolute mr-4 inset-y-0 right-0 h-full w-5 text-zinc-400" aria-hidden="true" />
	</form>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
	setup() {
		const divRef = ref(null);
		const inputValue = ref('');
		const isFocused = ref(false);
		const position = reactive({ x: 0, y: 0 });
		const opacity = ref(0);

		const handleMouseMove = (e) => {
			if (!divRef.value || isFocused.value) return;

			const rect = divRef.value.getBoundingClientRect();

			position.x = e.clientX - rect.left;
			position.y = e.clientY - rect.top;
		};

		const handleFocus = () => {
			isFocused.value = true;
			opacity.value = 1;
		};

		const handleBlur = () => {
			isFocused.value = false;
			opacity.value = 0;
		};

		const handleMouseEnter = () => {
			opacity.value = 1;
		};

		const handleMouseLeave = () => {
			opacity.value = 0;
		};

		return {
			divRef,
			inputValue,
			handleMouseMove,
			handleFocus,
			handleBlur,
			handleMouseEnter,
			handleMouseLeave,
			position,
			opacity
		};
	}
};
</script>
