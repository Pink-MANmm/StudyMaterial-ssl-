(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5203],{55203:(n,t,e)=>{"use strict";e.r(t),e.d(t,{l:()=>a});var r,o,i={exports:{}};r=i,void 0!==(o={load:function(n){const t=n.locateFile,o={};var i=void 0!==i?i:{};const a=(()=>{let n;return{resolve:t=>n(t),promise:new Promise((t=>n=t))}})();i.locateFile=t,i.onRuntimeInitialized=()=>{a.resolve(o)},o.Module=i,o.whenLoaded=()=>a.promise;var u,s={};for(u in i)i.hasOwnProperty(u)&&(s[u]=i[u]);var f,c,l,p,m,h="object"==typeof window,d="function"==typeof importScripts,y="";"object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node?(y=d?e(5017).dirname(y)+"/":"//",f=function(n,t){return p||(p=e(7002)),m||(m=e(5017)),n=m.normalize(n),p.readFileSync(n,t?null:"utf8")},l=function(n){var t=f(n,!0);return t.buffer||(t=new Uint8Array(t)),t.buffer||W("Assertion failed: "+void 0),t},c=function(n,t,r){p||(p=e(7002)),m||(m=e(5017)),n=m.normalize(n),p.readFile(n,(function(n,e){n?r(n):t(e.buffer)}))},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),r.exports=i,process.on("uncaughtException",(function(n){if(!(n instanceof K))throw n})),process.on("unhandledRejection",W),i.inspect=function(){return"[Emscripten Module object]"}):(h||d)&&(d?y=self.location.href:"undefined"!=typeof document&&document.currentScript&&(y=document.currentScript.src),y=0!==y.indexOf("blob:")?y.substr(0,y.lastIndexOf("/")+1):"",f=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.send(null),t.responseText},d&&(l=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),c=function(n,t,e){var r=new XMLHttpRequest;r.open("GET",n,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?t(r.response):e()},r.onerror=e,r.send(null)});var g=i.print||console.log.bind(console),v=i.printErr||console.warn.bind(console);for(u in s)s.hasOwnProperty(u)&&(i[u]=s[u]);s=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit;var w,b,A=0;i.wasmBinary&&(w=i.wasmBinary),i.noExitRuntime,"object"!=typeof WebAssembly&&W("no native wasm support detected");var R,E,_,P,S=!1,T="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function j(n,t,e){for(var r=t+e,o=t;n[o]&&!(o>=r);)++o;if(o-t>16&&n.subarray&&T)return T.decode(n.subarray(t,o));for(var i="";t<o;){var a=n[t++];if(128&a){var u=63&n[t++];if(192!=(224&a)){var s=63&n[t++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&n[t++])<65536)i+=String.fromCharCode(a);else{var f=a-65536;i+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else i+=String.fromCharCode((31&a)<<6|u)}else i+=String.fromCharCode(a)}return i}function I(n){R=n,i.HEAP8=new Int8Array(n),i.HEAP16=new Int16Array(n),i.HEAP32=_=new Int32Array(n),i.HEAPU8=E=new Uint8Array(n),i.HEAPU16=new Uint16Array(n),i.HEAPU32=new Uint32Array(n),i.HEAPF32=new Float32Array(n),i.HEAPF64=new Float64Array(n)}i.INITIAL_MEMORY;var x,H,M=[],C=[],F=[],k=0,O=null;function W(n){throw i.onAbort&&i.onAbort(n),v(n+=""),S=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(n)}function U(n){return n.startsWith("data:application/octet-stream;base64,")}function L(n){return n.startsWith("file://")}function B(n){try{if(n==x&&w)return new Uint8Array(w);if(l)return l(n);throw"both async and sync fetching of the wasm failed"}catch(n){W(n)}}function D(n){for(;n.length>0;){var t=n.shift();if("function"!=typeof t){var e=t.func;"number"==typeof e?void 0===t.arg?P.get(e)():P.get(e)(t.arg):e(void 0===t.arg?null:t.arg)}else t(i)}}function q(n){try{return b.grow(n-R.byteLength+65535>>>16),I(b.buffer),1}catch(n){}}i.preloadedImages={},i.preloadedAudios={},U(x="libtess.wasm")||(H=x,x=i.locateFile?i.locateFile(H,y):y+H);var z={mappings:{},buffers:[null,[],[]],printChar:function(n,t){var e=z.buffers[n];0===t||10===t?((1===n?g:v)(j(e,0)),e.length=0):e.push(t)},varargs:void 0,get:function(){return z.varargs+=4,_[z.varargs-4>>2]},getStr:function(n){return function(n,t){return n?j(E,n,void 0):""}(n)},get64:function(n,t){return n}},N={h:function(){throw"longjmp"},l:function(n,t,e){E.copyWithin(n,t,t+e)},g:function(n){var t,e=E.length,r=2147483648;if((n>>>=0)>r)return!1;for(var o=1;o<=4;o*=2){var i=e*(1+.2/o);if(i=Math.min(i,n+100663296),q(Math.min(r,((t=Math.max(n,i))%65536>0&&(t+=65536-t%65536),t))))return!0}return!1},f:function(n,t,e,r){for(var o=0,i=0;i<e;i++){for(var a=_[t+8*i>>2],u=_[t+(8*i+4)>>2],s=0;s<u;s++)z.printChar(n,E[a+s]);o+=u}return _[r>>2]=o,0},b:function(){return A},k:function(n){var t=X();try{return P.get(n)()}catch(n){if(Y(t),n!==n+0&&"longjmp"!==n)throw n;J(1,0)}},d:function(n,t){var e=X();try{return P.get(n)(t)}catch(n){if(Y(e),n!==n+0&&"longjmp"!==n)throw n;J(1,0)}},j:function(n,t,e){var r=X();try{return P.get(n)(t,e)}catch(n){if(Y(r),n!==n+0&&"longjmp"!==n)throw n;J(1,0)}},i:function(n,t,e,r){var o=X();try{return P.get(n)(t,e,r)}catch(n){if(Y(o),n!==n+0&&"longjmp"!==n)throw n;J(1,0)}},e:function(n,t){var e=X();try{P.get(n)(t)}catch(n){if(Y(e),n!==n+0&&"longjmp"!==n)throw n;J(1,0)}},c:function(n,t,e){var r=X();try{P.get(n)(t,e)}catch(n){if(Y(r),n!==n+0&&"longjmp"!==n)throw n;J(1,0)}},a:function(n){A=n}};(function(){var n={a:N};function t(n,t){var e,r=n.exports;i.asm=r,I((b=i.asm.m).buffer),P=i.asm.q,e=i.asm.n,C.unshift(e),function(n){if(k--,i.monitorRunDependencies&&i.monitorRunDependencies(k),0==k&&O){var t=O;O=null,t()}}()}function e(n){t(n.instance)}function r(t){return function(){if(!w&&(h||d)){if("function"==typeof fetch&&!L(x))return fetch(x,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+x+"'";return n.arrayBuffer()})).catch((function(){return B(x)}));if(c)return new Promise((function(n,t){c(x,(function(t){n(new Uint8Array(t))}),t)}))}return Promise.resolve().then((function(){return B(x)}))}().then((function(t){return WebAssembly.instantiate(t,n)})).then(t,(function(n){v("failed to asynchronously prepare wasm: "+n),W(n)}))}if(k++,i.monitorRunDependencies&&i.monitorRunDependencies(k),i.instantiateWasm)try{return i.instantiateWasm(n,t)}catch(n){return v("Module.instantiateWasm callback failed with error: "+n),!1}w||"function"!=typeof WebAssembly.instantiateStreaming||U(x)||L(x)||"function"!=typeof fetch?r(e):fetch(x,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,n).then(e,(function(n){return v("wasm streaming compile failed: "+n),v("falling back to ArrayBuffer instantiation"),r(e)}))}))})(),i.___wasm_call_ctors=function(){return(i.___wasm_call_ctors=i.asm.n).apply(null,arguments)},i._malloc=function(){return(i._malloc=i.asm.o).apply(null,arguments)},i._free=function(){return(i._free=i.asm.p).apply(null,arguments)},i._triangulate=function(){return(i._triangulate=i.asm.r).apply(null,arguments)};var G,X=i.stackSave=function(){return(X=i.stackSave=i.asm.s).apply(null,arguments)},Y=i.stackRestore=function(){return(Y=i.stackRestore=i.asm.t).apply(null,arguments)},J=i._setThrew=function(){return(J=i._setThrew=i.asm.u).apply(null,arguments)};function K(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function Q(n){function t(){G||(G=!0,i.calledRun=!0,S||(D(C),i.onRuntimeInitialized&&i.onRuntimeInitialized(),function(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)n=i.postRun.shift(),F.unshift(n);var n;D(F)}()))}k>0||(function(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)n=i.preRun.shift(),M.unshift(n);var n;D(M)}(),k>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),t()}),1)):t()))}if(O=function n(){G||Q(),G||(O=n)},i.run=Q,i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();Q();let V=null,Z=null,$=null,nn=null;const tn=o.Module;let en=0;return o.triangulate=(n,t,e)=>{V||(V=tn._triangulate);let r=tn.HEAPF32;const o=tn.HEAP32.BYTES_PER_ELEMENT,i=r.BYTES_PER_ELEMENT;e>en&&(en=e,$&&(tn._free($),$=0),Z&&(tn._free(Z),Z=0)),$||($=tn._malloc(e*i)),nn||(nn=tn._malloc(4e3*o));const a=2*e;Z||(Z=tn._malloc(a*i)),r=tn.HEAPF32,r.set(n,$/i),tn.HEAP32.set(t,nn/o);const u=a/2,s=V($,nn,Math.min(t.length,4e3),2,Z,u),f=2*s;r=tn.HEAPF32;const c=r.slice(Z/i,Z/i+f),l={};return l.buffer=c,l.vertexCount=s,l},o.whenLoaded()}})&&(r.exports=o);const a=function(n,t){for(var e=0;e<t.length;e++){const r=t[e];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in n)){const e=Object.getOwnPropertyDescriptor(r,t);e&&Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:i.exports},[i.exports])},7002:()=>{},5017:()=>{}}]);