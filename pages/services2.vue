<template lang="pug">
div(class="w-full flex flex-col px-10 h-auto  relative overflow-visible md:pt-[3rem]")
    h1(class="w-full text-center text-5xl font-semibold") Your Services
    div(class="flex w-full my-8 mt-12")
        div.instant-booking(class="flex w-auto gap-x-4 px-8")
            p(class="text-xl") Instant booking
            Switch(
                v-model="instantBooking"
                :class="instantBooking ? 'bg-blue-600' : 'bg-gray-200'" 
                class="relative inline-flex h-8 w-20 items-center rounded-full")
                p(:class="instantBooking ? 'text-white left-3' : 'right-3'" class=" absolute text-lg  ") {{ instantBooking ? 'On' : 'Off' }}
                span(class="sr-only") Enable notifications
                span(
                    :class="instantBooking ? 'translate-x-[3.3rem]' : 'translate-x-1'"
                    class="inline-block h-6 w-6 transform rounded-full bg-white transition")
        div.recurrence(class="flex w-auto gap-x-4 px-8 items-center")
            p(class="text-xl")  Recurrence of service
            button(class="text-xl  border-1 bg-black text-white rounded-full px-4 py-1") Recurrence
            button(class="text-xl bg-black text-white rounded-full px-4 py-1") One time


    div(class="w-full flex flex-wrap justify-center md:justify-between gap-y-[2.6rem] mt-[3rem] px-8 after:flex-auto gap-x-[1.3rem]  overflow-y-scroll max-h-[calc(100vh-24rem)]")
        AddService
        Service(@click="isEditMode = !isEditMode" @select="selectMenu"  :selected="selected" title="HOUSE CLEANING" desc="We clean and care  for variety of hard surface flooring at many places of business.")
          template(v-slot:icon)
            nuxt-img(src="icons/icon-13.png" width="190" h="45" class="w-[52%] md:w-auto h-auto  md:h-auto ")

        Service(@select="selectMenu" title="KITCHEN CLEANING" :selected="selected" desc="We clean and care  for variety of hard surface flooring at many places of business.")
          template(v-slot:icon)
            nuxt-img(src="icons/icon-23.png" width="190" h="45" class="w-[52%] md:w-auto h-auto  md:h-auto ")
        Service(@select="selectMenu"  title="FLOOR CLEANING" :selected="selected" desc="We clean and care  for variety of hard surface flooring at many places of business.")
          template(v-slot:icon)
            nuxt-img(src="icons/icon-33.png" width="190" h="45" class="w-[52%] md:w-auto h-auto  md:h-auto ")
        Service(@select="selectMenu"  title="BATHROOM CLEANING" :selected="selected" desc="We clean and care  for variety of hard surface flooring at many places of business." )
          template(v-slot:icon)
            nuxt-img(src="icons/icon-43.png" width="190" h="45" class="w-[52%] md:w-auto h-auto  md:h-auto ")
        Service(@select="selectMenu"  title="OFFICE CLEANING" :selected="selected" desc="We clean and care  for variety of hard surface flooring at many places of business." )
          template(v-slot:icon)
            nuxt-img(src="icons/icon-53.png" width="190" h="45" class="w-[52%] md:w-auto h-auto  md:h-auto ")
        Service(@select="selectMenu"  title="CAR CLEANING" :selected="selected" desc="We clean and care  for variety of hard surface flooring at many places of business.")
          template(v-slot:icon)
            nuxt-img(src="icons/icon-53.png" width="190" h="45" class="w-[52%] md:w-auto h-auto  md:h-auto ")
        Service(@select="selectMenu"  title="WINDOW CLEANING" :selected="selected" desc="We clean and care  for variety of hard surface flooring at many places of business." )
          template(v-slot:icon)
            nuxt-img(src="icons/icon-53.png" width="190" h="45" class="w-[52%] md:w-auto h-auto  md:h-auto ")
        Service(@select="selectMenu"  title="POWER WASHING" :selected="selected" desc="We clean and care  for variety of hard surface flooring at many places of business." )
          template(v-slot:icon)
            nuxt-img(src="icons/icon-53.png" width="190" h="45" class="w-[52%] md:w-auto h-auto  md:h-auto ")
        Service(@select="selectMenu"  title="UPHOLSTERY CLEANING" :selected="selected" desc="We clean and care  for variety of hard surface flooring at many places of business.")
          template(v-slot:icon)
            nuxt-img(src="icons/icon-53.png" width="190" h="45" class="w-[52%] md:w-auto h-auto  md:h-auto ")
        Service(@select="selectMenu"  title="GARDEN MAINTENANCE" :selected="selected" desc="We clean and care  for variety of hard surface flooring at many places of business.")
          template(v-slot:icon)
            nuxt-img(src="icons/icon-53.png" width="190" h="45" class="w-[52%] md:w-auto h-auto  md:h-auto ")
        Service(@select="selectMenu"  title="OVEN AND APPLIANCE CLEANING" :selected="selected" desc="We clean and care  for variety of hard surface flooring at many places of business.")
        


            
   
          

    transition(:name="animationName")
        div(v-show="isEditMode" @click="runAnimation"  class="w-full h-full bg-[#707070] fixed top-0 left-0 px-12  ")
    
