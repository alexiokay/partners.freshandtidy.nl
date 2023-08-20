<template lang="pug">
div
  Transition(name="fade")
    <div v-show="props.isOpen" @mousedown="$emit('close')" tabindex="-1" class="backdrop-blur-[2.5px] fixed top-0 pointer-event-none flex items-center bg-[rgba(0,0,0,0.55)] justify-center left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen md:h-full"></div>

  Transition(name="slide")
      div#schedule-sidebar(v-show="props.isOpen" class="w-full lg:w-[30%] z-50  h-screen max-h-screen fixed top-0 right-0 bg-white rounded-l-xl px-4 py-4")
          div(class="flex w-full h-auto justify-between items-center")
            
            p(class="text-5xl font-bold w-full text-start") New
              p Reservation
            button.close-button(@click="$emit('close')" class="w-[4rem] h-[4rem] aspect-square  rounded-full border-2 border-violet-400 flex items-center justify-center")
                CloseIcon(class="w-full h-full  aspect-square text-gray-600")
          div(class="flex w-full h-auto mt-2 items-center space-x-4 justify-start text-gray-800 text-lg " )
            div(class="flex items-center space-x-1 aspect-square")
              
              CalendarIcon(class="w-full h-full ")
              p(@click="mainStore.setTimeslot(24,52)" class="underline leading-5") {{formattedDate}} <!-- date is formatted to look like: year tab. month tab. day -->
            div(class="flex items-center space-x-1")
              ClockIcon(class="w-full h-full ")
              p(class=" whitespace leading-5") {{props.timeslot? props.timeslot.start_time + '\t  to\t' + props.timeslot.end_time : ''}}
            p 
           
          hr(class="w-full h-0.4 bg-gray-200 mt-4")
          div(class="flex flex-col w-full h-auto gap-y-3 mt-8 ")
              div(class="w-full flex gap-x-6")
                div(class="flex relative w-1/2 h-auto justify-between ")
                  div(class="absolute -top-3 left-2 bg-white px-1 h-[1.2rem]  text-black") Delivery Addr.
                  select(class="w-full border-[0.1rem] rounded-md h-[2.5rem] p-2 border-black" v-model="newReservation.delivery_address")
                    option(value="1") MV
                    option(value="2") example
                    option(value="3") example
                    option(value="4") example
                    option(value="5") example
                div(class="flex relative w-1/2 h-auto justify-between ")
                  div(class="absolute -top-3 left-2 bg-white px-1 h-[1.2rem]  text-black") Supplier Classification
                  select(class="w-full border-[0.1rem] h-[2.5rem] rounded-md p-2 border-black" v-model="newReservation.supplier_classification")
                    option(value="1") EXPRESS
                    option(value="2") NORMAL
              div(class="flex relative w-full h-auto justify-between ")
                  div(class="absolute -top-3 left-2 bg-white px-1 h-[1.2rem]  text-black") Sub Contract
                  input(class="w-full border-[0.1rem] h-[2.5rem] rounded-md p-2 border-black" v-model="newReservation.sub_contract")
                
              h3(class="text-5xl font-bold text-gray-800 mt-12") Suppliers
              div(class="relative w-full h-auto justify-between space-y-3 overflow-y-scroll md:max-h-[calc(100vh-53rem)] max-h-[calc(60vh-20em)]")
               
                  div(v-for="supplier in newReservation.suppliers" :key="supplier.id"  class="w-full  h-auto border-[2px] border-violet-400 rounded-lg px-4 pb-3 pt-2  gap-x-4" )
                    div(class="flex w-full")
                      p(class="text-lg font-semibold") {{supplier.name}}
                      button.hide(@click="supplier.isVisible = !supplier.isVisible" class=" ml-3 w-[2rem] h-[2rem] rounded-full  flex items-center justify-center")
                        ArrowDownIcon(class="w-10 h-10 text-gray-500")
                      button.remove(@click="removeSupplier(supplier.id)" class=" ml-auto w-[2rem] h-[2rem] rounded-full  flex items-center justify-center")
                        CloseIcon(class="w-10 h-10 text-gray-500")
                    div(:class="!supplier.isVisible? 'supplier-visible  ' : 'supplier-hidden'" class="  w-full mt-4 space-x-4 ")
                      div(class="flex relative w-1/2 h-auto justify-between ")
                        div(class="absolute -top-3 left-2 bg-white px-1 h-[1.2rem]  text-black") Pallets count
                        input(class=" border-[0.1rem]  w-full h-[2.5rem] p-2 border-gray-600" v-model="supplier.pallets_count"  @keypress="onlyNumeric($event)")
                      div(class="flex relative w-1/2  h-auto justify-between ")
                        div(class="absolute -top-3 left-2 bg-white px-1 h-[1.2rem]  text-black") Cartoons count
                        input(class="border-[0.1rem] w-full h-[2.5rem] p-2 border-gray-600"  v-model="supplier.cartons_count" @keypress="onlyNumeric($event)")
                 
              div(class="flex items-center space-x-2 mt-4")
                button(@click="addSupplier" class="min-w-max p-4 flex items-center h-[2.5rem] bg-black text-white ") + Add Supplier
             

                v-select(
                  v-model="newSupplier"
                  :options="avalibleSupplierComputed"
                  
                  class="w-full h-full"
                  label="name")
                  <!-- OPTIONALS: :reduce="(supplier) => supplier.id" @option:selected="(supplier)" @option:deselected="(supplier)" -->
                 
              div(class="flex  flex-col w-full gap-y-3 h-auto justify-start items-start mt-12 ")
                h3(class="text-5xl font-bold text-gray-800 ") Comment
                textarea(class="w-full  h-[4rem] border-[2px] border-violet-400 outline-0 p-3" v-model="newReservation.comment")
              button(@click="book" class="w-full text-xl h-[3rem] bg-black text-white mt-auto") Book
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/User";

