<template>
    <LandingHeader />
    <NuxtPage />
</template>

<script setup></script>

<style >
html {
  height: 100%;
  overflow: auto;
}

body {
  background-color: #cae8e7;
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

