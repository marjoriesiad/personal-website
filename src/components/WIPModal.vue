<template>
    <div class=" h-full w-full flex justify-center items-center bg-transparent z-50 absolute" :class="dontShow" id="modal">
        <div class="bg-windowsgray h-66 w-72 border-2 border-r-gray-500 border-b-gray-500 shadow-xl">
            <div class="flex justify-between bg-gradient-to-r from-windowsblue to-linearblue px-3 h-6 items-center">
            <p class="text-white text-sm">Important ! Work in progress...</p>
            <div class="bg-windowsgray flex items-center justify-center w-4 h-4 border border-r-gray-500 border-b-gray-500">
                <p class="font-bold">x</p>
            </div>
        </div>
        <div class="flex flex-col justify-center items-center text-center text-lg p-3">
            <p class="font-bold">Site en cours de création</p>
            <p>Il n'est pas parfait et n'a pas vocation à l'être</p>
            <p>Merci de le prendre en compte pendant votre visite</p>

            <div class="flex gap-3 mt-5 font-bold">
                <button class="border-2 border-r-gray-500 border-b-gray-500 p-1 px-2" id="agree" @click="handleAgree">Compris</button>
                <button class="border-2 border-r-gray-500 border-b-gray-500 p-1 px-2" @click="handleDisagree">Je vais te juger</button>
            </div>
            <p class="text-sm text-red-600 font-bold mt-1 hidden" id="disagree">C'est pas bien. Accepte stp.</p>
        </div>
        </div>
    </div>
</template>

<script setup>
const handleAgree = () => {
    document.getElementById('modal').style.display = "none";
    localStorage.setItem('modal', 'hidden')
}

const handleDisagree = () => {
    document.getElementById('disagree').classList.remove('hidden')
}

const dontShow = localStorage.getItem('modal')
</script>