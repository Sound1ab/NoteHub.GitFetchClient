module.exports=(()=>{"use strict";var e={446:(e,r,t)=>{function n(e){return e[Symbol.asyncIterator]?e[Symbol.asyncIterator]():e[Symbol.iterator]?e[Symbol.iterator]():e.next?e:(r=[e],function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}({next:function(){return Promise.resolve({done:0===r.length,value:r.pop()})},return:function(){return r=[],{}}},Symbol.asyncIterator,(function(){return this})));var r}function o(e,r,t,n,o,a,u){try{var i=e[a](u),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,o)}function a(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var u=e.apply(r,t);function i(e){o(u,n,a,i,c,"next",e)}function c(e){o(u,n,a,i,c,"throw",e)}i(void 0)}))}}function u(e,r){return i.apply(this,arguments)}function i(){return(i=a(regeneratorRuntime.mark((function e(r,t){var o,a,u,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=n(r);case 1:return e.next=4,o.next();case 4:if(a=e.sent,u=a.value,i=a.done,!u){e.next=10;break}return e.next=10,t(u);case 10:if(!i){e.next=12;break}return e.abrupt("break",14);case 12:e.next=1;break;case 14:o.return&&o.return();case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e,r,t,n,o,a,u){try{var i=e[a](u),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,o)}function s(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function u(e){c(a,n,o,u,i,"next",e)}function i(e){c(a,n,o,u,i,"throw",e)}u(void 0)}))}}function f(e){return l.apply(this,arguments)}function l(){return(l=s(regeneratorRuntime.mark((function e(r){var t,n,o,a,i,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,n=[],e.next=4,u(r,(function(e){n.push(e),t+=e.byteLength}));case 4:for(o=new Uint8Array(t),a=0,i=0,c=n;i<c.length;i++)s=c[i],o.set(s,a),a+=s.byteLength;return e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){if(e[Symbol.asyncIterator])return e;var r,t,n,o=e.getReader();return r={next:function(){return o.read()},return:function(){return o.releaseLock(),{}}},n=function(){return this},(t=Symbol.asyncIterator)in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function d(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(t.push(u.value),!r||t.length!==r);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return t}}(e,r)||p(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=p(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,i=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return u=e.done,e},e:function(e){i=!0,a=e},f:function(){try{u||null==t.return||t.return()}finally{if(i)throw a}}}}function p(e,r){if(e){if("string"==typeof e)return v(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?v(e,r):void 0}}function v(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function h(e,r,t,n,o,a,u){try{var i=e[a](u),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,o)}function m(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function u(e){h(a,n,o,u,i,"next",e)}function i(e){h(a,n,o,u,i,"throw",e)}u(void 0)}))}}function x(e){return g.apply(this,arguments)}function g(){return(g=m(regeneratorRuntime.mark((function e(r){var t,n,o,a,u,i,c,s,l,p,v,h,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.onProgress,t=r.url,n=r.method,o=void 0===n?"GET":n,a=r.headers,u=void 0===a?{}:a,!(i=r.body)){e.next=5;break}return e.next=4,f(i);case 4:i=e.sent;case 5:return e.next=7,fetch(t,{method:o,headers:u,body:i});case 7:if(!(c=e.sent).body||!c.body.getReader){e.next=12;break}e.t0=y(c.body),e.next=18;break;case 12:return e.t1=Uint8Array,e.next=15,c.arrayBuffer();case 15:e.t2=e.sent,e.t3=new e.t1(e.t2),e.t0=[e.t3];case 18:s=e.t0,u={},l=b(c.headers.entries());try{for(l.s();!(p=l.n()).done;)v=d(p.value,2),h=v[0],m=v[1],u[h]=m}catch(e){l.e(e)}finally{l.f()}return e.abrupt("return",{url:c.url,method:c.method,statusCode:c.status,statusMessage:c.statusText,body:s,headers:u});case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.r(r),t.d(r,{request:()=>x})}},r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{}};return e[n](o,o.exports,t),o.exports}return t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t(446)})();