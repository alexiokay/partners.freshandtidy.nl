<template lang="pug">
div(class="flex flex-row w-auto h-auto gap-x-4 text-2xl items-center justify-center ")
    div(ref="root" class="w-full flex flex-row justify-center items-center")
        RatingStar(type="empty" id=0   @rate="(id) => rate(id)" @fill="(event, id) => fill(event, id)" @unfill="(event, id) => unfill(event, id)" :class="{'w-6 h-6': props.size === 'small','w-8 h-8': props.size === 'medium','w-10 h-10': props.size === 'big','w-12 h-12': props.size === 'huge', }")
        RatingStar(type="empty" id=2  @rate="(id) => rate(id)" @fill="(event, id) => fill(event, id)" @unfill="(event, id) => unfill(event, id)" :class="{'w-6 h-6': props.size === 'small','w-8 h-8': props.size === 'medium','w-10 h-10': props.size === 'big','w-12 h-12': props.size === 'huge', }")
        RatingStar(type="empty" id=4  @rate="(id) => rate(id)" @fill="(event, id) => fill(event, id)" @unfill="(event, id) => unfill(event, id)" :class="{'w-6 h-6': props.size === 'small','w-8 h-8': props.size === 'medium','w-10 h-10': props.size === 'big','w-12 h-12': props.size === 'huge', }")
        RatingStar(type="empty" id=6  @rate="(id) => rate(id)" @fill="(event, id) => fill(event, id)" @unfill="(event, id) => unfill(event, id)" :class="{'w-6 h-6': props.size === 'small','w-8 h-8': props.size === 'medium','w-10 h-10': props.size === 'big','w-12 h-12': props.size === 'huge', }")
        RatingStar(type="empty" id=8  @rate="(id) => rate(id)" @fill="(event, id) => fill(event, id)" @unfill="(event, id) => unfill(event, id)" :class="{'w-6 h-6': props.size === 'small','w-8 h-8': props.size === 'medium','w-10 h-10': props.size === 'big','w-12 h-12': props.size === 'huge', }")
    
    
    
    </template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { PropType } from "vue";
import type { Ref } from "vue";

const props = defineProps({
  size: {
    type: String as PropType<Size>,
    default: "small",
  },
  rated: {
    type: Number,
    default: 0,
  },
  editable: {
    type: Boolean,
    default: false,
  },
});

let isFirstRate = true;
let rated = ref(props.rated);
const root: Ref<HTMLElement | null> = ref(null);

const rate = (rating: number) => {
  if (props.editable || isFirstRate === true) {
    const stars = root.value?.querySelectorAll(".star");
    let i = 0;
    rated.value = rating;
    stars?.forEach((star) => {
      if (i <= rated.value) star.classList.add("filter-blue");

      i++;
    });
    //console.log(rated);
  }
  isFirstRate = false;
};

const fill = (event: any, id: number) => {
  if (props.editable) {
    const stars = root.value?.querySelectorAll(".star");
    let i = 0;
    stars?.forEach((star) => {
      if (i <= id) star.classList.add("filter-blue");
      else star.classList.remove("filter-blue");

      i++;
    });

    console.log(id);
  }
};

const unfill = (event: any, id: number) => {
  if (props.editable) {
    const stars = root.value?.querySelectorAll(".star");
    let i = 0;
    stars?.forEach((star) => {
      star.classList.remove("filter-blue");
      i++;
    });
    rate(rated.value);

    console.log(id);
  }
};

onMounted(() => {
  rate(rated.value);
});

type Size = "small" | "medium" | "big" | "huge";
</script>
<style lang="scss">
.filter-blue {
  filter: invert(0%) sepia(96%) saturate(1208%) hue-rotate(359deg)
    brightness(101%) contrast(107%);
}

.filter-blue {
  filter: invert(56%) sepia(96%) saturate(1208%) hue-rotate(195deg)
    brightness(101%) contrast(107%)
    drop-shadow(0px 0px 5px rgba(39, 173, 229, 0.5));
}
</style>
