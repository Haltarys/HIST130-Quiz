var pe=Object.defineProperty,ge=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var Z=(t,r,n)=>r in t?pe(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,g=(t,r)=>{for(var n in r||(r={}))be.call(r,n)&&Z(t,n,r[n]);if(V)for(var n of V(r))ye.call(r,n)&&Z(t,n,r[n]);return t},v=(t,r)=>ge(t,ve(r));import{u as Se,a as xe,c as Y,r as A,b as ke,l as Ae,d as Ce,i as we,e as Fe,f as Ie,Q as ze,j as a,F as m,g as e,T as l,L as u,h,k as $,m as K,n as q,G as d,C as E,o as Te,p as Q,S as b,q as H,s as O,B as w,t as De,v as Be,w as x,I as C,x as J,y as X,D as U,z as R,A as z,E as T,H as ee,J as Le,K as te,M as qe,R as Re,N as y,O as Ne,P as re,U as $e,V as Ee,W as D,X as Qe,Y as He,Z as Oe,_ as _e,$ as je,a0 as Pe,a1 as Me,a2 as We,a3 as Ge,a4 as Ve,a5 as Ze,a6 as B,a7 as Ue,a8 as Ye,a9 as Ke,aa as Je,ab as Xe,ac as et,ad as tt,ae as rt,af as nt,ag as it,ah as ot}from"./vendor.6e127669.js";const at=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};at();const _=()=>xe(),ne=Se,lt={favouriteIDs:[]},ie=Y({name:"favourites",initialState:lt,reducers:{setFavourites:(t,r)=>{t.favouriteIDs=r.payload},addToFavourites:(t,r)=>{t.favouriteIDs.includes(r.payload)||t.favouriteIDs.push(r.payload)},removeFromFavourites:(t,r)=>{t.favouriteIDs=t.favouriteIDs.filter(n=>n!==r.payload)},clearFavourites:t=>{t.favouriteIDs=[]}}}),{addToFavourites:ct,removeFromFavourites:st,clearFavourites:fr}=ie.actions;function j(){return ne(t=>t.favourites.favouriteIDs)}function oe(){const t=_();return(r,n)=>t(n?st(r):ct(r))}var dt=ie.reducer;const ut={selectedSources:{favourites:!0},definitionsAlreadyEncountered:[]},ae=Y({name:"quiz",initialState:ut,reducers:{selectSource:(t,r)=>{t.selectedSources[r.payload]=!0},deselectSource:(t,r)=>{t.selectedSources[r.payload]=!1},resetSources:t=>{t.selectedSources={favourites:!0}},setDefinitionAsEncountered:(t,r)=>{t.definitionsAlreadyEncountered.includes(r.payload)||t.definitionsAlreadyEncountered.push(r.payload)},clearEncounteredDefinitions:t=>{t.definitionsAlreadyEncountered=[]}}}),{selectSource:ht,deselectSource:ft,resetSources:mt,setDefinitionAsEncountered:pt,clearEncounteredDefinitions:gt}=ae.actions;function le(){return ne(t=>v(g({},t.quiz),{selectedSources:new Proxy(t.quiz.selectedSources,{get(r,n){return r[n]!==void 0?r[n]:!0}})}))}function vt(){const t=_();return(r,n=!0)=>t(r==="all"?mt():n?ft(r):ht(r))}function bt(t){const r=le(),n=j(),c=_(),o=t.filter(i=>(r.selectedSources[i.chapterId]||r.selectedSources.favourites&&n.includes(i.id))&&!r.definitionsAlreadyEncountered.includes(i.id));return A.exports.useEffect(()=>{o.length===0&&r.definitionsAlreadyEncountered.length>0&&c(gt())},[r.definitionsAlreadyEncountered]),()=>{const i=Math.floor(Math.random()*o.length),s=o[i];return s&&c(pt(s.id)),o[i]}}var yt=ae.reducer;const ce="HIST130-Quiz";function St(){try{const t=localStorage.getItem(ce);return t?JSON.parse(t):void 0}catch{return}}function xt(t){try{const r=JSON.stringify(t);localStorage.setItem(ce,r)}catch{}}const N=ke({reducer:{favourites:dt,quiz:yt},preloadedState:St()});N.subscribe(Ae(()=>{xt(N.getState())},2e3));var kt=Ce({palette:{primary:{main:we["900"],light:"#534bae",dark:"#000051"},secondary:{main:Fe["500"],light:"#6ec6ff",dark:"#0069c0"}}});const se="/HIST130-Quiz/",At=Ie.create({baseURL:se,headers:{"Content-Type":"application/json",Accept:"application/json"}});async function F(t){return At.get(t).then(r=>r.data)}const de=new ze({defaultOptions:{queries:{refetchOnWindowFocus:!1,refetchOnMount:!1}}});de.prefetchQuery("chapters",()=>F("/chapters.json"));function Ct(){return a(m,{children:[e(l,{variant:"h4",children:"About this website"}),e(l,{variant:"body1",marginBottom:4,children:"This website is an interactive app to help you memorise the definitions of HIST 130 at CSUSM."}),e(l,{variant:"h5",children:"Reference"}),a(l,{variant:"body1",marginBottom:2,children:["In the"," ",e(u,{color:"primary",component:h,to:"/",children:"Reference"})," ","tab, you can find the list of definitions, grouped by chapter."]}),e(l,{variant:"h5",children:"Favourites"}),a(l,{variant:"body1",marginBottom:2,children:["Go to the"," ",e(u,{color:"primary",to:"/",component:h,children:"Reference"})," ","page and click the"," ",e($,{color:"action",fontSize:"small",style:{verticalAlign:"text-top"}})," ","icon to add some definitions to your favourites. You can browse your favourites"," ",e(u,{color:"primary",to:"/favourites",component:h,children:"here"}),"."]}),e(l,{variant:"h5",children:"Quiz"}),a(l,{variant:"body1",marginBottom:2,children:["Test your memory in the"," ",e(u,{component:h,to:"/quiz",children:"Quiz"})," ","tab! Find a term, given its definition. You can narrow which chapters you want to train with."]}),e(l,{variant:"h5",children:"Feedback"}),a(l,{variant:"body1",marginBottom:4,children:["Is something wrong? A bug? A question? An idea? A request? Click the"," ",e(K,{color:"action",fontSize:"small",style:{verticalAlign:"text-top"}})," ","icon in the top-right corner to get in touch!"]}),e(l,{variant:"h4",children:"Credits"}),a(l,{variant:"body1",marginBottom:4,children:["All the definitions were handwritten from the book"," ",e(u,{href:"https://www.macmillanlearning.com/college/us/product/The-American-Promise-Volume-1/p/1319208894",target:"_blank",children:"The American Promise (Roark et al., 2019)"}),". The rest of the"," ",e(u,{href:"https://github.com/Haltarys/HIST130-Quiz",target:"_blank",children:"code"})," ","was written by me,"," ",e(u,{href:"https://github.com/Haltarys",target:"_blank",children:"Haltarys"}),", under an"," ",e(u,{href:"https://mit-license.org/",target:"_blank",children:"MIT licence"}),"."]})]})}function P(t){return t===void 0?q("definitions",()=>F("/definitions.json")):q(["definitions",t],()=>F("/definitions.json").then(r=>r==null?void 0:r.filter(n=>n.chapterId===t)))}function M(){return q("chapters",()=>F("/chapters.json"))}function ue(t){return[...Array(t).keys()]}function wt(){return e(d,{item:!0,xs:12,sm:6,md:4,lg:3,children:a(E,{sx:{backgroundColor:Te["100"]},children:[e(Q,{title:e(b,{variant:"text",children:e(l,{variant:"h5",children:"Lorem ipsum dolor sit."})}),subheader:e(b,{variant:"text",children:e(l,{variant:"body1",children:"Lorem, ipsum dolor."})})}),e(H,{children:e(b,{variant:"text",children:e(l,{variant:"body2",color:"text.secondary",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sapiente soluta aliquid porro rem sunt molestiae neque, consectetur rerum harum atque molestias hic quidem cum."})})}),e(O,{children:e(b,{variant:"circular",width:59,height:59})})]})})}function Ft(){return a(m,{children:[e(b,{variant:"text",children:e(l,{variant:"h4",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})}),e(b,{variant:"text",children:e(l,{variant:"body1",children:"Lorem ipsum dolor sit."})})]})}function It({header:t}){return t===void 0?e(Ft,{}):typeof t=="string"?e(l,{variant:"h4",children:t}):e(m,{children:t})}function W({header:t,children:r}){return a(d,{container:!0,spacing:2,paddingBottom:3,children:[e(d,{item:!0,xs:12,children:e(It,{header:t})}),r]})}function I({numberOfPlaceholders:t=12}){return e(W,{header:void 0,children:ue(t).map((r,n)=>e(wt,{},n))})}function S({children:t}){return e(w,{height:"100%",display:"grid",sx:{placeItems:"center"},children:a(l,{color:"error",component:"div",textAlign:"center",children:[e(De,{color:"error",sx:{fontSize:96}}),e(l,{variant:"h4",color:"error",children:"An error occurred:"}),t||"Unknown error."]})})}function zt(){return e(w,{height:"100%",display:"grid",textAlign:"center",sx:{placeItems:"center"},children:a(l,{color:"secondary",component:"div",padding:2,children:[e(Be,{color:"secondary",sx:{fontSize:96}}),e(l,{variant:"h4",color:"secondary",children:"Nothing favourites found."}),a(l,{variant:"body1",children:["Go to the"," ",e(u,{color:"secondary",to:"/",component:h,sx:{fontWeight:"bold"},children:"Reference"})," ","page and click the"," ",e($,{color:"action",fontSize:"small",style:{verticalAlign:"text-top"}})," ","icon to add some definitions to your favourites."]})]})})}function he({definition:t,subheader:r,isFavourite:n,onBookmark:c}){return e(d,{item:!0,xs:12,sm:6,md:4,lg:3,display:"flex",children:a(E,{elevation:2,sx:{display:"flex",flexDirection:"column",":hover":{boxShadow:8}},children:[e(Q,{title:t.term,subheader:r}),e(H,{sx:{flexGrow:1},children:e(l,{variant:"body2",color:"text.secondary",children:t.text})}),e(O,{children:e(x,{title:n?"Remove from Favourites":"Add to Favourites",children:e(C,{size:"large",onClick:()=>c(t.id,n),color:n?"secondary":"default",children:n?e(J,{fontSize:"large"}):e($,{fontSize:"large"})})})})]})})}function Tt(){const{isLoading:t,error:r,data:n}=P(),{isLoading:c,error:o,data:i}=M(),s=j(),k=oe(),p=n==null?void 0:n.filter(f=>s.includes(f.id));return t||c?e(I,{}):r?e(S,{children:r==null?void 0:r.message}):o?e(S,{children:o==null?void 0:o.message}):!p||p.length===0?e(zt,{}):e(W,{header:"Favourites",children:p.map(f=>{var G;const fe=(G=i==null?void 0:i.find(me=>me.id===f.chapterId))==null?void 0:G.title;return e(he,{definition:f,subheader:`${fe} (page ${f.pageNumber})`,isFavourite:s.includes(f.id),onBookmark:k},f.id)})})}function Dt(){return a(S,{children:[e(l,{variant:"h6",children:"Page not found."}),a(l,{variant:"body1",children:["Go to"," ",e(u,{color:"error",to:"/",component:h,sx:{fontWeight:"bold"},children:"homepage"}),"."]})]})}function Bt(){return e(d,{container:!0,spacing:1,marginBottom:4,children:ue(12).map(t=>e(d,{item:!0,children:e(b,{variant:"text",children:e(X,{label:"Chapter X"})})},t))})}function L({helpText:t,icon:r,label:n,checked:c,handleToggle:o}){return e(x,{title:t,children:e(X,{icon:r,label:n,color:"primary",variant:c?"filled":"outlined",onClick:()=>o()})})}function Lt(){const{isLoading:t,error:r,data:n}=M(),{selectedSources:c}=le(),o=vt();return t?e(Bt,{}):r?e(S,{children:r.message}):a(d,{container:!0,spacing:1,marginBottom:4,children:[e(d,{item:!0,children:e(L,{helpText:"Select all sources",label:"All",checked:Object.values(c).every(i=>i===!0),handleToggle:()=>o("all")})}),e(d,{item:!0,children:e(U,{orientation:"vertical"})}),n==null?void 0:n.map(i=>e(d,{item:!0,children:e(L,{helpText:`Include definitions from ${i.title}: ${i.subtitle}`,label:i.title,checked:c[i.id],handleToggle:()=>o(i.id,c[i.id])})},i.id)),e(d,{item:!0,children:e(U,{orientation:"vertical"})}),e(d,{item:!0,children:e(L,{helpText:"Include definitions from your favourited definitions",icon:e(J,{}),label:"Favourites",checked:c.favourites,handleToggle:()=>o("favourites",c.favourites)})})]})}function qt({definition:t}){return a(m,{children:[e(l,{variant:"h6",gutterBottom:!0,children:"Definition"}),t?e(l,{variant:"body1",marginBottom:4,height:"128px",children:t.text}):e(l,{variant:"body1",component:"div",marginBottom:4,height:"128px",display:"grid",sx:{placeItems:"center",textAlign:"center"},children:a("div",{children:[e(l,{fontWeight:"bold",children:"Nothing to show here!"}),e(l,{children:'Select some sources from above and click the "New random definition" button below.'})]})})]})}function Rt({handleClick:t}){return a(O,{children:[e(R,{variant:"outlined",fullWidth:!0,onClick:t,children:"New random definition"}),e(R,{type:"submit",variant:"contained",fullWidth:!0,children:"Submit"})]})}function Nt({control:t}){return e(z,{control:t,name:"keywordAttempt",defaultValue:"",rules:{required:!0,pattern:/batman/},render:({field:n,fieldState:{invalid:c}})=>e(T,v(g({},n),{variant:"outlined",fullWidth:!0,sx:{marginBottom:4},placeholder:"Try to guess the definition's keyword here.",error:c,helperText:c&&"Incorrect keyword",InputProps:{startAdornment:e(ee,{position:"start",children:e(x,{title:"Click to reveal the solution",children:e(C,{children:e(Le,{color:"primary"})})})})}}))})}function $t({definitions:t}){const r=bt(t),n=()=>o(r()),[c,o]=A.exports.useState(),{control:i,handleSubmit:s,reset:k}=te({reValidateMode:"onSubmit",shouldUnregister:!0});return a("form",{onSubmit:s(p=>{console.log(p),n(),k()}),children:[e(qt,{definition:c}),e(Nt,{control:i}),e(Rt,{handleClick:n})]})}function Et(){const{isLoading:t,error:r,data:n}=P();return t?e("div",{children:"loading..."}):r?a("div",{children:["Error:",r.message,"..."]}):e(d,{container:!0,height:"100%",alignItems:"center",justifyContent:"center",children:e(d,{item:!0,lg:8,children:a(E,{children:[e(Q,{title:"Quiz"}),a(H,{children:[e(l,{variant:"h6",gutterBottom:!0,children:"Select which sources for the pool of definitions to draw from."}),e(Lt,{}),n!==void 0&&e($t,{definitions:n})]})]})})})}function Qt({chapter:t}){return a(m,{children:[a(l,{variant:"h4",children:[t.title,": ",t.subtitle]}),a(l,{variant:"body1",children:[t.period," (page ",t.pageNumber,")"]})]})}function Ht({chapter:t}){const{isLoading:r,error:n,data:c}=P(t.id),o=j(),i=oe();return r?e(I,{}):n?e(S,{children:n.message}):e(W,{header:e(Qt,{chapter:t}),children:c==null?void 0:c.map(s=>e(he,{definition:s,subheader:`${t.title} (page ${s.pageNumber})`,isFavourite:o.includes(s.id),onBookmark:i},s.id))})}function Ot(){return a(m,{children:[e(I,{}),e(I,{})]})}function _t(){const{isLoading:t,error:r,data:n}=M();return t?e(Ot,{}):r?e(S,{children:r==null?void 0:r.message}):e(m,{children:n==null?void 0:n.map(c=>e(Ht,{chapter:c},c.id))})}function jt(){return e(qe,{maxWidth:"xl",component:"main",sx:{height:"100%",paddingY:3},children:a(Re,{children:[e(y,{path:"*",element:e(Dt,{})}),e(y,{path:"/",element:e(_t,{})}),e(y,{path:"/favourites",element:e(Tt,{})}),e(y,{path:"/favorites",element:e(Ne,{to:"/favourites",replace:!0})}),e(y,{path:"/quiz",element:e(Et,{})}),e(y,{path:"/about",element:e(Ct,{})})]})})}function Pt({handleClick:t}){return e(x,{title:"Send Feedback",children:e(C,{size:"large",color:"inherit",onClick:t,children:e(K,{})})})}const Mt="default_service",Wt="ZIKOORmHl6Yks5NsS",Gt="HIST130-Quiz";re.init(Wt);async function Vt(t){return re.send(Mt,Gt,t).then(()=>({success:!0,message:"Feedback sent."})).catch(r=>({success:!1,message:r.text}))}function Zt({handleClose:t}){return e(R,{variant:"outlined",onClick:t,children:"Cancel"})}function Ut({loading:t}){return e($e,{type:"submit",variant:"contained",startIcon:e(Ee,{}),loading:t,loadingPosition:"start",children:"Send"})}function Yt({control:t}){return e(z,{control:t,name:"object",defaultValue:"",rules:{required:!0},render:({field:r,fieldState:{invalid:n}})=>a(T,v(g({},r),{variant:"outlined",label:"Object",select:!0,required:!0,placeholder:"Select a type of feedback",error:n,helperText:n&&"Please select a type of feedback",fullWidth:!0,margin:"normal",children:[e(D,{value:"feature",children:"Feature request"}),e(D,{value:"bug",children:"Bug report"}),e(D,{value:"other",children:"Other"})]}))})}const Kt=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function Jt({control:t}){return e(z,{control:t,name:"email",defaultValue:"",rules:{required:!1,pattern:Kt},render:({field:r,fieldState:{invalid:n}})=>e(T,v(g({},r),{variant:"outlined",label:"Email address (optional)",type:"email",placeholder:"Only required if you want me to reach back.",error:n,helperText:n&&"Invalid email address",fullWidth:!0,margin:"normal",InputProps:{startAdornment:e(ee,{position:"start",children:e(Qe,{})})}}))})}function Xt({control:t}){return e(z,{control:t,name:"message",defaultValue:"",rules:{required:!0},render:({field:r,fieldState:{invalid:n}})=>e(T,v(g({},r),{variant:"outlined",label:"Your message",type:"text",required:!0,error:n,helperText:n&&"Let me know your thoughts.",multiline:!0,rows:8,fullWidth:!0,margin:"normal"}))})}function er(t){return e(_e,v(g({},t),{direction:"left"}))}function tr({feedback:{success:t,message:r},clearFeedback:n}){const c=(o,i)=>{i!=="clickaway"&&n()};return e(He,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:!0,message:r,autoHideDuration:6e3,TransitionComponent:er,onClose:c,children:e(Oe,{variant:"filled",severity:t?"success":"error",sx:{width:"100%"},onClose:c,children:r})})}function rr({open:t,handleClose:r}){const[n,c]=A.exports.useState(!1),[o,i]=A.exports.useState(void 0),{control:s,handleSubmit:k,reset:p}=te({mode:"onBlur",reValidateMode:"onBlur",shouldUnregister:!0});return a(m,{children:[e(je,{open:t,onClose:r,disableEscapeKeyDown:n,onBackdropClick:()=>{n||r()},children:a("form",{onSubmit:k(async f=>{c(!0),i(await Vt(f)),r(),c(!1),p()}),children:[e(Pe,{children:"Send feedback"}),a(Me,{children:[e(Yt,{control:s}),e(Jt,{control:s}),e(Xt,{control:s})]}),a(We,{children:[e(Zt,{handleClose:r}),e(Ut,{loading:n})]})]})}),o&&e(tr,{feedback:o,clearFeedback:()=>i(void 0)})]})}function nr(){const[t,r]=A.exports.useState(!1);return a(m,{children:[e(Pt,{handleClick:()=>r(!0)}),e(rr,{open:t,handleClose:()=>r(!1)})]})}function ir(){return e(x,{title:"About this website",children:e(C,{size:"large",color:"inherit",component:h,to:"/about",children:e(Ge,{})})})}function or(){return e(l,{variant:"subtitle1",component:"h2",sx:{flexGrow:1},children:"Made with \u2764\uFE0F by Haltarys!"})}function ar(){const t=Ve(),r=["/","/favourites","/quiz"].includes(t.pathname)?t.pathname:!1;return a(Ze,{value:r,indicatorColor:"secondary",variant:"fullWidth",textColor:"inherit",component:"nav",children:[e(B,{value:"/",label:"Reference",component:h,to:"/"}),e(B,{value:"/favourites",label:"Favourites",component:h,to:"/favourites"}),e(B,{value:"/quiz",label:"Quiz",component:h,to:"/quiz"})]})}function lr(){return e(l,{variant:"h6",sx:{flexGrow:1},component:"h1",children:e(u,{color:"inherit",underline:"none",component:h,to:"/",children:"HIST 130 Quiz"})})}function cr(){return e(x,{title:"View the source code on Github!",children:e(C,{size:"large",color:"inherit",href:"https://github.com/Haltarys/HIST130-Quiz",target:"_blank",rel:"norefferer noopener",children:e(Ue,{})})})}function sr(){return a(Ye,{position:"sticky",children:[a(Ke,{children:[e(lr,{}),e(or,{}),e(nr,{}),e(ir,{}),e(cr,{})]}),e(ar,{})]})}function dr(){return a(w,{display:"flex",flexDirection:"column",height:"100%",children:[e(sr,{}),e(w,{display:"flex",height:"100%",flex:1,sx:{overflowY:"auto",flexFlow:"column"},children:e(jt,{})}),e(Je.exports.ReactQueryDevtools,{})]})}Xe.render(e(et.StrictMode,{children:e(tt,{basename:se,children:e(rt,{children:e(nt,{theme:kt,children:e(it,{client:de,children:e(ot,{store:N,children:e(dr,{})})})})})})}),document.getElementById("root"));
