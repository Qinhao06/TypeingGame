<template>

    <div class=" h-5 ">
        <Transition name="fade">

            <div class="result flex flex-col justify-center items-center text-2xl" v-if="result.showResult">

                <span class="text-lime-500 "> Accuracy: {{ result.accuracy }}%</span>
                <span class="text-orange-500 "> Time: {{ result.time }}s</span>
                <span class="text-green-500"> Typed: {{ result.typed }}</span>
                <span class="text-yellow-500"> Correct: {{ result.correct }}</span>
                <span class="text-red-500"> Error: {{ result.incorrect }}</span>
                
            </div>
        </Transition>
    </div>


</template>


<script setup lang="ts">
import { result } from '../ts/typingWord'


</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>../ts/typingWord