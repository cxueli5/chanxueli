import{s as ce,n as J,c as le,r as Ee,o as De,d as ke,e as Ae,u as Ve,g as Oe,f as Se}from"../chunks/scheduler.61ee4713.js";import{S as ue,i as de,g,h as p,x as O,k as t,a as S,f as h,s as C,y as fe,j as y,c as I,z as he,A as d,B as Y,C as xe,m as Ce,n as Ie,o as ze,r as ye,u as $e,v as Te,d as oe,t as ie,w as Me}from"../chunks/index.ad37b216.js";import{b as j}from"../chunks/paths.88e73484.js";function se(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}const Be=!0,et=Object.freeze(Object.defineProperty({__proto__:null,prerender:Be},Symbol.toStringTag,{value:"Module"}));function Re(s){let e,l=`<div class="container px-6 py-12 mx-auto"><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-2"><div id="quickLinkSection" class="flex flex-col items-center svelte-1jbpv2s"><p class="font-semibold text-gray-800 dark:text-white">Quick Links</p> <div class="flex flex-col items-start mt-5 space-y-2"><a href="${`${j}/`}" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-white hover:underline hover:cursor-pointer hover:text-blue-500">Home</a> <a href="${`${j}/projects`}" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-white hover:underline hover:cursor-pointer hover:text-blue-500">Projects</a> <a href="${`${j}/internship`}" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-white hover:underline hover:cursor-pointer hover:text-blue-500">Internship</a> <a href="${`${j}/about-me`}" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-white hover:underline hover:cursor-pointer hover:text-blue-500">About Me</a></div></div> <div class="flex flex-col items-center"><p class="font-semibold text-gray-800 dark:text-white">Download My Resume</p> <div class="flex flex-col items-start mt-5 space-y-2"><a href="${`${j}/pdf/potrait.pdf`}" download="" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-none focus:ring focus:ring-blue-300">Download Resume</a></div></div></div> <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2"/> <div id="connectSection" class="flex justify-center items-center gap-4 svelte-1jbpv2s"><h3 class="mr-2">Connect with me:</h3> <a href="https://www.linkedin.com/in/xue-li" target="_blank" rel="noopener noreferrer"><img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="LinkedIn"/></a> <a href="mailto:cxuelisit@gmail.com" target="_blank" rel="noopener noreferrer"><img src="${`${j}/icons/gmail.svg`}" width="30" height="30" alt="Gmail"/></a></div> <p class="font-sans p-8 text-start md:text-center md:text-lg md:p-4">© 2024 Chan Xue Li. All rights reserved.</p></div>`;return{c(){e=g("footer"),e.innerHTML=l,this.h()},l(n){e=p(n,"FOOTER",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-yw0z07"&&(e.innerHTML=l),this.h()},h(){t(e,"class","bg-blue-100/80 font-sans dark:bg-gray-900")},m(n,u){S(n,e,u)},p:J,i:J,o:J,d(n){n&&h(e)}}}class Pe extends ue{constructor(e){super(),de(this,e,null,Re,ce,{})}}function Le(s,e,l){const n=s.slice();return n[4]=e[l],n[6]=l,n}function qe(s,e,l){const n=s.slice();return n[4]=e[l],n[6]=l,n}function Fe(s){let e;return{c(){e=fe("path"),this.h()},l(l){e=he(l,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),y(e).forEach(h),this.h()},h(){t(e,"stroke-linecap","round"),t(e,"stroke-linejoin","round"),t(e,"stroke-width","2"),t(e,"d","M4 6h16M4 12h16m-7 6h7")},m(l,n){S(l,e,n)},d(l){l&&h(e)}}}function Ge(s){let e;return{c(){e=fe("path"),this.h()},l(l){e=he(l,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),y(e).forEach(h),this.h()},h(){t(e,"stroke-linecap","round"),t(e,"stroke-linejoin","round"),t(e,"stroke-width","2"),t(e,"d","M6 18L18 6M6 6l12 12")},m(l,n){S(l,e,n)},d(l){l&&h(e)}}}function He(s){let e,l,n=s[4].name+"",u,i;return{c(){e=g("a"),l=g("p"),u=Ce(n),this.h()},l(a){e=p(a,"A",{href:!0,class:!0,target:!0});var c=y(e);l=p(c,"P",{});var k=y(l);u=Ie(k,n),k.forEach(h),c.forEach(h),this.h()},h(){t(e,"href",i=s[4].link),t(e,"class","duration-200 hover:text-violet-400 svelte-1qwk8bl"),t(e,"target",s[6]===4?"_blank":"")},m(a,c){S(a,e,c),d(e,l),d(l,u)},p(a,c){c&2&&n!==(n=a[4].name+"")&&ze(u,n),c&2&&i!==(i=a[4].link)&&t(e,"href",i)},d(a){a&&h(e)}}}function je(s){let e,l,n,u,i,a,c=s[4].name+"",k,v,w,L;return{c(){e=g("div"),l=g("i"),u=C(),i=g("a"),a=g("p"),k=Ce(c),this.h()},l(q){e=p(q,"DIV",{class:!0});var m=y(e);l=p(m,"I",{class:!0}),y(l).forEach(h),u=I(m),i=p(m,"A",{href:!0,class:!0,target:!0});var _=y(i);a=p(_,"P",{class:!0});var D=y(a);k=Ie(D,c),D.forEach(h),_.forEach(h),m.forEach(h),this.h()},h(){t(l,"class",n="fa "+s[4].icon+" tab-icon svelte-1qwk8bl"),t(a,"class","tab-name svelte-1qwk8bl"),t(i,"href",v=s[4].link),t(i,"class","text-gray-300 hover:text-gray-200 py-2 px-3 rounded transition duration-300 ease-in-out svelte-1qwk8bl"),t(i,"target",s[6]===4?"_blank":""),t(e,"class","tab-container svelte-1qwk8bl")},m(q,m){S(q,e,m),d(e,l),d(e,u),d(e,i),d(i,a),d(a,k),w||(L=Y(i,"click",s[3]),w=!0)},p(q,m){m&2&&n!==(n="fa "+q[4].icon+" tab-icon svelte-1qwk8bl")&&t(l,"class",n),m&2&&c!==(c=q[4].name+"")&&ze(k,c),m&2&&v!==(v=q[4].link)&&t(i,"href",v)},d(q){q&&h(e),w=!1,L()}}}function Ne(s){let e,l,n=`<img src="${`${j}/images/cxl.png`}" alt="Chan Xue Li Icon" style="width: fit-content; height: 90px; margin-top: 10px;"/>`,u,i,a,c,k,v,w,L,q="Download Resume",m,_,D='<img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="LinkedIn"/>',N,E,H=`<img src="${`${j}/icons/gmail.svg`}" width="30" height="30" alt="Gmail"/>`,f,b,$,U,B,ve='<svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M18 6L6 18M6 6l12 12"></path></svg>',ne,z,K,F,ge=`<a href="https://www.linkedin.com/in/xue-li" target="_blank" rel="noopener noreferrer" class="svelte-1qwk8bl"><img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="LinkedIn"/></a> <a href="mailto:cxuelisit@gmail.com" target="_blank" rel="noopener noreferrer" class="svelte-1qwk8bl"><img src="${`${j}/icons/gmail.svg`}" width="30" height="30" alt="Gmail"/></a>`,re,A,pe="Download Resume",Z,ae,me;function be(r,x){return r[2]?Ge:Fe}let ee=be(s),V=ee(s),X=se(s[1]),T=[];for(let r=0;r<X.length;r+=1)T[r]=He(qe(s,X,r));let W=se(s[1]),M=[];for(let r=0;r<W.length;r+=1)M[r]=je(Le(s,W,r));return{c(){e=g("header"),l=g("a"),l.innerHTML=n,u=C(),i=g("div"),a=g("button"),c=fe("svg"),V.c(),k=C(),v=g("div");for(let r=0;r<T.length;r+=1)T[r].c();w=C(),L=g("a"),L.textContent=q,m=C(),_=g("a"),_.innerHTML=D,N=C(),E=g("a"),E.innerHTML=H,b=C(),$=g("div"),U=g("div"),B=g("button"),B.innerHTML=ve,ne=C(),z=g("div");for(let r=0;r<M.length;r+=1)M[r].c();K=C(),F=g("div"),F.innerHTML=ge,re=C(),A=g("a"),A.textContent=pe,this.h()},l(r){e=p(r,"HEADER",{class:!0});var x=y(e);l=p(x,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),O(l)!=="svelte-155tbcb"&&(l.innerHTML=n),u=I(x),i=p(x,"DIV",{class:!0});var o=y(i);a=p(o,"BUTTON",{id:!0,class:!0});var R=y(a);c=he(R,"svg",{class:!0,fill:!0,viewBox:!0,stroke:!0});var _e=y(c);V.l(_e),_e.forEach(h),R.forEach(h),o.forEach(h),k=I(x),v=p(x,"DIV",{class:!0});var P=y(v);for(let G=0;G<T.length;G+=1)T[G].l(P);w=I(P),L=p(P,"A",{href:!0,download:!0,class:!0,"data-svelte-h":!0}),O(L)!=="svelte-1tj61ws"&&(L.textContent=q),m=I(P),_=p(P,"A",{href:!0,target:!0,rel:!0,class:!0,"data-svelte-h":!0}),O(_)!=="svelte-1x0x26a"&&(_.innerHTML=D),N=I(P),E=p(P,"A",{href:!0,target:!0,rel:!0,class:!0,"data-svelte-h":!0}),O(E)!=="svelte-jsyht3"&&(E.innerHTML=H),P.forEach(h),x.forEach(h),b=I(r),$=p(r,"DIV",{class:!0});var te=y($);U=p(te,"DIV",{class:!0});var we=y(U);B=p(we,"BUTTON",{class:!0,"data-svelte-h":!0}),O(B)!=="svelte-tnzqm1"&&(B.innerHTML=ve),we.forEach(h),ne=I(te),z=p(te,"DIV",{class:!0});var Q=y(z);for(let G=0;G<M.length;G+=1)M[G].l(Q);K=I(Q),F=p(Q,"DIV",{class:!0,"data-svelte-h":!0}),O(F)!=="svelte-1v608y8"&&(F.innerHTML=ge),re=I(Q),A=p(Q,"A",{href:!0,download:!0,class:!0,"data-svelte-h":!0}),O(A)!=="svelte-1tj61ws"&&(A.textContent=pe),Q.forEach(h),te.forEach(h),this.h()},h(){t(l,"href",`${j}/`),t(l,"target","_blank"),t(l,"class","svelte-1qwk8bl"),t(c,"class","h-6 w-6"),t(c,"fill","none"),t(c,"viewBox","0 0 24 24"),t(c,"stroke","currentColor"),t(a,"id","sidebaricon"),t(a,"class","text-white svelte-1qwk8bl"),t(i,"class","sm:hidden"),t(L,"href",`${j}/pdf/potrait.pdf`),t(L,"download",""),t(L,"class","bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-none focus:ring focus:ring-blue-300 svelte-1qwk8bl"),t(_,"href","https://www.linkedin.com/in/xue-li"),t(_,"target","_blank"),t(_,"rel","noopener noreferrer"),t(_,"class","svelte-1qwk8bl"),t(E,"href","mailto:cxuelisit@gmail.com"),t(E,"target","_blank"),t(E,"rel","noopener noreferrer"),t(E,"class","svelte-1qwk8bl"),t(v,"class","sm:flex items-center gap-4 hidden"),t(e,"class",f=le("sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid "+(s[0]>0?" py-4 bg-slate-950 border-violet-950":" py-6 bg-transparent border-transparent"))+" svelte-1qwk8bl"),t(B,"class","text-gray-300"),t(U,"class","flex justify-end p-4"),t(F,"class","button-container svelte-1qwk8bl"),t(A,"href",`${j}/pdf/potrait.pdf`),t(A,"download",""),t(A,"class","bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-none focus:ring focus:ring-blue-300 svelte-1qwk8bl"),t(z,"class","flex flex-col items-start gap-4 p-4"),t($,"class",Z=le(`fixed inset-y-0 right-0 z-50 w-64 bg-gray-900 text-white shadow-lg transform transition-transform ease-in-out ${s[2]?"translate-x-0":"translate-x-full"}`)+" svelte-1qwk8bl")},m(r,x){S(r,e,x),d(e,l),d(e,u),d(e,i),d(i,a),d(a,c),V.m(c,null),d(e,k),d(e,v);for(let o=0;o<T.length;o+=1)T[o]&&T[o].m(v,null);d(v,w),d(v,L),d(v,m),d(v,_),d(v,N),d(v,E),S(r,b,x),S(r,$,x),d($,U),d(U,B),d($,ne),d($,z);for(let o=0;o<M.length;o+=1)M[o]&&M[o].m(z,null);d(z,K),d(z,F),d(z,re),d(z,A),ae||(me=[Y(a,"click",s[3]),Y(B,"click",s[3])],ae=!0)},p(r,[x]){if(ee!==(ee=be(r))&&(V.d(1),V=ee(r),V&&(V.c(),V.m(c,null))),x&2){X=se(r[1]);let o;for(o=0;o<X.length;o+=1){const R=qe(r,X,o);T[o]?T[o].p(R,x):(T[o]=He(R),T[o].c(),T[o].m(v,w))}for(;o<T.length;o+=1)T[o].d(1);T.length=X.length}if(x&1&&f!==(f=le("sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid "+(r[0]>0?" py-4 bg-slate-950 border-violet-950":" py-6 bg-transparent border-transparent"))+" svelte-1qwk8bl")&&t(e,"class",f),x&10){W=se(r[1]);let o;for(o=0;o<W.length;o+=1){const R=Le(r,W,o);M[o]?M[o].p(R,x):(M[o]=je(R),M[o].c(),M[o].m(z,K))}for(;o<M.length;o+=1)M[o].d(1);M.length=W.length}x&4&&Z!==(Z=le(`fixed inset-y-0 right-0 z-50 w-64 bg-gray-900 text-white shadow-lg transform transition-transform ease-in-out ${r[2]?"translate-x-0":"translate-x-full"}`)+" svelte-1qwk8bl")&&t($,"class",Z)},i:J,o:J,d(r){r&&(h(e),h(b),h($)),V.d(),xe(T,r),xe(M,r),ae=!1,Ee(me)}}}function Ue(s,e,l){let{y:n}=e,{tabs:u=[{name:"Home",link:`${j}/`,icon:"fa-home"},{name:"Projects",link:`${j}/projects`,icon:"fa-folder"},{name:"Internship",link:`${j}/internship`,icon:"fa-briefcase"},{name:"About Me",link:`${j}/about-me`,icon:"fa-user"}]}=e,i=!1;function a(){l(2,i=!i)}return De(()=>{}),s.$$set=c=>{"y"in c&&l(0,n=c.y),"tabs"in c&&l(1,u=c.tabs)},[n,u,i,a]}class Xe extends ue{constructor(e){super(),de(this,e,Ue,Ne,ce,{y:0,tabs:1})}}function We(s){let e=!1,l=()=>{e=!1},n,u,i,a,c='<i class="fa-solid fa-arrow-up"></i>',k,v,w,L,q,m,_,D,N;ke(s[5]),ke(s[6]),w=new Xe({props:{y:s[0],innerHeight:s[2]}});const E=s[4].default,H=Ae(E,s,s[3],null);return m=new Pe({}),{c(){u=g("div"),i=g("div"),a=g("button"),a.innerHTML=c,v=C(),ye(w.$$.fragment),L=C(),H&&H.c(),q=C(),ye(m.$$.fragment),this.h()},l(f){u=p(f,"DIV",{class:!0});var b=y(u);i=p(b,"DIV",{class:!0});var $=y(i);a=p($,"BUTTON",{class:!0,"data-svelte-h":!0}),O(a)!=="svelte-i4zgfz"&&(a.innerHTML=c),$.forEach(h),v=I(b),$e(w.$$.fragment,b),L=I(b),H&&H.l(b),q=I(b),$e(m.$$.fragment,b),b.forEach(h),this.h()},h(){t(a,"class","ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer aspect-square grid place-items-center"),t(i,"class",k="fixed bottom-0 w-full duration-200 flex p-10 z-[10] "+(s[0]>0?" opacity-full pointer-events-auto":" pointer-events-none opacity-0")),t(u,"class","container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen")},m(f,b){S(f,u,b),d(u,i),d(i,a),d(u,v),Te(w,u,null),d(u,L),H&&H.m(u,null),d(u,q),Te(m,u,null),_=!0,D||(N=[Y(window,"scroll",()=>{e=!0,clearTimeout(n),n=setTimeout(l,100),s[5]()}),Y(window,"resize",s[6]),Y(a,"click",Qe)],D=!0)},p(f,[b]){b&1&&!e&&(e=!0,clearTimeout(n),scrollTo(window.pageXOffset,f[0]),n=setTimeout(l,100)),(!_||b&1&&k!==(k="fixed bottom-0 w-full duration-200 flex p-10 z-[10] "+(f[0]>0?" opacity-full pointer-events-auto":" pointer-events-none opacity-0")))&&t(i,"class",k);const $={};b&1&&($.y=f[0]),b&4&&($.innerHeight=f[2]),w.$set($),H&&H.p&&(!_||b&8)&&Ve(H,E,f,f[3],_?Se(E,f[3],b,null):Oe(f[3]),null)},i(f){_||(oe(w.$$.fragment,f),oe(H,f),oe(m.$$.fragment,f),_=!0)},o(f){ie(w.$$.fragment,f),ie(H,f),ie(m.$$.fragment,f),_=!1},d(f){f&&h(u),Me(w),H&&H.d(f),Me(m),D=!1,Ee(N)}}}function Qe(){document.body.scrollIntoView()}function Ye(s,e,l){let{$$slots:n={},$$scope:u}=e,i,a=0,c=0;function k(){l(0,i=window.pageYOffset)}function v(){l(2,c=window.innerHeight),l(1,a=window.innerWidth)}return s.$$set=w=>{"$$scope"in w&&l(3,u=w.$$scope)},[i,a,c,u,n,k,v]}class tt extends ue{constructor(e){super(),de(this,e,Ye,We,ce,{})}}export{tt as component,et as universal};
