<script setup>
import NavbarMenu from './NavbarMenu.vue';
// get current time
const currentDate = new Date();
const currentTime = `${currentDate.getHours()} : ${(currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes()}` 
</script>

<template>
    <div class="bg-windowsgray flex justify-between items-center py-7 h-10 w-screen fixed bottom-0">
        <div class="flex justify-center items-center m-2 space-x-2 cursor-pointer border-2 p-2 border-r-gray-500 border-b-gray-500">
            <img src="../assets/images/start.png" alt="" class="w-24">
        </div>
            
        <div class="p-2 px-3 mr-2 border-2 border-t-gray-500 border-r-white border-b-white border-l-gray-500 font-bold">
            {{ currentTime }}
        </div>
    </div> 
    <NavbarMenu />   
</template>