<template lang="pug">
input(v-model="model"   class="w-full h-[3.5rem] lg:h-[4rem] border-2  border-gray-500 rounded-full px-4 text-base lg:text-lg font-intern")
</template>

<script setup lang="ts">
const model = defineModel();
</script>

<style lang="scss"></style>
