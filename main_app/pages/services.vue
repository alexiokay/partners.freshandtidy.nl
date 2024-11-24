<template lang="pug">
div(class="w-full flex flex-col lg:px-10 h-full  relative overflow-visible md:pt-[3rem] gap-y-4 rounded-xl px-2 ")
  div(class="w-full lg:px-16")
    div(class="flex w-full  h-[10rem] bg-white  rounded-xl shadow-sm p-6 gap-x-6 border-[#e4eaf1] border-[1px] ")
      div(class="w-full h-10 flex gap-x-4 items-center ")
        p Price per kilometer (EUR) 
          p(class="underline") [medium 1,12 eur]
        input(class="w-1/4 h-[2.5rem] border-[1px] focus:outline-none px-2 py-1" value='1,12')
        button(class="bg-[#53c0fbfa] border-[1px] text-white px-4 py-2 rounded-xl w-[10rem] h-full text-lg font-medium ") Save
          
  div(class="w-full flex flex-col lg:px-10 h-full  relative overflow-visible md:pt-[3rem] gap-y-4 ")
    h1(class="w-full text-center text-5xl font-semibold") Your Services
    ModalEditService(:isOpen="isEditMode" :data="editSubscriptionData" @confirm="isEditMode = !isEditMode" @close="isEditMode = !isEditMode" )
    

    div(class="w-full flex flex-col justify-center md:justify-between gap-y-[2.6rem] py-4 mt-[3rem] lg:px-8 after:flex-auto gap-x-[1.3rem]  overflow-y-scroll ")
        AddService2
        Service2(v-for="(service,index) in services" :key="index"  @edit="editService(service)" @select="selectMenu" :data="service" :selected="selected" :instant="service.instant" :one_time="service.one_time" :recurrence="service.recurrence")
          template(v-slot:icon)
            nuxt-img(:src="service.icon" width="190" h="45" class="w-[52%] md:w-auto h-auto md:h-[7rem] ")

            
   
          
    
    //- transition(:name="animationName")
    //-     div(v-show="isEditMode" @click="runAnimation"  class="w-full h-full bg-[#707070] fixed top-0 left-0 px-12  ")
    
</template>

<script setup lang="ts">
import { Switch } from "@headlessui/vue";

const editSubscriptionData = ref({});
const isEditMode = ref(false);
const animationName = ref("");
const selected = ref("house cleaning");
const instantBooking = ref(false);
// randomly generate 'down' or 'up' or left or right for the animation

const services = ref([
  {
    title: "House",
    desc: "We clean and care  for variety of hard surface flooring at many places of business.",
    instant: true,
    one_time: true,
    recurrence: true,
    icon: "icons/icon-13.png",
  },
  {
    title: "Kitchen",
    desc: "",
    instant: true,
    one_time: true,
    recurrence: false,
    icon: "icons/icon-23.png",
  },
  {
    title: "Floor",
    desc: "",
    instant: false,
    one_time: true,
    recurrence: true,
    icon: "icons/icon-33.png",
  },
  {
    title: "Bathroom",
    desc: "",
    instant: true,
    one_time: false,
    recurrence: true,
    icon: "icons/icon-43.png",
  },
  {
    title: "Office",
    desc: "",
    instant: true,
    one_time: true,
    recurrence: true,
    icon: "icons/icon-53.png",
  },
  {
    title: "Car",
    desc: "",
    instant: true,
    one_time: true,
    recurrence: true,
    icon: "icons/icon-53.png",
  },
  {
    title: "Window",
    desc: "",
    instant: true,
    one_time: true,
    recurrence: true,
    icon: "icons/icon-53.png",
  },
  {
    title: "Power Washing",
    desc: "",
    instant: true,
    one_time: true,
    recurrence: true,
    icon: "icons/icon-53.png",
  },
  {
    title: "Upholstery",
    desc: "",
    instant: true,
    one_time: true,
    recurrence: true,
    icon: "icons/icon-53.png",
  },
  {
    title: "Garden Maintenance",
    desc: "",
    instant: true,
    one_time: true,
    recurrence: true,
    icon: "icons/icon-53.png",
  },
  {
    title: "Oven and Appliance",
    desc: "",
    instant: true,
    one_time: true,
    recurrence: true,
    icon: "icons/icon-53.png",
  },
]);

const editService = (data) => {
  isEditMode.value = true;
  editSubscriptionData.value = data;
};
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
