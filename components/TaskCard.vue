<template>
    <div class="flex bg-white rounded-md h-32">
          <div class="flex justify-between w-full mx-4">
            <h2 class="">{{ title }}</h2>
            <h2 class="">{{ columnType }}</h2>
          </div>
        </div>
</template>



<script setup>

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  columnType: {
    type: String,
    default: '', 
  },

});

const { title, columnType } = toRefs(props);

</script>
