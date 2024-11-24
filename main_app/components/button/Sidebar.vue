<template lang="pug">
NuxtLink.menu-button(:to="props.to" :class="isActive(props.to)? 'font-bold': ''" class="select-none relative whitespace-nowrap text-lg text-ellipsis flex w-full group justify-between rounded-md  hover:bg-slate-100 h-[1.9rem] md:h-[2.7rem] px-4 py-2 items-center hover:cursor-pointer")
    div(class="flex space-x-4")
        slot(name="icon")
        p {{ props.text }}
    div(v-if="props.notifications_count >= 0" :class="props.notifications_count > 0? 'moving-flag-bg': 'bg-slate-50'" class="h-full w-[2rem]  flex items-center justify-center rounded-md")
        p() {{props.notifications_count}}

    slot(name="icon-2")
    .active-pointer(v-if="isActive(props.to)" class="absolute -left-[2rem]  w-[0.75rem] h-11 bg-violet-600 rounded-r-md")

</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },

  notifications_count: {
    type: Number,
    required: false,
  },
});

const { isActive } = useActiveRoute(); // Import and use the isActive function
</script>

<style lang="scss">
.menu-button {
  .active-pointer {
    animation: slideIn 0.6s forwards;
  }
}
@keyframes slideIn {
  0% {
    transform: translateX(-2.2rem);
  }
  100% {
    transform: translateX(-0.7rem);
  }
}

.moving-flag-bg {
  animation: colorChange 2s infinite;
}

@keyframes colorChange {
  0% {
    background: rgb(241 245 249);
  }
  10% {
    background: #7c3aed;
    color: white;
  }
  30% {
    background: #7c3aed;
    color: white;
  }
  40% {
    background: rgb(241 245 249);
  }
  100% {
    background: rgb(241 245 249);
  }
}
</style>
