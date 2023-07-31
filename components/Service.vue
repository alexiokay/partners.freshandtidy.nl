<template lang="pug">
div(@click="$emit('select', title)" :class="bgColor" :id="title.replace(/ /g, '-')" class="relative flex h-auto hover:animate-[bump_0.3s_ease-in-out]  flex-col lg:w-[calc(25%-1rem)] w-full gap-y-4 md:gap-y-6 text-[#02374b] lg:text-center items-center lg:items-center shadow-[0_1px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl p-[2rem] md:px-[4rem] hover:cursor-pointer")
    nuxt-img(:src="image? image: 'icons/icon-13.png'" width="190" h="45" class="w-[52%] md:w-auto h-auto  md:h-auto ")
    h3(class="font-bold text-2xl md:text-3xl") {{ title.split(" ")[0] }}
      p() {{ title.split(" ")[1] }}

</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: false,
  },

  image: {
    type: String,
    required: false,
  },
  selected: {
    type: String,
    required: false,
  },
});

const bgColor = computed(() => {
  if (props.selected) {
    console.log(props.selected);
    return props.selected.toLocaleLowerCase() === props.title.toLowerCase()
      ? "bg-black text-white"
      : "bg-white";
  } else {
    return "bg-white";
  }
});
</script>

<style lang="scss"></style>
