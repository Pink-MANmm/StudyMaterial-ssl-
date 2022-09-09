// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require exports ../../chunks/_rollupPluginBabelHelpers ../../core/Error ../../core/has ../../core/maybe ../../core/promiseUtils ../../layers/support/source/DataLayerSource ./executeQueryJSON ./executeQueryPBF ../support/FeatureSet ../support/Query".split(" "),function(v,k,m,w,x,h,y,z,A,B,C,D){function n(){n=m._asyncToGenerator(function*(d,b,c,e){return r(d,b,c,e).then(f=>E(b,f,c,e))});return n.apply(this,arguments)}function r(d,b,c,e){return p.apply(this,arguments)}function p(){p=m._asyncToGenerator(function*(d,
b,c,e){var f;e={...e};{let a=D.from(b);a.sourceSpatialReference=a.sourceSpatialReference||(null==c?void 0:c.sourceSpatialReference);if(c.gdbVersion||c.dynamicDataSource)a=a===b?a.clone():a,a.gdbVersion=b.gdbVersion||c.gdbVersion,a.dynamicDataSource=b.dynamicDataSource?z.DataLayerSource.from(b.dynamicDataSource):c.dynamicDataSource;if(h.isSome(c.infoFor3D)&&t(b,null==c?void 0:c.infoFor3D)){a=a===b?a.clone():a;a.formatOf3DObjects=null;for(g of c.infoFor3D.queryFormats){if("3D_glb"===g.id){a.formatOf3DObjects=
g.id;break}"3D_gltf"!==g.id||a.formatOf3DObjects||(a.formatOf3DObjects=g.id)}if(!a.formatOf3DObjects)throw new w("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(h.isNone(a.outFields)||!a.outFields.includes("*")){a=a===b?a.clone():a;h.isNone(a.outFields)&&(a.outFields=[]);const {originX:F,originY:G,originZ:H,translationX:I,translationY:J,translationZ:K,scaleX:L,scaleY:M,scaleZ:N,rotationX:O,rotationY:P,rotationZ:Q,
rotationDeg:R}=c.infoFor3D.transformFieldRoles;a.outFields.push(F,G,H,I,J,K,L,M,N,O,P,Q,R)}}var g=a}b=null!=(null==(f=b.outStatistics)?void 0:f[0]);f=x("featurelayer-pbf-statistics");f=!b||f;let l;if("pbf"===c.format&&f)try{l=yield B.executeRawQueryPBF(d,g,e)}catch(a){if("query:parsing-pbf"===a.name)c.format="json";else throw a;}"json"!==c.format&&f||(l=yield A.executeRawQueryJSON(d,g,e));u(c.fieldsIndex,l.fields);return l});return p.apply(this,arguments)}function u(d,b){if(h.isSome(d)&&h.isSome(b))for(const c of b)(b=
d.get(c.name))&&Object.assign(c,b.toJSON())}function E(d,b,c,e){return q.apply(this,arguments)}function q(){q=m._asyncToGenerator(function*(d,b,c,e){if(!t(d,null==c?void 0:c.infoFor3D)||h.isNone(c.infoFor3D)||!b.features||!b.features.length)return C.fromJSON(b);({meshFeatureSetFromJSON:e}=yield y.whenOrAbort(new Promise((f,g)=>v(["../support/meshFeatureSet"],f,g)),e));return e(d,c.infoFor3D,b)});return q.apply(this,arguments)}function t(d,b){return h.isSome(b)&&d.returnGeometry&&"xyFootprint"!==d.multipatchOption&&
!d.outStatistics}k.executeQuery=function(d,b,c,e){return n.apply(this,arguments)};k.executeRawQuery=r;k.normalizeFields=u;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});