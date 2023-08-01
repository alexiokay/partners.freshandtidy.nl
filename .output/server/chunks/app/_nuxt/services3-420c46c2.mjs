import { _ as _sfc_main$1 } from './Service-32543b78.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "services3",
  __ssrInlineRender: true,
  setup(__props) {
    const isEditMode = ref(false);
    ref("");
    const selected = ref("house cleaning");
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
      const _component_Service = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex px-10 h-auto relative overflow-visible" }, _attrs))}><div class="w-[30%] flex flex-wrap justify-center md:justify-between gap-y-[2.6rem] mt-[3rem] px-8">`);
      _push(ssrRenderComponent(_component_Service, {
        onClick: ($event) => isEditMode.value = !unref(isEditMode),
        onSelect: selectMenu,
        selected: unref(selected),
        title: "HOUSE CLEANING",
        desc: "We clean and care  for variety of hard surface flooring at many places of business."
      }, null, _parent));
      _push(ssrRenderComponent(_component_Service, {
        onSelect: selectMenu,
        title: "KITCHEN CLEANING",
        selected: unref(selected),
        desc: "We clean and care  for variety of hard surface flooring at many places of business.",
        image: "icons/icon-13.png"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Service, {
        onSelect: selectMenu,
        title: "FLOOR CLEANING",
        selected: unref(selected),
        desc: "We clean and care  for variety of hard surface flooring at many places of business.",
        image: "icons/icon-23.png"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Service, {
        onSelect: selectMenu,
        title: "BATHROOM CLEANING",
        selected: unref(selected),
        desc: "We clean and care  for variety of hard surface flooring at many places of business.",
        image: "icons/icon-33.png"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Service, {
        onSelect: selectMenu,
        title: "OFFICE CLEANING",
        selected: unref(selected),
        desc: "We clean and care  for variety of hard surface flooring at many places of business.",
        image: "icons/icon-43.png"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Service, {
        onSelect: selectMenu,
        title: "CAR CLEANING",
        selected: unref(selected),
        desc: "We clean and care  for variety of hard surface flooring at many places of business.",
        image: "icons/icon-53.png"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Service, {
        onSelect: selectMenu,
        title: "WINDOW CLEANING",
        selected: unref(selected),
        desc: "We clean and care  for variety of hard surface flooring at many places of business.",
        image: "icons/icon-13.png"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Service, {
        onSelect: selectMenu,
        title: "POWER WASHING",
        selected: unref(selected),
        desc: "We clean and care  for variety of hard surface flooring at many places of business.",
        image: "icons/icon-13.png"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Service, {
        onSelect: selectMenu,
        title: "UPHOLSTERY CLEANING",
        selected: unref(selected),
        desc: "We clean and care  for variety of hard surface flooring at many places of business.",
        image: "icons/icon-13.png"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Service, {
        onSelect: selectMenu,
        title: "GARDEN MAINTENANCE",
        selected: unref(selected),
        desc: "We clean and care  for variety of hard surface flooring at many places of business.",
        image: "icons/icon-13.png"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Service, {
        onSelect: selectMenu,
        title: "OVEN AND APPLIANCE CLEANING",
        selected: unref(selected),
        desc: "We clean and care  for variety of hard surface flooring at many places of business."
      }, null, _parent));
      _push(`</div><div class="w-3/4 gap-y-4 flex flex-col text-lg bg-white h-full sticky self-auto top-[8.7rem] px-6 py-4 rounded-3xl shadow-[0_1px_60px_-15px_rgba(0,0,0,0.1)]"><div class="flex gap-x-4 items-center"><p>Allowed Services: </p><div class="recurring bg-[#2da9db] text-white px-2 py-1 rounded-md">Recurring</div><div class="one-time bg-[#2da9db] text-white px-2 py-1 rounded-md">One Time</div></div><div class="instant-booking flex gap-x-4 items-center"><p>Instant Booking: </p><input class="w-6 h-6" type="checkbox" name="" id=""></div></div><div class="w-full h-full bg-[#707070] fixed top-0 left-0 px-12" style="${ssrRenderStyle(unref(isEditMode) ? null : { display: "none" })}"></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=services3-420c46c2.mjs.map
