import{ad as P,P as q,y as L,d as p,e as C,q as z,D as U,Y as D,m as G}from"./entry.bf527e2a.js";const B=/#/g,F=/&/g,X=/\//g,J=/\?/g,Y=/\+/g,Z=/%7c/gi,V=/%252f/gi;function k(e){return encodeURI(""+e).replace(Z,"|")}function M(e){return k(e).replace(B,"%23").replace(J,"%3F").replace(V,"%2F").replace(F,"%26").replace(Y,"%2B")}function $(e){return M(e).replace(X,"%2F")}const Q=/^\w{2,}:([/\\]{1,2})/,K=/^\w{2,}:([/\\]{2})?/,ee=/^([/\\]\s*){2,}[^/\\]/;function S(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?Q.test(e):K.test(e)||(t.acceptRelative?ee.test(e):!1)}const te=/\/$|\/\?/;function ie(e="",t=!1){return t?te.test(e):e.endsWith("/")}function re(e="",t=!1){if(!t)return e.endsWith("/")?e:e+"/";if(ie(e,!0))return e||"/";const[r,...i]=e.split("?");return r+"/"+(i.length>0?`?${i.join("?")}`:"")}function ne(e=""){return e.startsWith("/")}function se(e=""){return ne(e)?e:"/"+e}function oe(e){return e&&e!=="/"}const ae=/^\.?\//;function _(e,...t){let r=e||"";for(const i of t.filter(n=>oe(n)))if(r){const n=i.replace(ae,"");r=re(r)+n}else r=i;return r}function j(e="",t){if(!S(e,{acceptRelative:!0}))return t?j(t+e):x(e);const[r="",i,n=""]=(e.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[s="",o=""]=(n.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:c,search:d,hash:l}=x(o.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:r,auth:i?i.slice(0,Math.max(0,i.length-1)):"",host:s,pathname:c,search:d,hash:l}}function x(e=""){const[t="",r="",i=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:r,hash:i}}async function ce(e,t){return await de(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function de(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const n={width:i.width,height:i.height,ratio:i.width/i.height};t(n)},i.onerror=n=>r(n),i.src=e})}function A(e){return t=>t?e[t]||t:e.missingValue}function le({formatter:e,keyMap:t,joinWith:r="/",valueMap:i}={}){e||(e=(s,o)=>`${s}=${o}`),t&&typeof t!="function"&&(t=A(t));const n=i||{};return Object.keys(n).forEach(s=>{typeof n[s]!="function"&&(n[s]=A(n[s]))}),(s={})=>Object.entries(s).filter(([c,d])=>typeof d<"u").map(([c,d])=>{const l=n[c];return typeof l=="function"&&(d=l(s[c])),c=typeof t=="function"?t(c):c,e(c,d)}).join(r)}function g(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function fe(e=""){if(e===void 0||!e.length)return[];const t=e.split(" ").map(r=>parseInt(r.replace("x","")));return t.filter((r,i)=>t.indexOf(r)===i)}function ue(e){const t={};if(typeof e=="string")for(const r of e.split(/[\s,]+/).filter(i=>i)){const i=r.split(":");i.length!==2?t[i[0].trim()]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function he(e){const t={options:e},r=(n,s={})=>N(t,n,s),i=(n,s={},o={})=>r(n,{...o,modifiers:P(s,o.modifiers||{})}).url;for(const n in e.presets)i[n]=(s,o,c)=>i(s,o,{...e.presets[n],...c});return i.options=e,i.getImage=r,i.getMeta=(n,s)=>ge(t,n,s),i.getSizes=(n,s)=>pe(t,n,s),t.$img=i,i}async function ge(e,t,r){const i=N(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await ce(e,i.url)}function N(e,t,r){var l,f;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:n}=me(e,r.provider||e.options.provider),s=ve(e,r.preset);if(t=S(t)?t:se(t),!i.supportsAlias)for(const m in e.options.alias)t.startsWith(m)&&(t=_(e.options.alias[m],t.substr(m.length)));if(i.validateDomains&&S(t)){const m=j(t).host;if(!e.options.domains.find(y=>y===m))return{url:t}}const o=P(r,s,n);o.modifiers={...o.modifiers};const c=o.modifiers.format;(l=o.modifiers)!=null&&l.width&&(o.modifiers.width=g(o.modifiers.width)),(f=o.modifiers)!=null&&f.height&&(o.modifiers.height=g(o.modifiers.height));const d=i.getImage(t,o,e);return d.format=d.format||c||"",d}function me(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function ve(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function pe(e,t,r){var h,E,R,b,I;const i=g((h=r.modifiers)==null?void 0:h.width),n=g((E=r.modifiers)==null?void 0:E.height),s=ue(r.sizes),o=(R=r.densities)!=null&&R.trim()?fe(r.densities.trim()):e.options.densities;if(o.length===0)throw new Error("'densities' must not be empty, configure to '1' to render regular size only (DPR 1.0)");const c=i&&n?n/i:0,d=[],l=[];if(Object.keys(s).length>1){for(const u in s){const v=O(u,String(s[u]),n,c,e);if(v!==void 0){d.push({size:v.size,screenMaxWidth:v.screenMaxWidth,media:`(max-width: ${v.screenMaxWidth}px)`});for(const w of o)l.push({width:v._cWidth*w,src:W(e,t,r,v,w)})}}we(d)}else for(const u of o){const v=Object.keys(s)[0];let w=O(v,String(s[v]),n,c,e);w===void 0&&(w={size:"",screenMaxWidth:0,_cWidth:(b=r.modifiers)==null?void 0:b.width,_cHeight:(I=r.modifiers)==null?void 0:I.height}),l.push({width:u,src:W(e,t,r,w,u)})}ye(l);const f=l[l.length-1],m=d.length?d.map(u=>`${u.media?u.media+" ":""}${u.size}`).join(", "):void 0,y=m?"w":"x",a=l.map(u=>`${u.src} ${u.width}${y}`).join(", ");return{sizes:m,srcset:a,src:f==null?void 0:f.src}}function O(e,t,r,i,n){const s=n.options.screens&&n.options.screens[e]||parseInt(e),o=t.endsWith("vw");if(!o&&/^\d+$/.test(t)&&(t=t+"px"),!o&&!t.endsWith("px"))return;let c=parseInt(t);if(!s||!c)return;o&&(c=Math.round(c/100*s));const d=i?Math.round(c*i):r;return{size:t,screenMaxWidth:s,_cWidth:c,_cHeight:d}}function W(e,t,r,i,n){return e.$img(t,{...r.modifiers,width:i._cWidth?i._cWidth*n:void 0,height:i._cHeight?i._cHeight*n:void 0},r)}function we(e){e.sort((r,i)=>r.screenMaxWidth-i.screenMaxWidth),e[e.length-1]&&(e[e.length-1].media="");let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.media===t&&e.splice(r,1),t=i.media}}function ye(e){e.sort((r,i)=>r.width-i.width);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.width===t&&e.splice(r,1),t=i.width}}const Se=le({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>$(e)+"_"+$(t)}),_e=(e,{modifiers:t={},baseURL:r}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const n=Se(t)||"_";return r||(r=_(i.options.nuxt.baseURL,"/_ipx")),{url:_(r,n,M(e))}},Ee=!0,Re=!0,be=Object.freeze(Object.defineProperty({__proto__:null,getImage:_e,supportsAlias:Re,validateDomains:Ee},Symbol.toStringTag,{value:"Module"})),H={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipx",domains:[],alias:{},densities:[1,2],format:["webp"]};H.providers={ipx:{provider:be,defaults:void 0}};const T=()=>{const e=q(),t=L();return t.$img||t._img||(t._img=he({...H,nuxt:{baseURL:e.app.baseURL}}))},Ie={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},ze=e=>{const t=p(()=>({provider:e.provider,preset:e.preset})),r=p(()=>({width:g(e.width),height:g(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),i=T(),n=p(()=>({...e.modifiers,width:g(e.width),height:g(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:n}},$e={...Ie,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},Ae=C({name:"NuxtImg",props:$e,emits:["load","error"],setup:(e,t)=>{const r=T(),i=ze(e),n=z(!1),s=p(()=>r.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:g(e.width),height:g(e.height)}})),o=p(()=>{const a={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||n.value)&&(a.sizes=s.value.sizes,a.srcset=s.value.srcset),a}),c=p(()=>{let a=e.placeholder;if(a===""&&(a=!0),!a||n.value)return!1;if(typeof a=="string")return a;const h=Array.isArray(a)?a:typeof a=="number"?[a,a]:[10,10];return r(e.src,{...i.modifiers.value,width:h[0],height:h[1],quality:h[2]||50},i.options.value)}),d=p(()=>e.sizes?s.value.src:r(e.src,i.modifiers.value,i.options.value)),l=p(()=>c.value?c.value:d.value);if(e.preload){const a=Object.values(s.value).every(h=>h);U({link:[{rel:"preload",as:"image",...a?{href:s.value.src,imagesizes:s.value.sizes,imagesrcset:s.value.srcset}:{href:l.value}}]})}const f=z(),y=L().isHydrating;return D(()=>{if(c.value){const a=new Image;a.src=d.value,e.sizes&&(a.sizes=s.value.sizes||"",a.srcset=s.value.srcset),a.onload=h=>{n.value=!0,t.emit("load",h)};return}f.value&&(f.value.complete&&y&&(f.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),f.value.onload=a=>{t.emit("load",a)},f.value.onerror=a=>{t.emit("error",a)})}),()=>G("img",{ref:f,src:l.value,...o.value,...t.attrs})}});export{Ae as _};