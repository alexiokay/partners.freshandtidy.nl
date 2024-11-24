<template lang="pug">
div

  Transition(name="fade")
    <div v-show="isOpen" @click="$emit('close')" tabindex="-1" class="backdrop-blur-[2.5px] fixed top-0 pointer-event-none flex items-center  bg-[rgba(0,0,0,0.55)] justify-center left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen md:h-full"></div>
  Transition(name="jump")
    div(v-show="isOpen"  class="fixed top-0 pointer-event-none flex items-center  justify-center left-0 right-0 z-50  mx-auto w-[30rem] p-4  md:inset-0 h-screen md:h-min my-auto")
      <!-- Modal content -->
      div( class="relative bg-white   rounded-sm shadow dark:bg-gray-700 h-auto" @click.stop="$emit('null')")
        <!-- Modal header -->
        div(class="flex items-center justify-between px-5 py-4 border-b bg-slate-50 rounded-t dark:border-gray-600")
          h3(class="text-xl font-medium text-gray-900 dark:text-white text-center")
            p Do you really want to save these changes?
            

         


        <!-- Modal body -->
        div(class="py-6 px-10 space-y-2 overflow-y-auto h-auto sm:auto w-[40rem]")
  
          p(class="text-xl font-semibold text-center") 
           
            
            .flex.justify-center.w-full.items-center.space-x-10
                button.confirm-button(@click="$emit('confirm')"  class="bg-violet-800 hover:bg-violet-600 text-white px-4 py-2 rounded-md w-[7rem] text-xl") Yes
                button.cancel-button(@click="$emit('no')" class="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md w-[7rem] text-xl ") No
                
          <p hidden class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            p(hidden) The European Unions General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
          </p>

        <!-- Modal footer -->
        
</template>

<script setup lang="ts">
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
