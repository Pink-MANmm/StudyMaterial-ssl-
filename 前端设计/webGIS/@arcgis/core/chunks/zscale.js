/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as e}from"./maybe.js";import{a as t}from"./unitUtils.js";import{e as n}from"../geometry/SpatialReference.js";function r(r,o,i){if(e(o)||e(i)||i.vcsWkid||n(o,i))return null;const s=t(o)/t(i);if(1===s)return null;switch(r){case"point":case"esriGeometryPoint":return e=>{return n=s,void((t=e)&&null!=t.z&&(t.z*=n));var t,n};case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const n of e.paths)for(const e of n)e.length>2&&(e[2]*=t)}(e,s);case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const n of e.rings)for(const e of n)e.length>2&&(e[2]*=t)}(e,s);case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const n of e.points)n.length>2&&(n[2]*=t)}(e,s);case"extent":case"esriGeometryExtent":return e=>{return n=s,void((t=e)&&null!=t.zmin&&null!=t.zmax&&(t.zmin*=n,t.zmax*=n));var t,n};default:return null}}export{r as g};
