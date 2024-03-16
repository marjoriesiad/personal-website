<script setup>
import { RouterLink } from 'vue-router'

// get current time
const currentDate = new Date();
const currentTime = `${currentDate.getHours()} : ${
  (currentDate.getMinutes() < 10 ? "0" : "") + currentDate.getMinutes()
}`
// toggle Menu
const toggleMenu = () => {
  const navbarMenu = document.getElementById('navbar-menu');
  navbarMenu.classList.toggle('hidden')
}
</script>

<template>
  <div class="bg-windowsgray flex justify-between items-center py-7 h-10 w-screen fixed bottom-0">
    <div class="flex justify-center items-center m-2 space-x-2 cursor-pointer border-2 p-2 border-r-gray-500 border-b-gray-500">
      <img src="../assets/images/start.png" alt="" class="w-24" @click="toggleMenu"/>
    </div>

    <div class="p-2 px-3 mr-2 border-2 border-t-gray-500 border-r-white border-b-white border-l-gray-500 font-bold">
      {{ currentTime }}
    </div>
  </div>

    <div class="flex bg-windowsgray fixed left-1 w-56 min-h-12 h-96 bottom-14 text-xl border-2 border-r-gray-500 border-b-gray-500 z-10 hidden" id="navbar-menu">
      <div class="bg-windowsblue h-95 w-10 mr-4 text-white">
        <p class="text-2xl font-bold w-[160px] -rotate-90 absolute -left-[28%] top-[70%]">
          Windows 98
        </p>
      </div>
      <div class="py-5">
        <div class="flex flex-col space-y-6 mt-5">
          <RouterLink to="/" class="flex gap-3"><img src="../assets/images/a-propos.png" alt="" class="w-8 h-8">A Propos</RouterLink>
      <div class="border-2 border-b-gray-500 w-[95%]"></div>
      <RouterLink to="/" class="flex gap-3"><img src="../assets/images/projets.png" alt="" class="w-8 h-8" @click="handleClose">Projets</RouterLink>
      <RouterLink to="/" class="flex gap-3"><img src="../assets/images/blog.png" alt="" class="w-8 h-8">Blog</RouterLink>
      <RouterLink to="/" class="flex gap-3"> <img src="../assets/images/contact.png" alt="" class="w-8 h-8">Contact</RouterLink>
      <div class="border-2 border-b-gray-500 w-[95%]"></div>
      <RouterLink to="/" class="flex gap-3"><img src="../assets/images/connexion.png" alt="" class="w-8 h-8">Connexion</RouterLink>
        </div>
      </div>
    </div>

</template>
