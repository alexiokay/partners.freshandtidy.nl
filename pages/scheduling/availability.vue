<template lang="pug">
div#timeslot-top-panel(class="flex w-full h-auto")
    
div(class="flex gap-x-[5rem] px-8 md:px-0 flex-wrap md:flex-nowrap ")
    
    div#timeslot-left-panel(class="flex w-full md:w-2/4 flex-col mt-[0.8rem] pr-[2.9rem]"  )

        div(class="flex flex-col gap-y-4 sticky top-[6.6rem]")
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
          Calendar(ref="calendar" class="mt-8  " @selectDate="selectDate" :dates="dateObjs" :editMode="editMode" )
          div(class="relative w-full h-[3rem] flex flex-col gap-y-4  text-gray-600")
            div(class="flex w-full gap-x-4 text-lg")
                div(@click="activeMenu = 'hours'; isMenuClicked = true" class="scheduling__menu__item hover:cursor-pointer" id="menu-hours" )
                    p Set Hours of Availability
                div(@click="activeMenu = 'limits'; isMenuClicked = true" class="scheduling__menu__item hover:cursor-pointer" id="menu-limits" )
                    p Calendar Scheduling Limits  
                
            ClientOnly
              
                div.scheduling__menu__pointer(:style="{width: menuPointerWidth}" :class="isMenuClicked? activeMenu: '', activeMenu === 'hours'? 'bg-red-500': 'bg-blue-500'"  class=" h-[0.2rem] absolute bottom-[0.08rem]  rounded-full")
            hr( class="w-full h-[0.5px] border-gray-300 border-[1px]" )

          div(class="w-full h-auto  overflow-clip ")
            div.w-full(v-if="activeMenu === 'hours'" class="hours ")
              h2(class="text-3xl font-bold mr-6 w-auto") Default working hours   
              table.w-full
                tr(class="border-b-[0.1rem] h-[3rem] border-black text-start")
                    th(class=" w-[15%] border-r-[0.1rem] border-gray-400 ") Day
                    th(class=" w-[15%] border-r-[0.1rem] border-gray-400") On
                    th(class=" border-r-[0.1rem] border-gray-400") Start
                    th(class="  ") End
                tr(v-for="(day, index ) in workingDays" :key="day" :class="index === 6? 'border-b-black': ''" class="text-center h-[3rem] border-b-[0.1rem] border-gray-400 ")
                    td(class="border-x-[0.1rem] border-r-gray-400 border-l-black") {{day.day}}
                    td(class="border-r-[0.1rem] border-gray-400")  {{day.on}}
                    td(class="border-r-[0.1rem] border-gray-400")  {{day.start}}
                    td(class="border-r-[0.1rem] border-black")  {{day.end}}
            div(v-else class="limits__content " )
              h2(class="text-3xl font-bold mr-6 w-auto") Scheduling Limits
              table.w-full
                tr(class="border-b-[0.1rem] h-[3rem] border-black text-start")
                    th(class=" w-[15%] border-r-[0.1rem] border-gray-400 ") Day
                    th(class=" w-[15%] border-r-[0.1rem] border-gray-400") On
                    th(class=" border-r-[0.1rem] border-gray-400") Start
                    th(class="  ") End
                tr(v-for="(day, index ) in workingDays" :key="day" :class="index === 6? 'border-b-black': ''" class="text-center h-[3rem] border-b-[0.1rem] border-gray-400 ")
                    td(class="border-x-[0.1rem] border-r-gray-400 border-l-black") {{day.day}}
                    td(class="border-r-[0.1rem] border-gray-400")  {{day.on}}
                    td(class="border-r-[0.1rem] border-gray-400")  {{day.start}}
                    td(class="border-r-[0.1rem] border-black")  {{day.end}}

            
          
            
    div#timeslot-right-panel( class="flex w-full md:w-2/4 flex-col md:mt-[6rem] ")
        CalendarScheduleSidebar(:class="isScheduleSidebarOpen? '': 'hidden'" class="mt-8")
        CalendarSchedule( :selectedTimeslot="formatedScheduleDate" class="mt-2" :date="formatUTCDate(selectedDate)")

    

</template>

<script setup lang="ts">
import ArrowIcon from "~icons/material-symbols/chevron-left-rounded";
import EditIcon from "~icons/ph/pencil";

const activeMenu = ref("hours");
const isMenuClicked = ref(false);

const workingDays = ref([
  {
    day: "MON",
    on: "ON",
    start: "08:00",
    end: "16:00",
  },
  {
    day: "TUE",
    on: "ON",
    start: "08:00",
    end: "16:00",
  },
  {
    day: "WED",
    on: "ON",
    start: "08:00",
    end: "16:00",
  },
  {
    day: "THU",
    on: "ON",
    start: "08:00",
    end: "16:00",
  },
  {
    day: "FRI",
    on: "ON",
    start: "08:00",
    end: "16:00",
  },
  {
    day: "SAT",
    on: "OFF",
    start: "08:00",
    end: "16:00",
  },
  {
    day: "SUN",
    on: "OFF",
    start: "08:00",
    end: "16:00",
  },
]);

import CalendarIcon from "~icons/mdi/calendar-week";
import { useMainStore } from "@/stores/Main";
import { useUserStore } from "@/stores/User";
import type { DateObject } from "@/types/DateObject";

const userStore = useUserStore();
const mainStore = useMainStore();

const selectedDate = ref(new Date()); // for calendar and schedule logic
// find corresponding date in mainStore dates and check if date is open

const isScheduleSidebarOpen = ref(false);

function getDatesForMonth(month: number, year: number): DateObject[] {
  // Validate the input month and year
  if (isNaN(month) || month < 0 || month > 11 || isNaN(year)) {
    throw new Error("Invalid month or year.");
  }

  // Get the first day of the specified month and year
  const firstDayOfMonth = new Date(year, month, 1);

  // Get the number of days in the specified month and year
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const numberOfDays = lastDayOfMonth.getDate();

  // Initialize an array to hold the DateObject instances
  const dateObjs: DateObject[] = [];

  // Loop through all days in the specified month
  for (let day = 1; day <= numberOfDays; day++) {
    // Create a new Date object for each day
    const dateObj: DateObject = {
      day: day,
      id: 0, // You can set this value based on your logic
      date: new Date(year, month, day),
      is_open: false, // You can set this value based on your logic
      workable_times: [], // You can set this value based on your logic
    };

    // Push the DateObject to the array
    dateObjs.push(dateObj);
  }

  return dateObjs;
}

// Example usage:
const month = 7; // August (0-based index, so 7 represents August)
const year = 2023;
const dateObjs = ref(getDatesForMonth(month, year));
console.log(dateObjs);

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
  dateObjs.value = getDatesForMonth();

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

const menuPointerWidth = computed(() => {
  let width = "0rem";
  if (activeMenu.value === "hours") {
    const el = document.getElementById("menu-hours") as HTMLElement;
    width = el.offsetWidth + "px";
    console.log(width);
  }
  if (activeMenu.value === "limits") {
    const el = document.getElementById("menu-limits") as HTMLElement;
    width = el.offsetWidth + "px";
  }

  return width;
});
</script>

<style lang="scss">
.hours {
  animation: slideToHours 0.5s forwards;
}

.limits {
  animation: slideToLimits 0.5s forwards;
}

@keyframes slideToHours {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes slideToLimits {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}

.limits__content {
  animation: slideToLimits__content 0.5s forwards;
}

@keyframes slideToLimits__content {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
