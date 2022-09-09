// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../Ground","../core/Logger","../core/accessorSupport/ensureType"],function(b,e,f,g){const h=f.getLogger("esri.support.groundUtils"),c={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}};
b.ensureType=function(a){let d=null;"string"===typeof a?a in c?d=new e({resourceInfo:{data:{layers:[c[a]]}}}):h.warn(`Unable to find ground definition for: ${a}. Try "world-elevation"`):d=g.ensureType(e,a);return d};b.groundElevationLayers=c;Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});