// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Accessor ../core/screenUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass".split(" "),function(f,c,a,h,d,l,m,n,k){a=function(g){function e(b){b=g.call(this,b)||this;b.factor=1.5;b.offset=h.createScreenPoint(0,0);b.position=null;b.size=120;b.maskUrl=null;b.maskEnabled=!0;b.overlayUrl=null;b.overlayEnabled=!0;b.visible=!0;
return b}f._inheritsLoose(e,g);f._createClass(e,[{key:"version",get:function(){this.commitProperty("factor");this.commitProperty("offset");this.commitProperty("position");this.commitProperty("visible");this.commitProperty("size");this.commitProperty("maskUrl");this.commitProperty("maskEnabled");this.commitProperty("overlayUrl");this.commitProperty("overlayEnabled");return(this._get("version")||0)+1}}]);return e}(a);c.__decorate([d.property({type:Number})],a.prototype,"factor",void 0);c.__decorate([d.property({nonNullable:!0})],
a.prototype,"offset",void 0);c.__decorate([d.property()],a.prototype,"position",void 0);c.__decorate([d.property({type:Number,range:{min:0}})],a.prototype,"size",void 0);c.__decorate([d.property()],a.prototype,"maskUrl",void 0);c.__decorate([d.property()],a.prototype,"maskEnabled",void 0);c.__decorate([d.property()],a.prototype,"overlayUrl",void 0);c.__decorate([d.property()],a.prototype,"overlayEnabled",void 0);c.__decorate([d.property({readOnly:!0})],a.prototype,"version",null);c.__decorate([d.property({type:Boolean})],
a.prototype,"visible",void 0);return a=c.__decorate([k.subclass("esri.views.Magnifier")],a)});