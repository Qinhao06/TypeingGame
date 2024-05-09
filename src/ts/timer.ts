import { ref } from 'vue';


const initTimeNumber: number = 30;

const time = ref(initTimeNumber);
const isStart = ref(false);

const timerId = ref(0);

function countDown() {
   // 防止重复计时
   if (timerId.value !== -1) {
      return;
   }
   timerId.value = Number(setInterval(() => {
      time.value--;
      if (time.value <= 0) {
         isStart.value = false;
         clearInterval(timerId.value);
         timerId.value = -1;
      }
   }, 1000));

}


function stop() {
   if (timerId.value !== -1) {
      clearInterval(timerId.value);
      isStart.value = false;
      timerId.value = -1;
   }

}

function start() {
   isStart.value = true;
   time.value = initTimeNumber;
   countDown();
}

function getUsedTime() {
   return initTimeNumber - time.value;
}

export { time, isStart, countDown, stop, start, getUsedTime };