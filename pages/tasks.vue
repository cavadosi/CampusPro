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
        <div class="flex bg-lightaccent rounded-md h-36">
          <div class="flex justify-between w-full mx-4 my-2">
            <h2 class="">Card1</h2>
            <h2 class="">Todo</h2>
          </div>
        </div>
        <div class="flex bg-lightaccent rounded-md h-36">
          <div class="flex justify-between w-full mx-4 my-2">
            <h2 class="">Card1</h2>
            <h2 class="">Todo</h2>
          </div>
        </div>
        <div class="flex bg-lightaccent rounded-md h-36">
          <div class="flex justify-between w-full mx-4 my-2">
            <h2 class="">Card1</h2>
            <h2 class="">Todo</h2>
          </div>
        </div>
        <div class="flex bg-lightaccent rounded-md h-36">
          <div class="flex justify-between w-full mx-4 my-2">
            <h2 class="">Card1</h2>
            <h2 class="">Todo</h2>
          </div>
        </div>
        <div class="flex bg-lightaccent rounded-md h-36">
          <div class="flex justify-between w-full mx-4 my-2">
            <h2 class="">Card1</h2>
            <h2 class="">Todo</h2>
          </div>
        </div>
        <div class="flex bg-lightaccent rounded-md h-36">
          <div class="flex justify-between w-full mx-4 my-2">
            <h2 class="">Card1</h2>
            <h2 class="">Todo</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.scrollbar {
  scrollbar-color: #71B0DC #EFEFEF;
  scrollbar-width: auto;
}
</style>
