<template lang="pug">
div.settings(class="w-full h-full flex flex-col  px-4")
    LazyUserEditModal(@close="is_edit_modal = false" :isOpen="is_edit_modal" :user="editingUser")
    NuxtLink(to="/dashboard" class="text-blue-700 hover:underline flex font-semibold  items-center space-x-2") 
        ArrowIcon(class=" rotate-180")
        span Back to Dashboard
    
    h1(class="text-3xl text-black font-semibold mt-4 flex space-x-3 items-center") 
        TruckIcon(class="h-8 w-8 text-blue-700")
        p Carriers
    p(class="mt-2 text-gray-800 w-3/4") Find all your carrier and Arrow employee contacts in one place with our convenient 'accounts' page. Stay connected and manage your network with ease. Explore our directory of contacts to simplify communication streamline and add or activate new users .
    hr(class="w-full border-gray-300 my-4 ")
    div#accounts-menu(class="w-full space-x-2  h-[3rem]  items-center flex justify-start ")
        ButtonMenu(v-for="item in menu" :text="item.text"  :is_active='item.is_active' @setActive="setActive(item)")
    div(class="bg-white w-full rounded-lg h-full p-3 border-gray-200 border-2 -mt-[0.3rem] ")
        div(class="w-full flex  ")
            div#shipments-menu-sorting(class="  px-2 flex items-center justify-center space-x-2 w-auto h-[2.5rem] rounded-lg bg-white text-black")
                p(class="text-sm") Sort by:
                select#sorting(class="w-auto h-[2.5rem] focus:border-0 focus:outline-none text-black")
                    option(value="newest") Newest
                    option(value="oldest") Oldest
            div#shipments-menu-sorting(class="  px-2 flex items-center justify-center space-x-2 w-auto h-[2.5rem] rounded-lg bg-white text-black")
                p(class="text-sm") Filter:
                select#filter(class="w-auto h-[2.5rem] focus:border-0 focus:outline-none text-black" v-model="choosedFilter")
                    option(value="") All
                    option(v-for="carrier in filters" :value="carrier.name") {{ carrier.name }}
            Searchbar(class="ml-3 h-[2.5rem] w-1/3" :datepicker="false" placeholder="Search by name or email" v-model='searchValue')
            button(class=" border-2 border-gray-200 h-[2.5rem] rounded-md px-6 py-1 ml-auto font-semibold hover:bg-blue-400 hover:text-white mb-2") Add Account
        div(class="rounded-lg  border-2 relative")
            table(class=" table-auto w-full") <!--  fixed/auto -->
                thead(class="border-b-2 border-gray-200")
                    tr  
                        th(class="px-4 py-2 border-r bg-gray-100 w-[6%]")
                        th(class="px-4 py-2 border-r w-[18%]") Carrier Name
                        th(class="px-4 py-2 border-r w-[30%]") Email
                        th(class="px-4 py-2 border-r w-[20%]") is activated
                        th(class="px-4 py-2 w-[10%]") Actions
                tbody(class="")
                    tr(v-if="filteredCarriers.length <=0" id="end-of-list") 
                      
                    tr(v-else v-for="(account, index) in filteredCarriers" :key="account" class="border-t " :id="detectEndOfList(index)")
                        td(class="border-r px-3 py-2 text-center bg-gray-100 ") {{ account.id }}
                            
                        td(class="border-r px-4 py-2 flex space-x-2") 
                            img(class="w-8 h-8 rounded-full" :src="account.avatar")
                            p {{ account.name }}
                        td(class="border-r px-4 py-2") {{ account.email }}
                        td(class="border-r px-4 py-2") 
                          button.activate-account(v-if="account.is_activated && canUserActivate(account)" @click="_activateCarrier(account)" class="border-2 border-gray-200 rounded-md px-6 py-1 font-semibold hover:bg-blue-400 hover:text-white") Deactivate
                          button.activate-account(v-if=" !account.is_activated && canUserActivate(account)" @click="_activateCarrier(account)" class="border-2 border-gray-200 rounded-md px-6 py-1 font-semibold hover:bg-blue-400 hover:text-white") Activate
                        td(class=" px-4 py-2   gap-x-2") 
                          div(class="flex  ")
                           
                            button(v-if="canUserEdit(account)" @click="editUser(account)" class="border-2 border-gray-200 rounded-md px-6 py-1 font-semibold hover:bg-blue-400 hover:text-white") Edit
    div.spinner(v-if="is_fetching_accounts === true" class="absolute bottom-[4rem] z-50 right-[4rem] flex-col  text-lg w-auto h-auto flex items-center justify-center")
      div(class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900")
      p(class="mt-2") Fetching Data ...
    ModalSaving(:isOpen="is_modal_open" @close="is_modal_open = false" )
</template>

<script setup lang="ts">
import ArrowIcon from "~icons/material-symbols/arrow-right-alt-rounded";
import TruckIcon from "~icons/ph/truck";
import { useUserStore } from "@/stores/User";

const userStore = useUserStore();
definePageMeta({
  middleware: ["auth-arrow-employee"],
});

const is_fetching_carriers = ref(false);
const is_modal_open = ref(false);
const is_edit_modal = ref(false);
const editingUser = ref(null);

const choosedFilter = ref();

const filteredCarriers = computed(() => {
  console.log(menu.value);
  let _filteredCariers: any = null;
  if (menu.value[0].is_active) {
    _filteredCariers = carriers.value;
  } else if (menu.value[1].is_active) {
    // carriers
    _filteredCariers = carriers.value.filter(
      (carrier: any) => carrier.is_activated === true
    );

    if (choosedFilter.value) {
      _filteredCariers = _filteredCariers.filter(
        (carrier: any) =>
          carrier.member.carrier_family.name === choosedFilter.value
      );
    }
  } else if (menu.value[2].is_active) {
    _filteredCariers = carriers.value.filter(
      (carrier: any) => carrier.is_activated === false
    );
  }

  // filter by filters
  console.log(_filteredCariers);
  return _filteredCariers;
});

interface MenuItem {
  text: string;
  is_active: boolean;
}

const menu: Ref<MenuItem[]> = ref([
  {
    text: "All",
    is_active: true,
  },
  {
    text: "activated",
    is_active: false,
  },
  {
    text: "Not activated",
    is_active: false,
  },
]);
const carriers = ref();
carriers.value = await getCarriers();
carriers.value = await carriers.value.carriers;

const setActive = (item: MenuItem) => {
  menu.value.forEach((element) => {
    element.is_active = false;
  });
  item.is_active = true;
};
const detectEndOfList = (index: number) => {
  if (index === filteredCarriers.value.length - 1) {
    return "end-of-list";
  }
};

const page = ref(1);

const canUserActivate = (account: any) => {
  return (
    (userStore.accountType === "carrier" &&
      account.is_carrier &&
      userStore.role.shortname === "manager") ||
    userStore.accountType === "arrow-employee"
  );
};

const canUserEdit = (account: any) => {
  return (
    (userStore.accountType === "carrier" && account.is_carrier) ||
    userStore.accountType === "arrow-employee"
  );
};

const _activateCarrier = async (carrier: any) => {
  console.log(userStore.getToken);
  const response = await activateCarrier(carrier.id, userStore.getToken);

  if (response) {
    if (response.status === "carrier activated") {
      carrier.is_activated = true;
    } else if (response.status === "carrier deactivated") {
      carrier.is_activated = false;
      console.log(response);
    }
  }

  console.log(response);
};

const searchValue = ref("");
</script>

<style lang="scss"></style>
