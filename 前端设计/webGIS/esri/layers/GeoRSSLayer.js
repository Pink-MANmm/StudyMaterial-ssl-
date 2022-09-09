// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../config ../request ../symbols ../core/maybe ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../geometry/Extent ../geometry/support/spatialReferenceUtils ./Layer ./mixins/BlendLayer ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./support/commonProperties ../symbols/Symbol ../symbols/SimpleLineSymbol ../symbols/PictureMarkerSymbol ../symbols/SimpleMarkerSymbol ../symbols/SimpleFillSymbol".split(" "),
function(l,d,v,w,r,x,b,y,z,e,O,P,Q,A,B,C,D,E,F,G,H,I,J,p,k,K,q,L,M){const N=["atom","xml"];r={base:k,key:"type",typeMap:{"simple-line":K},errorContext:"symbol"};q={base:k,key:"type",typeMap:{"picture-marker":q,"simple-marker":L},errorContext:"symbol"};k={base:k,key:"type",typeMap:{"simple-fill":M},errorContext:"symbol"};b=function(m){function n(...a){a=m.call(this,...a)||this;a.description=null;a.fullExtent=null;a.legendEnabled=!0;a.lineSymbol=null;a.pointSymbol=null;a.polygonSymbol=null;a.operationalLayerType=
"GeoRSS";a.url=null;a.type="geo-rss";return a}l._inheritsLoose(n,m);var h=n.prototype;h.normalizeCtorArgs=function(a,c){return"string"===typeof a?{url:a,...c}:a};h.readFeatureCollections=function(a,c){c.featureCollection.layers.forEach(f=>{var g;(f=f.layerDefinition.drawingInfo.renderer.symbol)&&"esriSFS"===f.type&&null!=(g=f.outline)&&g.style.includes("esriSFS")&&(f.outline.style="esriSLSSolid")});return c.featureCollection.layers};h.load=function(a){const c=x.isSome(a)?a.signal:null;this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service",
"Feature Service","Feature Collection","Scene Service"]},a).catch(y.throwIfAbortError).then(()=>this._fetchService(c)).then(f=>{this.read(f,{origin:"service"})}));return Promise.resolve(this)};h.hasDataChanged=function(){var a=l._asyncToGenerator(function*(){const c=yield this._fetchService();this.read(c,{origin:"service",ignoreDefaults:!0});return!0});return function(){return a.apply(this,arguments)}}();h._fetchService=function(){var a=l._asyncToGenerator(function*(c){var f;const g=this.spatialReference;
({data:c}=yield w(v.geoRSSServiceUrl,{query:{url:this.url,refresh:this.loaded?!0:void 0,outSR:D.isWGS84(g)?void 0:null!=(f=g.wkid)?f:JSON.stringify(g)},signal:c}));return c});return function(c){return a.apply(this,arguments)}}();h._hasGeometry=function(a){var c,f;return null!=(c=null==(f=this.featureCollections)?void 0:f.some(g=>{var t,u;return(null==(t=g.featureSet)?void 0:t.geometryType)===a&&0<(null==(u=g.featureSet.features)?void 0:u.length)}))?c:!1};l._createClass(n,[{key:"hasPoints",get:function(){return this._hasGeometry("esriGeometryPoint")}},
{key:"hasPolylines",get:function(){return this._hasGeometry("esriGeometryPolyline")}},{key:"hasPolygons",get:function(){return this._hasGeometry("esriGeometryPolygon")}},{key:"title",get:function(){const a=this._get("title");return a&&"defaults"!==this.originOf("title")?a:this.url?z.getFilename(this.url,N)||"GeoRSS":a||""},set:function(a){this._set("title",a)}}]);return n}(F.BlendLayer(I.RefreshableLayer(G.OperationalLayer(H.PortalLayer(J.ScaleRangeLayer(b.MultiOriginJSONMixin(E)))))));d.__decorate([e.property()],
b.prototype,"description",void 0);d.__decorate([e.property()],b.prototype,"featureCollections",void 0);d.__decorate([A.reader("service","featureCollections",["featureCollection.layers"])],b.prototype,"readFeatureCollections",null);d.__decorate([e.property({type:C,json:{name:"lookAtExtent"}})],b.prototype,"fullExtent",void 0);d.__decorate([e.property(p.id)],b.prototype,"id",void 0);d.__decorate([e.property(p.legendEnabled)],b.prototype,"legendEnabled",void 0);d.__decorate([e.property({types:r,json:{write:!0}})],
b.prototype,"lineSymbol",void 0);d.__decorate([e.property({type:["show","hide"]})],b.prototype,"listMode",void 0);d.__decorate([e.property({types:q,json:{write:!0}})],b.prototype,"pointSymbol",void 0);d.__decorate([e.property({types:k,json:{write:!0}})],b.prototype,"polygonSymbol",void 0);d.__decorate([e.property({type:["GeoRSS"]})],b.prototype,"operationalLayerType",void 0);d.__decorate([e.property(p.url)],b.prototype,"url",void 0);d.__decorate([e.property({json:{origins:{service:{read:{source:"name",
reader(m){return m||void 0}}}}}})],b.prototype,"title",null);d.__decorate([e.property({readOnly:!0,json:{read:!1},value:"geo-rss"})],b.prototype,"type",void 0);return b=d.__decorate([B.subclass("esri.layers.GeoRSSLayer")],b)});