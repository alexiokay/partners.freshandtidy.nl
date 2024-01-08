<template lang="pug">
div(@click="$emit('select', data.title)" :class="bgColor" :id="data.title.replace(/ /g, '-')" class="relative justify-between flex h-auto hover:animate-[bump_0.3s_ease-in-out] w-full gap-y-4 md:gap-y-6 text-[#02374b] lg:text-center items-center lg:items-center shadow-[0_1px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl py-[1rem] md:px-[3rem] hover:cursor-pointer")
    div(class="flex items-center gap-x-4 w-3/5")
        slot(name="icon"  )
    
        h3(class="font-bold text-2xl md:text-3xl") {{ data.title.split(" ")[0] }}
        p() {{ data.title.split(" ")[1] }}

   
    div(class="w-2/5 flex h-[5rem] items-center")
        hr(class="border-[0.5px] border-gray-200 w-[10rem] h-[1px] rotate-90")
        div(class="flex flex-col w-full h-full text-start items-between justify-between")
            div(class="flex gap-x-3 items-center")
              p(class="font-semibold") Instant booking
             
              Switch(
                  v-model="data.instant"
                  @click="data.instant = !data.instant"
                  :class="data.instant ? 'bg-blue-600' : 'bg-gray-200'" 
                  class="relative inline-flex h-6 w-16 items-center rounded-full")
                  p(:class="data.instant ? 'text-white left-3' : 'right-2'" class=" absolute text-lg  ") {{ data.instant ? 'On' : 'Off' }}
                  span(class="sr-only") Enable notifications
                  span(
                      :class="data.instant ? 'translate-x-[2.65rem]' : 'translate-x-1'"
                      class="inline-block h-[1.25rem] w-[1.25rem]  transform rounded-full bg-white transition")
            div(class="flex gap-x-4")
                button(@click="data.recurrence = !data.recurrence" :class="data.recurrence === true? 'bg-blue-500 text-white border-blue-700': 'bg-white border-black'" class="text-xl  border-[1px]  text-black border-black rounded-full px-4 py-1") Recurrence
                button(@click="data.one_time = !data.one_time" :class="data.one_time === true? 'bg-blue-500 text-white border-blue-700': 'bg-white border-black'" class="text-xl  border-[1px]  text-black border-black  rounded-full px-4 py-1") One time

        div(class="flex gap-x-4 mb-auto")
          <!-- edit icon -->
          button(@click="$emit('edit', data.title)")
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 3C17.2626 2.73736 17.5744 2.52902 17.9176 2.38687C18.2608 2.24473 18.6286 2.17157 19 2.17157C19.3714 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52902 20.7374 2.73736 21 3C21.2626 3.26264 21.471 3.57445 21.6131 3.91761C21.7553 4.26077 21.8284 4.62857 21.8284 5C21.8284 5.37143 21.7553 5.73923 21.6131 6.08239C21.471 6.42555 21.2626 6.73736 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          button(@click="$emit('remove', data.title)")
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6H5H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

</template>

<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: false,
  },

  selected: {
    type: String,
    required: false,
  },
});

const bgColor = computed(() => {
  if (props.selected) {
    console.log(props.selected);
    return props.selected.toLocaleLowerCase() === props.data.title.toLowerCase()
      ? "bg-white" //bg-black text-white
      : "bg-white";
  } else {
    return "bg-white";
  }
});
</script>

<style lang="scss"></style>
