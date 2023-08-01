import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "calls",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    ref("");
    ref("house cleaning");
    ref(false);
    const detectEndOfList = (index) => {
      if (index === filteredCarriers.length - 1) {
        return "end-of-list";
      }
    };
    const filteredCalls = [
      {
        id: 1,
        name: "John Doe",
        email: ""
      }
    ];
    const filteredCarriers = [
      {
        id: 1,
        name: "John Doe",
        email: ""
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col px-10 h-auto relative overflow-visible md:pt-[3rem]" }, _attrs))}><h1 class="w-full text-center text-5xl font-semibold">Call Logs</h1><div class="flex w-full my-8 mt-12 px-8"><p>dsadsa</p></div><div class="w-full flex flex-wrap justify-center md:justify-between gap-y-[2.6rem] mt-[3rem] px-8 after:flex-auto gap-x-[1.3rem] overflow-y-scroll max-h-[calc(100vh-24rem)]"><table class="table-auto w-full"><thead class="border-b-2 border-gray-200"><tr><th class="px-4 py-2 border-r bg-gray-100 w-[10%]">timestamp</th><th class="px-4 py-2 border-r bg-gray-100 w-[18%]">phone number</th><th class="px-4 py-2 border-r bg-gray-100 w-[26%]">service</th><th class="px-4 py-2 border-r bg-gray-100 w-[20%]">duration (minutes)</th><th class="px-4 py-2 w-[10%] bg-gray-100">recording</th></tr></thead><tbody>`);
      if (filteredCarriers.length <= 0) {
        _push(`<tr id="end-of-list"></tr>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(filteredCalls, (account, index) => {
          _push(`<tr class="border-t"${ssrRenderAttr("id", detectEndOfList(index))}><td class="border-r px-3 py-2 text-center">321321</td><td class="border-r px-4 py-2 flex space-x-2"><p>3232</p></td><td class="border-r px-4 py-2"><p class="text-blue-500 hover:cursor-pointer">cleaning</p></td><td class="border-r px-4 py-2">1:34</td><td class="px-4 py-2 gap-x-2"><div class="flex"><button class="border-2 border-gray-200 rounded-md px-6 py-1 font-semibold hover:bg-blue-400 hover:text-white">Edit</button></div></td></tr>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</tbody></table></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/calls.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=calls-528f2799.mjs.map
