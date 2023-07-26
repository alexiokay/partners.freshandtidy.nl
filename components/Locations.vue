<template lang="pug">
div(class="flex w-full h-auto  items-center justify-center gap-x-[8rem] bg-[#00374c] px-[13rem] py-[8rem] rounded-r-[9rem] rounded-bl-[9rem]")
    div(class="flex flex-col w-2/6 h-full space-y-10")
        h3(class="text-white md:text-[3.3rem]  text-xl font-bold") Our Locations
        p(class='text-2xl font-semibold text-[#29abe1]') Open 24 hours  a day, 7 days a week.
        div(class="flex flex-col w-full text-2xl")
            div(class="flex w-full space-x-4")
                p(class="text-[#768f9e]") Email:
                p(class="text-white font-semibold") fsnfashnfia@gasga.com
            div(class="flex w-full space-x-4")
                p(class="text-[#768f9e]") Phone: 
                p(class="text-white font-semibold ") +1 234 567 890
        div(class="flex flex-col w-full text-2xl space-y-2")
            p(class='text-3xl  text-[#29abe1] mb-2 font-bold') Popular Locations
            p(class="text-2xl text-white font-bold") Arizona: 
                span(class=" font-normal text-[#Ebfaff]") Phoenix
            p(class="text-2xl text-white font-bold") California: 
                span(class=" font-normal text-[#Ebfaff]") Los Angeles, Santa Monica
            p(class="text-2xl text-white font-bold") Florida: 
                span(class=" font-normal text-[#Ebfaff]") Miami, Tampa, Orlando
            p(class="text-2xl text-white font-bold") Georgia: 
                span(class=" font-normal text-[#Ebfaff]") New York, Atlanta
            p(class="text-2xl text-white font-bold") Illinois: 
                span(class=" font-normal text-[#Ebfaff]") Chicago

        button#your-zip-code(class="  border-[#1ea1dd] w-[16rem] h-[4.5rem] rounded-r-full rounded-bl-full py-2 px-6 border-[0.2rem] font-semibold text-2xl text-[#24a6da]") Your Zip Code
            
    div(class="flex w-4/6 flex-wrap gap-y-[1rem] h-full rounded-tr-[6rem] rounded-b-[6rem] bg-white shadow-[0_1px_60px_-15px_rgba(0,0,0,0.1)] p-[6rem] justify-between")
       


</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
