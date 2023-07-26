<template lang="pug">
div(class="flex items-center justify-center space-x-4 ")
    button(class="aspect-square w-auto h-full rounded-full border-8 border-white bg-[#124944] p-4 flex items-center justify-center")
        PlayIcon(class="w-auto h-auto text-white mx-auto flex ")
    p(class="text-[#5e595a] text-2xl font-semibold") {{ text }}
</template>

<script setup lang="ts">
import PlayIcon from "~icons/mingcute/play-fill";

defineProps({
  text: String,
});
</script>

<style lang="scss"></style>
