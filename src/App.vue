<script setup lang="ts">
  import Words from './components/Words.vue'
  import TimeCount from './components/TimeCount.vue';
  import Restart from './components/Restart.vue';
  import Result from './components/Result.vue';
  import ModeChage from './components/ModeChange.vue'
</script>

<template>
  <div class="flex place-items-center flex-col   justify-center min-h-screen dark:bg-slate-800    m-0  bg-stone-100  
  font-mono text-white tracking-wider relative">
    <ModeChage class="absolute top-2  right-2"> </ModeChage>
    <TimeCount />
    <Words />
    <Restart/>
    <Result />
  </div>
</template>

<style scoped>

</style>
