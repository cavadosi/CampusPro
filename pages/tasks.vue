<template>
  <div
    class="flex flex-row items-start justify-start gap-x-4 overflow-x-auto scrollbar bg-background m-2"
  >
    <!-- Card container -->
    <TaskContainer
      v-for="column in columns"
      :columnType="column"
      :tasks="tasks"
    />
  </div>
</template>

<script setup>
const tasks = [
  { title: "Card1", type: "TODO" },
  { title: "Card1", type: "TODO" },
  { title: "Card1", type: "TODO" },
  { title: "Card2", type: "TODO" },
  { title: "Card2", type: "TODO" },
  { title: "Card2", type: "TODO" },
  { title: "Card3", type: "TODO" },
  { title: "Card3", type: "CANCELLED" },
  { title: "Card3", type: "CANCELLED" },
  { title: "Card4", type: "CANCELLED" },
  { title: "Card4", type: "CANCELLED" },
  { title: "Card4", type: "CANCELLED" },
  { title: "Card5", type: "CANCELLED" },
  { title: "Card5", type: "CANCELLED" },
  { title: "Card5", type: "DONE" },
  { title: "Card6", type: "DONE" },
  { title: "Card6", type: "DONE" },
  { title: "Card6", type: "DONE" },
  { title: "Card7", type: "DONE" },
  { title: "Card7", type: "DONE" },
  { title: "Card7", type: "DONE" },
  { title: "Card8", type: "IN PROGRESS" },
  { title: "Card9", type: "IN PROGRESS" },
  { title: "Card10", type: "IN PROGRESS" },
  { title: "Card11", type: "IN PROGRESS" },
  { title: "Card12", type: "IN PROGRESS" },
  { title: "Card13", type: "IN PROGRESS" },
];

const columns = ["TODO", "IN PROGRESS", "DONE", "CANCELLED"];
</script>

<style scoped>
.scrollbar {
  scrollbar-color: #71b0dc #efefef;
  scrollbar-width: auto;
}
</style>
