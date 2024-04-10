<template>
  <div class="bg-slate-100 rounded-md px-1 my-5">
    <div
      class="flex-col items-center justify-center min-w-fit text-start px-5 py-4 h-full"
    >
      <!-- Container title -->
      <div class="flex items-center justify-between mb-4">
        <h1>{{ columnType }}</h1>
        <h1>...</h1>
      </div>
      <div
        class="flex-col items-center justify-center space-y-4 min-w-80 w-80 text-start h-full overflow-y-scroll scrollbar"
      >
        <!-- Card -->
        <TaskCard
          v-for="task in tasks"
          :title="task.title"
          :columnType="columnType"
        />
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
