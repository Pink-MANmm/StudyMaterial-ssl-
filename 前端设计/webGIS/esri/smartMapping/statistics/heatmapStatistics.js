// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../core/Error ../../core/maybe ../../layers/support/fieldUtils ../../renderers/support/heatmapUtils ./support/utils ../support/utils ../support/adapters/support/layerUtils".split(" "),function(k,l,n,p,q,m,r,d){function t(a){return f.apply(this,arguments)}function f(){f=k._asyncToGenerator(function*(a){if(!(a&&a.layer&&a.view))throw new l("heatmap-statistics:missing-parameters","'layer' and 'view' parameters are required");var b=[d.LayerType.CSVLayer,
d.LayerType.FeatureLayer,d.LayerType.OGCFeatureLayer,d.LayerType.GeoJSONLayer,d.LayerType.WFSLayer];const {layer:g,...u}=a;var c=d.createLayerAdapter(g,b);a={layerAdapter:c,...u};a.radius=null==a.radius?null==a.blurRadius?18:q.gaussianBlurRadiusPxToKernelDensityRadiusPt(a.blurRadius):a.radius;if(!c)throw new l("heatmap-statistics:invalid-parameters","'layer' must be one of these types: "+d.getLayerTypeLabels(b).join(", "));b=n.isSome(a.signal)?{signal:a.signal}:null;yield c.load(b);var e=a.field;
b=e?c.getField(e):null;e=yield r.getFieldsList({field:e});if(e=m.verifyBasicFieldValidity(c,e,"heatmap-statistics:invalid-parameters"))throw e;if(b&&(c=m.verifyFieldType(c,b,"heatmap-statistics:invalid-parameters",v)))throw c;return a});return f.apply(this,arguments)}function h(){h=k._asyncToGenerator(function*(a){const {layerAdapter:b,...g}=yield t(a);return b.heatmapStatistics(g)});return h.apply(this,arguments)}const v=p.numericTypes;return function(a){return h.apply(this,arguments)}});