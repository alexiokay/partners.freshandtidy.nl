<template lang="pug">
div.settings(class="w-full h-full flex flex-col px-4")
    NuxtLink(to="/dashboard" class="text-blue-700 hover:underline flex font-semibold  items-center space-x-2") 
      ArrowIcon(class=" rotate-180")
      span Back to Dashboard
        
    h1(class="text-3xl text-black font-semibold mt-4 flex space-x-3 items-center") 

        p Settings
    hr(class="w-full border-gray-300 my-4 ")
    div#settings-menu(class="w-full space-x-2  h-[3rem]  items-center flex justify-start ")
        ButtonMenu(v-for="item in menu" :text="item.text"  :is_active='item.is_active' @setActive="setActive(item)")
    SettingsPanel(v-if="menu[0].is_active" :title="menu[0].text" @save="is_modal_open = true")
    SettingsArrow(v-if="menu[menu.length-1].is_active && userStore.accountType === 'arrow-employee'" :title="menu[menu.length-1].text" @save="is_modal_open = true")


    ModalSaving(:isOpen="is_modal_open" @close="is_modal_open = false" )
</template>

<script setup lang="ts">
import ArrowIcon from "~icons/material-symbols/arrow-right-alt-rounded";
import { useUserStore } from "@/stores/User";
definePageMeta({
  // or middleware: 'auth'
});

const userStore = useUserStore();

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
    text: "General",
    is_active: true,
  },
  {
    text: "Notifications",
    is_active: false,
  },
  {
    text: "Security",
    is_active: false,
  },
  {
    text: "Privacy",
    is_active: false,
  },
  {
    text: "Billing",
    is_active: false,
  },
  {
    text: "Account",
    is_active: false,
  },
]);

if (userStore.getAccountType === "arrow-employee") {
  menu.value.push({
    text: "Arrow",
    is_active: false,
  });
}

const is_modal_open = ref(false);
</script>

<style lang="sass"></style>
