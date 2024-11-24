<template lang="pug">
div

  Transition(name="fade")
    <div v-show="isOpen" @click="$emit('close')" tabindex="-1" class="fixed top-0 pointer-event-none flex items-center bg-[rgba(0,0,0,0.55)] justify-center left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen md:h-full"></div>
  Transition(name="jump")
    div(v-show="isOpen"  @click.stop="$emit('null')" class="fixed top-0 pointer-event-none flex items-center  justify-center left-0 right-0 z-50  mx-auto w-[30rem] p-4  md:inset-0 h-screen md:h-full")
      <!-- Modal content -->
      div( class="relative bg-white rounded-lg shadow dark:bg-gray-700 h-[15rem]")
        <!-- Modal header -->
        div(class="flex items-center justify-between px-5 py-3 border-b bg-slate-50 rounded-t dark:border-gray-600")
          h3(class="text-xl font-medium text-gray-900 dark:text-white")
            p Saving...

          button(@click="$emit('close')" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="medium-modal")
            <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Close modal</span> 


        <!-- Modal body -->
        div(class="p-2 space-y-6 overflow-y-auto h-[5.5rem] sm:auto w-[30rem]")
          div(class="flex items-center justify-center h-full w-full")
            p(class="text-3xl") Saved
          <p hidden class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            span(hidden) The European Unions General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
          </p>

        <!-- Modal footer -->
        <div class="absolute bottom-0 w-full flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          button(@click="$emit('setShipping'), $emit('close')" class="w-full rounded-full text-center h-[2.4rem] bg-blue-600 text-sm text-white hover:bg-blue-700")
            p OK
        </div>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean;
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
