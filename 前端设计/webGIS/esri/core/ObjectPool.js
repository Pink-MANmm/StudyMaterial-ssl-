// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(function(){let h=function(){function e(a,b,c,g=1,f=0){this.ctor=a;this.acquireFunction=b;this.releaseFunction=c;this.allocationSize=g;this._pool=Array(f);this._initialSize=f;if(this.ctor)for(a=0;a<f;a++)this._pool[a]=new this.ctor;this.allocationSize=Math.max(g,1)}var d=e.prototype;d.destroy=function(){this.prune(0)};d.acquire=function(...a){if(e.test.disabled)var b=new this.ctor;else{if(0===this._pool.length){b=this.allocationSize;for(let c=0;c<b;c++)this._pool[c]=new this.ctor}b=this._pool.pop()}this.acquireFunction?
this.acquireFunction(b,...a):b&&b.acquire&&"function"===typeof b.acquire&&b.acquire(...a);return b};d.release=function(a){a&&!e.test.disabled&&(this.releaseFunction?this.releaseFunction(a):a&&a.release&&"function"===typeof a.release&&a.release(),this._pool.push(a))};d.prune=function(a=this._initialSize){if(!(a>=this._pool.length)){for(let b=a;b<this._pool.length;++b)this._dispose(this._pool[b]);this._pool.length=a}};d._dispose=function(a){a.dispose&&"function"===typeof a.dispose&&a.dispose()};return e}();
h.test={disabled:!1};return h});