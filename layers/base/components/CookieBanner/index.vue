<template lang="pug">
div
    
    Transition(name="fade")
        <div v-show="isOpen && customize" @click="$emit('close'), customize = false" tabindex="-1" class="fixed top-0 pointer-event-none flex items-center bg-[rgba(0,0,0,0.55)] justify-center left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto sm:inset-0 h-screen sm:h-full"></div>
    <Transition name="fade">
        div(v-show="isOpen && !customize" class="fixed group  bottom-0 pointer-event-none flex items-center  justify-center left-0 z-50  mx-auto w-auto p-4  h-auto ")
            <!-- Modal content -->
            div.glow(class="absolute z-10 inset-4 bg-gradient-to-r from-red-600 to-[#3ed35a] rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200")
            div(class=" text-black z-20 rounded-lg shadow dark:bg-gray-700 h-auto w-full sm:w-[25rem] md:w-[33rem] px-6 py-4 flex flex-col bg-white gap-y-3 drop-shadow-glow")

                p(class=" text-xl md:text-2xl xl:text-3xl font-extrabold") WE VALUE YOUR PRIVACY
                p(class="text-xs sm:text-[0.6rem] md:text-sm  xl:text-base text-[#B1b0b4] font-roboto font-bold") WE USE COOKIES TO ENHANCE YOUR BROWSING EXPERIENCE, SERVE PERSONALIZED ADS OR CONTENT, AND ANALYZE OUR TRAFFIC. BY CLICKING "ACCEPT ALL", YOU CONSENT TO OUR USE OF COOKIES. VISIT OUR COOKIE POLICY FOR MORE INFO.
                div(class="flex flex-col-reverse sm:flex-row w-full gap-y-2 gap-x-2 justify-between text-xs md:text-sm xl:text-base font-bold")
                    button(@click="customize= true" class=" px-5 py-2 w-full border-[#3ed35a] border-2 hover:border-[#35b14c]  hover:bg-[rgba(0,0,0,0.1)]  ") CUSTOMIZE 
                    button(@click="rejectAllCookies(necessaryStore)" class=" px-5 w-full py-2 border-[#3ed35a] border-2 hover:border-[#35b14c] hover:bg-[rgba(0,0,0,0.1)] ") REJECT ALL
                    button(@click="rejectAllCookies(necessaryStore)" class=" px-5 w-full py-2 border-[#3ed35a] bg-[#3ed35a] border-2      text-black  hover:bg-[#35b14c]  hover:border-[#35b14c]  ") ACCEPT ALL   
    </Transition>
    Transition(name="jump-straight")
        <div v-if="isOpen && customize" @close="customize=false"   @click.stop="$emit('null')" class="fixed top-0 pointer-event-none flex items-center  justify-center left-0 right-0 z-50  mx-auto sm:w-[30rem] sm:p-4  sm:inset-0 h-screen lg:h-[73vh] my-auto ">
                <!-- Modal content -->
                <div class="relative bg-white rounded-xl shadow dark:bg-gray-700 h-full flex flex-col ">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between px-5 py-3 border-b bg-slate-50 rounded-t dark:border-gray-600">
                        <h3 class=" text-sm sm:text-xl md:text-3xl font-extrabold text-gray-900 dark:text-white ">
                            p CUSTOMIZE CONSENT PREFERENCES
                        </h3>
                        <button @click="customize = false" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="medium-modal">
                            <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span> 
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6 gap-y-3 flex flex-col overflow-y-scroll h-full sm:h-full w-[100vw] sm:w-[39rem] md:w-[53rem]  tracking-tight leading-4">
                        div(class="flex flex-col text-[0.6rem] md:text-xs")
                            p(class=" text-black font-roboto font-bold") WE USE COOKIES TO ENHANCE YOUR BROWSING EXPERIENCE, SERVE PERSONALIZED ADS OR CONTENT, AND ANALYZE OUR TRAFFIC. BY CLICKING "ACCEPT ALL", YOU CONSENT TO OUR USE OF COOKIES. VISIT OUR COOKIE POLICY FOR MORE INFO.
                            <!-- body description -->
                            p(class=" text-black font-roboto font-bold") THE COOKIES THAT ARE CATEGORIZED AS "NECESSARY" ARE STORED ON YOUR BROWSER AS THEY ARE ESSENTIAL FOR ENABLING THE BASIC FUNCTIONALITIES OF THE SITE.
                                p(v-show="isShowMore") WE ALSO USE THIRD-PARTY COOKIES THAT HELP US ANALYZE HOW YOU USE THIS WEBSITE, STORE YOUR PREFERENCES, AND PROVIDE THE CONTENT AND ADVERTISEMENTS THAT ARE RELEVANT TO YOU. THESE COOKIES WILL ONLY BE STORED IN YOUR BROWSER WITH YOUR PRIOR CONSENT. YOU CAN CHOOSE TO ENABLE OR DISABLE SOME OR ALL OF THESE COOKIES BUT DISABLING SOME OF THEM MAY AFFECT YOUR BROWSING EXPERIENCE.

                                p(v-if="!isShowMore" class="text-xs font-bold my-2") ... 
                                    button( @click="isShowMore = true" class=" text-blue-800 hover:cursor-pointer")  SHOW MORE
                                p(v-else @click="isShowMore = false" class="text-xs font-bold my-2" )
                                    button(class=" font-bold text-blue-800")  Show less
                            hr(class="border-[#B1b0b4] border-opacity-50 my-2")
                            div(class="flex flex-col gap-y-3")
                                CookieBannerItem(title="Necessary" :isActive="true" type="Always Active" description="NECESSARY COOKIES ARE REQUIRED TO ENABLE THE BASIC FEATURES OF THIS SITE, SUCH AS PROVIDING SECURE LOG-IN OR ADJUSTING YOUR CONSENT PREFERENCES. THESE COOKIES DO NOT STORE ANY PERSONALLY IDENTIFIABLE DATA.")
                                    template(v-slot:sub-items)
                                        CookieBannerSubItem(cookie="COOKIEYESID" duration="1 year" description="COOKIEYESID SETS THIS COOKIE AS IDENTIFIER FOR VISITORS ACCORDING TO THEIR CONSENT.")
                                        hr(class="border-[#B1b0b4] border-opacity-50")
                                        CookieBannerSubItem(cookie="CKY-CONSENT" duration="1 year" description="The cookie is set by CookieYes to remember the users's consent settings so that the website recognizes the users the next time they visit.")
                                        hr(class="border-[#B1b0b4] border-opacity-50")
                                        CookieBannerSubItem(cookie="cookieyes-necessary" duration="1 year" description="CookieYes sets this cookie to remember the consent of users for the use of cookies in the 'Necessary' category.")
                                        hr(class="border-[#B1b0b4] border-opacity-50")
                                        CookieBannerSubItem(cookie="cookieyes-functional" duration="1 year" description="COOKIEYESID SETS THIS COOKIE AS IDENTIFIER FOR VISITORS ACCORDING TO THEIR CONSENT.")
                                        hr(class="border-[#B1b0b4] border-opacity-50")
                                        CookieBannerSubItem(cookie="cookieyes-analytics" duration="1 year" description="CookieYes sets this cookie to remember the consent of users for the use of cookies in the 'Analytics' category.")
                                        hr(class="border-[#B1b0b4] border-opacity-50")
                                        CookieBannerSubItem(cookie="cookieyes-performance" duration="1 year" description="CookieYes sets this cookie to remember the consent of users for the use of cookies in the 'Performance' category.")
                                        hr(class="border-[#B1b0b4] border-opacity-50")
                                        CookieBannerSubItem(cookie="cookieyes-advertisement" duration="1 year" description="CookieYes sets this cookie to remember the consent of users for the use of cookies in the 'Advertisement' category.")
                                        hr(class="border-[#B1b0b4] border-opacity-50")
                                        CookieBannerSubItem(cookie="cookieyes-other" duration="1 year" description="CookieYes sets this cookie to remember the consent of users for the use of cookies in the 'Other' category.")
                                        hr(class="border-[#B1b0b4] border-opacity-50")
                                        CookieBannerSubItem(cookie="cky-action" duration="1 year" description="This cookie is set by CookieYes and is used to remember the action taken by the user.")


                                        

                                hr(class="border-[#B1b0b4] border-opacity-50")
                                CookieBannerItem(title="Functional" :isActive="necessaryStore.acceptedCookies.functional" description="ANALYTICAL COOKIES ARE USED TO UNDERSTAND HOW VISITORS INTERACT WITH THE WEBSITE. THESE COOKIES HELP PROVIDE INFORMATION ON METRICS SUCH AS THE NUMBER OF VISITORS, BOUNCE RATE, TRAFFIC SOURCE, ETC.")
                                    template(v-slot:sub-items)
                                        
                                hr(class="border-[#B1b0b4] border-opacity-50")
                                CookieBannerItem(title="Analytics"  :isActive="necessaryStore.acceptedCookies.analytics" description="ANALYTICAL COOKIES ARE USED TO UNDERSTAND HOW VISITORS INTERACT WITH THE WEBSITE. THESE COOKIES HELP PROVIDE INFORMATION ON METRICS SUCH AS THE NUMBER OF VISITORS, BOUNCE RATE, TRAFFIC SOURCE, ETC.")
                                    template(v-slot:sub-items)
                                        
                                hr(class="border-[#B1b0b4] border-opacity-50")
                                CookieBannerItem(title="Performance" :isActive="necessaryStore.acceptedCookies.performance" description="ANALYTICAL COOKIES ARE USED TO UNDERSTAND HOW VISITORS INTERACT WITH THE WEBSITE. THESE COOKIES HELP PROVIDE INFORMATION ON METRICS SUCH AS THE NUMBER OF VISITORS, BOUNCE RATE, TRAFFIC SOURCE, ETC.")
                                    template(v-slot:sub-items)
                                       
                                hr(class="border-[#B1b0b4] border-opacity-50")
                                CookieBannerItem(title="Advertisement" :isActive="necessaryStore.acceptedCookies.advertisement" description="ADVERTISEMENT COOKIES ARE USED TO PROVIDE VISITORS WITH CUSTOMIZED ADVERTISEMENTS BASED ON THE PAGES YOU VISITED PREVIOUSLY AND TO ANALYZE THE EFFECTIVENESS OF THE AD CAMPAIGNS.")
                                    template(v-slot:sub-items)
                                        
                                hr(class="border-[#B1b0b4] border-opacity-50")
                                CookieBannerItem(title="Others" :isActive="necessaryStore.acceptedCookies.others" description="OTHER UNCATEGORIZED COOKIES ARE THOSE THAT ARE BEING ANALYZED AND HAVE NOT BEEN CLASSIFIED INTO A CATEGORY AS YET.")
                                    template(v-slot:sub-items)
                                       
                    </div>
                    <!-- Modal footer -->
                    div(class=" px-5 py-3 flex flex-col-reverse sm:flex-row w-full gap-x-2 gap-y-1 justify-between text-[0.6rem] sm:text-base font-bold ")
                        button(@click="rejectAllCookies(necessaryStore), enableScroll();" class=" px-5 w-full py-2 border-[#3ed35a] border-2 hover:border-[#35b14c]  hover:bg-[rgba(0,0,0,0.1)]  ") REJECT ALL
                        button(@click="saveCookiesSettings(necessaryStore), enableScroll();" class=" px-5 py-2 w-full border-[#3ed35a] border-2 hover:border-[#35b14c] hover:bg-[rgba(0,0,0,0.1)] ") SAVE MY PREFERENCES
                        button(@click="acceptAllCookies(necessaryStore), enableScroll();" class=" px-5 py-2 w-full border-[#3ed35a] bg-[#3ed35a] border-2      text-black  hover:bg-[#35b14c] hover:border-[#35b14c]  ") ACCEPT ALL   
                </div>
        </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/User";
