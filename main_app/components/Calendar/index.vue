<template lang="pug">
div.calendar(class="flex flex-col w-full h-auto")
    .calendar-days(class="flex w-full h-[4rem] justify-between text-center items-start")
        CalendarDayTitle(title="MON")
        CalendarDayTitle(title="TUE")
        CalendarDayTitle(title="WED")
        CalendarDayTitle(title="THU")
        CalendarDayTitle(title="FRI")
        CalendarDayTitle(title="SAT")
        CalendarDayTitle(title="SUN")
    hr(class="w-full h-[2px] bg-black")
    .calendar-days(class="flex w-full h-[4rem] justify-between items-center text-center")
      CalendarDay(@click="openModal(day)" @selectDate="selectDate(day)" v-for="day in firstWeek" :class="{'opacity-0 pointer-events-none': day.is_open === false && !editMode || (!day.is_fetched  &&  editMode ),}" :day="day.day.toString()"  :is_selected="checkDate(day.date)" :is_open="day.is_open" :editMode="editMode" :is_actual_month='day.day > 10? true: false')
    .calendar-days(class="flex w-full h-[4rem] justify-between items-center text-center")
      CalendarDay(@click="openModal(day)"  @selectDate="selectDate(day)" v-for="day in secondWeek" :class="{'opacity-0 pointer-events-none': day.is_open === false && !editMode || (!day.is_fetched  &&   editMode ),}" :day="day.day.toString()" :is_selected="checkDate(day.date)" :is_open="day.is_open" :editMode="editMode")
        
    .calendar-days(class="flex w-full h-[4rem] justify-between items-center text-center")
      CalendarDay(@click="openModal(day)" @selectDate="selectDate(day)" v-for="day in thirdWeek" :class="{'opacity-0 pointer-events-none': day.is_open === false && !editMode || (!day.is_fetched && editMode),}" :day="day.day.toString()" :is_selected="checkDate(day.date)" :is_open="day.is_open" :editMode="editMode")
    .calendar-days(class="flex w-full h-[4rem] justify-between items-center text-center")
      CalendarDay(@click="openModal(day)" @selectDate="selectDate(day)" v-for="day in fourthWeek" :class="{'opacity-0 pointer-events-none': day.is_open === false && !editMode || (!day.is_fetched  && editMode),}" :day="day.day.toString()"  :is_selected="checkDate(day.date)" :is_open="day.is_open" :editMode="editMode")
    .calendar-days(class="flex w-full h-[4rem] justify-between items-center text-center")
      CalendarDay(@click="openModal(day)" @selectDate="selectDate(day)" v-for="day in fifthWeek" :class="{'opacity-0 pointer-events-none': day.is_open === false && !editMode || (!day.is_fetched   && editMode ),}" :day="day.day.toString()"  :is_selected="checkDate(day.date)"  :is_open="day.is_open" :editMode="editMode"  :is_actual_month='day.day < 22? true: false')
    .calendar-days(class="flex w-full h-[4rem] justify-between items-center text-center")
      CalendarDay(@click="openModal(day)" @selectDate="selectDate(day)" v-for="day in sixthWeek" :class="{'opacity-0 pointer-events-none': day.is_open === false && !editMode || (!day.is_fetched  &&  editMode ),}" :day="day.day.toString()"  :is_selected="checkDate(day.date)" :is_open="day.is_open" :editMode="editMode" :is_actual_month='day.day < 22? true: false')

ModalApproved2step(:isOpen="is_modal_open" @close="is_modal_open = false" @yes="confirmModal()" @no="cancelModal()" :isDateOpen="unlockingDate? unlockingDate.is_open: false" )

</template>

<script setup lang="ts">
import { useMainStore } from "@/stores/Main";
import { useUserStore } from "@/stores/User";
const userStore = useUserStore();
const mainStore = useMainStore();
const date = new Date();
let selectedYear = date.getFullYear();
let selectedMonth = date.getMonth();
const config = useRuntimeConfig();
const props = defineProps({
  dates: {
    type: Array<any>,
    required: true,
  },
  editMode: {
    type: Boolean,
    required: false,
  },
});

console.log("dates: ");
console.log(props.dates);
const firstDay = ref(new Date(selectedYear, selectedMonth).getDay());

const daysInMonth = (iMonth: any, iYear: any) => {
  return 32 - new Date(iYear, iMonth, 32).getDate();
};

const unlockingDate: any = ref(null);
console.log(firstDay.value);
console.log(daysInMonth(selectedMonth, selectedYear));

const is_modal_open = ref(false);
const is_changes_confirmed = ref(false);

interface DateObject {
  day: number;
  id: number;
  date: Date;
  is_open: boolean;
  workable_times: Array<string>;
  is_fetched: boolean;
}

