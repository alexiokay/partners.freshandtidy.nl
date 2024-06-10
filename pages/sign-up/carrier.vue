<template lang="pug">
div(class=" overflow-auto w-full h-auto flex flex-col lg:flex-row  ")
  div(class="lg:w-[50%] xl:w-[45%] w-full h-full flex flex-col px-8 items-center relative ")
    div.login-header(class="w-full h-auto flex space-x-8")
      nuxt-img(src="images/arrow-logo.png" class=" object-cover" width="190" format="webp")
      div.login-header(class="w-auto h-auto flex flex-col  mt-6")
          h1(class="font-robotolight text-xl  md:text-2xl xl:text-3xl") Arrow's carrier page
          p(class="font-robotolight text-base") Signup as carrier
          
    LoginCarrierRegisterForm
    p(class="absolute bottom-2 text-lg ") Dont have an account? 
        NuxtLink(to="/" class="font-semibold hover:cursor-pointer") Sign in
        
    
  nuxt-img(src="https://www.arrow.com/company/wp-content/uploads/2022/08/Venlo-5.png" class="lg:fixed top-0 right-0 xl:w-[55%] lg:w-[50%] w-full h-[100vh] object-cover" format="webp")
</template>

<script setup lang="ts">
// If you are using PurgeCSS, make sure to whitelistgi the carousel CSS classes

import { onMounted } from "vue";
import type { Ref } from "vue";
import { useMainStore } from "@/stores/Main";

import { useUserStore } from "@/stores/User";

import HideIcon from "~icons/bxs/hide";
import ShowIcon from "~icons/bxs/show";

definePageMeta({
  //middleware: ["redirect-if-logged"],
  // or middleware: 'auth'
});
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