import { useNecessaryStore } from "~/stores/Necessary";
import {
  saveCookiesSettings,
  acceptAllCookies,
  rejectAllCookies,
} from "~/main_app/funcionalities/cookiesBanner";
import { disableScroll, enableScroll } from "~/main_app/funcionalities/scroll";

const necessaryStore = useNecessaryStore();

const userStore = useUserStore();
const customize = ref(false);
const isShowMore = ref(false);

const functional = ref(false);
const performance = ref(false);
const analytics = ref(false);
const advertisement = ref(false);
const others = ref(false);

const props = defineProps<{
  isOpen: boolean;
}>();

const checkBox = (el: any) => {
  const AimingCheckbox = el.currentTarget.querySelector(
    "input"
  ) as HTMLInputElement;
  console.log(AimingCheckbox);

  const parentEl = el.currentTarget.parentElement;

  let checkboxes = parentEl.querySelectorAll("input");
  //console.log(checkboxes.length);
  if (checkboxes.length === 1)
    checkboxes = parentEl.parentElement.querySelectorAll("input");
  //console.log(checkboxes.length);
  checkboxes.forEach((checkbox: HTMLInputElement) => {
    checkbox.disabled = true;
    if (checkbox.checked === true) {
      checkbox.checked = false;
      AimingCheckbox.checked = true;
    } else AimingCheckbox.checked = true;
  });
};
// watch if isOpen is true

// watch if isOpen is true
watch(customize, (customize) => {
  if (customize) {
    disableScroll();
  } else {
    enableScroll();
  }
});

//{ deep: true, immediate: true };
</script>

<style lang="scss">
.fade-enter {
}
.fade-enter-active {
  animation: fade-in 0.3s;
}
.fade-leave {
}
.fade-leave-active {
  animation: fade-out 0.3s;
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.jump-straight-enter {
}
.jump-straight-enter-active {
  animation: jump-straight-in 0.6s;
}
.jump-straight-leave {
}
.jump-straight-leave-active {
  animation: jump-straight-out 0.6s;
}
@keyframes jump-straight-in {
  0% {
    bottom: -100vh;
  }
  30% {
  }
  100% {
    bottom: 0vh;
  }
}
@keyframes jump-straight-out {
  0% {
    top: 0vh;
  }
  70% {
  }
  100% {
    bottom: 100vh;
    opacity: 0;
  }
}
</style>
