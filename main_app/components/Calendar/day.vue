<template lang="pug">
div(@click="selectDate" :class="{'bg-gray-800 text-white': props.is_selected, 'group hover:cursor-pointer  opacity-100': props.is_open, 'text-gray-400': props.is_actual_month, 'hover:bg-gray-800': props.is_selected}" class="rounded-full relative  hover:text-white hover:bg-gray-500 hover:cursor-pointer")
  p(class="w-[3rem] h-[3rem]  text-xl font-semibold text-center rounded-lg flex items-center justify-center") {{ props.day }}
  LockedIcon(v-if="!props.is_open"  class="absolute top-[1.7rem]   z-50 font-semibold left-[1.7rem] flex items-center justify-start flex-wrap gap-x-1 w-[0.9rem] ")

</template>

<script setup lang="ts">
import UnlockedIcon from "~icons/material-symbols/lock-open-outline";
import LockedIcon from "~icons/material-symbols/lock-outline";
import NotAvalibleIcon from "~icons/ph/x";
const props = defineProps({
  day: {
    type: String,
    required: false,
  },
  is_selected: {
    type: Boolean,
    required: false,
  },
  is_open: {
    type: Boolean,
    default: true,
    required: false,
  },
  is_actual_month: {
    type: Boolean,
    required: false,
  },
});

// pass day to Calendar component
const emit = defineEmits(["selectDate"]);
const selectDate = () => {
  if (props.is_open) {
    emit("selectDate", props.day);
  }
};
</script>

<style lang="scss"></style>
