import h from"./Navigator.c72a192e.js";import u from"./ContentList.f93c8467.js";import w from"./Footer.828ae9e6.js";import{g as x,c as t,b as s,a as o,w as l,P as v,F as d,o as r,B as g,D as a,t as n}from"./entry.2c336fda.js";import"./Ke-logo.d27361ef.js";import"./ContentQuery.7450fdcd.js";import"./asyncData.b5c09ecd.js";const y={class:"p-4 md:pt-8 max-w-5xl mx-auto flex flex-row flex-wrap justify-between font-serif"},b=["href"],k=["src"],C=["href"],D={class:"p-4 flex flex-col justify-between w-full h-full"},L={class:"uppercase text-xs font-bold opacity-70"},R={class:"text-bold font-bold text-xl md:text-2xl m-0 py-4"},$={class:"text-xs opacity-70"},z=o("div",{class:"h-screen w-full"},null,-1),A=x({__name:"cards",setup(B){const c={sort:[{date:-1}]};return(i,F)=>{const p=h,_=u,m=w;return r(),t(d,null,[s(p),o("article",y,[s(_,{path:(i._.provides[v]||i.$route).path,query:c},{default:l(({list:f})=>[(r(!0),t(d,null,g(f,e=>(r(),t("div",{key:e._path,class:a(["w-full max-w-none rounded-sm bg-gray-100 dark:bg-gray-800 prose dark:prose-invert mb-8 flex overflow-hidden flex-col hover:shadow-lg hover:dark:bg-gray-700 hover:bg-gray-50 [&_img]:hover:opacity-40 [&_a]:hover:opacity-100 [&_img]:hover:scale-[1.02] transition-background isolate duration-500",e.previewCardDirection==="horizontal"?"md:flex-row":"flex-col md:w-[48%]"])},[o("div",{class:a(["w-full",e.previewCardDirection==="horizontal"?"md:w-1/2":""])},[o("a",{href:e.previewRedirectLink?e.previewRedirectLink:`${e._path}`},[o("img",{class:"m-0 transition-[opacity,transform] duration-500",src:e.thumbnail,alt:""},null,8,k)],8,b)],2),o("a",{href:e.previewRedirectLink?e.previewRedirectLink:`${e._path}`,class:a(["h-full decoration-transparent",e.previewCardDirection==="horizontal"?"md:w-1/2":""])},[o("div",D,[o("div",L,n(e.tag),1),o("h1",R,n(e.title),1),o("div",$,n(new Date(e.date).toLocaleDateString()),1)])],10,C)],2))),128))]),"not-found":l(()=>[z]),_:1},8,["path"])]),s(m)],64)}}});export{A as default};
