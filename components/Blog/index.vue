<template lang="pug">
div(class="relative w-full md:px-12 flex flex-col text-center gap-y-4 md:gap-y-10 py-4  pt-[2rem] ")
    p(class="w-[10rem]  h-[3rem] rounded-full bg-[#Fcf2ec] text-[#F9782b] text-2xl items-center justify-center flex font-bold mx-auto") Our Blog
    h2(class="text-black md:text-[4rem]  text-xl font-bold") Latest News & Articles
    
    div(class="flex flex-col lg:flex-row w-full lg:justify-around h-auto items-center justify-center gap-y-12 gap-x-[2.5rem] 3xl:px-[19rem]  md:px-[4rem] px-[1rem] md:mt-[4rem] mt-[1rem]  ")
        
        BlogItem(v-for="item in blogs"  :article="item" )
            template(v-slot:image)
                nuxt-img(src="images/news/news_1.png" width="300" h="200" class="w-full xl:h-[20rem]  xs:h-[13rem] h-[13rem] object-cover rounded-xl ")

                    
                
    
    buttonsButton(text="View All Posts" class="h-[5rem] w-[17rem] text-xl mx-auto mt-2 text-white")
                template(v-slot:icon)
                    ArrowIcon(class="w-8 h-8 ml-3 group-hover:text-[#2da9db] ")
        
</template>

<script setup lang="ts">
import ArrowIcon from "~icons/ph/arrow-right";

const blogs = [
  {
    title:
      "What is the difference between a locksmith and a security engineer?",
    description: "Your trusted locksmith in the Greater Toronto Area",
    category: "Floor Cleaning",
    date: "02 Dec 2021",
    image: "images/news/news_1.png",
    views: 32,
    comments: 25,
  },
  {
    title: "Best Ways To Take Care Of House Cleaning ",
    description: "Your trusted locksmith in the Greater Toronto Area",
    category: "Office Cleaning",
    date: "02 Dec 2021",
    image: "images/news/news_1.png",
    views: 32,
    comments: 25,
  },
  {
    title: "Why Is A Daycare Cleaning Service Important? ",
    description: "Your trusted locksmith in the Greater Toronto Area",
    category: "House Cleaning",
    date: "02 Dec 2021",
    image: "images/news/news_1.png",
    views: 32,
    comments: 25,
  },
];
</script>

<style lang="scss"></style>
