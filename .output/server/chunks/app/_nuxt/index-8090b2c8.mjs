import { useSSRContext, defineComponent, ref, computed, resolveComponent, mergeProps, unref, openBlock, createElementBlock, createStaticVNode, createElementVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { h as useUserStore, u as useRouter } from '../server.mjs';
import { u as useMainStore } from './Main-ca6a8d39.mjs';
import { C as CloseIcon } from './outline-close-54be223b.mjs';
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
import '@vueuse/core';

const _hoisted_1$1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9s-9-4.032-9-9s4.032-9 9-9Zm0 16c3.867 0 7-3.133 7-7s-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7Zm8.485.071l2.829 2.828l-1.415 1.415l-2.828-2.829l1.414-1.414Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3);
}
const SearchIcon = { name: "ri-search-2-line", render: render$1 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Searchbar",
  __ssrInlineRender: true,
  props: {
    datepicker: {
      type: Boolean,
      required: false
    },
    placeholder: {
      type: String,
      required: false
    },
    "v-model": {
      type: String,
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex p-2 px-4 items-center rounded-lg border-2 border-gray-300 bg-white focus:border-gray-500" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(SearchIcon), { class: "w-8 h-8 text-gray-600" }, null, _parent));
      _push(`<input class="search w-full h-full text-lg focus:outline-none pl-5" type="search" name="search"${ssrRenderAttr("placeholder", __props.placeholder)}>`);
      if (__props.datepicker) {
        _push(`<div class="ml-auto px-2 flex items-center justify-center space-x-2 w-auto h-auto rounded-lg bg-[#F9F9FB] text-black"><p class="text-base min-w-max">Arrival date:</p><input class="bg-[#F9F9FB] focus:outline-none w-[8rem] text-base" type="date"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Searchbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _hoisted_1 = {
  viewBox: "0 0 48 48",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<circle cx="24" cy="22" r="20" fill="#FFF59D"></circle><path fill="#FBC02D" d="M37 22c0-7.7-6.6-13.8-14.5-12.9c-6 .7-10.8 5.5-11.4 11.5c-.5 4.6 1.4 8.7 4.6 11.3c1.4 1.2 2.3 2.9 2.3 4.8v.3h12v-.1c0-1.8.8-3.6 2.2-4.8c2.9-2.4 4.8-6 4.8-10.1z"></path><path fill="#FFF59D" d="m30.6 20.2l-3-2c-.3-.2-.8-.2-1.1 0L24 19.8l-2.4-1.6c-.3-.2-.8-.2-1.1 0l-3 2c-.2.2-.4.4-.4.7s0 .6.2.8l3.8 4.7V37h2V26c0-.2-.1-.4-.2-.6l-3.3-4.1l1.5-1l2.4 1.6c.3.2.8.2 1.1 0l2.4-1.6l1.5 1l-3.3 4.1c-.1.2-.2.4-.2.6v11h2V26.4l3.8-4.7c.2-.2.3-.5.2-.8s-.2-.6-.4-.7z"></path><circle cx="24" cy="44" r="3" fill="#5C6BC0"></circle><path fill="#9FA8DA" d="M26 45h-4c-2.2 0-4-1.8-4-4v-5h12v5c0 2.2-1.8 4-4 4z"></path><path fill="#5C6BC0" d="m30 41l-11.6 1.6c.3.7.9 1.4 1.6 1.8l9.4-1.3c.4-.6.6-1.3.6-2.1zm-12-2.3v2L30 39v-2z"></path>', 6);
const _hoisted_8 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_8);
}
const HintIcon = { name: "flat-color-icons-idea", render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useUserStore();
    const mainStore = useMainStore();
    const router = useRouter();
    const isHintOpen = ref(true);
    const active_menu = computed(() => {
      return mainStore.getActiveMenu;
    });
    const searchQuery = ref("");
    const reservations = computed(() => {
      let filteredReservations = mainStore.getReservations.filter((reservation) => {
        if (reservation.status === "ARROW_APPROVED" && active_menu.value === "arrival" || reservation.status === "ARROW_CHANGED" && active_menu.value === "arrow changed") {
          return true;
        }
        if ((reservation.status === "New" || reservation.status === "CARRIER_CHANGED") && active_menu.value === "pending" || reservation.status === "COMPLETED" && active_menu.value === "completed" || reservation.status === "Cancelled" && active_menu.value === "cancelled") {
          return true;
        }
        if (reservation.status === "CARRIER_APPROVED" && active_menu.value === "arrival") {
          return true;
        }
        return false;
      });
      console.log(searchQuery.value);
      let keywords = searchQuery.value.toLowerCase().split(" ");
      filteredReservations = filteredReservations.filter(
        (reservation) => keywords.every(
          (keyword) => (
            // (reservation.tracking_number &&
            //   reservation.tracking_number.toLowerCase().includes(keyword)) ||
            reservation.status && reservation.status.toLowerCase().includes(keyword) || reservation.carrier.name && reservation.carrier.name.toLowerCase().includes(keyword) || reservation.suppliers.suppliers && reservation.suppliers.suppliers.some(
              (item) => item.supplier.name.toLowerCase().includes(keyword)
            )
          )
        )
      );
      return filteredReservations;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Searchbar = _sfc_main$1;
      const _component_ButtonMenu2 = resolveComponent("ButtonMenu2");
      const _component_shipment = resolveComponent("shipment");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "text-black w-full h-full px-6 py-[0.4rem] flex flex-row flex-wrap gap-y-[2rem] space-x-2 justify-start items-center",
        id: "shipments"
      }, _attrs))}><div class="shipments w-full gap-y-2 flex flex-col"><div class="bg-blue-200 py-2 px-4 rounded-lg max-w-max flex gap-x-4" style="${ssrRenderStyle(unref(isHintOpen) === true ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(unref(HintIcon), { class: "w-6 h-6" }, null, _parent));
      _push(`<p><span class="font-semibold">Hint: </span><span>You can search by supplier name, carrier or status</span></p>`);
      _push(ssrRenderComponent(unref(CloseIcon), {
        class: "w-6 h-6 cursor-pointer",
        onClick: ($event) => isHintOpen.value = false
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Searchbar, {
        class: "w-full h-[5rem]",
        datepicker: true,
        placeholder: "Search by tracking number",
        onKeypress: ($event) => searchQuery.value = $event.target.value
      }, null, _parent));
      _push(`</div><div class="w-full flex lg:flex-row flex-col" id="shipments-menu"><div class="flex lg:flex-row flex-col items-start space-y-2 lg:space-y-0 lg:items-center justify-start overflow-auto w-full no-scrollbar"><h1 class="text-xl w-auto font-semibold mr-[1.5rem]">Shipments</h1><div class="flex space-x-2 items-center justify-start overflow-auto no-scrollbar">`);
      _push(ssrRenderComponent(_component_ButtonMenu2, {
        text: "Pending",
        active: unref(active_menu) == "pending",
        onClick: ($event) => unref(mainStore).setActiveMenu("pending")
      }, null, _parent));
      _push(ssrRenderComponent(_component_ButtonMenu2, {
        text: "Arrival",
        active: unref(active_menu) == "arrival",
        onClick: ($event) => unref(mainStore).setActiveMenu("arrival")
      }, null, _parent));
      _push(ssrRenderComponent(_component_ButtonMenu2, {
        text: "Completed",
        active: unref(active_menu) == "completed",
        onClick: ($event) => unref(mainStore).setActiveMenu("completed")
      }, null, _parent));
      _push(ssrRenderComponent(_component_ButtonMenu2, {
        text: "Cancelled",
        active: unref(active_menu) == "cancelled",
        onClick: ($event) => unref(mainStore).setActiveMenu("cancelled")
      }, null, _parent));
      _push(ssrRenderComponent(_component_ButtonMenu2, {
        text: "Arrow Changed",
        active: unref(active_menu) == "arrow changed",
        onClick: ($event) => unref(mainStore).setActiveMenu("arrow changed")
      }, null, _parent));
      _push(`</div></div><div class="ml-auto px-2 flex items-center justify-center space-x-2 w-auto h-[2.5rem] rounded-lg bg-white text-black" id="shipments-menu-sorting"><p class="text-sm">Sort by:</p><select class="w-auto h-[2.5rem] focus:border-0 focus:outline-none text-black" id="sorting"><option value="newest">Newest</option><option value="oldest">Oldest</option></select></div></div><!--[-->`);
      ssrRenderList(unref(reservations), (reservation) => {
        _push(ssrRenderComponent(_component_shipment, {
          class: "w-[calc(50%-1rem)] 2xl:w-[calc(33%-1rem)]",
          onClick: ($event) => unref(router).push({ path: `/dashboard/shipments/${reservation.id}` }),
          key: reservation.id,
          reservation
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/shipments/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-8090b2c8.mjs.map
