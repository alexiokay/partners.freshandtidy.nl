<template lang="pug">
div

  Transition(name="fade")
    <div v-show="isOpen" @click="$emit('close')" tabindex="-1" class="backdrop-blur-[2.5px] fixed top-0 pointer-event-none flex items-center  bg-[rgba(0,0,0,0.55)] justify-center left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen md:h-full"></div>
  Transition(name="jump")
    div(v-show="isOpen"  class="fixed top-0 pointer-event-none flex items-center  justify-center left-0 right-0 z-50  mx-auto lg:mx-0 lg:ml-[calc(45.5vw)] w-[30rem] p-4 my-auto  md:inset-0 h-screen md:h-min")
      <!-- Modal content -->
      div( class="relative bg-white rounded-lg shadow dark:bg-gray-700 h-auto" @click.stop="$emit('null')")
        <!-- Modal header -->
        div(class="flex items-center justify-between px-5 py-3 border-b bg-slate-50 rounded-t dark:border-gray-600")
          h3(class="text-xl font-medium text-gray-900 dark:text-white text-center")
           
            p(v-if="isDateOpen") Do you really want to 
                span(class="font-semibold text-red-500") CLOSE 
                span() date XX-XX-XXXX?

            p(v-if="!isDateOpen") Do you really want to 
                span(class="font-semibold text-green-500") OPEN 
                span() date XX-XX-XXXX?

         


        <!-- Modal body -->
        div(class="py-4 px-10 gap-y-6 flex flex-col overflow-y-auto h-auto sm:auto w-[40rem]")
          p(class="text-base leading-relaxed text-gray-500 dark:text-gray-400")
            p We use 2-step verification. Enter the sms code that was sent to your phone number 
              span(class="font-bold underline") +11 123 456 789
              span . If you did not receive the code, click the "Resend code" button.
          div.sms-auth(class="flex w-full h-auto gap-x-4")
              input(type="text" v-model="passingCode" class="w-full h-full text-xl border-2 border-gray-300 rounded-lg focus:outline-none px-4 py-2" placeholder="Enter your sms code")
              button.resend-button(class="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-lg w-auto text-xl min-w-max") Resend code

          p.not-correct(v-if="!isCodeCorrect" class="text-lg leading-relaxed text-red-700 dark:text-gray-400 -mt-4")
            p The code is not correct. Please try again.
          p(class="text-xl font-semibold text-center") 
           
            
            .flex.justify-center.w-full.items-center.space-x-3.mt-6
                button.confirm-button(@click="confirm"  class="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-lg w-[7rem] text-xl") Confirm
                button.cancel-button(@click="$emit('no')" class="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg w-[7rem] text-xl ") Cancel
                
          <p hidden class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            p(hidden) The European Unions General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
          </p>

        <!-- Modal footer -->
        
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean;
  isDateOpen: boolean;
}>();

const emit = defineEmits(["yes", "no"]);
const isCodeCorrect = ref(false);
const passingCode = ref("");

const confirm = () => {
  // TODO: create a composal to pass the code to the server and check it
  emit("yes");
};
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
