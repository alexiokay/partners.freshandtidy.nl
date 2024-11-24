<template lang="pug">
div(class="flex  p-2 px-4 items-center rounded-lg border-2 border-gray-300 bg-white focus:border-gray-500")
    SearchIcon(class="w-8 h-8 text-gray-600")
    input.search(class="w-full h-full  text-lg focus:outline-none  pl-5" type="search" name="search" :placeholder="placeholder" @input="$emit('keypress', $event)")
    div(v-if="datepicker" class="ml-auto  px-2 flex items-center justify-center space-x-2 w-auto h-auto rounded-lg bg-[#F9F9FB] text-black")
        p(class="text-base min-w-max ") Arrival date:
        input(type="date" class='bg-[#F9F9FB] focus:outline-none w-[8rem] text-base')
</template>

<script setup lang="ts">
import SearchIcon from "~icons/ri/search-2-line";
defineProps({
  datepicker: {
    type: Boolean,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  "v-model": {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss"></style>
