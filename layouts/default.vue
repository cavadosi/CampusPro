<template>
  <Sidebar
    :navigation="navigation"
    :elements="classes"
    :userNavigation="userNavigation"
  >
    <!-- Your content -->
    <slot />
  </Sidebar>
</template>

<script setup>
const navigation = [
  { name: "Overview", href: "/" },
  { name: "Bandeja de entrada", href: "/inbox" },
  { name: "Tareas", href: "/tasks" },
  { name: "Calendario", href: "/calendar" },
  { name: "Calificaciones", href: "/grades" },
  { name: "Roadmap", href: "/roadmap" },
  // { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
];
const classes = [
  { id: 1, name: "Clase uno", href: "#", initial: "H", current: false },
  { id: 2, name: "Clase dos", href: "#", initial: "T", current: false },
  { id: 3, name: "Clase tres", href: "#", initial: "W", current: false },
  { id: 4, name: "Clase cuatro", href: "#", initial: "A", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
</script>
