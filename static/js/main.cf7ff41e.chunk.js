(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,a){e.exports=a(27)},19:function(e,n,a){},20:function(e,n,a){},21:function(e,n,a){},27:function(e,n,a){"use strict";a.r(n);var t=a(0),i=a.n(t),c=a(10),g=a.n(c),r=(a(19),a(20),a(21),a(2)),o=a(4),m=a(3),l=a(11);var u=function(e){return i.a.createElement("h1",null,"\u5f20\u96e8\u5251 Memory Game")};var s=function(e){var n=e.children,a=e.start,t=e.bg,c=e.soundToggle,g=n[1],r=g?"On":"Off";return i.a.createElement("main",{className:"app "+t},i.a.createElement(u,null),i.a.createElement("nav",null,i.a.createElement("button",{onClick:a},i.a.createElement(o.a,{icon:m.b}),"Play"),i.a.createElement("button",{onClick:c},i.a.createElement(o.a,{icon:g?m.g:m.f}),r),i.a.createElement("a",{className:"button",href:"https://www.instagram.com/tysunkete/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(o.a,{icon:l.a}),"IG")),i.a.createElement("ul",{className:"deck options fadein"},n))},p=a(6);function j(e){return function(e){for(var n=e.length-1;n>0;n--){var a=Math.floor(Math.random()*(n+1)),t=e[n];e[n]=e[a],e[a]=t}return e}(e.concat(Object(p.a)(e)))}var f=["/img/1_yujian/1.jpg","/img/1_yujian/2.jpg","/img/1_yujian/3.jpg","/img/1_yujian/4.jpg","/img/1_yujian/5.jpg","/img/1_yujian/6.jpg"],y=["/img/2_zhanying/1.jpg","/img/2_zhanying/2.jpg","/img/2_zhanying/3.jpg","/img/2_zhanying/4.jpg","/img/2_zhanying/5.jpg","/img/2_zhanying/6.jpg"],h=["/img/3_pianfeng/1.jpg","/img/3_pianfeng/2.jpg","/img/3_pianfeng/3.jpg","/img/3_pianfeng/4.jpg","/img/3_pianfeng/5.jpg","/img/3_pianfeng/6.jpg"],_=["/img/4_anyi/1.jpg","/img/4_anyi/2.jpg","/img/4_anyi/3.jpg","/img/4_anyi/4.jpg","/img/4_anyi/5.jpg","/img/4_anyi/6.jpg"],b=["/img/5_zhaohan/1.jpg","/img/5_zhaohan/2.jpg","/img/5_zhaohan/3.jpg","/img/5_zhaohan/4.jpg","/img/5_zhaohan/5.jpg","/img/5_zhaohan/6.jpg"],d=["/img/6_lanzhi/1.jpg","/img/6_lanzhi/2.jpg","/img/6_lanzhi/3.jpg","/img/6_lanzhi/4.jpg","/img/6_lanzhi/5.jpg","/img/6_lanzhi/6.jpg"],v=["/img/7_suifeng/1.jpg","/img/7_suifeng/2.jpg","/img/7_suifeng/3.jpg","/img/7_suifeng/4.jpg","/img/7_suifeng/5.jpg","/img/7_suifeng/6.jpg"],E=["/img/8_yanmo/1.jpg","/img/8_yanmo/2.jpg","/img/8_yanmo/3.jpg","/img/8_yanmo/4.jpg","/img/8_yanmo/5.jpg","/img/8_yanmo/6.jpg"],O=["/img/9_yihan/1.jpg","/img/9_yihan/2.jpg","/img/9_yihan/3.jpg","/img/9_yihan/4.jpg","/img/9_yihan/5.jpg","/img/9_yihan/6.jpg"],z=["/img/10_canyang/1.jpg","/img/10_canyang/2.jpg","/img/10_canyang/3.jpg","/img/10_canyang/4.jpg","/img/10_canyang/5.jpg","/img/10_canyang/6.jpg"],k=["/img/11_senhe/1.jpg","/img/11_senhe/2.jpg","/img/11_senhe/3.jpg","/img/11_senhe/4.jpg","/img/11_senhe/5.jpg","/img/11_senhe/6.jpg"],w=["/img/12_yituo/1.jpg","/img/12_yituo/2.jpg","/img/12_yituo/3.jpg","/img/12_yituo/4.jpg","/img/12_yituo/5.jpg","/img/12_yituo/6.jpg"],N=new Audio("".concat("/memory-yujian","/audio/drop.mp3")),C=new Audio("".concat("/memory-yujian","/audio/shuffle.mp3"));var S={play:function(e){var n="".concat("/memory-yujian","/audio/").concat(e,".mp3");n!==N.src&&(N.src=n),N.currentTime=0,N.play()},result:function(e){var n="".concat("/memory-yujian","/audio/").concat(e,".mp3");n!==C.src&&(C.src=n),C.currentTime=0,C.play()}},I=a(5),T=a(12),M=a.n(T);var D=function(e){var n,a=e.bg,t=e.onClick,c=e.selected,g=e.value,r=e.flipping,o=e.matched,m=M()((n={card:!0},Object(I.a)(n,"".concat(a),!0),Object(I.a)(n,"selected",c),Object(I.a)(n,"flipping",r),Object(I.a)(n,"matched",o),n));return i.a.createElement("div",{onClick:function(e){c||o||r||t()},className:m},i.a.createElement("div",{className:"back"}),i.a.createElement("div",{className:"front"},i.a.createElement("p",null,i.a.createElement("img",{className:"frontimg",src:"/memory-yujian"+g,alt:"card stim",crossOrigin:"anonymous"}))))};var A=function(e,n){var a,c=n,g=Object(t.useState)(0),o=Object(r.a)(g,2),m=o[0],l=o[1],u=Object(t.useState)([]),s=Object(r.a)(u,2),N=s[0],C=s[1],I=Object(t.useState)({i:[],v:[]}),T=Object(r.a)(I,2),M=T[0],A=T[1],B=Object(t.useState)(0),G=Object(r.a)(B,2),J=G[0],W=G[1],Y=Object(t.useState)(null),x=Object(r.a)(Y,2),P=x[0],R=x[1],$=Object(t.useState)(6e4),q=Object(r.a)($,2),F=q[0],H=q[1];"casual-yujian"===e&&(a=f),"lyb-zhanying"===e&&(a=y),"icefan-pianfeng"===e&&(a=h),"yaoguai-anyi"===e&&(a=_),"dd-zhaohan"===e&&(a=b),"orienody-lanzhi"===e&&(a=d),"ploughdep-suifeng"===e&&(a=v),"lecoup-yanmo"===e&&(a=E),"baituo-yihan"===e&&(a=O),"findyour-canyang"===e&&(a=z),"nightcomet-senhe"===e&&(a=k),"yituo"===e&&(a=w);var K=Object(t.useState)(j(a)),L=Object(r.a)(K,2),Q=L[0],U=L[1];Object(t.useEffect)(function(){var e;2===M.i.length&&((e=M).v[0]===e.v[1]?(c&&S.result("match"),C([].concat(Object(p.a)(N),[e.v[0]])),A({i:[],v:[]})):(l(function(){return m+1}),setTimeout(function(){c&&S.result("error"),A({i:[],v:[]})},500)))},[M]);var V=Q.map(function(n,a){return i.a.createElement(D,{key:a,bg:e,onClick:function(){return function(e,n){var a=M.i,t=M.v;a.length<2&&(c&&S.play("flip"),A({i:[].concat(Object(p.a)(a),[n]),v:[].concat(Object(p.a)(t),[e])}))}(n,a)},value:n,matched:N.includes(n),flipping:M.i.includes(a)})}),X=N.length===Q.length/2;return Object(t.useEffect)(function(){var e=null;return X?X&&0!==J&&clearInterval(e):e=setInterval(function(){var e=P||Date.now(),n=Date.now()-e,a=F-n;R(Date.now()),H(a),W(function(e){return a})},1),function(){return clearInterval(e)}},[!X,J]),[V,function(){c&&S.result("shuffle"),A({i:[],v:[]}),C([]),l(0),W(0),H(6e4),setTimeout(function(){return U(j(a))},800)},m,X,J]};var B=function(e){var n=e.bg,a=e.stop,c=e.finish,g=e.children,l=A(n,g),s=Object(r.a)(l,5),p=s[0],j=s[1],f=s[2],y=s[3],h=s[4];Object(t.useEffect)(function(){y&&c(f,h)},[y]);var _=6e4-h,b=parseInt(_%1e3),d=Math.floor(_/1e3%60);return b<10?b="00"+b:b<100&&(b="0"+b),d=d<10?" "+d:d,i.a.createElement("main",{className:"game "+n},i.a.createElement(u,null),i.a.createElement("nav",null,i.a.createElement("button",{onClick:a},i.a.createElement(o.a,{icon:m.a})),i.a.createElement("span",{className:"errors"},"Errors: ",i.a.createElement("strong",null,f)),i.a.createElement("span",{className:"time"},"Time:\xa0",i.a.createElement("strong",null,d,"s ",b,"ms")),i.a.createElement("button",{onClick:j},i.a.createElement(o.a,{icon:m.c}))),i.a.createElement("div",{className:"deck fadein"},p))},G=a(13),J={bg:["casual-yujian","lyb-zhanying","icefan-pianfeng","yaoguai-anyi","dd-zhaohan","orienody-lanzhi","ploughdep-suifeng","lecoup-yanmo","baituo-yihan","findyour-canyang","nightcomet-senhe","yituo"]};var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"options",n=Object(t.useState)({bg:J.bg[0]}),a=Object(r.a)(n,2),c=a[0],g=a[1],o=Object(t.useState)({status:e}),m=Object(r.a)(o,2),l=m[0],u=m[1],s=Object(t.useState)(!0),p=Object(r.a)(s,2),j=p[0],f=p[1],y=J.bg.map(function(e,n){return i.a.createElement(D,{key:n,bg:e,onClick:function(){return function(e){g(Object(G.a)({},c,{bg:J.bg[e]})),j&&S.result("drop")}(n)},selected:J.bg[n]===c.bg})});return[c,l,{start:function(){j&&S.result("shuffle"),u({status:"playing"})},stop:function(){j&&S.result("drop"),u({status:"options"})},finish:function(e,n){j&&S.result("cheer"),u({status:"finished",errors:e,seconds:n})}},y,{soundToggle:function(){f(!j)}},j]};var Y=function(e){var n=W(),a=Object(r.a)(n,1)[0];Object(t.useEffect)(function(){a&&S.play("cheer")},[]);var c=e.bg,g=e.errors,l=e.stop,u=e.start,s=g>1?"times":"time",p=6e4-e.seconds,j=parseInt(p%1e3),f=Math.floor(p/1e3%60);return j<10?j="00"+j:j<100&&(j="0"+j),f=f<10?" "+f:f,i.a.createElement("div",{className:"finish "+c},i.a.createElement("div",{className:"content"},i.a.createElement("h3",null,"Congrats!\xa0",i.a.createElement("span",{"aria-label":"clap",role:"img"},"\ud83d\udc4f\ud83d\udc4f\ud83d\udc4f")),i.a.createElement("p",null,"You only missed ",i.a.createElement("strong",null,g)," ",s,"!",i.a.createElement("br",null),"You took\xa0",i.a.createElement("strong",null,f,"s ",j,"ms"),"\xa0in total."),i.a.createElement("nav",null,i.a.createElement("button",{onClick:u},i.a.createElement(o.a,{icon:m.d}),"Restart"),i.a.createElement("button",{onClick:l},i.a.createElement(o.a,{icon:m.e}),"Options"),i.a.createElement("br",null))))};var x=function(e){var n=W(),a=Object(r.a)(n,6),t=a[0],c=a[1],g=a[2],o=a[3],m=a[4],l=a[5];return{playing:i.a.createElement(B,Object.assign({},g,t,c),l),finished:i.a.createElement(Y,Object.assign({},g,t,c)),options:i.a.createElement(s,Object.assign({},t,g,m),o,l)}[c.status]};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));g.a.render(i.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.cf7ff41e.chunk.js.map