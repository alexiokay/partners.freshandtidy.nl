import { _ as _sfc_main$1 } from './Approved-cc09b34f.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { h as useUserStore, l as useRuntimeConfig } from '../server.mjs';
import { u as useFetch } from './fetch-8ceaccdb.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
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
import './asyncData-aca9c4dd.mjs';

const updateProvinces = async (selectedRegions, token2) => {
  const config = /* @__PURE__ */ useRuntimeConfig();
  console.log("token", token2);
  console.log("api url", config.public.API_URL);
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Host: `${config.public.FETCH_HOST}`,
      Authorization: `Token ${token2}`
    },
    body: JSON.stringify({ provinces: selectedRegions })
  };
  const response = await useFetch(
    `${config.public.API_URL}api/v1/localizations-province-set/update`,
    options,
    "$GhfzX5DDVw"
  ).then((res) => {
    const data = res.data.value;
    const error = res.error.value;
    if (error) {
      console.log(error);
      return false;
    } else {
      console.log("data", data);
      return data;
    }
  });
  return response;
};
const token = "3cb1238aa7c01989251b0481bead53ab7001f87e";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "locations",
  __ssrInlineRender: true,
  setup(__props) {
    useUserStore();
    const selectedProvinces = ref([]);
    ref([]);
    ref();
    const isModalOpen = ref(false);
    const isSaving = ref(false);
    const isSaved = ref(false);
    const isSavingModal = ref(false);
    const onConfirmSave = async () => {
      isModalOpen.value = false;
      isSaving.value = true;
      isSavingModal.value = true;
      isModalOpen.value = false;
      const response = await updateProvinces(selectedProvinces.value, token);
      isSaving.value = false;
      if (response === false) {
        isSaved.value = false;
      } else {
        isSaved.value = true;
      }
      setTimeout(() => {
        isSavingModal.value = false;
        isSaved.value = false;
      }, 3e3);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ModalApproved = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:pt-[3rem]" }, _attrs))}><h1 class="w-full text-center text-5xl font-semibold">Locations</h1><div class="flex w-full my-8 mt-12 px-8 text-xl justify-between"><p>Select a regions of Netherlands where you want to provide your services</p><button class="bg-violet-800 hover:bg-violet-600 text-white px-4 py-2 rounded-md w-[7rem] text-xl">Save</button></div><div class="h-[calc(40rem)] w-full z-10" id="map"></div><p class="text-lg font-bold mb-2">Gemeenten:</p><ul><!--[-->`);
      ssrRenderList(unref(selectedProvinces), (city) => {
        _push(`<li>${ssrInterpolate(city.name)}</li>`);
      });
      _push(`<!--]--></ul>`);
      if (unref(isModalOpen)) {
        _push(ssrRenderComponent(_component_ModalApproved, {
          class: "z-50",
          onClose: ($event) => isModalOpen.value = false,
          isOpen: unref(isModalOpen),
          data: unref(selectedProvinces),
          mode: "update",
          onConfirm: onConfirmSave,
          onNo: ($event) => isModalOpen.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="fixed bottom-6 left-[24rem] w-[10rem] h-[3rem] rounded-md shadow-lg bg-white z-50 px-4 py-2 flex items-center justify-center" style="${ssrRenderStyle(unref(isSavingModal) ? null : { display: "none" })}">${ssrInterpolate(unref(isSaving) ? "Saving..." : !unref(isSaving) && unref(isSaved) ? "Saved" : "Error")}</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/locations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=locations-47229fe7.mjs.map
