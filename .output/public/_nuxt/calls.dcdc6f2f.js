import{e as i,q as t,o as s,c as r,a as e,I as p,J as _}from"./entry.bf527e2a.js";const h={class:"w-full flex flex-col px-10 h-auto relative overflow-visible md:pt-[3rem]"},x=e("h1",{class:"w-full text-center text-5xl font-semibold"},"Call Logs",-1),f=e("div",{class:"flex w-full my-8 mt-12 px-8"},[e("p",null,"dsadsa")],-1),b={class:"w-full flex flex-wrap justify-center md:justify-between gap-y-[2.6rem] mt-[3rem] px-8 after:flex-auto gap-x-[1.3rem] overflow-y-scroll max-h-[calc(100vh-24rem)]"},m={class:"table-auto w-full"},u=e("thead",{class:"border-b-2 border-gray-200"},[e("tr",null,[e("th",{class:"px-4 py-2 border-r bg-gray-100 w-[10%]"},"timestamp"),e("th",{class:"px-4 py-2 border-r bg-gray-100 w-[18%]"},"phone number"),e("th",{class:"px-4 py-2 border-r bg-gray-100 w-[26%]"},"service"),e("th",{class:"px-4 py-2 border-r bg-gray-100 w-[20%]"},"duration (minutes)"),e("th",{class:"px-4 py-2 w-[10%] bg-gray-100"},"recording")])],-1),y={key:0,id:"end-of-list"},g=["id"],w=e("td",{class:"border-r px-3 py-2 text-center"},"321321",-1),v=e("td",{class:"border-r px-4 py-2 flex space-x-2"},[e("p",null,"3232")],-1),k=e("td",{class:"border-r px-4 py-2"},[e("p",{class:"text-blue-500 hover:cursor-pointer"},"cleaning")],-1),C=e("td",{class:"border-r px-4 py-2"},"1:34",-1),B=e("td",{class:"px-4 py-2 gap-x-2"},[e("div",{class:"flex"},[e("button",{class:"border-2 border-gray-200 rounded-md px-6 py-1 font-semibold hover:bg-blue-400 hover:text-white"},"Edit")])],-1),E=[w,v,k,C,B],D=i({__name:"calls",setup(J){t(!1),t(""),t("house cleaning"),t(!1);const a=l=>{if(l===o.length-1)return"end-of-list"},d=[{id:1,name:"John Doe",email:""}],o=[{id:1,name:"John Doe",email:""}];return(l,L)=>(s(),r("div",h,[x,f,e("div",b,[e("table",m,[u,e("tbody",null,[o.length<=0?(s(),r("tr",y)):(s(),r(p,{key:1},_(d,(c,n)=>e("tr",{class:"border-t",key:c,id:a(n)},E,8,g)),64))])])])]))}});export{D as default};