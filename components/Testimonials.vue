<template lang="pug">
div(class="relative flex w-full h-auto py-12 items-center justify-center gap-x-[8rem] ")
    ArrowIcon(class="absolute top-1/2 rotate-180 left-0 w-12 h-12 ml-3 text-[#7c8e98] hover:cursor-pointer hover:text-[#2da9db] ")
    ArrowIcon(class="absolute top-1/2 right-0  w-12 h-12 ml-3 text-[#7c8e98] hover:cursor-pointer hover:text-[#2da9db]  ")


    div(class="flex flex-col w-3/5 h-full space-y-16 items-center justify-center")
        h3(class="text-[#02374b] md:text-[4rem]  text-xl font-bold w-full text-center") What Our Clients Say
        Rating(:editable="false" size="big" :rated="9")
        div(class="relative text-center")
            nuxt-img(src="icons/quote.png" width="100" h="30" class="absolute -top-[3rem] -left-[7rem]")
            nuxt-img(src="icons/quote.png" width="100" h="30" class="rotate-180 absolute -bottom-[3rem] -right-[7rem]")
            p(class="text-2xl text-[#7c8e98] text-center") Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        
        p(class="text-[#02374b] font-semibold text-3xl w-full text-center") Alexi Space
            span(class="font-thin ") , CEO of Company
        nuxt-img(class="flex w-[5rem] h-[5rem] space-y-16 rounded-full object-cover object-top" src="avatars/example.png" format="webp" width="100" h="30")

</template>

<script setup lang="ts">
import ArrowIcon from "~icons/ph/arrow-right";
</script>

<style lang="scss"></style>
