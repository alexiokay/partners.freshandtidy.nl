<template lang="pug">
div.settings(class="w-full h-full flex flex-col  px-4")

    //- div#accounts-menu(class="w-full space-x-2  h-[3rem]  items-center flex justify-start ")
    //-     ButtonMenu(v-for="item in menu" :text="item.text"  :is_active='item.is_active' @setActive="setActive(item)")
    //- div(class="bg-white w-full rounded-lg h-full p-3 border-gray-200 border-2 -mt-[0.3rem] ")
    //-     div(class="w-full flex  ")
    //-         div#shipments-menu-sorting(class="  px-2 flex items-center justify-center space-x-2 w-auto h-[2.5rem] rounded-lg bg-white text-black")
    //-             p(class="text-sm") Sort by:
    //-             select#sorting(class="w-auto h-[2.5rem] focus:border-0 focus:outline-none text-black")
    //-                 option(value="newest") Newest
    //-                 option(value="oldest") Oldest
    //-         div#shipments-menu-sorting(class="  px-2 flex items-center justify-center space-x-2 w-auto h-[2.5rem] rounded-lg bg-white text-black")
    //-             p(class="text-sm") Filter:
    //-             select#filter(class="w-auto h-[2.5rem] focus:border-0 focus:outline-none text-black" v-model="choosedFilter")
    //-                 option(value="") All
    //-                 option(v-for="carrier in filters" :value="carrier.name") {{ carrier.name }}
    //-         Searchbar(class="ml-3 h-[2.5rem] w-1/3" :datepicker="false" placeholder="Search by name or email")
    //-         button(class=" border-2 border-gray-200 h-[2.5rem] rounded-md px-6 py-1 ml-auto font-semibold hover:bg-blue-400 hover:text-white mb-2") Add Account
       
    //- div.spinner(class="absolute bottom-[4rem] z-50 right-[4rem] flex-col  text-lg w-auto h-auto flex items-center justify-center")
    //-   div(class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900")
    //-   p(class="mt-2") Fetching Data ...
    //- ModalSaving(:isOpen="is_modal_open" @close="is_modal_open = false" )
</template>

<script setup lang="ts">
import ArrowIcon from "~icons/material-symbols/arrow-right-alt-rounded";
import AccountsIcon from "~icons/mdi/accounts";
import { useUserStore } from "@/stores/User";
definePageMeta({
  // or middleware: 'auth'
});

const config = useRuntimeConfig();
const userStore = useUserStore();

const options = {
  method: "GET",
  headers: {
    Host: `${config.FETCH_HOST}`,
    Authorization: `Token ${userStore.getToken}`,
  },
};
const page = ref(1);

interface MenuItem {
  text: string;
  is_active: boolean;
}
const setActive = (item: MenuItem) => {
  menu.value.forEach((element) => {
    element.is_active = false;
  });
  item.is_active = true;
};
const menu: Ref<MenuItem[]> = ref([
  {
    text: "All users",
    is_active: true,
  },

  {
    text: "Carriers",
    is_active: false,
  },
]);

const is_modal_open = ref(false);
</script>

<style lang="scss"></style>
