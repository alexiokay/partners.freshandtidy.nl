import { _ as __nuxt_component_0 } from './nuxt-img-a1ef923d.mjs';
import { defineComponent, ref, withAsyncContext, mergeProps, unref, useSSRContext, openBlock, createElementBlock, createElementVNode } from 'vue';
import { u as useLang } from './useLang-de115d83.mjs';
import { h as useUserStore, u as useRouter } from '../server.mjs';
import { u as useFetch } from './fetch-8ceaccdb.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { u as useMainStore } from './Main-ca6a8d39.mjs';
import { H as HideIcon, S as ShowIcon } from './show-6512c395.mjs';
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
import './asyncData-aca9c4dd.mjs';
import '@vueuse/core';

const _hoisted_1$2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M6 12a6 6 0 0 0 11.659 2H12v-4h9.805v4H21.8c-.927 4.564-4.962 8-9.8 8c-5.523 0-10-4.477-10-10S6.477 2 12 2a9.99 9.99 0 0 1 8.282 4.393l-3.278 2.295A6 6 0 0 0 6 12Z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
const GoogleIcon = { name: "gg-google", render: render$2 };
const _hoisted_1$1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const FacebookIcon = { name: "ic-baseline-facebook", render: render$1 };
const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const AppleIcon = { name: "ic-baseline-apple", render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useUserStore();
    useMainStore();
    useLang();
    useRouter();
    const message = ref();
    const { data: messageData } = ([__temp, __restore] = withAsyncContext(() => useFetch("api/test", "$4Q7McJQDXG")), __temp = await __temp, __restore(), __temp);
    message.value = messageData.value;
    const is_password_visible = ref(false);
    const islocationModal = ref();
    const email = ref();
    const password = ref();
    console.log(islocationModal.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full md:h-screen flex flex-col lg:flex-row" }, _attrs))}><div class="lg:w-[45%] w-full h-screen flex flex-col px-[5rem] items-center"><div class="flex flex-col md:px-8 items-center mt-[8rem] gap-y-6 w-full h-auto justify-start mb-32"><p class="text-5xl font-bold font-publicsans">Welcome back!</p><p class="text-xl text-gray-800">Login to your dashboard to manage, track and view generated leads and more.</p><div class="email w-full text-xl flex flex-col gap-y-3 mt-16"><p class="font-roboto">Email</p><input class="w-full h-[4rem] border-2 border-gray-500 rounded-full px-4" type="text"${ssrRenderAttr("value", unref(email))}></div><div class="password w-full relative text-xl flex flex-col gap-y-3"><p class="font-roboto">Password</p><input class="w-full h-[4rem] border-2 border-gray-500 rounded-full px-4" type="password"${ssrRenderAttr("value", unref(password))} id="password-input"><button class="absolute right-2 top-1/2 bg-white px-2 rounded-md" type="button" id="password-toggle">`);
      if (!unref(is_password_visible)) {
        _push(ssrRenderComponent(unref(HideIcon), { class: "w-6 h-6" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ShowIcon), { class: "w-6 h-6" }, null, _parent));
      }
      _push(`</button></div><div class="login-options flex flex-row w-full justify-between items-center"><p class="hover:cursor-pointer ml-auto">Forgot password?</p></div><button class="login-button w-full h-[4rem] text-xl rounded-full bg-black text-white">Login</button><div class="flex flex-row w-full justify-between items-center mt-6 text-lg"><hr class="w-[40%] border-gray-400"><p>or continue with </p><hr class="w-[40%] border-gray-400"></div><div class="flex flex-row w-full justify-center items-center mt-6 text-lg gap-x-8"><button class="w-auto h-auto text-xl p-5 rounded-full bg-black text-white flex flex-row justify-center items-center gap-x-2">`);
      _push(ssrRenderComponent(unref(GoogleIcon), { class: "w-10 h-10" }, null, _parent));
      _push(`</button><button class="w-auto h-auto text-xl p-5 rounded-full bg-black text-white flex flex-row justify-center items-center gap-x-2">`);
      _push(ssrRenderComponent(unref(AppleIcon), { class: "w-10 h-10" }, null, _parent));
      _push(`</button><button class="w-auto h-auto text-xl p-5 rounded-full bg-black text-white flex flex-row justify-center items-center gap-x-2">`);
      _push(ssrRenderComponent(unref(FacebookIcon), { class: "w-10 h-10" }, null, _parent));
      _push(`</button></div><p class="absolute bottom-6 text-lg">Not a member? <span class="font-semibold hover:cursor-pointer text-green-700">Register now</span></p></div></div><div class="lg:w-[55%] w-full h-full p-12">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        class: "w-full h-full my-auto rounded-2xl object-cover",
        src: "images/loginpage2.png",
        format: "webp"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-49b20325.mjs.map
