import{o as i,c as u,a as l,e as w,E as r,b as s,W as b,N as C,j as $,S as k,q as x,d as _,V as g,K as A,L as R,I as F,J as B,R as S}from"./entry.bf527e2a.js";import{u as M}from"./Main.8dee3ae2.js";import{C as D}from"./outline-close.ccee7d5a.js";const E={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},V=l("path",{fill:"currentColor",d:"M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9s-9-4.032-9-9s4.032-9 9-9Zm0 16c3.867 0 7-3.133 7-7s-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7Zm8.485.071l2.829 2.828l-1.415 1.415l-2.828-2.829l1.414-1.414Z"},null,-1),L=[V];function N(d,n){return i(),u("svg",E,L)}const I={name:"ri-search-2-line",render:N},O={class:"flex p-2 px-4 items-center rounded-lg border-2 border-gray-300 bg-white focus:border-gray-500"},j=["placeholder"],P={key:0,class:"ml-auto px-2 flex items-center justify-center space-x-2 w-auto h-auto rounded-lg bg-[#F9F9FB] text-black"},z=l("p",{class:"text-base min-w-max"},"Arrival date:",-1),H=l("input",{class:"bg-[#F9F9FB] focus:outline-none w-[8rem] text-base",type:"date"},null,-1),q=[z,H],W=w({__name:"Searchbar",props:{datepicker:{type:Boolean,required:!1},placeholder:{type:String,required:!1},"v-model":{type:String,required:!1}},setup(d){return(n,p)=>(i(),u("div",O,[r(s(I),{class:"w-8 h-8 text-gray-600"}),l("input",{class:"search w-full h-full text-lg focus:outline-none pl-5",type:"search",name:"search",placeholder:d.placeholder,onInput:p[0]||(p[0]=m=>n.$emit("keypress",m))},null,40,j),d.datepicker?(i(),u("div",P,q)):b("",!0)]))}}),Z={viewBox:"0 0 48 48",width:"1.2em",height:"1.2em"},G=C('<circle cx="24" cy="22" r="20" fill="#FFF59D"></circle><path fill="#FBC02D" d="M37 22c0-7.7-6.6-13.8-14.5-12.9c-6 .7-10.8 5.5-11.4 11.5c-.5 4.6 1.4 8.7 4.6 11.3c1.4 1.2 2.3 2.9 2.3 4.8v.3h12v-.1c0-1.8.8-3.6 2.2-4.8c2.9-2.4 4.8-6 4.8-10.1z"></path><path fill="#FFF59D" d="m30.6 20.2l-3-2c-.3-.2-.8-.2-1.1 0L24 19.8l-2.4-1.6c-.3-.2-.8-.2-1.1 0l-3 2c-.2.2-.4.4-.4.7s0 .6.2.8l3.8 4.7V37h2V26c0-.2-.1-.4-.2-.6l-3.3-4.1l1.5-1l2.4 1.6c.3.2.8.2 1.1 0l2.4-1.6l1.5 1l-3.3 4.1c-.1.2-.2.4-.2.6v11h2V26.4l3.8-4.7c.2-.2.3-.5.2-.8s-.2-.6-.4-.7z"></path><circle cx="24" cy="44" r="3" fill="#5C6BC0"></circle><path fill="#9FA8DA" d="M26 45h-4c-2.2 0-4-1.8-4-4v-5h12v5c0 2.2-1.8 4-4 4z"></path><path fill="#5C6BC0" d="m30 41l-11.6 1.6c.3.7.9 1.4 1.6 1.8l9.4-1.3c.4-.6.6-1.3.6-2.1zm-12-2.3v2L30 39v-2z"></path>',6),K=[G];function J(d,n){return i(),u("svg",Z,K)}const Q={name:"flat-color-icons-idea",render:J},T={class:"text-black w-full h-full px-6 py-[0.4rem] flex flex-row flex-wrap gap-y-[2rem] space-x-2 justify-start items-center",id:"shipments"},U={class:"shipments w-full gap-y-2 flex flex-col"},Y={class:"bg-blue-200 py-2 px-4 rounded-lg max-w-max flex gap-x-4"},X=l("p",null,[l("span",{class:"font-semibold"},"Hint: "),l("span",null,"You can search by supplier name, carrier or status")],-1),ee={class:"w-full flex lg:flex-row flex-col",id:"shipments-menu"},te={class:"flex lg:flex-row flex-col items-start space-y-2 lg:space-y-0 lg:items-center justify-start overflow-auto w-full no-scrollbar"},se=l("h1",{class:"text-xl w-auto font-semibold mr-[1.5rem]"},"Shipments",-1),le={class:"flex space-x-2 items-center justify-start overflow-auto no-scrollbar"},ne=C('<div class="ml-auto px-2 flex items-center justify-center space-x-2 w-auto h-[2.5rem] rounded-lg bg-white text-black" id="shipments-menu-sorting"><p class="text-sm">Sort by:</p><select class="w-auto h-[2.5rem] focus:border-0 focus:outline-none text-black" id="sorting"><option value="newest">Newest</option><option value="oldest">Oldest</option></select></div>',1),ie=w({__name:"index",setup(d){$();const n=M(),p=k(),m=x(!0),o=_(()=>n.getActiveMenu),f=x(""),y=_(()=>{let h=n.getReservations.filter(t=>t.status==="ARROW_APPROVED"&&o.value==="arrival"||t.status==="ARROW_CHANGED"&&o.value==="arrow changed"||(t.status==="New"||t.status==="CARRIER_CHANGED")&&o.value==="pending"||t.status==="COMPLETED"&&o.value==="completed"||t.status==="Cancelled"&&o.value==="cancelled"||t.status==="CARRIER_APPROVED"&&o.value==="arrival");console.log(f.value);let e=f.value.toLowerCase().split(" ");return h=h.filter(t=>e.every(c=>t.status&&t.status.toLowerCase().includes(c)||t.carrier.name&&t.carrier.name.toLowerCase().includes(c)||t.suppliers.suppliers&&t.suppliers.suppliers.some(v=>v.supplier.name.toLowerCase().includes(c)))),h});return(h,e)=>{const t=W,c=g("ButtonMenu2"),v=g("shipment");return i(),u("div",T,[l("div",U,[A(l("div",Y,[r(s(Q),{class:"w-6 h-6"}),X,r(s(D),{class:"w-6 h-6 cursor-pointer",onClick:e[0]||(e[0]=a=>m.value=!1)})],512),[[R,s(m)===!0]]),r(t,{class:"w-full h-[5rem]",datepicker:!0,placeholder:"Search by tracking number",onKeypress:e[1]||(e[1]=a=>f.value=a.target.value)})]),l("div",ee,[l("div",te,[se,l("div",le,[r(c,{text:"Pending",active:s(o)=="pending",onClick:e[2]||(e[2]=a=>s(n).setActiveMenu("pending"))},null,8,["active"]),r(c,{text:"Arrival",active:s(o)=="arrival",onClick:e[3]||(e[3]=a=>s(n).setActiveMenu("arrival"))},null,8,["active"]),r(c,{text:"Completed",active:s(o)=="completed",onClick:e[4]||(e[4]=a=>s(n).setActiveMenu("completed"))},null,8,["active"]),r(c,{text:"Cancelled",active:s(o)=="cancelled",onClick:e[5]||(e[5]=a=>s(n).setActiveMenu("cancelled"))},null,8,["active"]),r(c,{text:"Arrow Changed",active:s(o)=="arrow changed",onClick:e[6]||(e[6]=a=>s(n).setActiveMenu("arrow changed"))},null,8,["active"])])]),ne]),(i(!0),u(F,null,B(s(y),a=>(i(),S(v,{class:"w-[calc(50%-1rem)] 2xl:w-[calc(33%-1rem)]",onClick:oe=>s(p).push({path:`/dashboard/shipments/${a.id}`}),key:a.id,reservation:a},null,8,["onClick","reservation"]))),128))])}}});export{ie as default};
