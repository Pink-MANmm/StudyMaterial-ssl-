// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/time ../../../../chunks/vec3 ../../../../chunks/vec3f64 ./Camera ../../webgl-engine/lib/Camera ../../../animation/pointToPoint/Animation".split(" "),function(n,q,d,e,h,p,r,t){const u=h.create();h=function(){function k(b){this.currentTime=d.Milliseconds(0);this._animation=new t.Animation(()=>new p(b));this._current=new p(b)}var l=k.prototype;l.update=function(b,c,v){const f=this._animation.definition.source,m=this._animation.definition.target,
a=e.subtract(u,c.center,b.center),g=e.length(a);1E-5<=g?(a[0]/=g,a[1]/=g,a[2]/=g):(a[0]=0,a[1]=1,a[0]=0);e.copy(f.lookAtDirection,a);e.copy(m.lookAtDirection,a);f.copyFromRenderCamera(b);m.copyFromRenderCamera(c);this._current.copyFrom(f);this._animation.update(f,m,v);this.currentTime=d.Milliseconds(0);b.almostEquals(c)&&(this.currentTime=this._animation.time)};l.cameraAt=function(b,c){this._animation.cameraAt(b,this._current);c=c||new r.Camera;this._current.copyToRenderCamera(c);return c};l.step=
function(b,c){this.finished||(this.currentTime=d.Milliseconds(this.currentTime+d.millisecondsFromSeconds(b)),this.currentTime>=this.time&&(this.currentTime=this.time));return this.cameraAt(this.currentTime/this.time,c)};q._createClass(k,[{key:"finished",get:function(){return this.currentTime>=this._animation.time}},{key:"time",get:function(){return this._animation.time}}]);return k}();n.Animation=h;Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});