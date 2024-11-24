<template lang="pug">
div(class="w-full flex flex-col px-3 md:px-4 lg:px-0 justify-start items-start")
    div#shipment-header(class="w-full flex flex-col")
        NuxtLink(to="/dashboard/shipments" class="text-blue-700 hover:underline flex font-semibold  items-center space-x-2") 
          ArrowIcon(class=" rotate-180")
          span Back to Shipments
        p( class="text-gray-500")  Shipments / 
            span(class="text-violet-600") {{ shipment_id }}
        div(class="flex items-center space-x-3 h-auto mt-2")
            h1(class="text-xl  font-semibold") {{ shipment?.delivery_address }}
            p(class="text-gray-500 font-semibold text-xl")  {{ shipment?.Timeslot?.date }}, {{ shipment?.Timeslot?.start_time }} - {{ shipment?.Timeslot?.end_time }}
    div#shipment-body(class="w-full flex flex-wrap gap-x-4 mt-4")
        
        div#shipment-body-left(class="flex flex-col w-[calc(50%-0.5rem)] h-auto  bg-white rounded-lg space-y-4 p-4")
               
                p(class="text-xl font-semibold w-full") Shipment Details 
                    
                div(class="flex")
                    div(class="flex flex-col justify-start items-start w-full h-auto space-y-2")
                        p(class="text-sm text-gray-500") Shipment ID
                        p(class="text-lg font-semibold") {{ shipment_id }}

                    div(class="flex flex-col justify-start items-start w-full h-auto space-y-2")
                        p(class="text-sm text-gray-500") Shipment type
                        p(class="text-lg font-semibold") Air
                div(class="flex")
                   
                    div(class="flex flex-col justify-start items-start w-full h-auto space-y-2")
                        p(class="text-sm text-gray-500") Shipment destination
                        p(class="text-lg font-semibold") {{ shipment?.delivery_address }}
                    div(class="flex flex-col justify-start items-start w-full h-auto space-y-2")
                        p(class="text-sm text-gray-500") Shipment weight
                        p(class="text-lg font-semibold") {{ shipment?.weight }}
                div(class="flex")
                    div(class="flex flex-col justify-start items-start w-full h-auto space-y-2")
                        p(class="text-sm text-gray-500") Pallets count
                        
               
                        p( class="text-lg font-semibold") {{ shipment?.pallets_count }}
                        
                    div(class="flex flex-col justify-start items-start w-full h-auto space-y-2")
                        p(class="text-sm text-gray-500") Cartoons count
          
                        p( class="text-lg font-semibold") {{ shipment?.cartons_count}}
                       
        div#shipment-body-right(class="flex flex-col w-[calc(50%-0.5rem)] h-auto  rounded-lg space-y-4")
            div(class="flex flex-col justify-start items-start w-full h-auto space-y-2 p-4 bg-white rounded-lg")
                p(class="text-xl font-semibold") Status: 
                    span(class="text-violet-600") {{shipment?.status }} {{ shipment?.status === 'CARRIER_APPROVED' ? '/ ARROW_APPROVED ' : ''}}
                div(class="flex justify-start w-full items-center h-auto space-x-4")
                    ButtonMenu2(v-if="editMode" @click="isConfirmationModalOpen = true;" text="Save"  class="p-5 text-xl bg-green-500 text-white")
                    ButtonMenu2(v-if="!editMode && ((shipment.status === 'ARROW_APPROVED' || shipment.status==='ARROW_CHANGED') && userStore.accountType === 'carrier'  || (shipment.status === 'New' || shipment.status === 'CARRIER_CHANGED') && userStore.accountType === 'arrow-employee' )" @click="isConfirmationModalOpen = true, modalMode='status'" text="Accept" :active="true" class="p-5 text-xl")
                    ButtonMenu2(v-if="!editMode && (shipment.status !== 'ARROW_APPROVED' && shipment.status !== 'CARRIER_APPROVED')" @click="editMode = !editMode, modalMode='update'" text="Change" :active="true" class="p-5 text-xl bg-yellow-500")
                    ButtonMenu2(v-if="editMode" @click="(editMode = false, resetTempSuppliers())" text="Cancel"  class="p-5 text-xl bg-red-500 text-white")
                    <!-- add optiopn to change reservatioo nafter arrow approves it and then when carrier approve make it uneditable? -->
            div(class="flex flex-col justify-start items-start w-full h-auto space-y-2 p-4 bg-white rounded-lg")
                p(class="text-xl font-semibold") Reserved by:  
                div(class="flex flex-col justify-start items-start w-full h-auto space-y-2")
                    p(class="text-violet-600 hover:cursor-pointer") {{ shipment?.reserved_by}}

            div(class="flex flex-col justify-start items-start w-full h-auto  p-4 bg-white rounded-lg")
                div(class="flex  items-center  justify-center space-x-4")
                  p(class="text-xl font-semibold mb-3") Suppliers:
                  button.addSupplier(v-if="editMode" @click="" class="w-auto px-4 sm:h-10 h-12  bg-violet-600 text-white  text-base md:text-xl font-semibold rounded-lg") Add Supplier
                div(v-for="(supplier, index) in shipment?.suppliers.suppliers" :key="supplier" class=" flex flex-col justify-start items-start w-auto h-auto space-y-2 ")
                    p(class=" font-semibold ") {{ supplier.supplier.name }}
                    div(class="ml-2 flex justify-start items-center space-x-4")
                      p(v-if="!editMode") pallets count: {{ supplier.pallets_count }}
                      input(v-else type="text" v-model="TempSupplierData[index].pallets_count" class="w-[90%] h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600" )
                      p(v-if="!editMode") cartons count: {{ supplier.cartons_count }}
                      input(v-else type="text" v-model="TempSupplierData[index].cartons_count" class="w-[90%] h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600" )
                    hr(class="w-full")
                
        div#shipment-body-s(class="flex flex-col w-full mt-[1rem] h-auto  bg-white rounded-lg space-y-4 p-4")
          p(class="text-xl font-semibold h-[10rem]") Shipment History
          p .....

                   
    <!-- If user is the same which made the reservation and reservation is approved by arrow then show this div -->
    
    ModalApproved#confirmationModal(:isOpen="isConfirmationModalOpen" @close="isConfirmationModalOpen = false" @update="saveReservation" @confirm="accceptReservation" :mode="compModalMode" class="w-1/2 h-1/2")
    

