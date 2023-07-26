<template lang="pug">
div
    Transition(name="fade")
        <div v-show="isOpen" @click="$emit('close')" tabindex="-1" class=" fixed top-0 items-start  justify-end flex pointer-event-none bg-[rgba(0,0,0,0.85)]  left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto sm:inset-0 h-screen sm:h-full">
            button(class="  text-5xl text-white ") X
        
        </div>
            

    Transition(name="jump-straight")
        <div v-if="isOpen"   @click.stop="$emit('close')" class="fixed top-0 bottom-0 pointer-event-none flex items-center   justify-center left-0 right-0 z-50  mx-auto sm:w-full sm:p-[8rem]  sm:inset-0 h-[19.7rem] lg:h-[100vh] my-auto ">
            <iframe  src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" class="w-full h-full">
            </iframe>

        
            
        </div>
</template>

<script setup lang="ts">
import { disableScroll, enableScroll } from "~/funcionalities/scroll";

const props = defineProps<{
  isOpen: boolean;
}>();

//{ deep: true, immediate: true };
</script>

<style lang="scss"></style>
```
