<template lang="pug">
div(class="flex w-full h-[5rem] md:h-[10rem] bg-[#Fcf2ec] items-center 2xl:px-[19rem]  md:px-2 px-2 ")
    div(class="flex h-auto w-[3rem]  md:w-1/6 items-center justify-start min-w-[8rem] md:min-w-[15rem] ")
            nuxt-img(alt="logo2"  src="/images/logo.png" class="w-full h-auto aspect-square" format="webp" )
    
    div(class="nav hidden md:flex w-full h-[6rem]   justify-between ")
    
        
        
        
        div#navigation(class="flex w-full font-semibold justify-center items-center space-x-4 md:space-x-12  text-lg xl:text-xl text-gray-600 ")
            div(class="flex flex-col")
                NuxtLink(:class="route.name==='index'? 'text-[#124944]': 'text-[#7e7b74]'" class="nav-link" to="/"  ) Home
                hr(:class="route.name==='index'? 'visible': 'hidden'" class="w-3/4 border-[#124944] border-[0.1rem] mt-1")
            NuxtLink(class="nav-link" to="/about") About Us
            NuxtLink(class="nav-link" to="/services") Services
            NuxtLink(class="nav-link" to="/pricing") Pricing
            NuxtLink(class="nav-link" to="/contact") Blog
            NuxtLink(class="nav-link" to="/contact") Contact
            NuxtLink(class="nav-link" to="/contact") Careers
        button(class=" min-w-[18rem] border-[#7e7b74] my-auto w-auto h-3/4 rounded-r-[1.5rem] rounded-bl-[1.5rem] py-2 px-6 border-[0.1rem] font-semibold text-xl text-[#7e7b74] ml-12 hover:bg-[#Fef2e8] shadow-lg") Free Consultation

        

div#mobileNav(:class="isMobileMenu? '': 'hidden'" class="fixed flex flex-col h-screen w-full justify-start text-5xl items-center text-white space-y-3 z-50 ")
    
    div(class="flex flex-col")
            NuxtLink(:class="route.name==='index'? 'text-yellow-400': 'text-[#7e7b74]'" class="nav-link" to="/services"  ) Home
            hr(:class="route.name==='index'? 'visible': 'hidden'" class="w-3/4 border-yellow-400 border-1 md:border-[0.1rem] mt-1")
    NuxtLink(class="nav-link text-white" to="/about") About Us
    NuxtLink(class="nav-link text-white" to="/contact") Services
    NuxtLink(class="nav-link text-white" to="/contact") Pricing
    NuxtLink(class="nav-link text-white" to="/contact") Blog
    NuxtLink(class="nav-link text-white" to="/contact") Contact
    NuxtLink(class="nav-link text-white " to="/contact") Careers
    
div#overlay(:class="isMobileMenu ? '' : 'hidden-overlay'" class="fixed  items-center   overlaying top-0 left-0 w-full h-screen bg-black opacity-100 z-40 " )
div(class="fixed left-[1rem]  bottom-[1rem] rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-white flex items-center justify-center z-50 md:hidden")
    MenuIcon2#mobileNavToggler(class=" w-14 h-14 ml-auto   text-[#124944]" @click="isMobileMenu = !isMobileMenu")
            


    

    




</template>

<script setup lang="ts">
import MenuIcon2 from "~icons/jam/menu";

const route = useRoute();

const isMobileMenu = ref(false);
</script>

<style lang="scss"></style>
