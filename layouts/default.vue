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
import axios from 'axios';

const navigation = [
  { name: "Overview", href: "/", icon: GridIcon },
  { name: "Inbox", href: "/inbox", icon: InboxIcon },
  { name: "Tasks", href: "/tasks", icon: ClipboardIcon },
  { name: "Calendario", href: "/calendar", icon: CalendarIcon },
  { name: "Grades", href: "/grades", icon: ExamIcon },
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

const handleNavigation = async (href) => {
  try {
    // Realizar una solicitud para validar el token en el backend
    const response = await axios.get('/api/validateToken');
    if (response.status === 200) {
      // Si el token es válido, redirigir al usuario a la ruta deseada
      window.location.href = href;
    } else {
      console.error('Token validation failed');
    }
  } catch (error) {
    console.error('Error validating token:', error);
  }
}
</script>

<style scoped></style>

