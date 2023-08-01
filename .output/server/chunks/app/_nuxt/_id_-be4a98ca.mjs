import { _ as __nuxt_component_0 } from './nuxt-link-ecdf6ea3.mjs';
import { _ as _sfc_main$1 } from './Approved-cc09b34f.mjs';
import { h as useUserStore, u as useRouter, j as useRoute, l as useRuntimeConfig } from '../server.mjs';
import { defineComponent, ref, computed, withAsyncContext, resolveComponent, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { A as ArrowIcon } from './arrow-right-alt-rounded-864b59b1.mjs';
import { u as useMainStore } from './Main-ca6a8d39.mjs';
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
import '@vueuse/core';

const useHeaders = (type, body) => {
  const userStore = useUserStore();
  const config = /* @__PURE__ */ useRuntimeConfig();
  const headers = {
    method: type,
    headers: {
      "Content-Type": "application/json",
      Host: `${config.FETCH_HOST}`,
      Authorization: `Token ${userStore.getToken}`
    },
    body: JSON.stringify(body)
  };
  return headers;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const userStore = useUserStore();
    const mainStore = useMainStore();
    const router = useRouter();
    const route = useRoute();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const shipment_id = ref(route.path.split("/")[3]);
    const editMode = ref(false);
    console.log(shipment_id.value);
    let shipment = null;
    const modalMode = ref("status");
    const compModalMode = computed(() => {
      return modalMode.value;
    });
    const isConfirmationModalOpen = ref(false);
    ref(true);
    const fetchShipment = async () => {
      const options = {
        method: "GET",
        headers: {
          Host: `${config.FETCH_HOST}`,
          Authorization: `Token ${userStore.getToken}`
        }
      };
      const _shipment = await fetch(
        `${config.API_URL}api/v1/get_reservation/${shipment_id.value}`,
        options
      ).then((res) => res.json()).then((data) => {
        mainStore.addReservation(data);
        return data;
      });
      return _shipment;
    };
    shipment = ref(mainStore.getReservation(Number(shipment_id.value)));
    if (!shipment.value) {
      try {
        console.log("from api");
        shipment = ([__temp, __restore] = withAsyncContext(() => fetchShipment()), __temp = await __temp, __restore(), __temp);
        shipment = computed(() => {
          return mainStore.reservations.find(
            (reservation) => reservation.id === Number(shipment_id.value)
          );
        });
      } catch (error) {
        router.push("/dashboard/shipments");
        console.log(error);
      }
    } else {
      console.log("from store");
      shipment = computed(() => {
        return mainStore.reservations.find(
          (reservation) => reservation.id === Number(shipment_id.value)
        );
      });
    }
    computed(() => {
      return {
        get pallets_count() {
          return shipment.value.pallets_count;
        },
        set pallets_count(value) {
          shipment.value.pallets_count = value;
        },
        get cartons_count() {
          return shipment.value.cartons_count;
        },
        set cartons_count(value) {
          shipment.value.cartons_count = value;
        }
      };
    });
    const accceptReservation = () => {
      console.log("accepting");
      let status = "";
      if (userStore.accountType === "arrow-employee") {
        status = "ARROW_APPROVED";
      } else if (userStore.accountType === "carrier") {
        status = "CARRIER_APPROVED";
      }
      fetch(
        `${config.API_URL}api/v1/accept_timeslot_reservation/${shipment_id.value}`,
        useHeaders("PUT", {
          status
        })
      ).then((res) => res.json()).then((data) => {
        console.log(data);
        isConfirmationModalOpen.value = false;
      });
    };
    const saveReservation = () => {
      let supplierData = JSON.parse(JSON.stringify(TempSupplierData.value));
      fetch(
        `${config.API_URL}api/v1/update_timeslot_reservation/${shipment_id.value}`,
        useHeaders("PUT", {
          suppliers: supplierData
        })
      ).then((res) => res.json()).then((data) => {
        console.log(data);
        isConfirmationModalOpen.value = false;
        editMode.value = false;
      });
      console.log(supplierData);
    };
    const TempSupplierData = ref(
      shipment.value.suppliers.suppliers.map((supplier) => {
        return {
          ...supplier,
          supplier: supplier.supplier.name
        };
      })
    );
    const resetTempSuppliers = () => {
      TempSupplierData.value = shipment.value.suppliers.suppliers.map(
        (supplier) => {
          return {
            ...supplier,
            supplier: supplier.supplier.name
          };
        }
      );
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ButtonMenu2 = resolveComponent("ButtonMenu2");
      const _component_ModalApproved = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col px-3 md:px-4 lg:px-0 justify-start items-start" }, _attrs))}><div class="w-full flex flex-col" id="shipment-header">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-blue-700 hover:underline flex font-semibold items-center space-x-2",
        to: "/dashboard/shipments"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ArrowIcon), { class: "rotate-180" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Back to Shipments</span>`);
          } else {
            return [
              createVNode(unref(ArrowIcon), { class: "rotate-180" }),
              createVNode("span", null, "Back to Shipments")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-gray-500"> Shipments / <span class="text-violet-600">${ssrInterpolate(unref(shipment_id))}</span></p><div class="flex items-center space-x-3 h-auto mt-2"><h1 class="text-xl font-semibold">${ssrInterpolate((_a = unref(shipment)) == null ? void 0 : _a.delivery_address)}</h1><p class="text-gray-500 font-semibold text-xl">${ssrInterpolate((_c = (_b = unref(shipment)) == null ? void 0 : _b.Timeslot) == null ? void 0 : _c.date)}, ${ssrInterpolate((_e = (_d = unref(shipment)) == null ? void 0 : _d.Timeslot) == null ? void 0 : _e.start_time)} - ${ssrInterpolate((_g = (_f = unref(shipment)) == null ? void 0 : _f.Timeslot) == null ? void 0 : _g.end_time)}</p></div></div><div class="w-full flex flex-wrap gap-x-4 mt-4" id="shipment-body"><div class="flex flex-col w-[calc(50%-0.5rem)] h-auto bg-white rounded-lg space-y-4 p-4" id="shipment-body-left"><p class="text-xl font-semibold w-full">Shipment Details </p><div class="flex"><div class="flex flex-col justify-start items-start w-full h-auto space-y-2"><p class="text-sm text-gray-500">Shipment ID</p><p class="text-lg font-semibold">${ssrInterpolate(unref(shipment_id))}</p></div><div class="flex flex-col justify-start items-start w-full h-auto space-y-2"><p class="text-sm text-gray-500">Shipment type</p><p class="text-lg font-semibold">Air</p></div></div><div class="flex"><div class="flex flex-col justify-start items-start w-full h-auto space-y-2"><p class="text-sm text-gray-500">Shipment destination</p><p class="text-lg font-semibold">${ssrInterpolate((_h = unref(shipment)) == null ? void 0 : _h.delivery_address)}</p></div><div class="flex flex-col justify-start items-start w-full h-auto space-y-2"><p class="text-sm text-gray-500">Shipment weight</p><p class="text-lg font-semibold">${ssrInterpolate((_i = unref(shipment)) == null ? void 0 : _i.weight)}</p></div></div><div class="flex"><div class="flex flex-col justify-start items-start w-full h-auto space-y-2"><p class="text-sm text-gray-500">Pallets count</p><p class="text-lg font-semibold">${ssrInterpolate((_j = unref(shipment)) == null ? void 0 : _j.pallets_count)}</p></div><div class="flex flex-col justify-start items-start w-full h-auto space-y-2"><p class="text-sm text-gray-500">Cartoons count</p><p class="text-lg font-semibold">${ssrInterpolate((_k = unref(shipment)) == null ? void 0 : _k.cartons_count)}</p></div></div></div><div class="flex flex-col w-[calc(50%-0.5rem)] h-auto rounded-lg space-y-4" id="shipment-body-right"><div class="flex flex-col justify-start items-start w-full h-auto space-y-2 p-4 bg-white rounded-lg"><p class="text-xl font-semibold">Status: <span class="text-violet-600">${ssrInterpolate((_l = unref(shipment)) == null ? void 0 : _l.status)} ${ssrInterpolate(((_m = unref(shipment)) == null ? void 0 : _m.status) === "CARRIER_APPROVED" ? "/ ARROW_APPROVED " : "")}</span></p><div class="flex justify-start w-full items-center h-auto space-x-4">`);
      if (unref(editMode)) {
        _push(ssrRenderComponent(_component_ButtonMenu2, {
          class: "p-5 text-xl bg-green-500 text-white",
          onClick: ($event) => {
            isConfirmationModalOpen.value = true;
          },
          text: "Save"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(editMode) && ((unref(shipment).status === "ARROW_APPROVED" || unref(shipment).status === "ARROW_CHANGED") && unref(userStore).accountType === "carrier" || (unref(shipment).status === "New" || unref(shipment).status === "CARRIER_CHANGED") && unref(userStore).accountType === "arrow-employee")) {
        _push(ssrRenderComponent(_component_ButtonMenu2, {
          class: "p-5 text-xl",
          onClick: ($event) => (isConfirmationModalOpen.value = true, modalMode.value = "status"),
          text: "Accept",
          active: true
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(editMode) && (unref(shipment).status !== "ARROW_APPROVED" && unref(shipment).status !== "CARRIER_APPROVED")) {
        _push(ssrRenderComponent(_component_ButtonMenu2, {
          class: "p-5 text-xl bg-yellow-500",
          onClick: ($event) => (editMode.value = !unref(editMode), modalMode.value = "update"),
          text: "Change",
          active: true
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(editMode)) {
        _push(ssrRenderComponent(_component_ButtonMenu2, {
          class: "p-5 text-xl bg-red-500 text-white",
          onClick: ($event) => (editMode.value = false, resetTempSuppliers()),
          text: "Cancel"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex flex-col justify-start items-start w-full h-auto space-y-2 p-4 bg-white rounded-lg"><p class="text-xl font-semibold">Reserved by: </p><div class="flex flex-col justify-start items-start w-full h-auto space-y-2"><p class="text-violet-600 hover:cursor-pointer">${ssrInterpolate((_n = unref(shipment)) == null ? void 0 : _n.reserved_by)}</p></div></div><div class="flex flex-col justify-start items-start w-full h-auto p-4 bg-white rounded-lg"><div class="flex items-center justify-center space-x-4"><p class="text-xl font-semibold mb-3">Suppliers:</p>`);
      if (unref(editMode)) {
        _push(`<button class="addSupplier w-auto px-4 sm:h-10 h-12 bg-violet-600 text-white text-base md:text-xl font-semibold rounded-lg">Add Supplier</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--[-->`);
      ssrRenderList((_o = unref(shipment)) == null ? void 0 : _o.suppliers.suppliers, (supplier, index) => {
        _push(`<div class="flex flex-col justify-start items-start w-auto h-auto space-y-2"><p class="font-semibold">${ssrInterpolate(supplier.supplier.name)}</p><div class="ml-2 flex justify-start items-center space-x-4">`);
        if (!unref(editMode)) {
          _push(`<p>pallets count: ${ssrInterpolate(supplier.pallets_count)}</p>`);
        } else {
          _push(`<input class="w-[90%] h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600" type="text"${ssrRenderAttr("value", unref(TempSupplierData)[index].pallets_count)}>`);
        }
        if (!unref(editMode)) {
          _push(`<p>cartons count: ${ssrInterpolate(supplier.cartons_count)}</p>`);
        } else {
          _push(`<input class="w-[90%] h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600" type="text"${ssrRenderAttr("value", unref(TempSupplierData)[index].cartons_count)}>`);
        }
        _push(`</div><hr class="w-full"></div>`);
      });
      _push(`<!--]--></div></div><div class="flex flex-col w-full mt-[1rem] h-auto bg-white rounded-lg space-y-4 p-4" id="shipment-body-s"><p class="text-xl font-semibold h-[10rem]">Shipment History</p><p>.....</p></div></div>`);
      _push(ssrRenderComponent(_component_ModalApproved, {
        class: "w-1/2 h-1/2",
        id: "confirmationModal",
        isOpen: unref(isConfirmationModalOpen),
        onClose: ($event) => isConfirmationModalOpen.value = false,
        onUpdate: saveReservation,
        onConfirm: accceptReservation,
        mode: unref(compModalMode)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/shipments/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-be4a98ca.mjs.map
