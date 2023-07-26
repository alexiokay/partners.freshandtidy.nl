<template lang="pug">
div(class="w-[calc(25%-1rem)] py-2 px-4  h-full bg-white rounded-xl flex items-center ")
  div(class="flex flex-col justify-around items-start  space-y-2 w-full")
    p(class="text-lg  text-gray-600") {{ text }}
    p(class="text-2xl font-semibold") {{ value }}
  slot(name="icon" class="")
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  value: string;
}>();
</script>

<style lang="scss"></style>
