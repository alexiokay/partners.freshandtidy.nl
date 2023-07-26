<template lang="pug">

Transition(name="fade")
    <div v-show="!is_sidebar_open" @click="is_sidebar_open = !is_sidebar_open" tabindex="-1" class="fixed  lg:hidden top-0 pointer-event-none flex items-center bg-[rgba(0,0,0,0.55)] justify-center left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen md:h-full"></div>

div#sidebar(:class="is_sidebar_open? 'hide-left  ': 'show-right'" class=" fixed w-[20rem] bottom-0 left-0 z-50  h-screen max-h-[calc(100vh-5rem)] bg-white px-2 pb-4 shadow-lg rounded-br-xl text-black items-center flex flex-col" )
    div#sidebar-header(class="relative w-full px-3 flex flex-col h-auto justify-between items-center")
        nuxt-img(src="https://freshandtidy.nl/_ipx/f_webp/images/logo.png" width="150" height="30" format="webp" class="")
        h1(class="text-xl font-bold  w-full text-center ") Fresh & Tidy 
    div#sidebar-toggle(class="absolute top-1 -right-7 p-2 w-11 h-11 rounded-full bg-[#FAF9FC] flex flex-row justify-center items-center")
        div(@click="is_sidebar_open = !is_sidebar_open" class=" hover:cursor-pointer w-full h-full bg-slate-200 rounded-full")
            ArrowIcon(:class="!is_sidebar_open? 'animate-spinOnceBack': 'animate-spinOnce '" class="w-full h-full  ")
    div#sidebar-content(class="relative w-full h-full flex flex-col justify-between items-start mt-4 space-y-5 rounded-md ")
        
        div(class="w-full h-auto flex flex-col  items-start  space-y-3 px-2 lg:px-4")
            ButtonSidebar(to="/dashboard/shipments" text="Shipments" :notifications_count="mainStore.getNewReservations?.length" @click="is_sidebar_open = !is_sidebar_open" )
                template(v-slot:icon)
                    ShippingIcon(class="w-6 h-6")
            //- ButtonSidebar(to="/dashboard/notifications" text="Notifications" :notifications_count="1" :is_active="false")
            //-     template(v-slot:icon)
            //-         NotificationIcon(class="w-6 h-6")
        hr(class="w-full  border-gray-300 " )
        div(class="w-full h-full scroll-smooth no-scrollbar  flex flex-col  items-start mt-4 space-y-3 px-2 lg:px-4")
            
            ButtonSidebar(text="Dashboard" to="/dashboard" :notifications_count="0" @click="is_sidebar_open = !is_sidebar_open")
                template(v-slot:icon)
                    DashboardIcon(class="w-6 h-6")
            ButtonSidebar(text="Timeslots" to="/dashboard/timeslots" @click="is_sidebar_open = !is_sidebar_open" )
                template(v-slot:icon)
                    TimeslotsIcon(class="w-6 h-6")
            ButtonSidebar(text="Accounts" to="/dashboard/accounts" @click="is_sidebar_open = !is_sidebar_open" )
                template(v-slot:icon)
                    AccountsIcon(class="w-6 h-6")
           
            ButtonSidebar(text="Carriers" to="/dashboard/carriers" @click="is_sidebar_open = !is_sidebar_open" v-if="userStore.accountType === 'arrow-employee'")
                template(v-slot:icon)
                    TruckIcon(class="w-6 h-6")
            div(class="flex flex-col w-full ")
              ButtonSidebar( text="Settings" to="/dashboard/settings" @click="is_sidebar_open = !is_sidebar_open" )
                  template(v-slot:icon)
                      SettingsIcon(class="w-6 h-6")
                  template(v-slot:icon-2)
                    ArrowIcon(@click.prevent="isMoreSettings = !isMoreSettings" :class="isMoreSettings? 'rotate-90': '-rotate-90'" class="w-8 h-8 ml-3 group-hover:text-[#2da9db]   " )
              transition(name="submenu" @enter="enter" @leave="leave")
                div(v-show="isMoreSettings" class="flex  w-full h-auto pl-[1rem] gap-y-2 py-2 rounded-b-md")
                  .stick
                  div(v-show="isMoreSettings" class="flex flex-col w-full h-auto pl-[1.5rem]")
                    div(class="w-auto flex gap-x-2")
                      AccountsIcon(class="w-5 h-5 ")
                      p account 
                    div(class="w-auto flex gap-x-2")
                      PaymentsIcon(class="w-5 h-5 ")
                      p payments 
                    p dsadsa
            ButtonSidebar(text="Carriers" to="/dashboard/carriers" @click="is_sidebar_open = !is_sidebar_open" v-if="userStore.accountType === 'arrow-employee'")
                template(v-slot:icon)
                    TruckIcon(class="w-6 h-6")
            
        button(class="w-[calc(100%-2rem)] mx-auto h-[3.3rem] px-4 py-2 bg-[#060c3a] text-white rounded-md hover:bg-violet-700 ")
            NuxtLink(to="/dashboard/timeslots") + Reserve Timeslot
        
            
