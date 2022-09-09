/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../config.js";import{id as t}from"../kernel.js";import o from"../PopupTemplate.js";import r from"../request.js";import{clone as s}from"../core/lang.js";import{addQueryParameters as n}from"../core/urlUtils.js";import i from"../geometry/SpatialReference.js";import{j as a,a as f,N as l,k as u}from"./aaBoundingBox.js";import{b as p}from"./extentUtils.js";import{fromJSON as m}from"../renderers/support/jsonUtils.js";import y from"../rest/support/FeatureSet.js";const c={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function d(e){const t=e.folders||[],o=t.slice(),r=new Map,n=new Map,i=new Map,a=new Map,f=new Map,l={esriGeometryPoint:n,esriGeometryPolyline:i,esriGeometryPolygon:a};(e.featureCollection&&e.featureCollection.layers||[]).forEach((e=>{const t=s(e);t.featureSet.features=[];const o=e.featureSet.geometryType;r.set(o,t);const f=e.layerDefinition.objectIdField;"esriGeometryPoint"===o?G(n,f,e.featureSet.features):"esriGeometryPolyline"===o?G(i,f,e.featureSet.features):"esriGeometryPolygon"===o&&G(a,f,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{f.set(e.id,e)})),t.forEach((t=>{t.networkLinkIds.forEach((r=>{const s=function(e,t,o){const r=function(e,t){let o;return t.some((t=>t.id===e&&(o=t,!0))),o}(e,o);return r&&(r.parentFolderId=t,r.networkLink=r),r}(r,t.id,e.networkLinks);s&&o.push(s)}))})),o.forEach((e=>{if(e.featureInfos){e.points=s(r.get("esriGeometryPoint")),e.polylines=s(r.get("esriGeometryPolyline")),e.polygons=s(r.get("esriGeometryPolygon")),e.mapImages=[];for(const t of e.featureInfos)switch(t.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const o=l[t.type].get(t.id);o&&e[c[t.type]].featureSet.features.push(o);break}case"GroundOverlay":{const o=f.get(t.id);o&&e.mapImages.push(o);break}}e.fullExtent=P([e])}}));const u=P(o);return{folders:t,sublayers:o,extent:u}}function g(o,s,i,a){const f=t&&t.findCredential(o);o=n(o,{token:f&&f.token});const l=e.kmlServiceUrl;return r(l,{query:{url:o,model:"simple",folders:"",refresh:0!==i||void 0,outSR:JSON.stringify(s)},responseType:"json",signal:a})}function S(e,t,o=null,r=[]){const s=[],n={},i=t.sublayers,a=t.folders.map((e=>e.id));return i.forEach((t=>{const i=new e;if(o?i.read(t,o):i.read(t),r.length&&a.includes(i.id)&&(i.visible=r.includes(i.id)),n[t.id]=i,null!=t.parentFolderId&&-1!==t.parentFolderId){const e=n[t.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers.unshift(i)}else s.unshift(i)})),s}function G(e,t,o){o.forEach((o=>{e.set(o.attributes[t],o)}))}async function h(e){const t=y.fromJSON(e.featureSet).features,r=e.layerDefinition,s=m(r.drawingInfo.renderer),n=o.fromJSON(e.popupInfo),i=[];for(const e of t){const t=await s.getSymbolAsync(e);e.symbol=t,e.popupTemplate=n,e.visible=!0,i.push(e)}return i}function P(e){const t=f(l),o=f(l);for(const r of e){if(r.polygons&&r.polygons.featureSet&&r.polygons.featureSet.features)for(const e of r.polygons.featureSet.features)p(t,e.geometry),u(o,t);if(r.polylines&&r.polylines.featureSet&&r.polylines.featureSet.features)for(const e of r.polylines.featureSet.features)p(t,e.geometry),u(o,t);if(r.points&&r.points.featureSet&&r.points.featureSet.features)for(const e of r.points.featureSet.features)p(t,e.geometry),u(o,t);if(r.mapImages)for(const e of r.mapImages)p(t,e.extent),u(o,t)}return a(o,l)?null:{xmin:o[0],ymin:o[1],zmin:o[2],xmax:o[3],ymax:o[4],zmax:o[5],spatialReference:i.WGS84}}export{P as c,g as f,h as g,d as p,S as s};
