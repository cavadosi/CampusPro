<template>
  <Sidebar
    :navigation="navigation"
    :elements="classes"
    :userNavigation="userNavigation"
  >
    <!-- Your content -->
    <NuxtPage />
  </Sidebar>
</template>

<script setup>
import NewsIcon from "~icons/fluent/news-24-regular";

const navigation = [
  { name: "Overview", href: "/", icon: NewsIcon },
  { name: "Bandeja de entrada", href: "/inbox", icon: NewsIcon },
  { name: "Tareas", href: "/tasks", icon: NewsIcon },
  { name: "Calendario", href: "/calendar", icon: NewsIcon },
  { name: "Calificaciones", href: "/grades", icon: NewsIcon },
  { name: "Roadmap", href: "/roadmap", icon: NewsIcon },
];
const classes = [
  { name: "Clase uno", href: "#", initial: "H"},
  { name: "Clase dos", href: "#", initial: "T" },
  { name: "Clase tres", href: "#", initial: "W" },
  { name: "Clase cuatro", href: "#", initial: "A"  },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
</script>

<style scoped></style>
