<template lang="pug">

button(class=" group text-[#02374b] font-semibold text-2xl min-w-[12rem]  min-h-[3.3rem] rounded-r-[1.5rem] rounded-bl-[1.5rem] py-6 px-6 md:px-8 flex items-center hover:shadow-[0_2px_30px_-15px_rgba(0,0,0,0.9)] justify-center ") {{text}}
    slot(name="icon")

</template>

<script setup lang="ts">
defineProps({
  text: String,
});
</script>

<style lang="scss"></style>
