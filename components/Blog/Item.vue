<template lang="pug">
div(class="relative flex flex-col lg:w-1/3 w-full space-y-4 md:space-y-8  lg:text-start items-center lg:items-start bg-white  rounded-xl mt-6 md:mt-0")
    slot(name="image")
    
    div(class="absolute top-0 left-[2rem] p-4 bg-[#Ffffff] font-medium text-xl text-[#7f7d7e]")
        p {{ article.date }}
    div(class="flex w-full text-xl md:text-2xl font-medium text-[#939393]  items-center ")
        p(class="w-4/5 md:w-3/5 text-start") {{ article.category }}
        div.blog-comments(class="flex w-1/5 font-normal justify-end items-center space-x-3") 
            CommentsIcon(class="w-4 h-4 md:w-6 md:h-6  md:ml-3  ")
            p.text-sm 25
        div.blog-views(class="flex w-2/6  font-normal justify-end items-center space-x-3") 
            ViewsIcon(class="w-5 h-5 md:w-7 md:h-7 ml-3  ")
            p.text-sm 32 k
    hr(class="w-full")
    div(class=" gap-y-4 w-full flex flex-col ")
        h5(class="font-bold text-xl md:text-3xl w-full truncate ") {{ article.title }}
        p(class='text-xl md:text-2xl  text-[#7f7d7e] text-start') {{ article.description }}

    button(class='text-[#214e49] text-xl md:text-2xl font-bold flex mt-4 mr-auto md:mr-0') Read More
        ArrowIcon(class="w-8 h-8 ml-3 group-hover:text-[#2da9db] ")
</template>

<script setup lang="ts">
import CommentsIcon from "~icons/octicon/comment-24";
import ViewsIcon from "~icons/carbon/view";

defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss"></style>
