<template lang="pug">

Transition(name="fade")
    <div v-show="!is_sidebar_open" @click="is_sidebar_open = !is_sidebar_open" tabindex="-1" class="fixed  lg:hidden top-0 pointer-event-none flex items-center bg-[rgba(0,0,0,0.55)] justify-center left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen md:h-full"></div>

div#sidebar(:class="is_sidebar_open ? 'hide-left' : 'show-right'" class="fixed w-[20rem] lg:w-[23rem] bottom-0 left-0 z-50 h-[100lvh] bg-[#Fbfafa]  pb-4 shadow-lg rounded-br-xl text-black flex flex-col") 
    // Pointer Element
    div(v-if="activeButtonIndex !== null" :style="{ top: `${activeButtonIndex*50 }px` }" class="absolute -left-[3.5rem] w-[0.65rem] h-[2.7rem] bg-violet-600 rounded-r-md transition-all")
    
    div#sidebar-header(class="relative w-full px-3 flex flex-col h-auto justify-between items-center gap-y-2 my-6")
        nuxt-img(src="images/girl.webp" width="100" height="100" format="webp" class="cover rounded-full aspect-square object-cover")
        p(class="text-2xl font-medium w-full text-center flex flex-col") Alexi 
          span Pawelec
    div#sidebar-toggle(class="md:hidden absolute top-1 -right-7 p-2 w-11 h-11 rounded-full bg-[#FAF9FC] flex flex-row justify-center items-center")
        div(@click="is_sidebar_open = !is_sidebar_open" class=" hover:cursor-pointer w-full h-full bg-slate-200 rounded-full")
            ArrowIcon(:class="!is_sidebar_open? 'animate-spinOnceBack': 'animate-spinOnce '" class="w-full h-full  ")
    div#sidebar-content(class="flex-1 overflow-y-auto relative w-full flex flex-col items-start space-y-5 rounded-md px-2")
        
        div(class="w-full h-auto flex flex-col  items-start  space-y-3 px-2 lg:px-8")
            ButtonSidebar(text="Dashboard" to="/dashboard" :notifications_count="0" @click="is_sidebar_open = !is_sidebar_open")
                template(v-slot:icon)
                    DashboardIcon(class="w-8 h-8")
            //- ButtonSidebar(to="/dashboard/notifications" text="Notifications" :notifications_count="1" :is_active="false")
            //-     template(v-slot:icon)
            //-         NotificationIcon(class="w-7 h-7")
        hr(class="w-3/5  border-[#E7e3e3] border-[0.1rem]  mx-auto" )
        div(class="w-full h-auto scroll-smooth no-scrollbar  flex flex-col  items-start mt-4 space-y-2 px-2 lg:px-8 ")
                
            ButtonSidebar(
            v-for="(button, index) in sidebarButtons"
            :key="button.to"
            :text="button.text"
            :to="button.to"
            :notifications_count="button.notifications_count"
            @click="toggleSidebar"
          )
              template(v-slot:icon)
                component(:is="button.icon" class="w-8 h-8")
                
           
            div(class="flex flex-col w-full ")
              ButtonSidebar( text="Schedules" to="/scheduling" @click="is_sidebar_open = !is_sidebar_open" )
                  template(v-slot:icon)
                    CalendarIcon(class="w-7 h-7")
                  template(v-slot:icon-2)
                    ArrowIcon(@click.stop.prevent="isMoreSchedulingSettings = !isMoreSchedulingSettings" :class="isMoreSchedulingSettings? '  rotate-90': '-rotate-90'" class="w-8 h-8 ml-3 group-hover:text-[#2da9db]   " )
              transition(name="submenu" @enter="enter" @leave="leave")
                div(v-show="isMoreSchedulingSettings" class="flex  w-full h-auto pl-[1.4rem]  py-2 rounded-b-md " )
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
                div(v-show="isMoreSettings" class="flex  w-full h-auto pl-[1.4rem]  py-2 rounded-b-md" )
                  .stick
                  div(v-show="isMoreSettings" class="flex flex-col w-full h-auto pl-[1.3rem] gap-y-2" )
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
        div(class="w-full h-auto scroll-smooth no-scrollbar  flex flex-col  items-start mt-4 space-y-3 px-2 lg:px-8")
          p(class="text-[#838181]  text-lg ml-4") Account
          ButtonSidebar(text="Call Logs" to="/calls" @click="is_sidebar_open = !is_sidebar_open" )
                  template(v-slot:icon)
                    PhoneIcon(class="w-7 h-7")
        
        div(class="h-full flex flex-col justify-end w-full sticky bottom-0 bg-[#Fbfafa]")
          button(@click="logout"     class="bg-[#a34338] text-white px-4 py-2 rounded-xl w-full h-auto text-lg font-medium mt-4   "      ) Logout
            
      
     
        
            
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

const sidebarButtons = ref([
  { text: "Quotes", to: "/quotes", icon: QuotesIcon, notifications_count: 0 },
  {
    text: "Your Services",
    to: "/services",
    icon: ServicesIcon,
    // notifications_count: 0,
  },
  {
    text: "Your Area",
    to: "/locations",
    icon: LocationsIcon,
    // notifications_count: 0,
  },
  {
    text: "Subscriptions",
    to: "/subscriptions",
    icon: SubscriptionIcon,
    // notifications_count: 0,
  },
  {
    text: "Customers",
    to: "/customers",
    icon: CustomersIcon,
    // notifications_count: 0,
  },
  {
    text: "Invoices",
    to: "/invoices",
    icon: InvoicesIcon,
    // notifications_count: 0,
  },
  {
    text: "Jobs",
    to: "/jobs",
    icon: JobsIcon,
    // notifications_count: 0,
  },
  {
    text: "Competitor's Analysis",
    to: "/competitors-analysis",
    icon: JobsIcon,
    // notifications_count: 0,
  },
  {
    text: "Your Employees",
    to: "/employees",
    icon: JobsIcon,
    // notifications_count: 0,
  },
  {
    text: "Forum",
    to: "/forum",
    icon: JobsIcon,
    // notifications_count: 0,
  },

  // Add more buttons as needed...
]);

const accountButtons = ref([
  {
    text: "Call Logs",
    to: "calls",
    icon: PhoneIcon,
  },
]);

const allButtons = computed(() => [
  ...sidebarButtons.value,
  ...accountButtons.value,
]);

const toggleSidebar = () => {
  is_sidebar_open.value = !is_sidebar_open;
};

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
