import { _ as __nuxt_component_0 } from './nuxt-link-ecdf6ea3.mjs';
import { useSSRContext, defineComponent, ref, resolveComponent, mergeProps, withCtx, unref, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { A as ArrowIcon } from './arrow-right-alt-rounded-864b59b1.mjs';
import { h as useUserStore } from '../server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Saving",
  __ssrInlineRender: true,
  props: {
    isOpen: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle(_ctx.isOpen ? null : { display: "none" })}" tabindex="-1" class="fixed top-0 pointer-event-none flex items-center bg-[rgba(0,0,0,0.55)] justify-center left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen md:h-full"></div><div class="fixed top-0 pointer-event-none flex items-center justify-center left-0 right-0 z-50 mx-auto w-[30rem] p-4 md:inset-0 h-screen md:h-full" style="${ssrRenderStyle(_ctx.isOpen ? null : { display: "none" })}"><div class="relative bg-white rounded-lg shadow dark:bg-gray-700 h-[15rem]"><div class="flex items-center justify-between px-5 py-3 border-b bg-slate-50 rounded-t dark:border-gray-600"><h3 class="text-xl font-medium text-gray-900 dark:text-white"><p>Saving...</p></h3><button class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" type="button" data-modal-hide="medium-modal"><svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><span class="sr-only">Close modal</span></button></div><div class="p-2 space-y-6 overflow-y-auto h-[5.5rem] sm:auto w-[30rem]"><div class="flex items-center justify-center h-full w-full"><p class="text-3xl">Saved</p></div><p hidden class="text-base leading-relaxed text-gray-500 dark:text-gray-400"><p hidden>The European Unions General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p></p></div><div class="absolute bottom-0 w-full flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"><button class="w-full rounded-full text-center h-[2.4rem] bg-blue-600 text-sm text-white hover:bg-blue-700"><p>OK</p></button></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/Saving.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const setActive = (item) => {
      menu.value.forEach((element) => {
        element.is_active = false;
      });
      item.is_active = true;
    };
    const menu = ref([
      {
        text: "General",
        is_active: true
      },
      {
        text: "Notifications",
        is_active: false
      },
      {
        text: "Security",
        is_active: false
      },
      {
        text: "Privacy",
        is_active: false
      },
      {
        text: "Billing",
        is_active: false
      },
      {
        text: "Account",
        is_active: false
      }
    ]);
    if (userStore.getAccountType === "arrow-employee") {
      menu.value.push({
        text: "Arrow",
        is_active: false
      });
    }
    const is_modal_open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ButtonMenu = resolveComponent("ButtonMenu");
      const _component_SettingsPanel = resolveComponent("SettingsPanel");
      const _component_SettingsArrow = resolveComponent("SettingsArrow");
      const _component_ModalSaving = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "settings w-full h-full flex flex-col px-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-blue-700 hover:underline flex font-semibold items-center space-x-2",
        to: "/dashboard"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ArrowIcon), { class: "rotate-180" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Back to Dashboard</span>`);
          } else {
            return [
              createVNode(unref(ArrowIcon), { class: "rotate-180" }),
              createVNode("span", null, "Back to Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-3xl text-black font-semibold mt-4 flex space-x-3 items-center"><p>Settings</p></h1><hr class="w-full border-gray-300 my-4"><div class="w-full space-x-2 h-[3rem] items-center flex justify-start" id="settings-menu"><!--[-->`);
      ssrRenderList(unref(menu), (item) => {
        _push(ssrRenderComponent(_component_ButtonMenu, {
          text: item.text,
          is_active: item.is_active,
          onSetActive: ($event) => setActive(item)
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      if (unref(menu)[0].is_active) {
        _push(ssrRenderComponent(_component_SettingsPanel, {
          title: unref(menu)[0].text,
          onSave: ($event) => is_modal_open.value = true
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(menu)[unref(menu).length - 1].is_active && unref(userStore).accountType === "arrow-employee") {
        _push(ssrRenderComponent(_component_SettingsArrow, {
          title: unref(menu)[unref(menu).length - 1].text,
          onSave: ($event) => is_modal_open.value = true
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ModalSaving, {
        isOpen: unref(is_modal_open),
        onClose: ($event) => is_modal_open.value = false
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=settings-0983fa00.mjs.map
