<template>
    <NuxtLink
      :to="props.href"
      class="my-link text-primary-300 border-l-8 border-secondary rounded-e-md hover:shadow-md border-y border-e hover:border-primary-300 hover:text-primary-300 flex gap-x-3 p-2 text-sm leading-6 font-semibold">
      <component
        :is="props.icon"
        class="h-6 w-6 shrink-0"
        aria-hidden="true"
      />
      {{ props.name }}
    </NuxtLink>
</template>

<script setup>

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

</script>