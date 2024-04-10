<template>
  <div
    class="flex flex-row items-start justify-start gap-x-4 h-full overflow-x-auto overflow-y-clip scrollbar  bg-background m-2"
  >
    <!-- Card container -->
    <TaskContainer
      v-for="column in Object.keys(tasks)"
      :columnType="column"
      :tasks="tasks[column]"
    />
  </div>
</template>

<script setup>
const tasks = {
  TODO: [
    { title: "Card1" },
    { title: "Card1" },
    { title: "Card1" },
    { title: "Card2" },
    { title: "Card2" },
    { title: "Card2" },
    { title: "Card3" },
  ],
  INPROGRESS: [
    { title: "Card1" },
    { title: "Card1" },
    { title: "Card1" },
    { title: "Card2" },
    { title: "Card2" },
    { title: "Card2" },
    { title: "Card3" },
  ],
  DONE: [
    { title: "Card1" },
    { title: "Card1" },
    { title: "Card1" },
    { title: "Card2" },
    { title: "Card2" },
    { title: "Card2" },
    { title: "Card3" },
  ],
  CANCELLED: [
    { title: "Card1" },
    { title: "Card1" },
    { title: "Card1" },
    { title: "Card2" },
    { title: "Card2" },
    { title: "Card2" },
    { title: "Card3" },
  ],
};

</script>

<style scoped>
.scrollbar {
  scrollbar-color: #71b0dc rgb(241 245 249);
  scrollbar-width: auto;
}
</style>
