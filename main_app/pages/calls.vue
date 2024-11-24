<template lang="pug">
div(class="w-full flex flex-col px-10 h-auto  relative overflow-visible md:pt-[3rem]")
    h1(class="w-full text-center text-5xl font-semibold") Call Logs
    div(class="flex w-full my-8 mt-12 px-8")
        p dsadsa


    div(class="w-full flex flex-wrap justify-center md:justify-between gap-y-[2.6rem] mt-[3rem] px-8 after:flex-auto gap-x-[1.3rem]  overflow-y-scroll max-h-[calc(100vh-24rem)]")
      
            table(class=" table-auto w-full") <!--  fixed/auto -->
                thead(class="border-b-2 border-gray-200")
                    tr  
                        th(class="px-4 py-2 border-r bg-gray-100 w-[10%]") timestamp
                        th(class="px-4 py-2 border-r bg-gray-100 w-[18%]") phone number
                        th(class="px-4 py-2 border-r bg-gray-100 w-[26%]") service
                        th(class="px-4 py-2 border-r bg-gray-100 w-[20%]") duration (minutes)
                        th(class="px-4 py-2 w-[10%] bg-gray-100 ") recording
                tbody(class="")
                    tr(v-if="filteredCarriers.length <=0" id="end-of-list") 
                      
                    tr(v-else v-for="(account, index) in filteredCalls" :key="account" class="border-t " :id="detectEndOfList(index)")
                        td(class="border-r px-3 py-2 text-center ") 321321
                            
                        td(class="border-r px-4 py-2 flex space-x-2") 
                           
                            p 3232
                        td(class="border-r px-4 py-2 ") 
                            p(class="text-blue-500 hover:cursor-pointer") cleaning
                        td(class="border-r px-4 py-2") 1:34
                        td(class=" px-4 py-2   gap-x-2") 
                          div(class="flex  ")
                           
                            button( class="border-2 border-gray-200 rounded-md px-6 py-1 font-semibold hover:bg-blue-400 hover:text-white") Edit
            
</template>

<script setup lang="ts">
import { Switch } from "@headlessui/vue";

const isEditMode = ref(false);
const animationName = ref("");
const selected = ref("house cleaning");
const instantBooking = ref(false);

const detectEndOfList = (index: number) => {
  if (index === filteredCarriers.length - 1) {
    return "end-of-list";
  }
};

const filteredCalls = [
  {
    id: 1,
    name: "John Doe",
    email: "",
  },
];
const filteredCarriers = [
  {
    id: 1,
    name: "John Doe",
    email: "",
  },
];

// randomly generate 'down' or 'up' or left or right for the animation

const selectMenu = (title: string) => {
  selected.value = title;
  scrollBack(document.getElementById(title.replace(/ /g, "-"))!);
};
</script>

<style lang="scss"></style>
