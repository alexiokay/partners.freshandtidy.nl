import{_ as lt}from"./nuxt-link.ef7ed224.js";import{_ as at}from"./Approved.vue.5b1fc114.js";import{j as q,P as K,e as nt,S as it,C as ct,q as d,d as R,U as rt,V as ut,o as n,c as u,a as t,E as k,F as dt,b as e,g as F,t as a,R as A,W as v,I as pt,J as _t,K as J,X as G}from"./entry.bf527e2a.js";import{A as ft}from"./arrow-right-alt-rounded.f930b554.js";import{u as mt}from"./Main.8dee3ae2.js";const z=(T,p)=>{const y=q();return{method:T,headers:{"Content-Type":"application/json",Host:`${K().FETCH_HOST}`,Authorization:`Token ${y.getToken}`},body:JSON.stringify(p)}},ht={class:"w-full flex flex-col px-3 md:px-4 lg:px-0 justify-start items-start"},xt={class:"w-full flex flex-col",id:"shipment-header"},vt=t("span",null,"Back to Shipments",-1),yt={class:"text-gray-500"},gt={class:"text-violet-600"},bt={class:"flex items-center space-x-3 h-auto mt-2"},wt={class:"text-xl font-semibold"},Rt={class:"text-gray-500 font-semibold text-xl"},At={class:"w-full flex flex-wrap gap-x-4 mt-4",id:"shipment-body"},St={class:"flex flex-col w-[calc(50%-0.5rem)] h-auto bg-white rounded-lg space-y-4 p-4",id:"shipment-body-left"},Ct=t("p",{class:"text-xl font-semibold w-full"},"Shipment Details ",-1),kt={class:"flex"},Tt={class:"flex flex-col justify-start items-start w-full h-auto space-y-2"},Pt=t("p",{class:"text-sm text-gray-500"},"Shipment ID",-1),jt={class:"text-lg font-semibold"},Ot=t("div",{class:"flex flex-col justify-start items-start w-full h-auto space-y-2"},[t("p",{class:"text-sm text-gray-500"},"Shipment type"),t("p",{class:"text-lg font-semibold"},"Air")],-1),Et={class:"flex"},Vt={class:"flex flex-col justify-start items-start w-full h-auto space-y-2"},$t=t("p",{class:"text-sm text-gray-500"},"Shipment destination",-1),Dt={class:"text-lg font-semibold"},Nt={class:"flex flex-col justify-start items-start w-full h-auto space-y-2"},Ut=t("p",{class:"text-sm text-gray-500"},"Shipment weight",-1),Mt={class:"text-lg font-semibold"},Ht={class:"flex"},It={class:"flex flex-col justify-start items-start w-full h-auto space-y-2"},Bt=t("p",{class:"text-sm text-gray-500"},"Pallets count",-1),Wt={class:"text-lg font-semibold"},Lt={class:"flex flex-col justify-start items-start w-full h-auto space-y-2"},Ft=t("p",{class:"text-sm text-gray-500"},"Cartoons count",-1),Jt={class:"text-lg font-semibold"},Gt={class:"flex flex-col w-[calc(50%-0.5rem)] h-auto rounded-lg space-y-4",id:"shipment-body-right"},zt={class:"flex flex-col justify-start items-start w-full h-auto space-y-2 p-4 bg-white rounded-lg"},qt={class:"text-xl font-semibold"},Kt={class:"text-violet-600"},Xt={class:"flex justify-start w-full items-center h-auto space-x-4"},Qt={class:"flex flex-col justify-start items-start w-full h-auto space-y-2 p-4 bg-white rounded-lg"},Yt=t("p",{class:"text-xl font-semibold"},"Reserved by: ",-1),Zt={class:"flex flex-col justify-start items-start w-full h-auto space-y-2"},te={class:"text-violet-600 hover:cursor-pointer"},ee={class:"flex flex-col justify-start items-start w-full h-auto p-4 bg-white rounded-lg"},se={class:"flex items-center justify-center space-x-4"},oe=t("p",{class:"text-xl font-semibold mb-3"},"Suppliers:",-1),le={class:"font-semibold"},ae={class:"ml-2 flex justify-start items-center space-x-4"},ne={key:0},ie=["onUpdate:modelValue"],ce={key:2},re=["onUpdate:modelValue"],ue=t("hr",{class:"w-full"},null,-1),de=t("div",{class:"flex flex-col w-full mt-[1rem] h-auto bg-white rounded-lg space-y-4 p-4",id:"shipment-body-s"},[t("p",{class:"text-xl font-semibold h-[10rem]"},"Shipment History"),t("p",null,".....")],-1),xe=nt({__name:"[id]",async setup(T){let p,y;const _=q(),x=mt(),X=it(),Q=ct(),g=K(),c=d(Q.path.split("/")[3]),i=d(!1);console.log(c.value);let s=null;const S=d("status"),Y=R(()=>S.value),f=d(!1);d(!0);const Z=async()=>{const o={method:"GET",headers:{Host:`${g.FETCH_HOST}`,Authorization:`Token ${_.getToken}`}};return await fetch(`${g.API_URL}api/v1/get_reservation/${c.value}`,o).then(h=>h.json()).then(h=>(x.addReservation(h),h))};if(s=d(x.getReservation(Number(c.value))),s.value)console.log("from store"),s=R(()=>x.reservations.find(o=>o.id===Number(c.value)));else try{console.log("from api"),s=([p,y]=rt(()=>Z()),p=await p,y(),p),s=R(()=>x.reservations.find(o=>o.id===Number(c.value)))}catch(o){X.push("/dashboard/shipments"),console.log(o)}R(()=>({get pallets_count(){return s.value.pallets_count},set pallets_count(o){s.value.pallets_count=o},get cartons_count(){return s.value.cartons_count},set cartons_count(o){s.value.cartons_count=o}}));const tt=()=>{console.log("accepting");let o="";_.accountType==="arrow-employee"?o="ARROW_APPROVED":_.accountType==="carrier"&&(o="CARRIER_APPROVED"),fetch(`${g.API_URL}api/v1/accept_timeslot_reservation/${c.value}`,z("PUT",{status:o})).then(l=>l.json()).then(l=>{console.log(l),f.value=!1})},et=()=>{let o=JSON.parse(JSON.stringify(m.value));fetch(`${g.API_URL}api/v1/update_timeslot_reservation/${c.value}`,z("PUT",{suppliers:o})).then(l=>l.json()).then(l=>{console.log(l),f.value=!1,i.value=!1}),console.log(o)},m=d(s.value.suppliers.suppliers.map(o=>({...o,supplier:o.supplier.name}))),st=()=>{m.value=s.value.suppliers.suppliers.map(o=>({...o,supplier:o.supplier.name}))};return(o,l)=>{var P,j,O,E,V,$,D,N,U,M,H,I,B,W,L;const h=lt,b=ut("ButtonMenu2"),ot=at;return n(),u("div",ht,[t("div",xt,[k(h,{class:"text-blue-700 hover:underline flex font-semibold items-center space-x-2",to:"/dashboard/shipments"},{default:dt(()=>[k(e(ft),{class:"rotate-180"}),vt]),_:1}),t("p",yt,[F(" Shipments / "),t("span",gt,a(e(c)),1)]),t("div",bt,[t("h1",wt,a((P=e(s))==null?void 0:P.delivery_address),1),t("p",Rt,a((O=(j=e(s))==null?void 0:j.Timeslot)==null?void 0:O.date)+", "+a((V=(E=e(s))==null?void 0:E.Timeslot)==null?void 0:V.start_time)+" - "+a((D=($=e(s))==null?void 0:$.Timeslot)==null?void 0:D.end_time),1)])]),t("div",At,[t("div",St,[Ct,t("div",kt,[t("div",Tt,[Pt,t("p",jt,a(e(c)),1)]),Ot]),t("div",Et,[t("div",Vt,[$t,t("p",Dt,a((N=e(s))==null?void 0:N.delivery_address),1)]),t("div",Nt,[Ut,t("p",Mt,a((U=e(s))==null?void 0:U.weight),1)])]),t("div",Ht,[t("div",It,[Bt,t("p",Wt,a((M=e(s))==null?void 0:M.pallets_count),1)]),t("div",Lt,[Ft,t("p",Jt,a((H=e(s))==null?void 0:H.cartons_count),1)])])]),t("div",Gt,[t("div",zt,[t("p",qt,[F("Status: "),t("span",Kt,a((I=e(s))==null?void 0:I.status)+" "+a(((B=e(s))==null?void 0:B.status)==="CARRIER_APPROVED"?"/ ARROW_APPROVED ":""),1)]),t("div",Xt,[e(i)?(n(),A(b,{key:0,class:"p-5 text-xl bg-green-500 text-white",onClick:l[0]||(l[0]=r=>{f.value=!0}),text:"Save"})):v("",!0),!e(i)&&((e(s).status==="ARROW_APPROVED"||e(s).status==="ARROW_CHANGED")&&e(_).accountType==="carrier"||(e(s).status==="New"||e(s).status==="CARRIER_CHANGED")&&e(_).accountType==="arrow-employee")?(n(),A(b,{key:1,class:"p-5 text-xl",onClick:l[1]||(l[1]=r=>(f.value=!0,S.value="status")),text:"Accept",active:!0})):v("",!0),!e(i)&&e(s).status!=="ARROW_APPROVED"&&e(s).status!=="CARRIER_APPROVED"?(n(),A(b,{key:2,class:"p-5 text-xl bg-yellow-500",onClick:l[2]||(l[2]=r=>(i.value=!e(i),S.value="update")),text:"Change",active:!0})):v("",!0),e(i)?(n(),A(b,{key:3,class:"p-5 text-xl bg-red-500 text-white",onClick:l[3]||(l[3]=r=>(i.value=!1,st())),text:"Cancel"})):v("",!0)])]),t("div",Qt,[Yt,t("div",Zt,[t("p",te,a((W=e(s))==null?void 0:W.reserved_by),1)])]),t("div",ee,[t("div",se,[oe,e(i)?(n(),u("button",{key:0,class:"addSupplier w-auto px-4 sm:h-10 h-12 bg-violet-600 text-white text-base md:text-xl font-semibold rounded-lg",onClick:l[4]||(l[4]=()=>{})},"Add Supplier")):v("",!0)]),(n(!0),u(pt,null,_t((L=e(s))==null?void 0:L.suppliers.suppliers,(r,w)=>(n(),u("div",{class:"flex flex-col justify-start items-start w-auto h-auto space-y-2",key:r},[t("p",le,a(r.supplier.name),1),t("div",ae,[e(i)?J((n(),u("input",{key:1,class:"w-[90%] h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600",type:"text","onUpdate:modelValue":C=>e(m)[w].pallets_count=C},null,8,ie)),[[G,e(m)[w].pallets_count]]):(n(),u("p",ne,"pallets count: "+a(r.pallets_count),1)),e(i)?J((n(),u("input",{key:3,class:"w-[90%] h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600",type:"text","onUpdate:modelValue":C=>e(m)[w].cartons_count=C},null,8,re)),[[G,e(m)[w].cartons_count]]):(n(),u("p",ce,"cartons count: "+a(r.cartons_count),1))]),ue]))),128))])]),de]),k(ot,{class:"w-1/2 h-1/2",id:"confirmationModal",isOpen:e(f),onClose:l[5]||(l[5]=r=>f.value=!1),onUpdate:et,onConfirm:tt,mode:e(Y)},null,8,["isOpen","mode"])])}}});export{xe as default};