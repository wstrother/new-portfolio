import{s as b,e as o,k as x,c as l,a as p,d as m,m as y,l as M,x as D,f as n,i as I,g as c,n as v,o as V}from"../chunks/scheduler.bcceadc5.js";import{S as w,i as L,f as k}from"../chunks/index.0aa9e676.js";import{f as q}from"../chunks/index.5ae333ee.js";const C="/_app/immutable/assets/face.6ab99da4.png";function E(g){let a,r,e,_,d,f,t,h='<a href="/portfolio">View My Portfolio</a> <a href="https://wstrother.github.io/devblog/">Dev Blog</a> <a href="/about">Learn About Me</a>';return{c(){a=o("div"),r=o("div"),e=o("img"),f=x(),t=o("div"),t.innerHTML=h,this.h()},l(s){a=l(s,"DIV",{class:!0});var i=p(a);r=l(i,"DIV",{class:!0});var u=p(r);e=l(u,"IMG",{src:!0,alt:!0}),u.forEach(m),f=y(i),t=l(i,"DIV",{class:!0,"data-svelte-h":!0}),M(t)!=="svelte-jy8mw1"&&(t.innerHTML=h),i.forEach(m),this.h()},h(){D(e.src,_=C)||n(e,"src",_),n(e,"alt","Wyatt's Face"),n(r,"class","face-container"),n(t,"class","nav-container"),n(a,"class","landing-container")},m(s,i){I(s,a,i),c(a,r),c(r,e),c(a,f),c(a,t)},p:v,i(s){s&&(d||V(()=>{d=k(e,q,{}),d.start()}))},o:v,d(s){s&&m(a)}}}class T extends w{constructor(a){super(),L(this,a,null,E,b,{})}}export{T as component};