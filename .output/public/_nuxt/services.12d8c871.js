import{o as w,c as g,a as s,e as v,E as e,b as t,q as h,Y as E,F as l,n as _,t as A,ac as k,K as C,L as I,T as S}from"./entry.bf527e2a.js";import{_ as L}from"./nuxt-img.41367877.js";import{_ as W}from"./Service.vue.47342ee8.js";import{u as O}from"./switch.b09f8dd3.js";const T={viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},G=s("g",{id:"galaAdd0",fill:"none",stroke:"currentColor","stroke-dasharray":"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"4","stroke-opacity":"1","stroke-width":"16"},[s("circle",{id:"galaAdd1",cx:"128",cy:"128",r:"112"}),s("path",{id:"galaAdd2",d:"M 79.999992,128 H 176.0001"}),s("path",{id:"galaAdd3",d:"m 128.00004,79.99995 v 96.0001"})],-1),B=[G];function R(x,u){return w(),g("svg",T,B)}const V={name:"gala-add",render:R},$=s("h3",{class:"font-bold text-2xl md:text-3xl"},"Add New Service",-1),M=v({__name:"AddService",setup(x){return(u,f)=>(w(),g("div",{class:"relative flex h-auto hover:animate-[bump_0.3s_ease-in-out] text-black flex-col lg:w-[calc(25%-1rem)] w-full justify-center gap-y-4 md:gap-y-12 lg:text-center items-center lg:items-center shadow-[0_1px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl p-[2rem] md:px-[4rem] hover:cursor-pointer",onClick:f[0]||(f[0]=()=>{})},[e(t(V),{class:"w-[52%] md:w-full h-auto md:h-[8rem]"}),$]))}}),D={class:"w-full flex flex-col px-10 h-auto relative overflow-visible md:pt-[3rem]"},H=s("h1",{class:"w-full text-center text-5xl font-semibold"},"Your Services",-1),j={class:"flex w-full my-8 mt-12"},F={class:"instant-booking flex w-auto gap-x-4 px-8"},P=s("p",{class:"text-xl"},"Instant booking",-1),U=s("span",{class:"sr-only"},"Enable notifications",-1),Y=s("div",{class:"recurrence flex w-auto gap-x-4 px-8 items-center"},[s("p",{class:"text-xl"}," Recurrence of service"),s("button",{class:"text-xl border-1 bg-black text-white rounded-full px-4 py-1"},"Recurrence"),s("button",{class:"text-xl bg-black text-white rounded-full px-4 py-1"},"One time")],-1),z={class:"w-full flex flex-wrap justify-center md:justify-between gap-y-[2.6rem] mt-[3rem] px-8 after:flex-auto gap-x-[1.3rem] overflow-y-scroll max-h-[calc(100vh-24rem)]"},X=v({__name:"services",setup(x){const u=h(!1),f=h(""),o=h("house cleaning"),m=h(!1),c=a=>{o.value=a,p(document.getElementById(a.replace(/ /g,"-")))},y=()=>{const a=["up","down","left","right"];return a[Math.floor(Math.random()*a.length)]},b=a=>{u.value?u.value=!1:u.value=!0;const i=y();i==="up"?f.value="slideV":i==="down"?f.value="slideVD":i==="left"?f.value="slide":i==="right"&&(f.value="slideHRL"),a.classList.add(`animate-${i}`),setTimeout(()=>{a.classList.remove(`animate-${i}`)},1e3)},p=a=>{setTimeout(()=>{a.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},1e3)};return E(()=>{let a;window.addEventListener("scroll",()=>{clearTimeout(a),a=setTimeout(()=>{p(document.getElementById(o.value.replace(/ /g,"-")))},3e3)}),window.addEventListener("resize",()=>{clearTimeout(a),a=setTimeout(()=>{p(document.getElementById(o.value.replace(/ /g,"-")))},3e3)})}),(a,i)=>{const N=M,d=L,r=W;return w(),g("div",D,[H,s("div",j,[s("div",F,[P,e(t(O),{class:_(["relative inline-flex h-8 w-20 items-center rounded-full",t(m)?"bg-blue-600":"bg-gray-200"]),modelValue:t(m),"onUpdate:modelValue":i[0]||(i[0]=n=>k(m)?m.value=n:null)},{default:l(()=>[s("p",{class:_(["absolute text-lg",t(m)?"text-white left-3":"right-3"])},A(t(m)?"On":"Off"),3),U,s("span",{class:_(["inline-block h-6 w-6 transform rounded-full bg-white transition",t(m)?"translate-x-[3.3rem]":"translate-x-1"])},null,2)]),_:1},8,["modelValue","class"])]),Y]),s("div",z,[e(N),e(r,{onClick:i[1]||(i[1]=n=>u.value=!t(u)),onSelect:c,selected:t(o),title:"HOUSE CLEANING",desc:"We clean and care  for variety of hard surface flooring at many places of business."},{default:l(n=>[e(d,{class:"w-[52%] md:w-auto h-auto md:h-auto",src:"icons/icon-13.png",width:"190",h:"45"})]),_:1},8,["selected"]),e(r,{onSelect:c,title:"KITCHEN CLEANING",selected:t(o),desc:"We clean and care  for variety of hard surface flooring at many places of business."},{default:l(n=>[e(d,{class:"w-[52%] md:w-auto h-auto md:h-auto",src:"icons/icon-23.png",width:"190",h:"45"})]),_:1},8,["selected"]),e(r,{onSelect:c,title:"FLOOR CLEANING",selected:t(o),desc:"We clean and care  for variety of hard surface flooring at many places of business."},{default:l(n=>[e(d,{class:"w-[52%] md:w-auto h-auto md:h-auto",src:"icons/icon-33.png",width:"190",h:"45"})]),_:1},8,["selected"]),e(r,{onSelect:c,title:"BATHROOM CLEANING",selected:t(o),desc:"We clean and care  for variety of hard surface flooring at many places of business."},{default:l(n=>[e(d,{class:"w-[52%] md:w-auto h-auto md:h-auto",src:"icons/icon-43.png",width:"190",h:"45"})]),_:1},8,["selected"]),e(r,{onSelect:c,title:"OFFICE CLEANING",selected:t(o),desc:"We clean and care  for variety of hard surface flooring at many places of business."},{default:l(n=>[e(d,{class:"w-[52%] md:w-auto h-auto md:h-auto",src:"icons/icon-53.png",width:"190",h:"45"})]),_:1},8,["selected"]),e(r,{onSelect:c,title:"CAR CLEANING",selected:t(o),desc:"We clean and care  for variety of hard surface flooring at many places of business."},{default:l(n=>[e(d,{class:"w-[52%] md:w-auto h-auto md:h-auto",src:"icons/icon-63.png",width:"190",h:"45"})]),_:1},8,["selected"]),e(r,{onSelect:c,title:"WINDOW CLEANING",selected:t(o),desc:"We clean and care  for variety of hard surface flooring at many places of business."},{default:l(n=>[e(d,{class:"w-[52%] md:w-auto h-auto md:h-auto",src:"icons/icon-73.png",width:"190",h:"45"})]),_:1},8,["selected"]),e(r,{onSelect:c,title:"POWER WASHING",selected:t(o),desc:"We clean and care  for variety of hard surface flooring at many places of business."},{default:l(n=>[e(d,{class:"w-[52%] md:w-auto h-auto md:h-auto",src:"icons/icon-83.png",width:"190",h:"45"})]),_:1},8,["selected"]),e(r,{onSelect:c,title:"UPHOLSTERY CLEANING",selected:t(o),desc:"We clean and care  for variety of hard surface flooring at many places of business."},{default:l(n=>[e(d,{class:"w-[52%] md:w-auto h-auto md:h-auto",src:"icons/icon-93.png",width:"190",h:"45"})]),_:1},8,["selected"]),e(r,{onSelect:c,title:"GARDEN MAINTENANCE",selected:t(o),desc:"We clean and care  for variety of hard surface flooring at many places of business."},{default:l(n=>[e(d,{class:"w-[52%] md:w-auto h-auto md:h-auto",src:"icons/icon-103.png",width:"190",h:"45"})]),_:1},8,["selected"]),e(r,{onSelect:c,title:"OVEN AND APPLIANCE CLEANING",selected:t(o),desc:"We clean and care  for variety of hard surface flooring at many places of business."},null,8,["selected"])]),e(S,{name:t(f)},{default:l(()=>[C(s("div",{class:"w-full h-full bg-[#707070] fixed top-0 left-0 px-12",onClick:b},null,512),[[I,t(u)]])]),_:1},8,["name"])])}}});export{X as default};
