!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!_[e]||!w[e])return;for(var t in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(h[t]=n[t]);0==--y&&0===b&&j()}(e,t),n&&n(e,t)};var t,r=!0,o="f926f0856b40a229b0ce",a={},i=[],c=[];function s(e){var n=M[e];if(!n)return C;var r=function(r){return n.hot.active?(M[r]?-1===M[r].parents.indexOf(e)&&M[r].parents.push(e):(i=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),i=[]),C(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return C[e]},set:function(n){C[e]=n}}};for(var a in C)Object.prototype.hasOwnProperty.call(C,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(r,a,o(a));return r.e=function(e){return"ready"===u&&p("prepare"),b++,C.e(e).then(n,(function(e){throw n(),e}));function n(){b--,"prepare"===u&&(g[e]||I(e),0===b&&0===y&&j())}},r.t=function(e,n){return 1&n&&(e=r(e)),C.t(e,-2&n)},r}function l(n){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:t!==n,active:!0,accept:function(e,n){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._acceptedDependencies[e[t]]=n||function(){};else r._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._declinedDependencies[e[n]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=r._disposeHandlers.indexOf(e);n>=0&&r._disposeHandlers.splice(n,1)},invalidate:function(){switch(this._selfInvalidated=!0,u){case"idle":(h={})[n]=e[n],p("ready");break;case"ready":D(n);break;case"prepare":case"check":case"dispose":case"apply":(v=v||[]).push(n)}},check:x,apply:O,status:function(e){if(!e)return u;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var n=d.indexOf(e);n>=0&&d.splice(n,1)},data:a[n]};return t=void 0,r}var d=[],u="idle";function p(e){u=e;for(var n=0;n<d.length;n++)d[n].call(null,e)}var f,h,m,v,y=0,b=0,g={},w={},_={};function k(e){return+e+""===e?+e:e}function x(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,p("check"),(n=1e4,n=n||1e4,new Promise((function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,a=C.p+""+o+".hot-update.json";r.open("GET",a,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+a+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}}))).then((function(e){if(!e)return p(E()?"ready":"idle"),null;w={},g={},_=e.c,m=e.h,p("prepare");var n=new Promise((function(e,n){f={resolve:e,reject:n}}));h={};return I(1),"prepare"===u&&0===b&&0===y&&j(),n}));var n}function I(e){_[e]?(w[e]=!0,y++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=C.p+""+e+"."+o+".hot-update.js",document.head.appendChild(n)}(e)):g[e]=!0}function j(){p("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then((function(){return O(r)})).then((function(n){e.resolve(n)}),(function(n){e.reject(n)}));else{var n=[];for(var t in h)Object.prototype.hasOwnProperty.call(h,t)&&n.push(k(t));e.resolve(n)}}function O(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");return function n(r){var c,s,l,d,u;function f(e){for(var n=[e],t={},r=n.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),a=o.id,i=o.chain;if((d=M[a])&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(d.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var c=0;c<d.parents.length;c++){var s=d.parents[c],l=M[s];if(l){if(l.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([s]),moduleId:a,parentId:s};-1===n.indexOf(s)&&(l.hot._acceptedDependencies[a]?(t[s]||(t[s]=[]),y(t[s],[a])):(delete t[s],n.push(s),r.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function y(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}E();var b={},g=[],w={},x=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var I in h)if(Object.prototype.hasOwnProperty.call(h,I)){var j;u=k(I),j=h[I]?f(u):{type:"disposed",moduleId:I};var O=!1,D=!1,P=!1,H="";switch(j.chain&&(H="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":r.onDeclined&&r.onDeclined(j),r.ignoreDeclined||(O=new Error("Aborted because of self decline: "+j.moduleId+H));break;case"declined":r.onDeclined&&r.onDeclined(j),r.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+H));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(j),r.ignoreUnaccepted||(O=new Error("Aborted because "+u+" is not accepted"+H));break;case"accepted":r.onAccepted&&r.onAccepted(j),D=!0;break;case"disposed":r.onDisposed&&r.onDisposed(j),P=!0;break;default:throw new Error("Unexception type "+j.type)}if(O)return p("abort"),Promise.reject(O);if(D)for(u in w[u]=h[u],y(g,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,u)&&(b[u]||(b[u]=[]),y(b[u],j.outdatedDependencies[u]));P&&(y(g,[j.moduleId]),w[u]=x)}var S,R=[];for(s=0;s<g.length;s++)u=g[s],M[u]&&M[u].hot._selfAccepted&&w[u]!==x&&!M[u].hot._selfInvalidated&&R.push({module:u,parents:M[u].parents.slice(),errorHandler:M[u].hot._selfAccepted});p("dispose"),Object.keys(_).forEach((function(e){!1===_[e]&&function(e){delete installedChunks[e]}(e)}));var T,L,A=g.slice();for(;A.length>0;)if(u=A.pop(),d=M[u]){var V={},U=d.hot._disposeHandlers;for(l=0;l<U.length;l++)(c=U[l])(V);for(a[u]=V,d.hot.active=!1,delete M[u],delete b[u],l=0;l<d.children.length;l++){var X=M[d.children[l]];X&&((S=X.parents.indexOf(u))>=0&&X.parents.splice(S,1))}}for(u in b)if(Object.prototype.hasOwnProperty.call(b,u)&&(d=M[u]))for(L=b[u],l=0;l<L.length;l++)T=L[l],(S=d.children.indexOf(T))>=0&&d.children.splice(S,1);p("apply"),void 0!==m&&(o=m,m=void 0);for(u in h=void 0,w)Object.prototype.hasOwnProperty.call(w,u)&&(e[u]=w[u]);var N=null;for(u in b)if(Object.prototype.hasOwnProperty.call(b,u)&&(d=M[u])){L=b[u];var B=[];for(s=0;s<L.length;s++)if(T=L[s],c=d.hot._acceptedDependencies[T]){if(-1!==B.indexOf(c))continue;B.push(c)}for(s=0;s<B.length;s++){c=B[s];try{c(L)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:u,dependencyId:L[s],error:e}),r.ignoreErrored||N||(N=e)}}}for(s=0;s<R.length;s++){var q=R[s];u=q.module,i=q.parents,t=u;try{C(u)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(n){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,originalError:e}),r.ignoreErrored||N||(N=n),N||(N=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:u,error:e}),r.ignoreErrored||N||(N=e)}}if(N)return p("fail"),Promise.reject(N);if(v)return n(r).then((function(e){return g.forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}));return p("idle"),new Promise((function(e){e(g)}))}(n=n||{})}function E(){if(v)return h||(h={}),v.forEach(D),v=void 0,!0}function D(n){Object.prototype.hasOwnProperty.call(h,n)||(h[n]=e[n])}var M={};function C(n){if(M[n])return M[n].exports;var t=M[n]={i:n,l:!1,exports:{},hot:l(n),parents:(c=i,i=[],c),children:[]};return e[n].call(t.exports,t,t.exports,s(n)),t.l=!0,t.exports}C.m=e,C.c=M,C.d=function(e,n,t){C.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},C.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},C.t=function(e,n){if(1&n&&(e=C(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(C.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)C.d(t,r,function(n){return e[n]}.bind(null,r));return t},C.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return C.d(n,"a",n),n},C.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},C.p="/dist/",C.h=function(){return o},s(44)(C.s=44)}([,function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([o]).join("\n")}var i,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},,,function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],o=0;o<e.length;o++){var a=e[o],s=n.base?a[0]+n.base:a[0],l=t[s]||0,d="".concat(s," ").concat(l);t[s]=l+1;var u=c(d),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:d,updater:v(p,n),references:1}),r.push(d)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var d,u=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function p(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function f(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(e,n){var t,r,o;if(n.singleton){var a=m++;t=h||(h=l(n)),r=p.bind(null,t,a,!1),o=p.bind(null,t,a,!0)}else t=l(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=c(t[r]);i[o].references--}for(var a=s(e,n),l=0;l<t.length;l++){var d=c(t[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=a}}}},function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return o}));const r=[{label:"Kintsugi",url:"https://kintsugimusic.bandcamp.com"},{label:"Soul Eater",url:"https://souleatermusic.bandcamp.com"},{label:"Maris Lane",url:"https://marislane.bandcamp.com"}],o=[{label:"Minor League All American Dance Club",postLabel:"Toho Publishing",url:"https://www.tohopub.com/product-page/minor-league-all-american-dance-club-ben-saff"},{label:"so many noises",postLabel:"Recenter Press",url:"http://www.recenterpress.com/issue-one-benjamin-saff.html"},{label:"a line describes",postLabel:"Toho Journal",url:"https://www.tohopub.com/product-page/toho-journal-unity-vol-1-no-1"},{label:"Considering the Burrito",postLabel:"Marlarkey Books",url:"http://malarkeybooks.com/critical-analysis"},{label:"Eastern Wisdom for the Broken Heart",postLabel:"Thought Catalog",url:"https://thoughtcatalog.com/ben-saff/2016/04/5-eastern-wisdoms-to-help-heal-your-broken-heart/"},{label:"In Review: Tokyo Ueno Station by Yū Miri",postLabel:"Asymptote Journal",url:"https://www.asymptotejournal.com/blog/2019/03/11/misshapen-shards-yu-miris-tokyo-ueno-station-in-review/"},{label:"In Review: The Samurai by Shūsaku Endō",postLabel:"Asymptote Journal",url:"https://www.asymptotejournal.com/blog/2018/10/11/a-journey-of-faith-shusaku-endos-the-samurai-in-review/"},{label:"In Review: The Emissary by Yoko Tawada",postLabel:"Asymptote Journal",url:"https://www.asymptotejournal.com/blog/2018/05/24/in-review-the-emissary-by-yoko-tawada/"}]},,,,,,,,,function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r)()(!1);o.push([e.i,".nav__header--2On1D {\n  display: flex;\n  justify-content: center;\n  padding: 20px 0 0px;\n  height: calc(200px + 20px);\n}\n\n.nav__header--2On1D img {\n  width: 200px;\n}\n\n.nav__links--3L_cC {\n  display: flex;\n  justify-content: center;\n}\n\n.nav__links--3L_cC > a {\n  margin: 0 5px;\n  color: rgba(0, 0, 0, 1);\n}\n",""]),o.locals={header:"nav__header--2On1D",links:"nav__links--3L_cC"},n.default=o},function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r)()(!1);o.push([e.i,"@-webkit-keyframes page__fadeIn--2VE9T {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes page__fadeIn--2VE9T {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes page__fadeIn2--3X7CY {\n  from {\n    opacity: .4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes page__fadeIn2--3X7CY {\n  from {\n    opacity: .4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.page__wrapper--3EZpQ {\n  padding: 20px 40px;\n  margin-bottom: 20px;\n}\n\n/* for footer */\n\n.page__wrapper--3EZpQ * {\n    -webkit-animation: page__fadeIn--2VE9T 250ms ease;\n            animation: page__fadeIn--2VE9T 250ms ease;\n  }\n",""]),o.locals={wrapper:"page__wrapper--3EZpQ",fadeIn:"page__fadeIn--2VE9T",fadeIn2:"page__fadeIn2--3X7CY"},n.default=o},function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r)()(!1);o.push([e.i,".list__wrapper--1KPcn {\n  display: flex;\n  flex-direction: column;\n}\n\n.list__item--2HWyN {\n  margin-bottom: 15px;\n}\n\n.list__item--2HWyN > div {\n  font-size: 0.8em;\n}\n",""]),o.locals={wrapper:"list__wrapper--1KPcn",item:"list__item--2HWyN"},n.default=o},function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r)()(!1);o.push([e.i,"@-webkit-keyframes index__fadeIn--RcXXG {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes index__fadeIn--RcXXG {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes index__fadeIn2--2z2D2 {\n  from {\n    opacity: .4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes index__fadeIn2--2z2D2 {\n  from {\n    opacity: .4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n:root {\n  --link-color: firebrick;\n  --link-color-hover: #e88989;\n  --tap-highlight: #fbfefe;\n}\n\nbody {\n  margin: 0 auto;\n  max-width: 550px;\n  font-family: 'Crimson Text', serif;\n  -webkit-tap-highlight-color: #fbfefe;\n  -webkit-tap-highlight-color: var(--tap-highlight);\n}\n\n#app {\n  -webkit-animation: index__fadeIn--RcXXG 500ms ease;\n          animation: index__fadeIn--RcXXG 500ms ease;\n}\n\nh1 {\n  font-size: 1.1rem;\n  font-style: italic;\n}\n\na {\n  color: firebrick;\n  color: var(--link-color);\n  transition: color ease 0.25s;\n}\n\na:hover {\n  color: #e88989;\n  color: var(--link-color-hover);\n}\n\np {\n  line-height: 1.5;\n}\n",""]),o.locals={fadeIn:"index__fadeIn--RcXXG",fadeIn2:"index__fadeIn2--2z2D2"},n.default=o},,,,,function(e,n,t){var r=t(4),o=t(14);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var c=o.locals;e.hot.accept(14,(function(){"string"==typeof(o=(o=t(14)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,n){if(!e&&n||e&&!n)return!1;var t;for(t in e)if(e[t]!==n[t])return!1;for(t in n)if(!e[t])return!1;return!0}(c,o.locals)?(c=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},function(e,n,t){var r=t(4),o=t(16);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var c=o.locals;e.hot.accept(16,(function(){"string"==typeof(o=(o=t(16)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,n){if(!e&&n||e&&!n)return!1;var t;for(t in e)if(e[t]!==n[t])return!1;for(t in n)if(!e[t])return!1;return!0}(c,o.locals)?(c=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},,,,,,,function(e,n,t){var r=t(4),o=t(15);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var c=o.locals;e.hot.accept(15,(function(){"string"==typeof(o=(o=t(15)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,n){if(!e&&n||e&&!n)return!1;var t;for(t in e)if(e[t]!==n[t])return!1;for(t in n)if(!e[t])return!1;return!0}(c,o.locals)?(c=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},,,,,,,,,,,function(e,n){Vue.component("b-body",{template:"<div><slot></slot></div>"})},function(e,n,t){var r=t(4),o=t(17);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var c=o.locals;e.hot.accept(17,(function(){"string"==typeof(o=(o=t(17)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,n){if(!e&&n||e&&!n)return!1;var t;for(t in e)if(e[t]!==n[t])return!1;for(t in n)if(!e[t])return!1;return!0}(c,o.locals)?(c=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},,function(e,n,t){"use strict";t.r(n);var r=t.p+"a673c76dad590c0d19edb446f10ab758.jpg",o=t(22),a=t.n(o);Vue.component("b-nav",{data:()=>({links:[{name:"home",href:"#home"},{name:"music",href:"#music"},{name:"writing",href:"#writing"}]}),template:"\n    <nav>\n      <div class=".concat(a.a.header,">\n        <img src=").concat(r,' alt="Ben\'s face on a whiteboard" />\n      </div>\n      <div class=').concat(a.a.links,'>\n        <a :href="link.href" v-for="link in links">{{link.name}}</a>\n      </div>\n    </nav>\n  ')});t(41);var i=t(30),c=t.n(i);Vue.component("page",{props:["title"],template:"\n  <div class=".concat(c.a.wrapper,">\n    <h1>{{title + ' –'}}</h1>\n    <slot></slot>\n  </div>\n  ")});Vue.component("home-page",{methods:{handleClick(){localStorage.removeItem("USE_VUE"),location.href="/"}},template:'\n  <page title="hello">\n    <p className={styles.text}>\n      My name is Ben.\n      <br />\n      I&apos;m a software engineer based in Philadelphia.\n      <br/>\n      I built this site using React; no templates or boilerplates.\n      <br />\n      You can view the source code <a href='.concat("https://github.com/bsaff/bsaff.github.io",">here.</a>\n      <br />\n      I love reading and occassionally writing poems, too.\n      <br />\n      My first book of poetry can be purchased <a href=").concat("https://www.tohopub.com/product-page/minor-league-all-american-dance-club-ben-saff",'>here.</a>\n    </p>\n    <a href="" @click="handleClick">Switch to React</a>\n  </page>\n  ')});var s=t(23),l=t.n(s);Vue.component("list",{props:["items"],template:"\n    <div class=".concat(l.a.wrapper,">\n      <div class=").concat(l.a.item,' v-for="i in items">\n        <a :href="i.url">{{i.label}}</a>\n        <div v-if="i.postLabel" >{{i.postLabel}}</div>\n      </div>\n    </div>\n  ')});var d=t(5);Vue.component("music-page",{props:{items:{default:d.a}},template:'\n  <page title="music projects">\n    <list :items="items"></list>\n  </page>\n  '}),Vue.component("writing-page",{props:{items:{default:d.b}},template:'\n  <page title="writing">\n    <list :items="items"></list>\n  </page>\n  '});const u="#home",p={template:"<p>Not found</p>"},f={[u]:"home-page",["#music"]:"music-page",["#writing"]:"writing-page"};t(42);window.location.hash=u;const h=new Vue({el:"#app",data:{currentRoute:window.location.hash},computed:{ViewComponent(){return(e=>f[e]||p)(this.currentRoute)}},render(e){return e("div",[e("b-nav"),e("b-body",[e(this.ViewComponent)])])}});window.addEventListener("hashchange",(function(){h.currentRoute=window.location.hash}))}]);