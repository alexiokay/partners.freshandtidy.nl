<template lang="pug">
#user-dropdown(class="  w-[calc(20vw+15em)]  px-5 space-y-4 h-[calc(100vh-0vw)] md:h-auto pb-4   top-0   rounded-b-lg rounded-r-lg right-0  z-40 bg-white  shadow-[0px_0px_10px_-2px_rgb(0,0,0,0.15)]  flex-col justify-start items-center ")
    div.flex.justify-start.text-xl.space-x-3.items-center(:class="isUserMobileDropdown? '' : ' md:hidden '" class="flex  -mx-5  h-14 px-4 bg-[#F5F5F5] w-[calc(20vw+15em)]  border-b-[1px] border-gray-300 ")
        CloseIcon(@click="$emit('close')" class="hover:cursor-pointer h-5 w-5")
        p Menu
    div(v-if="!userStore.getIsLogged" class="flex flex-col justify-center items-start space-y-2 w-full") 
        NuxtLink#dropdown-login(to="/login" class="w-full h-10 md:h-8 rounded-full hover:bg-blue-700 bg-blue-600 text-white text-sm  flex items-center justify-center") Login
        div(class="flex h-5 w-full justify-center items-center ")
            hr(class="w-3/5 h-[1.4px] bg-gray-200")
            p(class="w-full text-center") Nie masz konta?
            hr(class="w-3/5 h-[1.4px] bg-gray-200")
        NuxtLink#dropdown-register(to="/register" class="w-full h-10 md:h-8  rounded-full bg-white text-blue-600 border-[1px] border-blue-600 text-sm  flex items-center justify-center") Zarejestruj się
    div(v-else class="flex flex-col justify-center items-start  w-full")
        p(class="text-sm  text-gray-500") Cześć
        p(class="text-base font-semibold text-black") {{userStore.getUsername}}
    hr(v-if="!userStore.getIsLogged" class="w-[17rem] h-0.3 bg-gray-200 -mx-[12px] my-4")
    div(class="flex w-[calc(30vw+10em)] h-auto -mx-[12px] md:w-[17rem] flex-col justify-center  items-center  ")
        NuxtLink.flex(to="/account" class="w-full text-slate-700 text-sm  space-x-3 h-[2.4rem] items-center justify-start px-5  hover:cursor-pointer hover:bg-slate-50") 
            UserIcon(class="w-6 h-6 pointer-events-none" )
            p Twoje konto
        NuxtLink.flex(to="/account/orders" class="w-full text-slate-700 text-sm  space-x-3 h-[2.4rem] items-center justify-start px-5  hover:cursor-pointer hover:bg-slate-50")  
            OrderIcon(class="w-6 h-6 pointer-events-none" )
            p Zamówienia
        NuxtLink.flex(to="/account/favourites" class="w-full text-slate-700 text-sm  space-x-3 h-[2.4rem] items-center justify-start px-5  hover:cursor-pointer hover:bg-slate-50")  
            IconHeart(class="w-6 h-6 pointer-events-none" )
            p Listy zakupowe
        NuxtLink.flex(to="/account/rates" class="w-full text-slate-700 text-sm  space-x-3 h-[2.4rem] items-center justify-start px-5  hover:cursor-pointer hover:bg-slate-50")  
            OpinionIcon(class="w-6 h-6 pointer-events-none" )
            p Opinie
        NuxtLink.flex(to="/account/shipping-data" class="w-full text-slate-700 text-sm  space-x-3 h-[2.4rem] items-center justify-start px-5  hover:cursor-pointer hover:bg-slate-50")  
            ShippingDataIcon(class="w-6 h-6 pointer-events-none" )
            p Dane do zamówień
        NuxtLink.flex(to="/account/settings" class="w-full text-slate-700 text-sm  space-x-3 h-[2.4rem] items-center justify-start px-5  hover:cursor-pointer hover:bg-slate-50")  
            SettingsIcon(class="w-6 h-6 pointer-events-none" )
            p Ustawienia konta
    hr(v-if="userStore.getIsLogged" class="w-full h-0.3 bg-gray-200 -mx-[12px] mt-4 ")
    button.flex(v-if="userStore.getIsLogged" @click="logout" class="w-full mt-auto  rounded-full text-slate-700 text-sm h-[2.4rem] items-center justify-center px-5  hover:cursor-pointer hover:bg-slate-50") 
        p Wyloguj się   
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// Icons
import IconHeart from "~icons/ph/heart";
import UserIcon from "~icons/heroicons/user-circle";
import OrderIcon from "~icons/icon-park-outline/transaction-order";
import OpinionIcon from "~icons/ic/outline-rate-review";
import ShippingDataIcon from "~icons/material-symbols/badge-outline-rounded";
import SettingsIcon from "~icons/mdi/settings-outline";
import CloseIcon from "~icons/ic/outline-close";

// stores
import { useUserStore } from "@/stores/User";
import { useNecessaryStore } from "@/stores/Necessary";
const userStore = useUserStore();
const necessaryStore = useNecessaryStore();

const isUserMobileDropdown = necessaryStore.isUserMobileDropdown;

const logout = () => {
  userStore.logout();
};
</script>

<style lang="css"></style>
