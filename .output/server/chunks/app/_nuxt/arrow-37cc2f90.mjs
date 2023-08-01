import { _ as __nuxt_component_0 } from './nuxt-img-a1ef923d.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, ref, unref } from 'vue';
import { h as useUserStore, u as useRouter } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { H as HideIcon, S as ShowIcon } from './show-6512c395.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-ecdf6ea3.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ArrowRegisterForm",
  __ssrInlineRender: true,
  setup(__props) {
    useUserStore();
    useRouter();
    const is_password_visible = ref(false);
    const areAllChecked = ref(false);
    const email = ref("");
    const password1 = ref("");
    const password2 = ref("");
    const lastName = ref("");
    const firstName = ref("");
    const userPhone = ref("");
    const employeeId = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "w-full h-full rounded-xl px-8 pt-6 pb-8 mb-4" }, _attrs))}><h1 class="mb-7 text-3xl font-itim -ml-2">Register</h1><h2 class="mb-4 text-xl font-itim mt-6">Arrow&#39;s account information</h2><div class="flex w-full items-center gap-x-6"><div class="w-1/2 flex flex-col"><input class="w-full h-10 border-2 border-gray-300 rounded-lg px-2" id="register-first-name"${ssrRenderAttr("value", firstName.value)} type="text" placeholder="First Name"><p class="text-xs text-red-700 mt-2 mb-2">this field is required. Please fill in the data..</p></div><div class="w-1/2 flex flex-col"><input class="w-full h-10 border-2 border-gray-300 rounded-lg px-2" id="register-last-name"${ssrRenderAttr("value", lastName.value)} type="text" placeholder="Last Name"><p class="text-xs text-red-700 mt-2 mb-2">this field is required. Please fill in the data..</p></div></div><div class="flex w-full items-center gap-x-6"><div class="w-1/2 flex flex-col"><input class="w-full h-10 border-2 border-gray-300 rounded-lg px-2" id="register-email"${ssrRenderAttr("value", email.value)} type="text" placeholder="email"><p class="text-xs text-red-700 mt-2 mb-2">this field is required. Please fill in the data.</p></div><div class="w-1/2 flex flex-col"><input class="w-full h-10 border-2 border-gray-300 rounded-lg px-2" id="register-phone"${ssrRenderAttr("value", userPhone.value)} type="text" placeholder="Phone number"><p class="text-xs text-red-700 mt-2 mb-2">this field is required. Please fill in the data.</p></div></div><input class="w-full h-10 border-2 border-gray-300 rounded-lg px-2" id="register-employeeId"${ssrRenderAttr("value", employeeId.value)} type="text" placeholder="Employee Id"><p class="text-xs text-red-700 mt-2">Enter your&#39;s arrow employee id.</p><div class="password w-full relative"><p class="font-roboto">Password</p><input class="password-input w-full h-10 border-2 border-gray-300 rounded-lg px-2" type="password"${ssrRenderAttr("value", password1.value)} placeholder="Password"><button class="absolute right-2 top-1/2 bg-white px-2 rounded-md" type="button" id="password-toggle">`);
      if (!is_password_visible.value) {
        _push(ssrRenderComponent(unref(HideIcon), { class: "w-6 h-6" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ShowIcon), { class: "w-6 h-6" }, null, _parent));
      }
      _push(`</button></div><p class="text-xs text-red-700 mt-2">Enter password it should have at least 8 characters.</p><p class="text-xs text-red-700 mt-2 mb-2">this field is required. Please fill in the data..</p><input class="password-input w-full h-10 border-2 border-gray-300 rounded-lg px-2"${ssrRenderAttr("value", password2.value)} type="password" placeholder="Password"><p class="text-xs text-red-700 mt-2">Enter password again.</p><div class="flex flex-col w-full h-auto space-y-4 mt-4" id="agreements"><p class="text-base text-black font-semibold">Formal consents</p><div class="flex items-center justify-start w-full h-auto"><input class="form-checkbox h-[1.2rem] w-[1.2rem] text-gray-600" id="agreement"${ssrIncludeBooleanAttr(areAllChecked.value) ? " checked" : ""} type="checkbox"><p class="text-sm w-5/6 text-black-700 ml-2 font-semibold">Select all</p></div><div class="flex items-center justify-start w-full h-auto"><input class="form-checkbox h-[1.2rem] w-[1.2rem] text-gray-600" id="agreement" type="checkbox"${ssrIncludeBooleanAttr(areAllChecked.value) ? " checked" : ""}><p class="text-xs w-5/6 text-gray-700 ml-2"> I accept the store&#39;s terms and conditions *</p></div><div class="flex items-center justify-start w-full h-auto"><input class="form-checkbox h-[1.2rem] w-[1.2rem] text-gray-600" id="agreement" type="checkbox"${ssrIncludeBooleanAttr(areAllChecked.value) ? " checked" : ""}><p class="text-xs w-5/6 text-gray-700 ml-2">I want to receive information about current offers and promotions by e-mail</p></div><div class="flex items-center justify-start w-full h-auto"><input class="form-checkbox h-[1.2rem] w-[1.2rem] text-gray-600" id="agreement" type="checkbox"${ssrIncludeBooleanAttr(areAllChecked.value) ? " checked" : ""}><p class="text-xs w-5/6 text-gray-700 ml-2">I want to receive an offer tailored to my needs</p></div></div><button class="bg-blue-500 hover:bg-blue-700 mt-4 text-white font-base text-sm py-[0.6rem] w-full px-4 rounded-full focus:outline-none focus:shadow-outline" type="button"><p>Register</p></button></form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Login/ArrowRegisterForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "arrow",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0;
      const _component_LoginArrowRegisterForm = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-auto w-full h-auto flex flex-col lg:flex-row" }, _attrs))}><div class="lg:w-[50%] xl:w-[45%] w-full h-full flex flex-col px-8 items-center relative"><div class="login-header w-full h-auto flex space-x-8">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        class: "object-cover",
        src: "images/arrow-logo.png",
        width: "190",
        format: "webp"
      }, null, _parent));
      _push(`<div class="login-header w-auto h-auto flex flex-col mt-6"><h1 class="font-robotolight text-xl md:text-2xl xl:text-3xl">Arrow&#39;s carrier page</h1><p class="font-robotolight text-base">Signup as carrier</p></div></div>`);
      _push(ssrRenderComponent(_component_LoginArrowRegisterForm, null, null, _parent));
      _push(`<p class="absolute bottom-2 text-lg">Dont have an account? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "font-semibold hover:cursor-pointer",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign in`);
          } else {
            return [
              createTextVNode("Sign in")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        class: "lg:fixed top-0 right-0 xl:w-[55%] lg:w-[50%] w-full h-[100vh] object-cover",
        src: "https://www.arrow.com/company/wp-content/uploads/2022/08/Venlo-5.png",
        format: "webp"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signup/arrow.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=arrow-37cc2f90.mjs.map
