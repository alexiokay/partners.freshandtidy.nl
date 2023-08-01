import { resolveDirective, openBlock, createElementBlock, normalizeClass, renderSlot, normalizeProps, guardReactiveProps, createElementVNode, Fragment, renderList, createTextVNode, toDisplayString, createBlock, resolveDynamicComponent, createCommentVNode, mergeProps, toHandlers, withDirectives, vShow, createVNode, Transition, withCtx, withModifiers, useSSRContext, defineComponent, ref, unref, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderSlot, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { Bar } from 'vue-chartjs';
import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { h as useUserStore, j as useRoute } from '../server.mjs';
import { u as useMainStore } from './Main-ca6a8d39.mjs';
import { u as ue$1 } from './switch-56c95afc.mjs';
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
import '@vueuse/core';

var E = Object.defineProperty, M = Object.defineProperties;
var x = Object.getOwnPropertyDescriptors;
var V = Object.getOwnPropertySymbols;
var I = Object.prototype.hasOwnProperty, N = Object.prototype.propertyIsEnumerable;
var C = (e, t, s) => t in e ? E(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, f = (e, t) => {
  for (var s in t || (t = {}))
    I.call(t, s) && C(e, s, t[s]);
  if (V)
    for (var s of V(t))
      N.call(t, s) && C(e, s, t[s]);
  return e;
}, m = (e, t) => M(e, x(t));
const U = {
  props: {
    autoscroll: {
      type: Boolean,
      default: !0
    }
  },
  watch: {
    typeAheadPointer() {
      this.autoscroll && this.maybeAdjustScroll();
    },
    open(e) {
      this.autoscroll && e && this.$nextTick(() => this.maybeAdjustScroll());
    }
  },
  methods: {
    maybeAdjustScroll() {
      var t;
      const e = ((t = this.$refs.dropdownMenu) == null ? void 0 : t.children[this.typeAheadPointer]) || !1;
      if (e) {
        const s = this.getDropdownViewport(), { top: n, bottom: l, height: i } = e.getBoundingClientRect();
        if (n < s.top)
          return this.$refs.dropdownMenu.scrollTop = e.offsetTop;
        if (l > s.bottom)
          return this.$refs.dropdownMenu.scrollTop = e.offsetTop - (s.height - i);
      }
    },
    getDropdownViewport() {
      return this.$refs.dropdownMenu ? this.$refs.dropdownMenu.getBoundingClientRect() : {
        height: 0,
        top: 0,
        bottom: 0
      };
    }
  }
}, q = {
  data() {
    return {
      typeAheadPointer: -1
    };
  },
  watch: {
    filteredOptions() {
      for (let e = 0; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    open(e) {
      e && this.typeAheadToLastSelected();
    },
    selectedValue() {
      this.open && this.typeAheadToLastSelected();
    }
  },
  methods: {
    typeAheadUp() {
      for (let e = this.typeAheadPointer - 1; e >= 0; e--)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadDown() {
      for (let e = this.typeAheadPointer + 1; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadSelect() {
      const e = this.filteredOptions[this.typeAheadPointer];
      e && this.selectable(e) && this.select(e);
    },
    typeAheadToLastSelected() {
      this.typeAheadPointer = this.selectedValue.length !== 0 ? this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length - 1]) : -1;
    }
  }
}, J = {
  props: {
    loading: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      mutableLoading: !1
    };
  },
  watch: {
    search() {
      this.$emit("search", this.search, this.toggleLoading);
    },
    loading(e) {
      this.mutableLoading = e;
    }
  },
  methods: {
    toggleLoading(e = null) {
      return e == null ? this.mutableLoading = !this.mutableLoading : this.mutableLoading = e;
    }
  }
}, S = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, l] of t)
    s[n] = l;
  return s;
}, H = {}, X = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, Y = /* @__PURE__ */ createElementVNode("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), Q = [
  Y
];
function G(e, t) {
  return openBlock(), createElementBlock("svg", X, Q);
}
const W = /* @__PURE__ */ S(H, [["render", G]]), Z = {}, ee = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, te = /* @__PURE__ */ createElementVNode("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), se = [
  te
];
function ie(e, t) {
  return openBlock(), createElementBlock("svg", ee, se);
}
const oe = /* @__PURE__ */ S(Z, [["render", ie]]), T = {
  Deselect: W,
  OpenIndicator: oe
}, ne = {
  mounted(e, { instance: t }) {
    if (t.appendToBody) {
      const {
        height: s,
        top: n,
        left: l,
        width: i
      } = t.$refs.toggle.getBoundingClientRect();
      let y = window.scrollX || window.pageXOffset, o = window.scrollY || window.pageYOffset;
      e.unbindPosition = t.calculatePosition(e, t, {
        width: i + "px",
        left: y + l + "px",
        top: o + n + s + "px"
      }), document.body.appendChild(e);
    }
  },
  unmounted(e, { instance: t }) {
    t.appendToBody && (e.unbindPosition && typeof e.unbindPosition == "function" && e.unbindPosition(), e.parentNode && e.parentNode.removeChild(e));
  }
};
function le(e) {
  const t = {};
  return Object.keys(e).sort().forEach((s) => {
    t[s] = e[s];
  }), JSON.stringify(t);
}
let ae = 0;
function re() {
  return ++ae;
}
const de = {
  components: f({}, T),
  directives: { appendToBody: ne },
  mixins: [U, q, J],
  compatConfig: {
    MODE: 3
  },
  emits: [
    "open",
    "close",
    "update:modelValue",
    "search",
    "search:compositionstart",
    "search:compositionend",
    "search:keydown",
    "search:blur",
    "search:focus",
    "search:input",
    "option:created",
    "option:selecting",
    "option:selected",
    "option:deselecting",
    "option:deselected"
  ],
  props: {
    modelValue: {},
    components: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean,
      default: !0
    },
    deselectFromDropdown: {
      type: Boolean,
      default: !1
    },
    searchable: {
      type: Boolean,
      default: !0
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    transition: {
      type: String,
      default: "vs__fade"
    },
    clearSearchOnSelect: {
      type: Boolean,
      default: !0
    },
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    label: {
      type: String,
      default: "label"
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    reduce: {
      type: Function,
      default: (e) => e
    },
    selectable: {
      type: Function,
      default: (e) => !0
    },
    getOptionLabel: {
      type: Function,
      default(e) {
        return typeof e == "object" ? e.hasOwnProperty(this.label) ? e[this.label] : console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`) : e;
      }
    },
    getOptionKey: {
      type: Function,
      default(e) {
        if (typeof e != "object")
          return e;
        try {
          return e.hasOwnProperty("id") ? e.id : le(e);
        } catch (t) {
          return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`, e, t);
        }
      }
    },
    onTab: {
      type: Function,
      default: function() {
        this.selectOnTab && !this.isComposing && this.typeAheadSelect();
      }
    },
    taggable: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: null
    },
    pushTags: {
      type: Boolean,
      default: !1
    },
    filterable: {
      type: Boolean,
      default: !0
    },
    filterBy: {
      type: Function,
      default(e, t, s) {
        return (t || "").toLocaleLowerCase().indexOf(s.toLocaleLowerCase()) > -1;
      }
    },
    filter: {
      type: Function,
      default(e, t) {
        return e.filter((s) => {
          let n = this.getOptionLabel(s);
          return typeof n == "number" && (n = n.toString()), this.filterBy(s, n, t);
        });
      }
    },
    createOption: {
      type: Function,
      default(e) {
        return typeof this.optionList[0] == "object" ? { [this.label]: e } : e;
      }
    },
    resetOnOptionsChange: {
      default: !1,
      validator: (e) => ["function", "boolean"].includes(typeof e)
    },
    clearSearchOnBlur: {
      type: Function,
      default: function({ clearSearchOnSelect: e, multiple: t }) {
        return e && !t;
      }
    },
    noDrop: {
      type: Boolean,
      default: !1
    },
    inputId: {
      type: String
    },
    dir: {
      type: String,
      default: "auto"
    },
    selectOnTab: {
      type: Boolean,
      default: !1
    },
    selectOnKeyCodes: {
      type: Array,
      default: () => [13]
    },
    searchInputQuerySelector: {
      type: String,
      default: "[type=search]"
    },
    mapKeydown: {
      type: Function,
      default: (e, t) => e
    },
    appendToBody: {
      type: Boolean,
      default: !1
    },
    calculatePosition: {
      type: Function,
      default(e, t, { width: s, top: n, left: l }) {
        e.style.top = n, e.style.left = l, e.style.width = s;
      }
    },
    dropdownShouldOpen: {
      type: Function,
      default({ noDrop: e, open: t, mutableLoading: s }) {
        return e ? !1 : t && !s;
      }
    },
    uid: {
      type: [String, Number],
      default: () => re()
    }
  },
  data() {
    return {
      search: "",
      open: !1,
      isComposing: !1,
      pushedTags: [],
      _value: [],
      deselectButtons: []
    };
  },
  computed: {
    isReducingValues() {
      return this.$props.reduce !== this.$options.props.reduce.default;
    },
    isTrackingValues() {
      return typeof this.modelValue == "undefined" || this.isReducingValues;
    },
    selectedValue() {
      let e = this.modelValue;
      return this.isTrackingValues && (e = this.$data._value), e != null && e !== "" ? [].concat(e) : [];
    },
    optionList() {
      return this.options.concat(this.pushTags ? this.pushedTags : []);
    },
    searchEl() {
      return this.$slots.search ? this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector) : this.$refs.search;
    },
    scope() {
      const e = {
        search: this.search,
        loading: this.loading,
        searching: this.searching,
        filteredOptions: this.filteredOptions
      };
      return {
        search: {
          attributes: f({
            disabled: this.disabled,
            placeholder: this.searchPlaceholder,
            tabindex: this.tabindex,
            readonly: !this.searchable,
            id: this.inputId,
            "aria-autocomplete": "list",
            "aria-labelledby": `vs${this.uid}__combobox`,
            "aria-controls": `vs${this.uid}__listbox`,
            ref: "search",
            type: "search",
            autocomplete: this.autocomplete,
            value: this.search
          }, this.dropdownOpen && this.filteredOptions[this.typeAheadPointer] ? {
            "aria-activedescendant": `vs${this.uid}__option-${this.typeAheadPointer}`
          } : {}),
          events: {
            compositionstart: () => this.isComposing = !0,
            compositionend: () => this.isComposing = !1,
            keydown: this.onSearchKeyDown,
            blur: this.onSearchBlur,
            focus: this.onSearchFocus,
            input: (t) => this.search = t.target.value
          }
        },
        spinner: {
          loading: this.mutableLoading
        },
        noOptions: {
          search: this.search,
          loading: this.mutableLoading,
          searching: this.searching
        },
        openIndicator: {
          attributes: {
            ref: "openIndicator",
            role: "presentation",
            class: "vs__open-indicator"
          }
        },
        listHeader: e,
        listFooter: e,
        header: m(f({}, e), { deselect: this.deselect }),
        footer: m(f({}, e), { deselect: this.deselect })
      };
    },
    childComponents() {
      return f(f({}, T), this.components);
    },
    stateClasses() {
      return {
        "vs--open": this.dropdownOpen,
        "vs--single": !this.multiple,
        "vs--multiple": this.multiple,
        "vs--searching": this.searching && !this.noDrop,
        "vs--searchable": this.searchable && !this.noDrop,
        "vs--unsearchable": !this.searchable,
        "vs--loading": this.mutableLoading,
        "vs--disabled": this.disabled
      };
    },
    searching() {
      return !!this.search;
    },
    dropdownOpen() {
      return this.dropdownShouldOpen(this);
    },
    searchPlaceholder() {
      return this.isValueEmpty && this.placeholder ? this.placeholder : void 0;
    },
    filteredOptions() {
      const e = [].concat(this.optionList);
      if (!this.filterable && !this.taggable)
        return e;
      const t = this.search.length ? this.filter(e, this.search, this) : e;
      if (this.taggable && this.search.length) {
        const s = this.createOption(this.search);
        this.optionExists(s) || t.unshift(s);
      }
      return t;
    },
    isValueEmpty() {
      return this.selectedValue.length === 0;
    },
    showClearButton() {
      return !this.multiple && this.clearable && !this.open && !this.isValueEmpty;
    }
  },
  watch: {
    options(e, t) {
      const s = () => typeof this.resetOnOptionsChange == "function" ? this.resetOnOptionsChange(e, t, this.selectedValue) : this.resetOnOptionsChange;
      !this.taggable && s() && this.clearSelection(), this.modelValue && this.isTrackingValues && this.setInternalValueFromOptions(this.modelValue);
    },
    modelValue: {
      immediate: !0,
      handler(e) {
        this.isTrackingValues && this.setInternalValueFromOptions(e);
      }
    },
    multiple() {
      this.clearSelection();
    },
    open(e) {
      this.$emit(e ? "open" : "close");
    }
  },
  created() {
    this.mutableLoading = this.loading;
  },
  methods: {
    setInternalValueFromOptions(e) {
      Array.isArray(e) ? this.$data._value = e.map((t) => this.findOptionFromReducedValue(t)) : this.$data._value = this.findOptionFromReducedValue(e);
    },
    select(e) {
      this.$emit("option:selecting", e), this.isOptionSelected(e) ? this.deselectFromDropdown && (this.clearable || this.multiple && this.selectedValue.length > 1) && this.deselect(e) : (this.taggable && !this.optionExists(e) && (this.$emit("option:created", e), this.pushTag(e)), this.multiple && (e = this.selectedValue.concat(e)), this.updateValue(e), this.$emit("option:selected", e)), this.onAfterSelect(e);
    },
    deselect(e) {
      this.$emit("option:deselecting", e), this.updateValue(this.selectedValue.filter((t) => !this.optionComparator(t, e))), this.$emit("option:deselected", e);
    },
    clearSelection() {
      this.updateValue(this.multiple ? [] : null);
    },
    onAfterSelect(e) {
      this.closeOnSelect && (this.open = !this.open, this.searchEl.blur()), this.clearSearchOnSelect && (this.search = "");
    },
    updateValue(e) {
      typeof this.modelValue == "undefined" && (this.$data._value = e), e !== null && (Array.isArray(e) ? e = e.map((t) => this.reduce(t)) : e = this.reduce(e)), this.$emit("update:modelValue", e);
    },
    toggleDropdown(e) {
      const t = e.target !== this.searchEl;
      t && e.preventDefault();
      const s = [
        ...this.deselectButtons || [],
        this.$refs.clearButton
      ];
      if (this.searchEl === void 0 || s.filter(Boolean).some((n) => n.contains(e.target) || n === e.target)) {
        e.preventDefault();
        return;
      }
      this.open && t ? this.searchEl.blur() : this.disabled || (this.open = !0, this.searchEl.focus());
    },
    isOptionSelected(e) {
      return this.selectedValue.some((t) => this.optionComparator(t, e));
    },
    isOptionDeselectable(e) {
      return this.isOptionSelected(e) && this.deselectFromDropdown;
    },
    optionComparator(e, t) {
      return this.getOptionKey(e) === this.getOptionKey(t);
    },
    findOptionFromReducedValue(e) {
      const t = (n) => JSON.stringify(this.reduce(n)) === JSON.stringify(e), s = [...this.options, ...this.pushedTags].filter(t);
      return s.length === 1 ? s[0] : s.find((n) => this.optionComparator(n, this.$data._value)) || e;
    },
    closeSearchOptions() {
      this.open = !1, this.$emit("search:blur");
    },
    maybeDeleteValue() {
      if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
        let e = null;
        this.multiple && (e = [
          ...this.selectedValue.slice(0, this.selectedValue.length - 1)
        ]), this.updateValue(e);
      }
    },
    optionExists(e) {
      return this.optionList.some((t) => this.optionComparator(t, e));
    },
    normalizeOptionForSlot(e) {
      return typeof e == "object" ? e : { [this.label]: e };
    },
    pushTag(e) {
      this.pushedTags.push(e);
    },
    onEscape() {
      this.search.length ? this.search = "" : this.searchEl.blur();
    },
    onSearchBlur() {
      if (this.mousedown && !this.searching)
        this.mousedown = !1;
      else {
        const { clearSearchOnSelect: e, multiple: t } = this;
        this.clearSearchOnBlur({ clearSearchOnSelect: e, multiple: t }) && (this.search = ""), this.closeSearchOptions();
        return;
      }
      if (this.search.length === 0 && this.options.length === 0) {
        this.closeSearchOptions();
        return;
      }
    },
    onSearchFocus() {
      this.open = !0, this.$emit("search:focus");
    },
    onMousedown() {
      this.mousedown = !0;
    },
    onMouseUp() {
      this.mousedown = !1;
    },
    onSearchKeyDown(e) {
      const t = (l) => (l.preventDefault(), !this.isComposing && this.typeAheadSelect()), s = {
        8: (l) => this.maybeDeleteValue(),
        9: (l) => this.onTab(),
        27: (l) => this.onEscape(),
        38: (l) => (l.preventDefault(), this.typeAheadUp()),
        40: (l) => (l.preventDefault(), this.typeAheadDown())
      };
      this.selectOnKeyCodes.forEach((l) => s[l] = t);
      const n = this.mapKeydown(s, this);
      if (typeof n[e.keyCode] == "function")
        return n[e.keyCode](e);
    }
  }
}, he = ["dir"], ce = ["id", "aria-expanded", "aria-owns"], ue = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, pe = ["disabled", "title", "aria-label", "onClick"], fe = {
  ref: "actions",
  class: "vs__actions"
}, ge = ["disabled"], ye = { class: "vs__spinner" }, me = ["id"], be = ["id", "aria-selected", "onMouseover", "onClick"], _e = {
  key: 0,
  class: "vs__no-options"
}, Oe = /* @__PURE__ */ createTextVNode(" Sorry, no matching options. "), we = ["id"];
function ve(e, t, s, n, l, i) {
  const y = resolveDirective("append-to-body");
  return openBlock(), createElementBlock("div", {
    dir: s.dir,
    class: normalizeClass(["v-select", i.stateClasses])
  }, [
    renderSlot(e.$slots, "header", normalizeProps(guardReactiveProps(i.scope.header))),
    createElementVNode("div", {
      id: `vs${s.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": i.dropdownOpen.toString(),
      "aria-owns": `vs${s.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: t[1] || (t[1] = (o) => i.toggleDropdown(o))
    }, [
      createElementVNode("div", ue, [
        (openBlock(!0), createElementBlock(Fragment, null, renderList(i.selectedValue, (o, p) => renderSlot(e.$slots, "selected-option-container", {
          option: i.normalizeOptionForSlot(o),
          deselect: i.deselect,
          multiple: s.multiple,
          disabled: s.disabled
        }, () => [
          (openBlock(), createElementBlock("span", {
            key: s.getOptionKey(o),
            class: "vs__selected"
          }, [
            renderSlot(e.$slots, "selected-option", normalizeProps(guardReactiveProps(i.normalizeOptionForSlot(o))), () => [
              createTextVNode(toDisplayString(s.getOptionLabel(o)), 1)
            ]),
            s.multiple ? (openBlock(), createElementBlock("button", {
              key: 0,
              ref_for: !0,
              ref: (g) => l.deselectButtons[p] = g,
              disabled: s.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${s.getOptionLabel(o)}`,
              "aria-label": `Deselect ${s.getOptionLabel(o)}`,
              onClick: (g) => i.deselect(o)
            }, [
              (openBlock(), createBlock(resolveDynamicComponent(i.childComponents.Deselect)))
            ], 8, pe)) : createCommentVNode("", !0)
          ]))
        ])), 256)),
        renderSlot(e.$slots, "search", normalizeProps(guardReactiveProps(i.scope.search)), () => [
          createElementVNode("input", mergeProps({ class: "vs__search" }, i.scope.search.attributes, toHandlers(i.scope.search.events)), null, 16)
        ])
      ], 512),
      createElementVNode("div", fe, [
        withDirectives(createElementVNode("button", {
          ref: "clearButton",
          disabled: s.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: t[0] || (t[0] = (...o) => i.clearSelection && i.clearSelection(...o))
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(i.childComponents.Deselect)))
        ], 8, ge), [
          [vShow, i.showClearButton]
        ]),
        renderSlot(e.$slots, "open-indicator", normalizeProps(guardReactiveProps(i.scope.openIndicator)), () => [
          s.noDrop ? createCommentVNode("", !0) : (openBlock(), createBlock(resolveDynamicComponent(i.childComponents.OpenIndicator), normalizeProps(mergeProps({ key: 0 }, i.scope.openIndicator.attributes)), null, 16))
        ]),
        renderSlot(e.$slots, "spinner", normalizeProps(guardReactiveProps(i.scope.spinner)), () => [
          withDirectives(createElementVNode("div", ye, "Loading...", 512), [
            [vShow, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, ce),
    createVNode(Transition, { name: s.transition }, {
      default: withCtx(() => [
        i.dropdownOpen ? withDirectives((openBlock(), createElementBlock("ul", {
          id: `vs${s.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${s.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: t[2] || (t[2] = withModifiers((...o) => i.onMousedown && i.onMousedown(...o), ["prevent"])),
          onMouseup: t[3] || (t[3] = (...o) => i.onMouseUp && i.onMouseUp(...o))
        }, [
          renderSlot(e.$slots, "list-header", normalizeProps(guardReactiveProps(i.scope.listHeader))),
          (openBlock(!0), createElementBlock(Fragment, null, renderList(i.filteredOptions, (o, p) => (openBlock(), createElementBlock("li", {
            id: `vs${s.uid}__option-${p}`,
            key: s.getOptionKey(o),
            role: "option",
            class: normalizeClass(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": i.isOptionDeselectable(o) && p === e.typeAheadPointer,
              "vs__dropdown-option--selected": i.isOptionSelected(o),
              "vs__dropdown-option--highlight": p === e.typeAheadPointer,
              "vs__dropdown-option--disabled": !s.selectable(o)
            }]),
            "aria-selected": p === e.typeAheadPointer ? !0 : null,
            onMouseover: (g) => s.selectable(o) ? e.typeAheadPointer = p : null,
            onClick: withModifiers((g) => s.selectable(o) ? i.select(o) : null, ["prevent", "stop"])
          }, [
            renderSlot(e.$slots, "option", normalizeProps(guardReactiveProps(i.normalizeOptionForSlot(o))), () => [
              createTextVNode(toDisplayString(s.getOptionLabel(o)), 1)
            ])
          ], 42, be))), 128)),
          i.filteredOptions.length === 0 ? (openBlock(), createElementBlock("li", _e, [
            renderSlot(e.$slots, "no-options", normalizeProps(guardReactiveProps(i.scope.noOptions)), () => [
              Oe
            ])
          ])) : createCommentVNode("", !0),
          renderSlot(e.$slots, "list-footer", normalizeProps(guardReactiveProps(i.scope.listFooter)))
        ], 40, me)), [
          [y]
        ]) : (openBlock(), createElementBlock("ul", {
          key: 1,
          id: `vs${s.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, we))
      ]),
      _: 3
    }, 8, ["name"]),
    renderSlot(e.$slots, "footer", normalizeProps(guardReactiveProps(i.scope.footer)))
  ], 10, he);
}
const Ce = /* @__PURE__ */ S(de, [["render", ve]]);

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "QuickMenuItem",
  __ssrInlineRender: true,
  props: {
    text: {},
    value: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-[calc(25%-1rem)] py-2 px-4 h-full bg-white rounded-xl flex items-center" }, _attrs))}><div class="flex flex-col justify-around items-start space-y-2 w-full"><p class="text-lg text-gray-600">${ssrInterpolate(_ctx.text)}</p><p class="text-2xl font-semibold">${ssrInterpolate(_ctx.value)}</p></div>`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Dashboard/QuickMenuItem.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DelayedDelivery",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full py-4 px-6 bg-white rounded-xl flex items-center" }, _attrs))}><div class="w-full flex flex-col h-full items-between justify-start space-y-3"><div class="flex space-x-2 items-end justify-between"><p class="font-semibold text-2xl">Delayed delivery</p><p class="text-violet-600 font-bold">show all &gt;</p></div><div class="rounded-lg border-2 relative border-white"><table class="table w-full rounded-t-xl overflow-hidden"><thead class="bg-gray-100 h-[3.5rem]"><tr class="bg-gray-100"></tr><th class="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th><th class="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gate</th><th class="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timeslot</th><th class="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time delay</th></thead><tbody class="bg-white"><!--[-->`);
      ssrRenderList(3, (index, item) => {
        _push(`<tr class="${ssrRenderClass([index < 3 ? "border-b border-gray-200" : "", "hover:bg-slate-50 hover:cursor-pointer"])}"><td class="py-4 px-4 whitespace-nowrap w-1/5">2</td><td class="py-4 px-4 whitespace-nowrap">2</td><td class="py-4 px-4 whitespace-nowrap">2</td><td class="py-4 px-4 whitespace-nowrap"><div class="w-[4rem] h-auto first-letter: bg-yellow-100 px-3 rounded-lg flex items-center justify-center text-yellow-500 font-semibold"><p>0.0 h</p></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Dashboard/DelayedDelivery.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _hoisted_1$2 = {
  viewBox: "0 0 36 36",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#FFDB5E",
  d: "M34.956 17.916c0-.503-.12-.975-.321-1.404c-1.341-4.326-7.619-4.01-16.549-4.221c-1.493-.035-.639-1.798-.115-5.668c.341-2.517-1.282-6.382-4.01-6.382c-4.498 0-.171 3.548-4.148 12.322c-2.125 4.688-6.875 2.062-6.875 6.771v10.719c0 1.833.18 3.595 2.758 3.885C8.195 34.219 7.633 36 11.238 36h18.044a3.337 3.337 0 0 0 3.333-3.334c0-.762-.267-1.456-.698-2.018c1.02-.571 1.72-1.649 1.72-2.899c0-.76-.266-1.454-.696-2.015c1.023-.57 1.725-1.649 1.725-2.901c0-.909-.368-1.733-.961-2.336a3.311 3.311 0 0 0 1.251-2.581z"
}, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#EE9547",
  d: "M23.02 21.249h8.604c1.17 0 2.268-.626 2.866-1.633a.876.876 0 0 0-1.506-.892a1.588 1.588 0 0 1-1.361.775h-8.81c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583H28.7a.875.875 0 0 0 0-1.75h-5.888a3.337 3.337 0 0 0-3.333 3.333c0 1.025.475 1.932 1.205 2.544a3.32 3.32 0 0 0-.998 2.373c0 1.028.478 1.938 1.212 2.549a3.318 3.318 0 0 0 .419 5.08a3.305 3.305 0 0 0-.852 2.204a3.337 3.337 0 0 0 3.333 3.333h5.484a3.35 3.35 0 0 0 2.867-1.632a.875.875 0 0 0-1.504-.894a1.594 1.594 0 0 1-1.363.776h-5.484c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583h6.506a3.35 3.35 0 0 0 2.867-1.633a.875.875 0 1 0-1.504-.894a1.572 1.572 0 0 1-1.363.777h-7.063a1.585 1.585 0 0 1 0-3.167h8.091a3.35 3.35 0 0 0 2.867-1.632a.875.875 0 0 0-1.504-.894a1.573 1.573 0 0 1-1.363.776H23.02a1.585 1.585 0 0 1 0-3.167z"
}, null, -1);
const _hoisted_4 = [
  _hoisted_2$2,
  _hoisted_3$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_4);
}
const IconThumbUp = { name: "twemoji-thumbs-up", render: render$2 };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DailyPlan",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full py-4 px-6 bg-white rounded-xl flex items-center" }, _attrs))}><div class="w-2/5 flex flex-col h-full items-between justify-between"><div class="flex space-x-2 items-end"><p class="font-semibold text-2xl">Daily Plan</p><p class="">16 jan 23</p></div><div class="flex flex-col text-gray-600 space-y-1"><p>Shipment procedeed</p><p class="text-black font-semibold">145<span class="text-gray-600">/240</span></p></div><div class="flex flex-col text-gray-600 space-y-1"><p>Orders procedeed</p><p class="text-black font-semibold">145<span class="text-gray-600">/240</span></p></div><div class="flex flex-col text-gray-600 space-y-1"><p>Requests procedeed</p><p class="text-black font-semibold">145<span class="text-gray-600">/240</span></p></div>`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
      _push(`</div><div class="w-3/5"><div class="wrapper"><div class="progress-bar"><div class="progress-bar__inner" id="js-progress-meter"></div></div><div class="flex justify-between w-[21rem] mx-auto font-semibold items-center"><p>0%</p><p class="progress-bar__number text-green-500 text-3xl" id="js-progress-number">0%</p><p>100%</p></div><div class="rounded-full p-1 pb-4 pt-2 bg-gray-100 w-auto h-auto flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">`);
      _push(ssrRenderComponent(unref(IconThumbUp), { class: "w-8 h-8 mx-2 text-green-500" }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Dashboard/DailyPlan.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full py-4 px-6 bg-white rounded-xl flex items-center" }, _attrs))}><div class="w-full flex flex-col h-full items-between justify-start space-y-3"><div class="flex space-x-2 items-end justify-between"><p class="font-semibold text-2xl">TO-DO</p><p class="text-violet-600 font-bold">show all &gt;</p></div><div class="rounded-lg border-2 relative border-white overflow-hidden"><table class="table w-full rounded-t-xl overflow-hidden"><thead class="bg-gray-100 h-[3.5rem]"><tr class="bg-gray-100"></tr><th class="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th><th class="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prioritet</th><th class="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th><th class="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th></thead><tbody class="bg-white"><!--[-->`);
  ssrRenderList(3, (index, item) => {
    _push(`<tr class="${ssrRenderClass(index < 3 ? "border-b border-gray-200 " : "")}"><td class="py-4 px-4 whitespace-nowrap"><input class="form-checkbox h-5 w-5 text-gray-600" type="checkbox"></td><td class="py-4 px-4 whitespace-nowrap w-1/6">Example</td><td class="py-4 px-4 whitespace-nowrap w-1/6 font-semibold">Example</td><td class="py-4 px-4 w-5/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem dsadsadssad sda sdasd dsa dsa das dsa da das</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div></div>`);
}
const _sfc_main$2 = {};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Dashboard/Todo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", ssrRender]]);
const _hoisted_1$1 = {
  viewBox: "0 0 14 14",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("g", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M9.5 3.5h4v4" }),
  /* @__PURE__ */ createElementVNode("path", { d: "M13.5 3.5L7.85 9.15a.5.5 0 0 1-.7 0l-2.3-2.3a.5.5 0 0 0-.7 0L.5 10.5" })
], -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const StatsIcon = { name: "streamline-money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow", render: render$1 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "YourActivity",
  __ssrInlineRender: true,
  setup(__props) {
    Chart.register(
      Title,
      Tooltip,
      Legend,
      BarElement,
      CategoryScale,
      LinearScale
    );
    const chartData = ref({
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "#f87979",
          data: [40, 20, 12, 50, 10],
          //borderWidth: 10,
          barThickness: 12
        }
      ]
    });
    const chartOptions = ref({
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ],
        x: {
          grid: {
            color: "white"
          }
        },
        y: {
          grid: {
            color: "rgb(242,242,242)"
          }
        }
      },
      plugins: {
        legend: {
          display: true
        }
      }
    });
    const activities = ref(["dsadsa", "dsadsa"]);
    const activeActivity = ref("dsadsa");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full py-8 px-12 bg-white rounded-xl flex items-center" }, _attrs))}><div class="w-full flex flex-col h-full items-between justify-start gap-y-6"><div class="flex space-x-2 items-start"><div class="w-1/2 flex flex-col gap-y-2"><div class="flex gap-x-4 items-center justify-start"><p class="font-semibold text-2xl">Your Activity</p><div class="rounded-full border-green-500 text-green-500 border-[0.1rem] px-4 py-1 flex items-center justify-center w-auto h-min gap-x-2">`);
      _push(ssrRenderComponent(unref(StatsIcon), { class: "w-4 h-4" }, null, _parent));
      _push(`<p>14%</p></div></div><p class="text-gray-500">Progress increased this week</p></div><div class="w-1/2 flex justify-end">`);
      _push(ssrRenderComponent(unref(Ce), {
        class: "w-[8rem] h-[2rem]",
        modelValue: activeActivity.value,
        "onUpdate:modelValue": ($event) => activeActivity.value = $event,
        options: activities.value,
        label: "name"
      }, null, _parent));
      _push(`</div></div><div class="rounded-lg border-2 relative border-white overflow-hidden"></div>`);
      _push(ssrRenderComponent(unref(Bar), {
        data: chartData.value,
        options: chartOptions.value,
        class: "max-h-[30rem]"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Dashboard/YourActivity.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _hoisted_1 = {
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("g", { fill: "currentColor" }, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M128 129.09V232a8 8 0 0 1-3.84-1l-88-48.18a8 8 0 0 1-4.16-7V80.18a8 8 0 0 1 .7-3.25Z",
    opacity: ".2"
  }),
  /* @__PURE__ */ createElementVNode("path", { d: "m223.68 66.15l-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03ZM128 32l80.34 44l-29.77 16.3l-80.35-44Zm0 88L47.66 76l33.9-18.56l80.34 44ZM40 90l80 43.78v85.79l-80-43.75Zm176 85.78l-80 43.79v-85.75l32-17.51V152a8 8 0 0 0 16 0v-44.45L216 90v85.77Z" })
], -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const PackageIcon = { name: "ph-package-duotone", render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    useUserStore();
    useRoute();
    const yearlyMode = ref(true);
    const todayShipments = ref(mainStore.getNewReservations.length.toString());
    ref(0);
    ref(0);
    ref(0);
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DashboardQuickMenuItem = _sfc_main$5;
      const _component_DashboardDelayedDelivery = _sfc_main$4;
      const _component_DashboardDailyPlan = _sfc_main$3;
      const _component_DashboardTodo = __nuxt_component_3;
      const _component_DashboardYourActivity = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "text-black w-full h-full px-6 py-[0.4rem] flex flex-col justify-start items-start gap-y-6",
        id: "content"
      }, _attrs))}><div class="w-full h-auto"><div class="w-full flex items-center gap-x-3"><p class="text-2xl font-semibold">Overview</p><p class="ml-8">Yearly</p>`);
      _push(ssrRenderComponent(unref(ue$1), {
        class: ["relative inline-flex h-6 w-11 items-center rounded-full", unref(yearlyMode) ? "bg-blue-600" : "bg-gray-200"],
        modelValue: unref(yearlyMode),
        "onUpdate:modelValue": ($event) => isRef(yearlyMode) ? yearlyMode.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>Enable notifications</span><span class="${ssrRenderClass([unref(yearlyMode) ? "translate-x-6" : "translate-x-1", "inline-block h-4 w-4 transform rounded-full bg-white transition"])}"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "sr-only" }, "Enable notifications"),
              createVNode("span", {
                class: ["inline-block h-4 w-4 transform rounded-full bg-white transition", unref(yearlyMode) ? "translate-x-6" : "translate-x-1"]
              }, null, 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p>Monthly</p></div><div class="h-[7rem] w-full flex mt-2 justify-between">`);
      _push(ssrRenderComponent(_component_DashboardQuickMenuItem, {
        text: "Calls",
        value: unref(todayShipments)
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PackageIcon), { class: "w-12 h-12 text-violet-500" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(PackageIcon), { class: "w-12 h-12 text-violet-500" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_DashboardQuickMenuItem, {
        text: "Ready for Shippping",
        value: "0"
      }, null, _parent));
      _push(ssrRenderComponent(_component_DashboardQuickMenuItem, {
        text: "In transit",
        value: "0"
      }, null, _parent));
      _push(ssrRenderComponent(_component_DashboardQuickMenuItem, {
        text: "Delivered",
        value: "0"
      }, null, _parent));
      _push(`</div></div><div class="flex w-full md:flex-row flex-col justify-between h-auto mt-8">`);
      _push(ssrRenderComponent(_component_DashboardDelayedDelivery, { class: "md:w-[calc(50%-1rem)] w-full" }, null, _parent));
      _push(ssrRenderComponent(_component_DashboardDailyPlan, { class: "md:w-[calc(50%-1rem)] w-full" }, null, _parent));
      _push(`</div><div class="flex w-full md:flex-row flex-col justify-between h-auto">`);
      _push(ssrRenderComponent(_component_DashboardTodo, { class: "md:w-[calc(50%-1rem)] w-full min-h-[30rem]" }, null, _parent));
      _push(ssrRenderComponent(_component_DashboardYourActivity, { class: "md:w-[calc(50%-1rem)] w-full min-h-[30rem]" }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-17f30fe2.mjs.map
