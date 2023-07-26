<template lang="pug">

Transition(name="fade")
    <div v-if="props.isOpen" @click="$emit('close')" tabindex="-1" class="fixed top-0 pointer-event-none flex items-center bg-[rgba(0,0,0,0.55)] justify-center left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen md:h-full"></div>
<Transition name="jump">
    <div v-if="props.isOpen"  @click.stop="$emit('null')" class="fixed top-0 bottom-0 pointer-event-none flex items-center  justify-center left-0 right-0 z-50  m-auto w-[100vw] md:w-[30rem] p-4  md:inset-0 h-min">
        <!-- Modal content -->
        <div class="relative bg-white pb-5 rounded-lg shadow dark:bg-gray-700 h-full text-gray-600 ">
            <!-- Modal header -->
            <div class="flex items-center justify-between px-5 pt-3  bg-white  rounded-t ">
               
                <button @click="$emit('close')" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="medium-modal">
                    <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span> 
                </button>
            </div>
            <!-- Modal body -->
            <div class="px-10 gap-y-4 overflow-y-auto  flex flex-col  justify-start h-auto w-full md:w-[30rem]">
                Flag(class="w-full flex items-center justify-center")
                p(class="text-2xl ") Your location is set to 
                    span(class="text-2xl font-bold") 
                div(class="text-start text-lg w-full")
                    p &bull;  shop in 
                    p &bull; Get shipping options to 
                    p &bull; Language set to
                <p hidden class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    p(hidden) The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
                button(@click=" $emit('close')" class="w-full  rounded-md text-center h-[3.4rem] bg-[#47C1BF] text-lg text-white hover:bg-blue-700")
                    p Continue
                p( class=" -mt-2 hover:cursor-pointer w-full flex items-center justify-center text-center underline text-sm") Change language
            </div>
     
           
        </div>
    </div>
</Transition>
<Transition name="jump">
    <div v-if="props.isOpen"  @click.stop="$emit('null')" class="fixed top-0 pointer-event-none flex items-center  justify-center left-0 right-0 z-50  m-auto w-[30rem] p-4  md:inset-0 h-screen md:h-min">
        <!-- Modal content -->
        <div class="relative bg-white pb-5 rounded-lg shadow dark:bg-gray-700 h-full text-gray-600 ">
            <!-- Modal header -->
            <div class="flex items-center justify-between px-5 pt-3  bg-white  rounded-t ">
               
                <button @click="$emit('close')" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm  ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="medium-modal">
                    <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span> 
                </button>
            </div>
            <!-- Modal body -->
            <div class="px-10 gap-y-4 overflow-y-auto  flex flex-col  justify-start h-auto w-[30rem]">
                
                p(class="text-2xl ") Change country
               
                      
                      
                
               
                
                  
                <p hidden class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    p(hidden) The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
                button(@click=" $emit('close')" class="w-full  rounded-md text-center h-[3.4rem] bg-[#47C1BF] text-lg text-white hover:bg-blue-700")
                    p Continue
                p( class=" -mt-2 hover:cursor-pointer w-full flex items-center justify-center text-center underline text-sm") Cancel
            </div>
     
           
        </div>
    </div>
</Transition>
</template>

<script lang="ts" setup>
const props = defineProps<{
  isOpen: boolean;
}>();
</script>

<style lang="scss"></style>
