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
import GridIcon from "~icons/fluent/grid-24-filled";
import InboxIcon from "~icons/octicon/inbox-24";
import ClipboardIcon from "~icons/fluent/clipboard-task-list-rtl-24-regular";
import CalendarIcon from "~icons/ph/calendar-dots";
import ExamIcon from "~icons/ph/exam";
import RoadmapIcon from "~icons/streamline/arrow-roadmap";


const navigation = [
  { name: "Overview", href: "/", icon: GridIcon },
  { name: "Bandeja de entrada", href: "/inbox", icon: InboxIcon },
  { name: "Tareas", href: "/tasks", icon: ClipboardIcon },
  { name: "Calendario", href: "/calendar", icon: CalendarIcon },
  { name: "Calificaciones", href: "/grades", icon: ExamIcon },
  { name: "Roadmap", href: "/roadmap", icon: RoadmapIcon },
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
