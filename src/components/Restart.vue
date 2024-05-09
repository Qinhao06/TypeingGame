
<template>

    <button class=" bg-yellow-500 text-black   dark:bg-blue-500 hover:bg-blue-800   text-white font-bold py-2 px-4 rounded mt-1 mb-4 " @click="startOrEnd">
       {{ !isStart ? 'Start' : 'Stop' }}
    </button>
</template>


<script setup lang="ts">
    import { isStart, start, stop } from "../js/timer"
    import { setTypingWords,  getResult, setResultNotShow} from "../js/typingWord"

    function startOrEnd(){
        let button = document.activeElement as HTMLInputElement;
        if( button ){
            button.blur();
        }
        if(isStart.value){
            stop();
            getResult();
            
        }else{
            setTypingWords("");
            setResultNotShow();
            start()
        }
     }

     


</script>

