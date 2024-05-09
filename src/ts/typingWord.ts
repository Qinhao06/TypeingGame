

import { ref } from "vue";
import { isStart, stop, getUsedTime } from "./timer";
import { faker } from '@faker-js/faker';


const typingWords = ref("")
const randomWords : string = faker.word.words({count:{min:5, max:20}})
const typingWordRightOrX  : boolean[] = []


const result = ref({
    accuracy: 0,
    typed: 0,
    correct: 0,
    incorrect: 0,
    showResult: false,
    time: 0
}) 


addEventListener("keydown", (e : any) => {
    if (isStart.value === false){
        return
    }
    if (e.key === "Backspace") {
        typingWords.value = typingWords.value.slice(0, -1)
    } else {
        typingWords.value += e.key
    }
})

function setTypingWords(content : string) {
    typingWords.value = content;
}


function getCoveredWords(){
    let typingWordSpilt : string[] = typingWords.value.split("")
    let randomWordSplit : string[]= randomWords.split("")
    
    console.log(typingWordSpilt)

    for(let i = 0; i < typingWordSpilt.length; i++){
        if(typingWordSpilt[i] == randomWordSplit[i]){
            typingWordRightOrX[i] = true
        }else{
            typingWordRightOrX[i] = false
        }
    }

    if (typingWords.value.length == randomWords.length){
        getResult()
        stop()
    }
  
}

function getResult(){
    result.value.typed = typingWords.value.length
    result.value.correct = typingWords.value.split("").filter((x,i) => x == randomWords.split("")[i]).length;
    result.value.incorrect = typingWords.value.split("").filter((x,i) => x != randomWords.split("")[i]).length - typingWords.value.length + randomWords.length;
    result.value.accuracy = Math.round((result.value.correct / randomWords.length) *100);
    result.value.showResult = true;
    result.value.time = getUsedTime();
}

function setResultNotShow(){
    result.value.showResult = false
}


export {typingWords, randomWords, typingWordRightOrX, result, getCoveredWords,setTypingWords, getResult, setResultNotShow}