import{h as k,b as c,d as F,r as $}from"./entry.bf527e2a.js";import{u as x}from"./asyncData.76d472c8.js";function L(o,r,y){const[t={},i]=typeof r=="string"?[{},r]:[r,y],s=t.key||k([i,c(t.baseURL),typeof o=="string"?o:"",c(t.params||t.query)]);if(!s||typeof s!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+s);if(!o)throw new Error("[nuxt] [useFetch] request is missing.");const p=s===i?"$f"+s:s,a=F(()=>{let n=o;return typeof n=="function"&&(n=n()),c(n)});if(!t.baseURL&&typeof a.value=="string"&&a.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:l,lazy:m,default:w,transform:b,pick:d,watch:f,immediate:g,...v}=t,u=$({...v,cache:typeof t.cache=="boolean"?void 0:t.cache}),_={server:l,lazy:m,default:w,transform:b,pick:d,immediate:g,watch:f===!1?[]:[u,a,...f||[]]};let e;return x(p,()=>{var h;return(h=e==null?void 0:e.abort)==null||h.call(e),e=typeof AbortController<"u"?new AbortController:{},typeof a.value=="string"&&a.value.startsWith("/"),(t.$fetch||globalThis.$fetch)(a.value,{signal:e.signal,...u})},_)}export{L as u};