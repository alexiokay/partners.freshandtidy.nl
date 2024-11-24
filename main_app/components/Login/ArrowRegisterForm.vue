<template lang="pug">
form(class="w-full h-full rounded-xl px-8 pt-6 pb-8 mb-4")
            h1(class="mb-7 text-3xl  font-itim -ml-2") Register
            
            
            
            h2(class="mb-4 text-xl font-itim mt-6") Arrow's account information
            div(class="flex w-full items-center gap-x-6 ")
              div(class="w-1/2 flex flex-col")
                input#register-first-name(v-model="firstName" class="w-full h-10 border-2 border-gray-300 rounded-lg px-2" type="text", placeholder="First Name")
                p(class="text-xs text-red-700 mt-2 mb-2") this field is required. Please fill in the data..
              div(class="w-1/2 flex flex-col")
                input#register-last-name(v-model="lastName" class="w-full h-10 border-2 border-gray-300 rounded-lg px-2" type="text", placeholder="Last Name")
                p(class="text-xs text-red-700 mt-2 mb-2") this field is required. Please fill in the data..
            div(class="flex w-full items-center gap-x-6 ")
              div(class="w-1/2  flex flex-col")
                input#register-email(v-model="email" class="w-full h-10 border-2 border-gray-300 rounded-lg px-2" type="text", placeholder="email")
                p(class="text-xs text-red-700 mt-2 mb-2") this field is required. Please fill in the data.
              div(class="w-1/2  flex flex-col")
                input#register-phone(v-model="userPhone" class="w-full h-10 border-2 border-gray-300 rounded-lg px-2" type="text", placeholder="Phone number")
                p(class="text-xs text-red-700 mt-2 mb-2") this field is required. Please fill in the data.
            input#register-employeeId(v-model="employeeId" class="w-full h-10 border-2 border-gray-300 rounded-lg px-2" type="text", placeholder="Employee Id")
            p(class="text-xs text-red-700 mt-2") Enter your's arrow employee id.
            
            div.password(class="w-full relative")
                p(class="font-roboto") Password
                input.password-input(@keydown.enter="registerArrow" type="password" v-model="password1" class="w-full h-10 border-2 border-gray-300 rounded-lg px-2" placeholder="Password")
                button(type="button" class="absolute right-2 top-1/2  bg-white px-2 rounded-md ", id="password-toggle")
                    HideIcon(v-if="!is_password_visible" class="w-6 h-6")
                    ShowIcon(v-else class="w-6 h-6")
            p(class="text-xs text-red-700 mt-2") Enter password it should have at least 8 characters.
            p(class="text-xs text-red-700 mt-2 mb-2") this field is required. Please fill in the data..

            
            input.password-input(v-model="password2" class="w-full h-10 border-2 border-gray-300 rounded-lg px-2" type="password", placeholder="Password")
            p(class="text-xs text-red-700 mt-2") Enter password again.
            
            
           
           
              
             
            
            div#agreements(class="flex flex-col w-full h-auto space-y-4 mt-4")
                p(class="text-base text-black font-semibold") Formal consents
                div(class="flex items-center justify-start w-full h-auto")           
                    input#agreement(@click="setAllChecked" :checked="areAllChecked" type="checkbox", class="form-checkbox h-[1.2rem] w-[1.2rem] text-gray-600")
                    p( class="text-sm w-5/6 text-black-700 ml-2 font-semibold") Select all
                div(class="flex items-center justify-start w-full h-auto")           
                    input#agreement(@click="checkAllChecked($event)" type="checkbox", :checked="areAllChecked "  class="form-checkbox h-[1.2rem] w-[1.2rem] text-gray-600")
                    p(class="text-xs w-5/6 text-gray-700 ml-2")  I accept the store's terms and conditions *
                div(class="flex items-center justify-start w-full h-auto")           
                    input#agreement(@click="checkAllChecked($event)" type="checkbox", :checked="areAllChecked" class="form-checkbox h-[1.2rem] w-[1.2rem] text-gray-600")
                    p(class="text-xs w-5/6 text-gray-700 ml-2") I want to receive information about current offers and promotions by e-mail

                div(class="flex items-center justify-start w-full h-auto")           
                    input#agreement(@click="checkAllChecked($event)" type="checkbox",:checked="areAllChecked"  class="form-checkbox h-[1.2rem] w-[1.2rem] text-gray-600")
                    p(class="text-xs w-5/6 text-gray-700 ml-2") I want to receive an offer tailored to my needs
                        
            button.bg-blue-500(@click="registerArrow" class="hover:bg-blue-700 mt-4 text-white font-base text-sm py-[0.6rem] w-full px-4 rounded-full focus:outline-none focus:shadow-outline" type="button")
                p Register
