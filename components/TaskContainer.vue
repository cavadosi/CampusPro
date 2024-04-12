<template>
  <!-- container -->

  <div class="flex h-full rounded-md bg-slate-100 overflow-clip p-2">
    <div
      class="flex flex-col items-center justify-center space-y-2 max-w-80 w-80 h-full rounded-md"
    >
      <!-- title -->
      <div class="flex items-center justify-between w-full">
        <h1>{{ columnType }}</h1>
        <h1>...</h1>
      </div>
      <!-- task container -->
      <div class="flex-grow w-full pb-4 overflow-y-auto">
        <div class="flex-col space-y-2 ">
          <TaskCard
            v-for="task in tasks"
            :title="task.title"
            :columnType="columnType"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
const props = defineProps({
  columnType: {
    type: String,
    default: "", // Default value for columnType (if not provided)
  },
  tasks: {
    type: Array,
    default: () => [], // Default value for tasks (an empty array)
  },
});

const { columnType, tasks } = toRefs(props);
</script>
