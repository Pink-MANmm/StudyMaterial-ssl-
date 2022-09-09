/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import s from"../../../core/Accessor.js";import{property as r}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import{subclass as t}from"../../../core/accessorSupport/decorators/subclass.js";import"../../../chunks/maybe.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";let i=class extends s{constructor(o){super(o),this.format=null,this.position={coordinate:null,location:null}}get displayCoordinate(){const o=this.get("format");return o&&o.getDisplayCoordinate(this.get("position.coordinate"))}};o([r({readOnly:!0})],i.prototype,"displayCoordinate",null),o([r()],i.prototype,"format",void 0),o([r()],i.prototype,"position",void 0),i=o([t("esri.widgets.CoordinateConversion.support.Conversion")],i);const e=i;export{e as default};
