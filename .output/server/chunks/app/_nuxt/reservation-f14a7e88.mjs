import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex py-8 bg-[#Fcf2ec] 3xl:px-[8rem] lg:px-[8rem] md:px-6 pl-4 gap-x-12" }, _attrs))}><div class="flex flex-col w-[45%] gap-y-12"><div class="w-full h-[30rem] rounded-[4rem] shadow-xl bg-white" id="map"></div><div class="w-full h-[25rem] rounded-[4rem] shadow-xl bg-white"></div></div><div class="flex flex-col w-[55%] gap-y-12"><div class="w-full h-[30rem] rounded-[4rem] shadow-xl bg-white"></div><div class="w-full h-[25rem] rounded-[4rem] shadow-xl bg-white"></div></div></div>`);
}
const _sfc_main = {};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reservation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reservation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);

export { reservation as default };
//# sourceMappingURL=reservation-f14a7e88.mjs.map
