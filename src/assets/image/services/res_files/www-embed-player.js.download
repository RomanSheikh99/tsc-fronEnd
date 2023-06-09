(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function ba(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function u(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ca(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(ba(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ia(a){return a.raw=a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:ba(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ja(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ka(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ka(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||la});
var ma="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},na=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ma(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),pa;
if("function"==typeof Object.setPrototypeOf)pa=Object.setPrototypeOf;else{var qa;a:{var ra={a:!0},sa={};try{sa.__proto__=ra;qa=sa.a;break a}catch(a){}qa=!1}pa=qa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ta=pa;
function w(a,b){a.prototype=ma(b.prototype);a.prototype.constructor=a;if(ta)ta(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ya=b.prototype}
function ua(){this.T=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.s=0;this.A=this.j=null}
function va(a){if(a.T)throw new TypeError("Generator is already running");a.T=!0}
ua.prototype.ka=function(a){this.i=a};
function wa(a,b){a.j={exception:b,od:!0};a.h=a.s||a.m}
ua.prototype.return=function(a){this.j={return:a};this.h=this.m};
ua.prototype.yield=function(a,b){this.h=b;return{value:a}};
ua.prototype.v=function(a){this.h=a};
function xa(a,b,c){a.s=b;void 0!=c&&(a.m=c)}
function ya(a,b){a.h=b;a.s=0}
function za(a){a.s=0;var b=a.j.exception;a.j=null;return b}
function Ca(a){a.A=[a.j];a.s=0;a.m=0}
function Da(a){var b=a.A.splice(0)[0];(b=a.j=a.j||b)?b.od?a.h=a.s||a.m:void 0!=b.v&&a.m<b.v?(a.h=b.v,a.j=null):a.h=a.m:a.h=0}
function Ea(a){this.h=new ua;this.i=a}
function Fa(a,b){va(a.h);var c=a.h.l;if(c)return Ha(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ia(a)}
function Ha(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.T=!1,e;var f=e.value}catch(g){return a.h.l=null,wa(a.h,g),Ia(a)}a.h.l=null;d.call(a.h,f);return Ia(a)}
function Ia(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.T=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,wa(a.h,c)}a.h.T=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.od)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ja(a){this.next=function(b){va(a.h);a.h.l?b=Ha(a,a.h.l.next,b,a.h.ka):(a.h.ka(b),b=Ia(a));return b};
this.throw=function(b){va(a.h);a.h.l?b=Ha(a,a.h.l["throw"],b,a.h.ka):(wa(a.h,b),b=Ia(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function La(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return La(new Ja(new Ea(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return na});
u("Reflect.setPrototypeOf",function(a){return a?a:ta?function(b,c){try{return ta(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.T=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.W),reject:g(this.m)}};
b.prototype.W=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ba(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.V(g):this.s(g)}};
b.prototype.V=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ea(h,g):this.s(g)};
b.prototype.m=function(g){this.ka(2,g)};
b.prototype.s=function(g){this.ka(1,g)};
b.prototype.ka=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.aa();this.A()};
b.prototype.aa=function(){var g=this;e(function(){if(g.M()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.M=function(){if(this.T)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.A=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ba=function(g){var h=this.l();g.Xb(h.resolve,h.reject)};
b.prototype.ea=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,r){return"function"==typeof t?function(x){try{l(t(x))}catch(y){n(y)}}:r}
var l,n,p=new b(function(t,r){l=t;n=r});
this.Xb(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Xb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.T=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),n=l.next();!n.done;n=l.next())d(n.value).Xb(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(x){return function(y){t[x]=y;r--;0==r&&l(t)}}
var t=[],r=0;do t.push(void 0),r++,d(k.value).Xb(p(t.length-1),n),k=h.next();while(!k.done)})};
return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ka(k,g)){var l=new c;ca(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ka(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ka(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return fa(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&ka(h.data_,l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ma(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ma(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ma(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ma(this,b,"includes").indexOf(b,c||0)}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
function Na(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Na(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Na(this,function(b){return b})}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Array.prototype.values",function(a){return a?a:function(){return Na(this,function(b,c){return c})}});
u("Object.setPrototypeOf",function(a){return a||ta});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||ea});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push(b[d]);return c}});
var Oa=Oa||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Pa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(1E9*Math.random()>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va:Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.ya=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Za(ab,Error);ab.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function cb(){}
function db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},fb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},gb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},hb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ib=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
fb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function jb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function kb(a,b){b=eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function lb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function mb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function nb(a){var b=ob,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function pb(a){for(var b in a)return!1;return!0}
function qb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function rb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function sb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function tb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ub(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ub(a[c]);return b}
var vb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<vb.length;f++)c=vb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var xb;function yb(){if(void 0===xb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(c){C.console&&C.console.error(c.message)}xb=a}else xb=a}return xb}
;function zb(a,b){this.j=a===Ab&&b||""}
zb.prototype.i=!0;zb.prototype.h=function(){return this.j};
function Bb(a){return new zb(Ab,a)}
var Ab={};Bb("");var Cb={};function Db(a){this.j=a;this.i=!0}
Db.prototype.toString=function(){return this.j.toString()};
Db.prototype.h=function(){return this.j.toString()};function Eb(a){this.j=a}
Eb.prototype.toString=function(){return this.j+""};
Eb.prototype.i=!0;Eb.prototype.h=function(){return this.j.toString()};
function Fb(a){if(a instanceof Eb&&a.constructor===Eb)return a.j;Pa(a);return"type_error:TrustedResourceUrl"}
var Gb={};function Hb(a){var b=yb();a=b?b.createScriptURL(a):a;return new Eb(a,Gb)}
;var Ib=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Jb(a,b){return-1!=a.toLowerCase().indexOf(b.toLowerCase())}
function Kb(a,b){return a<b?-1:a>b?1:0}
;function Lb(a){this.j=a}
Lb.prototype.toString=function(){return this.j.toString()};
Lb.prototype.i=!0;Lb.prototype.h=function(){return this.j.toString()};
function Mb(a){if(a instanceof Lb&&a.constructor===Lb)return a.j;Pa(a);return"type_error:SafeUrl"}
var Nb;try{new URL("s://g"),Nb=!0}catch(a){Nb=!1}var Ob=Nb;function Pb(a){if(a instanceof Lb)return a;a="object"==typeof a&&a.i?a.h():String(a);a:{var b=a;if(Ob){try{var c=new URL(b)}catch(d){b="https:";break a}b=c.protocol}else b:{c=document.createElement("a");try{c.href=b}catch(d){b=void 0;break b}b=c.protocol;b=":"===b||""===b?"https:":b}}"javascript:"!==b||(a="about:invalid#zClosurez");return new Lb(a,Qb)}
var Qb={},Rb=new Lb("about:invalid#zClosurez",Qb);var Sb,Tb=E("CLOSURE_FLAGS"),Ub=Tb&&Tb[610401301];Sb=null!=Ub?Ub:!1;function Vb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Wb,Xb=C.navigator;Wb=Xb?Xb.userAgentData||null:null;function Yb(a){return Sb?Wb?Wb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Vb().indexOf(a)}
;function Zb(){return Sb?!!Wb&&0<Wb.brands.length:!1}
function $b(){return Zb()?!1:F("Opera")}
function ac(){return Zb()?!1:F("Trident")||F("MSIE")}
function bc(){return Zb()?!1:F("Edge")}
function cc(){return Zb()?Yb("Microsoft Edge"):F("Edg/")}
function dc(){return F("Firefox")||F("FxiOS")}
function ec(){return F("Safari")&&!(fc()||(Zb()?0:F("Coast"))||$b()||bc()||cc()||(Zb()?Yb("Opera"):F("OPR"))||dc()||F("Silk")||F("Android"))}
function fc(){return Zb()?Yb("Chromium"):(F("Chrome")||F("CriOS"))&&!bc()||F("Silk")}
function hc(){return F("Android")&&!(fc()||dc()||$b()||F("Silk"))}
function ic(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function jc(a){var b=Vb();if("Internet Explorer"===a){if(ac())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=ic(c);
switch(a){case "Opera":if($b())return b(["Version","Opera"]);if(Zb()?Yb("Opera"):F("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(bc())return b(["Edge"]);if(cc())return b(["Edg"]);break;case "Chromium":if(fc())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&dc()||"Safari"===a&&ec()||"Android Browser"===a&&hc()||"Silk"===a&&F("Silk")?(b=c[2])&&b[1]||"":""}
function kc(a){if(Zb()&&"Silk"!==a){var b=Wb.brands.find(function(c){return c.brand===a});
if(!b||!b.version)return NaN;b=b.version.split(".")}else{b=jc(a);if(""===b)return NaN;b=b.split(".")}return 0===b.length?NaN:Number(b[0])}
;function lc(a){this.j=a;this.i=!0}
lc.prototype.h=function(){return this.j.toString()};
lc.prototype.toString=function(){return this.j.toString()};function mc(a,b){b=b instanceof Lb?b:Pb(b);a.href=Mb(b)}
function nc(a,b){a.rel="stylesheet";Jb("stylesheet","stylesheet")?(a.href=Fb(b).toString(),(b=oc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)):a.href=b instanceof Eb?Fb(b).toString():b instanceof Lb?Mb(b):Mb(Pb(b))}
function pc(){return oc("script[nonce]")}
var qc=/^[\w+/_-]+[=]{0,2}$/;function oc(a,b){b=(b||C).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&qc.test(a)?a:"":""}
;function rc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var sc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tc(a){return a?decodeURI(a):a}
function uc(a,b){return b.match(sc)[a]||null}
function vc(a){return tc(uc(3,a))}
function wc(a){var b=a.match(sc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function xc(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function yc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function zc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)zc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Ac(a,b){var c=[];for(b=b||0;b<a.length;b+=2)zc(a[b],a[b+1],c);return c.join("&")}
function Bc(a){var b=[],c;for(c in a)zc(c,a[c],b);return b.join("&")}
function Cc(a,b){var c=2==arguments.length?Ac(arguments[1],0):Ac(arguments,1);return yc(a,c)}
function Dc(a,b){b=Bc(b);return yc(a,b)}
function Ec(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return yc(a,b+c)}
function Fc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var Gc=/#|$/,Hc=/[?&]($|#)/;function Ic(a,b){for(var c=a.search(Gc),d=0,e,f=[];0<=(e=Fc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Hc,"$1")}
;function Jc(a){C.setTimeout(function(){throw a;},0)}
;function Kc(){return Sb?!!Wb&&!!Wb.platform:!1}
function Lc(){return Kc()?"Android"===Wb.platform:F("Android")}
function Mc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
function Nc(){return Mc()||F("iPad")||F("iPod")}
function Oc(){return Kc()?"macOS"===Wb.platform:F("Macintosh")}
function Pc(){return Kc()?"Windows"===Wb.platform:F("Windows")}
function Qc(){return Kc()?"Chrome OS"===Wb.platform:F("CrOS")}
function Rc(){var a=Vb(),b="";Pc()?(b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0"):Nc()?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".")):Oc()?(b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10"):Jb(Vb(),"KaiOS")?(b=/(?:KaiOS)\/(\S+)/i,b=(a=b.exec(a))&&a[1]):Lc()?(b=/Android\s+([^\);]+)(\)|;)/,b=(a=b.exec(a))&&a[1]):Qc()&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b=(a=b.exec(a))&&a[1]);a=0;b=Ib(String(b||"")).split(".");for(var c=
Ib("12").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Kb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Kb(0==f[2].length,0==g[2].length)||Kb(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}}
;function Sc(a){Sc[" "](a);return a}
Sc[" "]=function(){};var Tc=$b(),Uc=ac(),Vc=F("Edge"),Wc=F("Gecko")&&!(Jb(Vb(),"WebKit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),Xc=Jb(Vb(),"WebKit")&&!F("Edge");Xc&&F("Mobile");Oc();Pc();(Kc()?"Linux"===Wb.platform:F("Linux"))||Qc();var Yc=C.navigator||null;Yc&&(Yc.appVersion||"").indexOf("X11");var Zc=Lc();Mc();F("iPad");F("iPod");Nc();Jb(Vb(),"KaiOS");function $c(){var a=C.document;return a?a.documentMode:void 0}
var ad;a:{var bd="",cd=function(){var a=Vb();if(Wc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Vc)return/Edge\/([\d\.]+)/.exec(a);if(Uc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Xc)return/WebKit\/(\S+)/.exec(a);if(Tc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
cd&&(bd=cd?cd[1]:"");if(Uc){var dd=$c();if(null!=dd&&dd>parseFloat(bd)){ad=String(dd);break a}}ad=bd}var ed=ad,fd;if(C.document&&Uc){var gd=$c();fd=gd?gd:parseInt(ed,10)||void 0}else fd=void 0;var hd=fd;dc();var id=Mc()||F("iPod"),jd=F("iPad");hc();fc();var kd=ec()&&!Nc();var ld={},md=null;function nd(a,b){Qa(a);void 0===b&&(b=0);od();b=ld[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function pd(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;qd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function qd(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=md[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
od();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function od(){if(!md){md={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));ld[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===md[f]&&(md[f]=e)}}}}
;var rd="undefined"!==typeof Uint8Array,sd=!Uc&&"function"===typeof btoa;function td(a){if(!sd)return nd(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var ud=/[-_.]/g,vd={"-":"+",_:"/",".":"="};function wd(a){return vd[a]||""}
function xd(a){return rd&&null!=a&&a instanceof Uint8Array}
var yd={};var zd;function Ad(a){if(a!==yd)throw Error("illegal external caller");}
function Bd(a,b){Ad(b);this.h=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Bd.prototype.isEmpty=function(){return null==this.h};
Bd.prototype.sizeBytes=function(){Ad(yd);var a=this.h;if(null!=a&&!xd(a))if("string"===typeof a)if(sd){ud.test(a)&&(a=a.replace(ud,wd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=pd(a);else Pa(a),a=null;return(a=null==a?a:this.h=a)?a.length:0};var Cd="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function Dd(a,b){Cd?a[Cd]|=b:void 0!==a.Ga?a.Ga|=b:Object.defineProperties(a,{Ga:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function Ed(a){var b=G(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),Fd(a,b|1));return a}
function G(a){var b;Cd?b=a[Cd]:b=a.Ga;return b|0}
function Fd(a,b){Cd?a[Cd]=b:void 0!==a.Ga?a.Ga=b:Object.defineProperties(a,{Ga:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a}
function Gd(a,b){Object.isFrozen(a)&&(a=Array.prototype.slice.call(a));Fd(a,b);return a}
function Hd(a){Dd(a,1);return a}
function Id(a,b){Fd(b,(a|0)&-51)}
function Jd(a,b){Fd(b,(a|18)&-41)}
;var Kd={};function Ld(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Md,Nd=Object.freeze(Fd([],23));function Od(a){if(G(a.X)&2)throw Error();}
;function Pd(a){return a.displayName||a.name||"unknown type name"}
function Qd(a){return null==a?a:!!a}
function Rd(a){Pa(a);return a}
function Sd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Pd(b)+" but got "+(a&&Pd(a.constructor)));}
function Td(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Jc===Kd)return a;if(d){var e=d=G(a);0===e&&(e|=c&16);e|=c&2;e!==d&&Fd(a,e);return new b(a)}}
;function Ud(a,b,c){return-1===b?null:b>=a.i?a.h?a.h[b]:void 0:c&&a.h&&(c=a.h[b],null!=c)?c:a.X[b+a.j]}
function L(a,b,c,d){Od(a);return Vd(a,b,c,d)}
function Vd(a,b,c,d){a.l&&(a.l=void 0);if(b>=a.i||d)return d=a.i+a.j,(a.h||(a.h=a.X[d]={}))[b]=c,a;a.X[b+a.j]=c;(c=a.h)&&b in c&&delete c[b];return a}
function Wd(a){return void 0!==Xd(a,Yd,11,!1)}
function Zd(a,b,c,d){Od(a);for(var e=0,f=0;f<c.length;f++){var g=c[f];null!=Ud(a,g)&&(0!==e&&Vd(a,e,void 0,!1),e=g)}(c=e)&&c!==b&&null!=d&&Vd(a,c,void 0,!1);Vd(a,b,d)}
function Xd(a,b,c,d){var e=Ud(a,c,d);b=Td(e,b,G(a.X));b!==e&&null!=b&&Vd(a,c,b,d);return b}
function $d(a,b,c,d){d=void 0===d?!1:d;b=Xd(a,b,c,d);if(null==b)return b;if(!(G(a.X)&2)){var e=ae(b);e!==b&&(b=e,Vd(a,c,b,d))}return b}
function be(a,b,c,d){Od(a);null!=d?Sd(d,b):d=void 0;return Vd(a,c,d)}
function ce(a,b,c,d){Od(a);if(null!=d){for(var e=!!d.length,f=0;f<d.length;f++){var g=d[f];Sd(g,b);e=e&&!(G(g.X)&2)}b=G(d);f=b|1;f=(e?f|8:f&-9)|4;f!=b&&(d=Gd(d,f))}null==d&&(d=void 0);return Vd(a,c,d)}
function de(){var a=new ee;return L(a,1,1)}
;var fe;function ge(a,b){return he(b)}
function he(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)){if(xd(a))return td(a);if(a instanceof Bd){var b=a.h;return null==b?"":"string"===typeof b?b:a.h=td(b)}}}return a}
;function ie(a,b){for(var c=Array.prototype.slice.call(a.X),d=a.h,e=c.length+(d?-1:0),f=0;f<e;f++)c[f]=b(c[f]);if(d){e=c[f]={};for(var g in d)e[g]=b(d[g])}b=a.constructor;Dd(c,16);G(c);fe=c;c=new b(c);fe=void 0;a.nd&&(c.nd=a.nd.slice());return c}
function je(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&G(a)&1?void 0:f&&G(a)&2?a:ke(a,b,c,void 0!==d,e,f);else if(Ld(a)){var g={},h;for(h in a)g[h]=je(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function ke(a,b,c,d,e,f){var g=d||c?G(a):0;d=d?!!(g&16):void 0;a=Array.prototype.slice.call(a);for(var h=0;h<a.length;h++)a[h]=je(a[h],b,c,d,e,f);c&&c(g,a);return a}
function le(a){return a.Jc===Kd?a.toJSON():he(a)}
;function me(a,b,c){c=void 0===c?Jd:c;if(null!=a){if(rd&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=G(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return Fd(a,d|18),a;a=ke(a,me,d&4?Jd:c,!0,!1,!0);b=G(a);b&4&&b&2&&Object.freeze(a);return a}a.Jc===Kd&&(G(a.X)&2||(a=ne(a,!0),Dd(a.X,18)));return a}}
function ne(a,b){var c=G(a.X),d=b||c&2?Jd:Id,e=!!(c&16);return ie(a,function(f){return me(f,e,d)})}
function ae(a){if(!(G(a.X)&2))return a;var b=ne(a,!1);b.l=a;return b}
;function M(a,b,c){null==a&&(a=fe);fe=void 0;if(null==a)a=c?[c]:[],Fd(a,48);else{if(!Array.isArray(a))throw Error();if(c&&c!==a[0])throw Error();Dd(a,32)}this.j=c?0:-1;this.X=a;a:{c=this.X.length;a=c-1;if(c&&(c=this.X[a],Ld(c))){this.h=c;this.i=a-this.j;break a}b?(this.i=Math.max(b,a+1-this.j),this.h=void 0):this.i=Number.MAX_VALUE}G(this.X)}
m=M.prototype;m.toJSON=function(){if(Md)var a=oe(this,this.X,!1);else a=ke(this.X,le,void 0,void 0,!1,!1),a=oe(this,a,!0);return a};
m.serialize=function(){Md=!0;try{return JSON.stringify(this.toJSON(),ge)}finally{Md=!1}};
m.clone=function(){return ne(this,!1)};
m.Jc=Kd;m.toString=function(){return oe(this,this.X,!1).toString()};
function oe(a,b,c){var d=a?a.constructor.Va:void 0,e=a.i;if(d){if(!c){b=Array.prototype.slice.call(b);var f;if(b.length&&Ld(f=b[b.length-1]))for(var g=0;g<d.length;g++)if(d[g]>=e){Object.assign(b[b.length-1]={},f);break}}e=b;c=!c;f=a.i;var h;for(g=0;g<d.length;g++){var k=d[g];if(k<f){k+=a.j;var l=e[k];null==l?e[k]=c?Nd:Hd([]):c&&l!==Nd&&Ed(l)}else h||(l=void 0,e.length&&Ld(l=e[e.length-1])?h=l:e.push(h={})),l=h[k],null==h[k]?h[k]=c?Nd:Hd([]):c&&l!==Nd&&Ed(l)}}return b}
;function pe(a){this.cd=a}
;function qe(a,b,c){this.i=a;this.l=b;this.h=c||[];this.sb=new Map}
m=qe.prototype;m.Qd=function(a){var b=B.apply(1,arguments),c=this.zc(b);c?c.push(new pe(a)):this.Bd(a,b)};
m.Bd=function(a){var b=this.hd(B.apply(1,arguments));this.sb.set(b,[new pe(a)])};
m.zc=function(){var a=this.hd(B.apply(0,arguments));return this.sb.has(a)?this.sb.get(a):void 0};
m.ge=function(){var a=this.zc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.sb.clear()};
m.hd=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function re(a,b){qe.call(this,a,3,b)}
w(re,qe);re.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.ge(b);d&&(c=d.cd);this.Bd(c+a,b)};function se(a,b){qe.call(this,a,2,b)}
w(se,qe);se.prototype.record=function(a){this.Qd(a,B.apply(1,arguments))};function te(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function ue(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?ue.apply(null,d):te(d)}}
;function N(){this.ka=this.ka;this.T=this.T}
N.prototype.ka=!1;N.prototype.h=function(){return this.ka};
N.prototype.dispose=function(){this.ka||(this.ka=!0,this.K())};
function ve(a,b){we(a,Ya(te,b))}
function we(a,b){a.ka?b():(a.T||(a.T=[]),a.T.push(b))}
N.prototype.K=function(){if(this.T)for(;this.T.length;)this.T.shift()()};function xe(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
xe.prototype.stopPropagation=function(){this.j=!0};
xe.prototype.preventDefault=function(){this.defaultPrevented=!0};function ye(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ze(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ae[c])c=Ae[c];else{c=String(c);if(!Ae[c]){var f=/function\s+([^\(]+)/m.exec(c);Ae[c]=f?f[1]:"[Anonymous]"}c=Ae[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function ze(a,b){b||(b={});b[Be(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Be(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ze(a,b));return c}
function Be(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ae={};var Ce=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function De(a,b){xe.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Za(De,xe);var Ee={2:"touch",3:"pen",4:"mouse"};
De.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Wc){a:{try{Sc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ee[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&De.ya.preventDefault.call(this)};
De.prototype.stopPropagation=function(){De.ya.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
De.prototype.preventDefault=function(){De.ya.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Fe="closure_listenable_"+(1E6*Math.random()|0);var Ge=0;function He(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.cc=e;this.key=++Ge;this.Ob=this.Wb=!1}
function Ie(a){a.Ob=!0;a.listener=null;a.proxy=null;a.src=null;a.cc=null}
;function Je(a){this.src=a;this.listeners={};this.h=0}
Je.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Ke(a,b,d,e);-1<g?(b=a[g],c||(b.Wb=!1)):(b=new He(b,this.src,f,!!d,e),b.Wb=c,a.push(b));return b};
Je.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ke(e,b,c,d);return-1<b?(Ie(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Le(a,b){var c=b.type;c in a.listeners&&kb(a.listeners[c],b)&&(Ie(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Ke(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ob&&f.listener==b&&f.capture==!!c&&f.cc==d)return e}return-1}
;var Me="closure_lm_"+(1E6*Math.random()|0),Ne={},Oe=0;function Pe(a,b,c,d,e){if(d&&d.once)Qe(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Pe(a,b[f],c,d,e);else c=Re(c),a&&a[Fe]?a.listen(b,c,Ra(d)?!!d.capture:!!d,e):Se(a,b,c,!1,d,e)}
function Se(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=Te(a);h||(a[Me]=h=new Je(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ue();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ce||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ve(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Oe++}}
function Ue(){function a(c){return b.call(a.src,a.listener,c)}
var b=We;return a}
function Qe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Qe(a,b[f],c,d,e);else c=Re(c),a&&a[Fe]?a.l.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):Se(a,b,c,!0,d,e)}
function Xe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Xe(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=Re(c),a&&a[Fe])?a.l.remove(String(b),c,d,e):a&&(a=Te(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ke(b,c,d,e)),(c=-1<a?b[a]:null)&&Ye(c))}
function Ye(a){if("number"!==typeof a&&a&&!a.Ob){var b=a.src;if(b&&b[Fe])Le(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ve(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Oe--;(c=Te(b))?(Le(c,a),0==c.h&&(c.src=null,b[Me]=null)):Ie(a)}}}
function Ve(a){return a in Ne?Ne[a]:Ne[a]="on"+a}
function We(a,b){if(a.Ob)a=!0;else{b=new De(b,this);var c=a.listener,d=a.cc||a.src;a.Wb&&Ye(a);a=c.call(d,b)}return a}
function Te(a){a=a[Me];return a instanceof Je?a:null}
var Ze="__closure_events_fn_"+(1E9*Math.random()>>>0);function Re(a){if("function"===typeof a)return a;a[Ze]||(a[Ze]=function(b){return a.handleEvent(b)});
return a[Ze]}
;function $e(){N.call(this);this.l=new Je(this);this.pc=this;this.Ca=null}
Za($e,N);$e.prototype[Fe]=!0;m=$e.prototype;m.addEventListener=function(a,b,c,d){Pe(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){Xe(this,a,b,c,d)};
function af(a,b){var c=a.Ca;if(c){var d=[];for(var e=1;c;c=c.Ca)d.push(c),++e}a=a.pc;c=b.type||b;"string"===typeof b?b=new xe(b,a):b instanceof xe?b.target=b.target||a:(e=b,b=new xe(c,a),wb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=bf(g,c,!0,b)&&e}b.j||(g=b.h=a,e=bf(g,c,!0,b)&&e,b.j||(e=bf(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=bf(g,c,!1,b)&&e}
m.K=function(){$e.ya.K.call(this);this.removeAllListeners();this.Ca=null};
m.listen=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.l){var b=this.l;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Ie(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function bf(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ob&&g.capture==c){var h=g.listener,k=g.cc||g.src;g.Wb&&Le(a.l,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function cf(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
cf.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function df(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function ef(a,b){return a+Math.random()*(b-a)}
;function ff(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=ff.prototype;m.clone=function(){return new ff(this.x,this.y)};
m.equals=function(a){return a instanceof ff&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function gf(a,b){this.width=a;this.height=b}
m=gf.prototype;m.clone=function(){return new gf(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function hf(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function jf(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function kf(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var lf;function mf(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=jf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!ac()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.bd;c.bd=null;e()}};
return function(e){d.next={bd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function nf(){this.i=this.h=null}
nf.prototype.add=function(a,b){var c=of.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
nf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var of=new cf(function(){return new pf},function(a){return a.reset()});
function pf(){this.next=this.scope=this.fn=null}
pf.prototype.set=function(a,b){this.fn=a;this.scope=b;this.next=null};
pf.prototype.reset=function(){this.next=this.scope=this.fn=null};var qf,rf=!1,sf=new nf;function tf(a,b){qf||uf();rf||(qf(),rf=!0);sf.add(a,b)}
function uf(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);qf=function(){a.then(vf)}}else qf=function(){var b=vf;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&!bc()&&C.Window.prototype.setImmediate==C.setImmediate?(lf||(lf=mf()),lf(b)):C.setImmediate(b)}}
function vf(){for(var a;a=sf.remove();){try{a.fn.call(a.scope)}catch(b){Jc(b)}df(of,a)}rf=!1}
;function wf(a){this.h=0;this.T=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=cb)try{var b=this;a.call(void 0,function(c){xf(b,2,c)},function(c){xf(b,3,c)})}catch(c){xf(this,3,c)}}
function yf(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
yf.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var zf=new cf(function(){return new yf},function(a){a.reset()});
function Af(a,b,c){var d=zf.get();d.i=a;d.h=b;d.context=c;return d}
function Bf(a){if(a instanceof wf)return a;var b=new wf(cb);xf(b,2,a);return b}
function Cf(a){return new wf(function(b,c){c(a)})}
function Df(a,b,c){Ef(a,b,c,null)||tf(Ya(b,a))}
function Ff(a){return new wf(function(b){var c=a.length,d=[];if(c)for(var e=function(h,k,l){c--;d[h]=k?{fulfilled:!0,value:l}:{fulfilled:!1,reason:l};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Df(g,Ya(e,f,!0),Ya(e,f,!1));
else b(d)})}
wf.prototype.then=function(a,b,c){return Gf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
wf.prototype.$goog_Thenable=!0;m=wf.prototype;m.nc=function(a,b){return Gf(this,null,a,b)};
m.catch=wf.prototype.nc;m.cancel=function(a){if(0==this.h){var b=new Hf(a);tf(function(){If(this,b)},this)}};
function If(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?If(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Jf(c),Kf(c,e,3,b)))}a.j=null}else xf(a,3,b)}
function Lf(a,b){a.i||2!=a.h&&3!=a.h||Mf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Gf(a,b,c,d){var e=Af(null,null,null);e.child=new wf(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Hf?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;Lf(a,e);return e.child}
m.Xe=function(a){this.h=0;xf(this,2,a)};
m.Ye=function(a){this.h=0;xf(this,3,a)};
function xf(a,b,c){0==a.h&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.h=1,Ef(c,a.Xe,a.Ye,a)||(a.T=c,a.h=b,a.j=null,Mf(a),3!=b||c instanceof Hf||Nf(a,c)))}
function Ef(a,b,c,d){if(a instanceof wf)return Lf(a,Af(b||cb,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(Ra(a))try{var f=a.then;if("function"===typeof f)return Of(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}
function Of(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Mf(a){a.s||(a.s=!0,tf(a.ae,a))}
function Jf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.ae=function(){for(var a;a=Jf(this);)Kf(this,a,this.h,this.T);this.s=!1};
function Kf(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.child)b.child.j=null,Pf(b,c,d);else try{b.j?b.i.call(b.context):Pf(b,c,d)}catch(e){Qf.call(null,e)}df(zf,b)}
function Pf(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Nf(a,b){a.m=!0;tf(function(){a.m&&Qf.call(null,b)})}
var Qf=Jc;function Hf(a){ab.call(this,a)}
Za(Hf,ab);Hf.prototype.name="cancel";function Rf(a,b){$e.call(this);this.j=a||1;this.i=b||C;this.m=Xa(this.We,this);this.s=Date.now()}
Za(Rf,$e);m=Rf.prototype;m.enabled=!1;m.Ba=null;m.setInterval=function(a){this.j=a;this.Ba&&this.enabled?(this.stop(),this.start()):this.Ba&&this.stop()};
m.We=function(){if(this.enabled){var a=Date.now()-this.s;0<a&&a<.8*this.j?this.Ba=this.i.setTimeout(this.m,this.j-a):(this.Ba&&(this.i.clearTimeout(this.Ba),this.Ba=null),af(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Ba||(this.Ba=this.i.setTimeout(this.m,this.j),this.s=Date.now())};
m.stop=function(){this.enabled=!1;this.Ba&&(this.i.clearTimeout(this.Ba),this.Ba=null)};
m.K=function(){Rf.ya.K.call(this);this.stop();delete this.i};
function Sf(a,b,c){if("function"===typeof a)c&&(a=Xa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Xa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function Tf(a){N.call(this);this.M=a;this.j=new Map;this.A=new Set;this.l=0;this.m=100;this.flushInterval=3E4;this.i=new Rf(this.flushInterval);this.i.listen("tick",this.pb,!1,this);ve(this,this.i);this.s=!1}
w(Tf,N);m=Tf.prototype;m.sendIsolatedPayload=function(a){this.s=a;this.m=1};
function Uf(a){a.i.enabled||a.i.start();a.l++;a.l>=a.m&&a.pb()}
m.pb=function(){var a=this.j.values();a=[].concat(ja(a)).filter(function(b){return b.sb.size});
a.length&&this.M.flush(a,this.s);Vf(a);this.l=0;this.i.enabled&&this.i.stop()};
m.Wc=function(a){var b=B.apply(1,arguments);this.j.has(a)||this.j.set(a,new re(a,b))};
m.Xc=function(a){var b=B.apply(1,arguments);this.j.has(a)||this.j.set(a,new se(a,b))};
function Wf(a,b){return a.A.has(b)?void 0:a.j.get(b)}
m.oc=function(a){this.Nd.apply(this,[a,1].concat(ja(B.apply(1,arguments))))};
m.Nd=function(a,b){var c=B.apply(2,arguments),d=Wf(this,a);d&&d instanceof re&&(d.j(b,c),Uf(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=Wf(this,a);d&&d instanceof se&&(d.record(b,c),Uf(this))};
function Vf(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Xf(a){this.h=a;this.h.Wc("/client_streamz/bg/fiec",{vb:3,ub:"rk"},{vb:2,ub:"ec"},{vb:3,ub:"em"})}
function Yf(a,b,c,d){a.h.oc("/client_streamz/bg/fiec",b,c,d)}
function Zf(a){this.h=a;this.h.Xc("/client_streamz/bg/fil",{vb:3,ub:"rk"})}
Zf.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fil",a,b)};
function $f(a){this.h=a;this.h.Wc("/client_streamz/bg/fsc",{vb:3,ub:"rk"})}
function ag(a){this.h=a;this.h.Xc("/client_streamz/bg/fsl",{vb:3,ub:"rk"})}
ag.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fsl",a,b)};var bg={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function cg(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=dg(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=eg(a,h),d+=eg(a,h+4),e+=eg(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return bg.toString(e)}
function dg(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function eg(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function fg(a){M.call(this,a)}
w(fg,M);var gg=[1,2,3];function hg(a){M.call(this,a)}
w(hg,M);var ig=[1,2,3];function jg(a){M.call(this,a)}
w(jg,M);jg.Va=[1];function kg(a){M.call(this,a)}
w(kg,M);kg.Va=[3,6,4];function lg(a){M.call(this,a)}
w(lg,M);lg.Va=[1];function mg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function ng(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var t=g,r=0;64>r;r+=4)t[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=t[r-3]^t[r-8]^t[r-14]^t[r-16],t[r]=(p<<1|p>>>31)&4294967295;p=e[0];var x=e[1],y=e[2],z=e[3],I=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var K=z^x&(y^z);var H=1518500249}else K=x^y^z,H=1859775393;else 60>r?(K=x&y|z&(x|y),H=2400959708):(K=x^y^z,H=3395469782);K=((p<<5|p>>>27)&4294967295)+K+I+H+t[r]&4294967295;I=z;z=y;y=(x<<30|x>>>2)&4294967295;x=p;p=K}e[0]=e[0]+p&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+I&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],x=0,y=p.length;x<y;++x)r.push(p.charCodeAt(x));p=r}t||(t=p.length);r=0;if(0==l)for(;r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<t;)if(f[l++]=p[r++],n++,64==l)for(l=0,b(f);r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=t&255,t>>>=8;b(f);for(r=t=0;5>r;r++)for(var x=24;0<=x;x-=8)p[t++]=e[r]>>x&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Wd:function(){for(var p=d(),t="",r=0;r<p.length;r++)t+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return t}}}
;function og(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,pg(mg(d),a,c||null)].join(" "):null}
function pg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],fb(d,function(h){e.push(h)}),qg(e.join(" "));
var f=[],g=[];fb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];fb(d,function(h){e.push(h)});
a=qg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function qg(a){var b=ng();b.update(a);return b.Wd().toLowerCase()}
;var rg={};function sg(a){this.h=a||{cookie:""}}
m=sg.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{fc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Hf;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.fc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ib(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{fc:0,path:b,domain:c});return d};
m.Cc=function(){return tg(this).keys};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=tg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function tg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Ib(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var ug=new sg("undefined"==typeof document?null:document);function vg(a){return!!rg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function wg(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;vg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new sg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");vg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function xg(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new sg(document)).get(b));return a?og(a,c,d):null}
function yg(a,b){b=void 0===b?!1:b;var c=mg(String(C.location.href)),d=[];if(wg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new sg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?og(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&vg(b)&&((b=xg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=xg("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function Ag(a){M.call(this,a)}
w(Ag,M);Ag.Va=[2];function Bg(a){this.h=this.i=this.j=a}
Bg.prototype.reset=function(){this.h=this.i=this.j};
Bg.prototype.getValue=function(){return this.i};function Cg(){}
Cg.prototype.serialize=function(a){var b=[];Dg(this,a,b);return b.join("")};
function Dg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Dg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Eg(d,c),c.push(":"),Dg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Eg(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Fg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Gg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Eg(a,b){b.push('"',a.replace(Gg,function(c){var d=Fg[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Fg[c]=d);return d}),'"')}
;function Hg(){}
Hg.prototype.h=null;Hg.prototype.getOptions=function(){var a;(a=this.h)||(a={},Ig(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var Jg;function Kg(){}
Za(Kg,Hg);function Lg(a){return(a=Ig(a))?new ActiveXObject(a):new XMLHttpRequest}
function Ig(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
Jg=new Kg;function Mg(a){$e.call(this);this.headers=new Map;this.W=a||null;this.i=!1;this.V=this.G=null;this.m=this.ea="";this.j=this.ba=this.A=this.aa=!1;this.s=0;this.M=null;this.Da="";this.la=this.qa=!1}
Za(Mg,$e);var Ng=/^https?$/i,Og=["POST","PUT"],Pg=[];function Qg(a,b,c,d,e,f,g){var h=new Mg;Pg.push(h);b&&h.listen("complete",b);h.l.add("ready",h.Vd,!0,void 0,void 0);f&&(h.s=Math.max(0,f));g&&(h.qa=g);h.send(a,c,d,e)}
m=Mg.prototype;m.Vd=function(){this.dispose();kb(Pg,this)};
m.send=function(a,b,c,d){if(this.G)throw Error("[goog.net.XhrIo] Object is active with another request="+this.ea+"; newUri="+a);b=b?b.toUpperCase():"GET";this.ea=a;this.m="";this.aa=!1;this.i=!0;this.G=this.W?Lg(this.W):Lg(Jg);this.V=this.W?this.W.getOptions():Jg.getOptions();this.G.onreadystatechange=Xa(this.sd,this);try{this.getStatus(),this.ba=!0,this.G.open(b,String(a),!0),this.ba=!1}catch(g){this.getStatus();Rg(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===
Object.prototype)for(var e in d)c.set(e,d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=eb(Og,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.G.setRequestHeader(d,c);this.Da&&(this.G.responseType=this.Da);"withCredentials"in this.G&&this.G.withCredentials!==this.qa&&(this.G.withCredentials=this.qa);try{Sg(this),0<this.s&&(this.la=Tg(this.G),this.getStatus(),this.la?(this.G.timeout=this.s,this.G.ontimeout=Xa(this.Gd,
this)):this.M=Sf(this.Gd,this.s,this)),this.getStatus(),this.A=!0,this.G.send(a),this.A=!1}catch(g){this.getStatus(),Rg(this,g)}};
function Tg(a){return Uc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Gd=function(){"undefined"!=typeof Oa&&this.G&&(this.m="Timed out after "+this.s+"ms, aborting",this.getStatus(),af(this,"timeout"),this.abort(8))};
function Rg(a,b){a.i=!1;a.G&&(a.j=!0,a.G.abort(),a.j=!1);a.m=b;Ug(a);Vg(a)}
function Ug(a){a.aa||(a.aa=!0,af(a,"complete"),af(a,"error"))}
m.abort=function(){this.G&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.G.abort(),this.j=!1,af(this,"complete"),af(this,"abort"),Vg(this))};
m.K=function(){this.G&&(this.i&&(this.i=!1,this.j=!0,this.G.abort(),this.j=!1),Vg(this,!0));Mg.ya.K.call(this)};
m.sd=function(){this.h()||(this.ba||this.A||this.j?Wg(this):this.ze())};
m.ze=function(){Wg(this)};
function Wg(a){if(a.i&&"undefined"!=typeof Oa)if(a.V[1]&&4==Xg(a)&&2==a.getStatus())a.getStatus();else if(a.A&&4==Xg(a))Sf(a.sd,0,a);else if(af(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Yg(a))af(a,"complete"),af(a,"success");else{try{var b=2<Xg(a)?a.G.statusText:""}catch(c){b=""}a.m=b+" ["+a.getStatus()+"]";Ug(a)}}finally{Vg(a)}}}
function Vg(a,b){if(a.G){Sg(a);var c=a.G,d=a.V[0]?function(){}:null;
a.G=null;a.V=null;b||af(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Sg(a){a.G&&a.la&&(a.G.ontimeout=null);a.M&&(C.clearTimeout(a.M),a.M=null)}
m.isActive=function(){return!!this.G};
m.isComplete=function(){return 4==Xg(this)};
function Yg(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=uc(1,String(a.ea)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Ng.test(a?a.toLowerCase():"");c=b}return c}
function Xg(a){return a.G?a.G.readyState:0}
m.getStatus=function(){try{return 2<Xg(this)?this.G.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.m?this.m:String(this.m)};function Zg(a){M.call(this,a)}
w(Zg,M);function $g(a){M.call(this,a)}
w($g,M);$g.Va=[1];function Yd(a){M.call(this,a)}
w(Yd,M);var ah=["platform","platformVersion","architecture","model","uaFullVersion"];new $g;function ee(a){M.call(this,a)}
w(ee,M);function bh(a){M.call(this,a,33)}
w(bh,M);bh.Va=[3,20,27];function ch(a){M.call(this,a,19)}
w(ch,M);ch.Va=[3,5];function dh(a){M.call(this,a,6)}
w(dh,M);dh.Va=[5];function eh(a){M.call(this,a)}
w(eh,M);var fh;fh=new function(a,b,c){this.h=a;this.fieldName=b;this.ctor=c;this.isRepeated=0;this.i=$d;this.defaultValue=void 0}(175237375,{zf:0},eh);function gh(a,b,c,d,e,f,g,h,k,l,n){$e.call(this);var p=this;this.componentId="";this.j=[];this.Ib="";this.Tb=this.la=-1;this.Da=!1;this.V=this.experimentIds=null;this.A=this.M=0;this.Od=1;this.timeoutMillis=0;this.ea=!1;$e.call(this);this.logSource=a;this.qb=b||function(){};
this.m=new hh(a,f);this.qc=d;this.network=n;this.bufferSize=1E3;this.Pd=Ya(ef,0,1);this.aa=e||null;this.sessionIndex=c||null;this.ba=g||!1;this.pageId=k||null;this.logger=null;this.withCredentials=!h;this.qa=f||!1;!this.qa&&(65<=kc("Chromium")||45<=kc("Firefox")||12<=kc("Safari")||Nc()&&Rc());a=de();ih(this.m,a);this.s=new Bg(1E4);this.i=new Rf(this.s.getValue());ve(this,this.i);l=jh(this,l);Pe(this.i,"tick",l,!1,this);this.W=new Rf(6E5);ve(this,this.W);Pe(this.W,"tick",l,!1,this);this.ba||this.W.start();
this.qa||(Pe(document,"visibilitychange",function(){"hidden"===document.visibilityState&&p.xc()}),Pe(document,"pagehide",this.xc,!1,this))}
w(gh,$e);function jh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
m=gh.prototype;m.K=function(){this.xc();$e.prototype.K.call(this)};
function kh(a){a.aa||(a.aa=.01>a.Pd()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.aa}
function lh(a,b){a.s=new Bg(1>b?1:b);a.i.setInterval(a.s.getValue())}
m.log=function(a){a=a.clone();var b=this.Od++;a=L(a,21,b);this.componentId&&L(a,26,this.componentId);if(!Ud(a,1)){b=a;var c=Date.now().toString();L(b,1,c)}null==Ud(a,15)&&L(a,15,60*(new Date).getTimezoneOffset());this.experimentIds&&(b=this.experimentIds.clone(),be(a,Ag,16,b));for(;this.j.length>=this.bufferSize;)this.j.shift(),++this.M;this.j.push(a);af(this,new mh(a));this.ba||this.i.enabled||this.i.start()};
m.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else if(this.ea)nh(this.m,3),oh(this);else{var d=Date.now();if(this.Tb>d&&this.la<d)b&&b("throttled");else{nh(this.m,1);var e=ph(this.m,this.j,this.M,this.A);d={};var f=this.qb();f&&(d.Authorization=f);var g=kh(this);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,g=Ec(g,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=Ec(g,"pageId",this.pageId));if(f&&this.Ib===f)b&&b("stale-auth-token");else{this.j=
[];this.i.enabled&&this.i.stop();this.M=0;var h=e.serialize(),k;this.V&&this.V.isSupported(h.length)&&(k=this.V.compress(h));var l={url:g,body:h,Td:1,Nc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(r){c.s.reset();c.i.setInterval(c.s.getValue());if(r){var x=null;try{var y=JSON.parse(r.replace(")]}'\n",""));x=new dh(y)}catch(z){}if(x&&(r=Ud(x,1),r=Number(null==r?"-1":r),0<r&&(c.la=Date.now(),c.Tb=c.la+r),x=fh.ctor?fh.i(x,fh.ctor,fh.h,!0):fh.isRepeated?
fh.i(x,fh.h,!0):fh.i(x,fh.h,fh.defaultValue,!0))){a:if(x=Ud(x,1),null!=x){switch(typeof x){case "string":x=+x;break a;case "number":break a}x=void 0}x=null==x?-1:x;-1!==x&&(c.Da||lh(c,x))}}a&&a();c.A=0},p=function(r,x){var y=G(e.X),z=!!(y&2);
var I=z?1:2;var K=!!(y&2);var H=Ud(e,3);Array.isArray(H)||(H=Nd);var J=G(H);J&1||Hd(H);K?J&2||Dd(H,18):J&16&&!(J&2)&&(J=H,Cd?J[Cd]&&(J[Cd]&=-17):void 0!==J.Ga&&(J.Ga&=-17));if(H!==Nd&&G(H)&4)3===I||K||(K=Object.isFrozen(H),1===I?K||Object.freeze(H):(I=G(H),J=I&-19,K&&(H=Array.prototype.slice.call(H),I=0,Vd(e,3,H)),I!==J&&Fd(H,J))),I=H;else{J=H;K=!!(y&2);var T=!!(G(J)&2);H=J;!K&&T&&(J=Array.prototype.slice.call(J));y|=T?2:0;for(var aa=0,Ga=0;aa<J.length;aa++){var oa=Td(J[aa],bh,y);void 0!==oa&&(T||
(T=!!(2&G(oa.X))),J[Ga++]=oa)}Ga<aa&&(J.length=Ga);T=!T;y=G(J);aa=y|5;T=T?aa|8:aa&-9;y!=T&&(J=Gd(J,T));H!==J&&Vd(e,3,J);(K||1===I)&&Object.freeze(J);I=J}if(!(z||G(I)&8)){for(z=0;z<I.length;z++)K=I[z],H=ae(K),K!==H&&(I[z]=H);Dd(I,8)}z=c.s;z.h=Math.min(3E5,2*z.h);z.i=Math.min(3E5,z.h+Math.round(.2*(Math.random()-.5)*z.h));c.i.setInterval(c.s.getValue());401===r&&f&&(c.Ib=f);void 0===x&&(x=c.isRetryable(r));x&&(c.j=I.concat(c.j),c.ba||c.i.enabled||c.i.start());b&&b("net-send-failed",r);++c.A},t=function(){c.network?
c.network.send(l,n,p):c.qc(l,n,p)};
k?k.then(function(r){l.Nc["Content-Encoding"]="gzip";l.Nc["Content-Type"]="application/binary";l.body=r;l.Td=2;t()},function(){t()}):t()}}}};
m.xc=function(){qh(this.m,!0);this.flush();qh(this.m,!1)};
function oh(a){rh(a,function(b,c){b=Ec(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,c.serialize())}catch(e){}a.ea&&!d&&(a.ea=!1);return d})}
function rh(a,b){if(0!==a.j.length){var c=Ic(kh(a),"format");c=Cc(c,"auth",a.qb(),"authuser",a.sessionIndex||"0");for(var d=0;10>d&&a.j.length;++d){var e=a.j.slice(0,32),f=ph(a.m,e,a.M,a.A);if(!b(c,f)){++a.A;break}a.M=0;a.A=0;a.j=a.j.slice(e.length)}a.i.enabled&&a.i.stop()}}
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function mh(){xe.call(this,"event-logged",void 0)}
w(mh,xe);function hh(a,b){this.i=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new ch;L(this.h,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));ih(this,new ee)}
function ih(a,b){be(a.h,ee,1,b);var c=Ud(b,1);(null==c?c:c)||L(b,1,1);a.i||(b=sh(a),Ud(b,5)||L(b,5,a.locale));a.uach&&(b=sh(a),$d(b,$g,9)||be(b,$g,9,a.uach))}
function nh(a,b){Wd($d(a.h,ee,1))&&(a=th(a),L(a,1,b))}
function qh(a,b){Wd($d(a.h,ee,1))&&(a=th(a),L(a,2,Qd(b)))}
function uh(a,b){var c=void 0===c?ah:c;b(window,c).then(function(d){a.uach=d;d=sh(a);be(d,$g,9,a.uach);return!0}).catch(function(){return!1})}
function sh(a){a=$d(a.h,ee,1);var b=$d(a,Yd,11);b||(b=new Yd,be(a,Yd,11,b));return b}
function th(a){a=sh(a);var b=$d(a,Zg,10);b||(b=new Zg,L(b,2,Qd(!1)),be(a,Zg,10,b));return b}
function ph(a,b,c,d){c=void 0===c?0:c;d=void 0===d?0:d;if(Wd($d(a.h,ee,1))){var e=th(a);L(e,3,Rd(d))}a=a.h.clone();d=Date.now().toString();a=L(a,4,d);b=ce(a,bh,3,b);c&&L(b,14,c);return b}
;function vh(a,b,c){Qg(a.url,function(d){d=d.target;if(Yg(d)){try{var e=d.G?d.G.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Nc,a.timeoutMillis,a.withCredentials)}
;function wh(a,b){N.call(this);this.s=a;this.la=b;this.l="https://play.google.com/log?format=json&hasfast=true";this.m=!1;this.ba=vh;this.i=""}
Za(wh,N);function xh(a,b,c,d,e,f){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;N.call(this);f?a=f:(a=new wh(a,"0"),a.i=b,ve(this,a),""!=c&&(a.l=c),d&&(a.m=!0),e&&(a.j=e),b=new gh(a.s,a.W?a.W:yg,a.la,a.ba,a.l,a.m,!1,a.Da,void 0,void 0,a.ea?a.ea:void 0),ve(a,b),a.M&&ih(b.m,a.M),a.j&&(c=a.j,d=sh(b.m),L(d,7,c)),a.aa&&(b.V=a.aa),a.i&&(b.componentId=a.i),a.A&&((c=a.A)?(b.experimentIds||(b.experimentIds=new Ag),c=c.serialize(),L(b.experimentIds,4,c)):b.experimentIds&&
L(b.experimentIds,4,void 0,!1)),a.Ca&&(d=a.Ca,b.experimentIds||(b.experimentIds=new Ag),c=b.experimentIds,Od(c),null==d?d=void 0:d=Ed(d),Vd(c,2,d)),a.V&&(c=a.V,b.Da=!0,lh(b,c)),a.qa&&uh(b.m,a.qa),a=b);this.i=a}
w(xh,N);
xh.prototype.flush=function(a){var b=a||[];if(b.length){a=new lg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e,g=new kg;var h=L(g,1,f.i);var k=f;g=[];for(var l=0;l<k.h.length;l++)g.push(k.h[l].ub);if(null==g)g=L(h,3);else{k=G(g);if(!(k&4)){if(k&2||Object.isFrozen(g))g=Array.prototype.slice.call(g);for(l=0;l<g.length;l++)g[l]=g[l];Fd(g,k|5)}g=L(h,3,g)}h=[];k=[];l=v(f.sb.keys());for(var n=l.next();!n.done;n=l.next())k.push(n.value.split(","));for(l=0;l<k.length;l++){n=k[l];var p=f.l;for(var t=f.zc(n)||
[],r=[],x=0;x<t.length;x++){var y=t[x],z=y&&y.cd;y=new hg;switch(p){case 3:Zd(y,1,ig,Number(z));break;case 2:var I=y;z=Number(z);if(null!=z&&"number"!==typeof z)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof z+": "+z);Zd(I,2,ig,z)}r.push(y)}p=r;for(t=0;t<p.length;t++){r=p[t];x=new jg;r=be(x,hg,2,r);x=n;y=[];I=f;z=[];for(var K=0;K<I.h.length;K++)z.push(I.h[K].vb);I=z;for(z=0;z<I.length;z++){K=I[z];var H=x[z],J=new fg;switch(K){case 3:Zd(J,1,gg,String(H));break;
case 2:Zd(J,2,gg,Rd(Number(H)));break;case 1:Zd(J,3,gg,Qd("true"==H))}y.push(J)}ce(r,fg,1,y);h.push(r)}}ce(g,jg,4,h);c.push(g);e.clear()}ce(a,kg,1,c);b=this.i;a instanceof bh?b.log(a):(c=new bh,a=a.serialize(),a=L(c,8,a),b.log(a));this.i.flush()}};function yh(a){this.T=zh();this.m=new xh(1828);this.h=new Tf(this.m);this.s=new Zf(this.h);this.j=new $f(this.h);this.l=new ag(this.h);this.i=new Xf(this.h);this.Pa=cg(a)}
function zh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Ah(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Bh(a){function b(r,x){Promise.resolve().then(function(){var y;null!=(y=c.sa)&&y.s.record(zh()-y.T,y.Pa);g.resolve({Rd:r,Se:x})})}
var c=this;this.i=!1;var d=a.program;var e=a.je;if(a.Ce){var f;this.sa=null!=(f=a.sa)?f:new yh(e)}var g=new Ah;this.j=g.promise;if(!C[e]){var h;null!=(h=this.sa)&&Yf(h.i,h.Pa,1,"");var k;null!=(k=this.sa)&&k.h.pb()}else if(!C[e].a){var l;null!=(l=this.sa)&&Yf(l.i,l.Pa,2,"");var n;null!=(n=this.sa)&&n.h.pb()}try{this.l=v((0,C[e].a)(d,b,!0)).next().value,this.Re=g.promise.then(function(){})}catch(r){var p;
null!=(p=this.sa)&&Yf(p.i,p.Pa,4,r.message);var t;null!=(t=this.sa)&&t.h.pb();throw r;}}
Bh.prototype.snapshot=function(a){var b=this;if(this.i)throw Error("Already disposed");var c=zh(),d;null!=(d=this.sa)&&d.j.h.oc("/client_streamz/bg/fsc",d.Pa);return this.j.then(function(e){var f=e.Rd;return new Promise(function(g){f(function(h){var k;null!=(k=b.sa)&&k.l.record(zh()-c,k.Pa);g(h)},[a.dd,
a.Te])})})};
Bh.prototype.Dd=function(a){if(this.i)throw Error("Already disposed");var b=zh(),c;null!=(c=this.sa)&&c.j.h.oc("/client_streamz/bg/fsc",c.Pa);a=this.l([a.dd,a.Te]);var d;null!=(d=this.sa)&&d.l.record(zh()-b,d.Pa);return a};
Bh.prototype.dispose=function(){var a;null!=(a=this.sa)&&a.h.pb();this.i=!0;this.j.then(function(b){(b=b.Se)&&b()})};
Bh.prototype.h=function(){return this.i};var Ch=window;Bb("csi.gstatic.com");Bb("googleads.g.doubleclick.net");Bb("partner.googleadservices.com");Bb("pubads.g.doubleclick.net");Bb("securepubads.g.doubleclick.net");Bb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Dh;try{new URL("s://g"),Dh=!0}catch(a){Dh=!1}var Eh=Dh;function Fh(a){if(a instanceof Lb)a=Mb(a);else{b:if(Eh){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;var Gh={};function Hh(){}
function Ih(a){this.h=a}
w(Ih,Hh);Ih.prototype.toString=function(){return this.h};function Jh(a){var b="true".toString(),c=[new Ih(Kh[0].toLowerCase(),Gh)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof Ih)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Lh(){throw Error("unknown trace type");}
;function Mh(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function Nh(a,b){a.src=Fb(b);Mh(a)}
;(function(){return""}).toString().indexOf("`");function Oh(a){this.re=a}
function Ph(a){return new Oh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Qh=[Ph("data"),Ph("http"),Ph("https"),Ph("mailto"),Ph("ftp"),new Oh(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Rh(a){var b=Sh;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Th(){var a=[];Rh(function(b){a.push(b)});
return a}
var Sh={af:"allow-forms",bf:"allow-modals",cf:"allow-orientation-lock",df:"allow-pointer-lock",ef:"allow-popups",ff:"allow-popups-to-escape-sandbox",gf:"allow-presentation",hf:"allow-same-origin",jf:"allow-scripts",kf:"allow-top-navigation",lf:"allow-top-navigation-by-user-activation"},Uh=db(function(){return Th()});
function Vh(){var a=Wh(),b={};fb(Uh(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Wh(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Xh(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Yh=(new Date).getTime();var Zh="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ja(Zh),["client_dev_set_cookie"]);"undefined"!==typeof TextDecoder&&new TextDecoder;var $h="undefined"!==typeof TextEncoder?new TextEncoder:null,ai=$h?function(a){return $h.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function bi(a){$e.call(this);var b=this;this.A=this.j=0;this.Aa=null!=a?a:{ma:function(e,f){return setTimeout(e,f)},
Fa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return A(function(e){return e.yield(ci(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.A||di(this)}
w(bi,$e);function ei(){var a=fi;bi.h||(bi.h=new bi(a));return bi.h}
bi.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.Aa.Fa(this.A);delete bi.h};
bi.prototype.ta=function(){return this.i};
function di(a){a.A=a.Aa.ma(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.v(3):c.yield(ci(a),3):c.yield(ci(a),3);di(a);c.h=0})},3E4)}
function ci(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,xa(h,2,3),d&&(a.j=a.Aa.ma(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ca(h);a.s=void 0;a.j&&(a.Aa.Fa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?af(a,"networkstatus-online"):af(a,"networkstatus-offline"));c(g);Da(h);break;case 2:za(h),g=!1,h.v(3)}})})}
;function gi(){this.data_=[];this.h=-1}
gi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
gi.prototype.get=function(a){return!!this.data_[a]};
function hi(a){-1===a.h&&(a.h=ib(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function ii(a,b){this.h=a[C.Symbol.iterator]();this.i=b}
ii.prototype[Symbol.iterator]=function(){return this};
ii.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function ji(a,b){return new ii(a,b)}
;function ki(){this.blockSize=-1}
;function li(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.s=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Za(li,ki);li.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function mi(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
li.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)mi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){mi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){mi(this,e);f=0;break}}this.i=f;this.l+=b}};
li.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;mi(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function ni(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function oi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function pi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:ni(a).match(/\S+/g)||[],b=0<=eb(a,b));return b}
function qi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):pi(a,"inverted-hdpi")&&oi(a,Array.prototype.filter.call(a.classList?a.classList:ni(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function ri(){}
ri.prototype.next=function(){return si};
var si={done:!0,value:void 0};function ti(a){return{value:a,done:!1}}
ri.prototype.Ea=function(){return this};function ui(a){if(a instanceof vi||a instanceof wi||a instanceof xi)return a;if("function"==typeof a.next)return new vi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new vi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ea)return new vi(function(){return a.Ea()});
throw Error("Not an iterator or iterable.");}
function vi(a){this.i=a}
vi.prototype.Ea=function(){return new wi(this.i())};
vi.prototype[Symbol.iterator]=function(){return new xi(this.i())};
vi.prototype.h=function(){return new xi(this.i())};
function wi(a){this.i=a}
w(wi,ri);wi.prototype.next=function(){return this.i.next()};
wi.prototype[Symbol.iterator]=function(){return new xi(this.i)};
wi.prototype.h=function(){return new xi(this.i)};
function xi(a){vi.call(this,function(){return a});
this.j=a}
w(xi,vi);xi.prototype.next=function(){return this.j.next()};function yi(a,b){this.i={};this.h=[];this.Xa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof yi)for(c=a.Cc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=yi.prototype;m.Cc=function(){zi(this);return this.h.concat()};
m.has=function(a){return Ai(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Bi;zi(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Bi(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.Xa=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return Ai(this.i,a)?(delete this.i[a],--this.size,this.Xa++,this.h.length>2*this.size&&zi(this),!0):!1};
function zi(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Ai(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Ai(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Ai(this.i,a)?this.i[a]:b};
m.set=function(a,b){Ai(this.i,a)||(this.size+=1,this.h.push(a),this.Xa++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.Cc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new yi(this)};
m.keys=function(){return ui(this.Ea(!0)).h()};
m.values=function(){return ui(this.Ea(!1)).h()};
m.entries=function(){var a=this;return ji(this.keys(),function(b){return[b,a.get(b)]})};
m.Ea=function(a){zi(this);var b=0,c=this.Xa,d=this,e=new ri;e.next=function(){if(c!=d.Xa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return si;var f=d.h[b++];return ti(a?f:d.i[f])};
return e};
function Ai(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function O(a){N.call(this);this.s=1;this.l=[];this.m=0;this.i=[];this.j={};this.A=!!a}
Za(O,N);m=O.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.s;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.s=e+3;d.push(e);return e};
function Ci(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Hb(b)}}
m.Hb=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=function(){}):(c&&kb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.cb=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Di(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.Hb(c)}}return 0!=e}return!1};
function Di(a,b,c){tf(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.Hb,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.K=function(){O.ya.K.call(this);this.clear();this.l.length=0};function Ei(a){this.h=a}
Ei.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new Cg).serialize(b))};
Ei.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ei.prototype.remove=function(a){this.h.remove(a)};function Fi(a){this.h=a}
Za(Fi,Ei);function Gi(a){this.data=a}
function Hi(a){return void 0===a||a instanceof Gi?a:new Gi(a)}
Fi.prototype.set=function(a,b){Fi.ya.set.call(this,a,Hi(b))};
Fi.prototype.i=function(a){a=Fi.ya.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Fi.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ii(a){this.h=a}
Za(Ii,Fi);Ii.prototype.set=function(a,b,c){if(b=Hi(b)){if(c){if(c<Date.now()){Ii.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Ii.ya.set.call(this,a,b)};
Ii.prototype.i=function(a){var b=Ii.ya.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Ii.prototype.remove.call(this,a);else return b}};function Ji(){}
;function Ki(){}
Za(Ki,Ji);Ki.prototype[Symbol.iterator]=function(){return ui(this.Ea(!0)).h()};
Ki.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Li(a){this.h=a}
Za(Li,Ki);m=Li.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.Ea=function(a){var b=0,c=this.h,d=new ri;d.next=function(){if(b>=c.length)return si;var e=c.key(b++);if(a)return ti(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return ti(e)};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Mi(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Za(Mi,Li);function Ni(a,b){this.i=a;this.h=null;var c;if(c=Uc)c=!(9<=Number(hd));if(c){Oi||(Oi=new yi);this.h=Oi.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Oi.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Za(Ni,Ki);var Pi={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Oi=null;function Qi(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Pi[b]})}
m=Ni.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(Qi(a),b);Ri(this)};
m.get=function(a){a=this.h.getAttribute(Qi(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(Qi(a));Ri(this)};
m.Ea=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new ri;d.next=function(){if(b>=c.length)return si;var e=c[b++];if(a)return ti(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return ti(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ri(this)};
function Ri(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Si(a,b){this.i=a;this.h=b+"::"}
Za(Si,Ki);Si.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Si.prototype.get=function(a){return this.i.get(this.h+a)};
Si.prototype.remove=function(a){this.i.remove(this.h+a)};
Si.prototype.Ea=function(a){var b=this.i[Symbol.iterator](),c=this,d=new ri;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return ti(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var P={},Ti="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;P.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
P.Qc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Ui={rb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
gd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Vi={rb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
gd:function(a){return[].concat.apply([],a)}};
P.Qe=function(){Ti?(P.ob=Uint8Array,P.Ia=Uint16Array,P.Md=Int32Array,P.assign(P,Ui)):(P.ob=Array,P.Ia=Array,P.Md=Array,P.assign(P,Vi))};
P.Qe();var Wi=!0;try{new Uint8Array(1)}catch(a){Wi=!1}
function Xi(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new P.ob(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Yi={};Yi=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Zi={},$i,aj=[],bj=0;256>bj;bj++){$i=bj;for(var cj=0;8>cj;cj++)$i=$i&1?3988292384^$i>>>1:$i>>>1;aj[bj]=$i}Zi=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^aj[(a^b[d])&255];return a^-1};var dj={};dj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function ej(a){for(var b=a.length;0<=--b;)a[b]=0}
var fj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],gj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],hj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ij=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],jj=Array(576);ej(jj);var kj=Array(60);ej(kj);var lj=Array(512);ej(lj);var mj=Array(256);ej(mj);var nj=Array(29);ej(nj);var oj=Array(30);ej(oj);function pj(a,b,c,d,e){this.Ed=a;this.ce=b;this.be=c;this.Xd=d;this.we=e;this.ld=a&&a.length}
var qj,rj,sj;function tj(a,b){this.ed=a;this.Ab=0;this.Wa=b}
function uj(a,b){a.S[a.pending++]=b&255;a.S[a.pending++]=b>>>8&255}
function vj(a,b,c){a.da>16-c?(a.ja|=b<<a.da&65535,uj(a,a.ja),a.ja=b>>16-a.da,a.da+=c-16):(a.ja|=b<<a.da&65535,a.da+=c)}
function wj(a,b,c){vj(a,c[2*b],c[2*b+1])}
function xj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function yj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=xj(d[e]++,e))}
function zj(a){var b;for(b=0;286>b;b++)a.na[2*b]=0;for(b=0;30>b;b++)a.eb[2*b]=0;for(b=0;19>b;b++)a.fa[2*b]=0;a.na[512]=1;a.Oa=a.Db=0;a.wa=a.matches=0}
function Aj(a){8<a.da?uj(a,a.ja):0<a.da&&(a.S[a.pending++]=a.ja);a.ja=0;a.da=0}
function Bj(a,b,c){Aj(a);uj(a,c);uj(a,~c);P.rb(a.S,a.window,b,c,a.pending);a.pending+=c}
function Cj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Dj(a,b,c){for(var d=a.U[c],e=c<<1;e<=a.Ma;){e<a.Ma&&Cj(b,a.U[e+1],a.U[e],a.depth)&&e++;if(Cj(b,d,a.U[e],a.depth))break;a.U[c]=a.U[e];c=e;e<<=1}a.U[c]=d}
function Ej(a,b,c){var d=0;if(0!==a.wa){do{var e=a.S[a.Kb+2*d]<<8|a.S[a.Kb+2*d+1];var f=a.S[a.Gc+d];d++;if(0===e)wj(a,f,b);else{var g=mj[f];wj(a,g+256+1,b);var h=fj[g];0!==h&&(f-=nj[g],vj(a,f,h));e--;g=256>e?lj[e]:lj[256+(e>>>7)];wj(a,g,c);h=gj[g];0!==h&&(e-=oj[g],vj(a,e,h))}}while(d<a.wa)}wj(a,256,b)}
function Fj(a,b){var c=b.ed,d=b.Wa.Ed,e=b.Wa.ld,f=b.Wa.Xd,g,h=-1;a.Ma=0;a.xb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.U[++a.Ma]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Ma;){var k=a.U[++a.Ma]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Oa--;e&&(a.Db-=d[2*k+1])}b.Ab=h;for(g=a.Ma>>1;1<=g;g--)Dj(a,c,g);k=f;do g=a.U[1],a.U[1]=a.U[a.Ma--],Dj(a,c,1),d=a.U[1],a.U[--a.xb]=g,a.U[--a.xb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.U[1]=k++,Dj(a,c,1);while(2<=a.Ma);a.U[--a.xb]=
a.U[1];g=b.ed;k=b.Ab;d=b.Wa.Ed;e=b.Wa.ld;f=b.Wa.ce;var l=b.Wa.be,n=b.Wa.we,p,t=0;for(p=0;15>=p;p++)a.Ja[p]=0;g[2*a.U[a.xb]+1]=0;for(b=a.xb+1;573>b;b++){var r=a.U[b];p=g[2*g[2*r+1]+1]+1;p>n&&(p=n,t++);g[2*r+1]=p;if(!(r>k)){a.Ja[p]++;var x=0;r>=l&&(x=f[r-l]);var y=g[2*r];a.Oa+=y*(p+x);e&&(a.Db+=y*(d[2*r+1]+x))}}if(0!==t){do{for(p=n-1;0===a.Ja[p];)p--;a.Ja[p]--;a.Ja[p+1]+=2;a.Ja[n]--;t-=2}while(0<t);for(p=n;0!==p;p--)for(r=a.Ja[p];0!==r;)d=a.U[--b],d>k||(g[2*d+1]!==p&&(a.Oa+=(p-g[2*d+1])*g[2*d],g[2*
d+1]=p),r--)}yj(c,h,a.Ja)}
function Gj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.fa[2*l]+=g:0!==l?(l!==e&&a.fa[2*l]++,a.fa[32]++):10>=g?a.fa[34]++:a.fa[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Hj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do wj(a,l,a.fa);while(0!==--g)}else 0!==l?(l!==e&&(wj(a,l,a.fa),g--),wj(a,16,a.fa),vj(a,g-3,2)):10>=g?(wj(a,17,a.fa),vj(a,g-3,3)):(wj(a,18,a.fa),vj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Ij(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.na[2*c])return 0;if(0!==a.na[18]||0!==a.na[20]||0!==a.na[26])return 1;for(c=32;256>c;c++)if(0!==a.na[2*c])return 1;return 0}
var Jj=!1;function Kj(a,b,c){a.S[a.Kb+2*a.wa]=b>>>8&255;a.S[a.Kb+2*a.wa+1]=b&255;a.S[a.Gc+a.wa]=c&255;a.wa++;0===b?a.na[2*c]++:(a.matches++,b--,a.na[2*(mj[c]+256+1)]++,a.eb[2*(256>b?lj[b]:lj[256+(b>>>7)])]++);return a.wa===a.Mb-1}
;function Lj(a,b){a.msg=dj[b];return b}
function Mj(a){for(var b=a.length;0<=--b;)a[b]=0}
function Nj(a){var b=a.state,c=b.pending;c>a.I&&(c=a.I);0!==c&&(P.rb(a.output,b.S,b.Nb,c,a.Bb),a.Bb+=c,b.Nb+=c,a.Rc+=c,a.I-=c,b.pending-=c,0===b.pending&&(b.Nb=0))}
function Oj(a,b){var c=0<=a.ra?a.ra:-1,d=a.o-a.ra,e=0;if(0<a.level){2===a.F.wc&&(a.F.wc=Ij(a));Fj(a,a.ec);Fj(a,a.Zb);Gj(a,a.na,a.ec.Ab);Gj(a,a.eb,a.Zb.Ab);Fj(a,a.Yc);for(e=18;3<=e&&0===a.fa[2*ij[e]+1];e--);a.Oa+=3*(e+1)+14;var f=a.Oa+3+7>>>3;var g=a.Db+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)vj(a,b?1:0,3),Bj(a,c,d);else if(4===a.strategy||g===f)vj(a,2+(b?1:0),3),Ej(a,jj,kj);else{vj(a,4+(b?1:0),3);c=a.ec.Ab+1;d=a.Zb.Ab+1;e+=1;vj(a,c-257,5);vj(a,d-1,5);vj(a,e-4,4);for(f=0;f<e;f++)vj(a,a.fa[2*
ij[f]+1],3);Hj(a,a.na,c-1);Hj(a,a.eb,d-1);Ej(a,a.na,a.eb)}zj(a);b&&Aj(a);a.ra=a.o;Nj(a.F)}
function R(a,b){a.S[a.pending++]=b}
function Pj(a,b){a.S[a.pending++]=b>>>8&255;a.S[a.pending++]=b&255}
function Qj(a,b){var c=a.pd,d=a.o,e=a.va,f=a.rd,g=a.o>a.ha-262?a.o-(a.ha-262):0,h=a.window,k=a.Ya,l=a.Ha,n=a.o+258,p=h[d+e-1],t=h[d+e];a.va>=a.kd&&(c>>=2);f>a.u&&(f=a.u);do{var r=b;if(h[r+e]===t&&h[r+e-1]===p&&h[r]===h[d]&&h[++r]===h[d+1]){d+=2;for(r++;h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&d<n;);r=258-(n-d);d=n-258;if(r>e){a.zb=b;e=r;if(r>=f)break;p=h[d+e-1];t=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function Rj(a){var b=a.ha,c;do{var d=a.Kd-a.u-a.o;if(a.o>=b+(b-262)){P.rb(a.window,a.window,b,b,0);a.zb-=b;a.o-=b;a.ra-=b;var e=c=a.dc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ha[--e],a.Ha[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.F.ia)break;e=a.F;c=a.window;f=a.o+a.u;var g=e.ia;g>d&&(g=d);0===g?c=0:(e.ia-=g,P.rb(c,e.input,e.hb,g,f),1===e.state.wrap?e.D=Yi(e.D,c,g,f):2===e.state.wrap&&(e.D=Zi(e.D,c,g,f)),e.hb+=g,e.lb+=g,c=g);a.u+=c;if(3<=a.u+a.oa)for(d=a.o-a.oa,a.H=a.window[d],
a.H=(a.H<<a.La^a.window[d+1])&a.Ka;a.oa&&!(a.H=(a.H<<a.La^a.window[d+3-1])&a.Ka,a.Ha[d&a.Ya]=a.head[a.H],a.head[a.H]=d,d++,a.oa--,3>a.u+a.oa););}while(262>a.u&&0!==a.F.ia)}
function Sj(a,b){for(var c;;){if(262>a.u){Rj(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.H=(a.H<<a.La^a.window[a.o+3-1])&a.Ka,c=a.Ha[a.o&a.Ya]=a.head[a.H],a.head[a.H]=a.o);0!==c&&a.o-c<=a.ha-262&&(a.J=Qj(a,c));if(3<=a.J)if(c=Kj(a,a.o-a.zb,a.J-3),a.u-=a.J,a.J<=a.Hc&&3<=a.u){a.J--;do a.o++,a.H=(a.H<<a.La^a.window[a.o+3-1])&a.Ka,a.Ha[a.o&a.Ya]=a.head[a.H],a.head[a.H]=a.o;while(0!==--a.J);a.o++}else a.o+=a.J,a.J=0,a.H=a.window[a.o],a.H=(a.H<<a.La^a.window[a.o+1])&a.Ka;else c=Kj(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(Oj(a,!1),0===a.F.I))return 1}a.oa=2>a.o?a.o:2;return 4===b?(Oj(a,!0),0===a.F.I?3:4):a.wa&&(Oj(a,!1),0===a.F.I)?1:2}
function Tj(a,b){for(var c,d;;){if(262>a.u){Rj(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.H=(a.H<<a.La^a.window[a.o+3-1])&a.Ka,c=a.Ha[a.o&a.Ya]=a.head[a.H],a.head[a.H]=a.o);a.va=a.J;a.ud=a.zb;a.J=2;0!==c&&a.va<a.Hc&&a.o-c<=a.ha-262&&(a.J=Qj(a,c),5>=a.J&&(1===a.strategy||3===a.J&&4096<a.o-a.zb)&&(a.J=2));if(3<=a.va&&a.J<=a.va){d=a.o+a.u-3;c=Kj(a,a.o-1-a.ud,a.va-3);a.u-=a.va-1;a.va-=2;do++a.o<=d&&(a.H=(a.H<<a.La^a.window[a.o+3-1])&a.Ka,a.Ha[a.o&a.Ya]=a.head[a.H],a.head[a.H]=a.o);
while(0!==--a.va);a.fb=0;a.J=2;a.o++;if(c&&(Oj(a,!1),0===a.F.I))return 1}else if(a.fb){if((c=Kj(a,0,a.window[a.o-1]))&&Oj(a,!1),a.o++,a.u--,0===a.F.I)return 1}else a.fb=1,a.o++,a.u--}a.fb&&(Kj(a,0,a.window[a.o-1]),a.fb=0);a.oa=2>a.o?a.o:2;return 4===b?(Oj(a,!0),0===a.F.I?3:4):a.wa&&(Oj(a,!1),0===a.F.I)?1:2}
function Uj(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){Rj(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.J=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.J=258-(e-d);a.J>a.u&&(a.J=a.u)}3<=a.J?(c=Kj(a,1,a.J-3),a.u-=a.J,a.o+=a.J,a.J=0):(c=Kj(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(Oj(a,!1),0===a.F.I))return 1}a.oa=0;return 4===b?(Oj(a,!0),0===a.F.I?3:4):
a.wa&&(Oj(a,!1),0===a.F.I)?1:2}
function Vj(a,b){for(var c;;){if(0===a.u&&(Rj(a),0===a.u)){if(0===b)return 1;break}a.J=0;c=Kj(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(Oj(a,!1),0===a.F.I))return 1}a.oa=0;return 4===b?(Oj(a,!0),0===a.F.I?3:4):a.wa&&(Oj(a,!1),0===a.F.I)?1:2}
function Wj(a,b,c,d,e){this.ke=a;this.ue=b;this.ye=c;this.te=d;this.ee=e}
var Xj;Xj=[new Wj(0,0,0,0,function(a,b){var c=65535;for(c>a.xa-5&&(c=a.xa-5);;){if(1>=a.u){Rj(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.ra+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,Oj(a,!1),0===a.F.I)return 1;if(a.o-a.ra>=a.ha-262&&(Oj(a,!1),0===a.F.I))return 1}a.oa=0;if(4===b)return Oj(a,!0),0===a.F.I?3:4;a.o>a.ra&&Oj(a,!1);return 1}),
new Wj(4,4,8,4,Sj),new Wj(4,5,16,8,Sj),new Wj(4,6,32,32,Sj),new Wj(4,4,16,16,Tj),new Wj(8,16,32,32,Tj),new Wj(8,16,128,128,Tj),new Wj(8,32,128,256,Tj),new Wj(32,128,258,1024,Tj),new Wj(32,258,258,4096,Tj)];
function Yj(){this.F=null;this.status=0;this.S=null;this.wrap=this.pending=this.Nb=this.xa=0;this.B=null;this.za=0;this.method=8;this.yb=-1;this.Ya=this.Tc=this.ha=0;this.window=null;this.Kd=0;this.head=this.Ha=null;this.rd=this.kd=this.strategy=this.level=this.Hc=this.pd=this.va=this.u=this.zb=this.o=this.fb=this.ud=this.J=this.ra=this.La=this.Ka=this.Dc=this.dc=this.H=0;this.na=new P.Ia(1146);this.eb=new P.Ia(122);this.fa=new P.Ia(78);Mj(this.na);Mj(this.eb);Mj(this.fa);this.Yc=this.Zb=this.ec=
null;this.Ja=new P.Ia(16);this.U=new P.Ia(573);Mj(this.U);this.xb=this.Ma=0;this.depth=new P.Ia(573);Mj(this.depth);this.da=this.ja=this.oa=this.matches=this.Db=this.Oa=this.Kb=this.wa=this.Mb=this.Gc=0}
function Zj(a,b){if(!a||!a.state||5<b||0>b)return a?Lj(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.ia||666===c.status&&4!==b)return Lj(a,0===a.I?-5:-2);c.F=a;var d=c.yb;c.yb=b;if(42===c.status)if(2===c.wrap)a.D=0,R(c,31),R(c,139),R(c,8),c.B?(R(c,(c.B.text?1:0)+(c.B.Ta?2:0)+(c.B.Sa?4:0)+(c.B.name?8:0)+(c.B.comment?16:0)),R(c,c.B.time&255),R(c,c.B.time>>8&255),R(c,c.B.time>>16&255),R(c,c.B.time>>24&255),R(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),R(c,c.B.os&255),c.B.Sa&&c.B.Sa.length&&
(R(c,c.B.Sa.length&255),R(c,c.B.Sa.length>>8&255)),c.B.Ta&&(a.D=Zi(a.D,c.S,c.pending,0)),c.za=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),R(c,3),c.status=113);else{var e=8+(c.Tc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;Pj(c,e+(31-e%31));0!==c.o&&(Pj(c,a.D>>>16),Pj(c,a.D&65535));a.D=1}if(69===c.status)if(c.B.Sa){for(e=c.pending;c.za<(c.B.Sa.length&65535)&&(c.pending!==c.xa||(c.B.Ta&&
c.pending>e&&(a.D=Zi(a.D,c.S,c.pending-e,e)),Nj(a),e=c.pending,c.pending!==c.xa));)R(c,c.B.Sa[c.za]&255),c.za++;c.B.Ta&&c.pending>e&&(a.D=Zi(a.D,c.S,c.pending-e,e));c.za===c.B.Sa.length&&(c.za=0,c.status=73)}else c.status=73;if(73===c.status)if(c.B.name){e=c.pending;do{if(c.pending===c.xa&&(c.B.Ta&&c.pending>e&&(a.D=Zi(a.D,c.S,c.pending-e,e)),Nj(a),e=c.pending,c.pending===c.xa)){var f=1;break}f=c.za<c.B.name.length?c.B.name.charCodeAt(c.za++)&255:0;R(c,f)}while(0!==f);c.B.Ta&&c.pending>e&&(a.D=Zi(a.D,
c.S,c.pending-e,e));0===f&&(c.za=0,c.status=91)}else c.status=91;if(91===c.status)if(c.B.comment){e=c.pending;do{if(c.pending===c.xa&&(c.B.Ta&&c.pending>e&&(a.D=Zi(a.D,c.S,c.pending-e,e)),Nj(a),e=c.pending,c.pending===c.xa)){f=1;break}f=c.za<c.B.comment.length?c.B.comment.charCodeAt(c.za++)&255:0;R(c,f)}while(0!==f);c.B.Ta&&c.pending>e&&(a.D=Zi(a.D,c.S,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.B.Ta?(c.pending+2>c.xa&&Nj(a),c.pending+2<=c.xa&&(R(c,a.D&255),R(c,a.D>>
8&255),a.D=0,c.status=113)):c.status=113);if(0!==c.pending){if(Nj(a),0===a.I)return c.yb=-1,0}else if(0===a.ia&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Lj(a,-5);if(666===c.status&&0!==a.ia)return Lj(a,-5);if(0!==a.ia||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?Vj(c,b):3===c.strategy?Uj(c,b):Xj[c.level].ee(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.I&&(c.yb=-1),0;if(2===d&&(1===b?(vj(c,2,3),wj(c,256,jj),16===c.da?(uj(c,c.ja),c.ja=0,c.da=0):8<=c.da&&(c.S[c.pending++]=
c.ja&255,c.ja>>=8,c.da-=8)):5!==b&&(vj(c,0,3),Bj(c,0,0),3===b&&(Mj(c.head),0===c.u&&(c.o=0,c.ra=0,c.oa=0))),Nj(a),0===a.I))return c.yb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(R(c,a.D&255),R(c,a.D>>8&255),R(c,a.D>>16&255),R(c,a.D>>24&255),R(c,a.lb&255),R(c,a.lb>>8&255),R(c,a.lb>>16&255),R(c,a.lb>>24&255)):(Pj(c,a.D>>>16),Pj(c,a.D&65535));Nj(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var ak={};ak=function(){this.input=null;this.lb=this.ia=this.hb=0;this.output=null;this.Rc=this.I=this.Bb=0;this.msg="";this.state=null;this.wc=2;this.D=0};var bk=Object.prototype.toString;
function ck(a){if(!(this instanceof ck))return new ck(a);a=this.options=P.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.F=new ak;this.F.I=0;var b=this.F;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Lj(b,-2);else{8===e&&(e=9);var k=new Yj;b.state=k;k.F=b;k.wrap=h;k.B=null;k.Tc=e;k.ha=1<<k.Tc;k.Ya=k.ha-1;k.Dc=f+7;k.dc=1<<k.Dc;k.Ka=k.dc-1;k.La=~~((k.Dc+3-1)/3);k.window=new P.ob(2*k.ha);k.head=new P.Ia(k.dc);k.Ha=new P.Ia(k.ha);k.Mb=1<<f+6;k.xa=4*k.Mb;k.S=new P.ob(k.xa);k.Kb=1*k.Mb;k.Gc=3*k.Mb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.lb=b.Rc=0;b.wc=2;c=b.state;c.pending=0;c.Nb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.D=2===c.wrap?
0:1;c.yb=0;if(!Jj){d=Array(16);for(f=g=0;28>f;f++)for(nj[f]=g,e=0;e<1<<fj[f];e++)mj[g++]=f;mj[g-1]=f;for(f=g=0;16>f;f++)for(oj[f]=g,e=0;e<1<<gj[f];e++)lj[g++]=f;for(g>>=7;30>f;f++)for(oj[f]=g<<7,e=0;e<1<<gj[f]-7;e++)lj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)jj[2*e+1]=8,e++,d[8]++;for(;255>=e;)jj[2*e+1]=9,e++,d[9]++;for(;279>=e;)jj[2*e+1]=7,e++,d[7]++;for(;287>=e;)jj[2*e+1]=8,e++,d[8]++;yj(jj,287,d);for(e=0;30>e;e++)kj[2*e+1]=5,kj[2*e]=xj(e,5);qj=new pj(jj,fj,257,286,15);rj=new pj(kj,
gj,0,30,15);sj=new pj([],hj,0,19,7);Jj=!0}c.ec=new tj(c.na,qj);c.Zb=new tj(c.eb,rj);c.Yc=new tj(c.fa,sj);c.ja=0;c.da=0;zj(c);c=0}else c=Lj(b,-2);0===c&&(b=b.state,b.Kd=2*b.ha,Mj(b.head),b.Hc=Xj[b.level].ue,b.kd=Xj[b.level].ke,b.rd=Xj[b.level].ye,b.pd=Xj[b.level].te,b.o=0,b.ra=0,b.u=0,b.oa=0,b.J=b.va=2,b.fb=0,b.H=0);b=c}}else b=-2;if(0!==b)throw Error(dj[b]);a.header&&(b=this.F)&&b.state&&2===b.state.wrap&&(b.state.B=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=Xi(a.dictionary):
"[object ArrayBuffer]"===bk.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.F;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.D=Yi(a.D,f,g,0));l.wrap=0;g>=l.ha&&(0===b&&(Mj(l.head),l.o=0,l.ra=0,l.oa=0),c=new P.ob(l.ha),P.rb(c,f,g-l.ha,l.ha,0),f=c,g=l.ha);c=a.ia;d=a.hb;e=a.input;a.ia=g;a.hb=0;a.input=f;for(Rj(l);3<=l.u;){f=l.o;g=l.u-2;do l.H=(l.H<<l.La^l.window[f+3-1])&l.Ka,l.Ha[f&l.Ya]=l.head[l.H],l.head[l.H]=f,f++;while(--g);
l.o=f;l.u=2;Rj(l)}l.o+=l.u;l.ra=l.o;l.oa=l.u;l.u=0;l.J=l.va=2;l.fb=0;a.hb=d;a.input=e;a.ia=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(dj[b]);this.rf=!0}}
ck.prototype.push=function(a,b){var c=this.F,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=Xi(a):"[object ArrayBuffer]"===bk.call(a)?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.ia=c.input.length;do{0===c.I&&(c.output=new P.ob(d),c.Bb=0,c.I=d);a=Zj(c,e);if(1!==a&&0!==a)return dk(this,a),this.ended=!0,!1;if(0===c.I||0===c.ia&&(4===e||2===e))if("string"===this.options.to){var f=P.Qc(c.output,c.Bb);b=f;f=f.length;if(65537>f&&(b.subarray&&Wi||!b.subarray))b=
String.fromCharCode.apply(null,P.Qc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=P.Qc(c.output,c.Bb),this.chunks.push(b)}while((0<c.ia||0===c.I)&&1!==a);if(4===e)return(c=this.F)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Lj(c,-2):(c.state=null,a=113===d?Lj(c,-3):0)):a=-2,dk(this,a),this.ended=!0,0===a;2===e&&(dk(this,0),c.I=0);return!0};
function dk(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):P.gd(a.chunks));a.chunks=[];a.err=b;a.msg=a.F.msg}
function ek(a,b){b=b||{};b.gzip=!0;b=new ck(b);b.push(a,!0);if(b.err)throw b.msg||dj[b.err];return b.result}
;function fk(a){return Hb(null===a?"null":void 0===a?"undefined":a)}
;function gk(a){this.name=a}
;var hk=new gk("rawColdConfigGroup");var ik=new gk("rawHotConfigGroup");var jk=new gk("commandExecutorCommand");function kk(a){M.call(this,a)}
w(kk,M);var lk=new gk("continuationCommand");var mk=new gk("signalAction");var nk=new gk("webCommandMetadata");var ok=new gk("signalServiceEndpoint");var pk={qf:"EMBEDDED_PLAYER_MODE_UNKNOWN",mf:"EMBEDDED_PLAYER_MODE_DEFAULT",pf:"EMBEDDED_PLAYER_MODE_PFP",nf:"EMBEDDED_PLAYER_MODE_PFL"};var qk=new gk("feedbackEndpoint");function rk(a){M.call(this,a)}
w(rk,M);var sk=new gk("webPlayerShareEntityServiceEndpoint");var tk=new gk("playlistEditEndpoint");var uk=new gk("modifyChannelNotificationPreferenceEndpoint");var vk=new gk("unsubscribeEndpoint");var wk=new gk("subscribeEndpoint");function xk(){var a=yk;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function zk(a){D("yt.ads.biscotti.lastId_",a)}
;function Ak(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Bk=C.window,Ck,Dk,Ek=(null==Bk?void 0:null==(Ck=Bk.yt)?void 0:Ck.config_)||(null==Bk?void 0:null==(Dk=Bk.ytcfg)?void 0:Dk.data_)||{};D("yt.config_",Ek);function Fk(){Ak(Ek,arguments)}
function S(a,b){return a in Ek?Ek[a]:b}
;var Gk=[];function Hk(a){Gk.forEach(function(b){return b(a)})}
function Ik(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Jk(b)}}:a}
function Jk(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Fk("ERRORS",b));Hk(a)}
function Kk(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Fk("ERRORS",f))}
;var Lk=/^[\w.]*$/,Mk={q:!0,search_query:!0};function Nk(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Ok(f[0]||""),h=Ok(f[1]||"");g in c?Array.isArray(c[g])?lb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(Nk);k.args=[{key:l,value:f[1],query:a,method:Pk==n?"unchanged":n}];Mk.hasOwnProperty(l)||Kk(k)}}return c}
var Pk=String(Nk);function Qk(a){var b=[];mb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];fb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Rk(a){"?"==a.charAt(0)&&(a=a.substr(1));return Nk(a,"&")}
function Sk(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Rk(1<a.length?a[1]:a[0])):{}}
function Tk(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Rk(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Dc(a,e)+d}
function Uk(a){if(!b)var b=window.location.href;var c=uc(1,a),d=vc(a);c&&d?(a=a.match(sc),b=b.match(sc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?vc(b)==d&&(Number(uc(4,b))||null)==(Number(uc(4,a))||null):!0;return a}
function Ok(a){return a&&a.match(Lk)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Vk(a){var b=Wk;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Yh;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Aa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Ch:g;try{var h=g.history.length}catch(Aa){h=0}e.u_his=h;var k;e.u_h=null==(k=Ch.screen)?void 0:k.height;var l;e.u_w=null==(l=Ch.screen)?void 0:l.width;var n;e.u_ah=null==(n=Ch.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=Ch.screen)?void 0:p.availWidth;var t;e.u_cd=null==(t=Ch.screen)?void 0:t.colorDepth}catch(Aa){}h=b.h;try{var r=h.screenX;var x=h.screenY}catch(Aa){}try{var y=h.outerWidth;var z=h.outerHeight}catch(Aa){}try{var I=h.innerWidth;var K=h.innerHeight}catch(Aa){}try{var H=h.screenLeft;var J=h.screenTop}catch(Aa){}try{I=h.innerWidth,K=h.innerHeight}catch(Aa){}try{var T=h.screen.availWidth;var aa=h.screen.availTop}catch(Aa){}r=[H,J,r,x,T,aa,y,z,I,K];try{var Ga=(b.h.top||window).document,oa="CSS1Compat"==
Ga.compatMode?Ga.documentElement:Ga.body;var Ka=(new gf(oa.clientWidth,oa.clientHeight)).round()}catch(Aa){Ka=new gf(-12245933,-12245933)}Ga=Ka;Ka={};var Ba=void 0===Ba?C:Ba;oa=new gi;"SVGElement"in Ba&&"createElementNS"in Ba.document&&oa.set(0);x=Vh();x["allow-top-navigation-by-user-activation"]&&oa.set(1);x["allow-popups-to-escape-sandbox"]&&oa.set(2);Ba.crypto&&Ba.crypto.subtle&&oa.set(3);"TextDecoder"in Ba&&"TextEncoder"in Ba&&oa.set(4);Ba=hi(oa);Ka.bc=Ba;Ka.bih=Ga.height;Ka.biw=Ga.width;Ka.brdim=
r.join();b=b.i;b=(Ka.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Ka.wgl=!!Ch.WebGLRenderingContext,Ka);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Wk=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return Qk(Vk(a))});Date.now();navigator.userAgent.indexOf(" (CrKey ");function U(a){a=Xk(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Yk(a,b){a=Xk(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Xk(a){var b=S("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:S("EXPERIMENT_FLAGS",{})[a]}
function Zk(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});var e=v(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var $k="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function al(){if(!$k)return null;var a=$k();return"open"in a?a:null}
function bl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function cl(a,b){"function"===typeof a&&(a=Ik(a));return window.setTimeout(a,b)}
;var dl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},el="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ja(Zh)),fl=!1;
function gl(a,b){b=void 0===b?{}:b;var c=Uk(a),d=U("web_ajax_ignore_global_headers_if_set"),e;for(e in dl){var f=S(dl[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=S("VISITOR_DATA"));!f||!c&&vc(a)||d&&void 0!==b[e]||(!U("move_vss_away_from_login_info_cookie")||"TVHTML5_UNPLUGGED"===S("INNERTUBE_CLIENT_NAME"))&&g||(b[e]=f)}U("move_vss_away_from_login_info_cookie")&&c&&S("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==S("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");
"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!vc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!vc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&vc(a)||(b["X-YouTube-Ad-Signals"]=Qk(Vk()));return b}
function hl(a){var b=window.location.search,c=vc(a);U("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Uk(a)&&(c=document.location.hostname);var d=tc(uc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Rk(b),f={};fb(el,function(g){e[g]&&(f[g]=e[g])});
return Tk(a,f||{},!1)}
function il(a,b){var c=b.format||"JSON";a=jl(a,b);var d=kl(a,b),e=!1,f=ll(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=bl(k),n=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)n=ml(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,
k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=cl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function jl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Tk(a,b||{},!0);return a}
function kl(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||vc(a)&&!b.withCredentials&&vc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(U("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Rk(e),wb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):Bc(e));f=e||f&&!pb(f);!fl&&f&&"POST"!=b.method&&(fl=!0,Jk(Error("AJAX request with postData should use POST")));return e}
function ml(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Kk(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?nl(a):null)e={},fb(a.getElementsByTagName("*"),function(g){e[g.tagName]=ol(g)})}d&&pl(e);
return e}
function pl(a){if(Ra(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=yb();d=e?e.createHTML(d):d;a[c]=new lc(d)}else pl(a[b])}}
function nl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ol(a){var b="";fb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ql(a,b){b.method="POST";b.postParams||(b.postParams={});return il(a,b)}
function ll(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Ik(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=al();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;U("debug_forward_web_query_parameters")&&(a=hl(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=gl(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var rl=[{Ic:function(a){return"Cannot read property '"+a.key+"'"},
hc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ic:function(a){return"Cannot call '"+a.key+"'"},
hc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ic:function(a){return a.key+" is not defined"},
hc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var tl={Ua:[],Ra:[{callback:sl,weight:500}]};function sl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function ul(){this.Ra=[];this.Ua=[]}
var vl;function wl(){if(!vl){var a=vl=new ul;a.Ua.length=0;a.Ra.length=0;tl.Ua&&a.Ua.push.apply(a.Ua,tl.Ua);tl.Ra&&a.Ra.push.apply(a.Ra,tl.Ra)}return vl}
;var xl=new O;function yl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=zl(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=zl(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=zl(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function zl(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Al(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Bl(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=yl(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Bl(e+".ve",f,g,h):0;d+=g;d+=Bl(e,a[e],b,c);if(500<d)break}}else c[b]=Cl(a),d+=c[b].length;else c[b]=Cl(a),d+=c[b].length;return d}
function Bl(a,b,c,d){c+="."+a;a=Cl(b);d[c]=a;return c.length+a.length}
function Cl(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Dl(){this.Ue=!0}
function El(){Dl.h||(Dl.h=new Dl);return Dl.h}
function Fl(a,b){a={};var c=yg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),U("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Ek||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Ek&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID")));return a}
;var Gl={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Hl(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Il(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Jl(a,b,c,d,e){ug.set(""+a,b,{fc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Kl(a){return ug.get(""+a,void 0)}
function Ll(a,b,c){ug.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function Ml(){if(!ug.isEnabled())return!1;if(!ug.isEmpty())return!0;ug.set("TESTCOOKIESENABLED","1",{fc:60});if("1"!==ug.get("TESTCOOKIESENABLED"))return!1;ug.remove("TESTCOOKIESENABLED");return!0}
;var Nl=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",Nl);function Ol(){this.h=S("ALT_PREF_COOKIE_NAME","PREF");this.i=S("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Kl(this.h);a&&this.parse(a)}
var Pl;function Ql(){Pl||(Pl=new Ol);return Pl}
m=Ol.prototype;m.get=function(a,b){Rl(a);Sl(a);a=void 0!==Nl[a]?Nl[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){Rl(a);Sl(a);if(null==b)throw Error("ExpectedNotNull");Nl[a]=b.toString()};
function Tl(a){return!!((Ul("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){Rl(a);Sl(a);delete Nl[a]};
m.clear=function(){for(var a in Nl)delete Nl[a]};
function Sl(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Rl(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Ul(a){a=void 0!==Nl[a]?Nl[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Nl[d]=c.toString())}};var Vl={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Wl={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Xl(){var a=C.navigator;return a?a.connection:void 0}
function Yl(){var a=Xl();if(a){var b=Vl[a.type||"unknown"]||"CONN_UNKNOWN";a=Vl[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Zl(){var a=Xl();if(null!=a&&a.effectiveType)return Wl.hasOwnProperty(a.effectiveType)?Wl[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function $l(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ja(b))}
w($l,Error);function am(){try{return bm(),!0}catch(a){return!1}}
function bm(a){if(void 0!==S("DATASYNC_ID"))return S("DATASYNC_ID");throw new $l("Datasync ID not set",void 0===a?"unknown":a);}
;function cm(){}
function dm(a,b){return em(a,0,b)}
cm.prototype.ma=function(a,b){return em(a,1,b)};
function fm(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function gm(){cm.apply(this,arguments)}
w(gm,cm);function hm(){gm.h||(gm.h=new gm);return gm.h}
function em(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):cl(a,c||0)}
gm.prototype.Fa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
gm.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
gm.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var fi=hm();function im(a){var b=new Mi;(b=b.isAvailable()?a?new Si(b,a):b:null)||(a=new Ni(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Ii(a):null;this.i=document.domain||window.location.hostname}
im.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new Cg).serialize(b))}catch(f){return}else e=escape(b);Jl(a,e,c,this.i)};
im.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Kl(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
im.prototype.remove=function(a){this.h&&this.h.remove(a);Ll(a,"/",this.i)};var jm=function(){var a;return function(){a||(a=new im("ytidb"));return a}}();
function km(){var a;return null==(a=jm())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var lm=[],mm,nm=!1;function om(){var a={};for(mm=new pm(void 0===a.handleError?qm:a.handleError,void 0===a.logEvent?rm:a.logEvent);0<lm.length;)switch(a=lm.shift(),a.type){case "ERROR":mm.handleError(a.payload);break;case "EVENT":mm.logEvent(a.eventType,a.payload)}}
function sm(a){nm||(mm?mm.handleError(a):(lm.push({type:"ERROR",payload:a}),10<lm.length&&lm.shift()))}
function tm(a,b){nm||(mm?mm.logEvent(a,b):(lm.push({type:"EVENT",eventType:a,payload:b}),10<lm.length&&lm.shift()))}
;function um(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function wm(a){return a.substr(0,a.indexOf(":"))||a}
;var xm=id||jd;function ym(a){var b=Vb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var zm={},Am=(zm.AUTH_INVALID="No user identifier specified.",zm.EXPLICIT_ABORT="Transaction was explicitly aborted.",zm.IDB_NOT_SUPPORTED="IndexedDB is not supported.",zm.MISSING_INDEX="Index not created.",zm.MISSING_OBJECT_STORES="Object stores not created.",zm.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",zm.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",zm.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
zm.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",zm.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",zm.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",zm.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",zm),Bm={},Cm=(Bm.AUTH_INVALID="ERROR",Bm.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Bm.EXPLICIT_ABORT="IGNORED",Bm.IDB_NOT_SUPPORTED="ERROR",Bm.MISSING_INDEX=
"WARNING",Bm.MISSING_OBJECT_STORES="ERROR",Bm.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Bm.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Bm.QUOTA_EXCEEDED="WARNING",Bm.QUOTA_MAYBE_EXCEEDED="WARNING",Bm.UNKNOWN_ABORT="WARNING",Bm.INCOMPATIBLE_DB_VERSION="WARNING",Bm),Dm={},Em=(Dm.AUTH_INVALID=!1,Dm.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Dm.EXPLICIT_ABORT=!1,Dm.IDB_NOT_SUPPORTED=!1,Dm.MISSING_INDEX=!1,Dm.MISSING_OBJECT_STORES=!1,Dm.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Dm.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Dm.QUOTA_EXCEEDED=!1,Dm.QUOTA_MAYBE_EXCEEDED=!0,Dm.UNKNOWN_ABORT=!0,Dm.INCOMPATIBLE_DB_VERSION=!1,Dm);function Fm(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Am[a]:c;d=void 0===d?Cm[a]:d;e=void 0===e?Em[a]:e;$l.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Fm.prototype)}
w(Fm,$l);function Gm(a,b){Fm.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Am.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Gm.prototype)}
w(Gm,Fm);function Hm(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Hm.prototype)}
w(Hm,Error);var Im=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Jm(a,b,c,d){b=wm(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Fm)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Fm("QUOTA_EXCEEDED",a);if(kd&&"UnknownError"===e.name)return new Fm("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Hm)return new Fm("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Im.some(function(f){return e.message.includes(f)}))return new Fm("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Fm("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",td:e.name})];e.level="WARNING";return e}
function Km(a,b,c){var d=km();return new Fm("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Lm(a){if(!a)throw Error();throw a;}
function Mm(a){return a}
function Nm(a){this.h=a}
function Om(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Om.all=function(a){return new Om(new Nm(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={mb:0};f.mb<a.length;f={mb:f.mb},++f.mb)Om.resolve(a[f.mb]).then(function(g){return function(h){d[g.mb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Om.resolve=function(a){return new Om(new Nm(function(b,c){a instanceof Om?a.then(b,c):b(a)}))};
Om.reject=function(a){return new Om(new Nm(function(b,c){c(a)}))};
Om.prototype.then=function(a,b){var c=this,d=null!=a?a:Mm,e=null!=b?b:Lm;return new Om(new Nm(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Pm(c,c,d,f,g)}),c.i.push(function(){Qm(c,c,e,f,g)})):"FULFILLED"===c.state.status?Pm(c,c,d,f,g):"REJECTED"===c.state.status&&Qm(c,c,e,f,g)}))};
Om.prototype.catch=function(a){return this.then(void 0,a)};
function Pm(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Om?Rm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Qm(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Om?Rm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Rm(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Om?Rm(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Sm(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Tm(a){return new Promise(function(b,c){Sm(a,b,c)})}
function Um(a){return new Om(new Nm(function(b,c){Sm(a,b,c)}))}
;function Vm(a,b){return new Om(new Nm(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Wm=window,V=Wm.ytcsi&&Wm.ytcsi.now?Wm.ytcsi.now:Wm.performance&&Wm.performance.timing&&Wm.performance.now&&Wm.performance.timing.navigationStart?function(){return Wm.performance.timing.navigationStart+Wm.performance.now()}:function(){return(new Date).getTime()};function Xm(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(V());this.i=!1}
m=Xm.prototype;m.add=function(a,b,c){return Ym(this,[a],{mode:"readwrite",ga:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return Ym(this,[a],{mode:"readwrite",ga:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Ym(this,[a],{mode:"readonly",ga:!0},function(c){return c.objectStore(a).count(b)})};
function Zm(a,b,c){a=a.h.createObjectStore(b,c);return new $m(a)}
m.delete=function(a,b){return Ym(this,[a],{mode:"readwrite",ga:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return Ym(this,[a],{mode:"readonly",ga:!0},function(c){return c.objectStore(a).get(b)})};
function an(a,b,c){return Ym(a,[b],{mode:"readwrite",ga:!0},function(d){d=d.objectStore(b);return Um(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Ym(a,b,c,d){var e,f,g,h,k,l,n,p,t,r,x,y;return A(function(z){switch(z.h){case 1:var I={mode:"readonly",ga:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?I.mode=c:Object.assign(I,c);e=I;a.transactionCount++;f=e.ga?3:1;g=0;case 2:if(h){z.v(3);break}g++;k=Math.round(V());xa(z,4);l=a.h.transaction(b,e.mode);I=z.yield;var K=new bn(l);K=cn(K,d);return I.call(z,K,6);case 6:return n=z.i,p=Math.round(V()),dn(a,k,p,g,void 0,b.join(),e),z.return(n);case 4:t=za(z);r=Math.round(V());x=Jm(t,
a.h.name,b.join(),a.h.version);if((y=x instanceof Fm&&!x.h)||g>=f)dn(a,k,r,g,x,b.join(),e),h=x;z.v(2);break;case 3:return z.return(Promise.reject(h))}})}
function dn(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Fm&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&tm("QUOTA_EXCEEDED",{dbName:wm(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Fm&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),tm("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),en(a,!1,d,f,b,g.tag),sm(e)):en(a,!0,d,f,b,g.tag)}
function en(a,b,c,d,e,f){tm("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function $m(a){this.h=a}
m=$m.prototype;m.add=function(a,b){return Um(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Um(this.h.clear()).then(function(){})};
function fn(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return Um(this.h.count(a))};
function gn(a,b){return hn(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?gn(this,a):Um(this.h.delete(a))};
m.get=function(a){return Um(this.h.get(a))};
m.index=function(a){try{return new jn(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Hm(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function hn(a,b,c){a=a.h.openCursor(b.query,b.direction);return kn(a).then(function(d){return Vm(d,c)})}
function bn(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Fm;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function cn(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
bn.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Fm("EXPLICIT_ABORT");};
bn.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new $m(a),this.i.set(a,b));return b};
function jn(a){this.h=a}
m=jn.prototype;m.count=function(a){return Um(this.h.count(a))};
m.delete=function(a){return ln(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Um(this.h.get(a))};
m.getKey=function(a){return Um(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function ln(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return kn(a).then(function(d){return Vm(d,c)})}
function mn(a,b){this.request=a;this.cursor=b}
function kn(a){return Um(a).then(function(b){return b?new mn(a,b):null})}
m=mn.prototype;m.advance=function(a){this.cursor.advance(a);return kn(this.request)};
m.continue=function(a){this.cursor.continue(a);return kn(this.request)};
m.delete=function(){return Um(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Um(this.cursor.update(a))};function nn(a,b,c){return new Promise(function(d,e){function f(){t||(t=new Xm(g.result,{closed:p}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Sd,k=c.blocking,l=c.Ve,n=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(r){try{if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");r.dataLoss&&"none"!==r.dataLoss&&tm("IDB_DATA_CORRUPTED",{reason:r.dataLossMessage||"unknown reason",dbName:wm(a)});var x=f(),y=new bn(g.transaction);
n&&n(x,function(z){return r.oldVersion<z&&r.newVersion>=z},y);
y.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var r=g.result;k&&r.addEventListener("versionchange",function(){k(f())});
r.addEventListener("close",function(){tm("IDB_UNEXPECTEDLY_CLOSED",{dbName:wm(a),dbVersion:r.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function on(a,b,c){c=void 0===c?{}:c;return nn(a,b,c)}
function pn(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return xa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Sd)&&c.addEventListener("blocked",function(){e()}),g.yield(Tm(c),4);
if(2!=g.h)return ya(g,0);f=za(g);throw Jm(f,a,"",-1);})}
;function qn(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
qn.prototype.i=function(a,b,c){c=void 0===c?{}:c;return on(a,b,c)};
qn.prototype.delete=function(a){a=void 0===a?{}:a;return pn(this.name,a)};
function rn(a,b){return new Fm("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function sn(a,b){if(!b)throw Km("openWithToken",wm(a.name));return a.open()}
qn.prototype.open=function(){function a(){var f,g,h,k,l,n,p,t,r,x;return A(function(y){switch(y.h){case 1:return g=null!=(f=Error().stack)?f:"",xa(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:h=y.i;for(var z=c.options,I=[],K=v(Object.keys(z.Cb)),H=K.next();!H.done;H=K.next()){H=H.value;var J=z.Cb[H],T=void 0===J.De?Number.MAX_VALUE:J.De;!(h.h.version>=J.Jb)||h.h.version>=T||h.h.objectStoreNames.contains(H)||I.push(H)}k=I;if(0===k.length){y.v(5);break}l=Object.keys(c.options.Cb);n=h.objectStoreNames();
if(c.m<Yk("ytidb_reopen_db_retries",0))return c.m++,h.close(),sm(new Fm("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());if(!(c.l<Yk("ytidb_remake_db_retries",1))){y.v(6);break}c.l++;return y.yield(c.delete(),7);case 7:return sm(new Fm("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());case 6:throw new Gm(n,l);case 5:return y.return(h);case 2:p=za(y);if(p instanceof DOMException?
"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){y.v(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:t=y.i;r=t.h.version;if(void 0!==c.options.version&&r>c.options.version+1)throw t.close(),c.j=!1,rn(c,r);return y.return(t);case 8:throw b(),p instanceof Error&&!U("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Jm(p,c.name,"",null!=(x=c.options.version)?x:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw rn(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Ve:b,upgrade:this.options.upgrade};return this.h=d=a()};var tn=new qn("YtIdbMeta",{Cb:{databases:{Jb:1}},upgrade:function(a,b){b(1)&&Zm(a,"databases",{keyPath:"actualName"})}});
function un(a,b){var c;return A(function(d){if(1==d.h)return d.yield(sn(tn,b),2);c=d.i;return d.return(Ym(c,["databases"],{ga:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Um(f.h.put(a,void 0)).then(function(){})})}))})}
function vn(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(sn(tn,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function wn(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(sn(tn,b),2)):3!=e.h?(d=e.i,e.yield(Ym(d,["databases"],{ga:!0,mode:"readonly"},function(f){c.length=0;return hn(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function xn(a){return wn(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function yn(a,b,c){return wn(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function zn(a){var b,c;return A(function(d){if(1==d.h)return b=bm("YtIdbMeta hasAnyMeta other"),d.yield(wn(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var An,Bn=new function(){}(new function(){});
function Cn(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=km();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=xm)f=/WebKit\/([0-9]+)/.exec(Vb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Vb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Vc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
xa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(un(d,Bn),4);case 4:return e.yield(vn("yt-idb-test-do-not-use",Bn),5);case 5:return e.return(!0);case 2:return za(e),e.return(!1)}})}
function Dn(){if(void 0!==An)return An;nm=!0;return An=Cn().then(function(a){nm=!1;var b;if(null!=(b=jm())&&b.h){var c;b={hasSucceededOnce:(null==(c=km())?void 0:c.hasSucceededOnce)||a};var d;null==(d=jm())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function En(){return E("ytglobal.idbToken_")||void 0}
function Fn(){var a=En();return a?Promise.resolve(a):Dn().then(function(b){(b=b?Bn:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Gn=0;function Hn(a,b){Gn||(Gn=fi.ma(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Fn(),2);case 2:c=h.i;if(!c)return h.return();d=!0;xa(h,3);return h.yield(yn(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.v(6);break}f=e[0];return h.yield(pn(f.actualName),7);case 7:return h.yield(vn(f.actualName,c),6);case 6:ya(h,4);break;case 3:g=za(h),sm(g),d=!1;case 4:fi.Fa(Gn),Gn=0,d&&Hn(a,b),h.h=0}})}))}
function In(){var a;return A(function(b){return 1==b.h?b.yield(Fn(),2):(a=b.i)?b.return(zn(a)):b.return(!1)})}
new Ah;function Jn(a){if(!am())throw a=new Fm("AUTH_INVALID",{dbName:a}),sm(a),a;var b=bm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Kn(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(Fn(),2);case 2:g=n.i;if(!g)throw h=Km("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),sm(h),h;um(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Jn(a);xa(n,3);return n.yield(un(k,g),5);case 5:return n.yield(on(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=za(n),xa(n,7),n.yield(vn(k.actualName,
g),9);case 9:ya(n,8);break;case 7:za(n);case 8:throw l;}})}
function Ln(a,b,c){c=void 0===c?{}:c;return Kn(a,b,!1,c)}
function Mn(a,b,c){c=void 0===c?{}:c;return Kn(a,b,!0,c)}
function Nn(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(Fn(),2);if(3!=e.h){c=e.i;if(!c)return e.return();um(a);d=Jn(a);return e.yield(pn(d.actualName,b),3)}return e.yield(vn(d.actualName,c),0)})}
function On(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(pn(d.actualName,b),2):e.yield(vn(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Pn(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(Fn(),2);if(3!=d.h){b=d.i;if(!b)return d.return();um("LogsDatabaseV2");return d.yield(xn(b),3)}c=d.i;return d.yield(On(c,a,b),0)})}
function Qn(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(Fn(),2);if(3!=d.h){c=d.i;if(!c)return d.return();um(a);return d.yield(pn(a,b),3)}return d.yield(vn(a,c),0)})}
;function Rn(a,b){qn.call(this,a,b);this.options=b;um(a)}
w(Rn,qn);function Sn(a,b){var c;return function(){c||(c=new Rn(a,b));return c}}
Rn.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.mc?Mn:Ln)(a,b,Object.assign({},c))};
Rn.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.mc?Qn:Nn)(this.name,a)};
function Tn(a,b){return Sn(a,b)}
;var Un={},Vn=Tn("ytGcfConfig",{Cb:(Un.coldConfigStore={Jb:1},Un.hotConfigStore={Jb:1},Un),mc:!1,upgrade:function(a,b){b(1)&&(fn(Zm(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),fn(Zm(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Wn(a){return sn(Vn(),a)}
function Xn(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:V()},g.yield(Wn(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(an(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Yn(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:V()},h.yield(Wn(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(an(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Zn(a){var b,c;return A(function(d){return 1==d.h?d.yield(Wn(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Ym(b,["coldConfigStore"],{mode:"readwrite",ga:!0},function(e){return ln(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function $n(a){var b,c;return A(function(d){return 1==d.h?d.yield(Wn(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Ym(b,["hotConfigStore"],{mode:"readwrite",ga:!0},function(e){return ln(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function ao(){N.apply(this,arguments);this.i=[]}
w(ao,N);ao.prototype.K=function(){this.i.length=0;N.prototype.K.call(this)};function bo(){this.h=0;this.i=new ao}
function co(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!U("update_log_event_config")){g.v(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.hotHashData=b;D("yt.gcf.config.hotHashData",a.hotHashData||null);d=En();if(!d){g.v(3);break}if(c){g.v(4);break}return g.yield($n(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(Xn(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.i),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function eo(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!U("update_log_event_config"))return h.v(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=En())?c?h.v(4):h.yield(Zn(d),5):h.v(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.v(0);g=c.configData;return h.yield(Yn(c,b,g,d),0)})}
;function fo(){return"INNERTUBE_API_KEY"in Ek&&"INNERTUBE_API_VERSION"in Ek}
function go(){return{innertubeApiKey:S("INNERTUBE_API_KEY"),innertubeApiVersion:S("INNERTUBE_API_VERSION"),le:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),md:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),yf:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),ne:S("INNERTUBE_CONTEXT_HL"),me:S("INNERTUBE_CONTEXT_GL"),oe:S("INNERTUBE_HOST_OVERRIDE")||"",qe:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),pe:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function ho(a){var b={client:{hl:a.ne,gl:a.me,clientName:a.md,clientVersion:a.innertubeContextClientVersion,configInfo:a.le}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Zk();0<c.length&&(b.request={internalExperimentFlags:c});c=a.md;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=Il()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(U("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Yl())&&b&&(b.client.connectionType=a);U("web_log_effective_connection_type")&&(a=Zl())&&
b&&(b.client.effectiveConnectionType=a);U("start_sending_config_hash")&&(bo.h||(a=new bo,bo.h=a),a=bo.h,f=V()-a.h,0!==a.h&&f<Yk("send_config_hash_timer")?a=void 0:(f=E("yt.gcf.config.coldConfigData"),e=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData"),f&&e&&d&&(a.h=V()),a={coldConfigData:f,hotHashData:e,coldHashData:d}),e=a)&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=
f,b.client.configInfo.hotHashData=e));S("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!U("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries(Rk(S("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=
h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function io(a,b,c){c=void 0===c?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||S("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().sf:(a=Fl(El()),U("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;function jo(a,b){this.version=a;this.args=b}
jo.prototype.serialize=function(){return{version:this.version,args:this.args}};function ko(a,b){this.topic=a;this.h=b}
ko.prototype.toString=function(){return this.topic};var lo=E("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.Hb;O.prototype.publish=O.prototype.cb;O.prototype.clear=O.prototype.clear;D("ytPubsub2Pubsub2Instance",lo);var mo=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",mo);var no=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",no);var oo=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",oo);
D("ytPubsub2Pubsub2SkipSubKey",null);function po(a,b){var c=qo();c&&c.publish.call(c,a.toString(),a,b)}
function ro(a){var b=so,c=qo();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(mo[d])try{if(f&&b instanceof ko&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Xa){var l=new h;h.Xa=l.version}var n=h.Xa}catch(z){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var t=k.args,r=t.length;if(0<r){var x=Array(r);for(k=0;k<r;k++)x[k]=t[k];var y=x}else y=[];f=p.call(n,h,y)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){Jk(z)}},oo[b.toString()]?E("yt.scheduler.instance")?fi.ma(g):cl(g,0):g())});
mo[d]=!0;no[b.toString()]||(no[b.toString()]=[]);no[b.toString()].push(d);return d}
function to(){var a=uo,b=ro(function(c){a.apply(void 0,arguments);vo(b)});
return b}
function vo(a){var b=qo();b&&("number"===typeof a&&(a=[a]),fb(a,function(c){b.unsubscribeByKey(c);delete mo[c]}))}
function qo(){return E("ytPubsub2Pubsub2Instance")}
;function wo(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&po("meta_logging_csi_event",{timerName:a,Nf:b})}
;var xo=Yk("max_body_size_to_compress",5E5),yo=Yk("min_body_size_to_compress",500),zo=!0,Ao=0,Bo=0,Co=Yk("compression_performance_threshold",250),Do=Yk("slow_compressions_before_abandon_count",10);
function Eo(a,b,c,d){var e=V(),f={startTime:e,ticks:{},infos:{}};if(zo)try{var g=Fo(b);if(null==g||!(g>xo||g<yo)){var h=ek(ai(b)),k=V();f.ticks.gelc=k;Bo++;U("disable_compression_due_to_performance_degredation")&&k-e>=Co&&(Ao++,U("abandon_compression_after_N_slow_zips")?Bo===Yk("compression_disable_point")&&Ao>Do&&(zo=!1):zo=!1);Go(f);c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=h;c.postParams=void 0}d(a,c)}catch(l){Kk(l),d(a,c)}else d(a,c)}
function Ho(a){var b=void 0===b?!1:b;var c=V(),d={startTime:c,ticks:{},infos:{}};if(zo){if(!a.body)return a;try{var e="string"===typeof a.body?a.body:JSON.stringify(a.body),f=Fo(e);if(null!=f&&(f>xo||f<yo))return a;var g=ek(ai(e),b?{level:1}:void 0),h=V();d.ticks.gelc=h;if(b){Bo++;if(U("disable_compression_due_to_performance_degredation")&&h-c>=Co)if(Ao++,U("abandon_compression_after_N_slow_zips")){b=Ao/Bo;var k=Do/Yk("compression_disable_point");0<Bo&&0===Bo%Yk("compression_disable_point")&&b>=k&&
(zo=!1)}else zo=!1;Go(d)}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=g;return a}catch(l){return Kk(l),a}}else return a}
function Fo(a){try{return(new Blob(a.split(""))).size}catch(b){return Kk(b),null}}
function Go(a){U("gel_compression_csi_killswitch")||!U("log_gel_compression_latency")&&!U("log_gel_compression_latency_lr")||wo("gel_compression",a,{sampleRate:.1})}
;function Io(a){a=Object.assign({},a);delete a.Authorization;var b=yg();if(b){var c=new li;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=nd(c.digest(),3)}return a}
;var Jo;function Ko(){Jo||(Jo=new im("yt.innertube"));return Jo}
function Lo(a,b,c,d){if(d)return null;d=Ko().get("nextId",!0)||1;var e=Ko().get("requests",!0)||{};e[d]={method:a,request:b,authState:Io(c),requestTime:Math.round(V())};Ko().set("nextId",d+1,86400,!0);Ko().set("requests",e,86400,!0);return d}
function Mo(a){var b=Ko().get("requests",!0)||{};delete b[a];Ko().set("requests",b,86400,!0)}
function No(a){var b=Ko().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(V())-d.requestTime)){var e=d.authState,f=Io(io(!1));sb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(V())),Oo(a,d.method,e,{}));delete b[c]}}Ko().set("requests",b,86400,!0)}}
;function Po(a){this.Vb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.wb=function(){};
this.now=Date.now;this.Lb=!1;var b;this.Fd=null!=(b=a.Fd)?b:100;var c;this.zd=null!=(c=a.zd)?c:1;var d;this.xd=null!=(d=a.xd)?d:2592E6;var e;this.vd=null!=(e=a.vd)?e:12E4;var f;this.yd=null!=(f=a.yd)?f:5E3;var g;this.P=null!=(g=a.P)?g:void 0;this.ac=!!a.ac;var h;this.Yb=null!=(h=a.Yb)?h:.1;var k;this.ic=null!=(k=a.ic)?k:10;a.handleError&&(this.handleError=a.handleError);a.wb&&(this.wb=a.wb);a.Lb&&(this.Lb=a.Lb);a.Vb&&(this.Vb=a.Vb);this.R=a.R;this.Aa=a.Aa;this.Z=a.Z;this.Y=a.Y;this.Qa=a.Qa;this.Lc=
a.Lc;this.Kc=a.Kc;Qo(this)&&(!this.R||this.R("networkless_logging"))&&Ro(this)}
function Ro(a){Qo(a)&&!a.Lb&&(a.h=!0,a.ac&&Math.random()<=a.Yb&&a.Z.Ud(a.P),So(a),a.Y.ta()&&a.Pb(),a.Y.listen(a.Lc,a.Pb.bind(a)),a.Y.listen(a.Kc,a.Zc.bind(a)))}
m=Po.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Qo(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.Z.set(d,this.P).then(function(e){d.id=e;c.Y.ta()&&To(c,d)}).catch(function(e){To(c,d);
Uo(c,e)})}else this.Qa(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Qo(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.R&&this.R("nwl_skip_retry")&&(e.skipRetry=c);if(this.Y.ta()||this.R&&this.R("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.Z.set(e,d.P).catch(function(l){Uo(d,l)}),2);
f(g,h);k.h=0})}}this.Qa(a,b,e.skipRetry)}else this.Z.set(e,this.P).catch(function(g){d.Qa(a,b,e.skipRetry);
Uo(d,g)})}else this.Qa(a,b,this.R&&this.R("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Qo(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.Z.tb(d.id,c.P):e=!0;c.Y.gb&&c.R&&c.R("vss_network_hint")&&c.Y.gb(!0);f(g,h)};
this.Qa(d.url,d.options);this.Z.set(d,this.P).then(function(g){d.id=g;e&&c.Z.tb(d.id,c.P)}).catch(function(g){Uo(c,g)})}else this.Qa(a,b)};
m.Pb=function(){var a=this;if(!Qo(this))throw Km("throttleSend");this.i||(this.i=this.Aa.ma(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.Z.jd("NEW",a.P),2);if(3!=c.h)return b=c.i,b?c.yield(To(a,b),3):(a.Zc(),c.return());a.i&&(a.i=0,a.Pb());c.h=0})},this.Fd))};
m.Zc=function(){this.Aa.Fa(this.i);this.i=0};
function To(a,b){var c,d;return A(function(e){switch(e.h){case 1:if(!Qo(a))throw c=Km("immediateSend"),c;if(void 0===b.id){e.v(2);break}return e.yield(a.Z.se(b.id,a.P),3);case 3:(d=e.i)||a.wb(Error("The request cannot be found in the database."));case 2:if(Vo(a,b,a.xd)){e.v(4);break}a.wb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.v(5);break}return e.yield(a.Z.tb(b.id,a.P),5);case 5:return e.return();case 4:b.skipRetry||(b=Wo(a,b));if(!b){e.v(0);break}if(!b.skipRetry||
void 0===b.id){e.v(8);break}return e.yield(a.Z.tb(b.id,a.P),8);case 8:a.Qa(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Wo(a,b){if(!Qo(a))throw Km("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=Xo(f);(h=Yo(f))&&a.R&&a.R("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.R&&a.R("nwl_consider_error_code")&&g||a.R&&!a.R("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.ic)){n.v(2);break}if(!a.Y.lc){n.v(3);break}return n.yield(a.Y.lc(),3);case 3:if(a.Y.ta()){n.v(2);break}c(e,f);if(!a.R||!a.R("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.v(6);
break}return n.yield(a.Z.Oc(b.id,a.P,!1),6);case 6:return n.return();case 2:if(a.R&&a.R("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.ic)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.v(8);break}return b.sendCount<a.zd?n.yield(a.Z.Oc(b.id,a.P,!0,h?!1:void 0),12):n.yield(a.Z.tb(b.id,a.P),8);case 12:a.Aa.ma(function(){a.Y.ta()&&a.Pb()},a.yd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.v(2):h.yield(a.Z.tb(b.id,a.P),2);a.Y.gb&&a.R&&a.R("vss_network_hint")&&a.Y.gb(!0);d(e,f);h.h=0})};
return b}
function Vo(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function So(a){if(!Qo(a))throw Km("retryQueuedRequests");a.Z.jd("QUEUED",a.P).then(function(b){b&&!Vo(a,b,a.vd)?a.Aa.ma(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.v(2):c.yield(a.Z.Oc(b.id,a.P),2);So(a);c.h=0})}):a.Y.ta()&&a.Pb()})}
function Uo(a,b){a.Ld&&!a.Y.ta()?a.Ld(b):a.handleError(b)}
function Qo(a){return!!a.P||a.Vb}
function Xo(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Yo(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Zo;
function $o(){if(Zo)return Zo();var a={};Zo=Tn("LogsDatabaseV2",{Cb:(a.LogsRequestsStore={Jb:2},a),mc:!1,upgrade:function(b,c,d){c(2)&&Zm(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),fn(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Zo()}
;function ap(a){return sn($o(),a)}
function bp(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(ap(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(an(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=V();cp(c);return g.return(f)})}
function dp(a,b){var c,d,e,f,g,h,k;return A(function(l){if(1==l.h)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},l.yield(ap(b),2);if(3!=l.h)return d=l.i,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,V()],h=IDBKeyRange.bound(f,g),k=void 0,l.yield(Ym(d,["LogsRequestsStore"],{mode:"readwrite",ga:!0},function(n){return ln(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.getValue()&&(k=p.getValue(),"NEW"===
a&&(k.status="QUEUED",p.update(k)))})}),3);
c.ticks.tc=V();cp(c);return l.return(k)})}
function ep(a,b){var c;return A(function(d){if(1==d.h)return d.yield(ap(b),2);c=d.i;return d.return(Ym(c,["LogsRequestsStore"],{mode:"readwrite",ga:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Um(f.h.put(g,void 0)).then(function(){return g})})}))})}
function fp(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(ap(b),2);e=f.i;return f.return(Ym(e,["LogsRequestsStore"],{mode:"readwrite",ga:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Um(h.h.put(k,void 0)).then(function(){return k})):Om.resolve(void 0)})}))})}
function gp(a,b){var c;return A(function(d){if(1==d.h)return d.yield(ap(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function hp(a){var b,c;return A(function(d){if(1==d.h)return d.yield(ap(a),2);b=d.i;c=V()-2592E6;return d.yield(Ym(b,["LogsRequestsStore"],{mode:"readwrite",ga:!0},function(e){return hn(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function ip(){A(function(a){return a.yield(Pn(),0)})}
function cp(a){U("nwl_csi_killswitch")||wo("networkless_performance",a,{sampleRate:1})}
;var jp={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,tvhtml5ApiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,
tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,
postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,
proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,
accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,
sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477};var kp={},lp=Tn("ServiceWorkerLogsDatabase",{Cb:(kp.SWHealthLog={Jb:1},kp),mc:!0,upgrade:function(a,b){b(1)&&fn(Zm(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function mp(a){return sn(lp(),a)}
function np(a){var b,c;A(function(d){if(1==d.h)return d.yield(mp(a),2);b=d.i;c=V()-2592E6;return d.yield(Ym(b,["SWHealthLog"],{mode:"readwrite",ga:!0},function(e){return hn(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function op(a){var b;return A(function(c){if(1==c.h)return c.yield(mp(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var pp={},qp=0;function rp(a){var b=new Image,c=""+qp++;pp[c]=b;b.onload=b.onerror=function(){delete pp[c]};
b.src=a}
;function sp(){this.h=new Map;this.i=!1}
function tp(){if(!sp.h){var a=E("yt.networkRequestMonitor.instance")||new sp;D("yt.networkRequestMonitor.instance",a);sp.h=a}return sp.h}
sp.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
sp.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
sp.prototype.removeParams=function(a){return a.split("?")[0]};
sp.prototype.removeParams=sp.prototype.removeParams;sp.prototype.isEndpointCFR=sp.prototype.isEndpointCFR;sp.prototype.requestComplete=sp.prototype.requestComplete;sp.getInstance=tp;var up;function vp(){up||(up=new im("yt.offline"));return up}
function wp(a){if(U("offline_error_handling")){var b=vp().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);vp().set("errors",b,2592E3,!0)}}
;function xp(){$e.call(this);var a=this;this.j=!1;this.i=ei();this.i.listen("networkstatus-online",function(){if(a.j&&U("offline_error_handling")){var b=vp().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new $l(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Jk(d)}vp().set("errors",{},2592E3,!0)}}})}
w(xp,$e);function yp(){if(!xp.h){var a=E("yt.networkStatusManager.instance")||new xp;D("yt.networkStatusManager.instance",a);xp.h=a}return xp.h}
m=xp.prototype;m.ta=function(){return this.i.ta()};
m.gb=function(a){this.i.i=a};
m.he=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Yd=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.lc=function(a){a=ci(this.i,a);a.then(function(b){U("use_cfr_monitor")&&tp().requestComplete("generate_204",b)});
return a};
xp.prototype.sendNetworkCheckRequest=xp.prototype.lc;xp.prototype.listen=xp.prototype.listen;xp.prototype.enableErrorFlushing=xp.prototype.Yd;xp.prototype.getWindowStatus=xp.prototype.he;xp.prototype.networkStatusHint=xp.prototype.gb;xp.prototype.isNetworkAvailable=xp.prototype.ta;xp.getInstance=yp;function zp(a){a=void 0===a?{}:a;$e.call(this);var b=this;this.i=this.s=0;this.j=yp();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.kc?(this.kc=a.kc,c("networkstatus-online",function(){Ap(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Ap(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){af(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){af(b,"publicytnetworkstatus-offline")})))}
w(zp,$e);zp.prototype.ta=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
zp.prototype.gb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
zp.prototype.lc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return U("skip_network_check_if_cfr")&&tp().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ta())})):c?d.return(c(a)):d.return(!0)})};
function Ap(a,b){a.kc?a.i?(fi.Fa(a.s),a.s=fi.ma(function(){a.m!==b&&(af(a,b),a.m=b,a.i=V())},a.kc-(V()-a.i))):(af(a,b),a.m=b,a.i=V()):af(a,b)}
;var Bp;function Cp(){var a=Po.call;Bp||(Bp=new zp({Df:!0,wf:!0}));a.call(Po,this,{Z:{Ud:hp,tb:gp,jd:dp,se:ep,Oc:fp,set:bp},Y:Bp,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Kk(new $l(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Jk(b)},
wb:Kk,Qa:Dp,now:V,Ld:wp,Aa:hm(),Lc:"publicytnetworkstatus-online",Kc:"publicytnetworkstatus-offline",ac:!0,Yb:.1,ic:Yk("potential_esf_error_limit",10),R:U,Lb:!(am()&&Ep())});this.j=new Ah;U("networkless_immediately_drop_all_requests")&&ip();Qn("LogsDatabaseV2")}
w(Cp,Po);function Fp(){var a=E("yt.networklessRequestController.instance");a||(a=new Cp,D("yt.networklessRequestController.instance",a),U("networkless_logging")&&Fn().then(function(b){a.P=b;Ro(a);a.j.resolve();a.ac&&Math.random()<=a.Yb&&a.P&&np(a.P);U("networkless_immediately_drop_sw_health_store")&&Gp(a)}));
return a}
Cp.prototype.writeThenSend=function(a,b){b||(b={});am()||(this.h=!1);Po.prototype.writeThenSend.call(this,a,b)};
Cp.prototype.sendThenWrite=function(a,b,c){b||(b={});am()||(this.h=!1);Po.prototype.sendThenWrite.call(this,a,b,c)};
Cp.prototype.sendAndWrite=function(a,b){b||(b={});am()||(this.h=!1);Po.prototype.sendAndWrite.call(this,a,b)};
Cp.prototype.awaitInitialization=function(){return this.j.promise};
function Gp(a){var b;A(function(c){if(!a.P)throw b=Km("clearSWHealthLogsDb"),b;return c.return(op(a.P).catch(function(d){a.handleError(d)}))})}
function Dp(a,b,c){b=U("web_fp_via_jspb")?Object.assign({},b):b;U("use_cfr_monitor")&&Hp(a,b);if(U("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(V())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)ll(a,void 0,"POST",e);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))ll(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=
new bb({url:a});if(g.j&&g.i||g.l){var h=tc(uc(5,a)),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(Gc),n=Fc(a,0,"ri",l);if(0>n)var p=null;else{var t=a.indexOf("&",n);if(0>t||t>l)t=l;p=decodeURIComponent(a.slice(n+3,-1!==t?t:0).replace(/\+/g," "))}k="1"!==p}var r=!k;break b}}catch(y){}r=!1}if(r){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var x=!0;break b}}catch(y){}x=!1}c=x?!0:!1}else c=!1;c||rp(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&
(b.postBody=JSON.stringify(b.postBody)),Eo(a,b.postBody,b,il)):Eo(a,JSON.stringify(b.postParams),b,ql):il(a,b)}
function Hp(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){tp().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){tp().requestComplete(a,!0);d(e,f)}}
function Ep(){return"www.youtube-nocookie.com"!==vc(document.location.toString())}
;var Ip=!1,Jp=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Ip};D("ytNetworklessLoggingInitializationOptions",Jp);function Kp(){var a;A(function(b){if(1==b.h)return b.yield(Fn(),2);a=b.i;if(!a||!am()&&!U("nwl_init_require_datasync_id_killswitch")||!Ep())return b.v(0);Ip=!0;Jp.isNwlInitialized=Ip;return b.yield(Fp().awaitInitialization(),0)})}
;function Lp(a){var b=this;this.config_=null;a?this.config_=a:fo()&&(this.config_=go());dm(function(){No(b)},5E3)}
Lp.prototype.isReady=function(){!this.config_&&fo()&&(this.config_=go());return!!this.config_};
function Oo(a,b,c,d){function e(x){x=void 0===x?!1:x;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(x||U("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=Lo(b,c,l,k)),y)){var z=g.onSuccess,I=g.onFetchSuccess;g.onSuccess=function(H,J){Mo(y);z(H,J)};
c.onFetchSuccess=function(H,J){Mo(y);I(H,J)}}try{if(x&&d.retry&&!d.qd.bypassNetworkless)g.method="POST",d.qd.writeThenSend?Fp().writeThenSend(r,g):Fp().sendAndWrite(r,g);
else if(d.compress)if(g.postBody){var K=g.postBody;"string"!==typeof K&&(K=JSON.stringify(g.postBody));Eo(r,K,g,il)}else Eo(r,JSON.stringify(g.postParams),g,ql);else U("web_all_payloads_via_jspb")?il(r,g):ql(r,g)}catch(H){if("InvalidAccessError"==H.name)y&&(Mo(y),y=0),Kk(Error("An extension is blocking network request."));else throw H;}y&&dm(function(){No(a)},5E3)}
!S("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Kk(new $l("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new $l("innertube xhrclient not ready",b,c,d);Jk(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(x,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(x){if(d.onSuccess)d.onSuccess(x)},
onError:function(x,y){if(d.onError)d.onError(y)},
onFetchError:function(x){if(d.onError)d.onError(x)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.oe)&&(h=f);var k=a.config_.qe||!1,l=io(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},t=a.config_.pe&&f;t=t&&f.startsWith("Bearer");t||(p.key=a.config_.innertubeApiKey);var r=Tk(""+h+n,p||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
Jp.isNwlInitialized:Ip)?Dn().then(function(x){e(x)}):e(!1)}
;var Mp=0,Np=Xc?"webkit":Wc?"moz":Uc?"ms":Tc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++Mp});var Op={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Pp(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Op||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Qp(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Pp.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Pp.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Pp.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ob=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",ob);var Rp=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",Rp);
function Sp(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return nb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&sb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Tp=db(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Up(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Sp(a,b,c,d);if(e)return e;e=++Rp.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Pp(h);if(!kf(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Pp(h);
h.currentTarget=a;return c.call(a,h)};
g=Ik(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Tp()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ob[e]=[a,b,c,g,d];return e}
function Vp(a){a&&("string"==typeof a&&(a=[a]),fb(a,function(b){if(b in ob){var c=ob[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Tp()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ob[b]}}))}
;function Wp(a){this.M=a;this.i=null;this.m=0;this.A=null;this.s=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.W=Up(window,"mousemove",Xa(this.aa,this));a=Xa(this.V,this);"function"===typeof a&&(a=Ik(a));this.ba=window.setInterval(a,25)}
Za(Wp,N);Wp.prototype.aa=function(a){void 0===a.h&&Qp(a);var b=a.h;void 0===a.i&&Qp(a);this.i=new ff(b,a.i)};
Wp.prototype.V=function(){if(this.i){var a=V();if(0!=this.m){var b=this.A,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.M();this.s=d}this.m=a;this.A=this.i;this.l=(this.l+1)%4}};
Wp.prototype.K=function(){window.clearInterval(this.ba);Vp(this.W)};var Xp=new Set([174,173,175]),Yp={};
function Zp(a){var b=void 0===a?{}:a;a=void 0===b.Ae?!1:b.Ae;b=void 0===b.Zd?!0:b.Zd;if(null==E("_lact",window)){var c=parseInt(S("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&$p();Up(document,"keydown",$p);Up(document,"keyup",$p);Up(document,"mousedown",$p);Up(document,"mouseup",$p);a?Up(window,"touchmove",function(){aq("touchmove",200)},{passive:!0}):(Up(window,"resize",function(){aq("resize",200)}),b&&Up(window,"scroll",function(){aq("scroll",
200)}));
new Wp(function(){aq("mouse",100)});
Up(document,"touchstart",$p,{passive:!0});Up(document,"touchend",$p,{passive:!0})}}
function aq(a,b){Yp[a]||(Yp[a]=!0,fi.ma(function(){$p();Yp[a]=!1},b))}
function $p(a){var b;if(null!=(b=E("experiment.flags",window))&&b.enable_lact_reset_by_volume_buttons||!Xp.has(null==a?void 0:a.keyCode))null==E("_lact",window)&&Zp(),a=Date.now(),D("_lact",a,window),-1==E("_fact",window)&&D("_fact",a,window),(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function bq(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var cq=C.ytPubsubPubsubInstance||new O,dq=C.ytPubsubPubsubSubscribedKeys||{},eq=C.ytPubsubPubsubTopicToKeys||{},iq=C.ytPubsubPubsubIsSynchronous||{};function jq(a,b){var c=kq();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){dq[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{iq[a]?f():cl(f,0)}catch(g){Jk(g)}},void 0);
dq[d]=!0;eq[a]||(eq[a]=[]);eq[a].push(d);return d}return 0}
function lq(a){var b=kq();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),fb(a,function(c){b.unsubscribeByKey(c);delete dq[c]}))}
function mq(a,b){var c=kq();c&&c.publish.apply(c,arguments)}
function nq(a){var b=kq();if(b)if(b.clear(a),a)oq(a);else for(var c in eq)oq(c)}
function kq(){return C.ytPubsubPubsubInstance}
function oq(a){eq[a]&&(a=eq[a],fb(a,function(b){dq[b]&&delete dq[b]}),a.length=0)}
O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.Hb;O.prototype.publish=O.prototype.cb;O.prototype.clear=O.prototype.clear;D("ytPubsubPubsubInstance",cq);D("ytPubsubPubsubTopicToKeys",eq);D("ytPubsubPubsubIsSynchronous",iq);D("ytPubsubPubsubSubscribedKeys",dq);var pq=Symbol("injectionDeps");function qq(a){this.name=a}
qq.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function rq(a){this.key=a}
function sq(){this.h=new Map;this.i=new Map}
sq.prototype.resolve=function(a){return a instanceof rq?tq(this,a.key,[],!0):tq(this,a,[])};
function tq(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Id)var e=d.Id;else if(d.Ze)e=d[pq]?uq(a,d[pq],c):[],e=d.Ze.apply(d,ja(e));else if(d.Hd){e=d.Hd;var f=e[pq]?uq(a,e[pq],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ja(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Lf||a.i.set(b,e);return e}
function uq(a,b,c){return b?b.map(function(d){return d instanceof rq?tq(a,d.key,c,!0):tq(a,d,c)}):[]}
;var vq;function wq(){vq||(vq=new sq);return vq}
;function xq(){this.store={};this.h={}}
xq.prototype.storePayload=function(a,b){a=yq(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
xq.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=zq(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ja(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ja(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ja(this.smartExtractMatchingEntries(a))));return c};
xq.prototype.extractMatchingEntries=function(a){a=zq(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ja(this.store[a[c]])),delete this.store[a[c]]);return b};
xq.prototype.getSequenceCount=function(a){a=zq(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function zq(a,b){var c=yq(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&yq(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Aq(b.auth,g[0])){var h=b.isJspb;Aq(void 0===h?"undefined":h?"true":"false",g[1])&&Aq(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),Aq(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Aq(a,b){return void 0===a||"undefined"===a?!0:a===b}
xq.prototype.getSequenceCount=xq.prototype.getSequenceCount;xq.prototype.extractMatchingEntries=xq.prototype.extractMatchingEntries;xq.prototype.smartExtractMatchingEntries=xq.prototype.smartExtractMatchingEntries;xq.prototype.storePayload=xq.prototype.storePayload;function yq(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function W(a,b){if(a)return a[b.name]}
;var Bq=Yk("initial_gel_batch_timeout",2E3),Cq=Yk("gel_queue_timeout_max_ms",6E4),Dq=Math.pow(2,16)-1,Eq=void 0;function Fq(){this.j=this.h=this.i=0}
var Gq=new Fq,Hq=new Fq,Iq=new Fq,Jq=new Fq,Kq,Lq=!0,Mq=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Mq);var Nq={};function Oq(){var a=E("yt.logging.ims");a||(a=new xq,D("yt.logging.ims",a));return a}
function Pq(a,b){if("log_event"===a.endpoint){var c=Qq(a);a:{var d=Object.keys(a.payload);d=v(d);for(var e=d.next();!e.done;e=d.next())if(e=e.value,jp[e]){d=e;break a}d=void 0}var f;a:if(U("enable_web_tiered_gel")){d=jp[d||""];var g;if(null==wq().resolve(new rq(bo)))var h=void 0;else e=null!=(h=E("yt.gcf.config.hotConfigGroup"))?h:null,h=null==e?void 0:null==(f=e.loggingHotConfig)?void 0:null==(g=f.eventLoggingConfig)?void 0:g.payloadPolicies;if(f=h)for(g=0;g<f.length;g++)if(f[g].payloadNumber===
d){f=f[g].tier;break a}f=200}else f=void 0;400===f?Rq(a,b):(Nq[c]=!0,f={cttAuthInfo:c,isJspb:!1,tier:f},Oq().storePayload(f,a.payload),Sq(b,c,f))}}
function Sq(a,b,c){function d(){Tq({writeThenSend:!0},U("flush_only_full_queue")?b:void 0,e,c.tier)}
var e=!1;e=void 0===e?!1:e;a&&(Eq=new a);a=Uq();var f=V(),g=Vq(e,c.tier),h=g.j,k=0;c&&(k=Oq().getSequenceCount(c));1E3<=k&&U("web_logging_max_batch_hard_limit")?d():k>=a?Kq||(Kq=Wq(function(){d();Kq=void 0},0)):10<=f-h&&(Xq(e,c.tier),g.j=f)}
function Rq(a,b){if("log_event"===a.endpoint){var c=Qq(a),d=new Map;d.set(c,[a.payload]);b&&(Eq=new b);return new wf(function(e,f){Eq&&Eq.isReady()?Yq(d,Eq,e,f,{bypassNetworkless:!0},!0):e()})}}
function Qq(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Mq[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Tq(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new wf(function(e,f){var g=Vq(c,d);Zq(g.i);Zq(g.h);g.h=0;Eq&&Eq.isReady()?void 0===d&&U("enable_web_tiered_gel")?($q(e,f,a,b,c,300),$q(e,f,a,b,c,200)):$q(e,f,a,b,c,d):(Xq(c,d),e())})}
function $q(a,b,c,d,e,f){var g=Eq;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;var h=new Map;var k={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=U("enable_web_tiered_gel")?Oq().smartExtractMatchingEntries({keys:[k,e],sizeLimit:Uq()}):Oq().extractMatchingEntries(e),h.set(d,f);else for(d=v(Object.keys(Nq)),k=d.next();!k.done;k=d.next())k=k.value,e=U("enable_web_tiered_gel")?Oq().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:k,tier:f},{isJspb:!1,cttAuthInfo:k}],
sizeLimit:Uq()}):Oq().extractMatchingEntries({isJspb:!1,cttAuthInfo:k}),0<e.length&&h.set(k,e),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete Nq[k];Yq(h,g,a,b,c)}
function Xq(a,b){a=void 0===a?!1:a;b=void 0===b?200:b;var c=Vq(a,b),d=c===Jq||c===Iq?5E3:Cq;U("web_gel_timeout_cap")&&!c.h&&(d=Wq(function(){Tq({writeThenSend:!0},void 0,a,b)},d),c.h=d);
Zq(c.i);d=S("LOGGING_BATCH_TIMEOUT",Yk("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&Lq&&(d=Bq);d=Wq(function(){Tq({writeThenSend:!0},void 0,a,b)},d);
c.i=d}
function Yq(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(V()),h=a.size,k={};a=v(a);for(var l=a.next();!l.done;k={Qb:k.Qb,Za:k.Za,Fb:k.Fb,Sb:k.Sb,Rb:k.Rb},l=a.next()){var n=v(l.value);l=n.next().value;n=n.next().value;k.Za=ub({context:ho(b.config_||go())});if(!Qa(n)&&!U("throw_err_when_logevent_malformed_killswitch")){d();break}k.Za.events=n;(n=Mq[l])&&ar(k.Za,l,n);delete Mq[l];k.Fb="visitorOnlyApprovedKey"===l;br(k.Za,g,k.Fb);U("always_send_and_write")&&(e.writeThenSend=!1);k.Sb=function(p){U("update_log_event_config")&&
fi.ma(function(){return A(function(t){return t.yield(cr(p),0)})});
h--;h||c()};
k.Qb=0;k.Rb=function(p){return function(){p.Qb++;if(e.bypassNetworkless&&1===p.Qb)try{Oo(b,"log_event",p.Za,dr({writeThenSend:!0},p.Fb,p.Sb,p.Rb,f)),Lq=!1}catch(t){Jk(t),d()}h--;h||c()}}(k);
try{Oo(b,"log_event",k.Za,dr(e,k.Fb,k.Sb,k.Rb,f)),Lq=!1}catch(p){Jk(p),d()}}}
function dr(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,qd:a,dangerousLogToVisitorSession:b,tf:!!e,headers:{},postBodyFormat:"",postBody:"",compress:U("compress_gel")||U("compress_gel_lr")};er()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));return a}
function br(a,b,c){er()||(a.requestTimeMs=String(b));U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&((c=S("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*Dq/2)),c++,c>Dq&&(c=1),Fk("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function ar(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function er(){return U("use_request_time_ms_header")||U("lr_use_request_time_ms_header")}
function Wq(a,b){return U("transport_use_scheduler")?dm(a,b):cl(a,b)}
function Zq(a){U("transport_use_scheduler")?fi.Fa(a):window.clearTimeout(a)}
function cr(a){var b,c,d,e,f,g,h,k,l,n;return A(function(p){return 1==p.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=W(d,ik),g=null==(f=d)?void 0:f.hotHashData,h=W(d,hk),l=null==(k=d)?void 0:k.coldHashData,(n=wq().resolve(new rq(bo)))?g?e?p.yield(co(n,g,e),2):p.yield(co(n,g),2):p.v(2):p.return()):l?h?p.yield(eo(n,l,h),0):p.yield(eo(n,l),0):p.v(0)})}
function Vq(a,b){b=void 0===b?200:b;return a?300===b?Jq:Hq:300===b?Iq:Gq}
function Uq(){return Yk("tvhtml5_logging_max_batch_ads_fork")||Yk("web_logging_max_batch")||100}
;var fr=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",fr);
function gr(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||V());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=bq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};U("log_sequence_info_on_gel_web")&&d.sequenceGroup&&(a=e.context,b=d.sequenceGroup,fr[b]=b in fr?fr[b]+1:0,a.sequence={index:fr[b],groupKey:b},d.endOfSequence&&delete fr[d.sequenceGroup]);(d.sendIsolatedPayload?Rq:Pq)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function rm(a,b,c){c=void 0===c?{}:c;var d=Lp;S("ytLoggingEventsDefaultDisabled",!1)&&Lp===Lp&&(d=null);U("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=bq(),c.timestamp=V());gr(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var hr=new Set,ir=0,jr=0,kr=0,lr=[],mr=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function qm(a){nr(a)}
function or(a){nr(a,"WARNING")}
function nr(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||S("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||S("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),U("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=ir))){d=lr;var k=ye(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var t=0;t<a.args.length&&!(p=Al(a.args[t],"params."+t,c,p),
500<=p);t++);else if(a.hasOwnProperty("params")&&a.params){var r=a.params;if("object"===typeof a.params)for(t in r){if(r[t]){var x="params."+t,y=Cl(r[t]);c[x]=y;p+=x.length+y.length;if(500<p)break}}else c.params=Cl(r)}if(d.length)for(t=0;t<d.length&&!(p=Al(d[t],"params.context."+t,c,p),500<=p);t++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);t={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(t.lineNumber=
t.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=wl();c=v(a.Ua);for(d=c.next();!d.done;d=c.next())if(d=d.value,t.message&&t.message.match(d.Ef)){a=d.weight;break a}a=v(a.Ra);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(t)){a=c.weight;break a}a=1}t.sampleWeight=a;a=v(rl);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.hc[t.name])for(e=v(c.hc[t.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=t.message.match(f.regexp)){t.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],t.params["params.error."+e[n]]=d[n+1];t.message=c.Ic(f);break}t.params||(t.params={});a=wl();t.params["params.errorServiceSignature"]="msg="+a.Ua.length+"&cb="+a.Ra.length;t.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(t.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Bb("sample").constructor!==zb&&(t.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(t);
if(0!==t.sampleWeight&&!hr.has(t.message)){if(g&&U("web_enable_error_204"))pr(void 0===b?"ERROR":b,t);else{b=void 0===b?"ERROR":b;"ERROR"===b?(xl.cb("handleError",t),U("record_app_crashed_web")&&0===kr&&1===t.sampleWeight&&(kr++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},U("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:t.message}}}}),rm("appCrashed",g)),jr++):"WARNING"===b&&xl.cb("handleWarning",t);if(U("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=v(mr);for(c=a.next();!c.done;c=a.next())if(ym(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:t.stack};t.fileName&&(c.filename=t.fileName);a=t.lineNumber&&t.lineNumber.split?t.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:t.message,errorClassName:t.name,sampleWeight:t.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];S("FEXP_EXPERIMENTS")&&(h.experimentIds=S("FEXP_EXPERIMENTS"));d=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");e=Ek.EXPERIMENT_FLAGS;if((!e||!e.web_disable_gel_stp_ecatcher_killswitch)&&d)for(f=v(Object.keys(d)),e=f.next();!e.done;e=f.next())e=e.value,h.kvPairs.push({key:e,value:String(d[e])});if(d=t.params)for(f=v(Object.keys(d)),
e=f.next();!e.done;e=f.next())e=e.value,h.kvPairs.push({key:"client."+e,value:String(d[e])});d=S("SERVER_NAME");e=S("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(rm("clientError",h),("ERROR"===g||U("errors_flush_gel_always_killswitch"))&&Tq(void 0,void 0,!1))}U("suppress_error_204_logging")||pr(b,t)}try{hr.add(t.message)}catch(z){}ir++}}}
function pr(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}il(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function qr(){this.register=new Map}
function rr(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Gf("ABORTED")}
qr.prototype.clear=function(){rr(this);this.register.clear()};
var sr=new qr;var tr=Date.now().toString();
function ur(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(tr)for(a=1,b=0;b<tr.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^tr.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var vr,wr=C.ytLoggingDocDocumentNonce_;wr||(wr=ur(),D("ytLoggingDocDocumentNonce_",wr));vr=wr;function xr(a){this.h=a}
xr.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
xr.prototype.getAsJspb=function(){var a=new rk;if(void 0!==this.h.trackingParams){var b=this.h.trackingParams;if(null!=b)if("string"===typeof b)b=b?new Bd(b,yd):zd||(zd=new Bd(null,yd));else if(b.constructor!==Bd)if(xd(b))b instanceof Uint8Array||Array.isArray(b),b=b.length?new Bd(new Uint8Array(b),yd):zd||(zd=new Bd(null,yd));else throw Error();L(a,1,b)}else void 0!==this.h.veType&&L(a,2,Rd(this.h.veType)),void 0!==this.h.veCounter&&L(a,6,Rd(this.h.veCounter)),void 0!==this.h.elementIndex&&L(a,3,
Rd(this.h.elementIndex)),this.h.isCounterfactual&&L(a,5,Qd(!0));void 0!==this.h.dataElement&&(b=this.h.dataElement.getAsJspb(),be(a,rk,7,b));void 0!==this.h.youtubeData&&be(a,kk,8,this.h.jspbYoutubeData);return a};
xr.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
xr.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function yr(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function zr(a){a=void 0===a?0:a;return U("new_csn_storage_design")?S("client-screen-nonce-store",{})[a]:S(yr(a))}
function Ar(a,b){b=void 0===b?0:b;if(U("new_csn_storage_design")){var c=S("client-screen-nonce-store");c||(c={},Fk("client-screen-nonce-store",c));c[b]=a}Fk(yr(b),a)}
function Br(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Cr(a){return S(Br(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",Cr);function Dr(){var a=S("csn-to-ctt-auth-info");a||(a={},Fk("csn-to-ctt-auth-info",a));return a}
function Er(){return Object.values(S("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function Fr(a){a=zr(void 0===a?0:a);if(!a&&!S("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",Fr);function Gr(a,b,c){var d=Dr();(c=Fr(c))&&delete d[c];b&&(d[a]=b)}
function Hr(a){return Dr()[a]}
D("yt_logging_screen.getCttAuthInfo",Hr);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==zr(c)||b!==S(Br(c)))if(Gr(a,d,c),Ar(a,c),Fk(Br(c),b),b=function(){setTimeout(function(){a&&rm("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:vr,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var Ir=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",Ir);function Jr(a){Ak(Ir,arguments)}
;function Kr(){var a=tb(Lr),b;return(new wf(function(c,d){a.onSuccess=function(e){bl(e)?c(new Mr(e)):d(new Nr("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Nr("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Nr("Request timed out","net.timeout",e))};
b=il("//googleads.g.doubleclick.net/pagead/id",a)})).nc(function(c){c instanceof Hf&&b.abort();
return Cf(c)})}
function Nr(a,b,c){ab.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(Nr,ab);function Mr(a){this.xhr=a}
;function Or(){this.h=0;this.i=null}
Or.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.i))&&"function"===typeof a.then?a:Pr(a):2===this.h&&b?(a=b.call(c,this.i))&&"function"===typeof a.then?a:Qr(a):this};
Or.prototype.getValue=function(){return this.i};
Or.prototype.isRejected=function(){return 2==this.h};
Or.prototype.$goog_Thenable=!0;function Qr(a){var b=new Or;a=void 0===a?null:a;b.h=2;b.i=void 0===a?null:a;return b}
function Pr(a){var b=new Or;a=void 0===a?null:a;b.h=1;b.i=void 0===a?null:a;return b}
;function Rr(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:Uk(a)?"same-origin":"cors",credentials:Uk(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Sr(){return wg()||(id||jd)&&ym("applewebkit")&&!ym("version")&&(!ym("safari")||ym("gsa/"))||Zc&&ym("version/")?!0:S("EOM_VISITOR_DATA")?!1:!0}
;function Tr(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in pk)if(pk[d]==c.embeddedPlayerMode){b=pk[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Ur(a){ab.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Vr;this.isTimeout=a instanceof Nr&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Hf}
w(Ur,ab);Ur.prototype.name="BiscottiError";function Vr(){ab.call(this,"Biscotti ID is missing from server")}
w(Vr,ab);Vr.prototype.name="BiscottiMissingError";var Lr={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Wr=null;function Xr(){if(U("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Sr())return Error("User has not consented - not fetching biscotti id.");var a=S("PLAYER_VARS",{});if("1"==rb(a))return Error("Biscotti ID is not available in private embed mode");if(Tr(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function yk(){var a=Xr();if(void 0!==a)return Cf(a);Wr||(Wr=Kr().then(Yr).nc(function(b){return Zr(2,b)}));
return Wr}
function Yr(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Vr;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Vr;a=a.id;zk(a);Wr=Pr(a);$r(18E5,2);return a}
function Zr(a,b){b=new Ur(b);zk("");Wr=Qr(b);0<a&&$r(12E4,a-1);throw b;}
function $r(a,b){cl(function(){Kr().then(Yr,function(c){return Zr(b,c)}).nc(cb)},a)}
function as(){try{var a=E("yt.ads.biscotti.getId_");return a?a():yk()}catch(b){return Cf(b)}}
;function bs(a){if("1"!=rb(S("PLAYER_VARS",{}))){a&&xk();try{as().then(function(){},function(){}),cl(bs,18E5)}catch(b){Jk(b)}}}
;function cs(){var a=Ql(),b=Tl(119),c=1<window.devicePixelRatio;if(document.body&&pi(document.body,"exp-invert-logo"))if(c&&!pi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!pi(d,"inverted-hdpi")){var e=ni(d);oi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&pi(document.body,"inverted-hdpi")&&qi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Ul(b)||0;d=c?d|67108864:d&-67108865;0===d?delete Nl[b]:(c=d.toString(16),Nl[b]=c.toString());
c=!0;U("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in Nl)Nl.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Nl[f])));var f=d.join("&");Jl(b,f,63072E3,a.i,c)}}
;var ds=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function es(){var a=void 0===a?window.location.href:a;if(U("kevlar_disable_theme_param"))return null;tc(uc(5,a));try{var b=Sk(a).theme;return ds.get(b)||null}catch(c){}return null}
;function gs(){this.h={};if(this.i=Ml()){var a=Kl("CONSISTENCY");a&&hs(this,{encryptedTokenJarContents:a})}}
gs.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Na.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];hs(this,a)}};
function hs(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Jl("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var is=window.location.hostname.split(".").slice(-2).join(".");function js(){var a=S("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===S("INNERTUBE_CLIENT_NAME")&&(this.h=ks(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var ls;function ms(){ls=E("yt.clientLocationService.instance");ls||(ls=new js,D("yt.clientLocationService.instance",ls));return ls}
m=js.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===S("INNERTUBE_CLIENT_NAME")?(this.h=ks(this))&&this.h.set("yt-location-playability-token",a,15552E3):Jl("YT_CL",JSON.stringify({loctok:a}),15552E3,is,!0))};
function ks(a){return void 0===a.h?new im("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=ks(this))&&this.h.remove("yt-location-playability-token"):Ll("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===S("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function ns(a,b){if(!a)return!1;var c,d=null==(c=W(a,ok))?void 0:c.signal;if(d&&b.kb)return!!b.kb[d];var e;if((c=null==(e=W(a,lk))?void 0:e.request)&&b.vc)return!!b.vc[c];for(var f in a)if(b.uc[f])return!0;return!1}
function ps(a,b){var c,d=null==(c=W(a,ok))?void 0:c.signal;if(d&&b.kb&&(c=b.kb[d]))return c();var e;if((c=null==(e=W(a,lk))?void 0:e.request)&&b.vc&&(e=b.vc[c]))return e();for(var f in a)if(b.uc[f]&&(a=b.uc[f]))return a()}
;function qs(a){return function(){return new a}}
;var rs={},ss=(rs.WEB_UNPLUGGED="^unplugged/",rs.WEB_UNPLUGGED_ONBOARDING="^unplugged/",rs.WEB_UNPLUGGED_OPS="^unplugged/",rs.WEB_UNPLUGGED_PUBLIC="^unplugged/",rs.WEB_CREATOR="^creator/",rs.WEB_KIDS="^kids/",rs.WEB_EXPERIMENTS="^experiments/",rs.WEB_MUSIC="^music/",rs.WEB_REMIX="^music/",rs.WEB_MUSIC_EMBEDDED_PLAYER="^music/",rs.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",rs);
function ts(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=ss[b];if(c){var d=new RegExp(c),e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(ss).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function us(){}
us.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Gl:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=S("INNERTUBE_CONTEXT");if(g){g=ub(g);U("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=S("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;Ql();var l="USER_INTERFACE_THEME_LIGHT";Tl(165)?l="USER_INTERFACE_THEME_DARK":Tl(174)?l="USER_INTERFACE_THEME_LIGHT":!U("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");k=k?l:es()||l;h.userInterfaceTheme=k;if(!f){if(k=Yl())h.connectionType=
k;U("web_log_effective_connection_type")&&(k=Zl())&&(g.client.effectiveConnectionType=k)}var n;if(U("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var p;n=null==(p=C.navigator)?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}p=Sk(C.location.href);!U("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},U("kevlar_woffle")&&Hl.h&&
(p=Hl.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Il(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!U("web_lr_app_quality_killswitch")&&(p=S("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=S("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:p}));
if(!U("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var t=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(aa){}t=void 0}t&&(h.timeZone=t)}(t=S("EXPERIMENTS_TOKEN",""))?h.experimentsToken=t:delete h.experimentsToken;t=Zk();gs.h||(gs.h=new gs);h=gs.h.h;p=[];n=0;for(var r in h)p[n++]=h[r];g.request=Object.assign({},g.request,{internalExperimentFlags:t,consistencyTokenJars:p});!U("web_prequest_context_killswitch")&&(r=S("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&
(g.request.externalPrequestContext=r);t=Ql();r=Tl(58);t=t.get("gsml","");g.user=Object.assign({},g.user);r&&(g.user.enableSafetyMode=r);t&&(g.user.lockedSafetyMode=!0);U("warm_op_csn_cleanup")?e&&(f=Fr())&&(g.clientScreenNonce=f):!f&&(f=Fr())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;ms().setLocationOnInnerTubeContext(g);try{var x=Vk(),y=x.bid;delete x.bid;g.adSignalsInfo={params:[],bid:y};var z=v(Object.entries(x));
for(var I=z.next();!I.done;I=z.next()){var K=v(I.value),H=K.next().value,J=K.next().value;x=H;y=J;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:x,value:""+y})}}catch(aa){nr(aa)}z=g}else nr(Error("Error: No InnerTubeContext shell provided in ytconfig.")),z={};z={context:z};if(I=this.h(a)){this.i(z,I,b);var T;b="/youtubei/v1/"+ts(this.j());(I=null==(T=W(a.commandMetadata,nk))?void 0:T.apiUrl)&&(b=I);T=b;(b=S("INNERTUBE_HOST_OVERRIDE"))&&(T=String(b)+String(wc(T)));b={};b.key=S("INNERTUBE_API_KEY");
U("json_condensed_response")&&(b.prettyPrint="false");T=Tk(T,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:T,ib:Rr(T),Na:z,config:a};a.config.Ub?a.config.Ub.identity=c:a.config.Ub={identity:c};return a}nr(new $l("Error: Failed to create Request from Command.",a))};
ea.Object.defineProperties(us.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function vs(){}
w(vs,us);vs.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",ib:Rr("/getDatasyncIdsEndpoint","GET"),Na:{}}};
vs.prototype.j=function(){return[]};
vs.prototype.h=function(){};
vs.prototype.i=function(){};var ws={},xs=(ws.GET_DATASYNC_IDS=qs(vs),ws);function ys(a,b){var c=void 0===c?!0:c;var d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=vc(window.location.href);e&&d.push(e);e=vc(a);if(0<=eb(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),mc(d,a),a=d.href)if(a=wc(a),a=xc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Fr()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&zs(a,b,f)}else zs(a,b)}
function zs(a,b,c){a="ST-"+rc(a).toString(36);b=b?Bc(b):"";c=c||5;Sr()&&Jl(a,b,c)}
;function As(){try{return!!self.localStorage}catch(a){return!1}}
;function Bs(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Cs(a){if(As()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Bs(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Ds(){if(!As())return!1;var a=bm(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=Bs(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Es(a){if(wg()){var b=S("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=vc(window.location.href);c&&b.push(c);c=vc(a);0<=eb(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=wc(a),(b=xc(b))?(b="ST-"+rc(b).toString(36),b=(b=Kl(b)||null)?Rk(b):{}):b=null):b=null;null==b&&(b={});c=S("LOGIN_INFO");U("copy_login_info_to_st_cookie")&&c&&(b.session_logininfo=c);ys(a,b)}}
;function Fs(a){var b=B.apply(1,arguments);if(!Gs(a)||b.some(function(d){return!Gs(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())Hs(a,c.value);return a}
function Hs(a,b){for(var c in b)if(Gs(b[c])){if(c in a&&!Gs(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Hs(a[c],b[c])}else if(Is(b[c])){if(c in a&&!Is(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Js(a[c],b[c])}else a[c]=b[c];return a}
function Js(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Gs(c)?a.push(Hs({},c)):Is(c)?a.push(Js([],c)):a.push(c);return a}
function Gs(a){return"object"===typeof a&&!Array.isArray(a)}
function Is(a){return"object"===typeof a&&Array.isArray(a)}
;function Ks(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Ls(){var a=Ks();a.info||(a.info={});return a.info}
function Ms(a){a=Ks(a);a.metadata||(a.metadata={});return a.metadata}
function Ns(a){a=Ks(a);a.tick||(a.tick={});return a.tick}
function Os(a){a=Ks(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Ps(a){a=Os(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Qs(a){var b=Ks(a).nonce;b||(b=ur(),Ks(a).nonce=b);return b}
;function Rs(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function Ss(a){a=a||"";var b=E("ytcsi.reference");b||(Rs(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=Rs(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var X={},Ts=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
X["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",X["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",X["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",X["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",X["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",X["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",X["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",X["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",
X["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",X["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",
X["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",X["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",X["channel.translations"]=
"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",
X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.home="LATENCY_ACTION_HOME",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.onboarding="LATENCY_ACTION_ONBOARDING",X.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",X["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",X["owner.analytics"]=
"LATENCY_ACTION_CREATOR_CMS_ANALYTICS",X["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",X["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",X["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",X["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",X["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",X["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",X["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
X["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",X["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",X["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",X["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",X["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",X["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",X["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",X["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",
X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",
X.results="LATENCY_ACTION_RESULTS",X["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again=
"LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",X["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.copyright"]=
"LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",X["video.rights_management"]=
"LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X),Y={},Us=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",
Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cs="commandSource",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.ctop="creatorInfo.topEntityType",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid="requestIds",Y.GetLibrary_rid="requestIds",
Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.nav_type="kabukiInfo.navigationType",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.pnt="performanceNavigationTiming",
Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.rc="resourceInfo.resourceCache",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.ssdm="shellStartupDurationMs",Y.br_trs=
"tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.aac_type="tvInfo.authAccessCredentialType",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",
Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),Vs="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Ws={},Xs=(Ws.ccs="CANARY_STATE_",
Ws.mver="MEASUREMENT_VERSION_",Ws.pis="PLAYER_INITIALIZED_STATE_",Ws.yt_pt="LATENCY_PLAYER_",Ws.pa="LATENCY_ACTION_",Ws.ctop="TOP_ENTITY_TYPE_",Ws.yt_vst="VIDEO_STREAM_TYPE_",Ws),Ys="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Zs(a,b,c){c=Os(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Us){c=Us[a];0<=eb(Vs,c)&&(b=!!b);a in Xs&&"string"===typeof b&&(b=Xs[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Fs({},d)}0<=eb(Ys,a)||or(new $l("Unknown label logged with GEL CSI",a))}
;function $s(a,b){jo.call(this,1,arguments);this.timer=b}
w($s,jo);var at=new ko("aft-recorded",$s);var bt=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",bt);function ct(){this.h=0}
function dt(){ct.h||(ct.h=new ct);return ct.h}
ct.prototype.tick=function(a,b,c,d){et(this,"tick_"+a+"_"+b)||rm("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
ct.prototype.info=function(a,b,c){var d=Object.keys(a).join("");et(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,rm("latencyActionInfo",a,{cttAuthInfo:c}))};
ct.prototype.jspbInfo=function(){};
ct.prototype.span=function(a,b,c){var d=Object.keys(a).join("");et(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,rm("latencyActionSpan",a,{cttAuthInfo:c}))};
function et(a,b){bt[b]=bt[b]||{count:0};var c=bt[b];c.count++;c.time=V();a.h||(a.h=dm(function(){var d=V(),e;for(e in bt)bt[e]&&6E4<d-bt[e].time&&delete bt[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new $l("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||or(c)),!0):!1}
;var ft=window;function gt(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function ht(){var a;if(U("csi_use_performance_navigation_timing")||U("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Z?void 0:null==(a=Z.getEntriesByType)?void 0:null==(b=a.call(Z,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=jt(e.requestStart),e.responseEnd=jt(e.responseEnd),e.redirectStart=jt(e.redirectStart),e.redirectEnd=jt(e.redirectEnd),e.domainLookupEnd=jt(e.domainLookupEnd),e.connectStart=jt(e.connectStart),e.connectEnd=
jt(e.connectEnd),e.responseStart=jt(e.responseStart),e.secureConnectionStart=jt(e.secureConnectionStart),e.domainLookupStart=jt(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Z.timing}else a=Z.timing;return a}
function jt(a){return Math.round(kt()+a)}
function kt(){return(U("csi_use_time_origin")||U("csi_use_time_origin_tvhtml5"))&&Z.timeOrigin?Math.floor(Z.timeOrigin):Z.timing.navigationStart}
var Z=ft.performance||ft.mozPerformance||ft.msPerformance||ft.webkitPerformance||new gt;var lt=!1,mt={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Xa(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||cb,Z);function nt(a,b,c){if(null!==b){if("yt_lt"===a){var d="string"===typeof b?b:""+b;Ms(c).loadType=d}(a=Zs(a,b,c))&&ot(a,c)}}
function ot(a,b){var c=Ss(b||"");Fs(c.info,a);a.loadType&&(c=a.loadType,Ms(b).loadType=c);Fs(Ps(b),a);c=Qs(b);b=Ks(b).cttAuthInfo;dt().info(a,c,b)}
function pt(a,b,c){if(!b&&"_"!==a[0]){var d=a;Z.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),Z.mark(d))}d=Ss(c||"");d.tick[a]=b||V();if(d.callback&&d.callback[a]){d=v(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=Os(c);d.gelTicks&&(d.gelTicks[a]=!0);e=Ns(c);d=b||V();U("log_repeated_ytcsi_ticks")?a in e||(e[a]=d):e[a]=d;e=Qs(c);var f=Ks(c).cttAuthInfo;"_start"===a?(a=dt(),et(a,"baseline_"+e)||rm("latencyActionBaselined",{clientActionNonce:e},{timestamp:b,
cttAuthInfo:f})):dt().tick(a,e,b,f);qt(c);return d}
function rt(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Np+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function st(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);pc()&&a.setAttribute("nonce",pc());return c?(a=Z.getEntriesByName(c))&&a[0]&&(a=a[0],c=kt(),pt("rsf_"+b,c+Math.round(a.fetchStart)),pt("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function tt(){var a=window.location.protocol,b=Z.getEntriesByType("resource");b=gb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=ib(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(pt("wffs",jt(b.startTime)),pt("wffe",jt(b.responseEnd)))}
function ut(a){var b=vt("aft",a);if(b)return b;b=S((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=vt(b[d],a);if(e)return e}return NaN}
function vt(a,b){if(a=Ns(b)[a])return"number"===typeof a?a:a[a.length-1]}
function qt(a){var b=vt("_start",a),c=ut(a);b&&c&&!lt&&(po(at,new $s(Math.round(c-b),a)),lt=!0)}
function wt(a,b){for(var c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!wt(a[d],b[d]))return!1;return!0}
function xt(){if(Z.getEntriesByType){var a=Z.getEntriesByType("paint");if(a=jb(a,function(b){return"first-paint"===b.name}))return jt(a.startTime)}a=Z.timing;
return a.xe?Math.max(0,a.xe):0}
;function zt(a,b){Ik(function(){Ss("").info.actionType=a;b&&Fk("TIMING_AFT_KEYS",b);Fk("TIMING_ACTION",a);var c=S("TIMING_INFO",{}),d;for(d in c)c.hasOwnProperty(d)&&nt(d,c[d]);c={isNavigation:!0,actionType:Ts[S("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};if(d=S("PREVIOUS_ACTION"))c.previousAction=Ts[d]||"LATENCY_ACTION_UNKNOWN";if(d=S("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=S("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Fr())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=rt();if(1===d||-1===d)c.isVisible=
!0;Ms();Ls();c.loadType="cold";d=Ls();var e=ht(),f=kt(),g=S("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!U("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(pt("srt",e.responseStart),1!==d.prerender&&pt("_start",f,void 0));d=xt();0<d&&pt("fpt",d);d=ht();d.isPerformanceNavigationTiming&&ot({performanceNavigationTiming:!0});pt("nreqs",d.requestStart,void 0);pt("nress",d.responseStart,void 0);pt("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(pt("nrs",d.redirectStart,void 0),pt("nre",
d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(pt("ndnss",d.domainLookupStart,void 0),pt("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(pt("ntcps",d.connectStart,void 0),pt("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=kt()&&0<d.connectEnd-d.secureConnectionStart&&(pt("nstcps",d.secureConnectionStart,void 0),pt("ntcpe",d.connectEnd,void 0));Z&&"getEntriesByType"in Z&&tt();d=[];if(document.querySelector&&Z&&Z.getEntriesByName)for(var h in mt)mt.hasOwnProperty(h)&&
(e=mt[h],st(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});ot(c);c=Ls();h=Ps();if("cold"===Ms().loadType&&("cold"===c.yt_lt||"cold"===h.loadType)){d=Ns();e=Os();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if("number"===typeof d[k])pt(k,vt(k));else if(U("log_repeated_ytcsi_ticks"))for(f=v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,pt(k.slice(1),g);k={};d=!1;e=v(Object.keys(c));for(f=e.next();!f.done;f=
e.next())f=f.value,(f=Zs(f,c[f]))&&!wt(Ps(),f)&&(Fs(h,f),Fs(k,f),d=!0);d&&ot(k)}D("ytglobal.timingready_",!0);k=S("TIMING_ACTION");E("ytglobal.timingready_")&&k&&At()&&ut()&&qt()})()}
function Bt(a,b,c,d){Ik(nt)(a,b,c,d)}
function Ct(a,b,c){return Ik(pt)(a,b,c)}
function At(){return Ik(function(){return"_start"in Ns()})()}
function Dt(){Ik(function(){var a=Qs();requestAnimationFrame(function(){setTimeout(function(){a===Qs()&&Ct("ol",void 0,void 0)},0)})})()}
var Et=window;Et.ytcsi&&(Et.ytcsi.info=Bt,Et.ytcsi.tick=Ct);var Ft="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),Gt=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Ht(a,b,c,d){this.j=a;this.Y=b;this.m=c;this.l=d;this.i=void 0;this.h=new Map;a.kb||(a.kb={});a.kb=Object.assign({},xs,a.kb)}
function It(a,b,c,d){if(void 0!==Ht.h){if(d=Ht.h,a=[a!==d.j,b!==d.Y,c!==d.m,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new $l("InnerTubeTransportService is already initialized",a);
}else Ht.h=new Ht(a,b,c,d)}
function Jt(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Gl:c;var d=ps(b,a.j);if(!d)return Cf(new $l("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?(Es(e.input),new wf(function(f){var g,h,k;return A(function(l){if(1==l.h){h="cors"===(null==(g=e.ib)?void 0:g.mode)?"cors":void 0;if(a.m.Ue){var n=e.config,p;n=null==n?void 0:null==(p=n.Ub)?void 0:p.sessionIndex;p=Fl(0,{sessionIndex:n});k=Object.assign({},Kt(h),p);return l.v(2)}return l.yield(Lt(e.config,
h),3)}2!=l.h&&(k=l.i);f(Mt(a,e,k));l.h=0})})):Cf(new $l("Error: Failed to build request for command.",b))}
function Nt(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.If)?0:d.Mf)&&a.l){d=v(Ft);for(var e=d.next();!e.done;e=d.next())e=e.value,a.l[e]&&a.l[e].handleResponse(b,c)}}
function Mt(a,b,c){var d,e,f,g,h,k,l,n,p,t,r,x,y,z,I,K,H,J,T,aa,Ga,oa,Ka,Ba,Aa,zg,fq,gq,hq;return A(function(ha){switch(ha.h){case 1:ha.v(2);break;case 3:if((d=ha.i)&&!d.isExpired())return ha.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Na)?0:f.context)){ha.v(4);break}g=b.Na.context;ha.v(5);break;case 5:h=v([]),k=h.next();case 7:if(k.done){ha.v(4);break}l=k.value;return ha.yield(l.Ff(g),8);case 8:k=h.next();ha.v(7);break;case 4:if(null==(n=a.i)||!n.Jf(b.input,b.Na)){ha.v(11);
break}return ha.yield(a.i.Cf(b.input,b.Na),12);case 12:return p=ha.i,U("kevlar_process_local_innertube_responses_killswitch")||Nt(a,p,b),ha.return(p);case 11:return(x=null==(r=b.config)?void 0:r.Pa)&&a.h.has(x)&&U("web_memoize_inflight_requests")?t=a.h.get(x):(y=JSON.stringify(b.Na),K=null!=(I=null==(z=b.ib)?void 0:z.headers)?I:{},b.ib=Object.assign({},b.ib,{headers:Object.assign({},K,c)}),H=Object.assign({},b.ib),"POST"===b.ib.method&&(H=Object.assign({},H,{body:y})),(null==(J=b.config)?0:J.Ee)&&
Ct(b.config.Ee),T=function(){return a.Y.fetch(b.input,H,b.config)},t=T(),x&&a.h.set(x,t)),ha.yield(t,13);
case 13:if((aa=ha.i)&&"error"in aa&&(null==(Ga=aa)?0:null==(oa=Ga.error)?0:oa.details))for(Ka=aa.error.details,Ba=v(Ka),Aa=Ba.next();!Aa.done;Aa=Ba.next())zg=Aa.value,(fq=zg["@type"])&&-1<Gt.indexOf(fq)&&(delete zg["@type"],aa=zg);x&&a.h.has(x)&&a.h.delete(x);(null==(gq=b.config)?0:gq.Fe)&&Ct(b.config.Fe);if(aa||null==(hq=a.i)||!hq.uf(b.input,b.Na)){ha.v(14);break}return ha.yield(a.i.Bf(b.input,b.Na),15);case 15:aa=ha.i;case 14:return Nt(a,aa,b),ha.return(aa||void 0)}})}
function Lt(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Ub)?void 0:d.sessionIndex;var h=g.yield;var k=Bf(Fl(0,{sessionIndex:e}));return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Kt(b),f)))})}
function Kt(a){var b={"Content-Type":"application/json"};S("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=S("EOM_VISITOR_DATA"):S("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=S("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=S("LOGGED_IN",!1);"cors"!==a&&((a=S("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=S("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=S("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=S("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Ot=new qq("INNERTUBE_TRANSPORT_TOKEN");var Pt=["share/get_web_player_share_panel"],Qt=["feedback"],Rt=["notification/modify_channel_preference"],St=["browse/edit_playlist"],Tt=["subscription/subscribe"],Ut=["subscription/unsubscribe"];function Vt(){}
w(Vt,us);Vt.prototype.j=function(){return Tt};
Vt.prototype.h=function(a){return W(a,wk)||void 0};
Vt.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ea.Object.defineProperties(Vt.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Wt(){}
w(Wt,us);Wt.prototype.j=function(){return Ut};
Wt.prototype.h=function(a){return W(a,vk)||void 0};
Wt.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ea.Object.defineProperties(Wt.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Xt(){}
w(Xt,us);Xt.prototype.j=function(){return Qt};
Xt.prototype.h=function(a){return W(a,qk)||void 0};
Xt.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ea.Object.defineProperties(Xt.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Yt(){}
w(Yt,us);Yt.prototype.j=function(){return Rt};
Yt.prototype.h=function(a){return W(a,uk)||void 0};
Yt.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Zt(){}
w(Zt,us);Zt.prototype.j=function(){return St};
Zt.prototype.h=function(a){return W(a,tk)||void 0};
Zt.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function $t(){}
w($t,us);$t.prototype.j=function(){return Pt};
$t.prototype.h=function(a){return W(a,sk)};
$t.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var au=new qq("NETWORK_SLI_TOKEN");function bu(a){this.h=a}
bu.prototype.fetch=function(a,b){var c=this,d,e,f;return A(function(g){c.h&&(d=tc(uc(5,Ic(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=b;U("wug_networking_gzip_request")&&(e=Ho(b));f=new window.Request(a,e);return U("web_fetch_promise_cleanup_killswitch")?g.return(Promise.resolve(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){or(h)}))):g.return(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){or(h)}))})};
bu.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.xf(),b=b.then(function(c){or(new $l("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
bu[pq]=[new rq(au)];var cu=new qq("NETWORK_MANAGER_TOKEN");var du;function eu(){var a=fu,b=gu,c=hu;this.l=iu;this.navigate=a;this.i=b;this.j=c;this.h=new Set}
function ju(a,b,c){if(ku(b))lu(a,b,c);else{var d=a.l(b,c);if(null==c?0:c.sc)d.sc=c.sc;0===d.type?a.navigate?mu(d.command)?nu(a,d.command)||(b=a.navigate(d)||[],Ff(b).then(function(){a.h.delete(d.command)})):nr(Error("Error: Command handler page requests need to specify a url.")):nr(Error("Error: Command handler navigate function was called but not set.")):1===d.type?a.i?nu(a,d.command)||(b=a.i(d),Ff(b).then(function(){a.h.delete(d.command)})):nr(Error("Error: Command handler handle service request function was called but not set.")):
2===d.type&&(a.j?a.j(d):nr(Error("Error: Command handler send action was called but not set.")))}}
function nu(a,b){if(a.h.has(b))return!0;a.h.add(b);return!1}
function ku(a){var b=!!W(a,jk),c;a="CLIENT_SIGNAL"===(null==(c=W(a,ok))?void 0:c.signal);return b||a}
function lu(a,b,c){var d=W(b,jk);if(d)var e=(null==d?void 0:d.commands)||[];else{var f;if("CLIENT_SIGNAL"===(null==(f=W(b,ok))?void 0:f.signal)){var g;e=(null==(g=W(b,ok))?void 0:g.actions)||[]}}if(e)for(b=v(e),e=b.next();!e.done;e=b.next()){e=e.value;try{ju(a,e,c)}catch(h){h instanceof Error&&nr(h)}}else nr(Error("Could not handle the meta command."))}
function mu(a){var b;return!(null==(b=W(null==a?void 0:a.commandMetadata,nk))||!b.url)}
;function ou(){var a,b,c;return A(function(d){if(1==d.h)return a=wq().resolve(Ot),a?d.yield(Jt(a),2):(or(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return or(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.vf;return d.return(c)}or(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var pu=C.caches,qu;function ru(a){var b=a.indexOf(":");return-1===b?{td:a}:{td:a.substring(0,b),datasyncId:a.substring(b+1)}}
function su(){return A(function(a){if(void 0!==qu)return a.return(qu);qu=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return xa(d,2),d.yield(pu.open("test-only"),4);case 4:return d.yield(pu.delete("test-only"),5);case 5:ya(d,3);break;case 2:if(c=za(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(qu)})}
function tu(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(su(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(pu.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=ru(f),h=g.datasyncId,!h||a.includes(h)||b.push(pu.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function uu(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(su(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=bm("cache contains other");return h.yield(pu.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=ru(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function vu(){ou().then(function(a){a&&(Hn(a),tu(a),Cs(a))})}
function wu(){var a=new zp;fi.ma(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(U("ytidb_clear_optimizations_killswitch")){f.v(2);break}b=bm("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];Hn(g);tu(g);Cs(g);return f.return()}c=Ds();return f.yield(uu(),3);case 3:return d=f.i,f.yield(In(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.ta()?vu():a.l.add("publicytnetworkstatus-online",vu,!0,void 0,void 0),f.h=0}})})}
;var Kh=ia(["data-"]);function xu(a){a&&(a.dataset?a.dataset[yu("loaded")]="true":Jh(a))}
function zu(a,b){return a?a.dataset?a.dataset[yu(b)]:a.getAttribute("data-"+b):null}
var Au={};function yu(a){return Au[a]||(Au[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Bu=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Cu=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Du(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Bu,""),c=c.replace(Cu,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Eu(a,b,c)}
function Eu(a,b,c){c=void 0===c?null:c;var d=Fu(a),e=document.getElementById(d),f=e&&zu(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=jq(d,b),b=""+Sa(b),Gu[b]=f),g||(e=Hu(a,d,function(){if(!zu(e,"loaded")){xu(e);mq(d);var h=Ya(nq,d);cl(h,0)}},c)))}
function Hu(a,b,c,d){d=void 0===d?null:d;var e=jf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Nh(e,fk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Iu(a){a=Fu(a);var b=document.getElementById(a);b&&(nq(a),b.parentNode.removeChild(b))}
function Ju(a,b){a&&b&&(a=""+Sa(b),(a=Gu[a])&&lq(a))}
function Fu(a){var b=document.createElement("a");mc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+rc(a)}
var Gu={};var Ku=[],Lu=!1;function Mu(){if(!U("disable_biscotti_fetch_for_ad_blocker_detection")&&!U("disable_biscotti_fetch_entirely_for_all_web_clients")&&Sr()){var a=S("PLAYER_VARS",{});if("1"!=rb(a)&&!Tr(a)){var b=function(){Lu=!0;"google_ad_status"in window?Fk("DCLKSTAT",1):Fk("DCLKSTAT",2)};
try{Du("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Ku.push(fi.ma(function(){if(!(Lu||"google_ad_status"in window)){try{Ju("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Lu=!0;Fk("DCLKSTAT",3)}},5E3))}}}
function Nu(){var a=Number(S("DCLKSTAT",0));return isNaN(a)?0:a}
;var Ou=window;function Pu(){var a,b;return"h5vcc"in Ou&&(null==(a=Ou.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Ou.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Ou&&Ou.performance.mark&&Ou.performance.measure?2:0}
function Qu(a){switch(Pu()){case 1:Ou.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Ou.performance.mark(a+"-start");break;case 0:break;default:Lh()}}
function Ru(a){switch(Pu()){case 1:Ou.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Ou.performance.mark(c);Ou.performance.measure(a,b,c);break;case 0:break;default:Lh()}}
;var Su=U("web_enable_lifecycle_monitoring")&&0!==Pu();function Tu(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?hm():d;this.j=c;this.scheduler=d;this.i=new Ah;this.h=a;for(a={ab:0};a.ab<this.h.length;a={Gb:a.Gb,ab:a.ab},a.ab++)a.Gb=this.h[a.ab],c=function(e){return function(){e.Gb.Fc();b.h[e.ab].jc=!0;b.h.every(function(f){return!0===f.jc})&&b.i.resolve()}}(a),d=this.getPriority(a.Gb),d=em(c,d),this.h[a.ab]=Object.assign({},a.Gb,{Fc:c,
jobId:d})}
function Uu(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.jc||(a.scheduler.Fa(c.jobId),em(c.Fc,10))}
Tu.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.jc||this.scheduler.Fa(b.jobId),b.jc=!0;this.i.resolve()};
Tu.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function Vu(a){this.state=a;this.plugins=[];this.s=void 0;this.T={};Su&&Qu(this.state)}
m=Vu.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;Su&&Ru(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Uu(this.j),this.j=void 0);Wu(this,a,b);this.state=a;Su&&Qu(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Xu(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Xu(a,b){var c=b.filter(function(e){return 10===Yu(a,e)}),d=b.filter(function(e){return 10!==Yu(a,e)});
return a.T.Kf?function(){var e=B.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Ge.apply(a,[c].concat(ja(e))),2);a.Cd.apply(a,[d].concat(ja(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.He.apply(a,[c].concat(ja(e)));a.Cd.apply(a,[d].concat(ja(e)))}}
m.He=function(a){var b=B.apply(1,arguments);hm();for(var c={},d=v(a),e=d.next();!e.done;c={nb:c.nb},e=d.next())c.nb=e.value,fm(function(f){return function(){Zu(f.nb.name);f.nb.callback.apply(f.nb,ja(b));$u(f.nb.name)}}(c))};
m.Ge=function(a){var b=B.apply(1,arguments),c,d,e,f;return A(function(g){1==g.h&&(hm(),c={},d=v(a),e=d.next());if(3!=g.h){if(e.done)return g.v(0);c.bb=e.value;c.Eb=void 0;f=function(h){return function(){Zu(h.bb.name);var k=h.bb.callback.apply(h.bb,ja(b));"function"===typeof(null==k?void 0:k.then)?h.Eb=k.then(function(){$u(h.bb.name)}):$u(h.bb.name)}}(c);
fm(f);return c.Eb?g.yield(c.Eb,3):g.v(3)}c={bb:c.bb,Eb:c.Eb};e=d.next();return g.v(2)})};
m.Cd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Fc:function(){Zu(e.name);e.callback.apply(e,ja(b));$u(e.name)},
priority:Yu(c,e)}});
d.length&&(this.j=new Tu(d))};
function Yu(a,b){var c,d;return null!=(d=null!=(c=a.s)?c:b.priority)?d:0}
function Zu(a){Su&&a&&Qu(a)}
function $u(a){Su&&a&&Ru(a)}
function Wu(a,b,c){Su&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
ea.Object.defineProperties(Vu.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function av(a){Vu.call(this,void 0===a?"document_active":a);var b=this;this.s=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.ka},{from:"document_active",to:"document_disposed",action:this.l},{from:"document_disposed_preventable",to:"document_disposed",action:this.l},{from:"document_disposed_preventable",to:"flush_logs",action:this.m},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.m},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(av,Vu);av.prototype.ka=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
av.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
av.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
av.prototype.i=function(){this.h=new Map};function bv(a){Vu.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.l},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.m},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.m},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.l},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.l},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
U("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(bv,Vu);bv.prototype.i=function(a,b){a(null==b?void 0:b.event);U("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
bv.prototype.h=function(a,b){a(null==b?void 0:b.event);U("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
bv.prototype.l=function(a,b){a(null==b?void 0:b.event)};
bv.prototype.m=function(a,b){a(null==b?void 0:b.event)};function cv(){this.l=new av;this.m=new bv}
cv.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.m.install(c)})};function dv(a){jo.call(this,1,arguments);this.csn=a}
w(dv,jo);var so=new ko("screen-created",dv),ev=[],fv=0;function gv(a,b,c,d){var e=d.filter(function(h){h.csn!==b?(h.csn=b,h=!0):h=!1;return h}),f={cttAuthInfo:Hr(b)||void 0,
sequenceGroup:b};d=v(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(pb(g)||!g.trackingParams&&!g.veType)&&or(Error("Child VE logged with no data"));c={csn:b,parentVe:c.getAsJson(),childVes:hb(e,function(h){return h.getAsJson()})};
"UNDEFINED_CSN"===b?hv("visualElementAttached",f,c):a?gr("visualElementAttached",c,a,f):rm("visualElementAttached",c,f)}
function hv(a,b,c){ev.push({payloadName:a,payload:c,Af:void 0,options:b});fv||(fv=to())}
function uo(a){if(ev){for(var b=v(ev),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,rm(c.payloadName,c.payload,c.options));ev.length=0}fv=0}
;function iv(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
iv.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Fr(void 0===c?0:c)){a=this.client;var e=new xr({trackingParams:d});d={cttAuthInfo:Hr(c)||void 0,sequenceGroup:c};e={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"};b&&(e.clientData=b);"UNDEFINED_CSN"===c?hv("visualElementGestured",d,e):a?gr("visualElementGestured",e,a,d):rm("visualElementGestured",e,d);b=!0}else b=!1;else b=!1;return b};
iv.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=Fr(d);a||(a=(a=Cr(void 0===d?0:d))?new xr({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d={cttAuthInfo:Hr(c)||void 0,sequenceGroup:c},b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?hv("visualElementStateChanged",d,b):a?gr("visualElementStateChanged",b,a,d):rm("visualElementStateChanged",b,d))}};
function jv(a,b){if(void 0===b)for(var c=Er(),d=0;d<c.length;d++)void 0!==c[d]&&jv(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&gv(a.client,b,f,e)}),a.i.clear(),a.h.clear(),a.m=void 0}
;function kv(){cv.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));U("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
w(kv,cv);kv.prototype.j=function(){rm("finalPayload",{csn:Fr()})};
kv.prototype.h=function(){rr(sr)};
kv.prototype.i=function(){var a=jv;iv.h||(iv.h=new iv);a(iv.h)};function lv(){}
function mv(){var a=E("ytglobal.storage_");a||(a=new lv,D("ytglobal.storage_",a));return a}
lv.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(nv()):d.return()})};
function nv(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",lv);function pm(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=Yk("ytidb_transaction_ended_event_rate_limit_session",.2)}
pm.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":U("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":U("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":ov(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=Yk("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function ov(a,b){mv().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:pv(null==c?void 0:c.usage),deviceStorageQuotaMbytes:pv(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function pv(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function qv(a){this.args=void 0===a?null:a;this.returnValue=[]}
;var rv=new Map;function sv(a,b){if(!a)return null;a=Object.keys(a);a=v(a);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=c.toLowerCase();if(-1<d.indexOf(b,d.length-b.length))return c}return null}
;function tv(a,b,c){var d;d||(d={bubbles:!0,cancelable:!1,composed:!0});null!==c&&void 0!==c&&(d.detail=c);b=new CustomEvent(b,d);a.dispatchEvent(b)}
;function uv(a,b){b=new qv(b);tv(a,"yt-action",b);return b.returnValue}
function vv(a,b,c,d){b&&b.length&&b.forEach(function(e){var f=sv(e,"action")||sv(e,"command")||sv(e,"endpoint");if(f){var g="yt"+f;var h=rv.get(g);h?g=h:(f="yt-"+f.replace(/([A-Z])/g,"-$1").toLowerCase(),rv.set(g,f),g=f);W(e,mk)&&(g+="-"+W(e,mk).signal.toLowerCase().replace(/_/g,"-"))}else g=null;g&&(U("handle_service_request_actions")&&e.commandMetadata&&e.commandMetadata.webCommandMetadata&&e.commandMetadata.webCommandMetadata.sendPost?c&&U("use_source_element_if_present_for_actions")?wv(c,[e]):
wv(a,[e]):uv(a,[e,c,d]))})}
function wv(a,b){var c=[a];b&&c.push.apply(c,b);b=uv(a,c);return 0<b.length&&(b=b[0],tv(a,"yt-service-request-sent",b),b&&b.ajaxPromise)?(b.ajaxPromise.then(function(d){tv(a,"yt-service-request-completed",d)},function(d){tv(a,"yt-service-request-error",{error:d,
params:c})},a),b.ajaxPromise):Bf()}
;function iu(a,b,c){b=void 0===b?{}:b;var d,e=null==(d=W(a.commandMetadata,nk))?void 0:d.url;d=b.form||{};!c||d.element||d.skipDefaultElement||(b.form=b.form||{},b.form.element=c);if(e&&"/service_ajax"!==e)return{type:0,command:a,form:b.form};if(U("kevlar_service_command_check")){if(c=wq().resolve(Ot),ns(a,c.j))return Object.assign({},{type:1,command:a},b)}else{var f;if(null==(f=W(a.commandMetadata,nk))?0:f.apiUrl)return Object.assign({},{type:1,command:a},b)}return{type:2,command:a,form:b.form}}
function gu(a){if(a.form){var b=a.form,c=Object.assign({},b);b=b.element;c=(delete c.element,c);if(b)return[wv(b,[a.command,c,a.sc])]}return[]}
function hu(a){if(a.form){var b=a.form,c=Object.assign({},b);b=b.element;c=(delete c.element,c);b&&vv(b,[a.command],b,c)}}
;function xv(a,b,c){N.call(this);var d=this;c=c||S("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.targetOrigin="*";this.l=c;this.sessionId=null;this.channel="widget";this.M=!!a;this.A=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.M&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.targetOrigin=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.s||0<=eb(d.s,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.s=this.i=this.m=null;window.addEventListener("message",this.A)}
w(xv,N);xv.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Kk(d)}}};
xv.prototype.K=function(){window.removeEventListener("message",this.A);N.prototype.K.call(this)};function yv(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new xv(!!S("WIDGET_ID_ENFORCE")),b=this.Be.bind(this);a.m=b;a.s=null;this.h.channel="widget";if(a=S("WIDGET_ID"))this.h.sessionId=a}
m=yv.prototype;m.Be=function(a,b,c){"addEventListener"===a&&b?this.Ec(b[0],c):this.Uc(a,b,c)};
m.Uc=function(){};
m.yc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Ec=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.yc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.de=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Bc());this.sendMessage("onReady");fb(this.i,this.Ad,this);this.i=[]};
m.Bc=function(){return null};
function zv(a,b){a.sendMessage("infoDelivery",b)}
m.Ad=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Ad({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var Av={},Bv=(Av["api.invalidparam"]=2,Av.auth=150,Av["drm.auth"]=150,Av["heartbeat.net"]=150,Av["heartbeat.servererror"]=150,Av["heartbeat.stop"]=150,Av["html5.unsupportedads"]=5,Av["fmt.noneavailable"]=5,Av["fmt.decode"]=5,Av["fmt.unplayable"]=5,Av["html5.missingapi"]=5,Av["html5.unsupportedlive"]=5,Av["drm.unavailable"]=5,Av["mrm.blocked"]=151,Av);var Cv=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Dv(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Ev(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(Cv);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Fv(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Gv(a){yv.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Ne.bind(this));this.addEventListener("onVolumeChange",this.Oe.bind(this));this.addEventListener("onApiChange",this.Ie.bind(this));this.addEventListener("onPlaybackQualityChange",this.Ke.bind(this));this.addEventListener("onPlaybackRateChange",this.Le.bind(this));this.addEventListener("onStateChange",this.Me.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Pe.bind(this))}
w(Gv,yv);m=Gv.prototype;
m.Uc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Dv(a)){var d=b;if(Ra(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Ev(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Ev(e);break;case "loadPlaylist":case "cuePlaylist":e=Fv(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Dv(a)&&zv(this,this.Bc())}};
m.Ec=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);yv.prototype.Ec.call(this,a,b)};
m.yc=function(a,b){var c=this,d=yv.prototype.yc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.de.bind(this);this.h.i=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.errorCode=a?Bv[a]||b:b;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Bc=function(){if(!this.api)return null;var a=this.api.getApiInterface();kb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Me=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());zv(this,a)};
m.Ke=function(a){zv(this,{playbackQuality:a})};
m.Le=function(a){zv(this,{playbackRate:a})};
m.Ie=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Oe=function(){zv(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Ne=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());zv(this,a)};
m.Pe=function(){var a={sphericalProperties:this.api.getSphericalProperties()};zv(this,a)};
m.dispose=function(){yv.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Hv(a){N.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.wd,this)}
w(Hv,N);m=Hv.prototype;m.start=function(){this.started||this.h()||(this.started=!0,this.connection.jb("RECEIVING"))};
m.jb=function(a,b){this.started&&!this.h()&&this.connection.jb(a,b)};
m.wd=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Iv(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Jv(a,c))&&this.jb(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.Je.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.Je=function(a,b){this.started&&!this.h()&&this.connection.jb(a,this.Ac(a,b))};
m.Ac=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.K=function(){var a=this.connection;a.h()||Ci(a.i,"command",this.wd,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);N.prototype.K.call(this)};function Kv(a,b){Hv.call(this,b);this.api=a;this.start()}
w(Kv,Hv);Kv.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Kv.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Iv(a,b){switch(a){case "loadVideoById":return a=Ev(b),[a];case "cueVideoById":return a=Ev(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Fv(b),[a];case "cuePlaylist":return a=Fv(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Jv(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Kv.prototype.Ac=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Hv.prototype.Ac.call(this,a,b)};
Kv.prototype.K=function(){Hv.prototype.K.call(this);delete this.api};function Lv(a){a=void 0===a?!1:a;N.call(this);this.i=new O(a);ve(this,this.i)}
Za(Lv,N);Lv.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
Lv.prototype.m=function(a,b){this.h()||this.i.cb.apply(this.i,arguments)};function Mv(a,b,c){Lv.call(this);this.l=a;this.j=b;this.id=c}
w(Mv,Lv);Mv.prototype.jb=function(a,b){this.h()||this.l.jb(this.j,this.id,a,b)};
Mv.prototype.K=function(){this.j=this.l=null;Lv.prototype.K.call(this)};function Nv(a,b,c){N.call(this);this.i=a;this.origin=c;this.j=Up(window,"message",this.l.bind(this));this.connection=new Mv(this,a,b);ve(this,this.connection)}
w(Nv,N);Nv.prototype.jb=function(a,b,c,d){this.h()||a!==this.i||(a={id:b,command:c},d&&(a.data=d),this.i.postMessage(JSON.stringify(a),this.origin))};
Nv.prototype.l=function(a){if(!this.h()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.h()||c.m("command",b.command,b.data,a.origin)}}}};
Nv.prototype.K=function(){Vp(this.j);this.i=null;N.prototype.K.call(this)};function Ov(){this.state=1;this.h=null}
m=Ov.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){d=a.interpreterSafeScript.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var f=yb();d=f?f.createScript(d):d;d=new Db(d,Cb)}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=a.interpreterSafeUrl,Bb("From proto message. b/166824318"),e=Hb(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());Pv(this,d,e,a.program,b,c)}else or(Error("Cannot initialize botguard without program"))};
function Pv(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Du(c,function(){window[g]?Qv(a,d,g,e):(a.state=3,Iu(c),or(new $l("Unable to load Botguard","from "+c)))},f)):b?(f=jf("SCRIPT"),b instanceof Db?(b instanceof Db&&b.constructor===Db?b=b.j:(Pa(b),b="type_error:SafeScript"),f.textContent=b,Mh(f)):f.textContent=b,f.nonce=pc(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Qv(a,d,g,e):(a.state=4,or(new $l("Unable to load Botguard from JS")))):or(new $l("Unable to load VM; no url or JS provided"))}
function Qv(a,b,c,d){a.state=5;try{var e=new Bh({program:b,je:c,Ce:U("att_web_record_metrics")});e.Re.then(function(){a.state=6;d&&d(b)});
a.Pc(e)}catch(f){a.state=7,f instanceof Error&&or(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Sc()?this.Jd({dd:a}):null};
m.dispose=function(){this.Vc()};
m.Vc=function(){this.Pc(null);this.state=8};
m.Sc=function(){return!!this.h};
m.Jd=function(a){return this.h.Dd(a)};
m.Pc=function(a){te(this.h);this.h=a};function Rv(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Sv(){Ov.apply(this,arguments)}
w(Sv,Ov);Sv.prototype.Vc=function(){this.state=8};
Sv.prototype.Pc=function(a){var b;null==(b=Rv())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Dd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Sv.prototype.Sc=function(){return!!Rv()};
Sv.prototype.Jd=function(a){return Rv().bgvmc(a)};var Tv=new Sv;function Uv(){return Tv.Sc()}
function Vv(a){a=void 0===a?{}:a;return Tv.invoke(a)}
;function Wv(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||tb(b);this.assets=a.assets||{};this.attrs=a.attrs||tb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Wv.prototype.clone=function(){var a=new Wv,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Pa(c)?a[b]=tb(c):a[b]=c}return a};var Xv=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Yv(a){a=a||"";if(window.spf){var b=a.match(Xv);spf.style.load(a,b?b[1]:"",void 0)}else Zv(a)}
function Zv(a){var b=$v(a),c=document.getElementById(b),d=c&&zu(c,"loaded");d||c&&!d||(c=aw(a,b,function(){if(!zu(c,"loaded")){xu(c);mq(b);var e=Ya(nq,b);cl(e,0)}}))}
function aw(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=fk(a);nc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function $v(a){var b=jf("A");mc(b,new Lb(a,Qb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+rc(a)}
;function bw(){N.call(this);this.i=[]}
w(bw,N);bw.prototype.K=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.callback,void 0)}N.prototype.K.call(this)};function cw(){bw.apply(this,arguments)}
w(cw,bw);function dw(a,b,c,d,e){N.call(this);var f=this;this.A=b;this.webPlayerContextConfig=d;this.Tb=e;this.Da=!1;this.api={};this.Ca=this.s=null;this.W=new O;this.i={};this.ba=this.la=this.elementId=this.qb=this.config=null;this.aa=!1;this.l=this.M=null;this.qa={};this.pc=["onReady"];this.lastError=null;this.Ib=NaN;this.V={};this.qc=new cw(this);this.ea=0;this.j=this.m=a;ve(this,this.W);ew(this);fw(this);ve(this,this.qc);c?this.ea=cl(function(){f.loadNewVideoConfig(c)},0):d&&(gw(this),hw(this))}
w(dw,N);m=dw.prototype;m.getId=function(){return this.A};
m.loadNewVideoConfig=function(a){if(!this.h()){this.ea&&(window.clearTimeout(this.ea),this.ea=0);var b=a||{};b instanceof Wv||(b=new Wv(b));this.config=b;this.setConfig(a);hw(this);this.isReady()&&iw(this)}};
function gw(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.qb=a;this.config=jw(a);gw(this);if(!this.la){var b;this.la=kw(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=Xh(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=Xh(Number(a)||a))};
function iw(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function lw(a){var b=!0,c=mw(a);c&&a.config&&(a=nw(a),b=zu(c,"version")===a);return b&&!!E("yt.player.Application.create")}
function hw(a){if(!a.h()&&!a.aa){var b=lw(a);if(b&&"html5"===(mw(a)?"html5":null))a.ba="html5",a.isReady()||ow(a);else if(pw(a),a.ba="html5",b&&a.l&&a.m)a.m.appendChild(a.l),ow(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.M=function(){c=!0;var d=qw(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?jw(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.Tb);ow(a)};
a.aa=!0;b?a.M():(Du(nw(a),a.M),(b=rw(a))&&Yv(b),sw(a)&&!c&&D("yt.player.Application.create",null))}}}
function mw(a){var b=hf(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function ow(a){if(!a.h()){var b=mw(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.aa=!1;if(!qw(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}tw(a)}else a.Ib=cl(function(){ow(a)},50)}}
function tw(a){ew(a);a.Da=!0;var b=mw(a);if(b){a.s=uw(a,b,"addEventListener");a.Ca=uw(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=uw(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.s&&a.s(g,a.i[g]);iw(a);a.la&&a.la(a.api);a.W.cb("onReady",a.api)}
function uw(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,or(f))}}}
function ew(a){a.Da=!1;if(a.Ca)for(var b in a.i)a.i.hasOwnProperty(b)&&a.Ca(b,a.i[b]);for(var c in a.V)a.V.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.V={};a.s=null;a.Ca=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.qb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Da};
function fw(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){mq("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){mq("WATCH_LATER_VIDEO_REMOVED",b)})}
m.addEventListener=function(a,b){var c=this,d=kw(this,b);d&&(0<=eb(this.pc,a)||this.i[a]||(b=vw(this,a),this.s&&this.s(a,b)),this.W.subscribe(a,d),"onReady"===a&&this.isReady()&&cl(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h()||(b=kw(this,b))&&Ci(this.W,a,b)};
function kw(a,b){var c=b;if("string"===typeof b){if(a.qa[b])return a.qa[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){nr(f)}};
a.qa[b]=c}return c?c:null}
function vw(a,b){var c="ytPlayer"+b+a.A;a.i[b]=c;C[c]=function(d){var e=cl(function(){if(!a.h()){try{a.W.cb(b,null!=d?d:void 0)}catch(h){or(new $l("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.A,data:d}))}var f=a.V,g=String(e);g in f&&delete f[g]}},0);
qb(a.V,String(e))};
return c}
m.getPlayerType=function(){return this.ba||(mw(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function pw(a){a.cancel();ew(a);a.ba=null;a.config&&(a.config.loaded=!1);var b=mw(a);b&&(lw(a)||!sw(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.M&&Ju(nw(this),this.M);window.clearTimeout(this.Ib);this.aa=!1};
m.K=function(){pw(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){nr(b)}this.qa=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(C[this.i[a]]=null);this.qb=this.config=this.api=null;delete this.m;delete this.j;N.prototype.K.call(this)};
function sw(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function nw(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function rw(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function qw(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Nk(c||"","&")[b]}
function jw(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?tb(e):e}return b}
;var ww={},xw="player_uid_"+(1E9*Math.random()>>>0);function yw(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?hf(c):c;var e=xw+"_"+Sa(c),f=ww[e];if(f&&d)return zw(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new dw(c,e,a,b,void 0);ww[e]=f;mq("player-added",f.api);we(f,function(){delete ww[f.getId()]});
return f.api}
function zw(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Aw=null,Bw=null,Cw=null;function Dw(){Ew()}
function Fw(){Ew()}
function Ew(){var a=Aw.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function fu(a){var b,c;if(a=null==(b=a.command)?void 0:null==(c=b.urlEndpoint)?void 0:c.url)b=window,c=Fh(a),void 0!==c&&b.open(c,void 0,void 0);return[]}
function Gw(){Aw&&Aw.sendAbandonmentPing&&Aw.sendAbandonmentPing();S("PL_ATT")&&Tv.dispose();for(var a=fi,b=0,c=Ku.length;b<c;b++)a.Fa(Ku[b]);Ku.length=0;Iu("//static.doubleclick.net/instream/ad_status.js");Lu=!1;Fk("DCLKSTAT",0);ue(Cw,Bw);Aw&&(Aw.removeEventListener("onVideoDataChange",Dw),Aw.destroy())}
;function Hw(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=S("EVENT_ID");d&&(b.ei||(b.ei=d));b&&ys(a,b);if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;b=g.location;a=Dc(a,e)+f;var h=void 0===h?Qh:h;a:{h=void 0===h?Qh:h;for(e=0;e<h.length;++e)if(f=h[e],f instanceof Oh&&f.re(a)){h=new Lb(a,Qb);break a}h=void 0}h=Fh(h||Rb);void 0!==h&&(b.href=h)}return!0}
;D("yt.setConfig",Fk);D("yt.config.set",Fk);D("yt.setMsg",Jr);D("yt.msgs.set",Jr);D("yt.logging.errors.log",nr);
D("writeEmbed",function(){var a=S("PLAYER_CONFIG");if(!a){var b=S("PLAYER_VARS");b&&(a={args:b})}bs(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=S("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);zt("embed",["ol"]);c=S("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=Sk(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&zt("watch",["pbs","pbu","pbp"]);Aw=yw(a,c);U("embeds_enable_server_driven_watch_again_on_youtube")&&!eu.h&&(eu.h=new eu);Aw.addEventListener("onVideoDataChange",Dw);Aw.addEventListener("onReady",Fw);U("embeds_enable_server_driven_watch_again_on_youtube")&&Aw.addEventListener("innertubeCommand",function(f){ju(eu.h,f)});
a=S("POST_MESSAGE_ID","player");S("ENABLE_JS_API")?Cw=new Gv(Aw):S("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Bw=new Nv(window.parent,a,b),Cw=new Kv(Aw,Bw.connection));Mu();U("ytidb_create_logger_embed_killswitch")||om();a={};kv.h||(kv.h=new kv);kv.h.install((a.flush_logs={callback:function(){Tq()}},a));
Kp();U("ytidb_clear_embedded_player")&&fi.ma(function(){var f,g;if(!du){var h=wq(),k={Mc:cu,Hd:bu};h.h.set(k.Mc,k);k={uc:{feedbackEndpoint:qs(Xt),modifyChannelNotificationPreferenceEndpoint:qs(Yt),playlistEditEndpoint:qs(Zt),subscribeEndpoint:qs(Vt),unsubscribeEndpoint:qs(Wt),webPlayerShareEntityServiceEndpoint:qs($t)}};var l=ms(),n={};l&&(n.client_location=l);void 0===f&&(f=El());void 0===g&&(g=h.resolve(cu));It(k,g,f,n);f={Mc:Ot,Id:Ht.h};h.h.set(f.Mc,f);du=h.resolve(Ot)}wu()})});
var Iw=Ik(function(){Dt();cs()}),Jw=Ik(function(a){a.persisted||(Dt(),cs())}),Kw=Ik(function(a){U("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Gw():a.persisted||Gw()}),Lw=Ik(Gw);
window.addEventListener?(window.addEventListener("load",Iw),window.addEventListener("pageshow",Jw),window.addEventListener("pagehide",Kw)):window.attachEvent&&(window.attachEvent("onload",Iw),window.attachEvent("onunload",Lw));D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||Uv);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||Vv);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||Nu);
D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Hw);D("yt.util.activity.init",E("yt.util.activity.init")||Zp);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||bq);D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||$p);}).call(this);
