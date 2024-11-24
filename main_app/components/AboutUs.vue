<template lang="pug">
div(class="relative w-full  flex flex-col md:flex-row text-center gap-y-6 first-letter: md:gap-y-12 gap-x-[9rem] px-4 md:px-0 ")


    div(class="flex flex-col md:w-1/2 w-full  md:pt-[2rem] gap-x-[8rem]  ")
        div(class="flex flex-col 3xl:pl-[19rem] md:pl-[4rem] w-full h-auto  pb-[2rem] md:pb-[4rem]")
            div(class="w-[10rem] my-4 md:my-0  h-[3rem] rounded-full bg-[#Fcf2ec] text-[#F9782b] text-2xl items-center justify-center flex font-bold") ABOUT US
            h2(class="text-3xl md:text-6xl font-bold text-black text-start") We Are Providing  Best 
                span(class="text-[#F9782b]") Cleaning 
                span Services
        div(class="h-1/3")    
            nuxt-img(src="images/pani_3.png" format="webp" class="w-full  object-contain" )
    div(class="w-full md:w-1/2 flex flex-col 3xl:pr-[19rem] md:pr-[2rem] gap-x-[8rem] md:mt-[6rem] gap-y-[1.5rem]")
        div(class="flex flex-col w-full text-start text-xl md:text-3xl md:font-semibold text-[#5d5552] ")
            p(class="leading-[2.6rem]") For over 15 years, customers have welcomed the trusted cleaning proffesionals from locally owned and operated businesses into their homes.

        div(@click="activeMenu = 1" v-if="activeMenu !== 1" class=" p-2 min-h-[5rem]  md:min-h-0 md:p-[1.6rem] border-2 border-[#c9c9c9] rounded-lg flex items-center justify-between text-lg md:text-3xl font-bold text-[#838495] mt-2 md:mt-[4rem] hover:cursor-pointer")
            p(class="")  Free lifetime Support
            p +
        div(v-if="activeMenu === 1" class="flex flex-col w-full  mt-2 md:mt-[4rem] ")
            div( class='bg-[#021108] flex justify-between items-center px-[2rem] h-[5rem] rounded-lg text-white font-semibold text-xl md:text-3xl')
                p Free lifetime Support
                p(@click="activeMenu = 0" class="hover:cursor-pointer") x
            div(class="bg-bg-white shadow-[0_1px_60px_-15px_rgba(0,0,0,0.4)] text-[#838495] text-lg md:text-2xl px-[2rem] text-center md:text-start leading-[2.5rem] font-medium py-[1.5rem]")
                p Trought Our Connected Content Approach, We Unite Communications, Digital Experiences, And Performance Marketing To Help More Than 1000 Global Companies.

        div(@click="activeMenu = 2" v-if="activeMenu !== 2" class=" p-2 min-h-[5rem] md:min-h-0 md:p-[1.6rem] border-2 border-[#c9c9c9] rounded-lg flex items-center justify-between text-lg md:text-3xl font-bold text-[#838495] hover:cursor-pointer")
            p(class="")  100% Satisfaction Guarantee
            p +
        div(v-if="activeMenu === 2" class="flex flex-col w-full ")
            div( class='bg-[#021108] flex justify-between items-center px-[2rem] h-[5rem] rounded-lg text-white font-semibold text-xl md:text-3xl')
                p 100% Satisfaction Guarantee
                p(@click="activeMenu = 0" class="hover:cursor-pointer") x
            div(class="bg-bg-white shadow-[0_1px_60px_-15px_rgba(0,0,0,0.4)] text-[#838495] text-lg md:text-2xl px-[2rem] text-center md:text-start leading-[2.5rem] font-medium py-[1.5rem]")
                p Trought Our Connected Content Approach, We Unite Communications, Digital Experiences, And Performance Marketing To Help More Than 1000 Global Companies.

        div(@click="activeMenu = 3" v-if="activeMenu !== 3" class=" p-2 min-h-[5rem] md:min-h-0 md:p-[1.6rem] border-2 border-[#c9c9c9] rounded-lg flex items-center justify-between text-lg md:text-3xl font-bold text-[#838495] hover:cursor-pointer")
            p(class="")  Expert & Experienced Cleaning Staff
            p +
        div(v-if="activeMenu === 3" class="flex flex-col w-full ")
            div( class='bg-[#021108] flex justify-between items-center px-[2rem] h-[5rem] rounded-lg text-white font-semibold text-xl md:text-3xl')
                p Expert & Experienced Cleaning Staff
                p(@click="activeMenu = 0" class="hover:cursor-pointer") x
            div(class="bg-bg-white shadow-[0_1px_60px_-15px_rgba(0,0,0,0.4)] text-[#838495] text-lg md:text-2xl px-[2rem] text-center md:text-start leading-[2.5rem] font-medium py-[1.5rem]")
                p Trought Our Connected Content Approach, We Unite Communications, Digital Experiences, And Performance Marketing To Help More Than 1000 Global Companies.


        
        
        
        Button(@click="callUs" text="Call Us" class="w-[16rem] mt-6 md:mt-[3rem] h-[4rem] md:h-[4.4rem] text-xl md:text-2xl mx-auto md:mx-0 bg-[#fad613]")
            template(v-slot:icon)
                PhoneIcon(class="w-8 h-8 ml-3 group-hover:text-[#2da9db] ")
</template>

<script setup lang="ts">
import PhoneIcon from "~icons/carbon/phone-voice-filled";

const menu = ref([0, 1, 2, 3]);
const activeMenu = ref(2);

const callUs = () => {
  window.location.href = "tel:+3197010253339";
};
</script>

<style lang="scss"></style>
