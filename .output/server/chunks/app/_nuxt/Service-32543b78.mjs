import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Service",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: false
    },
    selected: {
      type: String,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const bgColor = computed(() => {
      if (props.selected) {
        console.log(props.selected);
        return props.selected.toLocaleLowerCase() === props.title.toLowerCase() ? "bg-black text-white" : "bg-white";
      } else {
        return "bg-white";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["relative flex h-auto hover:animate-[bump_0.3s_ease-in-out] flex-col lg:w-[calc(25%-1rem)] w-full gap-y-4 md:gap-y-6 text-[#02374b] lg:text-center items-center lg:items-center shadow-[0_1px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl p-[2rem] md:px-[4rem] hover:cursor-pointer", unref(bgColor)],
        id: __props.title.replace(/ /g, "-")
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
      _push(`<h3 class="font-bold text-2xl md:text-3xl">${ssrInterpolate(__props.title.split(" ")[0])}<p>${ssrInterpolate(__props.title.split(" ")[1])}</p></h3></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Service.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Service-32543b78.mjs.map
