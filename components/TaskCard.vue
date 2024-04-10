<template>
    <div v-if="type == columnType" class="flex bg-lightaccent rounded-md h-36">
          <div class="flex justify-between w-full mx-4 my-2">
            <h2 class="">{{ title }}</h2>
            <h2 class="">{{ type }}</h2>
          </div>
        </div>
</template>



<script setup>

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  },
  columnType: {
    type: String,
    default: '', 
  },

});

const { title, type, columnType } = toRefs(props);

</script>
