<template lang="pug">
div(class="w-full py-4 px-6  bg-white rounded-xl flex items-center ")
    div(class="w-full flex flex-col h-full items-between justify-start space-y-3  ")
        div(class="flex space-x-2 items-end justify-between ")
            p(class="  font-semibold text-2xl") Delayed delivery
            p(class="text-violet-600 font-bold") show all >
        div(class="rounded-lg  border-2 relative border-white")
            
            table.table.w-full.rounded-t-xl.overflow-hidden
                thead(class="bg-gray-100 h-[3.5rem]")
                    tr.bg-gray-100
                    th.py-3.px-4.text-left.text-xs.font-medium.text-gray-500.uppercase.tracking-wider
                        | Destination
                    th.py-3.px-4.text-left.text-xs.font-medium.text-gray-500.uppercase.tracking-wider
                        | Gate
                    th.py-3.px-4.text-left.text-xs.font-medium.text-gray-500.uppercase.tracking-wider
                        | Timeslot
                    th.py-3.px-4.text-left.text-xs.font-medium.text-gray-500.uppercase.tracking-wider
                        | Time delay
                tbody.bg-white(class="")
                    
                        tr(v-for="(index, item) in 3" :key="item" :class="index<3? 'border-b border-gray-200': ''" class="hover:bg-slate-50   hover:cursor-pointer")
                            td.py-4.px-4.whitespace-nowrap(class="w-1/5") 2
                            
                            
                            td.py-4.px-4.whitespace-nowrap 2
                          
                            td.py-4.px-4.whitespace-nowrap 2
                            td.py-4.px-4.whitespace-nowrap 
                                div(class="w-[4rem] h-auto first-letter: bg-yellow-100 px-3 rounded-lg flex items-center justify-center  text-yellow-500 font-semibold")
                                    p 0.0 h
                            

            
</template>

<script setup lang="ts">
import IconThumbUp from "~icons/twemoji/thumbs-up";
// Set a max and min number that it can be 0-100
</script>

<style lang="scss"></style>
