<template lang="pug">


                    
div#content(class="text-black w-full h-full px-6 py-[0.4rem] flex flex-col justify-start items-start gap-y-6")
    
    div(class='w-full h-auto')
      p(class="text-2xl font-semibold") Overview
    
      div(class="h-[7rem] w-full flex  mt-2 justify-between")
        DashboardQuickMenuItem(text="Calls" :value="todayShipments")
          template(v-slot:icon)
            PackageIcon(class="w-12 h-12  text-violet-500 ")
        DashboardQuickMenuItem(text="Ready for Shippping" value="0")
        DashboardQuickMenuItem(text="In transit" value="0")
        DashboardQuickMenuItem(text="Delivered" value="0")
    div(class="flex w-full md:flex-row flex-col justify-between h-auto mt-8")
      DashboardDelayedDelivery(class="md:w-[calc(50%-1rem)] w-full")
      DashboardDailyPlan(class="md:w-[calc(50%-1rem)] w-full")
      
    div(class="flex w-full md:flex-row flex-col justify-between h-auto")
      DashboardTodo(class="md:w-[calc(50%-1rem)] w-full min-h-[30rem]")
      DashboardYourActivity(class="md:w-[calc(50%-1rem)] w-full min-h-[30rem]")
     
   

      
        
</template>

<script setup lang="ts">
import PackageIcon from "~icons/ph/package-duotone";
import { useUserStore } from "@/stores/User";
import { useMainStore } from "@/stores/Main";
const mainStore = useMainStore();
const userStore = useUserStore();
const route = useRoute();
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
