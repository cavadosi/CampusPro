<template>
  <div
    class="flex flex-row items-start justify-start gap-x-4 overflow-x-auto scrollbar bg-background m-2"
  >
    <!-- Card container -->
    <div
      class="flex-col items-center justify-center min-w-fit text-start bg-slate-100 rounded-md px-6 py-4 h-screen overflow-y-auto scrollbar"
    >
      <!-- Container title -->
      <div class="flex items-center justify-between mb-4">
        <h1>Title</h1>
        <h1>...</h1>
      </div>
      <div
        class="flex-col items-center justify-center space-y-4 min-w-80 w-80 text-start bg-slate-100"
      >
        <!-- Card -->
        <TaskCard v-for="task in tasks" :title="task.title" :type="task.type"/>
      </div>
    </div>
  </div>
</template>

<script setup>

const tasks = [
{title: "Card1", type: "TODO"},
{title: "Card2", type: "TODO"},
{title: "Card3", type: "TODO"},
{title: "Card4", type: "TODO"},
{title: "Card5", type: "TODO"},
{title: "Card6", type: "TODO"},
{title: "Card7", type: "TODO"},
{title: "Card8", type: "IN PROGRESS"},
{title: "Card9", type: "IN PROGRESS"},
{title: "Card10", type: "IN PROGRESS"},
{title: "Card11", type: "IN PROGRESS"},
{title: "Card12", type: "IN PROGRESS"},
{title: "Card13", type: "IN PROGRESS"},


]




</script>

<style scoped>
.scrollbar {
  scrollbar-color: #71b0dc #efefef;
  scrollbar-width: auto;
}
</style>
