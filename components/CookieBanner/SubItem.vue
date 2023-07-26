<template lang="pug">
div(class="flex flex-col w-full gap-y-2 py-1 ")
    div(class="flex w-full")
        p(class="w-[6rem] md:w-[9rem] font-extrabold") COOKIE
        p(class="w-full text-[0.55rem] md:text-xs uppercase") {{cookie}}
    div(class="flex w-full")
        p(class="w-[6rem] md:w-[9rem] font-extrabold") DURATION
        p(class="w-full text-[0.55rem] md:text-xs uppercase") {{duration}}
    div(class="flex w-full")
        p(class="w-[6rem] md:w-[9rem] font-extrabold") DESCRIPTION
        p(class="w-full text-[0.55rem] md:text-xs uppercase") {{description}}
</template>

<script setup lang="ts">
defineProps({
  cookie: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss"></style>
