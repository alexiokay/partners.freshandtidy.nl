import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

function ssrRender(_ctx, _push, _parent, _attrs) {
}
const _sfc_main = {};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/schedule.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const schedule = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);

export { schedule as default };
//# sourceMappingURL=schedule-739f3fff.mjs.map
