<template lang="pug">
div(class="relative w-full md:px-12 flex flex-col text-center space-y-12 py-4 ")
    div(class="absolute left-0  h-[40rem] w-full z-[-1] -top-[16rem] rounded-b-[9rem] bg-[#F2f6f7] shadow-[0_35px_30px_-25px_rgba(0,0,0,0.1)]")
    div(class="flex flex-col lg:flex-row w-full lg:justify-around h-auto items-center justify-center gap-y-12 gap-x-[6%] px-10 lg:px-[8rem] ")
        
        div(class="flex flex-col lg:w-1/3 w-3/4 space-y-10 text-[#02374b] lg:text-start items-center lg:items-start bg-white shadow-md rounded-xl p-[4rem]")
            nuxt-img(src="icons/car_services.png" width="100" h="30")
            h3(class="font-bold text-4xl") Automotive Rates
            table.table-auto(class="w-full")
                thread
                    tr
                        th(class="text-xl font-semibold text-[#7c8e98] text-left")   Service
                        th(class="text-xl font-semibold text-[#7c8e98] text-left")   Price
                tbody
                    tr(class="text-xl text-[#26ade4] font-semibold")
                        td Service Call 
                        td(class="text-end") $29
                    tr(class="text-xl text-[#7c8e98]") 
                        td Car Lockout
                        td(class="text-end") $35
                    tr(class="text-xl text-[#7c8e98]") 
                        td Vehicle Key Making
                        td(class="text-end") $95
                    tr(class="text-xl text-[#7c8e98]") 
                        td Ignition Replacement
                        td(class="text-end") $95
                    tr(class="text-xl text-[#7c8e98]")  
                        td Car Key Extraction
                        td(class="text-end") $65

                
            
            buttonsButton(text="Click To Call" class="h-[5rem] w-[17rem] text-xl text-white")
                template(v-slot:icon)
                    PhoneIcon(class="w-8 h-8 ml-3 group-hover:text-[#2da9db] ")
        div(class="flex flex-col lg:w-1/3 w-3/4 space-y-10 text-[#02374b]  lg:text-start items-center lg:items-start bg-white shadow-md rounded-xl p-[4rem]")
            nuxt-img(src="icons/commercial_services.png" width="100" h="30")
            h3(class="font-bold text-4xl") Commercial Rates
            table.table-auto(class="w-full")
                thread
                    tr
                        th(class="text-xl font-semibold text-[#7c8e98] text-left")   Service
                        th(class="text-xl font-semibold text-[#7c8e98] text-left")   Price
                tbody
                    tr(class="text-xl text-[#26ade4] font-semibold")
                        td Service Call 
                        td(class="text-end") $29
                    tr(class="text-xl text-[#7c8e98]") 
                        td Business / Office Lockout
                        td(class="text-end") $35
                    tr(class="text-xl text-[#7c8e98]") 
                        td Mail Box / Cabinet Change
                        td(class="text-end") $35
                    tr(class="text-xl text-[#7c8e98]") 
                        td New Lock Installation
                        td(class="text-end") $35
                    tr(class="text-xl text-[#7c8e98]")  
                        td Safe Lockout
                        td(class="text-end") $65

            buttonsButton(text="Click To Call" class="h-[5rem] w-[17rem] text-xl text-white")
                template(v-slot:icon)
                    PhoneIcon(class="w-8 h-8 ml-3 group-hover:text-[#2da9db] ")
        div(class="flex flex-col lg:w-1/3 w-3/4 space-y-10 text-[#02374b]  lg:text-start items-center lg:items-start bg-white shadow-md rounded-xl p-[4rem]")
            nuxt-img(src="icons/residental_services.png" width="100" h="30")
            h3(class="font-bold text-4xl") Residential Rates
            table.table-auto(class="w-full")
                thread
                    tr
                        th(class="text-xl font-semibold text-[#7c8e98] text-left")   Service
                        th(class="text-xl font-semibold text-[#7c8e98] text-left")   Price
                tbody
                    tr(class="text-xl text-[#26ade4] font-semibold")
                        td Service Call 
                        td(class="text-end") $29
                    tr(class="text-xl text-[#7c8e98]") 
                        td House lockout
                        td(class="text-end") $35
                    tr(class="text-xl text-[#7c8e98]") 
                        td Lock Rekey
                        td(class="text-end") $19
                    tr(class="text-xl text-[#7c8e98]") 
                        td Lock Change
                        td(class="text-end") $120
                    tr(class="text-xl text-[#7c8e98]")  
                        td New Lock Installation
                        td(class="text-end") $65

            buttonsButton(text="Click To Call" class="h-[5rem] w-[17rem] text-xl text-white")
                template(v-slot:icon)
                    PhoneIcon(class="w-8 h-8 ml-3 group-hover:text-[#2da9db] ")
</template>

<script setup lang="ts">
import PhoneIcon from "~icons/carbon/phone-voice-filled";
</script>

<style lang="scss"></style>
