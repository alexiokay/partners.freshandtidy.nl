<template lang="pug">
div.settings(class="w-full h-full flex flex-col  px-4")
    LazyUserEditModal(@close="is_edit_modal = false" :isOpen="is_edit_modal" :user="editingUser")
    NuxtLink(to="/dashboard" class="text-blue-700 hover:underline flex font-semibold  items-center space-x-2") 
        ArrowIcon(class=" rotate-180")
        span Back to Dashboard
    
    h1(class="text-3xl text-black font-semibold mt-4 flex space-x-3 items-center") 
        AccountsIcon
        p Accounts
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
            Searchbar(class="ml-3 h-[2.5rem] w-1/3" :datepicker="false" placeholder="Search by name or email")
            button(class=" border-2 border-gray-200 h-[2.5rem] rounded-md px-6 py-1 ml-auto font-semibold hover:bg-blue-400 hover:text-white mb-2") Add Account
        div(class="rounded-lg  border-2 relative")
            table(class=" table-auto w-full") <!--  fixed/auto -->
                thead(class="border-b-2 border-gray-200")
                    tr  
                        th(class="px-4 py-2 border-r bg-gray-100 w-[6%]")
                        th(class="px-4 py-2 border-r w-[18%]") Name
                        th(class="px-4 py-2 border-r w-[30%]") Email
                        th(class="px-4 py-2 border-r w-[20%]") is activated
                        th(class="px-4 py-2 w-[10%]") Actions
                tbody(class="")
                    tr(v-if="filteredAccounts.length <=0" id="end-of-list") 
                      
                    tr(v-else v-for="(account, index) in filteredAccounts" :key="account" class="border-t  " :id="detectEndOfList(index)")
                        td(class="border-r px-3 py-2 text-center bg-gray-100 ") {{ account.id }}
                            
                        td(class="border-r px-4 py-2 flex space-x-4 items-center text-lg ") 
                            img(class="w-12 h-12  rounded-full object-cover" :src="account.avatar")
                            p {{ account.first_name }} 
                              span {{ account.last_name }}
                        td(class="border-r px-4 py-2 text-lg") {{ account.email }}
                        td(class="border-r px-4 py-2") 
                          button.activate-account(v-if="account.is_activated && canUserActivate(account)" @click="_activateAccount(account)" class="border-2 border-gray-200 rounded-md px-6 py-1 font-semibold hover:bg-blue-400 hover:text-white") Deactivate
                          button.activate-account(v-if=" !account.is_activated && canUserActivate(account)" @click="_activateAccount(account)" class="border-2 border-gray-200 rounded-md px-6 py-1 font-semibold hover:bg-blue-400 hover:text-white") Activate
                        td(class=" px-4 py-2   gap-x-2") 
                          div(class="flex  ")
                            button(v-if="canUserEdit(account)" @click="editUser(account)" class="border-2 border-gray-200 rounded-md px-6 py-1 font-semibold hover:bg-blue-400 hover:text-white") Edit
                            button.message( class="border-2 ml-auto border-gray-200 rounded-md px-6 py-1 font-semibold hover:bg-blue-400 hover:text-white") Message
    div.spinner(v-if="is_fetching_accounts === true" class="absolute bottom-[4rem] z-50 right-[4rem] flex-col  text-lg w-auto h-auto flex items-center justify-center")
      div(class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900")
      p(class="mt-2") Fetching Data ...
    ModalSaving(:isOpen="is_modal_open" @close="is_modal_open = false" )
</template>

<script setup lang="ts">
import ArrowIcon from "~icons/material-symbols/arrow-right-alt-rounded";
import AccountsIcon from "~icons/mdi/accounts";
import { useUserStore } from "@/stores/User";
definePageMeta({
  // or middleware: 'auth'
});
const editingUser = ref();
const is_edit_modal = ref(false);
const is_fetching_accounts = ref(false);
const editUser = (user: any) => {
  is_edit_modal.value = true;
  editingUser.value = user;
};
const config = useRuntimeConfig();
const userStore = useUserStore();
const canUserEdit = (account: any) => {
  return (
    (userStore.accountType === "carrier" && account.is_carrier) ||
    userStore.accountType === "arrow-employee"
  );
};

const canUserActivate = (account: any) => {
  return (
    (userStore.accountType === "carrier" &&
      account.is_carrier &&
      userStore.role.shortname === "manager") ||
    userStore.accountType === "arrow-employee"
  );
};

const options = {
  method: "GET",
  headers: {
    Host: `${config.FETCH_HOST}`,
    Authorization: `Token ${userStore.getToken}`,
  },
};
const page = ref(1);
const getAccounts = async () => {
  is_fetching_accounts.value = true;
  const accounts = await fetch(
    `${config.API_URL}api/v1/users/?page=${page.value}`,
    options
  )
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    });
  is_fetching_accounts.value = false;
  return await accounts;
};
const accounts = ref(await getAccounts());

