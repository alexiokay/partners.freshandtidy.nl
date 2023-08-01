import { defineComponent, ref, computed, resolveComponent, unref, useSSRContext, openBlock, createElementBlock, createElementVNode } from 'vue';
import { ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { A as ArrowIcon, C as CalendarIcon } from './calendar-week-a270d327.mjs';
import { u as useMainStore } from './Main-ca6a8d39.mjs';
import { h as useUserStore } from '../server.mjs';
import '@vueuse/core';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import 'destr';
import 'klona';
import 'cookie-es';
import 'ohash';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@intlify/message-compiler';
import 'pinia-plugin-persistedstate';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';
import 'ipx';
import 'http-graceful-shutdown';

const _hoisted_1 = {
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m227.31 73.37l-44.68-44.69a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69L227.31 96a16 16 0 0 0 0-22.63ZM51.31 160L136 75.31L152.69 92L68 176.68ZM48 179.31L76.69 208H48Zm48 25.38L79.31 188L164 103.31L180.69 120Zm96-96L147.31 64l24-24L216 84.68Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const EditIcon = { name: "ph-pencil", render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "timeslots",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const mainStore = useMainStore();
    const selectedDate = ref(/* @__PURE__ */ new Date());
    const isScheduleSidebarOpen = ref(false);
    const date_objs = computed(() => {
      return mainStore.getDates;
    });
    const calendar = ref();
    const editMode = ref(false);
    if (userStore.getAccountType === "arrow-employee") {
      editMode.value = true;
    }
    const formatCalendarDate = (date) => {
      const month = date.toLocaleString("default", { month: "short" });
      const year = date.getFullYear();
      const formattedDate = `${month}' ${year}`;
      return formattedDate;
    };
    const formatUTCDate = (date) => {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;
      return formattedDate;
    };
    const formatScheduleDate = (date) => {
      let daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      let monthsOfYear = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      let dayOfMonth = date.getDate();
      let dayOfWeek = daysOfWeek[date.getDay()];
      let month = monthsOfYear[date.getMonth()];
      date.getFullYear();
      let formattedDate = `${dayOfMonth}, ${month} ${dayOfWeek}`;
      return formattedDate;
    };
    const formatedScheduleDate = ref(formatScheduleDate(selectedDate.value));
    const formatedCalendarDate = ref(formatCalendarDate(selectedDate.value));
    const currentDate = ref(/* @__PURE__ */ new Date());
    const nextMonth = () => {
      calendar.value.nextMonth();
      currentDate.value = new Date(
        // for calendar navigation logic
        currentDate.value.getFullYear(),
        currentDate.value.getMonth() + 1,
        currentDate.value.getDate()
      );
      formatedCalendarDate.value = formatCalendarDate(currentDate.value);
    };
    const previousMonth = () => {
      calendar.value.previousMonth();
      currentDate.value = new Date(
        // for calendar navigation logic
        currentDate.value.getFullYear(),
        currentDate.value.getMonth() - 1,
        currentDate.value.getDate()
      );
      formatedCalendarDate.value = formatCalendarDate(currentDate.value);
    };
    const selectDate = (date) => {
      console.log("selectDate:");
      console.log(date);
      selectedDate.value = date;
      formatedScheduleDate.value = formatScheduleDate(date);
      console.log(formatedScheduleDate.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Calendar = resolveComponent("Calendar");
      const _component_CalendarScheduleSidebar = resolveComponent("CalendarScheduleSidebar");
      const _component_CalendarSchedule = resolveComponent("CalendarSchedule");
      _push(`<!--[--><div class="flex w-full h-auto" id="timeslot-top-panel"></div><div class="flex gap-x-[5rem] px-8 md:px-0 flex-wrap md:flex-nowrap"><div id="timeslot-left-panel" class="${ssrRenderClass([{ "mt-[0.8rem] pr-[2.9rem] ": unref(editMode) }, "flex w-full md:w-2/4 flex-col"])}"><div class="flex flex-col space-y-4 sticky top-[2.5rem]"><div class="flex items-center relative"><h1 class="text-3xl font-bold mr-6 w-[10rem]">${ssrInterpolate(unref(formatedCalendarDate))}</h1><div class="p-[2px] rounded-full hover:bg-gray-100 hover:cursor-pointer">`);
      _push(ssrRenderComponent(unref(ArrowIcon), {
        class: "h-7 w-7 text-gray-600",
        onClick: ($event) => previousMonth()
      }, null, _parent));
      _push(`</div><p class="absolute -top-[1.45rem] left-[13.2rem] w-[2px] h-[2px] text-5xl">.</p><div class="p-[2px] rounded-full hover:bg-gray-100 hover:cursor-pointer">`);
      _push(ssrRenderComponent(unref(ArrowIcon), {
        class: "rotate-180 h-7 w-7 text-gray-600",
        onClick: ($event) => nextMonth()
      }, null, _parent));
      _push(`</div><div class="absolute flex w-auto right-0 items-center justify-end">`);
      _push(ssrRenderComponent(unref(CalendarIcon), { class: "hover:cursor-pointer" }, null, _parent));
      _push(`<hr class="absolute top-[1.7rem] right-0 w-[1.3rem] h-[0.5px] border-gray-300 border-[1px]"></div>`);
      if (unref(userStore).getAccountType === "arrow-employee") {
        _push(`<div class="${ssrRenderClass([{ "text-blue-600": unref(editMode) }, "absolute flex w-auto right-8 items-center justify-end"])}">`);
        _push(ssrRenderComponent(unref(EditIcon), { class: "hover:cursor-pointer" }, null, _parent));
        _push(`<hr class="absolute top-[1.7rem] right-0 w-[1.3rem] h-[0.5px] border-gray-300 border-[1px]"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(editMode)) {
        _push(`<p class="text-gray-500 w-full">Here you can edit your timeslots. You can open or close timeslots for a specific date.</p>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(editMode)) {
        _push(`<p class="text-gray-500 w-full">Here all your planned timeslots. You will find information for each timeslot as well you can planned new one</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Calendar, {
        class: "mt-8",
        ref_key: "calendar",
        ref: calendar,
        onSelectDate: selectDate,
        dates: unref(date_objs),
        editMode: unref(editMode)
      }, null, _parent));
      _push(`</div></div><div class="flex w-full md:w-2/4 flex-col md:mt-[6rem]" id="timeslot-right-panel" style="${ssrRenderStyle(!unref(editMode) ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(_component_CalendarScheduleSidebar, {
        class: ["mt-8", unref(isScheduleSidebarOpen) ? "" : "hidden"]
      }, null, _parent));
      _push(ssrRenderComponent(_component_CalendarSchedule, {
        class: "mt-8",
        selectedTimeslot: unref(formatedScheduleDate),
        date: formatUTCDate(unref(selectedDate))
      }, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/timeslots.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=timeslots-34eaf224.mjs.map
