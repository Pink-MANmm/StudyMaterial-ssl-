/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import r from"../core/Collection.js";import{clone as s}from"../core/lang.js";import{i as t}from"../chunks/maybe.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import{e as m}from"../chunks/enumeration.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import l from"./ExtrudeSymbol3DLayer.js";import p from"./FillSymbol3DLayer.js";import a from"./IconSymbol3DLayer.js";import n from"./LineSymbol3DLayer.js";import c from"./ObjectSymbol3DLayer.js";import j from"./Symbol3D.js";import y from"./TextSymbol3DLayer.js";import u from"./WaterSymbol3DLayer.js";import"../chunks/ArrayPool.js";import"../core/Evented.js";import"../core/Accessor.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/jsonMap.js";import"./Symbol3DLayer.js";import"../core/JSONSupport.js";import"../chunks/writer.js";import"../chunks/utils2.js";import"./edges/Edges3D.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"./edges/SketchEdges3D.js";import"./edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"./patterns/LineStylePattern3D.js";import"./patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/aaBoundingRect.js";import"../core/urlUtils.js";import"../chunks/persistableUrlUtils.js";import"./LineStyleMarker3D.js";import"../core/Clonable.js";import"../chunks/lineMarkers.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../request.js";import"../core/Loadable.js";import"../core/Promise.js";import"../chunks/locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"./PathSymbol3DLayer.js";import"./Symbol.js";import"../chunks/Thumbnail.js";import"./Font.js";var h;const b=r.ofType({base:null,key:"type",typeMap:{extrude:l,fill:p,icon:a,line:n,object:c,text:y,water:u}});let k=h=class extends j{constructor(o){super(o),this.symbolLayers=new b,this.type="polygon-3d"}clone(){return new h({styleOrigin:s(this.styleOrigin),symbolLayers:s(this.symbolLayers),thumbnail:s(this.thumbnail)})}static fromJSON(o){const r=new h;if(r.read(o),2===r.symbolLayers.length&&"fill"===r.symbolLayers.getItemAt(0).type&&"line"===r.symbolLayers.getItemAt(1).type){const s=r.symbolLayers.getItemAt(0),e=r.symbolLayers.getItemAt(1);!e.enabled||o.symbolLayers&&o.symbolLayers[1]&&!1===o.symbolLayers[1].enable||(s.outline={size:e.size,color:t(e.material)?e.material.color:null}),r.symbolLayers.removeAt(1)}return r}static fromSimpleFillSymbol(o){return new h({symbolLayers:[p.fromSimpleFillSymbol(o)]})}};o([e({type:b,json:{write:!0}})],k.prototype,"symbolLayers",void 0),o([m({PolygonSymbol3D:"polygon-3d"},{readOnly:!0})],k.prototype,"type",void 0),k=h=o([i("esri.symbols.PolygonSymbol3D")],k);const d=k;export{d as default};
