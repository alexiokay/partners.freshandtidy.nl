const o=/^\w{2,}:([/\\]{1,2})/,c=/^\w{2,}:([/\\]{2})?/,f=/^([/\\]\s*){2,}[^/\\]/;function l(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?o.test(t):c.test(t)||(e.acceptRelative?f.test(t):!1)}const h=/\/$|\/\?/;function n(t="",e=!1){return e?h.test(t):t.endsWith("/")}function R(t="",e=!1){if(!e)return(n(t)?t.slice(0,-1):t)||"/";if(!n(t,!0))return t||"/";const[r,...s]=t.split("?");return(r.slice(0,-1)||"/")+(s.length>0?`?${s.join("?")}`:"")}function u(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(n(t,!0))return t||"/";const[r,...s]=t.split("?");return r+"/"+(s.length>0?`?${s.join("?")}`:"")}function a(t=""){return t.startsWith("/")}function L(t=""){return(a(t)?t.slice(1):t)||"/"}function w(t=""){return a(t)?t:"/"+t}function _(t,e){if(E(e)||l(t))return t;const r=R(e);return t.startsWith(r)?t:O(r,t)}function E(t){return!t||t==="/"}function T(t){return t&&t!=="/"}function O(t,...e){let r=t||"";for(const s of e.filter(i=>T(i)))r=r?u(r)+L(s):s;return r}export{_ as a,w as b,R as c,O as j,u as w};