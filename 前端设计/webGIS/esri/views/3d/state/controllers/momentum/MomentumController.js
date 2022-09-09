// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/accessorSupport/decorators/property ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/subclass ../../../../ViewAnimation ../../../camera/constraintUtils ../../../camera/constraintUtils/common ../AnimationController ../../../webgl-engine/lib/Camera".split(" "),function(b,h,k,m,t,u,v,n,p,
q,c,r,l){b.MomentumController=function(e){function d(a){a=e.call(this,a)||this;a.view=null;a.beginCamera=new l.Camera;a.elapsedTimeSec=0;a.constraintOptions={selection:c.ConstraintTypes.ALL,interactionType:c.InteractionType.PAN,interactionFactor:0,interactionStartCamera:new l.Camera,interactionDirection:null,tiltMode:c.TiltMode.TUMBLE};return a}h._inheritsLoose(d,e);var f=d.prototype;f.initialize=function(){this.constraintOptions.interactionType=this.interactionType;this.viewAnimation=new p};f.onControllerStart=
function(a){this.beginCamera.copyFrom(a);this.constraintOptions.interactionStartCamera=this.beginCamera;e.prototype.onControllerStart.call(this,a)};f.stepController=function(a,g){g.copyViewFrom(this.beginCamera);this.elapsedTimeSec+=a;this.momentumStep(this.elapsedTimeSec,g);q.applyAll(this.view,g,this.constraintOptions)};h._createClass(d,[{key:"steppingFinished",get:function(){return this.momentum.isFinished(this.elapsedTimeSec)}}]);return d}(r.AnimationController);k.__decorate([m.property({constructOnly:!0})],
b.MomentumController.prototype,"view",void 0);b.MomentumController=k.__decorate([n.subclass("esri.views.3d.state.controllers.momentum.MomentumController")],b.MomentumController);Object.defineProperty(b,"InteractionType",{enumerable:!0,get:()=>c.InteractionType});Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});