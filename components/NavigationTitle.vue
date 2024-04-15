<template>
	<NuxtLink :to="props.href" @click="handleClick" class="my-link text-primary-300 border-l-8 border-white hover:shadow-md border-y hover:border-primary-300 hover:text-primary-300 flex gap-x-4 p-2 pl-4 text-sm leading-6 font-semibold">
		<component :is="props.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
		{{ props.name }}
	</NuxtLink>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  href: {
    type: String,
    default: ''
  },

  icon: {
    type: Object,
    default: ''
  },

  name: {
    type: String,
    default: ''
  },
});

const handleClick = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/validate');
    if (response.ok) {
      return true; 
    } else {
      throw new Error('Network response was not ok.');
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return false; 
  }
};
</script>
