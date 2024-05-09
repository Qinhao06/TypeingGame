<template>
    <div class="relative  leading-relaxed  w-3/4   ">
        <div class="text-4xl  m-10  dark:text-gray-500 text-black  break-words " >
            <span v-for="(word, index) in randomWords" :key="index"> {{ word == ' ' ? '&nbsp' : word }} </span>
        </div>
        <div class="text-4xl  m-10  dark:text-yellow-500 text-green-500  inset-0  absolute break-words  " >
            
            <div class="typing inline">
                <span v-for="(word, index) in typingWords"  :key="index" :class="{
                    'text-green-500': typingWordRightOrX[index],
                    'dark:text-yellow-500': typingWordRightOrX[index],
                    'text-red-500': !typingWordRightOrX[index],
                    'bg-yellow-500': word == ' ' && typingWordRightOrX[index],
                    'bg-red-500': word == ' ' && !typingWordRightOrX[index],
                    'opacity-75   ': word == ' '
                }" >{{ word == ' ' ? '&nbsp' : word }}</span>
            </div>
         
        </div>
         
    </div>
</template>


<script setup lang="ts">


import {typingWords, setTypingWords, randomWords, typingWordRightOrX, getCoveredWords} from '../ts/typingWord'
import { watch, ref } from 'vue';

// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';


    watch(typingWords, (newValue, oldValue) => {
        getCoveredWords()
    })

</script>


<style scoped>

.cursor {
        position: absolute;
        animation: blink 1.2s infinite;
    }
    @keyframes blink {
        0% {opacity: 1;}
        50% {opacity: 0;}
        100% {opacity: 1;}
    }
</style>../ts/typingWord