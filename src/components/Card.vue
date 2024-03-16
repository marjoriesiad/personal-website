<script setup>
   defineProps({
    title: String,
    description: String,
    stack: String,
    gitLink: String,
    liveLink: String
   })
</script>

<template>
 <article class="bg-windowsgray w-5/6 h-70 border-2 border-r-gray-500 border-b-gray-500 md:h-70 md:w-auto">
        <div class="flex justify-between px-3 h-6 items-center bg-gradient-to-r from-windowsblue to-linearblue">
            <p class="text-white">{{ title }}</p>
            <div class="bg-windowsgray flex items-center justify-center w-4 h-4 border border-r-gray-500 border-b-gray-500">
                <p class="font-bold">x</p>
            </div>
        </div>
        <div class=" p-1 px-2 pr-3 text-justify">
            <p class="h-26 mt-1 md:h-24">{{ description }} </p>
            <p class="mt-5" ><span class="font-bold">Site fait avec: </span> {{ stack }}</p>
            <div class="flex justify-around mt-5 relative bottom-0 pb-2">
                <a v-bind:href="gitLink" target="_blank" class="border-2 border-r-gray-500 border-b-gray-500 px-2 font-bold flex">Github <img src="../assets/images/arrow-up-right-from-square-solid.svg" class="w-3 ml-2"/></a>
                <a v-bind:href="liveLink" target="_blank" class="border-2 border-r-gray-500 border-b-gray-500 px-2 font-bold flex">Voir le site <img src="../assets/images/arrow-up-right-from-square-solid.svg" class="w-3 ml-2"/></a>
            </div>
        </div>
    </article>
</template>