function findNextOpenDate(dates: DateObject[]) {
  let currentDate = new Date();

  // iterate trought next dates in calendar and find first open date
  for (let i = 0; i < dates.length; i++) {
    let date: Date = new Date(dates[i].date);
    if (dates[i].is_open) {
      emit("selectDate", date);
      return date;
    }
  }
}

const populateCalendar = (
  dates: Array<DateObject>,
  currentDate: Date
): Array<DateObject> => {
  // Create a new Date object for the first day of the current month
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  // Get the day of the week for the first day of the current month
  const firstDayOfWeek = firstDayOfMonth.getDay();

  // Create a new Date object for the last day of the current month
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  // Get the day of the week for the last day of the current month
  const lastDayOfWeek = lastDayOfMonth.getDay();

  // Create an array to hold the days in the calendar
  const allDays: Array<DateObject> = [];

  // Calculate the date of the first day in the calendar
  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    2 - firstDayOfWeek
  );

  // Calculate the date of the last day in the calendar
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    lastDayOfMonth.getDate() + (7 - lastDayOfWeek)
  );

  // Loop through each day in the calendar and add it to the allDays array
  let dateIterator = new Date(startOfMonth);
  while (dateIterator <= endOfMonth) {
    const day: DateObject = {
      day: dateIterator.getDate(),
      date: new Date(dateIterator),
      id: 0,
      is_open: false,
      workable_times: [],
      is_fetched: false,
    };
    dates.forEach((date) => {
      if (date.date.toDateString() === dateIterator.toDateString()) {
        day.id = date.id;
        day.is_open = date.is_open;
        day.workable_times = date.workable_times;
        day.is_fetched = true;
      }
    });
    allDays.push(day);
    dateIterator.setDate(dateIterator.getDate() + 1);
  }

  return allDays;
};
const currentDate = new Date();
const days = ref(populateCalendar(props.dates, currentDate));
const firstWeek = computed(() => {
  return days.value.slice(0, 7);
});
const secondWeek = computed(() => {
  return days.value.slice(7, 14);
});
const thirdWeek = computed(() => {
  return days.value.slice(14, 21);
});
const fourthWeek = computed(() => {
  return days.value.slice(21, 28);
});
const fifthWeek = computed(() => {
  return days.value.slice(28, 35);
});
const sixthWeek = computed(() => {
  return days.value.slice(35, 42);
});

const clickedDate: any = ref(findNextOpenDate(props.dates));

const nextMonth = () => {
  selectedMonth = selectedMonth + 1;
  days.value = populateCalendar(
    props.dates,
    new Date(selectedYear, selectedMonth)
  );
  console.log("next month");
  console.log(days.value);
};
const previousMonth = () => {
  selectedMonth = selectedMonth - 1;
  days.value = populateCalendar(
    props.dates,
    new Date(selectedYear, selectedMonth)
  );
  console.log("previous month");
  console.log(days.value);
};

const checkDate = (day: Date) => {
  if (
    clickedDate.value &&
    clickedDate.value.toDateString() === day.toDateString() &&
    props.editMode === false // allow for selection only if edit mode is false
  ) {
    return true;
  } else if (
    !clickedDate.value &&
    day.toDateString() === new Date().toDateString() &&
    props.editMode === false // allow for selection only if edit mode is false
  ) {
    return true;
  }
  return false;
};
// parsing day to date format and emitting it to timeslots page to select schedule timeslots
const emit = defineEmits(["selectDate"]);
const selectDate = (day: DateObject) => {
  if (props.editMode === false) {
    // allow for selection only if edit mode is false
    clickedDate.value = day.date;
    //console.log("clicked date: " + clickedDate.value);
    emit("selectDate", clickedDate.value);
  }
};

const confirmModal = async () => {
  is_modal_open.value = true;
  const date = unlockingDate.value;
  lockUnlockDate(date);
  is_modal_open.value = false;
};
const cancelModal = async () => {
  is_modal_open.value = false;
};

const openModal = (day: DateObject) => {
  if (props.editMode) {
    unlockingDate.value = day;
    is_modal_open.value = true;
  }
};

const lockUnlockDate = async (day: DateObject) => {
  if (props.editMode === true) {
    // allow for selection only if edit mode is true
    fetch(`${config.API_URL}api/v1/lock_unlock_day`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Host: `${config.FETCH_HOST}`,
        Authorization: `Token ${userStore.getToken}`,
      },
      body: JSON.stringify({
        date: day.date.toISOString().slice(0, 10),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message + day.date);
        if (data.message === "Day Unlocked.") {
          day.is_open = true;
          mainStore.openDay(day.id);
        } else if (data.message === "Day locked.") {
          day.is_open = false;
          mainStore.closeDay(day.id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

defineExpose({
  clickedDate,
  nextMonth,
  previousMonth,
  selectedYear,
  selectedMonth,
});
</script>

<style lang="scss"></style>
