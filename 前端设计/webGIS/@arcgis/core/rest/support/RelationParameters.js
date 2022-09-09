/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as t}from"../../core/JSONSupport.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{j as e}from"../../chunks/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import{fromJSON as i}from"../../geometry/support/jsonUtils.js";import"../../core/Accessor.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";let p=class extends t{constructor(r){super(r),this.geometries1=null,this.geometries2=null,this.relation=null,this.relationParameter=null}};r([o({json:{read:{reader:r=>r?r.map((r=>i(r))):null},write:{writer:(r,t)=>{t.geometries1=r.map((r=>r.toJSON()))}}}})],p.prototype,"geometries1",void 0),r([o({json:{read:{reader:r=>r?r.map((r=>i(r))):null},write:{writer:(r,t)=>{t.geometries2=r.map((r=>r.toJSON()))}}}})],p.prototype,"geometries2",void 0),r([o({type:String,json:{write:!0}})],p.prototype,"relation",void 0),r([o({type:String,json:{write:!0}})],p.prototype,"relationParameter",void 0),p=r([s("esri.rest.support.RelationParameters")],p),p.from=e(p);const m=p;export{m as default};
