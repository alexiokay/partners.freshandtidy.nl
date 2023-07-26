<template lang="pug">
div(class=" w-full md:h-screen  flex flex-col lg:flex-row  ")
  div(class="lg:w-[45%]  w-full h-screen flex flex-col px-[5rem] items-center ")

</template>

<script setup lang="ts">
// If you are using PurgeCSS, make sure to whitelistgi the carousel CSS classes
// import google and facebook icons
import GoogleIcon from "~icons/gg/google";
import FacebookIcon from "~icons/ic/baseline-facebook";
import AppleIcon from "~icons/ic/baseline-apple";
import { onMounted } from "vue";
import type { Ref } from "vue";
import { useMainStore } from "@/stores/Main";
import { useUserStore } from "@/stores/User";

import HideIcon from "~icons/bxs/hide";
import ShowIcon from "~icons/bxs/show";

definePageMeta({
  // or middleware: 'auth'
});

const userStore = useUserStore();
const mainStore = useMainStore();

const { t } = useLang();
const router = useRouter();
const config = useRuntimeConfig();

onMounted(() => {});
</script>

<style lang="sass">







.full-width
  width: 100vw
  position: relative
  left: 50%
  right: 50%
  margin-left: -50vw
  margin-right: -50vw



.advantage
  opacity: 0

.advantage-visible
  opacity: 1

.product
  opacity: 0
</style>