import CloseIcon from "~icons/ri/close-line";
import ArrowDownIcon from "~icons/ri/arrow-down-s-line";
import ClockIcon from "~icons/material-symbols/nest-clock-farsight-analog-outline-rounded";
import CalendarIcon from "~icons/mdi/calendar-week";
import { useMainStore } from "@/stores/Main";
import uniqid from "uniqid";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

const mainStore = useMainStore();
const userStore = useUserStore();

const onlyNumeric = ($event) => {
  let keyCode = $event.keyCode ? $event.keyCode : $event.which;
  if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
    // 46 is the keyCode for decimal point
    $event.preventDefault();
  }
};

const avalibleSuppliers = [
  {
    id: uniqid(),
    name: "Infineon",
    palletsCount: "",
    cartoonsCount: "",
  },
  {
    id: uniqid(),
    name: "Microchip",
    palletsCount: "",
    cartoonsCount: "",
  },
  {
    id: uniqid(),
    name: "Texas Instruments",
    palletsCount: "",
    cartoonsCount: "",
  },
  {
    id: uniqid(),
    name: "Vishay",
    palletsCount: "",
    cartoonsCount: "",
  },
  {
    id: uniqid(),
    name: "STMicroelectronics",
    palletsCount: "",
    cartoonsCount: "",
  },
  {
    id: uniqid(),
    name: "NXP Semiconductors",
    palletsCount: "",
    cartoonsCount: "",
  },
];

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  timeslots: {
    type: Array<any>,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  timeslot: {
    // 11-12
    type: Object,
    required: true,
  },
});

const formattedDate = computed(() => {
  const date = "2023-07-06";
  const [year, month, day] = date.split("-");

  return `${year}\t${month}\t${year}`;
});

const newReservation = ref({
  date: props.date,
  carrier: userStore.carrier.name,
  timeslot: props.timeslot,
  delivery_address: "",
  supplier_classification: "",
  sub_contract: "",
  weight: "",
  suppliers: [
    {
      id: uniqid(),
      name: "Infineon",
      pallets_count: "",
      cartons_count: "",
    },
  ],
  comment: "",
});

const avalibleSupplierComputed = computed(() => {
  return avalibleSuppliers.filter((supplier) => {
    return !newReservation.value.suppliers.find(
      (supplierInReservation) => supplierInReservation.name === supplier.name
    );
  });
});
const newSupplier = ref(avalibleSupplierComputed.value[0]);

const addSupplier = () => {
  const suppliers = newReservation.value.suppliers;
  if (
    suppliers.filter((supplier) => supplier.name === newSupplier.value.name)
      .length > 0
  )
    return;
  else newReservation.value.suppliers.push(newSupplier.value);
};

const removeSupplier = (supplierId: any) => {
  newReservation.value.suppliers = newReservation.value.suppliers.filter(
    (supplier) => supplier.id !== supplierId
  );
};
console.log("timeslot: ");
console.log(props.timeslot);
const is_booking = ref(false);

const book = async () => {
  is_booking.value = true;

  // check if all suppliers have cartons count and pallets count
  const suppliers = newReservation.value.suppliers;
  let suppliersWithErrors = [];
  suppliers.forEach((supplier) => {
    if (supplier.cartons_count === "" || supplier.pallets_count === "") {
      suppliersWithErrors.push(supplier.name);
    }
  });
  if (suppliersWithErrors.length > 0) {
    alert(
      `Please fill in the cartons count and pallets count for the following suppliers: ${suppliersWithErrors.join(
        ", "
      )}`
    );
    is_booking.value = false;
    return;
  }

  const config = useRuntimeConfig();
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Host: `${config.FETCH_HOST}`,
      Authorization: `Token ${userStore.getToken}`,
    },
    body: JSON.stringify({
      new_reservation: newReservation.value,
    }),
  } as any;

  const response = await fetch(
    `${config.API_URL}api/v1/reserve_timeslot`,
    options
  );

  is_booking.value = false;
  const data = await response.json();
  let status = response.status;

  if (status === 200) {
    emit("closeSidebar");
    // clear form
    newReservation.value = {
      date: props.date,
      carrier: userStore.carrier.name,
      timeslot: props.timeslot,
      delivery_address: "",
      supplier_classification: "",
      sub_contract: "",
      weight: "",
      suppliers: [
        {
          id: uniqid(),
          name: "Infineon",
          pallets_count: "",
          cartons_count: "",
        },
      ],
      comment: "",
      isVisible: true,
    };
  } else {
    alert(data.message);
  }
};

const emit = defineEmits(["closeSidebar"]);
</script>

<style lang="scss">
.vs--searchable .vs__dropdown-toggle {
  height: 2.7rem;
}
</style>
<style lang="scss" scoped>
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

.supplier-visible {
  display: flex;
}

.supplier-hidden {
  display: none;
}

@keyframes showSidebar {
  from {
    transform: translateY(-40%);
  }

  to {
    transform: translateY(20%);
  }
}

@keyframes hideSidebar {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0%);
  }
}
</style>
