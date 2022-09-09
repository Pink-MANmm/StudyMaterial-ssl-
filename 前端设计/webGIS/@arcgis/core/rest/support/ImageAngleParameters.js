/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{JSONSupport as r}from"../../core/JSONSupport.js";import{clone as s}from"../../core/lang.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import{I as e}from"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import p from"../../geometry/Point.js";import m from"../../geometry/SpatialReference.js";import"../../geometry/Extent.js";import"../../chunks/maybe.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../core/Accessor.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/writer.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";var n;let c=n=class extends r{constructor(){super(...arguments),this.angleNames=null,this.point=null,this.spatialReference=null,this.rasterId=null}clone(){return new n(s({angleNames:this.angleNames,point:this.point,spatialReference:this.spatialReference,rasterId:this.rasterId}))}};t([o({type:[String],json:{name:"angleName",write:!0}})],c.prototype,"angleNames",void 0),t([o({type:p,json:{write:!0}})],c.prototype,"point",void 0),t([o({type:m,json:{write:!0}})],c.prototype,"spatialReference",void 0),t([o({type:e,json:{write:!0}})],c.prototype,"rasterId",void 0),c=n=t([i("esri.rest.support.ImageAngleParameters")],c);const a=c;export{a as default};
