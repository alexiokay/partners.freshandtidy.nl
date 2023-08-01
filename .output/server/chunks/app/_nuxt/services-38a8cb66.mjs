import { useSSRContext, defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, openBlock, createElementBlock, createElementVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './Service-32543b78.mjs';
import { _ as __nuxt_component_0 } from './nuxt-img-a1ef923d.mjs';
import { u as ue } from './switch-56c95afc.mjs';
import '../server.mjs';
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
const _hoisted_2 = /* @__PURE__ */ createElementVNode("g", {
  id: "galaAdd0",
  fill: "none",
  stroke: "currentColor",
  "stroke-dasharray": "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "4",
  "stroke-opacity": "1",
  "stroke-width": "16"
}, [
  /* @__PURE__ */ createElementVNode("circle", {
    id: "galaAdd1",
    cx: "128",
    cy: "128",
    r: "112"
  }),
  /* @__PURE__ */ createElementVNode("path", {
    id: "galaAdd2",
    d: "M 79.999992,128 H 176.0001"
  }),
  /* @__PURE__ */ createElementVNode("path", {
    id: "galaAdd3",
    d: "m 128.00004,79.99995 v 96.0001"
  })
], -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const AddIcon = { name: "gala-add", render };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AddService",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex h-auto hover:animate-[bump_0.3s_ease-in-out] text-black flex-col lg:w-[calc(25%-1rem)] w-full justify-center gap-y-4 md:gap-y-12 lg:text-center items-center lg:items-center shadow-[0_1px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl p-[2rem] md:px-[4rem] hover:cursor-pointer" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(AddIcon), { class: "w-[52%] md:w-full h-auto md:h-[8rem]" }, null, _parent));
      _push(`<h3 class="font-bold text-2xl md:text-3xl">Add New Service</h3></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddService.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    const isEditMode = ref(false);
    ref("");
    const selected = ref("house cleaning");
    const instantBooking = ref(false);
    const selectMenu = (title) => {
      selected.value = title;
      scrollBack(document.getElementById(title.replace(/ /g, "-")));
    };
    const scrollBack = (el) => {
      setTimeout(() => {
        el.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center"
        });
      }, 1e3);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AddService = _sfc_main$1;
      const _component_Service = _sfc_main$2;
      const _component_nuxt_img = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col px-10 h-auto relative overflow-visible md:pt-[3rem]" }, _attrs))}><h1 class="w-full text-center text-5xl font-semibold">Your Services</h1><div class="flex w-full my-8 mt-12"><div class="instant-booking flex w-auto gap-x-4 px-8"><p class="text-xl">Instant booking</p>`);
      _push(ssrRenderComponent(unref(ue), {
        class: ["relative inline-flex h-8 w-20 items-center rounded-full", unref(instantBooking) ? "bg-blue-600" : "bg-gray-200"],
        modelValue: unref(instantBooking),
        "onUpdate:modelValue": ($event) => isRef(instantBooking) ? instantBooking.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="${ssrRenderClass([unref(instantBooking) ? "text-white left-3" : "right-3", "absolute text-lg"])}"${_scopeId}>${ssrInterpolate(unref(instantBooking) ? "On" : "Off")}</p><span class="sr-only"${_scopeId}>Enable notifications</span><span class="${ssrRenderClass([unref(instantBooking) ? "translate-x-[3.3rem]" : "translate-x-1", "inline-block h-6 w-6 transform rounded-full bg-white transition"])}"${_scopeId}></span>`);
          } else {
            return [
              createVNode("p", {
                class: ["absolute text-lg", unref(instantBooking) ? "text-white left-3" : "right-3"]
              }, toDisplayString(unref(instantBooking) ? "On" : "Off"), 3),
              createVNode("span", { class: "sr-only" }, "Enable notifications"),
              createVNode("span", {
                class: ["inline-block h-6 w-6 transform rounded-full bg-white transition", unref(instantBooking) ? "translate-x-[3.3rem]" : "translate-x-1"]
              }, null, 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="recurrence flex w-auto gap-x-4 px-8 items-center"><p class="text-xl"> Recurrence of service</p><button class="text-xl border-1 bg-black text-white rounded-full px-4 py-1">Recurrence</button><button class="text-xl bg-black text-white rounded-full px-4 py-1">One time</button></div></div><div class="w-full flex flex-wrap justify-center md:justify-between gap-y-[2.6rem] mt-[3rem] px-8 after:flex-auto gap-x-[1.3rem] overflow-y-scroll max-h-[calc(100vh-24rem)]">`);
      _push(ssrRenderComponent(_component_AddService, null, null, _parent));
      _push(ssrRenderComponent(_component_Service, {
        onClick: ($event) => isEditMode.value = !unref(isEditMode),
        onSelect: selectMenu,
        selected: unref(selected),
        title: "HOUSE CLEANING",
        desc: "We clean and care  for variety of hard surface flooring at many places of business."
      }, {
        default: withCtx((icon, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              class: "w-[52%] md:w-auto h-auto md:h-auto",
              src: "icons/icon-13.png",
              width: "190",
              h: "45"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                class: "w-[52%] md:w-auto h-auto md:h-auto",
                src: "icons/icon-13.png",
                width: "190",
                h: "45"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Service, {
        onSelect: selectMenu,
        title: "KITCHEN CLEANING",
        selected: unref(selected),
        desc: "We clean and care  for variety of hard surface flooring at many places of business."
      }, {
        default: withCtx((icon, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              class: "w-[52%] md:w-auto h-auto md:h-auto",
              src: "icons/icon-23.png",
              width: "190",
              h: "45"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                class: "w-[52%] md:w-auto h-auto md:h-auto",
                src: "icons/icon-23.png",
                width: "190",
                h: "45"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Service, {
        onSelect: selectMenu,
        title: "FLOOR CLEANING",
        selected: unref(selected),
        desc: "We clean and care  for variety of hard surface flooring at many places of business."
      }, {
        default: withCtx((icon, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              class: "w-[52%] md:w-auto h-auto md:h-auto",
              src: "icons/icon-33.png",
              width: "190",
              h: "45"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                class: "w-[52%] md:w-auto h-auto md:h-auto",
                src: "icons/icon-33.png",
                width: "190",
                h: "45"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Service, {
        onSelect: selectMenu,
        title: "BATHROOM CLEANING",
        selected: unref(selected),
        desc: "We clean and care  for variety of hard surface flooring at many places of business."
      }, {
        default: withCtx((icon, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              class: "w-[52%] md:w-auto h-auto md:h-auto",
              src: "icons/icon-43.png",
              width: "190",
              h: "45"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                class: "w-[52%] md:w-auto h-auto md:h-auto",
                src: "icons/icon-43.png",
                width: "190",
                h: "45"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Service, {
        onSelect: selectMenu,
        title: "OFFICE CLEANING",
        selected: unref(selected),
        desc: "We clean and care  for variety of hard surface flooring at many places of business."
      }, {
        default: withCtx((icon, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              class: "w-[52%] md:w-auto h-auto md:h-auto",
              src: "icons/icon-53.png",
              width: "190",
              h: "45"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                class: "w-[52%] md:w-auto h-auto md:h-auto",
                src: "icons/icon-53.png",
                width: "190",
                h: "45"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Service, {
        onSelect: selectMenu,
        title: "CAR CLEANING",
        selected: unref(selected),
        desc: "We clean and care  for variety of hard surface flooring at many places of business."
      }, {
        default: withCtx((icon, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              class: "w-[52%] md:w-auto h-auto md:h-auto",
              src: "icons/icon-63.png",
              width: "190",
              h: "45"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                class: "w-[52%] md:w-auto h-auto md:h-auto",
                src: "icons/icon-63.png",
                width: "190",
                h: "45"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Service, {
        onSelect: selectMenu,
        title: "WINDOW CLEANING",
        selected: unref(selected),
        desc: "We clean and care  for variety of hard surface flooring at many places of business."
      }, {
        default: withCtx((icon, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              class: "w-[52%] md:w-auto h-auto md:h-auto",
              src: "icons/icon-73.png",
              width: "190",
              h: "45"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                class: "w-[52%] md:w-auto h-auto md:h-auto",
                src: "icons/icon-73.png",
                width: "190",
                h: "45"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Service, {
        onSelect: selectMenu,
        title: "POWER WASHING",
        selected: unref(selected),
        desc: "We clean and care  for variety of hard surface flooring at many places of business."
      }, {
        default: withCtx((icon, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              class: "w-[52%] md:w-auto h-auto md:h-auto",
              src: "icons/icon-83.png",
              width: "190",
              h: "45"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                class: "w-[52%] md:w-auto h-auto md:h-auto",
                src: "icons/icon-83.png",
                width: "190",
                h: "45"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Service, {
        onSelect: selectMenu,
        title: "UPHOLSTERY CLEANING",
        selected: unref(selected),
        desc: "We clean and care  for variety of hard surface flooring at many places of business."
      }, {
        default: withCtx((icon, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              class: "w-[52%] md:w-auto h-auto md:h-auto",
              src: "icons/icon-93.png",
              width: "190",
              h: "45"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                class: "w-[52%] md:w-auto h-auto md:h-auto",
                src: "icons/icon-93.png",
                width: "190",
                h: "45"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Service, {
        onSelect: selectMenu,
        title: "GARDEN MAINTENANCE",
        selected: unref(selected),
        desc: "We clean and care  for variety of hard surface flooring at many places of business."
      }, {
        default: withCtx((icon, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              class: "w-[52%] md:w-auto h-auto md:h-auto",
              src: "icons/icon-103.png",
              width: "190",
              h: "45"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                class: "w-[52%] md:w-auto h-auto md:h-auto",
                src: "icons/icon-103.png",
                width: "190",
                h: "45"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Service, {
        onSelect: selectMenu,
        title: "OVEN AND APPLIANCE CLEANING",
        selected: unref(selected),
        desc: "We clean and care  for variety of hard surface flooring at many places of business."
      }, null, _parent));
      _push(`</div><div class="w-full h-full bg-[#707070] fixed top-0 left-0 px-12" style="${ssrRenderStyle(unref(isEditMode) ? null : { display: "none" })}"></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=services-38a8cb66.mjs.map
