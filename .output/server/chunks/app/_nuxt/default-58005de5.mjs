import { _ as __nuxt_component_0 } from './nuxt-img-a1ef923d.mjs';
import { useSSRContext, defineComponent, unref, mergeProps, withCtx, createTextVNode, createVNode, computed, renderSlot, toDisplayString, openBlock, createBlock, createCommentVNode, ref, withModifiers, createElementBlock, createElementVNode, createStaticVNode } from 'vue';
import { c as createPinia, d as defineStore, p as persistedState, h as useUserStore, u as useRouter, j as useRoute } from '../server.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrRenderAttrs, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './nuxt-link-ecdf6ea3.mjs';
import { C as CloseIcon } from './outline-close-54be223b.mjs';
import { A as ArrowIcon, C as CalendarIcon } from './calendar-week-a270d327.mjs';
import { u as useMainStore } from './Main-ca6a8d39.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'defu';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'destr';
import 'klona';
import 'cookie-es';
import 'ohash';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@intlify/message-compiler';
import 'pinia-plugin-persistedstate';
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

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Info",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "px-2 relative h-auto flex justify-center items-center gap-x-2",
        id: "user-info"
      }, _attrs))}><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        class: "w-8 aspect-square object-cover rounded-full",
        src: unref(userStore).avatar ? `${unref(userStore).avatar}` : "data:image/jpeg;base64,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",
        width: "150",
        height: "30",
        format: "webp"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/Info.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _hoisted_1$j = {
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$j = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 220.66 240 164 240 94a62.07 62.07 0 0 0-62-62Zm-50 174.8C109.74 196.16 32 147.69 32 94a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8Z"
}, null, -1);
const _hoisted_3$j = [
  _hoisted_2$j
];
function render$j(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$j, _hoisted_3$j);
}
const IconHeart = { name: "ph-heart", render: render$j };
const _hoisted_1$i = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$i = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"
}, null, -1);
const _hoisted_3$i = [
  _hoisted_2$i
];
function render$i(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$i, _hoisted_3$i);
}
const UserIcon = { name: "heroicons-user-circle", render: render$i };
const _hoisted_1$h = {
  viewBox: "0 0 48 48",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$h = /* @__PURE__ */ createElementVNode("g", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linejoin": "round",
  "stroke-width": "4"
}, [
  /* @__PURE__ */ createElementVNode("rect", {
    width: "30",
    height: "36",
    x: "9",
    y: "8",
    rx: "2"
  }),
  /* @__PURE__ */ createElementVNode("path", {
    "stroke-linecap": "round",
    d: "M18 4v6m12-6v6m-14 9h16m-16 8h12m-12 8h8"
  })
], -1);
const _hoisted_3$h = [
  _hoisted_2$h
];
function render$h(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$h, _hoisted_3$h);
}
const OrderIcon = { name: "icon-park-outline-transaction-order", render: render$h };
const _hoisted_1$g = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$g = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59l-.58.58V4h16v12zm-9.5-2H18v-2h-5.5zm3.86-5.87c.2-.2.2-.51 0-.71l-1.77-1.77c-.2-.2-.51-.2-.71 0L6 11.53V14h2.47l5.89-5.87z"
}, null, -1);
const _hoisted_3$g = [
  _hoisted_2$g
];
function render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$g, _hoisted_3$g);
}
const OpinionIcon = { name: "ic-outline-rate-review", render: render$g };
const _hoisted_1$f = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$f = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M6 18h6v-.45q0-.425-.238-.788T11.1 16.2q-.5-.225-1.012-.338T9 15.75q-.575 0-1.088.113T6.9 16.2q-.425.2-.663.563T6 17.55V18Zm8.75-1.5h2.5q.325 0 .537-.213T18 15.75q0-.325-.213-.537T17.25 15h-2.5q-.325 0-.537.213T14 15.75q0 .325.213.537t.537.213ZM9 15q.625 0 1.063-.438T10.5 13.5q0-.625-.438-1.063T9 12q-.625 0-1.063.438T7.5 13.5q0 .625.438 1.063T9 15Zm5.75-1.5h2.5q.325 0 .537-.213T18 12.75q0-.325-.213-.537T17.25 12h-2.5q-.325 0-.537.213T14 12.75q0 .325.213.537t.537.213ZM4 22q-.825 0-1.413-.588T2 20V9q0-.825.588-1.413T4 7h5V4q0-.825.588-1.413T11 2h2q.825 0 1.413.588T15 4v3h5q.825 0 1.413.588T22 9v11q0 .825-.588 1.413T20 22H4Zm0-2h16V9h-5q0 .825-.588 1.413T13 11h-2q-.825 0-1.413-.588T9 9H4v11Zm7-11h2V4h-2v5Zm1 5.5Z"
}, null, -1);
const _hoisted_3$f = [
  _hoisted_2$f
];
function render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, _hoisted_3$f);
}
const ShippingDataIcon = { name: "material-symbols-badge-outline-rounded", render: render$f };
const _hoisted_1$e = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$e = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M12 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-2 12c-.25 0-.46-.18-.5-.42l-.37-2.65c-.63-.25-1.17-.59-1.69-.99l-2.49 1.01c-.22.08-.49 0-.61-.22l-2-3.46a.493.493 0 0 1 .12-.64l2.11-1.66L4.5 12l.07-1l-2.11-1.63a.493.493 0 0 1-.12-.64l2-3.46c.12-.22.39-.31.61-.22l2.49 1c.52-.39 1.06-.73 1.69-.98l.37-2.65c.04-.24.25-.42.5-.42h4c.25 0 .46.18.5.42l.37 2.65c.63.25 1.17.59 1.69.98l2.49-1c.22-.09.49 0 .61.22l2 3.46c.13.22.07.49-.12.64L19.43 11l.07 1l-.07 1l2.11 1.63c.19.15.25.42.12.64l-2 3.46c-.12.22-.39.31-.61.22l-2.49-1c-.52.39-1.06.73-1.69.98l-.37 2.65c-.04.24-.25.42-.5.42h-4m1.25-18l-.37 2.61c-1.2.25-2.26.89-3.03 1.78L5.44 7.35l-.75 1.3L6.8 10.2a5.55 5.55 0 0 0 0 3.6l-2.12 1.56l.75 1.3l2.43-1.04c.77.88 1.82 1.52 3.01 1.76l.37 2.62h1.52l.37-2.61c1.19-.25 2.24-.89 3.01-1.77l2.43 1.04l.75-1.3l-2.12-1.55c.4-1.17.4-2.44 0-3.61l2.11-1.55l-.75-1.3l-2.41 1.04a5.42 5.42 0 0 0-3.03-1.77L12.75 4h-1.5Z"
}, null, -1);
const _hoisted_3$e = [
  _hoisted_2$e
];
function render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, _hoisted_3$e);
}
const SettingsIcon$1 = { name: "mdi-settings-outline", render: render$e };
createPinia();
const useNecessaryStore = defineStore("necessaryStore", {
  state: () => {
    return {
      // cookies settings
      isCookiesSet: false,
      isUserMobileDropdown: false,
      isUserDropdown: false,
      acceptedCookies: {
        necessary: true,
        functional: false,
        analytics: false,
        performance: false,
        advertisement: false,
        others: false
      }
    };
  },
  getters: {},
  actions: {
    setUserDropdown(is) {
      this.isUserDropdown = is;
    }
  },
  persist: {
    storage: persistedState.cookies
    // only save isCookiesSet as cookie
  }
  // other options...
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "dropdown",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const necessaryStore = useNecessaryStore();
    const isUserMobileDropdown = necessaryStore.isUserMobileDropdown;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "w-[calc(20vw+15em)] px-5 space-y-4 h-[calc(100vh-0vw)] md:h-auto pb-4 top-0 rounded-b-lg rounded-r-lg right-0 z-40 bg-white shadow-[0px_0px_10px_-2px_rgb(0,0,0,0.15)] flex-col justify-start items-center",
        id: "user-dropdown"
      }, _attrs))}><div class="${ssrRenderClass([unref(isUserMobileDropdown) ? "" : " md:hidden ", "flex justify-start text-xl space-x-3 items-center flex -mx-5 h-14 px-4 bg-[#F5F5F5] w-[calc(20vw+15em)] border-b-[1px] border-gray-300"])}">`);
      _push(ssrRenderComponent(unref(CloseIcon), {
        class: "hover:cursor-pointer h-5 w-5",
        onClick: ($event) => _ctx.$emit("close")
      }, null, _parent));
      _push(`<p>Menu</p></div>`);
      if (!unref(userStore).getIsLogged) {
        _push(`<div class="flex flex-col justify-center items-start space-y-2 w-full">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "w-full h-10 md:h-8 rounded-full hover:bg-blue-700 bg-blue-600 text-white text-sm flex items-center justify-center",
          id: "dropdown-login",
          to: "/login"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Login`);
            } else {
              return [
                createTextVNode("Login")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex h-5 w-full justify-center items-center"><hr class="w-3/5 h-[1.4px] bg-gray-200"><p class="w-full text-center">Nie masz konta?</p><hr class="w-3/5 h-[1.4px] bg-gray-200"></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "w-full h-10 md:h-8 rounded-full bg-white text-blue-600 border-[1px] border-blue-600 text-sm flex items-center justify-center",
          id: "dropdown-register",
          to: "/register"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Zarejestruj si\u0119`);
            } else {
              return [
                createTextVNode("Zarejestruj si\u0119")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="flex flex-col justify-center items-start w-full"><p class="text-sm text-gray-500">Cze\u015B\u0107</p><p class="text-base font-semibold text-black">${ssrInterpolate(unref(userStore).getUsername)}</p></div>`);
      }
      if (!unref(userStore).getIsLogged) {
        _push(`<hr class="w-[17rem] h-0.3 bg-gray-200 -mx-[12px] my-4">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex w-[calc(30vw+10em)] h-auto -mx-[12px] md:w-[17rem] flex-col justify-center items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex w-full text-slate-700 text-sm space-x-3 h-[2.4rem] items-center justify-start px-5 hover:cursor-pointer hover:bg-slate-50",
        to: "/account"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(UserIcon), { class: "w-6 h-6 pointer-events-none" }, null, _parent2, _scopeId));
            _push2(`<p${_scopeId}>Twoje konto</p>`);
          } else {
            return [
              createVNode(unref(UserIcon), { class: "w-6 h-6 pointer-events-none" }),
              createVNode("p", null, "Twoje konto")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex w-full text-slate-700 text-sm space-x-3 h-[2.4rem] items-center justify-start px-5 hover:cursor-pointer hover:bg-slate-50",
        to: "/account/orders"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(OrderIcon), { class: "w-6 h-6 pointer-events-none" }, null, _parent2, _scopeId));
            _push2(`<p${_scopeId}>Zam\xF3wienia</p>`);
          } else {
            return [
              createVNode(unref(OrderIcon), { class: "w-6 h-6 pointer-events-none" }),
              createVNode("p", null, "Zam\xF3wienia")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex w-full text-slate-700 text-sm space-x-3 h-[2.4rem] items-center justify-start px-5 hover:cursor-pointer hover:bg-slate-50",
        to: "/account/favourites"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(IconHeart), { class: "w-6 h-6 pointer-events-none" }, null, _parent2, _scopeId));
            _push2(`<p${_scopeId}>Listy zakupowe</p>`);
          } else {
            return [
              createVNode(unref(IconHeart), { class: "w-6 h-6 pointer-events-none" }),
              createVNode("p", null, "Listy zakupowe")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex w-full text-slate-700 text-sm space-x-3 h-[2.4rem] items-center justify-start px-5 hover:cursor-pointer hover:bg-slate-50",
        to: "/account/rates"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(OpinionIcon), { class: "w-6 h-6 pointer-events-none" }, null, _parent2, _scopeId));
            _push2(`<p${_scopeId}>Opinie</p>`);
          } else {
            return [
              createVNode(unref(OpinionIcon), { class: "w-6 h-6 pointer-events-none" }),
              createVNode("p", null, "Opinie")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex w-full text-slate-700 text-sm space-x-3 h-[2.4rem] items-center justify-start px-5 hover:cursor-pointer hover:bg-slate-50",
        to: "/account/shipping-data"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ShippingDataIcon), { class: "w-6 h-6 pointer-events-none" }, null, _parent2, _scopeId));
            _push2(`<p${_scopeId}>Dane do zam\xF3wie\u0144</p>`);
          } else {
            return [
              createVNode(unref(ShippingDataIcon), { class: "w-6 h-6 pointer-events-none" }),
              createVNode("p", null, "Dane do zam\xF3wie\u0144")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex w-full text-slate-700 text-sm space-x-3 h-[2.4rem] items-center justify-start px-5 hover:cursor-pointer hover:bg-slate-50",
        to: "/account/settings"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SettingsIcon$1), { class: "w-6 h-6 pointer-events-none" }, null, _parent2, _scopeId));
            _push2(`<p${_scopeId}>Ustawienia konta</p>`);
          } else {
            return [
              createVNode(unref(SettingsIcon$1), { class: "w-6 h-6 pointer-events-none" }),
              createVNode("p", null, "Ustawienia konta")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(userStore).getIsLogged) {
        _push(`<hr class="w-full h-0.3 bg-gray-200 -mx-[12px] mt-4">`);
      } else {
        _push(`<!---->`);
      }
      if (unref(userStore).getIsLogged) {
        _push(`<button class="flex w-full mt-auto rounded-full text-slate-700 text-sm h-[2.4rem] items-center justify-center px-5 hover:cursor-pointer hover:bg-slate-50"><p>Wyloguj si\u0119 </p></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/dropdown.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _hoisted_1$d = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$d = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 18.75v-14C0 3.784.784 3 1.75 3ZM1.5 7.412V18.75c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0Zm0-2.662v.852l10.36 7a.25.25 0 0 0 .28 0l10.36-7V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"
}, null, -1);
const _hoisted_3$d = [
  _hoisted_2$d
];
function render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_3$d);
}
const MailIcon = { name: "octicon-mail-24", render: render$d };
const _hoisted_1$c = {
  viewBox: "0 0 36 36",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$c = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M32.51 27.83A14.4 14.4 0 0 1 30 24.9a12.63 12.63 0 0 1-1.35-4.81v-4.94A10.81 10.81 0 0 0 19.21 4.4V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.33 10.73v4.94a12.63 12.63 0 0 1-1.35 4.81a14.4 14.4 0 0 1-2.47 2.93a1 1 0 0 0-.34.75v1.36a1 1 0 0 0 1 1h27.8a1 1 0 0 0 1-1v-1.36a1 1 0 0 0-.34-.75ZM5.13 28.94a16.17 16.17 0 0 0 2.44-3a14.24 14.24 0 0 0 1.65-5.85v-4.94a8.74 8.74 0 1 1 17.47 0v4.94a14.24 14.24 0 0 0 1.65 5.85a16.17 16.17 0 0 0 2.44 3Z",
  class: "clr-i-outline clr-i-outline-path-1"
}, null, -1);
const _hoisted_3$c = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M18 34.28A2.67 2.67 0 0 0 20.58 32h-5.26A2.67 2.67 0 0 0 18 34.28Z",
  class: "clr-i-outline clr-i-outline-path-2"
}, null, -1);
const _hoisted_4$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  d: "M0 0h36v36H0z"
}, null, -1);
const _hoisted_5 = [
  _hoisted_2$c,
  _hoisted_3$c,
  _hoisted_4$2
];
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_5);
}
const NotificationIcon$1 = { name: "clarity-notification-line", render: render$c };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Topbar",
  __ssrInlineRender: true,
  setup(__props) {
    const necessaryStore = useNecessaryStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UserInfo = _sfc_main$5;
      const _component_UserDropdown = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[var(--topbar-height)] w-full bg-white shadow-lg px-8 items-center justify-end flex gap-x-8" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(NotificationIcon$1), { class: "w-7 h-7" }, null, _parent));
      _push(ssrRenderComponent(unref(MailIcon), { class: "w-7 h-7" }, null, _parent));
      _push(ssrRenderComponent(_component_UserInfo, {
        class: "w-auto",
        onMouseenter: ($event) => unref(necessaryStore).setUserDropdown(true),
        onMouseleave: ($event) => unref(necessaryStore).setUserDropdown(false)
      }, null, _parent));
      if (unref(necessaryStore).isUserDropdown) {
        _push(ssrRenderComponent(_component_UserDropdown, {
          class: "w-auto mr-auto fixed right-10 top-[4.5rem]",
          onMouseenter: ($event) => unref(necessaryStore).setUserDropdown(true),
          onMouseleave: ($event) => unref(necessaryStore).setUserDropdown(false)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Topbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Sidebar",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: false
    },
    notifications_count: {
      type: Number,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const isActive = computed(() => {
      console.log("route");
      console.log(route.path);
      const path = route.path.split("/");
      return route.path.split("/")[path.length - 1] === props.text.toLowerCase() ? true : false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: ["menu-button relative whitespace-nowrap text-ellipsis flex w-full group justify-between rounded-md hover:bg-slate-100 h-[1.9rem] md:h-[2.7rem] px-4 py-2 items-center hover:cursor-pointer", unref(isActive) ? "bg-slate-100" : ""],
        to: props.to
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex space-x-2"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push2, _parent2, _scopeId);
            _push2(`<p${_scopeId}>${ssrInterpolate(props.text)}</p></div>`);
            if (props.notifications_count >= 0) {
              _push2(`<div class="${ssrRenderClass([props.notifications_count > 0 ? "moving-flag-bg" : "bg-slate-50", "h-full w-[2rem] flex items-center justify-center rounded-md"])}"${_scopeId}><p${_scopeId}>${ssrInterpolate(props.notifications_count)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "icon-2", {}, null, _push2, _parent2, _scopeId);
            if (unref(isActive)) {
              _push2(`<div class="active-pointer absolute -left-[1rem] w-[0.65rem] h-11 bg-violet-600 rounded-r-md"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "flex space-x-2" }, [
                renderSlot(_ctx.$slots, "icon"),
                createVNode("p", null, toDisplayString(props.text), 1)
              ]),
              props.notifications_count >= 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: ["h-full w-[2rem] flex items-center justify-center rounded-md", props.notifications_count > 0 ? "moving-flag-bg" : "bg-slate-50"]
              }, [
                createVNode("p", null, toDisplayString(props.notifications_count), 1)
              ], 2)) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "icon-2"),
              unref(isActive) ? (openBlock(), createBlock("div", {
                key: 1,
                class: "active-pointer absolute -left-[1rem] w-[0.65rem] h-11 bg-violet-600 rounded-r-md"
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/button/Sidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _hoisted_1$b = {
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$b = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M2 9.5A4.5 4.5 0 0 1 6.5 5h19A4.5 4.5 0 0 1 30 9.5v13a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 22.5v-13ZM6.5 7A2.5 2.5 0 0 0 4 9.5V11h24V9.5A2.5 2.5 0 0 0 25.5 7h-19ZM4 22.5A2.5 2.5 0 0 0 6.5 25h19a2.5 2.5 0 0 0 2.5-2.5V13H4v9.5ZM21 19h3a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2Z"
}, null, -1);
const _hoisted_3$b = [
  _hoisted_2$b
];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_3$b);
}
const PaymentsIcon = { name: "fluent-payment-32-regular", render: render$b };
const _hoisted_1$a = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$a = /* @__PURE__ */ createStaticVNode('<g fill="none" stroke="currentColor" stroke-dasharray="28" stroke-dashoffset="28" stroke-linecap="round" stroke-width="2"><path d="M4 21V20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"></animate></path><path d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0"></animate></path></g>', 1);
const _hoisted_3$a = [
  _hoisted_2$a
];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_3$a);
}
const AccountsIcon = { name: "line-md-account", render: render$a };
const _hoisted_1$9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$9 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  "fill-rule": "evenodd",
  d: "M13 3a1 1 0 1 0-2 0v.75h-.557A4.214 4.214 0 0 0 6.237 7.7l-.221 3.534a7.377 7.377 0 0 1-1.308 3.754a1.617 1.617 0 0 0 1.135 2.529l3.407.408V19a2.75 2.75 0 1 0 5.5 0v-1.075l3.407-.409a1.617 1.617 0 0 0 1.135-2.528a7.376 7.376 0 0 1-1.308-3.754l-.221-3.533a4.214 4.214 0 0 0-4.206-3.951H13V3Zm-2.557 2.25a2.714 2.714 0 0 0-2.709 2.544l-.22 3.534a8.877 8.877 0 0 1-1.574 4.516a.117.117 0 0 0 .082.183l3.737.449c1.489.178 2.993.178 4.482 0l3.737-.449a.117.117 0 0 0 .082-.183a8.877 8.877 0 0 1-1.573-4.516l-.221-3.534a2.714 2.714 0 0 0-2.709-2.544h-3.114Zm1.557 15c-.69 0-1.25-.56-1.25-1.25v-.75h2.5V19c0 .69-.56 1.25-1.25 1.25Z",
  "clip-rule": "evenodd"
}, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$9
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$9);
}
const NotificationIcon = { name: "basil-notification-outline", render: render$9 };
const _hoisted_1$8 = {
  viewBox: "0 0 1024 1024",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$8 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7l23.1 23.1L882 542.3h-96.1z"
}, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$8
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$8);
}
const DashboardIcon = { name: "ant-design-home-outlined", render: render$8 };
const _hoisted_1$7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m9.25 22l-.4-3.2q-.325-.125-.613-.3t-.562-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.337v-.674q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2h-5.5Zm2.8-6.5q1.45 0 2.475-1.025T15.55 12q0-1.45-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 1.45 1.012 2.475T12.05 15.5Z"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$7
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$7);
}
const SettingsIcon = { name: "material-symbols-settings", render: render$7 };
const _hoisted_1$6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10h12m0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$6
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$6);
}
const LockerIcon = { name: "mdi-secure-outline", render: render$6 };
const _hoisted_1$5 = {
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M24 13h-2a3.003 3.003 0 0 0-3-3V8a5.006 5.006 0 0 1 5 5Z"
}, null, -1);
const _hoisted_3$5 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M28 13h-2a7.008 7.008 0 0 0-7-7V4a9.01 9.01 0 0 1 9 9zm-7.667 8.482l2.24-2.24a2.167 2.167 0 0 1 2.337-.48l2.728 1.092A2.167 2.167 0 0 1 29 21.866v4.961a2.167 2.167 0 0 1-2.284 2.169C7.594 27.806 3.732 11.61 3.015 5.408A2.162 2.162 0 0 1 5.169 3h4.873a2.167 2.167 0 0 1 2.012 1.362l1.091 2.728a2.167 2.167 0 0 1-.48 2.337l-2.24 2.24s1.242 8.732 9.908 9.815z"
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$5,
  _hoisted_3$5
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_4$1);
}
const PhoneIcon = { name: "carbon-phone-voice-filled", render: render$5 };
const _hoisted_1$4 = {
  viewBox: "0 0 2048 2048",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M256 1536h768v128H128V128h256V0h128v128h896V0h128v128h256v896h-128V640H256v896zm0-1280v256h1408V256h-128v128h-128V256H512v128H384V256H256zm1792 896v384h-384v-128h190q-45-60-112-94t-142-34q-59 0-111 20t-95 55t-70 85t-38 107l-127-22q14-81 54-149t98-118t133-78t156-28q91 0 174 35t146 102v-137h128zm-448 768q58 0 111-20t95-55t70-85t38-107l127 22q-14 81-54 149t-98 118t-133 78t-156 28q-91 0-174-35t-146-102v137h-128v-384h384v128h-190q45 60 112 94t142 34z"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
}
const SubscriptionIcon = { name: "fluent-mdl2-recurring-event", render: render$4 };
const _hoisted_1$3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M3 23v-7q0-2.075 1.463-3.538T8 11h1V3q0-.825.588-1.413T11 1h2q.825 0 1.413.588T15 3v8h1q2.075 0 3.538 1.463T21 16v7H3Zm2-2h2v-3q0-.425.288-.713T8 17q.425 0 .713.288T9 18v3h2v-3q0-.425.288-.713T12 17q.425 0 .713.288T13 18v3h2v-3q0-.425.288-.713T16 17q.425 0 .713.288T17 18v3h2v-5q0-1.25-.875-2.125T16 13H8q-1.25 0-2.125.875T5 16v5Zm8-10V3h-2v8h2Z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
const ServicesIcon = { name: "material-symbols-cleaning-services", render: render$3 };
const _hoisted_1$2 = {
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3Z"
}, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m16 30l-8.436-9.949a35.076 35.076 0 0 1-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 0 1 22 0a10.884 10.884 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.812 18.395c.002 0 .234.308.287.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0 0 25 13a9 9 0 1 0-18 0a8.905 8.905 0 0 0 1.813 5.395Z"
}, null, -1);
const _hoisted_4 = [
  _hoisted_2$2,
  _hoisted_3$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_4);
}
const LocationsIcon = { name: "carbon-location", render: render$2 };
const _hoisted_1$1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6L8.4 17Zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const CancellationIcon = { name: "material-symbols-cancel-outline", render: render$1 };
const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-dasharray": "24",
  "stroke-dashoffset": "24",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M5 11L11 17L21 7"
}, [
  /* @__PURE__ */ createElementVNode("animate", {
    fill: "freeze",
    attributeName: "stroke-dashoffset",
    dur: "0.4s",
    values: "24;0"
  })
], -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const ConfirmationIcon = { name: "line-md-confirm", render };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    useUserStore();
    useMainStore();
    const is_sidebar_open = ref(false);
    const isMoreSettings = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0;
      const _component_ButtonSidebar = _sfc_main$2;
      _push(`<!--[--><div style="${ssrRenderStyle(!unref(is_sidebar_open) ? null : { display: "none" })}" tabindex="-1" class="fixed lg:hidden top-0 pointer-event-none flex items-center bg-[rgba(0,0,0,0.55)] justify-center left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen md:h-full" data-v-0b2f8f47></div><div id="sidebar" class="${ssrRenderClass([unref(is_sidebar_open) ? "hide-left  " : "show-right", "fixed w-[20rem] bottom-0 left-0 z-50 h-screen max-h-[calc(100vh-5rem)] bg-white px-2 pb-4 shadow-lg rounded-br-xl text-black items-center flex flex-col"])}" data-v-0b2f8f47><div class="relative w-full px-3 flex flex-col h-auto justify-between items-center" id="sidebar-header" data-v-0b2f8f47>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "https://freshandtidy.nl/_ipx/f_webp/images/logo.png",
        width: "150",
        height: "30",
        format: "webp"
      }, null, _parent));
      _push(`<h1 class="text-xl font-bold w-full text-center" data-v-0b2f8f47>Fresh &amp; Tidy </h1></div><div class="absolute top-1 -right-7 p-2 w-11 h-11 rounded-full bg-[#FAF9FC] flex flex-row justify-center items-center" id="sidebar-toggle" data-v-0b2f8f47><div class="hover:cursor-pointer w-full h-full bg-slate-200 rounded-full" data-v-0b2f8f47>`);
      _push(ssrRenderComponent(unref(ArrowIcon), {
        class: ["w-full h-full", !unref(is_sidebar_open) ? "animate-spinOnceBack" : "animate-spinOnce "]
      }, null, _parent));
      _push(`</div></div><div class="relative w-full h-full flex flex-col justify-between items-start mt-4 space-y-5 rounded-md" id="sidebar-content" data-v-0b2f8f47><div class="w-full h-auto flex flex-col items-start space-y-3 px-2 lg:px-4" data-v-0b2f8f47>`);
      _push(ssrRenderComponent(_component_ButtonSidebar, {
        text: "Dashboard",
        to: "/dashboard",
        notifications_count: 0,
        onClick: ($event) => is_sidebar_open.value = !unref(is_sidebar_open)
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DashboardIcon), { class: "w-6 h-6" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DashboardIcon), { class: "w-6 h-6" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><hr class="w-full border-gray-300" data-v-0b2f8f47><div class="w-full h-full scroll-smooth no-scrollbar flex flex-col items-start mt-4 space-y-3 px-2 lg:px-4" data-v-0b2f8f47>`);
      _push(ssrRenderComponent(_component_ButtonSidebar, {
        text: "Your Services",
        to: "/services",
        onClick: ($event) => is_sidebar_open.value = !unref(is_sidebar_open)
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ServicesIcon), { class: "w-6 h-6" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ServicesIcon), { class: "w-6 h-6" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ButtonSidebar, {
        text: "Locations",
        to: "/locations",
        onClick: ($event) => is_sidebar_open.value = !unref(is_sidebar_open)
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(LocationsIcon), { class: "w-6 h-6" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(LocationsIcon), { class: "w-6 h-6" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ButtonSidebar, {
        text: "Subscriptions",
        to: "/",
        onClick: ($event) => is_sidebar_open.value = !unref(is_sidebar_open)
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SubscriptionIcon), { class: "w-6 h-6" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SubscriptionIcon), { class: "w-6 h-6" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col w-full" data-v-0b2f8f47>`);
      _push(ssrRenderComponent(_component_ButtonSidebar, {
        text: "Scheduling",
        to: "/schedule",
        onClick: ($event) => is_sidebar_open.value = !unref(is_sidebar_open)
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CalendarIcon), { class: "w-6 h-6" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CalendarIcon), { class: "w-6 h-6" })
            ];
          }
        }),
        "icon-2": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ArrowIcon), {
              class: ["w-8 h-8 ml-3 group-hover:text-[#2da9db]", unref(isMoreSettings) ? "  rotate-90" : "-rotate-90"],
              onClick: ($event) => isMoreSettings.value = !unref(isMoreSettings)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ArrowIcon), {
                class: ["w-8 h-8 ml-3 group-hover:text-[#2da9db]", unref(isMoreSettings) ? "  rotate-90" : "-rotate-90"],
                onClick: withModifiers(($event) => isMoreSettings.value = !unref(isMoreSettings), ["stop", "prevent"])
              }, null, 8, ["onClick", "class"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex w-full h-auto pl-[1.4rem] py-2 rounded-b-md" style="${ssrRenderStyle(unref(isMoreSettings) ? null : { display: "none" })}" data-v-0b2f8f47><div class="stick" data-v-0b2f8f47></div><div class="flex flex-col w-full h-auto pl-[1.3rem] gap-y-2" style="${ssrRenderStyle(unref(isMoreSettings) ? null : { display: "none" })}" data-v-0b2f8f47><div class="w-auto flex gap-x-2 hover:text-blue-400 rounded-md px-2 hover:cursor-pointer" data-v-0b2f8f47>`);
      _push(ssrRenderComponent(unref(ConfirmationIcon), { class: "w-5 h-5" }, null, _parent));
      _push(`<p data-v-0b2f8f47>Initial Confirmation</p></div><div class="w-auto flex gap-x-2 hover:text-blue-400 rounded-md px-2 hover:cursor-pointer" data-v-0b2f8f47>`);
      _push(ssrRenderComponent(unref(NotificationIcon), { class: "w-5 h-5" }, null, _parent));
      _push(`<p data-v-0b2f8f47>Reminders </p></div><div class="w-auto flex gap-x-2 hover:text-blue-400 rounded-md px-2 hover:cursor-pointer" data-v-0b2f8f47>`);
      _push(ssrRenderComponent(unref(CancellationIcon), { class: "w-5 h-5" }, null, _parent));
      _push(`<p data-v-0b2f8f47>Cancellation </p></div></div></div></div>`);
      _push(ssrRenderComponent(_component_ButtonSidebar, {
        text: "Call Logs",
        to: "/calls",
        onClick: ($event) => is_sidebar_open.value = !unref(is_sidebar_open)
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PhoneIcon), { class: "w-6 h-6" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(PhoneIcon), { class: "w-6 h-6" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col w-full" data-v-0b2f8f47>`);
      _push(ssrRenderComponent(_component_ButtonSidebar, {
        text: "Settings",
        to: "/dashboard/settings",
        onClick: ($event) => is_sidebar_open.value = !unref(is_sidebar_open)
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SettingsIcon), { class: "w-6 h-6" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SettingsIcon), { class: "w-6 h-6" })
            ];
          }
        }),
        "icon-2": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ArrowIcon), {
              class: ["w-8 h-8 ml-3 group-hover:text-[#2da9db]", unref(isMoreSettings) ? "  rotate-90" : "-rotate-90"],
              onClick: ($event) => isMoreSettings.value = !unref(isMoreSettings)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ArrowIcon), {
                class: ["w-8 h-8 ml-3 group-hover:text-[#2da9db]", unref(isMoreSettings) ? "  rotate-90" : "-rotate-90"],
                onClick: withModifiers(($event) => isMoreSettings.value = !unref(isMoreSettings), ["stop", "prevent"])
              }, null, 8, ["onClick", "class"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex w-full h-auto pl-[1.4rem] py-2 rounded-b-md" style="${ssrRenderStyle(unref(isMoreSettings) ? null : { display: "none" })}" data-v-0b2f8f47><div class="stick" data-v-0b2f8f47></div><div class="flex flex-col w-full h-auto pl-[1.3rem] gap-y-2" style="${ssrRenderStyle(unref(isMoreSettings) ? null : { display: "none" })}" data-v-0b2f8f47><div class="w-auto flex gap-x-2 hover:text-blue-400 rounded-md px-2 hover:cursor-pointer" data-v-0b2f8f47>`);
      _push(ssrRenderComponent(unref(AccountsIcon), { class: "w-5 h-5" }, null, _parent));
      _push(`<p data-v-0b2f8f47>account </p></div><div class="w-auto flex gap-x-2 hover:text-blue-400 rounded-md px-2 hover:cursor-pointer" data-v-0b2f8f47>`);
      _push(ssrRenderComponent(unref(PaymentsIcon), { class: "w-5 h-5" }, null, _parent));
      _push(`<p data-v-0b2f8f47>payments </p></div><div class="w-auto flex gap-x-2 hover:text-blue-400 rounded-md px-2 hover:cursor-pointer" data-v-0b2f8f47>`);
      _push(ssrRenderComponent(unref(LockerIcon), { class: "w-5 h-5" }, null, _parent));
      _push(`<p data-v-0b2f8f47>security</p></div><p data-v-0b2f8f47>Notifications</p></div></div></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0b2f8f47"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    useRouter();
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Topbar = _sfc_main$3;
      const _component_Sidebar = __nuxt_component_1;
      _push(`<!--[--><div class="h-auto flex flex-row bg-[#FAF9FC] justify-center items-start w-full" id="default"><div class="absolute overlaying top-0 left-0 w-full h-screen bg-black opacity-40 z-10 hidden-overlay" id="overlay"></div>`);
      _push(ssrRenderComponent(_component_Topbar, { class: "topbar hidden lg:flex w-full fixed top-0 h-[--topbar-height] bg-white z-50" }, null, _parent));
      if (unref(userStore).isLogged) {
        _push(`<div class="navigation top-0 z-40">`);
        _push(ssrRenderComponent(_component_Sidebar, { class: "" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([unref(route).path !== "/login" && unref(route).path !== "/signup/carrier" && unref(route).path !== "/signup/arrow" ? "lg:px-8 py-7 lg:ml-[20rem]" : "", "w-full h-auto min-h-[calc(100vh-4rem)] mt-[3rem] lg:mt-[4rem]"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", { class: "" }, null, _push, _parent);
      _push(`</div></div><div class="cursor cursor--small"></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-58005de5.mjs.map
