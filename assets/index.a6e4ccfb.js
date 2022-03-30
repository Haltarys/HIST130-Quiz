import{r as b,j as e,c as B,i as O,b as j,a as P,u as g,Q as M,T as a,d as E,e as s,f as G,g as v,L as u,h as x,k as C,I as S,l as W,m as J,n as V,o as K,A as U,p as Y,q as X,G as m,C as F,s as I,t as N,S as h,v as T,w as R,F as d,x as Z,y as w,z as ee,B as re,R as te,D as f,N as ne,E as oe,H as ie,J as ae,K as ce,M as se,O as le,P as ue}from"./vendor.4852f194.js";const de=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}};de();function he(){return JSON.parse(localStorage.getItem("HIST130-Quiz")||"{}").favourites||[]}function fe(r){localStorage.setItem("HIST130-Quiz",JSON.stringify({favourites:r}))}function me(r,t){let n=r;switch(t.type){case"add":r.includes(t.id)||(n=[...r,t.id]);break;case"remove":n=r.filter(i=>i!==t.id);break;case"clear":n=[];break;default:throw new Error("Error updating the favourites")}return Promise.resolve().then(()=>fe(n)),n}function pe(){const[r,t]=b.exports.useReducer(me,he());return{favouriteIDs:r,onBookmark:(n,i)=>{t({type:i?"remove":"add",id:n})},clearFavourites:()=>t({type:"clear",id:-1})}}const _=b.exports.createContext();function ve({children:r}){const t=pe();return e(_.Provider,{value:t,children:r})}function q(){return b.exports.useContext(_)}var ge=B({palette:{primary:{main:O["900"],light:"#534bae",dark:"#000051"},secondary:{main:j["500"],light:"#6ec6ff",dark:"#0069c0"}}});const H="/HIST130-Quiz/",ye=P.create({baseURL:H,headers:{"Content-Type":"application/json",Accept:"application/json"}});async function y(r){return ye.get(r).then(t=>t.data)}function be(){return g("chapters",()=>y("/chapters.json"))}const xe=new M({defaultOptions:{queries:{refetchOnWindowFocus:!1,refetchOnMount:!1}}});function Q(r){return r===void 0?g("definitions",()=>y("/definitions.json")):g(["definitions",r],()=>y("/definitions.json").then(t=>t==null?void 0:t.filter(n=>n.chapterId===r)))}function Ce(){return e(a,{variant:"subtitle1",component:"h2",sx:{flexGrow:1},children:"Made with \u2764\uFE0F by Haltarys!"})}function Se(){const r=E();return s(G,{value:r.pathname,indicatorColor:"secondary",variant:"fullWidth",textColor:"inherit",component:"nav",children:[e(v,{value:"/",label:"Reference",component:u,to:"/"}),e(v,{value:"/favourites",label:"Favourites",component:u,to:"/favourites"}),e(v,{value:"/quiz",label:"Quiz",component:u,to:"/quiz"})]})}function ke(){return e(a,{variant:"h6",sx:{flexGrow:1},component:"h1",children:e(x,{color:"inherit",underline:"none",component:u,to:"/",children:"HIST 130 Quiz"})})}function Le(){return e(C,{title:"View the source code on Github!",children:e(S,{size:"large",color:"inherit",href:"https://github.com/Haltarys/HIST130-Quiz",target:"_blank",children:e(W,{})})})}var k={},ze=V.exports;Object.defineProperty(k,"__esModule",{value:!0});var D=k.default=void 0,Fe=ze(J),Ie=K,Ne=(0,Fe.default)((0,Ie.jsx)("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"}),"Feedback");D=k.default=Ne;function Te(){return s(U,{position:"sticky",children:[s(Y,{children:[e(ke,{}),e(Ce,{}),e(C,{title:"Send Feedback",children:e(S,{size:"large",color:"inherit",component:u,to:"/feedback",children:e(D,{})})}),e(Le,{})]}),e(Se,{})]})}function p({children:r}){return s(a,{color:"error",component:"div",sx:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",textAlign:"center",padding:2},children:[e(X,{color:"error",sx:{fontSize:96}}),e(a,{variant:"h4",color:"error",children:"An error occurred:"}),r||"Unknown error."]})}function $(r){return[...Array(r).keys()]}function Re(){return e(m,{item:!0,xs:12,sm:6,md:4,lg:3,children:s(F,{sx:{backgroundColor:I["100"]},children:[e(N,{title:e(h,{variant:"text",children:e(a,{variant:"h5",children:"Lorem ipsum dolor sit."})}),subheader:e(h,{variant:"text",children:e(a,{variant:"body1",children:"Lorem, ipsum dolor."})})}),e(T,{children:e(h,{variant:"text",children:e(a,{variant:"body2",color:"text.secondary",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sapiente soluta aliquid porro rem sunt molestiae neque, consectetur rerum harum atque molestias hic quidem cum."})})}),e(R,{children:e(h,{variant:"circular",width:59,height:59})})]})})}function L({numberOfPlaceholders:r=12}){return e(d,{children:$(r).map((t,n)=>e(Re,{},n))})}function we(){return s(d,{children:[e(h,{variant:"text",children:e(a,{variant:"h4",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})}),e(h,{variant:"text",children:e(a,{variant:"body1",children:"Lorem ipsum dolor sit."})})]})}function _e(){return e(d,{children:$(2).map((r,t)=>e(z,{header:void 0,children:e(L,{})},t))})}function qe({header:r}){return r===void 0?e(we,{}):typeof r=="string"?e(a,{variant:"h4",children:r}):e(d,{children:r})}function z({header:r,children:t}){return s(m,{container:!0,spacing:2,padding:2,paddingBottom:4,children:[e(m,{item:!0,xs:12,children:e(qe,{header:r})}),t]})}function He(){return s(a,{color:"secondary",component:"div",sx:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",textAlign:"center",padding:2},children:[e(Z,{color:"secondary",sx:{fontSize:96}}),e(a,{variant:"h4",color:"secondary",children:"Nothing favourites found."}),s(a,{variant:"body1",children:["Go to the"," ",e(x,{color:"secondary",to:"/",component:u,sx:{fontWeight:"bold"},children:"homepage"})," ","and click the"," ",e(w,{color:"action",fontSize:"small",style:{verticalAlign:"text-top"}})," ","icon to add some definitions to your favourites."]})]})}function A({definition:r,subheader:t,isFavourite:n,onBookmark:i}){return e(m,{item:!0,xs:12,sm:6,md:4,lg:3,children:s(F,{sx:{backgroundColor:I["100"]},children:[e(N,{title:r.term,subheader:t}),e(T,{children:e(a,{variant:"body2",color:"text.secondary",children:r.text})}),e(R,{children:e(C,{title:n?"Remove from Favourites":"Add to Favourites",children:e(S,{size:"large",onClick:()=>i(r.id,n),color:n?"secondary":"default",children:n?e(ee,{fontSize:"large"}):e(w,{fontSize:"large"})})})})]})})}function Qe(){const{isLoading:r,error:t,data:n}=Q(),{favouriteIDs:i,onBookmark:o}=q(),c=n==null?void 0:n.filter(l=>i.includes(l.id));return t?e(p,{children:t==null?void 0:t.message}):e(z,{header:"Favourites",children:r?e(L,{}):c&&c.length>0?c.map(l=>e(A,{definition:l,subheader:`chapter.title (page ${l.pageNumber})`,isFavourite:i.includes(l.id),onBookmark:o},l.id)):e(He,{})})}function De(){return s(p,{children:[e(a,{variant:"h6",children:"Page not found."}),s(a,{variant:"body1",children:["Go to"," ",e(x,{color:"error",to:"/",component:u,sx:{fontWeight:"bold"},children:"homepage"}),"."]})]})}function $e(){return e("div",{children:"Quiz"})}function Ae({chapter:r}){return s(d,{children:[s(a,{variant:"h4",children:[r.title,": ",r.subtitle]}),s(a,{variant:"body1",children:[r.period," (page ",r.pageNumber,")"]})]})}function Be({chapter:r}){const{isLoading:t,error:n,data:i}=Q(r.id),{favouriteIDs:o,onBookmark:c}=q();return n?e(p,{children:n.message}):e(z,{header:e(Ae,{chapter:r}),children:t?e(L,{}):i==null?void 0:i.map(l=>e(A,{definition:l,subheader:`${r.title} (page ${l.pageNumber})`,isFavourite:o.includes(l.id),onBookmark:c},l.id))})}function Oe(){const{isLoading:r,error:t,data:n}=be();return r?e(_e,{}):t?e(p,{children:t==null?void 0:t.message}):e(d,{children:n==null?void 0:n.map(i=>e(Be,{chapter:i},i.id))})}function je(){return e(re,{maxWidth:"xl",component:"main",sx:{marginY:2},children:s(te,{children:[e(f,{path:"*",element:e(De,{})}),e(f,{path:"/",element:e(Oe,{})}),e(f,{path:"/favourites",element:e(Qe,{})}),e(f,{path:"/favorites",element:e(ne,{to:"/favourites",replace:!0})}),e(f,{path:"/quiz",element:e($e,{})})]})})}function Pe(){return s(d,{children:[e(Te,{}),e(je,{}),e(oe.exports.ReactQueryDevtools,{})]})}ie.render(e(ae.StrictMode,{children:e(ce,{basename:H,children:e(se,{children:e(le,{theme:ge,children:e(ue,{client:xe,children:e(ve,{children:e(Pe,{})})})})})})}),document.getElementById("root"));
