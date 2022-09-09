// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ./Settings ./snappingUtils ../support/viewUtils".split(" "),function(g,l,m,h,n,k){let p=function(){function f(a,b){this.view=a;this.options=b;this.squaredShortLineThreshold=h.defaults.shortLineThreshold*h.defaults.shortLineThreshold}var d=f.prototype;d.snap=function(a,b){return m.isSome(b.vertexHandle)?"vertex"!==b.vertexHandle.type?[]:this.snapExistingVertex(a,b):this.snapNewVertex(a,b)};d.edgeExceedsShortLineThreshold=
function(a,b){return this.exceedsShortLineThreshold(a.leftVertex.pos,a.rightVertex.pos,b)};d.exceedsShortLineThreshold=function(a,b,{elevationInfo:c,editGeometryOperations:e}){e=e.data.coordinateHelper;return 0===this.squaredShortLineThreshold||n.squareDistance(k.anyMapPointToScreenPoint(b,e,c,this.view),k.anyMapPointToScreenPoint(a,e,c,this.view))>this.squaredShortLineThreshold};d.squaredProximityTreshold=function(a){return"touch"===a?this.squaredTouchProximityThreshold:this.squaredMouseProximityTreshold};
l._createClass(f,[{key:"squaredMouseProximityTreshold",get:function(){return this.options.distance*this.options.distance}},{key:"squaredTouchProximityThreshold",get:function(){const {distance:a,touchSensitivityMultiplier:b}=this.options,c=a*b;return c*c}}]);return f}();g.SnappingAlgorithm=p;Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});