(()=>{"use strict";var e,t={863:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,".ticket-block{border-bottom:1px solid gray}.ticket-info{margin:30px 0}",""]);const c=a},98:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var r=n(379),o=n.n(r),i=n(795),a=n.n(i),c=n(569),u=n.n(c),l=n(565),d=n.n(l),s=n(216),f=n.n(s),v=n(589),p=n.n(v),m=n(863),h={};h.styleTagTransform=p(),h.setAttributes=d(),h.insert=u().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=f(),o()(m.Z,h);const b=m.Z&&m.Z.locals?m.Z.locals:void 0},844:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.toursDataArray=void 0;var r=n(648);n(907);var o=n(331),i=n(706);t.toursDataArray=[],o.images,(0,i.initHeaderTitle)("Туры","h1"),(0,i.initFooterTitle)("Туры по всему миру","h2"),(0,r.getTours)().then((function(e){console.log("call"),t.toursDataArray=e,function(e){(0,i.initToursDivElements)(e)}(e)}))},724:(e,t,n)=>{var r=n(823);n(907),n(98);var o,i,a=n(532),c=n(706);(0,r.getTicketById)("someId").then((function(e){var t,n,r,i,u,l,d="string"==typeof(null==(o=e[0])?void 0:o.name)?null==o?void 0:o.name:"";(0,c.initHeaderTitle)(d,"h3"),(0,c.initFooterTitle)("Туры по всему миру","h2"),t=o,i=document.querySelector(".ticket-info"),u=null==t?void 0:t.description,l=null==t?void 0:t.tourOperator,"vipStatus"in t&&(n=t.vipStatus),[u,l,n].forEach((function(e,t){r+=(0,a.initTicketElementTemplate)(e,t)})),i.innerHTML=r})),(i=document.getElementById("accept-order-button"))&&i.addEventListener("click",(function(){var e;document.querySelectorAll(".user-info > p").forEach((function(t){var n=t.getAttribute("data-name");if(n){var r=t.querySelector("input");e[n]=r.value}})),console.log("userInfoObj",e),(0,r.postTicketData)(undefined).then((function(e){e.success}))}))},823:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.postTicketData=t.getTicketById=void 0,t.getTicketById=function(e){return fetch("https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/ticket").then((function(e){return e.json()})).then((function(e){return e}))},t.postTicketData=function(e){return fetch("https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/ticket").then((function(e){return e.json()})).then((function(e){return e}))}},532:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initTicketElementTemplate=void 0,t.initTicketElementTemplate=function(e,t){return"\n       <div  data-item-index=".concat(t,' class="ticket-block">\n           <p>').concat(e,"</p>\n       </div>\n    ")}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){for(var[n,o,i]=e[d],c=!0,u=0;u<n.length;u++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,o,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={387:0,826:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,c,u]=n,l=0;if(a.some((t=>0!==e[t]))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(u)var d=u(r)}for(t&&t(n);l<a.length;l++)i=a[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0;var o=r.O(void 0,[364],(()=>r(724)));o=r.O(o)})();