</template>

<script setup lang="ts">
import { Switch } from "@headlessui/vue";

const isEditMode = ref(false);
const animationName = ref("");
const selected = ref("house cleaning");
const instantBooking = ref(false);
// randomly generate 'down' or 'up' or left or right for the animation

const selectMenu = (title: string) => {
  selected.value = title;
  scrollBack(document.getElementById(title.replace(/ /g, "-"))!);
};
const randomDirection = () => {
  const directions = ["up", "down", "left", "right"];

  return directions[Math.floor(Math.random() * directions.length)];
};

// run animation on the element
const runAnimation = (el: HTMLElement) => {
  if (isEditMode.value) {
    isEditMode.value = false;
  } else {
    isEditMode.value = true;
  }

  const direction = randomDirection();
  if (direction === "up") {
    animationName.value = "slideV";
  } else if (direction === "down") {
    animationName.value = "slideVD";
  } else if (direction === "left") {
    animationName.value = "slide";
  } else if (direction === "right") {
    animationName.value = "slideHRL";
  }

  el.classList.add(`animate-${direction}`);
  setTimeout(() => {
    el.classList.remove(`animate-${direction}`);
  }, 1000);
};

// if page was not scrolled 5 seconds scroll back to selected service every time user click on a service
const scrollBack = (el: HTMLElement) => {
  setTimeout(() => {
    el.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, 1000);
};

onMounted(() => {
  // scroll back to selected service every time user scroll page or resize window,but if he still scrrolls page, wait 2 seconds to finish scrolling and then scroll back to selected service
  // set timer to check if user still scrolling page
  let timer: any;

  // if timer is 5 seconds then run scroll back function
  window.addEventListener("scroll", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      scrollBack(document.getElementById(selected.value.replace(/ /g, "-"))!);
    }, 3000);
  });

  window.addEventListener("resize", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      scrollBack(document.getElementById(selected.value.replace(/ /g, "-"))!);
    }, 3000);
  });
});
</script>

<style lang="scss">
.slide-enter-active {
  animation: slide-in 0.3s;
}

// .jump-leave {
// }

.slide-leave-active {
  animation: slide-out 0.3s;
}

@keyframes slide-in {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
  }
}

//// ------------------------------/////
/// Vertical animation

.slideV-enter-active {
  animation: slideV-in 0.3s;
}

.slideV-leave-active {
  animation: slideV-out 0.3s;
}

@keyframes slideV-in {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
}
@keyframes slideV-out {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(100%);
  }
}

.slideV-enter-active {
  animation: slideV-in 0.3s;
}

// .jump-leave {
// }

.slideV-leave-active {
  animation: slideV-out 0.3s;
}

/// Vertical Down animation

.slideVD-enter-active {
  animation: slideVD-in 0.3s;
}

.slideVD-leave-active {
  animation: slideVD-out 0.3s;
}

@keyframes slideVD-in {
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0%);
  }
}
@keyframes slideVD-out {
  from {
    transform: translateY(0%);
  }

  to {
    transform: translateY(-100%);
  }
}

.slideVD-enter-active {
  animation: slideVD-in 0.3s;
}

// .jump-leave {
// }

.slideVD-leave-active {
  animation: slideVD-out 0.3s;
}

/// Horizontal Right Up animation

.slideHRL-enter-active {
  animation: slideHRL-in 0.3s;
}

.slideHRL-leave-active {
  animation: slideHRL-out 0.3s;
}

@keyframes slideHRL-in {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
}

@keyframes slideHRL-out {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}

.slideHRL-enter-active {
  animation: slideHRL-in 0.3s;
}
</style>
