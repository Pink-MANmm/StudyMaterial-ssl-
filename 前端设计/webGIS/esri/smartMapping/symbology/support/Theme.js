// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["../../../core/lang","../../../core/maybe","../../support/utils"],function(n,k,g){return function(){function l(a){this.schemes=this.basemapGroups=this.supportedBasemaps=this.description=this.label=this.name=null;const {name:d,label:c,description:b,schemes:h}=a;this.name=d;this.label=c;this.description=b;this.schemes=h;a=a.basemapGroups||g.defaultBasemapGroups;let f=[];if(a)for(const e in a)f=f.concat(a[e]);this.supportedBasemaps=f;this.basemapGroups=a}var m=l.prototype;m.isBasemapSupported=
function(a){return(a=g.getBasemapId(a,this.supportedBasemaps))&&this.supportedBasemaps.includes(a)?!0:!1};m.getRawSchemes=function(a){{var d=a.basemap;var c=a.basemapTheme;var b=null;let e=null;d&&(b=g.getBasemapId(d,this.supportedBasemaps,!1))&&(d=g.getBasemapGroup(b),k.isSome(d)&&(e=d));!b&&c&&(b="dark"===c?"dark-gray":"gray",e=c);b||e||(b="gray",e="light");c={basemapId:b,basemapTheme:e}}const {basemapId:h,basemapTheme:f}=c;c=f;h&&(b=g.getBasemapGroup(h,this.basemapGroups),k.isSome(b)&&(c=b));a=
a.geometryType;"multipoint"===a?a="point":"mesh"===a&&(a="polygon");return{schemesInfo:n.clone((this.schemes[a]||this.schemes["default"])[c]),basemapId:h,basemapTheme:f}};return l}()});