<template lang="pug">


                    
div#content(class="text-black w-full h-full px-6 py-[0.4rem] flex flex-col justify-start items-start gap-y-6")
    
    div(class='w-full h-auto')
      div(class="w-full flex items-center gap-x-3")
        p(class="text-2xl font-semibold ") Overview
        p(class="ml-8") Yearly
        Switch(
          v-model="yearlyMode"
          :class="yearlyMode ? 'bg-blue-600' : 'bg-gray-200'" 
          class="relative inline-flex h-6 w-11 items-center rounded-full")
          span(class="sr-only") Enable notifications
          span(
            :class="yearlyMode ? 'translate-x-6' : 'translate-x-1'"
            class="inline-block h-4 w-4 transform rounded-full bg-white transition")
        p Monthly
    
      
</template>

<script setup lang="ts">
import PackageIcon from "~icons/ph/package-duotone";
import { useUserStore } from "@/stores/User";
import { useMainStore } from "@/stores/Main";
import { Switch } from "@headlessui/vue";

const mainStore = useMainStore();
const userStore = useUserStore();
const route = useRoute();

const yearlyMode = ref(true);
// definePageMeta({
//   middleware: ["redirect-if-not-logged"],
// });

const config = useRuntimeConfig();

const todayShipments = ref(mainStore.getNewReservations.length.toString());
const todayDelivered = ref(0);
const todayInTransit = ref(0);
const todayDelayed = ref(0);
const delayedDeliveries = ref(0);

const getTodayShipments = async () => {
  const res = await fetch(`${config.apiURL}/api/shipments/today`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${userStore.getToken}`,
    },
  });
  const data = await res.json();
  todayShipments.value = data.length;
};
</script>

<style lang="scss"></style>
