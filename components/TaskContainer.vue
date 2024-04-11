<template>
  <!-- container -->

  <div class="flex h-full rounded-md bg-slate-100 overflow-clip p-2">
    <div
      class="flex flex-col items-center justify-center space-y-2 max-w-80 w-80 h-full rounded-md"
    >
      <!-- title -->
      <div class="flex items-center justify-between w-80">
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
<!-- <div class="flex bg-slate-100 rounded-md max-h-full px-1 mt-1 pb-2">
  <div
    class="flex-col items-center justify-center min-w-fit max-h-full h-full  text-start px-2 pt-4"
  >
    Container title 
    <div class="flex items-center justify-between mb-4">
      <h1>{{ columnType }}</h1>
      <h1>...</h1>
    </div>
    <div
      class="flex grow items-stretch justify-center max-w-80 w-60 md:w-80 max-h-full h-full text-start"
    >
    <div class="flex-col items-center justify-center w-full space-y-2 h-full overflow-y-auto">

       Card 
      <TaskCard
      v-for="task in tasks"
      :title="task.title"
      :columnType="columnType"
      />
    </div>
    </div>
  </div>
</div> -->

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