</template>

<script setup lang="ts">
import ArrowIcon from "~icons/material-symbols/arrow-right-alt-rounded";
import { useMainStore } from "@/stores/Main";
import { useUserStore } from "@/stores/User";
const userStore = useUserStore();
const mainStore = useMainStore();
const router = useRouter();
const route = useRoute();
const config = useRuntimeConfig();
const shipment_id = ref(route.path.split("/")[3]);

const editMode = ref(false);

console.log(shipment_id.value);

let shipment: any = null;

const modalMode = ref("status");
const compModalMode = computed(() => {
  return modalMode.value;
});
const isConfirmationModalOpen = ref(false);
const isCarrierModalOpen = ref(true);
// const isCarrierModalOpenComputed = computed(() => {
//   if (
//     userStore.carrier.name === shipment.value.carrier.name &&
//     shipment.value.status === "ARROW_APPROVED"
//   ) {
//     isCarrierModalOpen.value = true;
//     return isCarrierModalOpen.value;
//   } else {
//     return false;
//   }
// });

const fetchShipment = async () => {
  const options = {
    method: "GET",
    headers: {
      Host: `${config.FETCH_HOST}`,
      Authorization: `Token ${userStore.getToken}`,
    },
  } as any;

  const _shipment = await fetch(
    `${config.API_URL}api/v1/get_reservation/${shipment_id.value}`,
    options
  )
    .then((res) => res.json())
    .then((data) => {
      mainStore.addReservation(data);
      return data;
    });
  return _shipment;
};

shipment = ref(mainStore.getReservation(Number(shipment_id.value)));

if (!shipment.value) {
  try {
    console.log("from api");
    shipment = await fetchShipment();
    // set shipment computed to be able to update
    shipment = computed(() => {
      return mainStore.reservations.find(
        (reservation) => reservation.id === Number(shipment_id.value)
      );
    });
  } catch (error) {
    router.push("/dashboard/shipments");
    console.log(error);
  }
} else {
  console.log("from store");

  // set shipment computed to be able to update
  shipment = computed(() => {
    return mainStore.reservations.find(
      (reservation) => reservation.id === Number(shipment_id.value)
    );
  });
}

// object needed for v-model to work with web socket
const changingValues = computed(() => {
  //setter and getter
  return {
    get pallets_count() {
      return shipment.value.pallets_count;
    },
    set pallets_count(value) {
      shipment.value.pallets_count = value;
    },
    get cartons_count() {
      return shipment.value.cartons_count;
    },
    set cartons_count(value) {
      shipment.value.cartons_count = value;
    },
  };
});
const accceptReservation = () => {
  console.log("accepting");

  let status = "";
  if (userStore.accountType === "arrow-employee") {
    status = "ARROW_APPROVED";
  } else if (userStore.accountType === "carrier") {
    status = "CARRIER_APPROVED";
  }

  fetch(
    `${config.API_URL}api/v1/accept_timeslot_reservation/${shipment_id.value}`,
    useHeaders("PUT", {
      status: status,
    })
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      isConfirmationModalOpen.value = false;
    });
};
const saveReservation = () => {
  let supplierData = JSON.parse(JSON.stringify(TempSupplierData.value));

  fetch(
    `${config.API_URL}api/v1/update_timeslot_reservation/${shipment_id.value}`,
    useHeaders("PUT", {
      suppliers: supplierData,
    })
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      isConfirmationModalOpen.value = false;
      editMode.value = false;
    });

  // TODO: save each supplier data from TempSupplierData

  console.log(supplierData);
};

const TempSupplierData = ref(
  shipment.value.suppliers.suppliers.map((supplier: any) => {
    return {
      ...supplier,
      supplier: supplier.supplier.name,
    };
  })
);

const resetTempSuppliers = () => {
  TempSupplierData.value = shipment.value.suppliers.suppliers.map(
    (supplier: any) => {
      return {
        ...supplier,
        supplier: supplier.supplier.name,
      };
    }
  );
};
</script>

<style lang="scss"></style>
