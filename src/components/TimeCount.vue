<template>
    <div class="flex flex-col items-center justify-center">
        <div class="text-3xl font-bold dark:text-zinc-100  text-cyan-700 ">Time:{{ time }}</div>
    </div>


</template>


<script setup lang="ts">
   import {time} from "../js/timer";
</script>