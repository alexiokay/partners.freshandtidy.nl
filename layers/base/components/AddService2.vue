<template lang="pug">
div( :class="bgColor" class="relative justify-between bg-white flex h-auto hover:animate-[bump_0.3s_ease-in-out] w-full gap-y-4 md:gap-y-6 text-[#02374b] lg:text-center items-center lg:items-center shadow-[0_1px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl py-[1rem] md:px-[3rem] hover:cursor-pointer")
    div(class="flex items-center gap-x-4 w-full ")
        AddIcon( class="w-auto h-auto  md:h-[7rem]  ")
    
        h3(class="font-bold text-2xl md:text-3xl") Add New Service
      

   
    
</template>

<script setup lang="ts">
import AddIcon from "~icons/gala/add";
</script>

<style lang="scss"></style>
