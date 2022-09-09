// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/accessorSupport/decorators/aliasOf ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Widget ./Compass/CompassViewModel ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/jsxFactory ./support/widgetUtils".split(" "),function(r,c,n,b,y,z,e,t,u,p,v,w,k,A){b=function(q){function l(a,f){a=q.call(this,
a,f)||this;a.goToOverride=null;a.iconClass="esri-icon-locate-circled";a.label=void 0;a.messages=null;a.view=null;a.viewModel=new p;return a}r._inheritsLoose(l,q);var g=l.prototype;g.reset=function(){return this.viewModel.reset()};g.render=function(){const {orientation:a,state:f}=this.viewModel;var d="disabled"===f,h="compass"===("rotation"===f?"rotation":"compass");const x=d?-1:0;d={["esri-disabled"]:d,["esri-interactive"]:!d};h={["esri-icon-compass"]:h,["esri-icon-dial"]:!h};const {messages:m}=this;
return k.tsx("div",{bind:this,class:this.classes("esri-compass esri-widget--button esri-widget",d),onclick:this._reset,onkeydown:this._reset,role:"button",tabIndex:x,"aria-label":m.reset,title:m.reset},k.tsx("span",{"aria-hidden":"true",class:this.classes("esri-compass__icon",h),styles:this._toRotationTransform(a)}),k.tsx("span",{class:"esri-icon-font-fallback-text"},m.reset))};g._reset=function(){this.viewModel.reset()};g._toRotationTransform=function(a){return{transform:`rotateZ(${a.z}deg)`}};return l}(u);
c.__decorate([n.aliasOf("viewModel.goToOverride")],b.prototype,"goToOverride",void 0);c.__decorate([e.property()],b.prototype,"iconClass",void 0);c.__decorate([e.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],b.prototype,"label",void 0);c.__decorate([e.property(),w.messageBundle("esri/widgets/Compass/t9n/Compass")],b.prototype,"messages",void 0);c.__decorate([n.aliasOf("viewModel.view")],b.prototype,"view",void 0);c.__decorate([e.property({type:p})],b.prototype,"viewModel",void 0);
c.__decorate([v.accessibleHandler()],b.prototype,"_reset",null);return b=c.__decorate([t.subclass("esri.widgets.Compass")],b)});