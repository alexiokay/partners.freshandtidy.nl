import { defineComponent, onMounted, onUnmounted, ref, unref, computed, provide, inject, watch, h, Fragment, cloneVNode, watchEffect } from 'vue';

function u(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u), t2;
}
var N = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N || {}), S$1 = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S$1 || {});
function H({ visible: r2 = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i }) {
  var a2;
  let n2 = j(o2, e2), l = Object.assign(i, { props: n2 });
  if (r2 || t2 & 2 && n2.static)
    return y(l);
  if (t2 & 1) {
    let d2 = (a2 = n2.unmount) == null || a2 ? 0 : 1;
    return u(d2, { [0]() {
      return null;
    }, [1]() {
      return y({ ...i, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y(l);
}
function y({ props: r2, attrs: t2, slots: e2, slot: o2, name: i }) {
  var m, h$1;
  let { as: n2, ...l } = T(r2, ["unmount", "static"]), a2 = (m = e2.default) == null ? void 0 : m.call(e2, o2), d2 = {};
  if (o2) {
    let u2 = false, c = [];
    for (let [p2, f2] of Object.entries(o2))
      typeof f2 == "boolean" && (u2 = true), f2 === true && c.push(p2);
    u2 && (d2["data-headlessui-state"] = c.join(" "));
  }
  if (n2 === "template") {
    if (a2 = b$2(a2 != null ? a2 : []), Object.keys(l).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c] = a2 != null ? a2 : [];
      if (!v(u2) || c.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t2)).map((s) => s.trim()).filter((s, g, R) => R.indexOf(s) === g).sort((s, g) => s.localeCompare(g)).map((s) => `  - ${s}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s) => `  - ${s}`).join(`
`)].join(`
`));
      let p2 = j((h$1 = u2.props) != null ? h$1 : {}, l), f2 = cloneVNode(u2, p2);
      for (let s in p2)
        s.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s] = p2[s]);
      return f2;
    }
    return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
  }
  return h(n2, Object.assign({}, l, d2), { default: () => a2 });
}
function b$2(r2) {
  return r2.flatMap((t2) => t2.type === Fragment ? b$2(t2.children) : [t2]);
}
function j(...r2) {
  if (r2.length === 0)
    return {};
  if (r2.length === 1)
    return r2[0];
  let t2 = {}, e2 = {};
  for (let i of r2)
    for (let n2 in i)
      n2.startsWith("on") && typeof i[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i[n2])) : t2[n2] = i[n2];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i) => [i, void 0])));
  for (let i in e2)
    Object.assign(t2, { [i](n2, ...l) {
      let a2 = e2[i];
      for (let d2 of a2) {
        if (n2 instanceof Event && n2.defaultPrevented)
          return;
        d2(n2, ...l);
      }
    } });
  return t2;
}
function K$1(r2) {
  let t2 = Object.assign({}, r2);
  for (let e2 in t2)
    t2[e2] === void 0 && delete t2[e2];
  return t2;
}
function T(r2, t2 = []) {
  let e2 = Object.assign({}, r2);
  for (let o2 of t2)
    o2 in e2 && delete e2[o2];
  return e2;
}
function v(r2) {
  return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
}
let e = 0;
function n() {
  return ++e;
}
function t() {
  return n();
}
var o$1 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$1 || {});
function o(n2) {
  var l;
  return n2 == null || n2.value == null ? null : (l = n2.value.$el) != null ? l : n2.value;
}
function r(t2, e2) {
  if (t2)
    return t2;
  let n2 = e2 != null ? e2 : "button";
  if (typeof n2 == "string" && n2.toLowerCase() === "button")
    return "button";
}
function b$1(t2, e2) {
  let n2 = ref(r(t2.value.type, t2.value.as));
  return onMounted(() => {
    n2.value = r(t2.value.type, t2.value.as);
  }), watchEffect(() => {
    var o$12;
    n2.value || o(e2) && o(e2) instanceof HTMLButtonElement && !((o$12 = o(e2)) != null && o$12.hasAttribute("type")) && (n2.value = "button");
  }), n2;
}
var a$1 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(a$1 || {});
let f = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(r2, { slots: t2, attrs: d2 }) {
  return () => {
    let { features: e2, ...o2 } = r2, n2 = { "aria-hidden": (e2 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return H({ ourProps: n2, theirProps: o2, slot: {}, attrs: d2, slots: t2, name: "Hidden" });
  };
} });
function p$1(n2) {
  var t2;
  let r2 = (t2 = n2 == null ? void 0 : n2.form) != null ? t2 : n2.closest("form");
  if (r2) {
    for (let i of r2.elements)
      if (i.tagName === "INPUT" && i.type === "submit" || i.tagName === "BUTTON" && i.type === "submit" || i.nodeName === "INPUT" && i.type === "image") {
        i.click();
        return;
      }
  }
}
function d$1(u2, e2, r2) {
  let i = ref(r2 == null ? void 0 : r2.value), f2 = computed(() => u2.value !== void 0);
  return [computed(() => f2.value ? u2.value : i.value), function(t2) {
    return f2.value || (i.value = t2), e2 == null ? void 0 : e2(t2);
  }];
}
let p = Symbol("DescriptionContext");
function b() {
  let t2 = inject(p, null);
  if (t2 === null)
    throw new Error("Missing parent");
  return t2;
}
function M({ slot: t2 = ref({}), name: i = "Description", props: o2 = {} } = {}) {
  let e2 = ref([]);
  function s(n2) {
    return e2.value.push(n2), () => {
      let r2 = e2.value.indexOf(n2);
      r2 !== -1 && e2.value.splice(r2, 1);
    };
  }
  return provide(p, { register: s, slot: t2, name: i, props: o2 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${t()}` } }, setup(t2, { attrs: i, slots: o2 }) {
  let e2 = b();
  return onMounted(() => onUnmounted(e2.register(t2.id))), () => {
    let { name: s = "Description", slot: n2 = ref({}), props: r2 = {} } = e2, { id: d2, ...l } = t2, c = { ...Object.entries(r2).reduce((f2, [a2, g]) => Object.assign(f2, { [a2]: unref(g) }), {}), id: d2 };
    return H({ ourProps: c, theirProps: l, slot: n2.value, attrs: i, slots: o2, name: s });
  };
} });
let a = Symbol("LabelContext");
function d() {
  let t2 = inject(a, null);
  if (t2 === null) {
    let n2 = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n2, d), n2;
  }
  return t2;
}
function K({ slot: t2 = {}, name: n2 = "Label", props: i = {} } = {}) {
  let e2 = ref([]);
  function l(r2) {
    return e2.value.push(r2), () => {
      let o2 = e2.value.indexOf(r2);
      o2 !== -1 && e2.value.splice(o2, 1);
    };
  }
  return provide(a, { register: l, slot: t2, name: n2, props: i }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-label-${t()}` } }, setup(t2, { slots: n2, attrs: i }) {
  let e2 = d();
  return onMounted(() => onUnmounted(e2.register(t2.id))), () => {
    let { name: l = "Label", slot: r2 = {}, props: o2 = {} } = e2, { id: p2, passive: c, ...u2 } = t2, s = { ...Object.entries(o2).reduce((f2, [b2, g]) => Object.assign(f2, { [b2]: unref(g) }), {}), id: p2 };
    return c && (delete s.onClick, delete s.htmlFor, delete u2.onClick), H({ ourProps: s, theirProps: u2, slot: r2, attrs: i, slots: n2, name: l });
  };
} });
let S = Symbol("GroupContext");
defineComponent({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(l, { slots: p2, attrs: a2 }) {
  let o2 = ref(null), f2 = K({ name: "SwitchLabel", props: { htmlFor: computed(() => {
    var r2;
    return (r2 = o2.value) == null ? void 0 : r2.id;
  }), onClick(r2) {
    o2.value && (r2.currentTarget.tagName === "LABEL" && r2.preventDefault(), o2.value.click(), o2.value.focus({ preventScroll: true }));
  } } }), t2 = M({ name: "SwitchDescription" });
  return provide(S, { switchRef: o2, labelledby: f2, describedby: t2 }), () => H({ theirProps: l, ourProps: {}, slot: {}, slots: p2, attrs: a2, name: "SwitchGroup" });
} });
let ue = defineComponent({ name: "Switch", emits: { "update:modelValue": (l) => true }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: true }, form: { type: String, optional: true }, name: { type: String, optional: true }, value: { type: String, optional: true }, id: { type: String, default: () => `headlessui-switch-${t()}` } }, inheritAttrs: false, setup(l, { emit: p2, attrs: a2, slots: o$2, expose: f$1 }) {
  let t2 = inject(S, null), [i, r2] = d$1(computed(() => l.modelValue), (e2) => p2("update:modelValue", e2), computed(() => l.defaultChecked));
  function s() {
    r2(!i.value);
  }
  let w = ref(null), u2 = t2 === null ? w : t2.switchRef, g = b$1(computed(() => ({ as: l.as, type: a2.type })), u2);
  f$1({ el: u2, $el: u2 });
  function k(e2) {
    e2.preventDefault(), s();
  }
  function C(e2) {
    e2.key === o$1.Space ? (e2.preventDefault(), s()) : e2.key === o$1.Enter && p$1(e2.currentTarget);
  }
  function E(e2) {
    e2.preventDefault();
  }
  let c = computed(() => {
    var e2, n2;
    return (n2 = (e2 = o(u2)) == null ? void 0 : e2.closest) == null ? void 0 : n2.call(e2, "form");
  });
  return onMounted(() => {
    watch([c], () => {
      if (!c.value || l.defaultChecked === void 0)
        return;
      function e2() {
        r2(l.defaultChecked);
      }
      return c.value.addEventListener("reset", e2), () => {
        var n2;
        (n2 = c.value) == null || n2.removeEventListener("reset", e2);
      };
    }, { immediate: true });
  }), () => {
    let { id: e2, name: n2, value: L, form: D, ...R } = l, K2 = { checked: i.value }, x = { id: e2, ref: u2, role: "switch", type: g.value, tabIndex: 0, "aria-checked": i.value, "aria-labelledby": t2 == null ? void 0 : t2.labelledby.value, "aria-describedby": t2 == null ? void 0 : t2.describedby.value, onClick: k, onKeyup: C, onKeypress: E };
    return h(Fragment, [n2 != null && i.value != null ? h(f, K$1({ features: a$1.Hidden, as: "input", type: "checkbox", hidden: true, readOnly: true, checked: i.value, form: D, name: n2, value: L })) : null, H({ ourProps: x, theirProps: { ...a2, ...T(R, ["modelValue", "defaultChecked"]) }, slot: K2, attrs: a2, slots: o$2, name: "Switch" })]);
  };
} });

export { ue as u };
//# sourceMappingURL=switch-56c95afc.mjs.map
