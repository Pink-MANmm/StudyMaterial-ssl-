// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/maybe ../core/promiseUtils ../core/reactiveUtils ../core/accessorSupport/decorators/aliasOf ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Widget ./Spinner/SpinnerViewModel ./support/widgetUtils ./support/jsxFactory".split(" "),function(n,e,k,p,q,g,c,w,x,r,t,u,l,y,v){c=function(m){function h(a,b){a=m.call(this,a,b)||this;
a._animationDelay=500;a._animationPromise=null;a.location=null;a.view=null;a.viewModel=new l;a.visible=!1;return a}n._inheritsLoose(h,m);var d=h.prototype;d.initialize=function(){this.own([q.watch(()=>this.visible,a=>this._visibleChange(a))])};d.destroy=function(){this._animationPromise=null};d.show=function(a){const {location:b,promise:f}=a;b&&(this.viewModel.location=b);this.visible=!0;a=()=>this.hide();f&&f.catch(()=>{}).then(a)};d.hide=function(){this.visible=!1};d.render=function(){var {visible:a}=
this,{screenLocation:b}=this.viewModel;b=!!b;a={["esri-spinner--start"]:a&&b,["esri-spinner--finish"]:!a&&b};b=this._getPositionStyles();return v.tsx("div",{class:this.classes("esri-spinner",a),styles:b})};d._visibleChange=function(a){if(a)this.viewModel.screenLocationEnabled=!0;else{var b=p.after(this._animationDelay);this._animationPromise=b;b.catch(()=>{}).then(()=>{this._animationPromise===b&&(this.viewModel.screenLocationEnabled=!1,this._animationPromise=null)})}};d._getPositionStyles=function(){const {screenLocation:a,
view:b}=this.viewModel;if(k.isNone(b)||k.isNone(a))return{};const {padding:f}=b;return{left:`${a.x-f.left}px`,top:`${a.y-f.top}px`}};return h}(u);e.__decorate([g.aliasOf("viewModel.location")],c.prototype,"location",void 0);e.__decorate([g.aliasOf("viewModel.view")],c.prototype,"view",void 0);e.__decorate([r.property({type:l})],c.prototype,"viewModel",void 0);e.__decorate([g.aliasOf("viewModel.visible")],c.prototype,"visible",void 0);return c=e.__decorate([t.subclass("esri.widgets.Spinner")],c)});