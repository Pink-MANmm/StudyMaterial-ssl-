// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/JSONSupport ../core/screenUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/subclass ./support/textUtils".split(" "),function(l,c,a,m,e,q,r,n,p,g){var h;a=h=function(k){function f(b){b=k.call(this,b)||this;b.decoration="none";b.family="sans-serif";b.size=9;b.style="normal";b.weight="normal";return b}l._inheritsLoose(f,k);
var d=f.prototype;d.castSize=function(b){return m.toPt(b)};d.clone=function(){return new h({decoration:this.decoration,family:this.family,size:this.size,style:this.style,weight:this.weight})};d.hash=function(){return`${this.decoration}.${this.family}.${this.size}.${this.style}.${this.weight}`};return f}(a.JSONSupport);c.__decorate([e.property({type:g.fontDecorations,json:{default:"none",write:!0}})],a.prototype,"decoration",void 0);c.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,
"family",void 0);c.__decorate([e.property({type:Number,json:{write:{overridePolicy(k,f,d){return{enabled:!d||!d.textSymbol3D}}}}})],a.prototype,"size",void 0);c.__decorate([n.cast("size")],a.prototype,"castSize",null);c.__decorate([e.property({type:g.fontStyles,json:{default:"normal",write:!0}})],a.prototype,"style",void 0);c.__decorate([e.property({type:g.fontWeights,json:{default:"normal",write:!0}})],a.prototype,"weight",void 0);return a=h=c.__decorate([p.subclass("esri.symbols.Font")],a)});