// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../Graphic ../../core/Accessor ../../core/mathUtils ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../symbols/PointSymbol3D ../../symbols/SimpleFillSymbol ../../symbols/TextSymbol ../../symbols/TextSymbol3DLayer".split(" "),function(f,t,h,B,u,C,v,k,n,J,K,L,D,E,F,G,H){const I=
[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];f.TileTreeDebugger=function(w){function l(b){b=w.call(this,b)||this;b.updating=!1;b.enablePolygons=!0;b.enableLabels=!0;b._polygons=new Map;b._labels=new Map;b._enabled=!0;return b}t._inheritsLoose(l,w);var m=l.prototype;m.initialize=function(){this._symbols=I.map(b=>
new F({color:[b[0],b[1],b[2],.6],outline:{color:"black",width:1}}));this.update()};m.destroy=function(){this._enabled=!1;this.clear()};m.update=function(){if(this._enabled){var b=a=>{if(k.isSome(a.label))return a.label;let d=a.lij.toString();k.isSome(a.loadPriority)&&(d+=` (${a.loadPriority})`);return d},p=this.getTiles(),q=[],x=new Set(this._labels.keys());p.forEach((a,d)=>{var c=a.lij.toString();x.delete(c);var g=a.lij[0],e=a.geometry;this.enablePolygons&&!this._polygons.has(c)&&(g=new u({geometry:e,
symbol:this._symbols[g%this._symbols.length]}),this._polygons.set(c,g),q.push(g));if(this.enableLabels){const y=b(a);g=d/(p.length-1);d=v.lerp(0,200,g);const z=v.lerp(20,6,g)/.75;a=k.isSome(a.loadPriority)&&a.loadPriority>=p.length;const A=new B([d,a?0:d,a?0:d]);a="3d"===this.view.type?()=>new E({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new H({text:y,halo:{color:"white",size:1/.75},material:{color:A},size:z})]}):()=>new G({text:y,
haloColor:"white",haloSize:1/.75,color:A,size:z});if(this._labels.has(c)){if(c=this._labels.get(c),e=a(),k.isNone(c.symbol)||JSON.stringify(e)!==JSON.stringify(c.symbol))c.symbol=e}else e=new u({geometry:e.extent.center,symbol:a()}),this._labels.set(c,e),q.push(e)}});var r=[];x.forEach(a=>{this._polygons.has(a)&&(r.push(this._polygons.get(a)),this._polygons.delete(a));this._labels.has(a)&&(r.push(this._labels.get(a)),this._labels.delete(a))});this.view.graphics.removeMany(r);this.view.graphics.addMany(q)}else this.clear()};
m.clear=function(){this.view.graphics.removeMany(Array.from(this._polygons.values()));this.view.graphics.removeMany(Array.from(this._labels.values()));this._polygons.clear();this._labels.clear()};t._createClass(l,[{key:"enabled",get:function(){return this._enabled},set:function(b){this._enabled!==b&&(this._enabled=b,this.update())}}]);return l}(C);h.__decorate([n.property({constructOnly:!0})],f.TileTreeDebugger.prototype,"view",void 0);h.__decorate([n.property({readOnly:!0})],f.TileTreeDebugger.prototype,
"updating",void 0);h.__decorate([n.property()],f.TileTreeDebugger.prototype,"enabled",null);f.TileTreeDebugger=h.__decorate([D.subclass("esri.views.support.TileTreeDebugger")],f.TileTreeDebugger);Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});