/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import o from"../core/Collection.js";import{L as r}from"../chunks/Logger.js";import{u as t}from"../chunks/maybe.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{cast as i}from"../core/accessorSupport/decorators/cast.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import m from"./Layer.js";import{BlendLayer as n}from"./mixins/BlendLayer.js";import{ScaleRangeLayer as c}from"./mixins/ScaleRangeLayer.js";import l from"./support/LocalMediaElementSource.js";import"../chunks/ArrayPool.js";import"../core/Evented.js";import"../core/Accessor.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";import"../chunks/ensureType.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../geometry/support/jsonUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/Identifiable.js";import"../core/Loadable.js";import"../core/Promise.js";import"../chunks/jsonUtils.js";import"../chunks/parser2.js";import"../chunks/colorUtils.js";import"../chunks/screenUtils.js";import"../chunks/mat4f32.js";import"../chunks/mat4.js";import"../chunks/common.js";import"../chunks/_commonjsHelpers.js";import"../chunks/collectionUtils.js";import"../core/HandleOwner.js";import"../core/Handles.js";import"../core/reactiveUtils.js";import"../geometry/projection.js";import"../chunks/mathUtils.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../chunks/pe.js";import"../chunks/assets.js";import"../chunks/aaBoundingRect.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/BoundsStore.js";import"../chunks/PooledRBush.js";import"../chunks/quickselect.js";import"./support/ImageElement.js";import"./support/MediaElementBase.js";import"./support/CornersGeoreference.js";import"../chunks/GeoreferenceBase.js";import"../core/Clonable.js";import"./support/ExtentAndRotationGeoreference.js";import"../chunks/mediaUtils.js";import"../chunks/normalizeUtilsSync.js";import"../chunks/normalizeUtilsCommon.js";import"./support/VideoElement.js";let a=class extends(n(c(m))){constructor(s){super(s),this.copyright=null,this.fullExtent=null,this.spatialReference=null,this.type="media",this.source=new l}load(s){this.spatialReference&&(this.source.spatialReference=this.spatialReference);const o=this.source.load(s).then((()=>{this.spatialReference=this.source.spatialReference}));return this.addResolvingPromise(o),Promise.resolve(this)}destroy(){t(this.source)?.destroy()}set source(s){"not-loaded"===this.loadStatus?this._set("source",s):r.getLogger(this.declaredClass).error("#source","source cannot be changed after the layer is loaded.")}castSource(s){return s?Array.isArray(s)||s instanceof o?new l({elements:s}):s:null}};s([e({type:String})],a.prototype,"copyright",void 0),s([e({aliasOf:"source.fullExtent"})],a.prototype,"fullExtent",void 0),s([e({type:["show","hide"]})],a.prototype,"listMode",void 0),s([e({nonNullable:!0})],a.prototype,"source",null),s([i("source")],a.prototype,"castSource",null),s([e()],a.prototype,"spatialReference",void 0),s([e({readOnly:!0})],a.prototype,"type",void 0),a=s([p("esri.layers.MediaLayer")],a);const u=a;export{u as default};
