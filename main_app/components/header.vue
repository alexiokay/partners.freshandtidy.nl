<template lang="pug">
div(class=" w-full h-auto flex flex-col md:flex-row gap-y-6 3xl:pl-[19rem] lg:pl-[8rem]  md:pl-6 pl-4  justify-center bg-[#Fcf2ec]")
    div(class="w-full md:gap-y-[2rem]  flex flex-col md:mt-[6rem]") 
        h1(class="text-3xl md:text-7xl  lg:w-full font-bold text-[#124944]") Proffesional 
            span.text-black Cleaning
            p.text-black service for your home
        p(class="text-[#5d5552] text-xl md:text-2xl font-medium mt-4 md:mt-0") With, Reliable, Friendly and Trustfull being our company values, we are present ourselves with the most complete and up to date cleaning services.
        nuxt-img(src="images/pani_12.png" class="md:hidden h-full max-h-[75vh] mt-auto w-auto object-contain sticky" format="webp" height="2060" width="1940")
        div(class="flex flex-col mt-[1.5rem] md:mt-[3rem] mb-8 md:mb-[7rem] gap-y-4")
            div(class='flex  flex-col md:flex-row flex-wrap gap-x-10 items-start  md:items-center gap-y-4  ')
                Button(text="I'am looking for a cleaner" class="bg-[#fad613] order-0 md:order-0 md:first-letter:h-auto h-[4rem] md:h-[4.4rem] text-xl md:text-2xl")
                    template(v-slot:icon)
                        ArrowLeftIcon(class="ml-2 w-[1.5rem] h-[1.5rem] text-[#02374b] rotate-90")
                
                
                Button(text="I'am looking for job" class="order-0 bg-[#124944] order-1 text-white md:order-0 md:first-letter:h-auto h-[4rem] md:h-[4.4rem] text-xl md:text-2xl")
                    template(v-slot:icon)
                        ArrowLeftIcon(class="ml-2 w-[1.5rem] h-[1.5rem] text-white rotate-90")
            buttonWatch(@click="isVideoOpen = true" class="md:h-[5rem] mr-auto order-2 md:order-0 text-xl md:text-5xl hover:cursor-pointer" text=" Watch our Service") 
            
        div(class=" w-full lg:text-3xl 3xl:text-5xl text-lg h-auto gap-x-4 md:gap-x-8 mb-2 md:mb-[6rem] lg:mb-[10rem] hidden md:flex")
            div(class="flex flex-col space-y-4 items-center text-center")
                p(class="  text-[#124944] font-bold flex items-center gap-x-2") 2760
                    span(class="text-black text-2xl font-extrabold") +
                p(class="text-[#5e595a] text-lg md:text-2xl font-semibold") Total Customer
            .vr(class="h-[4rem] ")
            div(class="flex flex-col space-y-4 items-center text-center")
                p(class="  text-[#124944] font-bold flex items-center gap-x-2") 2760
                    span(class="text-black text-2xl font-extrabold") +
                p(class="text-[#5e595a] text-lg md:text-2xl font-semibold") Total Customer
            .vr(class="h-[4rem] ")
            div(class="flex flex-col space-y-4 items-center text-center ")
                p(class="  text-[#124944] font-bold flex items-center gap-x-2") 2760
                    span(class="text-black text-2xl font-extrabold") +
                p(class="text-[#5e595a] text-lg md:text-2xl font-semibold") Total Customer
        
    nuxt-img(src="images/pani_12.png" class="hidden md:flex h-full max-h-[75vh] mt-auto w-auto object-contain" format="webp" height="2060" width="1940")

    Watch(:isOpen="isVideoOpen" class=" " @close="isVideoOpen = false" )

</template>

<script setup lang="ts">
import SearchIcon from "~icons/iconamoon/search-light";
import ArrowLeftIcon from "~icons/ph/arrow-up-left";

const isVideoOpen = ref(false);
</script>

<style lang="scss">
.vr {
  border-left: 2px dotted #fad613;
}
</style>
