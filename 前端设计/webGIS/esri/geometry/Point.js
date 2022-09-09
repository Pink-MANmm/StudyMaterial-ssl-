// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Logger ../core/maybe ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/accessorSupport/ensureType ./Geometry ./SpatialReference ./support/offset ./support/pointUtils ./support/spatialReferenceUtils ./support/webMercatorUtils".split(" "),
function(x,h,f,z,m,M,N,A,B,C,D,E,F,G,H,I,J,n){function y(l){return l&&("esri.geometry.SpatialReference"===l.declaredClass||null!=l.wkid)}var v;const q=[0,0],w=f.getLogger("esri.geometry.Point");f=v=function(l){function r(...a){a=l.call(this,...a)||this;a.x=0;a.y=0;a.z=void 0;a.m=void 0;a.type="point";return a}x._inheritsLoose(r,l);r.copy=function(a,b){b._set("x",a._get("x"));b._set("y",a._get("y"));b._set("z",a._get("z"));b._set("m",a._get("m"));a=a._get("spatialReference");b._set("spatialReference",
Object.isFrozen(a)?a:a.clone())};var k=r.prototype;k.normalizeCtorArgs=function(a,b,c,g,e){let d;if(Array.isArray(a))d=a,e=b,a=d[0],b=d[1],c=d[2],g=d[3];else if(a&&"object"===typeof a){if(d=a,a=null!=d.x?d.x:d.longitude,b=null!=d.y?d.y:d.latitude,c=d.z,g=d.m,(e=d.spatialReference)&&"esri.geometry.SpatialReference"!==e.declaredClass&&(e=new G(e)),null!=d.longitude||null!=d.latitude)null==d.longitude?w.warn(".longitude\x3d","Latitude was defined without longitude"):null==d.latitude?w.warn(".latitude\x3d",
"Longitude was defined without latitude"):!d.declaredClass&&e&&e.isWebMercator&&(b=n.lngLatToXY(d.longitude,d.latitude,q),a=b[0],b=b[1])}else y(c)?(e=c,c=null):y(g)&&(e=g,g=null);a={x:a,y:b};null==a.x&&null!=a.y?w.warn(".y\x3d","Y coordinate was defined without an X coordinate"):null==a.y&&null!=a.x&&w.warn(".x\x3d","X coordinate was defined without a Y coordinate");null!=e&&(a.spatialReference=e);null!=c&&(a.z=c);null!=g&&(a.m=g);return a};k.writeX=function(a,b,c){b[c]=isNaN(a)?"NaN":a};k.readX=
function(a){return"string"===typeof a?NaN:a};k.clone=function(){const a=new v;a.x=this.x;a.y=this.y;a.z=this.z;a.m=this.m;a.spatialReference=this.spatialReference;return a};k.copy=function(a){v.copy(a,this);return this};k.equals=function(a){if(z.isNone(a))return!1;const {x:b,y:c,z:g,m:e,spatialReference:d}=this,{z:K,m:L}=a;let {x:t,y:u,spatialReference:p}=a;if(!d.equals(p))if(d.isWebMercator&&p.isWGS84)[t,u]=n.lngLatToXY(t,u),p=d;else if(d.isWGS84&&p.isWebMercator)[t,u]=n.xyToLngLat(t,u),p=d;else return!1;
return b===t&&c===u&&g===K&&e===L&&d.wkid===p.wkid};k.offset=function(a,b,c){return H.offsetPoint(this,a,b,c)};k.normalize=function(){if(!this.spatialReference)return this;var a=J.getInfo(this.spatialReference);if(!a)return this;let b=this.x;const [c,g]=a.valid;a=2*g;let e;b>g?(e=Math.ceil(Math.abs(b-g)/a),b-=e*a):b<c&&(e=Math.ceil(Math.abs(b-c)/a),b+=e*a);this._set("x",b);return this};k.distance=function(a){return I.distance(this,a)};k.toArray=function(){const a=this.hasZ,b=this.hasM;return a&&b?
[this.x,this.y,this.z,this.m]:a?[this.x,this.y,this.z]:b?[this.x,this.y,this.m]:[this.x,this.y]};k.toJSON=function(a){return this.write({},a)};x._createClass(r,[{key:"cache",get:function(){this.commitProperty("x");this.commitProperty("y");this.commitProperty("z");this.commitProperty("m");this.commitProperty("spatialReference");return{}}},{key:"hasM",get:function(){return void 0!==this.m},set:function(a){const b=void 0!==this._get("m");a!==b&&(this._set("m",a?0:void 0),this._set("hasM",a))}},{key:"hasZ",
get:function(){return void 0!==this.z},set:function(a){const b=void 0!==this._get("z");a!==b&&(this._set("z",a?0:void 0),this._set("hasZ",a))}},{key:"latitude",get:function(){const {spatialReference:a,x:b,y:c}=this;if(a){if(a.isWebMercator)return n.xyToLngLat(b,c,q)[1];if(a.isGeographic)return c}return null},set:function(a){const {spatialReference:b,x:c}=this;b&&(b.isWebMercator?this._set("y",n.lngLatToXY(c,a,q)[1]):b.isGeographic&&this._set("y",a),this._set("latitude",a))}},{key:"longitude",get:function(){const {x:a,
y:b,spatialReference:c}=this;if(c){if(c.isWebMercator)return n.xyToLngLat(a,b,q)[0];if(c.isGeographic)return a}return null},set:function(a){const {y:b,spatialReference:c}=this;c&&(c.isWebMercator?this._set("x",n.lngLatToXY(a,b,q)[0]):c.isGeographic&&this._set("x",a),this._set("longitude",a))}}]);return r}(F);h.__decorate([m.property({readOnly:!0})],f.prototype,"cache",null);h.__decorate([m.property({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],f.prototype,"hasM",null);h.__decorate([m.property({type:Boolean,
json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],f.prototype,"hasZ",null);h.__decorate([m.property({type:Number})],f.prototype,"latitude",null);h.__decorate([m.property({type:Number})],f.prototype,"longitude",null);h.__decorate([m.property({type:Number,json:{type:[Number,String],write:{isRequired:!0,allowNull:!0}}}),A.cast(l=>isNaN(l)?l:E.ensureNumber(l))],f.prototype,"x",void 0);h.__decorate([D.writer("x")],f.prototype,"writeX",null);h.__decorate([B.reader("x")],f.prototype,"readX",null);
h.__decorate([m.property({type:Number,json:{write:!0}})],f.prototype,"y",void 0);h.__decorate([m.property({type:Number,json:{write:{overridePolicy(){return{enabled:this.hasZ}}}}})],f.prototype,"z",void 0);h.__decorate([m.property({type:Number,json:{write:{overridePolicy(){return{enabled:this.hasM}}}}})],f.prototype,"m",void 0);f=v=h.__decorate([C.subclass("esri.geometry.Point")],f);f.prototype.toJSON.isDefaultToJSON=!0;return f});