import{b as q,Z as K,$ as Z,q as z,a0 as G,w as L,a1 as Q,O as U,a2 as X,a3 as Y,a4 as k}from"./entry.bf527e2a.js";function ee(e){return K()?(Z(e),!0):!1}function $(e){return typeof e=="function"?e():q(e)}const te=typeof window<"u",re=()=>{};function ne(e,t){function r(...n){return new Promise((i,a)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(i).catch(a)})}return r}const T=e=>e();function se(e=T){const t=z(!0);function r(){t.value=!1}function n(){t.value=!0}const i=(...a)=>{t.value&&e(...a)};return{isActive:G(t),pause:r,resume:n,eventFilter:i}}var I=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,oe=(e,t)=>{var r={};for(var n in e)ie.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&I)for(var n of I(e))t.indexOf(n)<0&&ae.call(e,n)&&(r[n]=e[n]);return r};function le(e,t,r={}){const n=r,{eventFilter:i=T}=n,a=oe(n,["eventFilter"]);return L(e,ne(i,t),a)}var ue=Object.defineProperty,ce=Object.defineProperties,fe=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,de=(e,t)=>{for(var r in t||(t={}))V.call(t,r)&&x(e,r,t[r]);if(S)for(var r of S(t))J.call(t,r)&&x(e,r,t[r]);return e},pe=(e,t)=>ce(e,fe(t)),ve=(e,t)=>{var r={};for(var n in e)V.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&S)for(var n of S(e))t.indexOf(n)<0&&J.call(e,n)&&(r[n]=e[n]);return r};function ge(e,t,r={}){const n=r,{eventFilter:i}=n,a=ve(n,["eventFilter"]),{eventFilter:v,pause:_,resume:h,isActive:c}=se(i);return{stop:le(e,t,pe(de({},a),{eventFilter:v})),pause:_,resume:h,isActive:c}}function me(e){var t;const r=$(e);return(t=r==null?void 0:r.$el)!=null?t:r}const N=te?window:void 0;function E(...e){let t,r,n,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,n,i]=e,t=N):[t,r,n,i]=e,!t)return re;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const a=[],v=()=>{a.forEach(l=>l()),a.length=0},_=(l,u,g,f)=>(l.addEventListener(u,g,f),()=>l.removeEventListener(u,g,f)),h=L(()=>[me(t),$(i)],([l,u])=>{v(),l&&a.push(...r.flatMap(g=>n.map(f=>_(l,g,f,u))))},{immediate:!0,flush:"post"}),c=()=>{h(),v()};return ee(c),c}const b=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O="__vueuse_ssr_handlers__",ye=_e();function _e(){return O in b||(b[O]=b[O]||{}),b[O]}function he(e,t){return ye[e]||t}function we(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var be=Object.defineProperty,j=Object.getOwnPropertySymbols,Oe=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,M=(e,t,r)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,F=(e,t)=>{for(var r in t||(t={}))Oe.call(t,r)&&M(e,r,t[r]);if(j)for(var r of j(t))Se.call(t,r)&&M(e,r,t[r]);return e};const Pe={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},R="vueuse-storage";function y(e,t,r,n={}){var i;const{flush:a="pre",deep:v=!0,listenToStorageChanges:_=!0,writeDefaults:h=!0,mergeDefaults:c=!1,shallow:l,window:u=N,eventFilter:g,onError:f=s=>{console.error(s)}}=n,m=(l?Q:z)(t);if(!r)try{r=he("getDefaultStorage",()=>{var s;return(s=N)==null?void 0:s.localStorage})()}catch(s){f(s)}if(!r)return m;const d=$(t),A=we(d),w=(i=n.serializer)!=null?i:Pe[A],{pause:W,resume:D}=ge(m,()=>C(m.value),{flush:a,deep:v,eventFilter:g});return u&&_&&(E(u,"storage",P),E(u,R,B)),P(),m;function C(s){try{if(s==null)r.removeItem(e);else{const o=w.write(s),p=r.getItem(e);p!==o&&(r.setItem(e,o),u&&u.dispatchEvent(new CustomEvent(R,{detail:{key:e,oldValue:p,newValue:o,storageArea:r}})))}}catch(o){f(o)}}function H(s){const o=s?s.newValue:r.getItem(e);if(o==null)return h&&d!==null&&r.setItem(e,w.write(d)),d;if(!s&&c){const p=w.read(o);return typeof c=="function"?c(p,d):A==="object"&&!Array.isArray(p)?F(F({},d),p):p}else return typeof o!="string"?o:w.read(o)}function B(s){P(s.detail)}function P(s){if(!(s&&s.storageArea!==r)){if(s&&s.key==null){m.value=d;return}if(!(s&&s.key!==e)){W();try{m.value=H(s)}catch(o){f(o)}finally{s?U(D):D()}}}}}X();const $e=Y("mainStore",{state:()=>({initialized:y("initialized",!1),isMobileNavbarOpen:y("isMobileNavbarOpen",!1),isLocaleSet:y("isLocaleSet",!1),isOverlaying:y("isOverlaying",!1),active_menu:y("active_menu","pending"),dates:y("dates",[]),reservations:[]}),getters:{getActiveMenu(e){return e.active_menu},getReservations(e){return e.reservations},getNewReservations(e){return e.reservations.filter(t=>t.status==="New")},getReservation:e=>t=>e.reservations.find(r=>r.id===t),getIsLocaleSet(e){return e.isLocaleSet},getIsMobileNavbarOpen(e){return e.isMobileNavbarOpen},isInitiated(e){return e.initialized},getDates(e){return e.dates},getDatesByDate:e=>t=>(console.log(e.dates),e.dates.find(r=>r.date===t)),getTimeslotsByDate:async e=>t=>{var n;console.log("getting timeslots by date: "+t);const r=new Date(t).setHours(0,0,0,0);return(n=e.dates.find(i=>new Date(i.date).setHours(0,0,0,0)===r))==null?void 0:n.timeslots}},actions:{initialize(){this.initialized=!0},setActiveMenu(e){this.active_menu=e},hideMobileNavbar(){this.isMobileNavbarOpen=!1},showMobileNavbar(){this.isMobileNavbarOpen=!0},setLocaleSet(e=!0){this.isLocaleSet=e},setOverlaying(e){this.isOverlaying=e},setTimeslot(e,t){const r=this.dates.findIndex(a=>a.id===e),n=this.dates[r].timeslots.findIndex(a=>a.id===t),i=this.dates[r].timeslots[n];i&&(i.amount_of_trucks=i.amount_of_trucks+1,console.log(i.amount_of_trucks))},setDates(e){this.dates=e,console.log(this.dates)},setReservations(e){this.reservations=e},addReservation(e){console.log("adding reservation "),this.reservations.push(e)},removeReservation(e){try{const t=this.reservations.findIndex(r=>r.id===e);this.reservations.splice(t,1),console.log("removed reservation ")}catch(t){console.log(t),console.log("couldn't remove reservation ")}},updateReservation(e){console.log("updating reservation ");try{const t=this.reservations.findIndex(r=>r.id===r.id);this.reservations[t]=e,console.log(this.reservations[t]),console.log("updated reservation ")}catch(t){console.log(t),console.log("couldn't update reservation ")}},openDay(e){const t=this.dates.findIndex(r=>r.id===e);this.dates[t].is_open=!0},closeDay(e){const t=this.dates.findIndex(r=>r.id===e);this.dates[t].is_open=!1}},persist:{storage:k.sessionStorage}});export{$e as u};
