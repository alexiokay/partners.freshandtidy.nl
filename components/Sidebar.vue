<template lang="pug">

Transition(name="fade")
    <div v-show="!is_sidebar_open" @click="is_sidebar_open = !is_sidebar_open" tabindex="-1" class="fixed  lg:hidden top-0 pointer-event-none flex items-center bg-[rgba(0,0,0,0.55)] justify-center left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen md:h-full"></div>

div#sidebar(:class="is_sidebar_open? 'hide-left  ': 'show-right'" class=" fixed w-[20rem] lg:w-[23rem] bottom-0 left-0 z-50  h-screen   bg-[#Fbfafa] px-2 pb-4 shadow-lg rounded-br-xl text-black items-center flex flex-col" )
    div#sidebar-header(class="relative w-full px-3 flex flex-col h-auto justify-between items-center gap-y-2 my-12")
        nuxt-img(src="images/girl.webp"  width="100" height="100" format="webp" class="cover rounded-full aspect-square object-cover")
        p(class="text-2xl font-medium  w-full text-center flex flex-col ") Alexi 
          span Pawelec
    div#sidebar-toggle(class="md:hidden absolute top-1 -right-7 p-2 w-11 h-11 rounded-full bg-[#FAF9FC] flex flex-row justify-center items-center")
        div(@click="is_sidebar_open = !is_sidebar_open" class=" hover:cursor-pointer w-full h-full bg-slate-200 rounded-full")
            ArrowIcon(:class="!is_sidebar_open? 'animate-spinOnceBack': 'animate-spinOnce '" class="w-full h-full  ")
    div#sidebar-content(class="relative w-full h-full flex flex-col  items-start  space-y-5 rounded-md ")
        
        div(class="w-full h-auto flex flex-col  items-start  space-y-3 px-2 lg:px-14")
            ButtonSidebar(text="Dashboard" to="/dashboard" :notifications_count="0" @click="is_sidebar_open = !is_sidebar_open")
                template(v-slot:icon)
                    DashboardIcon(class="w-8 h-8")
            //- ButtonSidebar(to="/dashboard/notifications" text="Notifications" :notifications_count="1" :is_active="false")
            //-     template(v-slot:icon)
            //-         NotificationIcon(class="w-7 h-7")
        hr(class="w-3/5  border-[#E7e3e3] border-[0.1rem]  mx-auto" )
        div(class="w-full h-auto scroll-smooth no-scrollbar  flex flex-col  items-start mt-4 space-y-2 px-2 lg:px-14")
            
            
            
            
            ButtonSidebar(text="Quotes" to="/quotes" @click="is_sidebar_open = !is_sidebar_open" )
                template(v-slot:icon)
                  QuotesIcon(class="w-7 h-7")     
            ButtonSidebar(text="Your Services" to="/services" @click="is_sidebar_open = !is_sidebar_open" )
                template(v-slot:icon)
                  ServicesIcon(class="w-7 h-7")
            ButtonSidebar(text="Your Area" to="/locations" @click="is_sidebar_open = !is_sidebar_open" )
                template(v-slot:icon)
                  LocationsIcon(class="w-7 h-7")
            
               
            ButtonSidebar(text="Subscriptions" to="/subscriptions" @click="is_sidebar_open = !is_sidebar_open" )
                template(v-slot:icon)
                  SubscriptionIcon(class="w-7 h-7")
            ButtonSidebar(text="Customers" to="/customers" @click="is_sidebar_open = !is_sidebar_open" )
                template(v-slot:icon)
                  CustomersIcon(class="w-7 h-7")
            ButtonSidebar(text="Invoices" to="/invoices" @click="is_sidebar_open = !is_sidebar_open" )
                template(v-slot:icon)
                  InvoicesIcon(class="w-7 h-7")
            ButtonSidebar(text="Jobs" to="/jobs" @click="is_sidebar_open = !is_sidebar_open" )
                template(v-slot:icon)
                  JobsIcon(class="w-7 h-7")
            ButtonSidebar(text="Competitor's Analysis" to="/competitors-analysis" @click="is_sidebar_open = !is_sidebar_open" )
                template(v-slot:icon)
                  JobsIcon(class="w-7 h-7")
            ButtonSidebar(text="Your Employees" to="/employees" @click="is_sidebar_open = !is_sidebar_open" )
              template(v-slot:icon)
                JobsIcon(class="w-7 h-7")
            ButtonSidebar(text="Forum" to="/forum" @click="is_sidebar_open = !is_sidebar_open" )
              template(v-slot:icon)
                JobsIcon(class="w-7 h-7")
            div(class="flex flex-col w-full ")
              ButtonSidebar( text="Schedules" to="/scheduling" @click="is_sidebar_open = !is_sidebar_open" )
                  template(v-slot:icon)
                    CalendarIcon(class="w-7 h-7")
                  template(v-slot:icon-2)
                    ArrowIcon(@click.stop.prevent="isMoreSchedulingSettings = !isMoreSchedulingSettings" :class="isMoreSchedulingSettings? '  rotate-90': '-rotate-90'" class="w-8 h-8 ml-3 group-hover:text-[#2da9db]   " )
              transition(name="submenu" @enter="enter" @leave="leave")
                div(v-show="isMoreSchedulingSettings" class="flex  w-full h-auto pl-[1.4rem]  py-2 rounded-b-md")
                  .stick
                  div(v-show="isMoreSchedulingSettings" class="flex flex-col w-full h-auto pl-[1.3rem] gap-y-2")
                    div(class="w-auto flex gap-x-2 hover:text-blue-400 rounded-md px-2  hover:cursor-pointer")
                      ConfirmationIcon(class="w-5 h-5 ")
                      nuxtLink(to="/scheduling/availability") Availability
                    div(class="w-auto flex gap-x-2 hover:text-blue-400 rounded-md px-2  hover:cursor-pointer")
                      ConfirmationIcon(class="w-5 h-5 ")
                      p Initial Confirmation
                    div(class="w-auto flex gap-x-2 hover:text-blue-400 rounded-md px-2 hover:cursor-pointer")
                      NotificationIcon(class="w-5 h-5 ")
                      p Reminders 
                    div(class="w-auto flex gap-x-2 hover:text-blue-400 rounded-md px-2  hover:cursor-pointer")
                      CancellationIcon(class="w-5 h-5 ")
                      p Cancellation 
                    

                   

            div(class="flex flex-col w-full ")
              ButtonSidebar( text="Settings" to="/dashboard/settings" @click="is_sidebar_open = !is_sidebar_open" )
                  template(v-slot:icon)
                      SettingsIcon(class="w-7 h-7")
                  template(v-slot:icon-2)
                    ArrowIcon(@click.stop.prevent="isMoreSettings = !isMoreSettings" :class="isMoreSettings? '  rotate-90': '-rotate-90'" class="w-8 h-8 ml-3 group-hover:text-[#2da9db]   " )
              transition(name="submenu" @enter="enter" @leave="leave")
                div(v-show="isMoreSettings" class="flex  w-full h-auto pl-[1.4rem]  py-2 rounded-b-md")
                  .stick
                  div(v-show="isMoreSettings" class="flex flex-col w-full h-auto pl-[1.3rem] gap-y-2")
                    div(class="w-auto flex gap-x-2 hover:text-blue-400 rounded-md px-2 hover:cursor-pointer")
                      AccountsIcon(class="w-5 h-5 ")
                      p account 
                    div(class="w-auto flex gap-x-2 hover:text-blue-400 rounded-md px-2  hover:cursor-pointer")
                      PaymentsIcon(class="w-5 h-5 ")
                      p payments 
                    div(class="w-auto flex gap-x-2 hover:text-blue-400 rounded-md px-2  hover:cursor-pointer")
                      LockerIcon(class="w-5 h-5 ")
                      p security
                    div(class="w-auto flex gap-x-2 hover:text-blue-400 rounded-md px-2  hover:cursor-pointer")
                      LockerIcon(class="w-5 h-5 ")
                      p languages
                    div(class="w-auto flex gap-x-2 hover:text-blue-400 rounded-md px-2  hover:cursor-pointer")
                      LockerIcon(class="w-5 h-5 ")
                      p security

                    p Notifications
        hr(class="w-3/5  border-[#E7e3e3] border-[0.1rem]  mx-auto" )
        div(class="w-full h-auto scroll-smooth no-scrollbar  flex flex-col  items-start mt-4 space-y-3 px-2 lg:px-14")
          p(class="text-[#838181]  text-lg ml-4") Account
          ButtonSidebar(text="Call Logs" to="/calls" @click="is_sidebar_open = !is_sidebar_open" )
                  template(v-slot:icon)
                    PhoneIcon(class="w-7 h-7")
        
    button(@click="logout" class="bg-[#a34338] text-white px-4 py-2 rounded-xl w-full h-auto text-lg font-medium ") Logout
            
      
     
        
            
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
import SettingsIcon from "~icons/material-symbols/settings-outline";
import TruckIcon from "~icons/ph/truck";
import LockerIcon from "~icons/mdi/secure-outline";
import PhoneIcon from "~icons/carbon/phone-voice";
import CalendarIcon from "~icons/mdi/calendar-week";
import SubscriptionIcon from "~icons/fluent-mdl2/recurring-event";
import ServicesIcon from "~icons/carbon/clean";
import LocationsIcon from "~icons/carbon/location";
import CancellationIcon from "~icons/material-symbols/cancel-outline";
import ConfirmationIcon from "~icons/line-md/confirm";
import JobsIcon from "~icons/ps/work-case";
import CustomersIcon from "~icons/fluent/person-accounts-24-regular";
import InvoicesIcon from "~icons/fluent/document-error-20-regular";
import QuotesIcon from "~icons/clarity/contract-line";

import { useMainStore } from "@/stores/Main";
import { useUserStore } from "@/stores/User";
const userStore = useUserStore();
const mainStore = useMainStore();

const logout = () => {
  userStore.logout();
  window.location.reload();
};
// ------ is's ------ //
const is_sidebar_open = ref(false);
const isMoreSettings = ref(false);
const isMoreSchedulingSettings = ref(false);

function enter(el, done) {
  // Transition in
  el.style.opacity = 0;
  el.style.height = "0";

  requestAnimationFrame(() => {
    el.style.transition = "opacity 0.2s, height 0.2s";
    el.style.opacity = "1";
    el.style.height = "190px"; // Adjust the height you want the submenu to expand to

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
  width: 1px;
  background-color: #6f6f6f; /* Adjust the color as needed */
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
