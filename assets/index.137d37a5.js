var ye=Object.defineProperty,be=Object.defineProperties;var Se=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var Z=(t,r,n)=>r in t?ye(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,g=(t,r)=>{for(var n in r||(r={}))U.call(r,n)&&Z(t,n,r[n]);if(F)for(var n of F(r))Y.call(r,n)&&Z(t,n,r[n]);return t},v=(t,r)=>be(t,Se(r));var K=(t,r)=>{var n={};for(var i in t)U.call(t,i)&&r.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&F)for(var i of F(t))r.indexOf(i)<0&&Y.call(t,i)&&(n[i]=t[i]);return n};import{u as xe,a as ke,c as X,r as k,b as Ce,l as Ae,d as Fe,i as we,e as ze,f as Ie,Q as Te,j as l,F as p,g as e,T as c,L as h,h as f,k as Q,m as ee,n as R,G as u,C as $,o as De,p as H,S as y,q as O,s as _,B as w,t as Be,v as Le,w as C,I as A,x as te,y as qe,z as re,D as J,A as E,E as T,H as D,J as ne,K as Re,M as ie,N as Ee,R as Ne,O as x,P as Qe,U as oe,V as $e,W as He,X as B,Y as Oe,Z as _e,_ as je,$ as Pe,a0 as Me,a1 as We,a2 as Ve,a3 as Ge,a4 as Ze,a5 as Ue,a6 as Ye,a7 as L,a8 as Ke,a9 as Je,aa as Xe,ab as et,ac as tt,ad as rt,ae as nt,af as it,ag as ot,ah as at,ai as lt}from"./vendor.90024fb5.js";const ct=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}};ct();const j=()=>ke(),ae=xe,st={favouriteIDs:[]},le=X({name:"favourites",initialState:st,reducers:{setFavourites:(t,r)=>{t.favouriteIDs=r.payload},addToFavourites:(t,r)=>{t.favouriteIDs.includes(r.payload)||t.favouriteIDs.push(r.payload)},removeFromFavourites:(t,r)=>{t.favouriteIDs=t.favouriteIDs.filter(n=>n!==r.payload)},clearFavourites:t=>{t.favouriteIDs=[]}}}),{addToFavourites:ut,removeFromFavourites:dt,clearFavourites:gr}=le.actions;function P(){return ae(t=>t.favourites.favouriteIDs)}function ce(){const t=j();return(r,n)=>t(n?dt(r):ut(r))}var ht=le.reducer;const ft={selectedSources:{favourites:!0},definitionsAlreadyEncountered:[]},se=X({name:"quiz",initialState:ft,reducers:{selectSource:(t,r)=>{t.selectedSources[r.payload]=!0},deselectSource:(t,r)=>{t.selectedSources[r.payload]=!1},resetSources:t=>{t.selectedSources={favourites:!0}},setDefinitionAsEncountered:(t,r)=>{t.definitionsAlreadyEncountered.includes(r.payload)||t.definitionsAlreadyEncountered.push(r.payload)},clearEncounteredDefinitions:t=>{t.definitionsAlreadyEncountered=[]}}}),{selectSource:mt,deselectSource:pt,resetSources:gt,setDefinitionAsEncountered:vt,clearEncounteredDefinitions:yt}=se.actions;function ue(){return ae(t=>v(g({},t.quiz),{selectedSources:new Proxy(t.quiz.selectedSources,{get(r,n){return r[n]!==void 0?r[n]:!0}})}))}function bt(){const t=j();return(r,n=!0)=>t(r==="all"?gt():n?pt(r):mt(r))}function St(t){const r=ue(),n=P(),i=j(),a=t.filter(o=>(r.selectedSources[o.chapterId]||r.selectedSources.favourites&&n.includes(o.id))&&!r.definitionsAlreadyEncountered.includes(o.id));return k.exports.useEffect(()=>{a.length===0&&r.definitionsAlreadyEncountered.length>0&&i(yt())},[r.definitionsAlreadyEncountered]),()=>{const o=Math.floor(Math.random()*a.length),s=a[o];return s&&i(vt(s.id)),a[o]}}var xt=se.reducer;const de="HIST130-Quiz";function kt(){try{const t=localStorage.getItem(de);return t?JSON.parse(t):void 0}catch{return}}function Ct(t){try{const r=JSON.stringify(t);localStorage.setItem(de,r)}catch{}}const N=Ce({reducer:{favourites:ht,quiz:xt},preloadedState:kt()});N.subscribe(Ae(()=>{Ct(N.getState())},2e3));var At=Fe({palette:{primary:{main:we["900"],light:"#534bae",dark:"#000051"},secondary:{main:ze["500"],light:"#6ec6ff",dark:"#0069c0"}}});const he="/HIST130-Quiz/",Ft=Ie.create({baseURL:he,headers:{"Content-Type":"application/json",Accept:"application/json"}});async function z(t){return Ft.get(t).then(r=>r.data)}const fe=new Te({defaultOptions:{queries:{refetchOnWindowFocus:!1,refetchOnMount:!1}}});fe.prefetchQuery("chapters",()=>z("/chapters.json"));function wt(){return l(p,{children:[e(c,{variant:"h4",children:"About this website"}),e(c,{variant:"body1",marginBottom:4,children:"This website is an interactive app to help you memorise the definitions of HIST 130 at CSUSM."}),e(c,{variant:"h5",children:"Reference"}),l(c,{variant:"body1",marginBottom:2,children:["In the"," ",e(h,{color:"primary",component:f,to:"/",children:"Reference"})," ","tab, you can find the list of definitions, grouped by chapter."]}),e(c,{variant:"h5",children:"Favourites"}),l(c,{variant:"body1",marginBottom:2,children:["Go to the"," ",e(h,{color:"primary",to:"/",component:f,children:"Reference"})," ","page and click the"," ",e(Q,{color:"action",fontSize:"small",style:{verticalAlign:"text-top"}})," ","icon to add some definitions to your favourites. You can browse your favourites"," ",e(h,{color:"primary",to:"/favourites",component:f,children:"here"}),"."]}),e(c,{variant:"h5",children:"Quiz"}),l(c,{variant:"body1",marginBottom:2,children:["Test your memory in the"," ",e(h,{component:f,to:"/quiz",children:"Quiz"})," ","tab! Find a term, given its definition. You can narrow which chapters you want to train with."]}),e(c,{variant:"h5",children:"Feedback"}),l(c,{variant:"body1",marginBottom:4,children:["Is something wrong? A bug? A question? An idea? A request? Click the"," ",e(ee,{color:"action",fontSize:"small",style:{verticalAlign:"text-top"}})," ","icon in the top-right corner to get in touch!"]}),e(c,{variant:"h4",children:"Credits"}),l(c,{variant:"body1",marginBottom:4,children:["All the definitions were handwritten from the book"," ",e(h,{href:"https://www.macmillanlearning.com/college/us/product/The-American-Promise-Volume-1/p/1319208894",target:"_blank",children:"The American Promise (Roark et al., 2019)"}),". The rest of the"," ",e(h,{href:"https://github.com/Haltarys/HIST130-Quiz",target:"_blank",children:"code"})," ","was written by me,"," ",e(h,{href:"https://github.com/Haltarys",target:"_blank",children:"Haltarys"}),", under an"," ",e(h,{href:"https://mit-license.org/",target:"_blank",children:"MIT licence"}),"."]})]})}function M(t){return t===void 0?R("definitions",()=>z("/definitions.json")):R(["definitions",t],()=>z("/definitions.json").then(r=>r==null?void 0:r.filter(n=>n.chapterId===t)))}function W(){return R("chapters",()=>z("/chapters.json"))}function me(t){return[...Array(t).keys()]}function zt(){return e(u,{item:!0,xs:12,sm:6,md:4,lg:3,children:l($,{sx:{backgroundColor:De["100"]},children:[e(H,{title:e(y,{variant:"text",children:e(c,{variant:"h5",children:"Lorem ipsum dolor sit."})}),subheader:e(y,{variant:"text",children:e(c,{variant:"body1",children:"Lorem, ipsum dolor."})})}),e(O,{children:e(y,{variant:"text",children:e(c,{variant:"body2",color:"text.secondary",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sapiente soluta aliquid porro rem sunt molestiae neque, consectetur rerum harum atque molestias hic quidem cum."})})}),e(_,{children:e(y,{variant:"circular",width:59,height:59})})]})})}function It(){return l(p,{children:[e(y,{variant:"text",children:e(c,{variant:"h4",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})}),e(y,{variant:"text",children:e(c,{variant:"body1",children:"Lorem ipsum dolor sit."})})]})}function Tt({header:t}){return t===void 0?e(It,{}):typeof t=="string"?e(c,{variant:"h4",children:t}):e(p,{children:t})}function V({header:t,children:r}){return l(u,{container:!0,spacing:2,paddingBottom:3,children:[e(u,{item:!0,xs:12,children:e(Tt,{header:t})}),r]})}function I({numberOfPlaceholders:t=12}){return e(V,{header:void 0,children:me(t).map((r,n)=>e(zt,{},n))})}function b({children:t}){return e(w,{height:"100%",display:"grid",sx:{placeItems:"center"},children:l(c,{color:"error",component:"div",textAlign:"center",children:[e(Be,{color:"error",sx:{fontSize:96}}),e(c,{variant:"h4",color:"error",children:"An error occurred:"}),t||"Unknown error."]})})}function Dt(){return e(w,{height:"100%",display:"grid",textAlign:"center",sx:{placeItems:"center"},children:l(c,{color:"secondary",component:"div",padding:2,children:[e(Le,{color:"secondary",sx:{fontSize:96}}),e(c,{variant:"h4",color:"secondary",children:"Nothing favourites found."}),l(c,{variant:"body1",children:["Go to the"," ",e(h,{color:"secondary",to:"/",component:f,sx:{fontWeight:"bold"},children:"Reference"})," ","page and click the"," ",e(Q,{color:"action",fontSize:"small",style:{verticalAlign:"text-top"}})," ","icon to add some definitions to your favourites."]})]})})}function pe({definition:t,subheader:r,isFavourite:n,onBookmark:i}){return e(u,{item:!0,xs:12,sm:6,md:4,lg:3,display:"flex",children:l($,{elevation:2,sx:{display:"flex",flexDirection:"column",":hover":{boxShadow:8}},children:[e(H,{title:t.term,subheader:r}),e(O,{sx:{flexGrow:1},children:e(c,{variant:"body2",color:"text.secondary",children:t.text})}),e(_,{children:e(C,{title:n?"Remove from Favourites":"Add to Favourites",children:e(A,{size:"large",onClick:()=>i(t.id,n),color:n?"secondary":"default",children:n?e(te,{fontSize:"large"}):e(Q,{fontSize:"large"})})})})]})})}function Bt(){const{isLoading:t,error:r,data:n}=M(),{isLoading:i,error:a,data:o}=W(),s=P(),S=ce(),m=n==null?void 0:n.filter(d=>s.includes(d.id));return t||i?e(I,{}):r?e(b,{children:r.message}):a?e(b,{children:a.message}):!m||m.length===0?e(Dt,{}):e(V,{header:"Favourites",children:m.map(d=>{var G;const ge=(G=o==null?void 0:o.find(ve=>ve.id===d.chapterId))==null?void 0:G.title;return e(pe,{definition:d,subheader:`${ge} (page ${d.pageNumber})`,isFavourite:s.includes(d.id),onBookmark:S},d.id)})})}function Lt(){return l(b,{children:[e(c,{variant:"h6",children:"Page not found."}),l(c,{variant:"body1",children:["Go to"," ",e(h,{color:"error",to:"/",component:f,sx:{fontWeight:"bold"},children:"homepage"}),"."]})]})}function qt(){return e(u,{container:!0,height:"100%",alignItems:"center",justifyContent:"center",children:e(u,{item:!0,children:e(qe,{size:128})})})}function Rt(){return e(u,{container:!0,spacing:1,marginBottom:4,children:me(12).map(t=>e(u,{item:!0,children:e(y,{variant:"text",children:e(re,{label:"Chapter X"})})},t))})}function q({helpText:t,icon:r,label:n,checked:i,handleToggle:a}){return e(C,{title:t,children:e(re,{icon:r,label:n,color:"primary",variant:i?"filled":"outlined",onClick:()=>a()})})}function Et(){const{isLoading:t,error:r,data:n}=W(),{selectedSources:i}=ue(),a=bt();return t?e(Rt,{}):r?e(b,{children:r.message}):l(u,{container:!0,spacing:1,marginBottom:4,children:[e(u,{item:!0,children:e(q,{helpText:"Select all sources",label:"All",checked:Object.values(i).every(o=>o===!0),handleToggle:()=>a("all")})}),e(u,{item:!0,children:e(J,{orientation:"vertical"})}),n==null?void 0:n.map(o=>e(u,{item:!0,children:e(q,{helpText:`Include definitions from ${o.title}: ${o.subtitle}`,label:o.title,checked:i[o.id],handleToggle:()=>a(o.id,i[o.id])})},o.id)),e(u,{item:!0,children:e(J,{orientation:"vertical"})}),e(u,{item:!0,children:e(q,{helpText:"Include definitions from your favourited definitions",icon:e(te,{}),label:"Favourites",checked:i.favourites,handleToggle:()=>a("favourites",i.favourites)})})]})}function Nt({definition:t,handleClick:r}){return l(p,{children:[e(c,{variant:"h6",gutterBottom:!0,children:"Definition"}),t?e(c,{variant:"body1",marginBottom:4,height:"128px",children:t.text}):e(c,{variant:"body1",component:"div",marginBottom:4,height:"128px",display:"grid",sx:{placeItems:"center",textAlign:"center"},children:l("div",{children:[e(c,{fontWeight:"bold",children:"Nothing to show here!"}),l(c,{children:["Select some sources from above and click the"," ",e(h,{variant:"body1",component:"button",color:"primary",onClick:r,children:"New random definition"})," ","button below."]})]})})]})}function Qt({handleClick:t}){return l(_,{children:[e(E,{variant:"outlined",fullWidth:!0,onClick:t,children:"New random definition"}),e(E,{type:"submit",variant:"contained",fullWidth:!0,children:"Submit"})]})}function $t({control:t,handleRevealSolution:r,definitionRegex:n}){return e(T,{control:t,name:"keywordAttempt",defaultValue:"",rules:{required:!0,pattern:n},render:s=>{var S=s,{field:m}=S,d=m,{ref:i}=d,a=K(d,["ref"]),{fieldState:{invalid:o}}=S;return e(D,v(g({},a),{inputRef:i,variant:"outlined",fullWidth:!0,autoFocus:!0,sx:{marginBottom:4},placeholder:"Type in the term that you think matches the above definition.",error:o,helperText:o&&"Incorrect keyword",InputProps:{startAdornment:e(ne,{position:"start",children:e(C,{title:"Click to reveal the solution",children:e(A,{onClick:r,children:e(Re,{color:"primary"})})})})}}))}})}function Ht({definitions:t}){const r=St(t),[n,i]=k.exports.useState(),a=()=>i(r()),{control:o,handleSubmit:s,reset:S,setFocus:m,setValue:d}=ie({reValidateMode:"onSubmit",shouldUnregister:!0});return k.exports.useEffect(()=>{a()},[]),l("form",{onSubmit:s(()=>{a(),S()}),children:[e(Nt,{definition:n,handleClick:a}),e($t,{control:o,definitionRegex:/batman/,handleRevealSolution:()=>{n&&d("keywordAttempt",n.term),m("keywordAttempt")}}),e(Qt,{handleClick:a})]})}function Ot(){const{isLoading:t,error:r,data:n}=M();return t?e(qt,{}):r?e(b,{children:r.message}):e(u,{container:!0,height:"100%",alignItems:"center",justifyContent:"center",children:e(u,{item:!0,lg:8,children:l($,{children:[e(H,{title:"Quiz"}),l(O,{children:[e(c,{variant:"h6",gutterBottom:!0,children:"Select sources for the pool of definitions to draw from."}),e(Et,{}),n!==void 0&&e(Ht,{definitions:n})]})]})})})}function _t({chapter:t}){return l(p,{children:[l(c,{variant:"h4",children:[t.title,": ",t.subtitle]}),l(c,{variant:"body1",children:[t.period," (page ",t.pageNumber,")"]})]})}function jt({chapter:t}){const{isLoading:r,error:n,data:i}=M(t.id),a=P(),o=ce();return r?e(I,{}):n?e(b,{children:n.message}):e(V,{header:e(_t,{chapter:t}),children:i==null?void 0:i.map(s=>e(pe,{definition:s,subheader:`${t.title} (page ${s.pageNumber})`,isFavourite:a.includes(s.id),onBookmark:o},s.id))})}function Pt(){return l(p,{children:[e(I,{}),e(I,{})]})}function Mt(){const{isLoading:t,error:r,data:n}=W();return t?e(Pt,{}):r?e(b,{children:r.message}):e(p,{children:n==null?void 0:n.map(i=>e(jt,{chapter:i},i.id))})}function Wt(){return e(Ee,{maxWidth:"xl",component:"main",sx:{height:"100%",paddingY:3},children:l(Ne,{children:[e(x,{path:"*",element:e(Lt,{})}),e(x,{path:"/",element:e(Mt,{})}),e(x,{path:"/favourites",element:e(Bt,{})}),e(x,{path:"/favorites",element:e(Qe,{to:"/favourites",replace:!0})}),e(x,{path:"/quiz",element:e(Ot,{})}),e(x,{path:"/about",element:e(wt,{})})]})})}function Vt({handleClick:t}){return e(C,{title:"Send Feedback",children:e(A,{size:"large",color:"inherit",onClick:t,children:e(ee,{})})})}const Gt="default_service",Zt="ZIKOORmHl6Yks5NsS",Ut="HIST130-Quiz";oe.init(Zt);async function Yt(t){return oe.send(Gt,Ut,t).then(()=>({success:!0,message:"Feedback sent."})).catch(r=>({success:!1,message:r.text}))}function Kt({handleClose:t}){return e(E,{variant:"outlined",onClick:t,children:"Cancel"})}function Jt({loading:t}){return e($e,{type:"submit",variant:"contained",startIcon:e(He,{}),loading:t,loadingPosition:"start",children:"Send"})}function Xt({control:t}){return e(T,{control:t,name:"object",defaultValue:"",rules:{required:!0},render:({field:r,fieldState:{invalid:n}})=>l(D,v(g({},r),{variant:"outlined",label:"Object",select:!0,required:!0,placeholder:"Select a type of feedback",error:n,helperText:n&&"Please select a type of feedback",fullWidth:!0,margin:"normal",children:[e(B,{value:"feature",children:"Feature request"}),e(B,{value:"bug",children:"Bug report"}),e(B,{value:"other",children:"Other"})]}))})}const er=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function tr({control:t}){return e(T,{control:t,name:"email",defaultValue:"",rules:{required:!1,pattern:er},render:({field:r,fieldState:{invalid:n}})=>e(D,v(g({},r),{variant:"outlined",label:"Email address (optional)",type:"email",placeholder:"Only required if you want me to reach back.",error:n,helperText:n&&"Invalid email address",fullWidth:!0,margin:"normal",InputProps:{startAdornment:e(ne,{position:"start",children:e(Oe,{})})}}))})}function rr({control:t}){return e(T,{control:t,name:"message",defaultValue:"",rules:{required:!0},render:({field:r,fieldState:{invalid:n}})=>e(D,v(g({},r),{variant:"outlined",label:"Your message",type:"text",required:!0,error:n,helperText:n&&"Let me know your thoughts.",multiline:!0,rows:8,fullWidth:!0,margin:"normal"}))})}function nr(t){return e(Pe,v(g({},t),{direction:"left"}))}function ir({feedback:{success:t,message:r},clearFeedback:n}){const i=(a,o)=>{o!=="clickaway"&&n()};return e(_e,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:!0,message:r,autoHideDuration:6e3,TransitionComponent:nr,onClose:i,children:e(je,{variant:"filled",severity:t?"success":"error",sx:{width:"100%"},onClose:i,children:r})})}function or({open:t,handleClose:r}){const[n,i]=k.exports.useState(!1),[a,o]=k.exports.useState(void 0),{control:s,handleSubmit:S,reset:m}=ie({mode:"onBlur",reValidateMode:"onBlur",shouldUnregister:!0});return l(p,{children:[e(Me,{open:t,onClose:r,disableEscapeKeyDown:n,onBackdropClick:()=>{n||r()},children:l("form",{onSubmit:S(async d=>{i(!0),o(await Yt(d)),r(),i(!1),m()}),children:[e(We,{children:"Send feedback"}),l(Ve,{children:[e(Xt,{control:s}),e(tr,{control:s}),e(rr,{control:s})]}),l(Ge,{children:[e(Kt,{handleClose:r}),e(Jt,{loading:n})]})]})}),a&&e(ir,{feedback:a,clearFeedback:()=>o(void 0)})]})}function ar(){const[t,r]=k.exports.useState(!1);return l(p,{children:[e(Vt,{handleClick:()=>r(!0)}),e(or,{open:t,handleClose:()=>r(!1)})]})}function lr(){return e(C,{title:"About this website",children:e(A,{size:"large",color:"inherit",component:f,to:"/about",children:e(Ze,{})})})}function cr(){return e(c,{variant:"subtitle1",component:"h2",sx:{flexGrow:1},children:"Made with \u2764\uFE0F by Haltarys!"})}function sr(){const t=Ue(),r=["/","/favourites","/quiz"].includes(t.pathname)?t.pathname:!1;return l(Ye,{value:r,indicatorColor:"secondary",variant:"fullWidth",textColor:"inherit",component:"nav",children:[e(L,{value:"/",label:"Reference",component:f,to:"/"}),e(L,{value:"/favourites",label:"Favourites",component:f,to:"/favourites"}),e(L,{value:"/quiz",label:"Quiz",component:f,to:"/quiz"})]})}function ur(){return e(c,{variant:"h6",sx:{flexGrow:1},component:"h1",children:e(h,{color:"inherit",underline:"none",component:f,to:"/",children:"HIST 130 Quiz"})})}function dr(){return e(C,{title:"View the source code on Github!",children:e(A,{size:"large",color:"inherit",href:"https://github.com/Haltarys/HIST130-Quiz",target:"_blank",rel:"norefferer noopener",children:e(Ke,{})})})}function hr(){return l(Je,{position:"sticky",children:[l(Xe,{children:[e(ur,{}),e(cr,{}),e(ar,{}),e(lr,{}),e(dr,{})]}),e(sr,{})]})}function fr(){return l(w,{display:"flex",flexDirection:"column",height:"100%",children:[e(hr,{}),e(w,{display:"flex",height:"100%",flex:1,sx:{overflowY:"auto",flexFlow:"column"},children:e(Wt,{})}),e(et.exports.ReactQueryDevtools,{})]})}tt.render(e(rt.StrictMode,{children:e(nt,{basename:he,children:e(it,{children:e(ot,{theme:At,children:e(at,{client:fe,children:e(lt,{store:N,children:e(fr,{})})})})})})}),document.getElementById("root"));