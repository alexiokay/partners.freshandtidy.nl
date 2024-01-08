<template lang="pug">
div

  Transition(name="fade")
    <div v-show="isOpen" @click="$emit('close')" tabindex="-1" class="backdrop-blur-[2.5px] absolute top-0 pointer-event-none flex items-center  bg-[rgba(0,0,0,0.55)] justify-center left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen md:h-full"></div>
  Transition(name="jump")
    div(v-show="isOpen"  class="fixed top-[50%] left-[50%] translate-x-[33%] translate-y-[13%]  pointer-event-none flex items-center  justify-center   z-50  mx-auto w-[30rem] p-4  md:inset-0 h-screen md:h-min my-auto")
      <!-- Modal content -->
      div( class="relative bg-white   rounded-sm shadow dark:bg-gray-700 h-auto" @click.stop="$emit('null')")
        <!-- Modal header -->
        div(class="flex items-center justify-between px-5 py-4 border-b bg-slate-50 rounded-t dark:border-gray-600")
          h3(class="text-xl font-medium text-gray-900 dark:text-white text-center")
            p Edit {{ data.title }}
            

         


        <!-- Modal body -->
        div(class="py-6 px-10 space-y-4 overflow-y-auto h-auto sm:auto w-[60rem]")
          div(class="flex gap-x-4 py-1 items-center")
                
                button(@click="data.recurrence = !data.recurrence" :class="data.recurrence === true? 'bg-blue-500 text-white border-blue-700': 'bg-white border-black'" class="text-xl  border-[1px]  text-black  rounded-full px-4 py-1" ) Recurrence
                button(@click="data.one_time = !data.one_time" :class="data.one_time === true? 'bg-blue-500 text-white border-blue-700': 'bg-white border-black'"  class="text-xl  border-[1px]  text-black border-black  rounded-full px-4 py-1") One time
                p(class="font-semibold ml-auto") Instant booking
                Switch(
                  v-model="data.instant"
                  @click="data.instant = !data.instant"
                  :class="data.instant ? 'bg-blue-600' : 'bg-gray-200'" 
                  class="relative inline-flex h-6 w-16 items-center rounded-full hover:cursor-pointer ")
                  p(:class="data.instant ? 'text-white left-3' : 'right-2'" class=" absolute text-lg  ") {{ data.instant ? 'On' : 'Off' }}
                  span(class="sr-only") Enable notifications
                  span(
                      :class="data.instant ? 'translate-x-[2.65rem]' : 'translate-x-1'"
                      class="inline-block h-[1.25rem] w-[1.25rem]  transform rounded-full bg-white transition")
          hr

          
          table(class=" table-auto w-full mt-4" ) <!--  fixed/auto -->
                thead(class="border-b-2 border-gray-400")
                    tr  
                        th(class="px-4 py-2 border-r  w-[35%] ") Room type
                        th(class="px-4 py-2  w-[65%]") Price (EUR)
                       
                        
                tbody(class="")
                    tr(  class="border-t  " )
                        td(class="border-r h-full px-4 py-2")
                            p per bedroom
                        td(class=" px-4 py-2") 
                          
                          div(class="flex w-full gap-x-2")
                            input(class="w-full h-[3rem] border-[1px] focus:outline-none px-2 py-1")
                        
                    tr(  class="border-t border-gray-400  " )
                        td(class="border-r h-full px-4 py-2")
                          p per kitchen
                        td(class=" px-4 py-2")
                          input(class="w-full h-[3rem] border-[1px] focus:outline-none px-2 py-1")
                    tr(  class="border-t  " )
                        td(class="border-r h-full px-4 py-2")
                          p Livingroom
                        td(class=" px-4 py-2")
                          input(class="w-full h-[3rem] border-[1px] focus:outline-none px-2 py-1")
                    tr(  class="border-t  " )
                        td(class="border-r h-full px-4 py-2")
                          p Toilet
                        td(class=" px-4 py-2")
                          input(class="w-full h-[3rem] border-[1px] focus:outline-none px-2 py-1")
                        
          p(class="text-xl") Your pricing form
          button(@click="isTable1Visible = !isTable1Visible") hide table
          table(class=" table-auto w-full" v-if="isTable1Visible") <!--  fixed/auto -->
                thead(class="border-b-2 border-gray-400")
                    tr  
                        th(class="px-4 py-2 border-r  w-[35%] ") question
                        th(class="px-4 py-2  w-[65%]") answers
                       
                        
                tbody(class="")
                    tr(  class="border-t  " )
                        td(class="border-r h-full px-4 py-2")
                            input(class="w-full h-[3rem] border-[1px] focus:outline-none px-2 py-1 ")
                        td(class=" px-4 py-2") 
                            div(class="flex-col flex gap-y-3")
                                div(class="flex w-full gap-x-2")
                                    p 1
                                    input(class="w-full h-[3rem] border-[1px] focus:outline-none px-2 py-1")
                                div(class="flex w-full gap-x-2")
                                    p 2
                                    input(class="w-full h-[3rem] border-[1px] focus:outline-none px-2 py-1 ")
                                div(class="flex w-full gap-x-2")
                                    p 3
                                    input(class="w-full h-[3rem] border-[1px] focus:outline-none px-2 py-1")
                    tr(  class="border-t border-gray-400  " )
                        td(class="border-r h-full px-4 py-2")
                            input(class="w-full h-[3rem] border-[1px] focus:outline-none px-2 py-1")
                        td(class=" px-4 py-2") s
                    tr(  class="border-t  " )
                        td(class="border-r h-full px-4 py-2")
                            input(class="w-full h-[3rem] border-[1px] focus:outline-none px-2 py-1 ")
                        td(class=" px-4 py-2") s
                    tr(  class="border-t  " )
                        td(class="border-r h-full px-4 py-2")
                            input(class="w-full h-[3rem] border-[1px] focus:outline-none px-2 py-1 ")
                        td(class=" px-4 py-2") s
                        
                        
                   
          p(class="text-xl font-semibold text-center") 

           
            
            .flex.justify-center.w-full.items-center.space-x-10
                button.confirm-button(@click="$emit('confirm')"  class=" bg-white border-[1px] border-black text-black px-4 py-2 rounded-md w-[7rem] text-xl") Save
                button.cancel-button(@click="$emit('close')" class="bg-white border-[1px] border-black text-black px-4 py-2 rounded-md w-[7rem] text-xl ") Cancel
                
          <p hidden class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            p(hidden) The European Unions General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
          </p>

        <!-- Modal footer -->
        
</template>

<script setup lang="ts">
const isTable1Visible = ref(false);

defineProps<{
  isOpen: boolean;
  data: any;
}>();
</script>

<style lang="scss">
// .fade-enter {
// }

.fade-enter-active {
  animation: fade-in 0.3s;
}

// .fade-leave {
// }

.fade-leave-active {
  animation: fade-out 0.3s;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

// .jump-enter {
// }

.jump-enter-active {
  animation: jump-in 0.3s;
}

// .jump-leave {
// }

.jump-leave-active {
  animation: jump-out 0.3s;
}

@keyframes jump-in {
  0% {
    top: -100vh;
    opacity: 0;
    left: 20%;
  }

  30% {
    opacity: 0.6;
  }

  to {
    top: 0vh;
    opacity: 1;
  }
}

@keyframes jump-out {
  0% {
    top: 0vh;
    opacity: 1;
  }

  70% {
    opacity: 0.6;
  }

  100% {
    top: 100vh;
    opacity: 0;
    right: 14%;
  }
}
</style>
