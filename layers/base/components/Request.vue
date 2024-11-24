<template lang="pug">
div(class="flex w-full h-auto py-[5rem] items-center justify-center gap-x-[8rem] bg-[#003f5a] rounded-r-[9rem] rounded-bl-[9rem]")

    div(class="flex w-2/5 flex-wrap gap-y-[2rem] h-full rounded-tr-[6rem] rounded-b-[6rem] bg-white shadow-[0_1px_60px_-15px_rgba(0,0,0,0.1)] p-[6rem] justify-between")
        h3(class="text-[#02374b] md:text-[4rem]  text-xl font-bold") Request a locksmith
        p(class='text-2xl font-semibold text-[#7c8e98]') Your trusted locksmith in the Greater Toronto Area

        div(class="flex flex-col w-full space-y-3")
            div(class="flex w-full space-x-4")
                input(class="w-1/2 h-[5rem] bg-[#F2f6f7] rounded-r-full rounded-bl-full px-6 py-2 text-xl focus:outline-gray-400" placeholder="First Name")
                input(class="w-1/2 h-[5rem] bg-[#F2f6f7] rounded-r-full  px-6 py-2 text-xl focus:outline-gray-400" placeholder="Last Name")
            div(class="flex w-full space-x-4")
                input(class="w-1/2 h-[5rem] bg-[#F2f6f7] rounded-r-full rounded-bl-full  px-6 py-2 text-xl  focus:outline-gray-400" placeholder="Email Address")
                input(class="w-1/2 h-[5rem] bg-[#F2f6f7] rounded-r-full   px-6 py-2 text-xl focus:outline-gray-400" placeholder="Phone Number")
                    
            select(class="w-full h-[5rem] bg-[#F2f6f7] rounded-r-full rounded-bl-full  px-6 py-2 text-xl focus:outline-gray-400 ")
                option(value="0") Service Needed
                
        div(class="flex items-center space-x-6 w-full mt-8")
            buttonsLearnMore(text="Request now" class='w-[22rem] h-[5rem]')
            smallPhone(class="")
    div(class="flex w-2/5 space-x-[7rem]")
        div(class="flex flex-col w-full h-full space-y-8")
            h3(class="text-white md:text-[4rem]  text-xl font-bold") Ready to get started?
            p(class='text-2xl font-semibold text-[#23a4d6]') Your trusted locksmith in the Greater Toronto Area
            p(class="text-2xl text-[#7c8e98]") Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum dsa dsadsa 
            div(class="flex w-full text-white gap-x-[2rem]")
                div(class='flex flex-col w-2/5 h-auto bg-[#004966] rounded-xl px-[4rem] py-[2rem] aspect-square font-bold gap-x-[5rem] items-start justify-start ')
                    p(class="text-6xl ") A+
                    Rating(:editable="false" size="medium" :rated="9" class=" mt-[2rem]")
                    p(class="text-xl font-normal text-[#7c8e98] mt-2") 40 Reviews
                    p(class="mt-[2rem] text-xl") BBB Rating
                div(class='flex flex-col w-2/5 h-auto bg-[#004966] rounded-xl px-[4rem] py-[2rem] aspect-square font-bold gap-x-[5rem] items-start justify-start ')
                    p(class="text-6xl ") 4.9
                    Rating(:editable="false" size="medium" :rated="9" class=" mt-[2rem]")
                    p(class="text-xl font-normal text-[#7c8e98] mt-2") 3.600 Reviews
                    p(class="mt-[2rem] text-xl") Google Reviews
        div(class="w-[0.34rem] rounded-full h-[36rem] bg-[#23a4d6]")
    
        


</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
