// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(h,c,a,d,l,m,n,k){var e;a=e=function(g){function f(){var b=g.apply(this,arguments)||this;b.apronWidth=1;b.brickSize=[32,32,32];b.maxLodLevel=0;b.nodeSize=[4,4,4];return b}h._inheritsLoose(f,g);f.prototype.isValid=function(){const b=
new e;return b.apronWidth===this.apronWidth&&b.maxLodLevel===this.maxLodLevel&&this.brickSize&&this.nodeSize&&Array.isArray(this.brickSize)&&Array.isArray(this.nodeSize)&&3===this.brickSize.length&&3===this.nodeSize.length&&32===this.brickSize[0]&&32===this.brickSize[1]&&32===this.brickSize[2]&&4===this.nodeSize[0]&&4===this.nodeSize[1]&&4===this.nodeSize[2]?!0:!1};return f}(a.JSONSupport);c.__decorate([d.property({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"apronWidth",void 0);
c.__decorate([d.property({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"brickSize",void 0);c.__decorate([d.property({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"maxLodLevel",void 0);c.__decorate([d.property({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"nodeSize",void 0);return a=e=c.__decorate([k.subclass("esri.layers.support.VoxelVolumeIndex")],a)});