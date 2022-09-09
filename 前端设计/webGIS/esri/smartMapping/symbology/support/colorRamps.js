// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../Color","./colors"],function(f,n,d){function l(a){const c=[];for(const b in a){const e=Number(b);isNaN(e)||c.push({colors:a[b].map(g=>new n(g)),numClasses:e})}return{name:a.name,tags:[...a.tags],colors:a.stops.map(b=>new n(b)),colorsForClassBreaks:c}}function h(a){return Array.isArray(a["2"]&&a["2"][0])}f.all=function(){const a=[];for(const c in d){const b=d[c];h(b)||a.push(l(b))}return a};f.byName=function(a){let c=null;for(const b in d){const e=d[b];if(!h(e)&&e.name===
a){c=l(e);break}}return c};f.byTag=function(a){const {includedTags:c,excludedTags:b}=a;if(!c&&!b)return[];a=!(c&&c.length);const e=!(b&&b.length),g=[];for(const p in d){const k=d[p];if(!h(k)){const q=a?!0:c.every(m=>k.tags.includes(m)),r=!e&&b.every(m=>k.tags.includes(m));q&&!r&&g.push(l(k))}}return g};f.names=function(){const a=[];for(const c in d){const b=d[c];h(b)||a.push(b.name)}return a};Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});