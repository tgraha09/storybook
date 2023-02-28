var R=Object.defineProperty,S=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var A=(a,t,n)=>t in a?R(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,c=(a,t)=>{for(var n in t||(t={}))w.call(t,n)&&A(a,n,t[n]);if(b)for(var n of b(t))P.call(t,n)&&A(a,n,t[n]);return a},g=(a,t)=>S(a,G(t));var v=(a,t)=>{var n={};for(var i in a)w.call(a,i)&&t.indexOf(i)<0&&(n[i]=a[i]);if(a!=null&&b)for(var i of b(a))t.indexOf(i)<0&&P.call(a,i)&&(n[i]=a[i]);return n};import{j as x,P as o,L as d,r as I,B as T,R as h,S as B,a as D,b as M}from"./vendor.7a7301b4.js";const O=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}};O();const e=x.exports.jsx,r=x.exports.jsxs,f=x.exports.Fragment;let L={};const k=n=>{var i=n,{backgroundColor:a}=i,t=v(i,["backgroundColor"]);return e("main",g(c({className:"tkg-display",style:a&&{backgroundColor:a}},t),{children:e("section",{className:"tkg-display-inner",children:t.children})}))};k.css=L;k.propTypes={backgroundColor:o.string,content:o.string.isRequired};k.defaultProps={backgroundColor:"rgb(25, 25, 51)",content:"Display"};const j=l=>{var s=l,{primary:a,backgroundColor:t,size:n}=s,i=v(s,["primary","backgroundColor","size"]);const p=a?"storybook-button--primary":"storybook-button--secondary";return e("button",g(c({type:"button",className:["tkg-button",`tkg-button--${n}`,p].join(" "),style:t&&{backgroundColor:t}},i),{children:i.children}))};j.propTypes={primary:o.bool,backgroundColor:o.string,size:o.oneOf(["small","medium","large"]),label:o.string.isRequired,onClick:o.func};j.defaultProps={backgroundColor:null,primary:!1,size:"medium",label:"TKG-Button",onClick:void 0};var W="/assets/resume.00e9a317.pdf";const E=()=>{console.log("sendMail");const a="tfire09@gmail.com";let t=document.body.querySelector("#name").value,n=document.body.querySelector("#subject").value,i=document.body.querySelector("#message").value,l="mailto:"+t+`<${a}>?subject=`+encodeURIComponent(n)+"&body="+encodeURIComponent(i);window.open(l)},q=()=>r("div",{className:"panel",id:"about",children:[e(d,{className:"tkg-button",id:"link-back",to:"/about",children:e("h2",{children:"Back"})}),r("div",{className:"emailForm",children:[r("form",{encType:"text/plain",id:"emailme",children:[e("input",{type:"text",className:"mail",placeholder:"Name",id:"name"}),e("input",{type:"text",className:"mail",placeholder:"Subject",id:"subject"}),e("textarea",{type:"text",className:"mail",placeholder:"Message",id:"message"})]}),e("div",{id:"submitWrap",children:e(j,{id:"submit",onClick:E,className:"tkg-button",children:e("h2",{children:"Submit"})})})]})]}),C=()=>(console.log("ABOUT"),r("div",{className:"panel",id:"about",children:[r("p",{id:"bio",className:"plainText",children:["Hello!",e("br",{})," ",e("br",{}),"My name is Taurian Graham and I have a Computer Programming background in Game Design & Development from Rochester Institute of Technology. Currently I am a Tech Architecture Delivery Analyst with experience in software development, web applications, and project management. I hope to work with diverse teams for creative projects in the technical industry that are inline with my core studies."]}),r("div",{className:"contact-wrap",children:[e("a",{className:"tkg-button",id:"link-resume",href:W,target:"_blank",children:e("h2",{children:"Resume"})}),e("a",{className:"tkg-button",id:"link-resume",href:"https://www.linkedin.com/in/taurian-graham-b9a6111bb/",children:e("h2",{children:"LinkedIn"})}),e(d,{className:"tkg-button",id:"link-email",to:"/about/email",children:e("h2",{children:"Email"})})]})]}));const F=()=>r("div",{className:"panel",id:"projects",children:[r("div",{className:"project-item",children:[e("a",{href:"https://github.com/tgraha09/Dungeon-Rogues",className:"toproject",children:e("h3",{children:"Dungeon Rogues"})}),r("ul",{id:"details",children:[e("li",{className:"detail-item",children:e("h4",{children:"Genre: 2.5D, Platformer, Rogue-like"})}),e("li",{className:"detail-item",children:e("h4",{children:"Platform: PC"})}),r("li",{className:"detail-item",children:[e("h5",{id:"desc",children:"Play as a dungeon excavator, battling various monsters throughout multiple floors of a mideval style dungeon. This is a 2.5D rogue like platformer dungeon looter where the player can find new items throughout each dungeons."}),e("br",{})]})]})]}),r("div",{className:"project-item",children:[e("a",{href:"https://github.com/tgraha09/next-express",className:"toproject",children:e("h3",{children:"Ecommerce Shop"})}),r("ul",{id:"details",children:[e("li",{className:"detail-item",children:e("h4",{children:"Frameworks: React, SanityIO, MongoDB, Stripe"})}),e("li",{className:"detail-item",children:e("h4",{children:"Platform: Browser"})}),e("li",{className:"detail-item",children:e("h5",{id:"desc",children:"  Developing a restful ecommerce shop in ReactJS. This microservice is M.E.R.N. based and uses SanityIO & Stripe for product schemas and payment processing."})})]})]})]});const U={GalaxyInvaders:()=>r(f,{children:[e(d,{className:"tkg-button",id:"link-back",to:"/webapps",children:e("h2",{children:"Back"})}),e("iframe",{className:"galaxy-invaders",src:"../src/projects/sprint4/index.html"})]}),RecipeFinder:()=>r(f,{children:[e(d,{className:"tkg-button",id:"link-back",to:"/webapps",children:e("h2",{children:"Back"})}),e("iframe",{className:"recipe-finder",src:""})]})},z=()=>e("div",{className:"panel",id:"webapps",children:r("div",{id:"app-list",children:[r("div",{className:"app-item",children:[e("a",{className:"tkg-button",id:"web-app",href:"https://autonomous-agents.pages.dev/",children:e("p",{children:"Autonomous Agents"})}),e("p",{children:"Web App"})]}),r("div",{className:"app-item",children:[e("a",{className:"tkg-button",id:"web-app",href:"https://tgramz-express.herokuapp.com/",children:e("p",{children:"Ecommerce Shop"})}),e("p",{children:"Web Service"})]}),r("div",{className:"app-item",children:[e("a",{className:"tkg-button",id:"web-app",href:"https://paper-analyzer.pages.dev/",children:e("p",{children:"Paper Analyzer"})}),e("p",{children:"Web Service"})]})]})});const _=()=>e("div",{className:"panel",id:"github",children:r("div",{id:"git-list",children:[e("div",{className:"git-item",children:e("a",{className:"tkg-button",id:"git",href:"https://github.com/tgraha09/Personal-Projects",children:e("p",{children:"Personal Git"})})}),e("div",{className:"git-item",children:e("a",{className:"tkg-button",id:"git",href:"https://github.com/tgraha09/School-Projects",children:e("p",{children:"School Git"})})})]})});const u=n=>{var i=n,{backgroundColor:a}=i,t=v(i,["backgroundColor"]);return e("div",g(c({className:"tkg-card-up",style:a&&{backgroundColor:a}},t),{children:t.children}))};u.propTypes={onClick:o.func};u.defaultProps={backgroundColor:null,children:"",onClick:void 0};var $="/assets/profile.640acbc3.jpg";const H=()=>r("div",{className:"avatar",children:[e("img",{src:$,id:"profile",alt:"avatar"}),e("h2",{className:"taurian",children:"Taurian Graham"})]}),y="rgb(56, 56, 56)",N={About:{backgroundColor:y,children:e(d,{className:"tkg-button",id:"link",to:"/about",children:e("h2",{children:"About"})})},Projects:{backgroundColor:y,children:e(d,{className:"tkg-button",id:"link",to:"/projects",children:e("h2",{children:"Projects"})})},WebApps:{backgroundColor:y,children:e(d,{className:"tkg-button",id:"link",to:"/webapps",children:e("h2",{children:"WebApps"})})},Github:{backgroundColor:y,children:e(d,{className:"tkg-button",id:"link",to:"/github",children:e("h2",{children:"Github"})})}};let K=()=>U.GalaxyInvaders();const m=()=>r(f,{children:[e(H,{}),r("nav",{children:[e(u,c({},N.About)),e(u,c({},N.Projects)),e(u,c({},N.WebApps)),e(u,c({},N.Github))]})]});class J extends I.exports.Component{constructor(){super();console.log("Constr"),this.state={name:"React",isUserAuthenticated:!0}}render(){return e(f,{children:e(Q,{})})}}function Q(){return e(k,{children:r(T,{children:[r(h,{exact:!0,path:"/",children:[e(m,{}),e(C,{})]}),r(B,{children:[r(h,{exact:!0,path:"/about",children:[e(m,{}),e(C,{})]}),r(h,{exact:!0,path:"/about/email",children:[e(m,{}),e(q,{})]}),r(h,{exact:!0,path:"/projects",children:[e(m,{}),e(F,{})]}),r(h,{exact:!0,path:"/webapps",children:[e(m,{}),e(z,{})]}),e(h,{exact:!0,path:"/webapps/galaxy-invaders",children:e(K,{})}),r(h,{exact:!0,path:"/github",children:[e(m,{}),e(_,{})]})]})]})})}D.render(e(M.StrictMode,{children:e(J,{})}),document.getElementById("root"));
