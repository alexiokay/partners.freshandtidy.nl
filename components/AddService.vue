<template lang="pug">
div(@click="" class="relative flex h-auto hover:animate-[bump_0.3s_ease-in-out] text-black  flex-col lg:w-[calc(25%-1rem)] w-full justify-center gap-y-4 md:gap-y-12 lg:text-center items-center lg:items-center shadow-[0_1px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl p-[2rem] md:px-[4rem] hover:cursor-pointer")
    AddIcon( class="w-[52%] md:w-full h-auto  md:h-[8rem]  ")
    h3(class="font-bold text-2xl md:text-3xl") Add New Service

</template>

<script setup lang="ts">
import AddIcon from "~icons/gala/add";
</script>

<style lang="scss"></style>
