<template>
  <Html class="h-full">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Html>
</template>

<style>
html {
  height: 100%;
  overflow: hidden;
}

body {
  background-color: #C9E8FF;
  min-height: 100%;
  margin: 0;
  position: relative;
  z-index: 1;
}

body::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: -1;
  background-size: cover;
}
</style>
