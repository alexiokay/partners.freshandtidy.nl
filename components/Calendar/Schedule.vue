<template lang="pug">
div.schedule(class="flex flex-col w-full h-auto ")
    CalendarSidebar(v-if="selectedTimeslot" :isOpen="isScheduleSidebarOpen" @close="closeSidebar" class="" :date="props.date" :timeslots="timeslots" :timeslot="selectedTimeslot")

    p.schedule-title(class="flex w-full h-[4rem] justify-between text-center items-start")
        span(class="text-lg text-center rounded-lg flex items-center justify-center") {{props.date}}
    hr(class="w-full h-[2.5px] bg-black")
    div(class="overflow-auto relative")
        div(v-if="is_fetchind_timeslots === false" @click="selectedTimeslot=timeslot" class="flex  w-auto items-center py-5 " v-for="timeslot in timeslots")
            div(class="flex flex-col w-4/5" ) 
                p(class="text-3xl font-semibold") {{timeslot?.start_time}} - {{timeslot?.end_time}}
                p trucks left: {{ timeslot?.trucks_left }}
            button.book-button(@click="book(timeslot?.id)"  class="w-1/5 h-[3rem] bg-violet-600 text-white rounded-lg") Book
        
        div(v-else class="")
          div( class="flex  w-auto items-center py-5 blur-md opacity-0" v-for="i in 24")
              div(class="flex flex-col w-4/5  " ) 
                  p(class="text-3xl font-semibold ") ...
                  p(class="") trucks left: ...
              button.book-button(  class="w-1/5 h-[3rem] bg-violet-600 text-white rounded-lg ") Book
          div.spinner(class="absolute top-[30vh] left-[50%] transform -translate-x-1/2 text-2xl w-full h-auto flex items-center justify-center")
            div(class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900")
</template>

<script setup lang="ts">
import { useMainStore } from "@/stores/Main";
import { useUserStore } from "@/stores/User";
import { useSettingsStore } from "@/stores/Settings";
// import { Timeslot } from "@/types/timeslot";
import uniqid from "uniqid";
const mainStore = useMainStore();
const settingsStore = useSettingsStore();
const props = defineProps({
  date: {
    type: String,
    required: true,
  },
});

const is_fetchind_timeslots = ref(false);

// generating empty timeslots for the day in range of workable hours

// timeslots from database
// const timeslotsData = computed(() => mainStore.getTimeslotsByDate(props.date));
const userStore = useUserStore();
const timeslots = ref();

// const get_timeslots = async (date: string) => {
//   is_fetchind_timeslots.value = true;
//   console.log(date);
//   const config = useRuntimeConfig();
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Host: `${config.FETCH_HOST}`,
//       Authorization: `Token ${userStore.getToken}`,
//     },
//     body: JSON.stringify({
//       date: date,
//     }),
//   } as any;

//   const timeslots = await fetch(
//     `${config.API_URL}api/v1/get_date_timeslots`,
//     options
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data.timeslots);
//       is_fetchind_timeslots.value = false;
//       return data.timeslots;
//     });
//   return timeslots;
// };

const get_timeslots = async (date: string) => {
  // create 12 timeslots objects
  const timeslots = [];
  for (let i = 0; i < 12; i++) {
    const timeslot = {
      id: uniqid(),
      start_time: `${i + 8}:00`,
      end_time: `${i + 9}:00`,
      trucks_left: 3,
    };
    timeslots.push(timeslot);
  }
  return timeslots;
};

onMounted(async () => {
  timeslots.value = await get_timeslots(props.date);
});

const selectedTimeslot = ref();

watch(
  () => props.date,
  async () => {
    const new_date = new Date(props.date).toISOString().split("T")[0];
    console.log(new_date);
    timeslots.value = await get_timeslots(new_date);
    is_fetchind_timeslots.value = false;
  }
);
//const timeslots = computed(() => mainStore.getTimeslotsByDate(props.date));
console.log(timeslots.value);

const isScheduleSidebarOpen = ref(false);

watch(
  () => isScheduleSidebarOpen.value,
  (val) => {
    // block scrolling when sidebar is open
    if (val) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
);

//TODO! Fetch timeslots for selected date (close? litimed hours?) from arrow's settings

const book = (timeslotId: number) => {
  isScheduleSidebarOpen.value = !isScheduleSidebarOpen.value;

  // dont hide scrollbar when sidebar is open
  const scrollbarWidth = window.innerWidth - document.body.clientWidth;
  document.body.style.paddingRight = `${scrollbarWidth}px`;
};

const closeSidebar = () => {
  document.body.style.paddingRight = `0px`;
  isScheduleSidebarOpen.value = false;
};

onMounted(() => {
  document.addEventListener("mousedown", (e: any) => {
    if (
      e.target !== document.querySelector(".book-button") &&
      !e.target.closest("#schedule-sidebar")
    ) {
      isScheduleSidebarOpen.value = false;
    }
  });
});
</script>

<style lang="scss"></style>
