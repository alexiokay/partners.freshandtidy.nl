<template lang="pug">
div(class="flex flex-col md:flex-row gap-y-8 relative w-full h-auto px-[4rem] lg:px-[13rem] py-[4rem] items-center justify-between gap-x-[8rem] bg-[#26ade4] rounded-r-[4rem] rounded-bl-[4rem] overflow-hidden")
    .circle-1(class="absolute  left-[44%] w-full h-full object-cover z-0 ")
    .circle-2(class="absolute  left-[33%] w-full h-full object-cover z-0 ")
    .circle-3(class="absolute  left-[22%] w-full h-full object-cover z-0 ")

    div(class="flex flex-col space-y-4 z-50")
        h3(class="text-white text-3xl font-bold text-[3rem]") Need a locksmith?
        p(class="text-[#fff] text-2xl") Schedule an appointment today.
    buttonsButton(text="Click To Call" class="h-[5rem] w-[17rem] text-xl  mt-2 z-20 bg-white text-[#02374b] shadow-lg font-semibold hover:text-white")
                template(v-slot:icon)
                    PhoneIcon(class="w-8 h-8 ml-3 text-[#2da9db] ")
</template>

<script setup lang="ts">
import PhoneIcon from "~icons/mingcute/phone-call-fill";
</script>

<style lang="scss">
.circle-1 {
  border-radius: 50%;
  box-shadow: 0px 0px 0px 100px #3cb4e6;
  width: 250px;
  height: 250px;
}

.circle-2 {
  border-radius: 50%;
  box-shadow: 0px 0px 0px 100px #3cb4e6;
  width: 750px;
  height: 750px;
}

.circle-3 {
  border-radius: 50%;
  box-shadow: 0px 0px 0px 100px #3cb4e6;
  width: 1250px;
  height: 1250px;
}
</style>
