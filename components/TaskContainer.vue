<template>
  <div class="bg-slate-100 rounded-md px-1">
    <div
      class="flex-col items-center justify-center min-w-fit text-start px-5 py-4 h-screen overflow-y-auto scrollbar"
    >
      <!-- Container title -->
      <div class="flex items-center justify-between mb-4">
        <h1>{{ columnType }}</h1>
        <h1>...</h1>
      </div>
      <div
        class="flex-col items-center justify-center space-y-4 min-w-80 w-80 text-start bg-slate-100"
      >
        <!-- Card -->
        <TaskCard
          v-for="task in tasks"
          :key="task.title"
          :title="task.title"
          :type="task.type"
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
