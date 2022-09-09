/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import e from"../Graphic.js";import i from"../core/Collection.js";import{watch as r,syncAndInitial as s,sync as o}from"../core/reactiveUtils.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import{G as l}from"./GraphicsCollection.js";import{R as m,F as n}from"./RasterVFDisplayObject.js";import{L as h}from"./LayerView2D.js";import{G as c}from"./BaseGraphicContainer.js";import{H as y}from"./HighlightGraphicContainer.js";import u from"../core/Accessor.js";import{L as j}from"./Logger.js";import{i as d,a as b,u as g}from"./maybe.js";import{isAbortError as x,debounce as f}from"../core/promiseUtils.js";import{h as v}from"./pixelUtils.js";import{B as w}from"./BitmapContainer.js";import{C as S}from"./Container.js";import{I as P}from"./Bitmap.js";import{E as U}from"./ExportStrategy.js";import _ from"../request.js";import{HandleOwner as D}from"../core/HandleOwner.js";import C from"../geometry/Extent.js";import{c as V}from"./rasterProjectionHelper.js";import{s as E,c as I}from"./vectorFieldUtils.js";import{B as R}from"./brushes.js";import{W as M}from"./enums4.js";import{W as T}from"./WGLContainer.js";import{I as L}from"./ImageryLayerView.js";import k from"../views/layers/LayerView.js";import{R as B}from"./RefreshableLayerView.js";import"../geometry.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"../core/Error.js";import"./object.js";import"../config.js";import"./string.js";import"./metadata.js";import"./ArrayPool.js";import"./tracking.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"./jsonMap.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number2.js";import"./locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"./Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"./mathUtils.js";import"./common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils2.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils3.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"./aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../core/urlUtils.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../core/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"./Thumbnail.js";import"./Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./VertexArrayObject.js";import"./Texture.js";import"./context-util.js";import"./enums.js";import"./VertexElementDescriptor.js";import"./dataUtils.js";import"./mat3.js";import"./mat3f32.js";import"./DisplayObject.js";import"./vec2f32.js";import"./Utils16.js";import"./number3.js";import"./enums2.js";import"./ClipRect.js";import"./shapingUtils.js";import"./Rect.js";import"./mat2df32.js";import"./vec2.js";import"./alignmentUtils.js";import"./normalizeUtilsSync.js";import"./normalizeUtilsCommon.js";import"./projectionSupport.js";import"../geometry/projection.js";import"./unitUtils.js";import"./projectionEllipsoid.js";import"./mat4.js";import"./pe.js";import"./assets.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./json.js";import"./CIMSymbolHelper.js";import"./floatRGBA.js";import"./definitions.js";import"./utils7.js";import"./GeometryUtils.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./defaultsJSON.js";import"../symbols/support/jsonUtils.js";import"./symbolConversion.js";import"./FeatureContainer.js";import"./TiledDisplayObject.js";import"./TileKey.js";import"./Queue.js";import"./visualVariablesUtils.js";import"./visualVariablesUtils2.js";import"./FramebufferObject.js";import"./TileContainer.js";import"./lengthUtils.js";import"./utils17.js";import"./MaterialKey.js";import"./heatmapUtils.js";import"./vec4f64.js";import"./capabilities2.js";import"./Matcher.js";import"./TileStrategy.js";import"./QueueProcessor.js";import"./TileInfoView.js";import"./tileUtils.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"./timeUtils.js";import"./DataLayerSource.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"../rest/support/StatisticDefinition.js";import"./TileClipper.js";import"./Geometry.js";import"./GeometryUtils2.js";import"./featureConversionUtils.js";import"./OptimizedGeometry.js";import"./OptimizedFeatureSet.js";import"./cimAnalyzer.js";import"./callExpressionWithFeature.js";import"./quantizationUtils.js";import"./earcut.js";import"./TurboLine.js";import"./LRUCache.js";import"./MemCache.js";import"./ExpandedCIM.js";import"./devEnvironmentUtils.js";import"./styleUtils2.js";import"./schemaUtils.js";import"../core/sql.js";import"./createSymbolSchema.js";import"./clusterUtils2.js";import"./MD5.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/SizeStop.js";import"./sizeVariableUtils.js";import"./visualVariableUtils.js";import"./compilerUtils.js";import"./util2.js";import"./ComputedAttributeStorage.js";import"./centroid.js";import"./diffUtils.js";import"../layers/support/FieldsIndex.js";import"./TileStore.js";import"./quickselect.js";import"../geometry/support/normalizeUtils.js";import"./GraphicsView.js";import"./vec3f32.js";import"../layers/support/PixelBlock.js";import"./EffectView.js";import"./parser2.js";import"./mat4f32.js";import"./_commonjsHelpers.js";import"../layers/support/TileInfo.js";import"../layers/support/LOD.js";import"../core/Handles.js";import"./DefaultVertexAttributeLayouts.js";import"./vec2f64.js";import"./vec4f32.js";import"./ProgramTemplate.js";import"./Program.js";import"./StyleDefinition.js";import"./config.js";import"./commonProperties.js";import"../support/timeUtils.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./popupUtils.js";const F=j.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let z=class extends u{constructor(){super(...arguments),this.attached=!1,this.container=new S,this.updateRequested=!1,this.type="imagery",this._bitmapView=new w}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(t){this.strategy.update(t).catch((t=>{x(t)||F.error(t)}))}hitTest(t){return new e({attributes:{},geometry:t.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const t=this.layer.version>=10,e=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new U({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:e,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports((t=>{t.source instanceof HTMLImageElement?t.requestRender():this.layer.applyRenderer({pixelBlock:t.source.pixelBlock}).then((e=>{const i=t.source;i.pixelBlock=e.pixelBlock,i.filter=t=>this.layer.applyFilter(t),this.container.requestRender()}))}))}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const t=this.strategy.bitmaps;if(1===t.length&&t[0].source)return{extent:t[0].source.extent,pixelBlock:t[0].source.originalPixelBlock};if(t.length>1){const e=this.view.extent,i=t.map((t=>t.source)).filter((t=>t.extent&&t.extent.intersects(e))).map((t=>({extent:t.extent,pixelBlock:t.originalPixelBlock}))),r=v(i,e);return d(r)?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}_fetchImage(t,e,i,r){return(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,this.layer.fetchImage(t,e,i,r).then((t=>t.imageElement?t.imageElement:this.layer.applyRenderer(t.pixelData,{signal:r.signal}).then((e=>{const i=new P(e.pixelBlock,e.extent.clone(),t.pixelData.pixelBlock);return i.filter=t=>this.layer.applyFilter(t),i}))))}};t([a()],z.prototype,"attached",void 0),t([a()],z.prototype,"container",void 0),t([a()],z.prototype,"layer",void 0),t([a()],z.prototype,"strategy",void 0),t([a()],z.prototype,"timeExtent",void 0),t([a()],z.prototype,"view",void 0),t([a()],z.prototype,"updateRequested",void 0),t([a()],z.prototype,"updating",null),t([a()],z.prototype,"type",void 0),z=t([p("esri.views.2d.layers.imagery.ImageryView2D")],z);const q=z;class A extends T{constructor(){super(...arguments),this.symbolTypes=["triangle"]}get requiresDedicatedFBO(){return!1}prepareRenderPasses(t){const e=t.registerRenderPass({name:"imagery (vf)",brushes:[R],target:()=>this.children,drawPhase:M.MAP});return[...super.prepareRenderPasses(t),e]}doRender(t){this.visible&&t.drawPhase===M.MAP&&this.symbolTypes.forEach((e=>{t.renderPass=e,super.doRender(t)}))}}const O=j.getLogger("esri.views.2d.layers.imagery.VectorFieldView2D");let G=class extends u{constructor(t){super(t),this.update=f(((t,e)=>this._update(t,e).catch((t=>{x(t)||O.error(t)}))))}get updating(){return!!this._loading}redraw(t){if(!this.container.children.length)return;const e=this.container.children[0];e.symbolizerParameters=t,e.invalidateVAO(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.requestRender()}async _update(t,e,i){if(!t.stationary)return;const{extent:r,spatialReference:s}=t.state,o=new C({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:s}),[a,p]=t.state.size;this._loading=this.fetchPixels(o,a,p,i);const l=await this._loading;this._addToDisplay(l,e,t.state),this._loading=null}_addToDisplay(t,e,i){if(b(t.pixelBlock))return this.container.children.forEach((t=>t.destroy())),void this.container.removeAllChildren();const{extent:r,pixelBlock:s}=t,o=new m(s);o.offset=[0,0],o.symbolizerParameters=e,o.rawPixelData=t,o.invalidateVAO(),o.x=r.xmin,o.y=r.ymax,o.pixelRatio=i.pixelRatio,o.rotation=i.rotation,o.resolution=i.resolution,o.width=s.width*e.symbolTileSize,o.height=s.height*e.symbolTileSize,this.container.children.forEach((t=>t.destroy())),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.addChild(o)}};t([a()],G.prototype,"fetchPixels",void 0),t([a()],G.prototype,"container",void 0),t([a()],G.prototype,"_loading",void 0),t([a()],G.prototype,"updating",null),G=t([p("esri.views.2d.layers.imagery.ImageryVFStrategy")],G);const H=G;let W=class extends D{constructor(){super(...arguments),this.attached=!1,this.container=new A,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(t,e,i,r)=>{const s=await this._projectFullExtentPromise,{symbolTileSize:o}=this.layer.renderer,{extent:a,width:p,height:l}=E(t,e,i,o,s);if(d(s)&&!s.intersects(t))return{extent:a,pixelBlock:null};const m={bbox:`${a.xmin}, ${a.ymin}, ${a.xmax}, ${a.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:o,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(m)){const t=this.getPixelData();if(d(t)&&`${t.extent.xmin}, ${t.extent.ymin}, ${t.extent.xmax}, ${t.extent.ymax}`===m.bbox)return t}const{pixelData:n}=await this.layer.fetchImage(a,p,l,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});return this._dataParameters=m,b(n.pixelBlock)?{extent:a,pixelBlock:null}:{extent:a,pixelBlock:"vector-uv"===this.layer.rasterInfo.dataType?g(I(n.pixelBlock,"vector-uv")):n.pixelBlock}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new H({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add(r((()=>this.layer.renderer),(t=>this._updateSymbolizerParams(t)),s),"vector-field-view-update")}detach(){this._strategy.destroy(),this.container.children.forEach((t=>t.destroy())),this.container.removeAllChildren(),this.handles.remove("vector-field-view-update"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){if(this.updating||!this.container.children.length)return null;const{extent:t,pixelBlock:e}=this.container.children[0].rawPixelData;return{extent:t,pixelBlock:e}}hitTest(t){return new e({attributes:{},geometry:t.clone(),layer:this.layer})}update(t){this._strategy.update(t,this._symbolizerParams)}redraw(){this._updateSymbolizerParams(this.layer.renderer),this._strategy.redraw(this._symbolizerParams)}_canReuseVectorFieldData(t){const e=this._dataParameters.exportParametersVersion===t.exportParametersVersion,i=this._dataParameters.time===t.time,r=this._dataParameters.symbolTileSize===t.symbolTileSize,s=this._dataParameters.bbox===t.bbox;return e&&i&&r&&s}async _getProjectedFullExtent(t){try{return await V(this.layer.fullExtent,t)}catch(e){try{const e=(await _(this.layer.url,{query:{option:"footprints",outSR:t.wkid||JSON.stringify(t.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return e?C.fromJSON(e):null}catch{return null}}}_updateSymbolizerParams(t){"vector-field"===t.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};t([a()],W.prototype,"attached",void 0),t([a()],W.prototype,"container",void 0),t([a()],W.prototype,"layer",void 0),t([a()],W.prototype,"timeExtent",void 0),t([a()],W.prototype,"type",void 0),t([a()],W.prototype,"view",void 0),t([a()],W.prototype,"updating",null),W=t([p("esri.views.2d.layers.imagery.VectorFieldView2D")],W);const J=W;let $=class extends(L(B(h(k)))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new l,this.subview=null}get pixelData(){return this.updating?null:"getPixelData"in this.subview?this.subview.getPixelData():null}get updating(){return!!(!this.subview||"updating"in this.subview&&this.subview.updating)}async hitTest(t,e){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(t),layer:this.layer,mapPoint:t}]:null}update(t){this.subview?.update(t)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new c({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new y(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.handles.add([r((()=>this.layer.blendMode??"normal"),(t=>this.subview.container.blendMode=t),s),r((()=>this.layer.effect??null),(t=>this.subview.container.effect=t),s),r((()=>this.layer.exportImageServiceParameters.version),(t=>{t&&this._exportImageVersion!==t&&(this._exportImageVersion=t,this.requestUpdate())}),o),r((()=>this.timeExtent),(t=>{this.subview.timeExtent=t,"redraw"in this.subview?this.requestUpdate():this.subview.redrawOrRefetch()}),o),this.layer.on("redraw",(()=>{"redraw"in this.subview?this.subview.redraw():this.subview.redrawOrRefetch()})),r((()=>this.layer.renderer),(()=>this._setSubView()))],"imagerylayerview-update")}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.handles.remove("imagerylayerview-update"),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(t,r){if(!((Array.isArray(t)?t[0]:i.isCollection(t)?t.getItemAt(0):t)instanceof e))return{remove:()=>{}};let s=[];return Array.isArray(t)||i.isCollection(t)?s=t.map((t=>t.clone())):t instanceof e&&(s=[t.clone()]),this._highlightGraphics.addMany(s),{remove:()=>{this._highlightGraphics.removeMany(s)}}}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||this.subview.updating}_setSubView(){if(!this.view)return;const t=this.layer.renderer?.type;let e="imagery";if("vector-field"===t?e="imageryVF":"flow"===t&&(e="flow"),this.subview){if(this.subview.type===e)return this._attachSubview(this.subview),void("flow"===this.subview.type&&this.subview.redrawOrRefetch());this._detachSubview(this.subview),this.subview?.destroy()}this.subview="imagery"===e?new q({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===e?new J({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new n({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(t){t&&!t.attached&&(t.attach(),t.attached=!0,this.container.addChildAt(t.container,0),t.container.blendMode=this.layer.blendMode,t.container.effect=this.layer.effect)}_detachSubview(t){t?.attached&&(this.container.removeChild(t.container),t.detach(),t.attached=!1)}};t([a()],$.prototype,"pixelData",null),t([a({readOnly:!0})],$.prototype,"updating",null),t([a()],$.prototype,"subview",void 0),$=t([p("esri.views.2d.layers.ImageryLayerView2D")],$);const N=$;export{N as default};
