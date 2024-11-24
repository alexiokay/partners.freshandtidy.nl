<template lang="pug">
div(class="w-full py-4 px-6  bg-white rounded-xl flex items-center ")
    div(class="w-full flex flex-col h-full items-between justify-start space-y-3  ")
        div(class="flex space-x-2 items-end justify-between ")
            p(class="  font-semibold text-2xl") TO-DO
            p(class="text-violet-600 font-bold") show all >
        div(class="rounded-lg  border-2 relative border-white  ").overflow-hidden
            
            table.table.w-full.rounded-t-xl.overflow-hidden
                thead(class="bg-gray-100 h-[3.5rem]")
                    tr.bg-gray-100
                    th.py-3.px-4.text-left.text-xs.font-medium.text-gray-500.uppercase.tracking-wider
                        | 
                    th.py-3.px-4.text-left.text-xs.font-medium.text-gray-500.uppercase.tracking-wider
                        | Prioritet
                    th.py-3.px-4.text-left.text-xs.font-medium.text-gray-500.uppercase.tracking-wider
                        | Title
                    th.py-3.px-4.text-left.text-xs.font-medium.text-gray-500.uppercase.tracking-wider
                        | Details
                tbody.bg-white()
                    
                        tr(v-for="(index, item) in 3" :key="item" :class="index<3? 'border-b border-gray-200 ': ''" )
                            td.py-4.px-4.whitespace-nowrap(class="")
                                input(type="checkbox" class="form-checkbox h-5 w-5 text-gray-600")
                            
                            
                            td.py-4.px-4.whitespace-nowrap(class="w-1/6 ") Example
                          
                            td.py-4.px-4.whitespace-nowrap(class="w-1/6 font-semibold") Example
                            td.py-4.px-4(class="w-5/6  ")
                                | Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem  dsadsadssad sda sdasd dsa dsa das dsa da das
                            
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
