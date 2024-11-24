<template lang="pug">

button(class=" group    py-2 px-4  flex items-center hover:shadow-[0_2px_20px_-15px_rgba(0,0,0,0.9)] justify-center ") {{text}}
    slot(name="icon")

</template>

<script setup lang="ts">
defineProps({
  text: String,
});
</script>

<style lang="scss"></style>
