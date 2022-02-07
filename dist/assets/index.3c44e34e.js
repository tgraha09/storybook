var R=Object.defineProperty,S=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var A=(r,i,n)=>i in r?R(r,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[i]=n,c=(r,i)=>{for(var n in i||(i={}))P.call(i,n)&&A(r,n,i[n]);if(b)for(var n of b(i))w.call(i,n)&&A(r,n,i[n]);return r},g=(r,i)=>S(r,q(i));var f=(r,i)=>{var n={};for(var a in r)P.call(r,a)&&i.indexOf(a)<0&&(n[a]=r[a]);if(r!=null&&b)for(var a of b(r))i.indexOf(a)<0&&w.call(r,a)&&(n[a]=r[a]);return n};import{j,P as o,L as d,r as B,B as G,R as u,S as T,a as I,b as L}from"./vendor.fe5fc53e.js";const D=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}};D();const e=j.exports.jsx,t=j.exports.jsxs,k=j.exports.Fragment;let M={};const v=n=>{var a=n,{backgroundColor:r}=a,i=f(a,["backgroundColor"]);return e("main",g(c({className:"tkg-display",style:r&&{backgroundColor:r}},i),{children:e("section",{className:"tkg-display-inner",children:i.children})}))};v.css=M;v.propTypes={backgroundColor:o.string,content:o.string.isRequired};v.defaultProps={backgroundColor:"rgb(25, 25, 51)",content:"Display"};const x=l=>{var s=l,{primary:r,backgroundColor:i,size:n}=s,a=f(s,["primary","backgroundColor","size"]);const p=r?"storybook-button--primary":"storybook-button--secondary";return e("button",g(c({type:"button",className:["tkg-button",`tkg-button--${n}`,p].join(" "),style:i&&{backgroundColor:i}},a),{children:a.children}))};x.propTypes={primary:o.bool,backgroundColor:o.string,size:o.oneOf(["small","medium","large"]),label:o.string.isRequired,onClick:o.func};x.defaultProps={backgroundColor:null,primary:!1,size:"medium",label:"TKG-Button",onClick:void 0};const W=()=>{console.log("sendMail");const r="tfire09@gmail.com";let i=document.body.querySelector("#name").value,n=document.body.querySelector("#subject").value,a=document.body.querySelector("#message").value,l="mailto:"+i+`<${r}>?subject=`+encodeURIComponent(n)+"&body="+encodeURIComponent(a);window.open(l)},F=()=>t("div",{className:"panel",id:"about",children:[e(d,{className:"tkg-button",id:"link-back",to:"/about",children:e("h2",{children:"Back"})}),t("div",{className:"emailForm",children:[t("form",{encType:"text/plain",id:"emailme",children:[e("input",{type:"text",className:"mail",placeholder:"Name",id:"name"}),e("input",{type:"text",className:"mail",placeholder:"Subject",id:"subject"}),e("textarea",{type:"text",className:"mail",placeholder:"Message",id:"message"})]}),e("div",{id:"submitWrap",children:e(x,{id:"submit",onClick:W,className:"tkg-button",children:e("h2",{children:"Submit"})})})]})]}),C=()=>(console.log("ABOUT"),t("div",{className:"panel",id:"about",children:[t("p",{id:"bio",className:"plainText",children:["Hello!",e("br",{})," ",e("br",{}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi quae vitae soluta assumenda, amet voluptates deleniti blanditiis repellendus id quo, iste qui. Minima aliquam, debitis modi reiciendis esse quisquam."]}),t("div",{className:"contact-wrap",children:[e("a",{className:"tkg-button",id:"link-resume",href:"../src/media/resume.pdf",children:e("h2",{children:"Resume"})}),e("a",{className:"tkg-button",id:"link-resume",href:"https://www.linkedin.com/in/taurian-graham-b9a6111bb/",children:e("h2",{children:"LinkedIn"})}),e(d,{className:"tkg-button",id:"link-email",to:"/about/email",children:e("h2",{children:"Email"})})]})]}));const O=()=>t("div",{className:"panel",id:"projects",children:[t("div",{className:"project-item",children:[e("a",{href:"https://github.com/tgraha09/Dungeon-Rogues",className:"toproject",children:e("h3",{children:"Dungeon Rogues"})}),t("ul",{id:"details",children:[e("li",{className:"detail-item",children:e("h4",{children:"Genre: 2.5D, Platformer, Rogue-like"})}),e("li",{className:"detail-item",children:e("h4",{children:"Platform: PC"})}),t("li",{className:"detail-item",children:[e("h5",{id:"desc",children:"Play as a dungeon excavator, battling various monsters throughout multiple floors of a mideval style dungeon. This is a 2.5D rogue like platformer dungeon looter where the player can find new items throughout each dungeons."}),e("br",{})]})]})]}),t("div",{className:"project-item",children:[e("a",{href:"https://github.com/tgraha09/PerlinSimulator",className:"toproject",children:e("h3",{children:"Perlin Simulator"})}),t("ul",{id:"details",children:[e("li",{className:"detail-item",children:e("h4",{children:"Frameworks: React, ViteJS"})}),e("li",{className:"detail-item",children:e("h4",{children:"Platform: Browser"})}),e("li",{className:"detail-item",children:t("h5",{id:"desc",children:[" Developing a simulator for testing Perlin noise in level design by manipulating terrain data. ",e("br",{}),"This is to help illustrate different algorithms that could be used for terrain building. "]})})]})]})]});const U={GalaxyInvaders:()=>t(k,{children:[e(d,{className:"tkg-button",id:"link-back",to:"/webapps",children:e("h2",{children:"Back"})}),e("iframe",{className:"galaxy-invaders",src:"../src/projects/sprint4/index.html"})]}),RecipeFinder:()=>t(k,{children:[e(d,{className:"tkg-button",id:"link-back",to:"/webapps",children:e("h2",{children:"Back"})}),e("iframe",{className:"recipe-finder",src:""})]})},E=()=>e("div",{className:"panel",id:"webapps",children:t("div",{id:"app-list",children:[t("div",{className:"app-item",children:[e("a",{className:"tkg-button",id:"web-app",href:"../projects/autonomous/",children:e("p",{children:"Autonomous Agents"})}),e("p",{children:"Web App"})]}),t("div",{className:"app-item",children:[e("a",{className:"tkg-button",id:"web-app",href:"https://tkg3369-project2.herokuapp.com/",children:e("p",{children:"Recipe Finder"})}),e("p",{children:"Web Service"})]}),t("div",{className:"app-item",children:[e("a",{className:"tkg-button",id:"web-app",href:"../projects/project2/",children:e("p",{children:"Paper Analyzer"})}),e("p",{children:"Web Service"})]})]})});const z=()=>e("div",{className:"panel",id:"github",children:t("div",{id:"git-list",children:[e("div",{className:"git-item",children:e("a",{className:"tkg-button",id:"git",href:"https://github.com/tgraha09/Personal-Projects",children:e("p",{children:"Personal Git"})})}),e("div",{className:"git-item",children:e("a",{className:"tkg-button",id:"git",href:"https://github.com/tgraha09/School-Projects",children:e("p",{children:"School Git"})})})]})});const h=n=>{var a=n,{backgroundColor:r}=a,i=f(a,["backgroundColor"]);return e("div",g(c({className:"tkg-card-up",style:r&&{backgroundColor:r}},i),{children:i.children}))};h.propTypes={onClick:o.func};h.defaultProps={backgroundColor:null,children:"",onClick:void 0};var $="/assets/profile.640acbc3.jpg";const H=()=>t("div",{className:"avatar",children:[e("img",{src:$,id:"profile",alt:"avatar"}),e("h2",{className:"taurian"})]}),N="rgb(56, 56, 56)",y={About:{backgroundColor:N,children:e(d,{className:"tkg-button",id:"link",to:"/about",children:e("h2",{children:"About"})})},Projects:{backgroundColor:N,children:e(d,{className:"tkg-button",id:"link",to:"/projects",children:e("h2",{children:"Projects"})})},WebApps:{backgroundColor:N,children:e(d,{className:"tkg-button",id:"link",to:"/webapps",children:e("h2",{children:"WebApps"})})},Github:{backgroundColor:N,children:e(d,{className:"tkg-button",id:"link",to:"/github",children:e("h2",{children:"Github"})})}};let K=()=>U.GalaxyInvaders();const m=()=>t(k,{children:[e(H,{}),t("nav",{children:[e(h,c({},y.About)),e(h,c({},y.Projects)),e(h,c({},y.WebApps)),e(h,c({},y.Github))]})]});class _ extends B.exports.Component{constructor(){super();console.log("Constr"),this.state={name:"React",isUserAuthenticated:!0}}render(){return e(k,{children:e(J,{})})}}function J(){return e(v,{children:t(G,{children:[t(u,{exact:!0,path:"/",children:[e(m,{}),e(C,{})]}),t(T,{children:[t(u,{exact:!0,path:"/about",children:[e(m,{}),e(C,{})]}),t(u,{exact:!0,path:"/about/email",children:[e(m,{}),e(F,{})]}),t(u,{exact:!0,path:"/projects",children:[e(m,{}),e(O,{})]}),t(u,{exact:!0,path:"/webapps",children:[e(m,{}),e(E,{})]}),e(u,{exact:!0,path:"/webapps/galaxy-invaders",children:e(K,{})}),t(u,{exact:!0,path:"/github",children:[e(m,{}),e(z,{})]})]})]})})}I.render(e(L.StrictMode,{children:e(_,{})}),document.getElementById("root"));
