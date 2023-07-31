<template lang="pug">
div(class="h-[var(--topbar-height)] w-full bg-white shadow-lg px-8 items-center justify-end flex gap-x-8")
  NotificationIcon(class="w-7 h-7")
  MailIcon(class="w-7 h-7 ")
  UserInfo( @mouseenter="necessaryStore.setUserDropdown(true)" @mouseleave="necessaryStore.setUserDropdown(false)" class="w-auto ")
  UserDropdown(v-if="necessaryStore.isUserDropdown" @mouseenter="necessaryStore.setUserDropdown(true)" @mouseleave="necessaryStore.setUserDropdown(false)" class="w-auto mr-auto fixed right-10 top-[4.5rem] ")
</template>

<script setup lang="ts">
import MailIcon from "~icons/octicon/mail-24";
import NotificationIcon from "~icons/clarity/notification-line";

import { useNecessaryStore } from "@/stores/Necessary";
const necessaryStore = useNecessaryStore();
</script>

<style lang="scss">
:root {
  --topbar-height: 5rem;
}
</style>
