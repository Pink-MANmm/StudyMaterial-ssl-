// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(e){function g(a){return a&&("function"===typeof a.on||"function"===typeof a.addEventListener)}function h(a,b,c){if(!g(a))throw new TypeError("target is not a Evented or EventTarget object");if("on"in a)return a.on(b,c);if(Array.isArray(b)){const d=b.slice();for(const f of d)a.addEventListener(f,c);return{remove(){for(const f of d)a.removeEventListener(f,c)}}}a.addEventListener(b,c);return{remove(){a.removeEventListener(b,c)}}}const k={Win:"Meta",Scroll:"ScrollLock",Spacebar:" ",
Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Del:"Delete",Apps:"ContextMenu",Esc:"Escape",Multiply:"*",Add:"+",Subtract:"-",Decimal:".",Divide:"/"};e.eventKey=function({key:a}){return k[a]||a};e.ieKeyNormalizationMap=k;e.isEventTarget=g;e.on=h;e.once=function(a,b,c){if(!g(a))throw new TypeError("target is not a Evented or EventTarget object");if("once"in a)return a.once(b,c);const d=h(a,b,f=>{d.remove();c.call(a,f)});return{remove(){d.remove()}}};e.pausable=function(a,b,c){let d=
!1;const f=h(a,b,l=>{d||c.call(a,l)});return{resume(){d=!1},pause(){d=!0},remove(){f.remove()}}};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});