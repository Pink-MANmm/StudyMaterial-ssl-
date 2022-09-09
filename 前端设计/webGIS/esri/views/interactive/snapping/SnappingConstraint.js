// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/vec2 ../../../chunks/vec2f64 ./Settings ./snappingUtils ../../support/geometry2dUtils".split(" "),function(h,l,m,w,r,t,e){let n=function(f){this.coordinateHelper=f},v=function(f){function c(a,b){a=f.call(this,a)||this;a.point=b;return a}l._inheritsLoose(c,f);var d=c.prototype;d.objectEqual=function(a){return a instanceof c?t.objectEqual(this.point,a.point):!1};d.check=function(a){return m.squaredDistance(a,this.point)<r.defaults.pointThreshold};
d.closestTo=function(){return this.coordinateHelper.clone(this.point)};d.intersect=function(a){const b=[];a instanceof p?b.push(...e.intersectLineAndPoint({start:a.start,end:a.end,type:a instanceof k?e.LineType.LINE:e.LineType.RAY},this.point)):a instanceof u&&b.push(...e.intersectCircleAndPoint(a.center,a.radius,this.point));return b.map(g=>new q(this.coordinateHelper,g,this,a))};return c}(n),p=function(f){function c(a,b,g){a=f.call(this,a)||this;a.start=b;a.end=g;return a}l._inheritsLoose(c,f);
var d=c.prototype;d.objectEqual=function(a){return a instanceof c?t.objectEqual(this.start,a.start)&&t.objectEqual(this.end,a.end):!1};d.intersect=function(a){const b=[];a instanceof v?b.push(...e.intersectLineAndPoint({start:this.start,end:this.end,type:this instanceof k?e.LineType.LINE:e.LineType.RAY},a.point)):a instanceof c?b.push(...e.intersectLineAndRay({start:this.start,end:this.end,type:this instanceof k?e.LineType.LINE:e.LineType.RAY},{start:a.start,end:a.end,type:a instanceof k?e.LineType.LINE:
e.LineType.RAY})):a instanceof u&&b.push(...e.intersectLineLikeAndCircle({start:this.start,end:this.end,type:this instanceof k?e.LineType.LINE:e.LineType.RAY},a.center,a.radius));return b.map(g=>new q(this.coordinateHelper,g,this,a))};return c}(n),x=function(f){function c(a,b,g){a=f.call(this,a,b,g)||this;a.dir=w.create();a.p=w.create();return a}l._inheritsLoose(c,f);var d=c.prototype;d.objectEqual=function(a){return a instanceof c?f.prototype.objectEqual.call(this,a):!1};d.check=function(a){m.subtract(this.dir,
this.end,this.start);m.subtract(this.p,a,this.start);return 0<=m.dot(this.dir,this.p)?e.pointToLineDistance(a,this.start,this.end)<r.defaults.pointOnLineThreshold:!1};d.closestTo=function(a){const b=this.coordinateHelper.clone(a);e.projectPointToRay(b,a,this.start,this.end);return b};return c}(p),k=function(f){function c(a,b,g){return f.call(this,a,b,g)||this}l._inheritsLoose(c,f);var d=c.prototype;d.objectEqual=function(a){return a instanceof c?f.prototype.objectEqual.call(this,a):!1};d.check=function(a){return e.pointToLineDistance(a,
this.start,this.end)<r.defaults.pointOnLineThreshold};d.closestTo=function(a){const b=this.coordinateHelper.clone(a);e.projectPointToLine(b,a,this.start,this.end);return b};return c}(p),q=function(f){function c(a,b,g,y){a=f.call(this,a)||this;a.intersection=b;a.first=g;a.second=y;return a}l._inheritsLoose(c,f);var d=c.prototype;d.objectEqual=function(a){return a instanceof c?this.first.objectEqual(a.first)&&this.second.objectEqual(a.second):!1};d.check=function(){return!1};d.closestTo=function(a){a=
this.coordinateHelper.clone(a);m.copy(a,this.intersection);return a};d.intersect=function(){return[]};return c}(n),u=function(f){function c(a,b,g){a=f.call(this,a)||this;a.center=b;a.radius=g;return a}l._inheritsLoose(c,f);var d=c.prototype;d.objectEqual=function(a){return a instanceof c?this.center[0]===a.center[0]&&this.center[1]===a.center[1]&&this.radius===a.radius:!1};d.check=function(){return!1};d.closestTo=function(a){const b=this.coordinateHelper.clone(a);e.projectPointToCircle(b,a,this.center,
this.radius);return b};d.intersect=function(a){const b=[];a instanceof p?b.push(...e.intersectLineLikeAndCircle({start:a.start,end:a.end,type:a instanceof k?e.LineType.LINE:e.LineType.RAY},this.center,this.radius)):a instanceof v&&b.push(...e.intersectCircleAndPoint(this.center,this.radius,a.point));return b.map(g=>new q(this.coordinateHelper,g,this,a))};return c}(n);h.IntersectionConstraint=q;h.LineConstraint=k;h.LineLikeConstraint=p;h.PlanarCircleConstraint=u;h.PointConstraint=v;h.RayConstraint=
x;h.SnappingConstraint=n;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});