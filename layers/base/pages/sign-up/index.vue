<template lang="pug">
div(class=" w-full h-auto min-h-screen flex flex-col lg:flex-row  relative  overflow-visible")
  div(class="lg:w-[45%]  w-full h-full flex flex-col px-6 md:px-0 xl:px-[1rem] 3xl:px-[5rem] items-center ")

          
    div(class="flex  flex-col md:px-8 items-center mt-6 lg:mt-[8rem] gap-y-6 w-full h-auto justify-start mb-12  text-xl")
      p(class="text-5xl font-bold font-publicsans") Welcome! 
      p(class="text-xl text-gray-800") Let's get started by creating your account.
      div(class="flex gap-y-6  flex-col lg:flex-row w-full items-center mt-8 lg:mt-16 gap-x-4 ")
        div(class=" w-full text-xl flex flex-col gap-y-1 lg:gap-y-3 ")
            p(class="mb-2 font-bold ") First Name
            LoginV2Input(v-model="firstName" placeholder="First Name" type="fname")
        div(class=" w-full text-xl flex flex-col gap-y-1 lg:gap-y-3 ")
            p(class="mb-2 font-bold ") Last Name
            LoginV2Input(v-model="LastName" placeholder="Last Name" type="lname")
      div.email(class=" w-full text-xl flex flex-col gap-y-1 lg:gap-y-3 ")
        p(class="  font-bold ") Email
        LoginV2Input( v-model="email" placeholder="Email" type="email")   
        //- @keydown.enter="login"
      div(class=" w-full text-xl flex flex-col gap-y-1 lg:gap-y-3 ")
          p(class="mb-2 font-bold ") Phone Number
          LoginV2Input( v-model="phoneNumber" type="phone" placeholder="Phone Number")   
      div(class=" w-full text-xl flex flex-col gap-y-1 lg:gap-y-3 ")
          p(class="mb-2 font-bold ") Password
          LoginV2Input( v-model="password1" type="password" placeholder="Password")        
      div.password(class="w-full   text-xl flex flex-col gap-y-1 lg:gap-y-3")
        p(class=" font-bold") Password
        div(class="relative")
          LoginV2Input(@keydown.enter="login" v-model="password" type="password" placeholder="Password" id="password-input") 
          button(type="button" class="absolute right-2 top-1/2 transform -translate-y-1/2   bg-white px-2 rounded-md ", id="password-toggle")
              HideIcon(v-if="!is_password_visible" class="w-6 h-6")
              ShowIcon(v-else class="w-6 h-6")
      button.login-button(@click="login" class="w-full h-[4rem] text-xl rounded-full bg-black text-white ") Login
      div(class="flex flex-row w-full justify-between items-center mt-6 text-lg")
        
        h4.between-lines
          span or continue with 
     
      div(class="flex flex-row w-full justify-center items-center  text-lg gap-x-8")
        
        button(class="w-auto h-auto text-xl p-5 rounded-full bg-black text-white flex flex-row justify-center items-center gap-x-2")
          GoogleIcon(class="w-10 h-10")
        button(class="w-auto h-auto text-xl p-5 rounded-full bg-black text-white flex flex-row justify-center items-center gap-x-2")
          AppleIcon(class="w-10 h-10")
        button(class="w-auto h-auto text-xl p-5 rounded-full bg-black text-white flex flex-row justify-center items-center gap-x-2")
          FacebookIcon(class="w-10 h-10")
      p(class=" text-lg") Already have account? 
        span(@click="router.push(`/signup`)" class="font-semibold hover:cursor-pointer text-green-700") Login
  div(class="hidden md:block lg:w-[55%] w-full h-[100dvh]  p-12 sticky top-0")
    nuxt-img(src="images/loginpage2.png" class="w-full h-full my-auto rounded-2xl object-cover  " width="800" height="1000" format="webp")
</template>

<script setup lang="ts">
// If you are using PurgeCSS, make sure to whitelistgi the carousel CSS classes
// import google and facebook icons
import GoogleIcon from "~icons/gg/google";
import FacebookIcon from "~icons/ic/baseline-facebook";
import AppleIcon from "~icons/ic/baseline-apple";
import { onMounted } from "vue";
import type { Ref } from "vue";
import { useMainStore } from "@/stores/Main";
import { useUserStore } from "@/stores/User";

import HideIcon from "~icons/bxs/hide";
import ShowIcon from "~icons/bxs/show";

definePageMeta({
  // or middleware: 'auth'
  isNavbarOff: true,
});

const userStore = useUserStore();
const mainStore = useMainStore();

const { t } = useLang();
const router = useRouter();
const config = useRuntimeConfig();
const message = ref();
const { data: messageData } = await useFetch("api/test");
message.value = messageData.value;

// ------------------ is's ------------------ //
const is_password_visible = ref(false);
const islocationModal = ref();

const email = ref();
const password = ref();

console.log(islocationModal.value);

const login = async () => {
  const body = {
    username: "",
    email: `${email.value}`,
    password: `${password.value}`,
  };

  const url = `${config.public.API_URL}auth/registration/partner`;
  console.log(url);

  await fetch(url, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
      Host: `${config.FETCH_HOST}`,
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.non_field_errors) {
        alert(data.non_field_errors[0]);
        return;
      }
      userStore.setUser(data);
      //console.log("saved: ", userStore.getUser);
      router.push("/dashboard");
    })
    .catch((err) => {
      console.log(err);
    });
};

onMounted(() => {
  const passwordInput = document.getElementById(
    "password-input",
  ) as HTMLInputElement;
  const passwordToggle = document.getElementById(
    "password-toggle",
  ) as HTMLButtonElement;
  passwordToggle.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      is_password_visible.value = true;
    } else {
      passwordInput.type = "password";
      is_password_visible.value = false;
    }
  });
});
</script>

<style lang="scss"></style>
