<template lang="pug">
div(class="h-[var(--topbar-height)] w-full bg-white shadow-lg px-8")

  UserInfo( @mouseenter="necessaryStore.setUserDropdown(true)" @mouseleave="necessaryStore.setUserDropdown(false)" class="w-auto ml-auto")
  UserDropdown(v-if="necessaryStore.isUserDropdown" @mouseenter="necessaryStore.setUserDropdown(true)" @mouseleave="necessaryStore.setUserDropdown(false)" class="w-auto mr-auto fixed right-10 top-[4.5rem] ")
</template>

<script setup lang="ts">
import { useNecessaryStore } from "@/stores/Necessary";
const necessaryStore = useNecessaryStore();
</script>

<style lang="scss">
:root {
  --topbar-height: 5rem;
}
</style>
