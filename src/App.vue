<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

const closeMenu = () => {
  const navbarMenu = document.getElementById('navbar-menu')
  navbarMenu.classList.add('hidden')
}
</script>

<template>
  <div class="w-full h-screen" @click="closeMenu">
    <RouterView />
  </div>
  <Navbar />
</template>

