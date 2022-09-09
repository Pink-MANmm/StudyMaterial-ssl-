// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../Graphic ../../core/jsonMap ../../core/JSONSupport ../../core/lang ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/SpatialReference ../../geometry/support/jsonUtils ../../layers/support/Field".split(" "),function(D,
m,E,A,l,F,G,t,q,K,B,H,C,w,v,I){var x;const y=new l.JSONMap({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});l=x=function(r){function z(b){b=r.call(this,b)||this;b.displayFieldName=null;b.exceededTransferLimit=!1;b.features=[];b.fields=null;b.geometryType=null;b.hasM=!1;b.hasZ=!1;b.queryGeometry=null;b.spatialReference=null;return b}D._inheritsLoose(z,r);var n=z.prototype;
n.readFeatures=function(b,d){d=w.fromJSON(d.spatialReference);const e=[];for(let f=0;f<b.length;f++){var a=b[f];const h=A.fromJSON(a);var c=a.geometry&&a.geometry.spatialReference;t.isSome(h.geometry)&&!c&&(h.geometry.spatialReference=d);a=a.aggregateGeometries;c=h.aggregateGeometries;if(a&&t.isSome(c))for(const k in c){const p=c[k];var g=a[k];g=null==g?void 0:g.spatialReference;t.isSome(p)&&!g&&(p.spatialReference=d)}e.push(h)}return e};n.writeGeometryType=function(b,d,e,a){if(b)y.write(b,d,e,a);
else if({features:b}=this,b)for(const c of b)if(c&&t.isSome(c.geometry)){y.write(c.geometry.type,d,e,a);break}};n.readQueryGeometry=function(b,d){if(!b)return null;const e=!!b.spatialReference;b=v.fromJSON(b);!e&&d.spatialReference&&(b.spatialReference=w.fromJSON(d.spatialReference));return b};n.writeSpatialReference=function(b,d){if(b)d.spatialReference=b.toJSON();else if({features:b}=this,b)for(const e of b)if(e&&t.isSome(e.geometry)&&e.geometry.spatialReference){d.spatialReference=e.geometry.spatialReference.toJSON();
break}};n.clone=function(){return new x(this.cloneProperties())};n.cloneProperties=function(){return G.clone({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})};n.toJSON=function(b){const d=this.write();if(d.features&&Array.isArray(b)&&0<b.length)for(let e=0;e<
d.features.length;e++){const a=d.features[e];if(a.geometry){const c=b&&b[e];a.geometry=c&&c.toJSON()||a.geometry}}return d};n.quantize=function(b){const {scale:[d,e],translate:[a,c]}=b,g=this.features,f=this._getQuantizationFunction(this.geometryType,h=>Math.round((h-a)/d),h=>Math.round((c-h)/e));for(let h=0,k=g.length;h<k;h++)f(t.unwrap(g[h].geometry))||(g.splice(h,1),h--,k--);this.transform=b;return this};n.unquantize=function(){const {geometryType:b,features:d,transform:e}=this;if(!e)return this;
const {translate:[a,c],scale:[g,f]}=e,h=this._getHydrationFunction(b,k=>k*g+a,k=>c-k*f);for(const {geometry:k}of d)t.isSome(k)&&h(k);this.transform=null;return this};n._quantizePoints=function(b,d,e){let a,c;const g=[];for(let h=0,k=b.length;h<k;h++){var f=b[h];if(0<h){const p=d(f[0]);f=e(f[1]);if(p!==a||f!==c)g.push([p-a,f-c]),a=p,c=f}else a=d(f[0]),c=e(f[1]),g.push([a,c])}return 0<g.length?g:null};n._getQuantizationFunction=function(b,d,e){return"point"===b?a=>{a.x=d(a.x);a.y=e(a.y);return a}:"polyline"===
b||"polygon"===b?a=>{const c=v.isPolygon(a)?a.rings:a.paths,g=[];for(let f=0,h=c.length;f<h;f++){const k=this._quantizePoints(c[f],d,e);k&&g.push(k)}return 0<g.length?(v.isPolygon(a)?a.rings=g:a.paths=g,a):null}:"multipoint"===b?a=>{const c=this._quantizePoints(a.points,d,e);return 0<c.length?(a.points=c,a):null}:"extent"===b?a=>a:null};n._getHydrationFunction=function(b,d,e){if("point"===b)return a=>{a.x=d(a.x);a.y=e(a.y)};if("polyline"===b||"polygon"===b)return a=>{a=v.isPolygon(a)?a.rings:a.paths;
let c,g;for(let f=0,h=a.length;f<h;f++){const k=a[f];for(let p=0,J=k.length;p<J;p++){const u=k[p];0<p?(c+=u[0],g+=u[1]):(c=u[0],g=u[1]);u[0]=d(c);u[1]=e(g)}}};if("extent"===b)return a=>{a.xmin=d(a.xmin);a.ymin=e(a.ymin);a.xmax=d(a.xmax);a.ymax=e(a.ymax)};if("multipoint"===b)return a=>{a=a.points;let c,g;for(let f=0,h=a.length;f<h;f++){const k=a[f];0<f?(c+=k[0],g+=k[1]):(c=k[0],g=k[1]);k[0]=d(c);k[1]=e(g)}}};return z}(F.JSONSupport);m.__decorate([q.property({type:String,json:{write:!0}})],l.prototype,
"displayFieldName",void 0);m.__decorate([q.property({type:Boolean,json:{write:{overridePolicy(r){return{enabled:r}}}}})],l.prototype,"exceededTransferLimit",void 0);m.__decorate([q.property({type:[A],json:{write:!0}})],l.prototype,"features",void 0);m.__decorate([B.reader("features")],l.prototype,"readFeatures",null);m.__decorate([q.property({type:[I],json:{write:!0}})],l.prototype,"fields",void 0);m.__decorate([q.property({type:"point multipoint polyline polygon extent mesh".split(" "),json:{read:{reader:y.read}}})],
l.prototype,"geometryType",void 0);m.__decorate([C.writer("geometryType")],l.prototype,"writeGeometryType",null);m.__decorate([q.property({type:Boolean,json:{write:{overridePolicy(r){return{enabled:r}}}}})],l.prototype,"hasM",void 0);m.__decorate([q.property({type:Boolean,json:{write:{overridePolicy(r){return{enabled:r}}}}})],l.prototype,"hasZ",void 0);m.__decorate([q.property({types:E.geometryTypes,json:{write:!0}})],l.prototype,"queryGeometry",void 0);m.__decorate([B.reader("queryGeometry")],l.prototype,
"readQueryGeometry",null);m.__decorate([q.property({type:w,json:{write:!0}})],l.prototype,"spatialReference",void 0);m.__decorate([C.writer("spatialReference")],l.prototype,"writeSpatialReference",null);m.__decorate([q.property({json:{write:!0}})],l.prototype,"transform",void 0);l=x=m.__decorate([H.subclass("esri.rest.support.FeatureSet")],l);l.prototype.toJSON.isDefaultToJSON=!0;return l});