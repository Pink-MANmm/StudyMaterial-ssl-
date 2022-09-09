// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Logger ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/projection ../../../geometry/support/contains ../../../geometry/support/near".split(" "),function(c,h,d,p,q,k,f,w,x,y,r,t,l,u){var g;const v=q.getLogger("esri.views.MapView");
c.GeometryConstraint=g=function(m){function e(a){a=m.call(this,a)||this;a.geometry=null;a.spatialReference=null;return a}h._inheritsLoose(e,m);var n=e.prototype;n.constrain=function(a,b){if(k.isNone(this.normalizedGeometry))return a;b=a.targetGeometry;if("extent"===this.normalizedGeometry.type?l.extentContainsPoint(this.normalizedGeometry,b):l.polygonContainsPoint(this.normalizedGeometry,b))return a;({coordinate:b}=u.nearestCoordinate(this.normalizedGeometry,b));if(!b)return a;a.targetGeometry=b;
return a};n.clone=function(){var a,b;return new g({geometry:null==(a=this.geometry)?void 0:a.clone(),spatialReference:null==(b=this.spatialReference)?void 0:b.clone()})};h._createClass(e,[{key:"normalizedGeometry",get:function(){if(k.isNone(this.geometry)||!this.spatialReference)return null;if(!this.spatialReference.equals(this.geometry.spatialReference))try{return t.project(this.geometry,this.spatialReference)}catch(a){return v.error("#constraints.geometry","could not project the geometry to the view's spatial reference",
{geometry:this.geometry,spatialReference:this.spatialReference,error:a}),null}return this.geometry}}]);return e}(p);d.__decorate([f.property({constructOnly:!0})],c.GeometryConstraint.prototype,"geometry",void 0);d.__decorate([f.property({readOnly:!0})],c.GeometryConstraint.prototype,"normalizedGeometry",null);d.__decorate([f.property({constructOnly:!0})],c.GeometryConstraint.prototype,"spatialReference",void 0);c.GeometryConstraint=g=d.__decorate([r.subclass("esri.views.2d.constraints.GeometryConstraint")],
c.GeometryConstraint);Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});