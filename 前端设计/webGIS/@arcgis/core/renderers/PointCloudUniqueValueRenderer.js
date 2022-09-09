/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import{clone as e}from"../core/lang.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import{I as s}from"../chunks/ensureType.js";import{e as t}from"../chunks/enumeration.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import n from"./PointCloudRenderer.js";import{L as p}from"../chunks/LegendOptions.js";import l from"../Color.js";import{JSONSupport as u}from"../core/JSONSupport.js";import"../chunks/maybe.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/jsonMap.js";import"../chunks/tracking.js";import"../chunks/PointSizeSplatAlgorithm.js";import"../core/Accessor.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/common.js";var c;let a=c=class extends u{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new c({description:this.description,label:this.label,values:e(this.values),color:e(this.color)})}};o([r({type:String,json:{write:!0}})],a.prototype,"description",void 0),o([r({type:String,json:{write:!0}})],a.prototype,"label",void 0),o([r({type:[String],json:{write:!0}})],a.prototype,"values",void 0),o([r({type:l,json:{type:[s],write:!0}})],a.prototype,"color",void 0),a=c=o([i("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],a);const m=a;var d;let h=d=class extends n{constructor(o){super(o),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new d({...this.cloneProperties(),field:e(this.field),fieldTransformType:e(this.fieldTransformType),colorUniqueValueInfos:e(this.colorUniqueValueInfos),legendOptions:e(this.legendOptions)})}};o([t({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],h.prototype,"type",void 0),o([r({json:{write:!0},type:String})],h.prototype,"field",void 0),o([r({type:n.fieldTransformTypeKebabDict.apiValues,json:{type:n.fieldTransformTypeKebabDict.jsonValues,read:n.fieldTransformTypeKebabDict.read,write:n.fieldTransformTypeKebabDict.write}})],h.prototype,"fieldTransformType",void 0),o([r({type:[m],json:{write:!0}})],h.prototype,"colorUniqueValueInfos",void 0),o([r({type:p,json:{write:!0}})],h.prototype,"legendOptions",void 0),h=d=o([i("esri.renderers.PointCloudUniqueValueRenderer")],h);const j=h;export{j as default};
