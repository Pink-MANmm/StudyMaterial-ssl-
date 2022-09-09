/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import{version as i}from"../kernel.js";import s from"../request.js";import e from"../core/Collection.js";import{i as o,a as r}from"./maybe.js";import{watch as p}from"../core/reactiveUtils.js";import{queryToObject as a,objectToQuery as l}from"../core/urlUtils.js";import{property as m}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import j from"../geometry/Extent.js";import{load as y,project as c}from"../geometry/projection.js";import u from"../geometry/SpatialReference.js";import{canProject as h,project as d}from"../geometry/support/webMercatorUtils.js";import{g as b,f as g,p as f}from"./kmlUtils.js";import{p as S}from"./utils5.js";import{G as V}from"./GraphicsCollection.js";import{B as w}from"./Bitmap.js";import{B as C}from"./BitmapContainer.js";import{L as _}from"./LayerView2D.js";import{G as v}from"./GraphicContainer.js";import{G as U}from"./BaseGraphicContainer.js";import I from"../views/layers/LayerView.js";import"../config.js";import"./object.js";import"../core/Error.js";import"./Logger.js";import"./string.js";import"../core/promiseUtils.js";import"./ArrayPool.js";import"../core/Evented.js";import"../core/Accessor.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./tracking.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"./shared.js";import"./SimpleObservable.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"./reader.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"./Ellipsoid.js";import"./mathUtils.js";import"./common.js";import"./unitUtils.js";import"./jsonMap.js";import"./projectionEllipsoid.js";import"./mat4.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"./pe.js";import"./assets.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"../geometry.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number2.js";import"./locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"./Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"./aaBoundingBox.js";import"../renderers/support/jsonUtils.js";import"../renderers/ClassBreaksRenderer.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils2.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils3.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../core/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"./Thumbnail.js";import"./Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"./sizeVariableUtils.js";import"./visualVariableUtils.js";import"../Graphic.js";import"./compilerUtils.js";import"./lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties2.js";import"../symbols/support/jsonUtils.js";import"./symbolConversion.js";import"../renderers/DictionaryRenderer.js";import"./DictionaryLoader.js";import"./LRUCache.js";import"./MemCache.js";import"../renderers/DotDensityRenderer.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"./heatmapUtils.js";import"./vec4f64.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"./styleUtils2.js";import"../rest/support/FeatureSet.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"../core/HandleOwner.js";import"../core/Handles.js";import"./mat3.js";import"./mat3f32.js";import"./vec2f32.js";import"./DisplayObject.js";import"./enums.js";import"./Texture.js";import"./context-util.js";import"./brushes.js";import"./pixelUtils.js";import"../layers/support/PixelBlock.js";import"./DefaultVertexAttributeLayouts.js";import"./vec2f64.js";import"./FramebufferObject.js";import"./VertexArrayObject.js";import"./VertexElementDescriptor.js";import"./definitions.js";import"./vec4f32.js";import"./Utils16.js";import"./number3.js";import"./enums2.js";import"./enums4.js";import"./ProgramTemplate.js";import"./Program.js";import"./MaterialKey.js";import"./alignmentUtils.js";import"./utils17.js";import"./StyleDefinition.js";import"./config.js";import"./GeometryUtils2.js";import"./WGLContainer.js";import"./Container.js";import"./EffectView.js";import"./parser2.js";import"./mat4f32.js";import"./_commonjsHelpers.js";import"./earcut.js";import"./vec2.js";import"./featureConversionUtils.js";import"./OptimizedGeometry.js";import"./OptimizedFeatureSet.js";import"./ClipRect.js";import"./shapingUtils.js";import"./Rect.js";import"./mat2df32.js";import"./normalizeUtilsSync.js";import"./normalizeUtilsCommon.js";import"./projectionSupport.js";import"./json.js";import"./CIMSymbolHelper.js";import"./floatRGBA.js";import"./utils7.js";import"./GeometryUtils.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./defaultsJSON.js";import"./FeatureContainer.js";import"./TiledDisplayObject.js";import"./TileKey.js";import"./Queue.js";import"./visualVariablesUtils.js";import"./visualVariablesUtils2.js";import"./TileContainer.js";import"./capabilities2.js";import"./Matcher.js";import"./TileStrategy.js";import"./QueueProcessor.js";import"./TileInfoView.js";import"./tileUtils.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"./timeUtils.js";import"./DataLayerSource.js";import"../rest/support/StatisticDefinition.js";import"./TileClipper.js";import"./Geometry.js";import"./cimAnalyzer.js";import"./callExpressionWithFeature.js";import"./quantizationUtils.js";import"./TurboLine.js";import"./ExpandedCIM.js";import"./devEnvironmentUtils.js";import"./schemaUtils.js";import"../core/sql.js";import"./createSymbolSchema.js";import"./clusterUtils2.js";import"./MD5.js";import"./util2.js";import"./ComputedAttributeStorage.js";import"./centroid.js";import"../layers/support/FieldsIndex.js";import"./TileStore.js";import"./quickselect.js";import"../geometry/support/normalizeUtils.js";import"./GraphicsView.js";import"./vec3f32.js";class D{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let x=class extends(_(I)){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new C,this._kmlVisualData=new D,this.allVisiblePoints=new V,this.allVisiblePolylines=new V,this.allVisiblePolygons=new V,this.allVisibleMapImages=new e}async hitTest(t,i){const s=this.layer;return[this._pointsView?.hitTest(t),this._polylinesView?.hitTest(t),this._polygonsView?.hitTest(t)].flat().filter(Boolean).map((i=>(i.layer=s,i.sourceLayer=s,{type:"graphic",graphic:i,layer:s,mapPoint:t})))}update(t){this._polygonsView&&this._polygonsView.processUpdate(t),this._polylinesView&&this._polylinesView.processUpdate(t),this._pointsView&&this._pointsView.processUpdate(t)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new U({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new U({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new U({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.handles.add([this.allVisibleMapImages.on("change",(t=>{t.added.forEach((t=>this._addMapImage(t))),t.removed.forEach((t=>this._removeMapImage(t)))})),p((()=>this.layer.visibleSublayers),(t=>{for(const[t,i]of this._kmlVisualData.allSublayers)i.visibility=0;for(const i of t){const t=this._kmlVisualData.allSublayers.get(i.id);t&&(t.visibility=1)}this._refreshCollections()}))]),this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal))}detach(){this._fetchController.abort(),this._fetchController=null,this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(t){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&s(t.href,{responseType:"image"}).then((({data:i})=>{let s=j.fromJSON(t.extent);h(s,this.view.spatialReference)&&(s=d(s,this.view.spatialReference));const e=new w(i,"standard");e.x=s.xmin,e.y=s.ymax,e.resolution=s.width/i.naturalWidth,e.rotation=t.rotation,this._mapImageContainer.addChild(e),this._bitmapIndex.set(t,e)}))}async _getViewDependentUrl(t,s){const{viewFormat:e,viewBoundScale:p,httpQuery:m}=t;if(o(e)){if(r(s))throw new Error("Loading this network link requires a view state.");let n;if(await y(),o(p)&&1!==p){const t=new j(s.extent);t.expand(p),n=t}else n=s.extent;n=c(n,u.WGS84);const h=c(n,u.WebMercator),d=n.xmin,b=n.xmax,g=n.ymin,f=n.ymax,V=s.size[0]*s.pixelRatio,w=s.size[1]*s.pixelRatio,C=Math.max(h.width,h.height),_={"[bboxWest]":d.toString(),"[bboxEast]":b.toString(),"[bboxSouth]":g.toString(),"[bboxNorth]":f.toString(),"[lookatLon]":n.center.x.toString(),"[lookatLat]":n.center.y.toString(),"[lookatRange]":C.toString(),"[lookatTilt]":"0","[lookatHeading]":s.rotation.toString(),"[lookatTerrainLon]":n.center.x.toString(),"[lookatTerrainLat]":n.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":n.center.x.toString(),"[cameraLat]":n.center.y.toString(),"[cameraAlt]":C.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":V.toString(),"[vertPixels]":w.toString(),"[terrainEnabled]":"0","[clientVersion]":i,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},v=t=>{for(const i in t)for(const s in _)t[i]=t[i].replace(s,_[s])},U=a(e);v(U);let I={};o(m)&&(I=a(m),v(I));const D=S(t.href);return D.query={...D.query,...U,...I},`${D.path}?${l(U)}`}return t.href}async _fetchService(t){const i=new D;await this._loadVisualData(this.layer.url,i,t),this._kmlVisualData=i,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((t=>this._isSublayerVisible(t.sublayerId))).map((({item:t})=>t))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((t=>this._isSublayerVisible(t.sublayerId))).map((({item:t})=>t))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((t=>this._isSublayerVisible(t.sublayerId))).map((({item:t})=>t))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((t=>this._isSublayerVisible(t.sublayerId))).map((({item:t})=>t)))}_isSublayerVisible(t){const i=this._kmlVisualData.allSublayers.get(t);return!!i.visibility&&(-1===i.parentFolderId||this._isSublayerVisible(i.parentFolderId))}_loadVisualData(t,i,s){return this._fetchParsedKML(t,s).then((async t=>{for(const e of t.sublayers){i.allSublayers.set(e.id,e);const t=e.points?await b(e.points):[],o=e.polylines?await b(e.polylines):[],r=e.polygons?await b(e.polygons):[],p=e.mapImages||[];if(i.allPoints.push(...t.map((t=>({item:t,sublayerId:e.id})))),i.allPolylines.push(...o.map((t=>({item:t,sublayerId:e.id})))),i.allPolygons.push(...r.map((t=>({item:t,sublayerId:e.id})))),i.allMapImages.push(...p.map((t=>({item:t,sublayerId:e.id})))),e.networkLink){const t=await this._getViewDependentUrl(e.networkLink,this.view.state);await this._loadVisualData(t,i,s)}}}))}_fetchParsedKML(t,i){return g(t,this.view.spatialReference,this.layer.refreshInterval,i).then((t=>f(t.data)))}_removeMapImage(t){const i=this._bitmapIndex.get(t);i&&(this._mapImageContainer.removeChild(i),this._bitmapIndex.delete(t))}};t([m()],x.prototype,"_pointsView",void 0),t([m()],x.prototype,"_polylinesView",void 0),t([m()],x.prototype,"_polygonsView",void 0),t([m()],x.prototype,"updating",void 0),x=t([n("esri.views.2d.layers.KMLLayerView2D")],x);const M=x;export{M as default};
