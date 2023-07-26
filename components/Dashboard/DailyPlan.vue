<template lang="pug">
div(class="w-full py-4 px-6  bg-white rounded-xl flex items-center ")
    div(class="w-2/5 flex flex-col h-full items-between justify-between ")
        div(class="flex space-x-2 items-end  ")
            p(class="  font-semibold text-2xl") Daily Plan
            p(class=" ") 16 jan 23
        div(class="flex flex-col  text-gray-600 space-y-1 ")
            p Shipment procedeed
            p(class="text-black font-semibold") 145
                span(class="text-gray-600") /240
        div(class="flex flex-col  text-gray-600  space-y-1")
            p Orders procedeed
            p(class="text-black font-semibold") 145
                span(class="text-gray-600") /240
        div(class="flex flex-col  text-gray-600  space-y-1 ")
            p Requests procedeed
            p(class="text-black font-semibold") 145
                span(class="text-gray-600") /240
        slot(name="icon" class="")
    div(class="w-3/5")
        div(class="wrapper")
            div(class="progress-bar")
                div(class="progress-bar__inner" id="js-progress-meter")
            div(class="flex justify-between w-[21rem] mx-auto font-semibold  items-center")
                p 0%
                p(class="progress-bar__number text-green-500 text-3xl " id="js-progress-number") 0%
                p 100%
            div(class="rounded-full p-1 pb-4 pt-2 bg-gray-100 w-auto h-auto flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")
                IconThumbUp(class="w-8 h-8  mx-2  text-green-500")
           
</template>

<script setup lang="ts">
import IconThumbUp from "~icons/twemoji/thumbs-up";
// Set a max and min number that it can be 0-100

// Set variable min number
const minNumber = 0;
// Set variable max number
const maxNumber = 100;

// Set variable current number
let currentNumber = minNumber;

// Write a function that randomly selects a number between 0-100
function getRandomNumber(max: any) {
  currentNumber = Math.floor(Math.random() * max);
}

// Set interval that displays random number every 2000ms
function incrementProgressBar() {
  setInterval(() => {
    getRandomNumber(maxNumber);
    const progressNumber = document.getElementById(
      "js-progress-number"
    ) as HTMLElement;
    const progressMeter = document.getElementById(
      "js-progress-meter"
    ) as HTMLElement;
    // Visually display that number with CSS inside a empty progress bar
    if (progressNumber) {
      progressNumber.textContent = currentNumber.toString() + "%";
      // set InnerHtml with a special classname that triggers inner progress bar movement
    }
    progressMeter.style.transform =
      "rotate(" + (45 + currentNumber * 1.8) + "deg)";
  }, 2000);
}
onMounted(() => {
  incrementProgressBar();
});
</script>

<style lang="scss">
.heading {
  font-family: "Roboto", "sans-serif";
  text-align: center;
}

.wrapper {
  position: relative;
  margin: 2rem auto;
  width: 100%;
}

.progress-bar {
  height: 10rem;
  margin-bottom: -1.4rem;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 20rem;
}

.progress-bar__inner {
  border: 20px solid #ececec;
  border-bottom-color: #4ccf57;
  border-right-color: #4ccf57;
  border-radius: 50%;
  box-sizing: border-box;
  height: 20rem;
  left: 0;
  position: absolute;
  top: 0;
  transition: transform 0.2s ease-in;
  width: 20rem;
  transform: rotate(45deg);
}
</style>
