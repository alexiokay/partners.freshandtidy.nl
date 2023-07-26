<template lang="pug">

button(class="bg-[#1ea1dd] group text-white text-xl min-w-[12rem]  min-h-[3.3rem] rounded-r-full rounded-bl-full py-2 px-2 flex items-center hover:shadow-[0_1px_20px_-15px_rgba(0,0,0,0.9)] justify-center hover:bg-[#00374c] ") {{text}}
    ArrowIcon(class="w-6 h-6 ml-3 group-hover:text-[#2da9db] ")
</template>

<script setup lang="ts">
import ArrowIcon from "~icons/ph/arrow-right";

defineProps({
  text: String,
});
</script>

<style lang="scss"></style>