</template>

<script setup lang="ts">
import PaymentsIcon from "~icons/fluent/payment-32-regular";
import InfoIcon from "~icons/material-symbols/info-outline";
import ShippingIcon from "~icons/material-symbols/local-shipping-outline-rounded";
import TimeslotsIcon from "~icons/ic/round-access-time";
import AccountsIcon from "~icons/line-md/account";
import NotificationIcon from "~icons/basil/notification-outline";
import ArrowIcon from "~icons/material-symbols/chevron-left-rounded";
import DashboardIcon from "~icons/ant-design/home-outlined";
import SettingsIcon from "~icons/material-symbols/settings";
import TruckIcon from "~icons/ph/truck";

import { useMainStore } from "@/stores/Main";
import { useUserStore } from "@/stores/User";
const userStore = useUserStore();
const mainStore = useMainStore();
// ------ is's ------ //
const is_sidebar_open = ref(false);
const isMoreSettings = ref(false);

function enter(el, done) {
  // Transition in
  el.style.opacity = 0;
  el.style.height = "0";

  requestAnimationFrame(() => {
    el.style.transition = "opacity 0.2s, height 0.2s";
    el.style.opacity = "1";
    el.style.height = "105px"; // Adjust the height you want the submenu to expand to

    // Wait for the transition to finish
    el.addEventListener("transitionend", done);
  });
}

function leave(el, done) {
  // Transition out
  el.style.transition = "opacity 0.2s, height 0.2s";
  el.style.opacity = "0";
  el.style.height = "0";

  // Wait for the transition to finish
  el.addEventListener("transitionend", done);
}
</script>

<style lang="scss" scoped>
.stick {
  width: 4px;
  background-color: #000; /* Adjust the color as needed */
  cursor: row-resize;
  transition: height 0.2s ease;
}

.stick.resizable {
  height: 60px; /* Set an initial height for the stick */
}

.stick.resizable:hover {
  height: 100px; /* Adjust the height on hover */
}

.hide-left {
  animation: hide-left 0.5s ease-in-out forwards;

  @media (min-width: 1024px) {
    animation: none;
  }
}
@keyframes hide-left {
  from {
    transform: translateX(0rem);
  }

  to {
    transform: translateX(-100%);
  }
}
.show-right {
  animation: show-right 0.5s ease-in-out forwards;

  @media (min-width: 1024px) {
    animation: none;
  }
}

@keyframes show-right {
  from {
    transform: translateX(-25rem);
  }
  to {
    transform: translateX(0rem);
  }
}
.submenu {
  will-change: opacity, height;
  overflow: hidden; /* Ensure content outside the height is hidden */
  height: 0; /* Start with 0 height to hide the submenu initially */
  opacity: 0; /* Start with 0 opacity to make it invisible */
}

.submenu-enter-active {
  transition: opacity 0.2s ease, height 0.2s ease;
}

.submenu-leave-active {
  transition: opacity 0.2s ease, height 0.2s ease;
}
</style>
