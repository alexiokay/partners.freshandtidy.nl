<template lang="pug">
div#shipments(class="text-black w-full h-full px-6 py-[0.4rem] flex flex-row flex-wrap gap-y-[2rem] space-x-2 justify-start items-center")
    
    
    div.shipments(class="w-full gap-y-2 flex flex-col")
      div(v-show="isHintOpen === true" class="bg-blue-200 py-2 px-4 rounded-lg max-w-max flex gap-x-4")
        HintIcon(class="w-6 h-6 ")
        p(class="") 
          span(class="font-semibold") Hint: 
          span() You can search by supplier name, carrier or status
        CloseIcon(class="w-6 h-6 cursor-pointer" @click="isHintOpen = false" )
      Searchbar(:datepicker="true" placeholder="Search by tracking number" class="w-full h-[5rem]"  @keypress="searchQuery = $event.target.value")
    div#shipments-menu(class="w-full flex lg:flex-row flex-col ")
        div(class="flex lg:flex-row flex-col items-start space-y-2 lg:space-y-0 lg:items-center justify-start overflow-auto w-full no-scrollbar ")
            h1(class="text-xl w-auto font-semibold mr-[1.5rem]") Shipments
            div(class="flex  space-x-2 items-center justify-start overflow-auto no-scrollbar ")
              ButtonMenu2(text="Pending" :active="active_menu == 'pending'" @click="mainStore.setActiveMenu('pending')" )
              ButtonMenu2(text="Arrival" :active="active_menu == 'arrival'" @click="mainStore.setActiveMenu('arrival')")
              ButtonMenu2(text="Completed" :active="active_menu == 'completed'" @click="mainStore.setActiveMenu('completed')")
              ButtonMenu2(text="Cancelled" :active="active_menu == 'cancelled'" @click="mainStore.setActiveMenu('cancelled')")
              ButtonMenu2(text="Arrow Changed" :active="active_menu == 'arrow changed'" @click="mainStore.setActiveMenu('arrow changed')")
       
        div#shipments-menu-sorting(class="ml-auto   px-2 flex items-center justify-center space-x-2 w-auto h-[2.5rem] rounded-lg bg-white text-black")
            p(class="text-sm") Sort by:
            select#sorting(class="w-auto h-[2.5rem] focus:border-0 focus:outline-none text-black")
                option(value="newest") Newest
                option(value="oldest") Oldest
           
    shipment(@click="router.push({path: `/dashboard/shipments/${reservation.id}`})" class=" w-[calc(50%-1rem)] 2xl:w-[calc(33%-1rem)]" v-for="reservation in reservations" :key="reservation.id" :reservation="reservation")

</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/User";
import { useMainStore } from "@/stores/Main";
import HintIcon from "~icons/flat-color-icons/idea";
import CloseIcon from "~icons/ic/outline-close";

const userStore = useUserStore();
const mainStore = useMainStore();
const router = useRouter();
const isHintOpen = ref(true);

const active_menu = computed(() => {
  return mainStore.getActiveMenu;
});

const searchQuery = ref("");
const reservations = computed(() => {
  let filteredReservations = mainStore.getReservations.filter((reservation) => {
    if (
      (reservation.status === "ARROW_APPROVED" &&
        active_menu.value === "arrival") ||
      (reservation.status === "ARROW_CHANGED" &&
        active_menu.value === "arrow changed")
    ) {
      return true;
    }

    if (
      ((reservation.status === "New" ||
        reservation.status === "CARRIER_CHANGED") &&
        active_menu.value === "pending") ||
      (reservation.status === "COMPLETED" &&
        active_menu.value === "completed") ||
      (reservation.status === "Cancelled" && active_menu.value === "cancelled")
    ) {
      return true;
    }

    if (
      reservation.status === "CARRIER_APPROVED" &&
      active_menu.value === "arrival" // Replace "specific_menu" with the desired menu where "CARRIER_APPROVED" should be visible
    ) {
      return true;
    }

    return false;
  });

  console.log(searchQuery.value);

  let keywords = searchQuery.value.toLowerCase().split(" ");

  filteredReservations = filteredReservations.filter((reservation) =>
    keywords.every(
      (keyword) =>
        // (reservation.tracking_number &&
        //   reservation.tracking_number.toLowerCase().includes(keyword)) ||
        (reservation.status &&
          reservation.status.toLowerCase().includes(keyword)) ||
        (reservation.carrier.name &&
          reservation.carrier.name.toLowerCase().includes(keyword)) ||
        (reservation.suppliers.suppliers &&
          reservation.suppliers.suppliers.some((item) =>
            item.supplier.name.toLowerCase().includes(keyword)
          ))
    )
  );

  return filteredReservations;
});

definePageMeta({
  // or middleware: 'auth'
});
</script>

<style lang="scss"></style>
