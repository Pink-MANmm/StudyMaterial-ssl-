// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../geometry ../../../../Viewpoint ../../../../core/Accessor ../../../../core/reactiveUtils ../../../../core/screenUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../viewpointUtils ../../../navigation/PanPlanarMomentumEstimator ../../../../geometry/Point".split(" "),
function(q,g,e,r,t,u,v,k,A,B,C,w,x,m,n,y,z){e=function(p){function l(b){var a=p.call(this,b)||this;a.animationTime=0;a.momentumEstimator=new y.PanPlanarMomentumEstimator(500,6,.92);a.momentum=null;a.tmpMomentum=m.create();a.momentumFinished=!1;a.viewpoint=new r({targetGeometry:new z,scale:0,rotation:0});u.when(()=>a.momentumFinished,()=>a.navigation.stop());return a}q._inheritsLoose(l,p);var f=l.prototype;f.begin=function(b,a){this.navigation.begin();this.momentumEstimator.reset();this.addToEstimator(a);
this.previousDrag=a};f.update=function(b,a){this.addToEstimator(a);let c=a.center.x,d=a.center.y;const h=this.previousDrag;c=h?h.center.x-c:-c;d=h?d-h.center.y:d;b.viewpoint=n.translateBy(this.viewpoint,b.viewpoint,[c||0,d||0]);this.previousDrag=a};f.end=function(b,a){this.addToEstimator(a);this.momentum=b.navigation.momentumEnabled?this.momentumEstimator.evaluateMomentum():null;this.animationTime=0;if(this.momentum)this.onAnimationUpdate(b);this.previousDrag=null;this.navigation.end()};f.addToEstimator=
function(b){var a=b.center.x;const c=b.center.y,d=v.createScreenPointArray(-a,c);a=m.fromValues(-a,c,0);this.momentumEstimator.add(d,a,.001*b.timestamp)};f.onAnimationUpdate=function(b){this.navigation.animationManager.animateContinous(b.viewpoint,(a,c)=>{this.momentumFinished=!this.momentum||this.momentum.isFinished(this.animationTime);c*=.001;if(!this.momentumFinished){const d=this.momentum.valueDelta(this.animationTime,c);x.scale(this.tmpMomentum,this.momentum.direction,d);n.translateBy(a,a,this.tmpMomentum);
b.constraints.constrainByGeometry(a)}this.animationTime+=c})};f.stopMomentumNavigation=function(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())};return l}(t);g.__decorate([k.property()],e.prototype,"momentumFinished",void 0);g.__decorate([k.property()],e.prototype,"viewpoint",void 0);g.__decorate([k.property()],e.prototype,"navigation",void 0);return e=g.__decorate([w.subclass("esri.views.2d.navigation.actions.Pan")],e)});