import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Approved",
  __ssrInlineRender: true,
  props: {
    isOpen: { type: Boolean },
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle(_ctx.isOpen ? null : { display: "none" })}" tabindex="-1" class="backdrop-blur-[2.5px] fixed top-0 pointer-event-none flex items-center bg-[rgba(0,0,0,0.55)] justify-center left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen md:h-full"></div><div class="fixed top-0 pointer-event-none flex items-center justify-center left-0 right-0 z-50 mx-auto w-[30rem] p-4 md:inset-0 h-screen md:h-min my-auto" style="${ssrRenderStyle(_ctx.isOpen ? null : { display: "none" })}"><div class="relative bg-white rounded-sm shadow dark:bg-gray-700 h-auto"><div class="flex items-center justify-between px-5 py-4 border-b bg-slate-50 rounded-t dark:border-gray-600"><h3 class="text-xl font-medium text-gray-900 dark:text-white text-center"><p>Do you really want to save these changes?</p></h3></div><div class="py-6 px-10 space-y-2 overflow-y-auto h-auto sm:auto w-[40rem]"><p class="text-xl font-semibold text-center"><div class="flex justify-center w-full items-center space-x-10"><button class="confirm-button bg-violet-800 hover:bg-violet-600 text-white px-4 py-2 rounded-md w-[7rem] text-xl">Yes</button><button class="cancel-button bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md w-[7rem] text-xl">No</button></div></p><p hidden class="text-base leading-relaxed text-gray-500 dark:text-gray-400"><p hidden>The European Unions General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p></p></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/Approved.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Approved-cc09b34f.mjs.map
