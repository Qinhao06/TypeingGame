<template>
    <button class="dark:hover:text-black hover:text-yellow-500  dark:text-yellow-100 text-zinc-800  " @click="isDark = !isDark">{{ isDark ? 'Dark' : 'Light' }}</button>
</template>


<script setup lang="ts">
import { ref, watch } from 'vue';

    const isDark = ref(document.documentElement.classList.contains('dark'));
 
    watch(isDark, (newValue) => {
        
        if(newValue) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    })


</script>