</template>

<script setup lang="ts">
import HideIcon from "~icons/bxs/hide";
import ShowIcon from "~icons/bxs/show";

import { watch, ref } from "vue";
import { useUserStore } from "@/stores/User";

const userStore = useUserStore();
const router = useRouter();
const is_password_visible = ref(false);

const areAllChecked = ref(false);
const config = useRuntimeConfig();
const email = ref("");
const password1 = ref("");
const password2 = ref("");
const lastName = ref("");
const firstName = ref("");
const userPhone = ref("");
const employeeId = ref("");
const checkAllChecked = (event: any) => {
  const agreements = document.querySelectorAll(
    "#agreements input"
  ) as NodeListOf<HTMLInputElement>;

  let agreementsChecked = 0;
  agreements.forEach((agreement) => {
    if (agreement.checked === true && agreement !== agreements[0])
      agreementsChecked++;
  });

  console.log("agreementsChecked", agreementsChecked);
  if (agreementsChecked === agreements.length - 1) {
    console.log("all checked");

    agreements[0].checked = true;
  } else if (agreementsChecked !== agreements.length) {
    agreements[0].checked = false;
    console.log("not all checked");
  } else {
    console.log("all checked");

    agreements[0].checked = true;
  }
};
const setAllChecked = () => {
  let agreementsChecked = 0;
  const agreements = document.querySelectorAll(
    "#agreements input"
  ) as NodeListOf<HTMLInputElement>;
  agreements.forEach((agreement) => {
    if (agreement.checked === true && agreement !== agreements[0])
      agreementsChecked++;
  });

  if (agreementsChecked < agreements.length - 1) {
    areAllChecked.value = true;
    agreements.forEach((agreement) => {
      if (agreement !== agreements[0]) agreement.checked = true;
    });
  } else {
    agreements.forEach((agreement) => {
      if (agreement !== agreements[0]) agreement.checked = false;
    });
  }
};

onMounted(() => {
  const passwordInput = document.querySelectorAll(
    ".password-input"
  ) as NodeListOf<HTMLInputElement>;
  const passwordToggle = document.getElementById(
    "password-toggle"
  ) as HTMLButtonElement;
  passwordToggle.addEventListener("click", () => {
    passwordInput.forEach((element) => {
      if (element.type === "password") {
        element.type = "text";
        is_password_visible.value = true;
      } else {
        element.type = "password";
        is_password_visible.value = false;
      }
    });
  });
});

const registerArrow = async () => {
  await fetch(`${config.API_URL}auth/registration/arrow`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
      Host: `${config.FETCH_HOST}`,
    },
    body: JSON.stringify({
      email: `${email.value}`,
      password1: `${password1.value}`,
      password2: `${password2.value}`,
      Last_Name: `${lastName.value}`,
      First_Name: `${firstName.value}`,
      User_Phone: `${userPhone.value}`,
      Employee_Id: `${employeeId.value}`,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.non_field_errors) {
        alert(data.non_field_errors[0]);
        return;
      }
      if (data.email) {
        alert(data.email[0]);
        return;
      }
      console.log(data);
      userStore.setUser(data);

      router.push("/dashboard");
      //console.log("saved: ", userStore.getUser);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style lang="scss"></style>
