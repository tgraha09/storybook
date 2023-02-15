var R=Object.defineProperty,S=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var A=(a,r,n)=>r in a?R(a,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[r]=n,c=(a,r)=>{for(var n in r||(r={}))w.call(r,n)&&A(a,n,r[n]);if(b)for(var n of b(r))P.call(r,n)&&A(a,n,r[n]);return a},g=(a,r)=>S(a,G(r));var f=(a,r)=>{var n={};for(var i in a)w.call(a,i)&&r.indexOf(i)<0&&(n[i]=a[i]);if(a!=null&&b)for(var i of b(a))r.indexOf(i)<0&&P.call(a,i)&&(n[i]=a[i]);return n};import{j,P as o,L as d,r as T,B,R as h,S as I,a as D,b as L}from"./vendor.7a7301b4.js";const M=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}};M();const e=j.exports.jsx,t=j.exports.jsxs,v=j.exports.Fragment;let W={};const k=n=>{var i=n,{backgroundColor:a}=i,r=f(i,["backgroundColor"]);return e("main",g(c({className:"tkg-display",style:a&&{backgroundColor:a}},r),{children:e("section",{className:"tkg-display-inner",children:r.children})}))};k.css=W;k.propTypes={backgroundColor:o.string,content:o.string.isRequired};k.defaultProps={backgroundColor:"rgb(25, 25, 51)",content:"Display"};const x=l=>{var s=l,{primary:a,backgroundColor:r,size:n}=s,i=f(s,["primary","backgroundColor","size"]);const p=a?"storybook-button--primary":"storybook-button--secondary";return e("button",g(c({type:"button",className:["tkg-button",`tkg-button--${n}`,p].join(" "),style:r&&{backgroundColor:r}},i),{children:i.children}))};x.propTypes={primary:o.bool,backgroundColor:o.string,size:o.oneOf(["small","medium","large"]),label:o.string.isRequired,onClick:o.func};x.defaultProps={backgroundColor:null,primary:!1,size:"medium",label:"TKG-Button",onClick:void 0};var F="/assets/resume.18be43d4.pdf";const O=()=>{console.log("sendMail");const a="tfire09@gmail.com";let r=document.body.querySelector("#name").value,n=document.body.querySelector("#subject").value,i=document.body.querySelector("#message").value,l="mailto:"+r+`<${a}>?subject=`+encodeURIComponent(n)+"&body="+encodeURIComponent(i);window.open(l)},q=()=>t("div",{className:"panel",id:"about",children:[e(d,{className:"tkg-button",id:"link-back",to:"/about",children:e("h2",{children:"Back"})}),t("div",{className:"emailForm",children:[t("form",{encType:"text/plain",id:"emailme",children:[e("input",{type:"text",className:"mail",placeholder:"Name",id:"name"}),e("input",{type:"text",className:"mail",placeholder:"Subject",id:"subject"}),e("textarea",{type:"text",className:"mail",placeholder:"Message",id:"message"})]}),e("div",{id:"submitWrap",children:e(x,{id:"submit",onClick:O,className:"tkg-button",children:e("h2",{children:"Submit"})})})]})]}),C=()=>(console.log("ABOUT"),t("div",{className:"panel",id:"about",children:[t("p",{id:"bio",className:"plainText",children:["Hello!",e("br",{})," ",e("br",{}),"My name is Taurian Graham and I have a Computer Programming background in Game Design & Development from Rochester Institute of Technology. Currently I am a Tech Architecture Delivery Analyst with experience in software development, web applications, and project management. I hope to work with diverse teams for creative projects in the technical industry that are inline with my core studies."]}),t("div",{className:"contact-wrap",children:[e("a",{className:"tkg-button",id:"link-resume",href:F,target:"_blank",children:e("h2",{children:"Resume"})}),e("a",{className:"tkg-button",id:"link-resume",href:"https://www.linkedin.com/in/taurian-graham-b9a6111bb/",children:e("h2",{children:"LinkedIn"})}),e(d,{className:"tkg-button",id:"link-email",to:"/about/email",children:e("h2",{children:"Email"})})]})]}));const U=()=>t("div",{className:"panel",id:"projects",children:[t("div",{className:"project-item",children:[e("a",{href:"https://github.com/tgraha09/Dungeon-Rogues",className:"toproject",children:e("h3",{children:"Dungeon Rogues"})}),t("ul",{id:"details",children:[e("li",{className:"detail-item",children:e("h4",{children:"Genre: 2.5D, Platformer, Rogue-like"})}),e("li",{className:"detail-item",children:e("h4",{children:"Platform: PC"})}),t("li",{className:"detail-item",children:[e("h5",{id:"desc",children:"Play as a dungeon excavator, battling various monsters throughout multiple floors of a mideval style dungeon. This is a 2.5D rogue like platformer dungeon looter where the player can find new items throughout each dungeons."}),e("br",{})]})]})]}),t("div",{className:"project-item",children:[e("a",{href:"https://github.com/tgraha09/PerlinSimulator",className:"toproject",children:e("h3",{children:"Perlin Simulator"})}),t("ul",{id:"details",children:[e("li",{className:"detail-item",children:e("h4",{children:"Frameworks: React, ViteJS"})}),e("li",{className:"detail-item",children:e("h4",{children:"Platform: Browser"})}),e("li",{className:"detail-item",children:t("h5",{id:"desc",children:[" Developing a simulator for testing Perlin noise in level design by manipulating terrain data. ",e("br",{}),"This is to help illustrate different algorithms that could be used for terrain building. "]})})]})]})]});const z={GalaxyInvaders:()=>t(v,{children:[e(d,{className:"tkg-button",id:"link-back",to:"/webapps",children:e("h2",{children:"Back"})}),e("iframe",{className:"galaxy-invaders",src:"../src/projects/sprint4/index.html"})]}),RecipeFinder:()=>t(v,{children:[e(d,{className:"tkg-button",id:"link-back",to:"/webapps",children:e("h2",{children:"Back"})}),e("iframe",{className:"recipe-finder",src:""})]})},E=()=>e("div",{className:"panel",id:"webapps",children:t("div",{id:"app-list",children:[t("div",{className:"app-item",children:[e("a",{className:"tkg-button",id:"web-app",href:"https://autonomous-agents.pages.dev/",children:e("p",{children:"Autonomous Agents"})}),e("p",{children:"Web App"})]}),t("div",{className:"app-item",children:[e("a",{className:"tkg-button",id:"web-app",href:"https://tkg3369-project2.herokuapp.com/",children:e("p",{children:"Recipe Finder"})}),e("p",{children:"Web Service"})]}),t("div",{className:"app-item",children:[e("a",{className:"tkg-button",id:"web-app",href:"https://paper-analyzer.pages.dev/",children:e("p",{children:"Paper Analyzer"})}),e("p",{children:"Web Service"})]})]})});const _=()=>e("div",{className:"panel",id:"github",children:t("div",{id:"git-list",children:[e("div",{className:"git-item",children:e("a",{className:"tkg-button",id:"git",href:"https://github.com/tgraha09/Personal-Projects",children:e("p",{children:"Personal Git"})})}),e("div",{className:"git-item",children:e("a",{className:"tkg-button",id:"git",href:"https://github.com/tgraha09/School-Projects",children:e("p",{children:"School Git"})})})]})});const u=n=>{var i=n,{backgroundColor:a}=i,r=f(i,["backgroundColor"]);return e("div",g(c({className:"tkg-card-up",style:a&&{backgroundColor:a}},r),{children:r.children}))};u.propTypes={onClick:o.func};u.defaultProps={backgroundColor:null,children:"",onClick:void 0};var $="/assets/profile.640acbc3.jpg";const H=()=>t("div",{className:"avatar",children:[e("img",{src:$,id:"profile",alt:"avatar"}),e("h2",{className:"taurian",children:"Taurian Graham"})]}),y="rgb(56, 56, 56)",N={About:{backgroundColor:y,children:e(d,{className:"tkg-button",id:"link",to:"/about",children:e("h2",{children:"About"})})},Projects:{backgroundColor:y,children:e(d,{className:"tkg-button",id:"link",to:"/projects",children:e("h2",{children:"Projects"})})},WebApps:{backgroundColor:y,children:e(d,{className:"tkg-button",id:"link",to:"/webapps",children:e("h2",{children:"WebApps"})})},Github:{backgroundColor:y,children:e(d,{className:"tkg-button",id:"link",to:"/github",children:e("h2",{children:"Github"})})}};let K=()=>z.GalaxyInvaders();const m=()=>t(v,{children:[e(H,{}),t("nav",{children:[e(u,c({},N.About)),e(u,c({},N.Projects)),e(u,c({},N.WebApps)),e(u,c({},N.Github))]})]});class J extends T.exports.Component{constructor(){super();console.log("Constr"),this.state={name:"React",isUserAuthenticated:!0}}render(){return e(v,{children:e(V,{})})}}function V(){return e(k,{children:t(B,{children:[t(h,{exact:!0,path:"/",children:[e(m,{}),e(C,{})]}),t(I,{children:[t(h,{exact:!0,path:"/about",children:[e(m,{}),e(C,{})]}),t(h,{exact:!0,path:"/about/email",children:[e(m,{}),e(q,{})]}),t(h,{exact:!0,path:"/projects",children:[e(m,{}),e(U,{})]}),t(h,{exact:!0,path:"/webapps",children:[e(m,{}),e(E,{})]}),e(h,{exact:!0,path:"/webapps/galaxy-invaders",children:e(K,{})}),t(h,{exact:!0,path:"/github",children:[e(m,{}),e(_,{})]})]})]})})}D.render(e(L.StrictMode,{children:e(J,{})}),document.getElementById("root"));