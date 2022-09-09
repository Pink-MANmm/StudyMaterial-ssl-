/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../renderers/ClassBreaksRenderer.js";import"../../renderers/DictionaryRenderer.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/HeatmapRenderer.js";import s from"../../renderers/PieChartRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../renderers/support/jsonUtils.js";import"../../symbols.js";import r from"../../core/Error.js";import{i as t}from"../../chunks/maybe.js";import{t as o}from"../../chunks/screenUtils.js";import{f as e}from"../../chunks/messages.js";import{o as i,b as p,n as m,q as a,v as n,d as l}from"../../chunks/utils14.js";import u from"../heuristics/sizeRange.js";import{createVisualVariables as c}from"./size.js";import j from"../statistics/predominantCategories.js";import{i as h}from"../../chunks/statsWorker.js";import{a as y}from"../../chunks/utils10.js";import{L as b,c as d,g as k}from"../../chunks/layerUtils2.js";import{cloneScheme as g,getSchemes as f}from"../symbology/pieChart.js";import S from"../../symbols/SimpleLineSymbol.js";import"../../chunks/tslib.es6.js";import"../../chunks/jsonMap.js";import"../../chunks/object.js";import"../../core/lang.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/enumeration.js";import"../../chunks/reader.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/tracking.js";import"../../chunks/writer.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../chunks/opacityUtils.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number2.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../core/Clonable.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties2.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/symbolConversion.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../chunks/DictionaryLoader.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/heatmapUtils.js";import"../../chunks/vec4f64.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils2.js";import"../../chunks/numberUtils.js";import"../../intl.js";import"../../chunks/assets.js";import"../../chunks/PointSizeSplatAlgorithm.js";import"../../chunks/scaleUtils.js";import"../../chunks/spatialStatistics.js";import"../statistics/classBreaks.js";import"../../chunks/quantizationUtils.js";import"../../chunks/utils11.js";import"../../chunks/generateRendererUtils.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/writeUtils.js";import"../../chunks/layerUtils.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../chunks/Queue.js";import"../../core/workers/RemoteClient.js";import"../../core/reactiveUtils.js";import"../../chunks/arcgisLayerUrl.js";import"../../chunks/fieldType.js";import"../../rest/support/Query.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../rest/support/StatisticDefinition.js";import"../statistics/support/predominanceUtils.js";import"../../chunks/QueryTask.js";import"../../chunks/executeQueryJSON.js";import"../../chunks/utils5.js";import"../../chunks/query.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedGeometry.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/queryZScale.js";import"../../chunks/zscale.js";import"../../rest/support/FeatureSet.js";import"../../chunks/executeForTopCount.js";import"../../chunks/featureConversionUtils.js";import"../../rest/query/support/AttachmentInfo.js";import"../../rest/support/AttachmentQuery.js";import"../../rest/support/RelationshipQuery.js";import"../../rest/support/TopFeaturesQuery.js";import"../../rest/support/TopFilter.js";import"../../chunks/executeForIds.js";import"../statistics/summaryStatistics.js";import"../../views/support/colorUtils.js";import"../heuristics/scaleRange.js";import"../../chunks/utils13.js";import"../../chunks/utils6.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser2.js";import"../../chunks/mat4f32.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/ItemCache.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils7.js";import"../../chunks/ageUnit.js";import"../statistics/summaryStatisticsForAge.js";import"../statistics/support/ageUtils.js";import"../symbology/size.js";import"../../chunks/symbologyUtils.js";import"../../chunks/utils15.js";import"../../chunks/colors2.js";async function C(s,r){const{valueExpression:t,sqlExpression:o,sqlWhere:i}=h(s.attributes),p=await e("esri/smartMapping/t9n/smartMapping");return c({layer:s.layer,basemap:s.basemap,valueExpression:t,sqlExpression:o,sqlWhere:i,sizeScheme:r,sizeOptimizationEnabled:s.sizeOptimizationEnabled,legendOptions:{title:p.sumOfCategories},view:s.view,signal:s.signal})}async function U(e){const c=await async function(s){if(!(s&&s.layer&&s.view&&s.attributes?.length))throw new r("pie-chart-renderer:missing-parameters","'layer', 'view' and 'attributes' parameters are required");if(s.attributes.length>10)throw new r("pie-chart-renderer:invalid-parameters","PieChart renderer does not support more than 10 attributes");const o={...s};o.shape=o.shape||"pie",o.othersCategoryEnabled=null==o.othersCategoryEnabled||o.othersCategoryEnabled,o.includeSizeVariable=s.includeSizeVariable||!1;const e=[b.CSVLayer,b.FeatureLayer,b.OGCFeatureLayer,b.GeoJSONLayer,b.WFSLayer],i=d(o.layer,e);if(o.layer=i,!i)throw new r("pie-chart-renderer:invalid-parameters","'layer' must be one of these types: "+k(e).join(", "));const p=t(o.signal)?{signal:o.signal}:null;await Promise.all([o.view.when(),i.load(p)]);const m=i.geometryType,a="polygon"===m,l="point"===m||"multipoint"===m||a;if(o.outlineOptimizationEnabled=!!a&&o.outlineOptimizationEnabled,o.sizeOptimizationEnabled=!!l&&o.sizeOptimizationEnabled,!l)throw new r("pie-chart-renderer:not-supported","PieChart renderer is only supported for point and polygon layers");const u=[],c=o.attributes;for(const s of c){const r=await y({field:s.field,valueExpression:s.valueExpression});u.push(...r)}const j=n(i,u.filter(Boolean),"pie-chart-renderer:invalid-parameters");if(j)throw j;return o}(e),h=await async function(s){let r=s.pieChartScheme,o=null,e=null;const i=await l(s.basemap,s.view);if(o=t(i.basemapId)?i.basemapId:null,e=t(i.basemapTheme)?i.basemapTheme:null,r)return{scheme:g(r),basemapId:o,basemapTheme:e};const p=f({basemap:o,numColors:s.attributes.length,geometryType:s.layer.geometryType,basemapTheme:e});return p&&(r=p.primaryScheme,o=p.basemapId,e=p.basemapTheme),{scheme:r,basemapId:o,basemapTheme:e}}(c),U=h?.scheme;if(!U)throw new r("pie-chart-renderer:insufficient-info","Unable to find pie-chart scheme");const v=c.layer,{includeSizeVariable:z,sizeOptimizationEnabled:I,outlineOptimizationEnabled:V,view:E,signal:w}=c,D=U.sizeScheme,L=c.attributes,x=L.map((s=>s.field)),[P,M,O,R]=await Promise.all([x.length>1?j({layer:v,fields:x,view:E,signal:w}):null,z?C(c,D):null,!z&&I?u({layer:v,view:E,signal:w}):null,V?i({layer:v,view:E,signal:w}):null]),T=P&&P.predominantCategoryInfos?{uniqueValueInfos:P.predominantCategoryInfos}:{uniqueValueInfos:x.map((s=>({value:s,count:0})))},F=p(U.colors,L.length),q=L.map(((s,r)=>({field:s.field,valueExpression:s.valueExpression,label:s.label,valueExpressionTitle:s.valueExpressionTitle,color:F[r]}))),A=v.geometryType,B="background"in D&&D.background,Q=new s({attributes:q,othersCategory:{color:c.othersCategoryEnabled?U.colorForOthersCategory:null,threshold:.04},holePercentage:"donut"===c.shape?.45:0,backgroundFillSymbol:B?m(A,{type:"2d",color:B.color,outline:a(B,A,R?.opacity)}):null,size:o(U.size),outline:new S(a(U,"point",R?.opacity)),legendOptions:c.legendOptions});if(M&&(I||M.visualVariables.forEach((s=>{"number"==typeof s.minSize&&"number"==typeof s.maxSize&&(s.minSize*=2.5,s.maxSize*=1.8)})),I&&"point"===A&&M.visualVariables.forEach((s=>{s?.minSize&&"object"==typeof s.minSize&&s.minSize?.stops.forEach((s=>{s.size*=1.8}))})),Q.authoringInfo=M.authoringInfo.clone(),Q.visualVariables=M.visualVariables?.map((s=>s.clone()))),R?.visualVariables?.length){const s=R.visualVariables.map((s=>s.clone()));Q.visualVariables?Q.visualVariables.push(...s):Q.visualVariables=s}return O?.minSize&&("point"===A&&O.minSize.stops.forEach((s=>{s.size*=2.5})),"polygon"===A&&O.minSize.stops.forEach((s=>{s.size*=1.8})),Q.visualVariables?Q.visualVariables.push(O.minSize):Q.visualVariables=[O.minSize]),{renderer:Q,pieChartScheme:g(U),size:M,basemapId:h.basemapId,basemapTheme:h.basemapTheme,statistics:T}}export{U as createRenderer};
