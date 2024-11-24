<template lang="pug">
div(class=" w-full  flex flex-col gap-y-8  ")
    div(class="flex w-full  h-[10rem] bg-white  rounded-xl shadow-sm p-6 gap-x-6 border-[#e4eaf1] border-[1px] ")
        div(class="w-1/4 flex flex-col justify-between items-start")
            p(class="text-[#5d6f86] font-semibold text-lg") Overdue
            p(class="text-4xl font-semibold") 120.80
                span(class=" text-xl text-[#5d6f86]  ml-2") US$
        hr(class="border-[1px] rotate-180 border-[#e4eaf1] w-auto h-full")
        div(class="w-1/4 flex flex-col justify-between items-start")
            p(class="text-[#5d6f86] font-semibold text-lg") Due within next 30 days
            p(class="text-4xl font-semibold") 0.00
                span(class=" text-xl text-[#5d6f86]  ml-2") US$
        hr(class="border-[1px] rotate-180 border-[#e4eaf1] w-auto h-full")
        div(class="w-1/4 flex flex-col justify-between items-start")
            p(class="text-[#5d6f86] font-semibold text-lg") Average time to get paid
            p(class="text-4xl font-semibold") 24
                span(class=" text-xl text-[#5d6f86] ml-2") 24 days
        hr(class="border-[1px] rotate-180 border-[#e4eaf1] w-auto h-full")
        div(class="w-1/4 flex flex-col justify-between items-start")
            p(class="text-[#5d6f86] font-semibold text-lg") Average time to get paid
            p(class="text-4xl font-semibold") 24
                span(class=" text-xl text-[#5d6f86] ml-2") 24 days
    
    div(class="flex flex-col  p-6 w-full h-[60rem] bg-white border-[#e4eaf1] border-[1px]  shadow-sm gap-y-2")
        div(class="w-full flex  gap-x-4 text-lg")
            select(class="w-auto border-[#e4eaf1] border-[1px] rounded-lg px-4 py-2" ) Filter 
                option(value="1") All
                div(class="w-auto h-full  bg-blue-600") 3
        
            div(class='border-[1px] flex gap-x-2 rounded-full bg-[#f8fafc] px-4 py-2')
                p(class="text-[#4a5d78]") Customer :
                p(class="") Emma

        table(class=" table-auto w-full mt-4" ) <!--  fixed/auto -->
                thead(class="border-y-[1.5px] text-[#8999b1] ")
                    tr
                        th(class="px-4 py-2  w-auto text-start  ") 
                        th(class="px-4 py-2  w-[15%] text-start  ") Number
                        th(class="px-4 py-2  w-[10%] text-start ") Status
                        th(class="px-4 py-2  w-[15%] text-start ") Date
                        th(class="px-4 py-2  w-[40%] text-start ") Customer
                        th(class="px-4 py-2  w-[30%] text-start ") Total
                       
                        
                tbody(class="")
                
                    tr(  class=" " )
                        td(class="h-full px-4 py-2")
                            RatingStar(class="w-8 h-8" type="full" id="1")
                        td(class="h-full px-4 py-2")
                            p per bedroom
                        td(class=" px-4 py-2") 
                          
                          div(class="flex w-full gap-x-2")
                            input(class="w-full h-[3rem]  focus:outline-none px-2 py-1")
                        
                    tr(  class="border-t " )
                        td(class="h-full px-4 py-2")
                            RatingStar(class="w-8 h-8" type="full" id="1")
                        td(class=" h-full px-4 py-2")
                          p per kitchen
                        td(class=" px-4 py-2")
                          input(class="w-full h-[3rem]  focus:outline-none px-2 py-1")
                    tr(  class="border-t  " )
                        td(class="h-full px-4 py-2")
                            RatingStar(class="w-8 h-8" type="full" id="1")
                        td(class=" h-full px-4 py-2")
                          p Livingroom
                        td(class=" px-4 py-2")
                          input(class="w-full h-[3rem]  focus:outline-none px-2 py-1")
                    tr(  class="border-t  " )
                        td(class="h-full px-4 py-2")
                            RatingStar(class="w-8 h-8" type="full" id="1")
                        td(class="h-full px-4 py-2")
                          p Toilet
                        td(class=" px-4 py-2")
                          input(class="w-full h-[3rem]  focus:outline-none px-2 py-1")

</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
