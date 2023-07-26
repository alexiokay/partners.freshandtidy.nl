<template lang="pug">
div(class="w-auto h-auto flex ")
    div(class="w-auto  h-max p-4 border-2 border-[#34a9d4] rounded-full ")
        PhoneIcon(class="w-8 h-8 text-[#34a9d4] ")
    div(class="w-full h-auto flex flex-col items-start justify-center ml-4")
        p(class="text-2xl font-semibold text-gray-500") 24h Emergency Line
        p(class='text-[#02374b]  font-bold text-3xl') (123) 456-7890
</template>

<script setup lang="ts">
import PhoneIcon from "~icons/mingcute/phone-call-fill";
</script>

<style lang="scss"></style>
