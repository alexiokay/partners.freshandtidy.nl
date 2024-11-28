<template lang="pug">
div(class=" w-full  flex flex-col gap-y-8   ")
    
    div(class="flex flex-col  p-6 w-full h-full rounded-xl bg-white border-[#e4eaf1] border-[1px]  shadow-sm gap-y-6 relative  ")
        h1(class="text-xl font-bold") Incoming Quotes Requests
        div(class="w-full h-auto flex gap-x-8 gap-y-4 ")
            
            
            div(class="w-1/2 h-auto  flex flex-col gap-x-4 gap-y-4 ")
                div(v-for="quote in quotes" @click="selectQuote(quote)" :class="quote.selected? 'bg-black text-white': 'bg-white '" class="hover:cursor-pointer flex  w-full  gap-y-4  h-auto  rounded-xl shadow-sm py-6 px-7 gap-x-6 border-[#e4eaf1] border-[1px] ")
                
                    div(class="flex flex-col w-full gap-y-4  h-auto   ")
                        div(class="flex items-center gap-x-4")
                            ImportantIcon(class="w-8 h-8 text-[#dcd441]  ")
                            p(class="text-xl font-bold") {{ quote.service_type }} Cleaning 
                                span(class="font-normal") - {{ quote.full_name }}
                        //- p address: {{ quote.address }}
                        div(class="flex justify-start items-start gap-x-8")
                            div(class="flex items-center")
                                CalendarIcon(class="w-5 h-5 ")
                                p(:class="quote.selected? 'text-[#b3b3b3]': 'text-[#5d6f86] '" class=" text-lg text-[#5d6f86]  ml-2") {{quote.start_day}}
                            div(class="flex items-center")
                                TimeslotsIcon(class="w-5 h-5 ")
                                p(:class="quote.selected? 'text-[#b3b3b3]': 'text-[#5d6f86] '" class=" text-lg text-[#5d6f86]  ml-2") 12:24
                            div(class="flex items-center")
                                CalendarIcon(class="w-5 h-5 ")
                                p(:class="quote.selected? 'text-[#b3b3b3]': 'text-[#5d6f86] '" class=" text-lg text-[#5d6f86]  ml-2") {{ quote.service_type }} cleaning
                            div(class="flex  items-center")
                                AreaIcon(class="w-5 h-5 ")
                                p(:class="quote.selected? 'text-[#b3b3b3]': 'text-[#5d6f86] '" class=" text-lg text-[#5d6f86]  ml-2") {{quote.approx_sqm}} sq m
    
                        
                        div(class="flex justify-start items-start gap-x-3")
                            div(class="flex gap-x-1 items-center rounded-xl bg-[#ecf1f8] px-3 py-1")
                                p(class="   text-[#7274e4] font-medium") deep cleaning
                            div(class="flex gap-x-1 items-center rounded-xl bg-[#ecf1f8] px-3 py-1")
                                p(class="   text-[#7274e4] font-medium") 2 bathrooms
                            div(class="flex gap-x-1 items-center rounded-xl bg-[#ecf1f8] px-3 py-1")
                                p(class="   text-[#7274e4] font-medium") 1 kitchen
                            div(class="flex gap-x-1 items-center rounded-xl bg-[#ecf1f8] px-3 py-1")
                                p(class="   text-[#7274e4] font-medium") wooden panels floor
                        //- hr.my-2
                        //- div(class="flex  gap-x-4 gap-y-4 ")
                        //-     button(class=" text-black border-[1px] border-black  px-4 py-1 rounded-xl w-[10rem] h-auto text-lg font-medium ") Edit
                            
                        //-     button(class=" text-black border-[1px] border-black  px-4 py-1 rounded-xl w-[10rem] h-auto text-lg font-medium ") Accept
                        //-     button(class="group text-gray-700 border-[1px]  bg-gray-200  px-4 py-1 rounded-xl w-[10rem] h-auto text-lg font-medium relative " ) Cancel
                        //-         div(class="hidden group-hover:flex p-2 text-base absolute font-normal text-red-500 bottom-10 -right-[10rem] w-auto bg-slate-100 border-[1px] rounded-md ")
                        //-             p cancellation fee is 2$
                    
                    div(class="w-[20rem] h-full gap-x-8 flex")
                        //- div(class="w-[1px] h-full bg-gray-200")
                        p(class="text-xl") Order Value: 
                            span(class="text-2xl font-bold") 200$
            div(class="w-1/2 h-[80vh] sticky top-[2rem] shadow-sm  border-[#e4eaf1] border-[1px] px-6 py-7")
                    div(class="flex w-full font-bold text-lg")
                        p Customer Name: 
                            span(class="font-normal") {{ selectedQuote?.full_name }} 
                    div(class="flex w-full font-bold text-lg")
                        p Service Type:: 
                            span(class="font-normal") {{ selectedQuote?.service_type }} Cleaning
                    div(class="flex w-full font-bold text-lg")
                        p Address: 
                            span(class="font-normal") {{ selectedQuote?.order_localization }}
                    div(class="flex w-full font-bold text-lg")
                        p Start Day: 
                            span(class="font-normal") {{ selectedQuote?.start_day }}
                    div(class="flex w-full font-bold text-lg")
                        p Start Time: 
                            span(class="font-normal") {{ selectedQuote?.start_time }}
                    div(class="flex w-full font-bold text-lg")
                        p Approximate Sqm: 
                            span(class="font-normal") {{ selectedQuote?.approx_sqm }}
                        
        //- div(class="flex   w-full gap-y-4 h-auto bg-white  rounded-xl shadow-sm py-6 px-7 gap-x-6 border-[#e4eaf1] border-[1px] ")
            //-     div(class="flex flex-col w-full gap-y-4  h-auto bg-white  ")
            //-         p(class="text-xl font-bold") House Cleaning 
            //-             span(class="font-normal") - Arianna Grande
            //-         div(class="flex justify-start items-start gap-x-8")
            //-             div(class="flex items-center")
            //-                 CalendarIcon(class="w-5 h-5 ")
            //-                 p(class=" text-lg text-[#5d6f86]  ml-2") 20.12.2024
            //-             div(class="flex items-center")
            //-                 TimeslotsIcon(class="w-5 h-5 ")
            //-                 p(class=" text-lg text-[#5d6f86]  ml-2") 12:24
            //-             div(class="flex items-center")
            //-                 CalendarIcon(class="w-5 h-5 ")
            //-                 p(class=" text-lg text-[#5d6f86]  ml-2") House cleaning
            //-             div(class="flex  items-center")
            //-                 AreaIcon(class="w-5 h-5 ")
            //-                 p(class=" text-lg text-[#5d6f86]  ml-2") 1200 sq m
                    
            //-         div(class="flex justify-start items-start gap-x-3")
            //-             div(class="flex gap-x-1 items-center rounded-xl bg-[#ecf1f8] px-3 py-1")
            //-                 p(class="   text-[#7274e4] font-medium") deep cleaning
            //-             div(class="flex gap-x-1 items-center rounded-xl bg-[#ecf1f8] px-3 py-1")
            //-                 p(class="   text-[#7274e4] font-medium") 2 bathrooms
            //-             div(class="flex gap-x-1 items-center rounded-xl bg-[#ecf1f8] px-3 py-1")
            //-                 p(class="   text-[#7274e4] font-medium") 1 kitchen
            //-             div(class="flex gap-x-1 items-center rounded-xl bg-[#ecf1f8] px-3 py-1")
            //-                 p(class="   text-[#7274e4] font-medium") wooden panels floor
            //-         hr
            //-         div(class="flex  gap-x-4 gap-y-4 ")
            //-             button(class="bg-[#46a338] text-white px-4 py-2 rounded-xl w-[10rem] h-full text-lg font-medium ") Accept
            //-             button(class="bg-[#7274e4] text-white px-4 py-2 rounded-xl w-[10rem] h-full text-lg font-medium ") Edit
            //- div(class="flex    w-full gap-y-4  h-auto bg-white  rounded-xl shadow-sm py-6 px-7 gap-x-6 border-[#e4eaf1] border-[1px] ")
            //-     div(class="flex flex-col w-full gap-y-4  h-auto bg-white  ")
            //-         p(class="text-xl font-bold") House Cleaning 
            //-             span(class="font-normal") - Arianna Grande
            //-         div(class="flex justify-start items-start gap-x-8")
            //-             div(class="flex items-center")
            //-                 CalendarIcon(class="w-5 h-5 ")
            //-                 p(class=" text-lg text-[#5d6f86]  ml-2") 20.12.2024
            //-             div(class="flex items-center")
            //-                 TimeslotsIcon(class="w-5 h-5 ")
            //-                 p(class=" text-lg text-[#5d6f86]  ml-2") 12:24
            //-             div(class="flex items-center")
            //-                 CalendarIcon(class="w-5 h-5 ")
            //-                 p(class=" text-lg text-[#5d6f86]  ml-2") House cleaning
            //-             div(class="flex  items-center")
            //-                 AreaIcon(class="w-5 h-5 ")
            //-                 p(class=" text-lg text-[#5d6f86]  ml-2") 1200 sq m
                    
            //-         div(class="flex justify-start items-start gap-x-3")
            //-             div(class="flex gap-x-1 items-center rounded-xl bg-[#ecf1f8] px-3 py-1")
            //-                 p(class="   text-[#7274e4] font-medium") deep cleaning
            //-             div(class="flex gap-x-1 items-center rounded-xl bg-[#ecf1f8] px-3 py-1")
            //-                 p(class="   text-[#7274e4] font-medium") 2 bathrooms
            //-             div(class="flex gap-x-1 items-center rounded-xl bg-[#ecf1f8] px-3 py-1")
            //-                 p(class="   text-[#7274e4] font-medium") 1 kitchen
            //-             div(class="flex gap-x-1 items-center rounded-xl bg-[#ecf1f8] px-3 py-1")
            //-                 p(class="   text-[#7274e4] font-medium") wooden panels floor
                
            //-     div(class="flex flex-col  gap-x-4 gap-y-4 ")
            //-         button(class="bg-[#46a338] text-white px-4 py-2 rounded-xl w-[10rem] h-auto text-lg font-medium ") Accept
            //-         button(class="bg-[#7274e4] text-white px-4 py-2 rounded-xl w-[10rem] h-auto text-lg font-medium ") Edit
                
                

           



</template>

<script setup lang="ts">
import CalendarIcon from "~icons/mdi/calendar-week";
import TimeslotsIcon from "~icons/ic/round-access-time";
import AreaIcon from "~icons/bx/area";
import ServiceIcon from "~icons/material-symbols/work-outline";
import ImportantIcon from "~icons/ep/warning";
import { useUserStore } from "@/stores/User";

const userStore = useUserStore();
const router = useRouter();

const selectedQuote = ref(null);

const selectQuote = (quote) => {
  // TODO: only when on mobile?
  //   router.push(`/quotes/${quote.id}`);
  // dissable all quotes
  quotes.value.forEach((quote) => {
    quote.selected = false;
  });
  quote.selected = true;
  selectedQuote.value = quote;
};
const quotes = ref(
  await getQuotes(userStore.getToken).then((res) => {
    res[0].selected = true;
    return res;
  }),
);
console.log(quotes);
</script>

<style lang="scss"></style>