const filteredAccounts = computed(() => {
  let _filteredAccounts: any = null;
  if (menu.value[0].is_active) {
    _filteredAccounts = accounts.value;
  } else if (menu.value[1].is_active) {
    // carriers
    _filteredAccounts = accounts.value.filter(
      (account: any) => account.is_carrier === true
    );

    if (choosedFilter.value) {
      _filteredAccounts = _filteredAccounts.filter(
        (carrier: any) =>
          carrier.member.carrier_family.name === choosedFilter.value
      );
    }
  } else if (menu.value[2].is_active) {
    _filteredAccounts = accounts.value.filter(
      (account: any) => account.is_ArrowEmployee === true
    );
  }

  // filter by filters

  return _filteredAccounts;
});

interface MenuItem {
  text: string;
  is_active: boolean;
}
const setActive = (item: MenuItem) => {
  menu.value.forEach((element) => {
    element.is_active = false;
  });
  item.is_active = true;
};
const menu: Ref<MenuItem[]> = ref([
  {
    text: "All users",
    is_active: true,
  },

  {
    text: "Carriers",
    is_active: false,
  },
]);
const carriers = ref();
carriers.value = await getCarriers();

const choosedFilter = ref();
const filters = computed(() => {
  // all users
  if (menu.value[0].is_active) {
    return [];
  }

  if (menu.value[1].is_active) {
    // carriers
    return carriers.value.carriers.filter((carrier: any) => {
      return carrier.is_activated === true;
    });
  } else if (menu.value[2].is_active) {
    // Arrow
    return [];
  }
});
if (userStore.getAccountType === "arrow-employee") {
  menu.value.push({
    text: "Arrow",
    is_active: false,
  });
}

const detectEndOfList = (index: number) => {
  if (index === filteredAccounts.value.length - 1) {
    return "end-of-list";
  }
};

const _activateAccount = async (account: any) => {
  console.log(userStore.getToken);
  const response = await activateAccount(account.email, userStore.getToken);

  if (response) {
    if (response.status === "user activated") {
      account.is_activated = true;
    } else if (response.status === "user deactivated") {
      account.is_activated = false;
      console.log(response);
    }
  }

  console.log(response);
};

const is_modal_open = ref(false);

onMounted(() => {
  const endOfList = ref(document.getElementById("end-of-list") as HTMLElement);

  watch(
    () => accounts.value,
    () => {
      observer.unobserve(endOfList.value);
      endOfList.value = document.getElementById("end-of-list") as HTMLElement;
      observer.observe(endOfList.value);
      console.log("set new target for observer");
    }
  );

  watch(
    () => (menu.value[0].is_active, menu.value[1].is_active),
    () => {
      setTimeout(() => {
        observer.unobserve(endOfList.value);
        endOfList.value = document.getElementById("end-of-list") as HTMLElement;
        observer.observe(endOfList.value);
        console.log("set new target for observer");
      }, 200);
    }
  );

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        page.value++;
        getAccounts().then((data) => {
          accounts.value = [...accounts.value, ...data];
        });
        console.log("end of list detected");
      }
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    }
  ) as IntersectionObserver;

  observer.observe(endOfList.value);
});
</script>

<style lang="scss"></style>
