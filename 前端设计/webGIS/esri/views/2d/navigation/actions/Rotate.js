// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../geometry ../../../../Viewpoint ../../../../core/Accessor ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec2 ../../../../chunks/vec2f64 ../../viewpointUtils ../../../../geometry/Point".split(" "),function(q,d,b,r,t,m,y,z,A,u,e,f,g,v){const h=
f.create(),n=f.create();b=function(p){function k(a){a=p.call(this,a)||this;a._previousCenter=f.create();a.viewpoint=new r({targetGeometry:new v,scale:0,rotation:0});return a}q._inheritsLoose(k,p);var l=k.prototype;l.begin=function(a,c){this.navigation.begin();e.set(this._previousCenter,c.center.x,c.center.y)};l.update=function(a,c){const {state:{size:w,padding:x}}=a;e.set(h,c.center.x,c.center.y);g.getAnchor(n,w,x);a.viewpoint=g.rotateBy(this.viewpoint,a.state.paddedViewState.viewpoint,g.angleBetween(n,
this._previousCenter,h));e.copy(this._previousCenter,h)};l.end=function(){this.navigation.end()};return k}(t);d.__decorate([m.property()],b.prototype,"viewpoint",void 0);d.__decorate([m.property()],b.prototype,"navigation",void 0);return b=d.__decorate([u.subclass("esri.views.2d.actions.Rotate")],b)});