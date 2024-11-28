<template lang="pug">
div(class=" w-full h-screen  flex flex-col lg:flex-row  ")
  div(class="lg:w-[45%]  w-full h-full flex flex-col px-6 lg:px-[5rem] items-center ")

          
    div(class="flex  flex-col md:px-8 items-center mt-[3rem] lg:mt-[8rem] gap-y-6 w-full h-auto justify-start ")
      p(class="text-5xl font-bold font-publicsans") Welcome back!
      p(class="text-xl text-gray-800") Login to your dashboard to manage, track and view generated leads and more.
      div.email(class=" w-full text-xl flex flex-col gap-y-3 mt-16")
        p(class="font-roboto") Email
        input(@keydown.enter="login" type="text" v-model="email" class="w-full h-[4rem] border-2  border-gray-500 rounded-full px-4")
      div.password(class="w-full relative  text-xl flex flex-col gap-y-3")
        p(class="font-roboto") Password
        div(class="relative")
          input(@keydown.enter="login" type="password" v-model="password" class="w-full h-[4rem] border-2  border-gray-500 rounded-full px-4" id="password-input")
          button(type="button" class="absolute right-2 top-1/2 transform -translate-y-1/2   bg-white px-2 rounded-md ", id="password-toggle")
              HideIcon(v-if="!is_password_visible" class="w-6 h-6")
              ShowIcon(v-else class="w-6 h-6")
      p(class=" hover:cursor-pointer ml-auto -mt-4") Forgot password?
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
      p(class="absolute bottom-6 text-lg") Not a member? 
        NuxtLink( to="/sign-up" class="font-semibold hover:cursor-pointer text-green-700") Register now
  div(class="hidden md:block lg:w-[55%] w-full h-full p-12")
    nuxt-img(src="images/loginpage2.png" class="w-full h-full my-auto rounded-2xl object-cover" width="800" height="1000" format="webp")
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

  const url = `${config.public.API_URL}auth/login/`;
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

<style lang="sass">








.full-width
  width: 100vw
  position: relative
  left: 50%
  right: 50%
  margin-left: -50vw
  margin-right: -50vw



.advantage
  opacity: 0

.advantage-visible
  opacity: 1

.product
  opacity: 0
</style>
