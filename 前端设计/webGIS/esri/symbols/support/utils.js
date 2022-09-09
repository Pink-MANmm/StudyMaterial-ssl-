// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require exports ../../chunks/_rollupPluginBabelHelpers ../../Color ../../symbols ../../core/asyncUtils ../../core/has ../../core/maybe ../../core/screenUtils ../../chunks/vec3f64 ../../layers/effects/jsonUtils ./gfxUtils ./Symbol3DMaterial".split(" "),function(A,h,m,p,k,B,C,f,D,E,F,G,H){function I(a){a=a.symbolLayers;if(!a)return null;let b=null;a.forEach(c=>{if("object"!==c.type||null==c.resource.href)b="water"===c.type?f.unwrap(c.color):f.isSome(c.material)?f.unwrap(c.material.color):null});
return b?new p(b):null}function n(a,b){if(null==b)return a;a=a.toRgba();a[3]*=b;return new p(a)}function J(a,b,c){if(a=a.symbolLayers){var e=d=>{d=f.isSome(d)?d:null;b=b||d||null!=c&&K;return n(b,c)};a.forEach(d=>{if("object"!==d.type||null==d.resource.href||b)if("water"===d.type)d.color=e(d.color);else{var l=f.isSome(d.material)?d.material.color:null;l=e(l);f.isNone(d.material)?d.material=new H.Symbol3DMaterial({color:l}):d.material.color=l;null!=c&&"outline"in d&&f.isSome(d.outline)&&f.isSome(d.outline.color)&&
(d.outline.color=n(d.outline.color,c))}})}}function L(a,b){return r.apply(this,arguments)}function r(){r=m._asyncToGenerator(function*(a,b){(a=a.symbolLayers)&&(yield B.forEach(a,function(){var c=m._asyncToGenerator(function*(e){return M(e,b)});return function(e){return c.apply(this,arguments)}}()))});return r.apply(this,arguments)}function M(a,b){return t.apply(this,arguments)}function t(){t=m._asyncToGenerator(function*(a,b){switch(a.type){case "extrude":a.size="number"===typeof b[2]?b[2]:0;break;
case "icon":case "line":case "text":b=x(b);f.isSome(b)&&(a.size=b);break;case "path":{const c=y(b,E.ONES,[a.width,void 0,a.height]);a.width=q(b[0],a.width,1,c);a.height=q(b[2],a.height,1,c)}break;case "object":yield N(a,b)}});return t.apply(this,arguments)}function x(a){for(const b of a)if("number"===typeof b)return b;return null}function N(a,b){return u.apply(this,arguments)}function u(){u=m._asyncToGenerator(function*(a,b){const {resourceSize:c,symbolSize:e}=yield O(a),d=y(b,c,e);a.width=q(b[0],
e[0],c[0],d);a.depth=q(b[1],e[1],c[1],d);a.height=q(b[2],e[2],c[2],d)});return u.apply(this,arguments)}function y(a,b,c){for(let e=0;3>e;e++){const d=a[e];switch(d){case "symbol-value":return null!=c[e]?c[e]/b[e]:1;case "proportional":break;default:if(d&&b[e])return d/b[e]}}return 1}function O(a){return v.apply(this,arguments)}function v(){v=m._asyncToGenerator(function*(a){const b=yield(yield new Promise((P,Q)=>A(["./symbolLayerUtils"],P,Q))).computeObjectLayerResourceSize(a,10),{width:c,height:e,
depth:d}=a;a=[c,d,e];let l=1;for(var g=0;3>g;g++)if(null!=a[g]){l=a[g]/b[g];break}for(g=0;3>g;g++)null==a[g]&&(a[g]=b[g]*l);return{resourceSize:b,symbolSize:a}});return v.apply(this,arguments)}function q(a,b,c,e){switch(a){case "proportional":return c*e;case "symbol-value":return null!=b?b:c;default:return a}}function w(){w=m._asyncToGenerator(function*(a,b){if(a&&b){if(k.isSymbol3D(a))return L(a,b);if(k.isSymbol2D(a)&&(b=x(b),!f.isNone(b)))switch(a.type){case "simple-marker":a.size=b;break;case "picture-marker":{const c=
a.width/a.height;1<c?(a.width=b,a.height=b*c):(a.width=b*c,a.height=b);break}case "simple-line":a.width=b;break;case "text":a.font.size=b}}});return w.apply(this,arguments)}const z=/\/resource\/(.*?)\.svg$/,K=new p("white");h.applyColorToSymbol=function(a,b,c){if(a&&(b||null!=c))if(b&&(b=new p(b)),k.isSymbol3D(a))J(a,b,c);else if(k.isSymbol2D(a)){if(b=b||a.color)a.color=n(b,c);null!=c&&"outline"in a&&a.outline&&a.outline.color&&(a.outline.color=n(a.outline.color,c))}};h.applyOpacityToColor=n;h.applyRotationToSymbol=
function(a,b,c){a&&null!=b&&(k.isSymbol3D(a)?(a=a.symbolLayers)&&a.forEach(e=>{if(e&&"object"===e.type)switch(c){case "tilt":e.tilt=b;break;case "roll":e.roll=b;break;default:e.heading=b}}):!k.isSymbol2D(a)||"simple-marker"!==a.type&&"picture-marker"!==a.type&&"text"!==a.type||(a.angle=b))};h.applySizesToSymbol=function(a,b){return w.apply(this,arguments)};h.getCSSFilterFromEffectList=function(a){if(!a)return null;a=a.effects.filter(b=>"bloom"!==b.type).map(b=>b.toJSON());return F.effectFunctionsFromJSON(a)};
h.getColorFromSymbol=function(a,b){if(!a)return null;let c=null;k.isSymbol3D(a)?c=I(a):k.isSymbol2D(a)&&(c=a.color?new p(a.color):null);return c?n(c,b):null};h.getIconHref=function(a,b){b=b.resource.href;return!C("esri-canvas-svg-support")&&a.styleOrigin&&z.test(b)?b.replace(z,"/resource/png/$1.png"):b};h.getSymbolOutlineSize=function(a){if(!a)return 0;if(k.isSymbol3D(a)){{const b=a.symbolLayers&&a.symbolLayers.length;b?(a=a.symbolLayers.getItemAt(b-1),a="outline"in a?f.get(a,"outline","size"):void 0):
a=void 0}return f.isSome(a)?a:0}return(a=G.getStroke(a))&&D.px2pt(a.width)||0};h.isVolumetricSymbol=function(a){if(f.isNone(a)||!("symbolLayers"in a)||f.isNone(a.symbolLayers))return!1;switch(a.type){case "point-3d":return a.symbolLayers.some(b=>"object"===b.type);case "line-3d":return a.symbolLayers.some(b=>"path"===b.type);case "polygon-3d":return a.symbolLayers.some(b=>"object"===b.type||"extrude"===b.type);default:return!1}};Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});