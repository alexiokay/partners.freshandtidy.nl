<template lang="pug">
div#timeslot-top-panel(class="flex w-full h-auto")
    
div(class="flex gap-x-[5rem] px-8 md:px-0 flex-wrap md:flex-nowrap ")
    
    div#timeslot-left-panel(class="flex w-full md:w-2/4 flex-col  " :class="{'mt-[0.8rem] pr-[2.9rem] ': editMode}" )

        div(class="flex flex-col space-y-4 sticky top-[2.5rem]")
          div(class="flex items-center relative ")
              h1(class="text-3xl font-bold mr-6 w-[10rem]") {{formatedCalendarDate}}
              div(class="p-[2px] rounded-full hover:bg-gray-100 hover:cursor-pointer")
             
                  ArrowIcon(@click="previousMonth()"  class="h-7 w-7 text-gray-600")
              p(class="absolute -top-[1.45rem] left-[13.2rem] w-[2px] h-[2px] text-5xl") .
              div(class="p-[2px] rounded-full hover:bg-gray-100 hover:cursor-pointer")
                  ArrowIcon(@click="nextMonth()" class="rotate-180 h-7 w-7 text-gray-600")
              div(class="absolute flex w-auto right-0 items-center justify-end ")
                CalendarIcon(class="hover:cursor-pointer")
                hr(class="absolute top-[1.7rem] right-0 w-[1.3rem] h-[0.5px] border-gray-300 border-[1px]")
              div(@click="editMode = !editMode" v-if="userStore.getAccountType === 'arrow-employee'" :class="{'text-blue-600': editMode}" class="absolute flex w-auto right-8 items-center justify-end ")
                EditIcon(class="hover:cursor-pointer")
                hr(class="absolute top-[1.7rem] right-0 w-[1.3rem] h-[0.5px] border-gray-300 border-[1px]")
          p(v-if="editMode" class="text-gray-500 w-full") Here you can edit your timeslots. You can open or close timeslots for a specific date.
          p(v-if="!editMode" class="text-gray-500 w-full") Here all your planned timeslots. You will find information for each timeslot as well you can planned new one
          Calendar(ref="calendar" class="mt-8  " @selectDate="selectDate" :dates="date_objs" :editMode="editMode" )
    div#timeslot-right-panel(v-show="!editMode" class="flex w-full md:w-2/4 flex-col md:mt-[6rem] ")
        CalendarScheduleSidebar(:class="isScheduleSidebarOpen? '': 'hidden'" class="mt-8")
        CalendarSchedule( :selectedTimeslot="formatedScheduleDate" class="mt-8" :date="formatUTCDate(selectedDate)")

    

</template>

<script setup lang="ts">
import ArrowIcon from "~icons/material-symbols/chevron-left-rounded";
import EditIcon from "~icons/ph/pencil";

import CalendarIcon from "~icons/mdi/calendar-week";
import { useMainStore } from "@/stores/Main";
import { useUserStore } from "@/stores/User";
import type { DateObject } from "@/types/DateObject";
definePageMeta({});

const userStore = useUserStore();
const mainStore = useMainStore();

const selectedDate = ref(new Date()); // for calendar and schedule logic
// find corresponding date in mainStore dates and check if date is open

const isScheduleSidebarOpen = ref(false);

const date_objs = computed(() => {
  return mainStore.getDates;
});

const calendar = ref();
const editMode = ref(false);
if (userStore.getAccountType === "arrow-employee") {
  editMode.value = true;
}

const formatCalendarDate = (date: any) => {
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  const formattedDate = `${month}' ${year}`;
  return formattedDate;
};

const formatUTCDate = (date: any) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // add leading zero if needed
  const day = date.getDate().toString().padStart(2, "0"); // add leading zero if needed
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};
const formatScheduleDate = (date: Date) => {
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let monthsOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let dayOfMonth = date.getDate();
  let dayOfWeek = daysOfWeek[date.getDay()];
  let month = monthsOfYear[date.getMonth()];
  let year = date.getFullYear();
  let formattedDate = `${dayOfMonth}, ${month} ${dayOfWeek}`;

  return formattedDate;
};
const formatedScheduleDate = ref(formatScheduleDate(selectedDate.value));
const formatedCalendarDate = ref(formatCalendarDate(selectedDate.value));
const currentDate = ref(new Date());

const nextMonth = () => {
  calendar.value.nextMonth(); //populates calendar with dates

  currentDate.value = new Date( // for calendar navigation logic
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + 1,
    currentDate.value.getDate()
  );

  formatedCalendarDate.value = formatCalendarDate(currentDate.value);
  currentDate;
};

const previousMonth = () => {
  calendar.value.previousMonth(); //populates calendar with dates
  currentDate.value = new Date( // for calendar navigation logic
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() - 1,
    currentDate.value.getDate()
  );

  formatedCalendarDate.value = formatCalendarDate(currentDate.value);
};

const selectDate = (date: Date) => {
  console.log("selectDate:");
  console.log(date);
  selectedDate.value = date;
  formatedScheduleDate.value = formatScheduleDate(date);
  console.log(formatedScheduleDate.value);
};
</script>

<style lang="sass"></style>
