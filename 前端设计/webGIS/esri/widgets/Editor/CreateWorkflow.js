// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/maybe ../../core/Logger ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/set ../../core/accessorSupport/decorators/subclass ./CreateWorkflowData ./Edits ./Workflow ./workflowUtils".split(" "),function(e,z,x,t,G,H,I,J,A,B,C,D,f){var u;t=u=function(y){function r(b){b=y.call(this,b)||this;b.type="create";return b}e._inheritsLoose(r,y);r.create=function(b,v,a){b=new u({data:new B({edits:new C.Edits,
viewModel:b}),onCommit:function(){var k=e._asyncToGenerator(function*(g){yield a(g.creationInfo.layer,{addFeatures:[g.edits.feature]})});return function(g){return k.apply(this,arguments)}}()});b._set("steps",this._createWorkflowSteps(b,v));return b};r._createWorkflowSteps=function(b,v="awaiting-feature-creation-info"){const {data:a,handles:k}=b,g=new Map;b=f.createWorkflowSteps(["awaiting-feature-creation-info","awaiting-feature-to-create","editing-new-feature"],v,{"awaiting-feature-creation-info":()=>
({id:"awaiting-feature-creation-info",setUp(){var d=this;return e._asyncToGenerator(function*(){a.creationInfo=null;a.edits.feature=null;a.viewModel.featureTemplatesViewModel.select(null);k.add(a.viewModel.featureTemplatesViewModel.on("select",({item:c})=>{a.creationInfo={layer:c.layer,template:c.template};a.viewModel.activeWorkflow.next()}),d.id)})()},tearDown(){var d=this;return e._asyncToGenerator(function*(){k.remove(d.id)})()}}),"awaiting-feature-to-create":()=>({id:"awaiting-feature-to-create",
setUp(){var d=this;return e._asyncToGenerator(function*(){k.add(yield f.setUpFeatureAdd(a.viewModel.sketchViewModel,a.creationInfo,c=>{a.edits.feature=c;a.viewModel.activeWorkflow.next()},g),d.id)})()},tearDown(){var d=this;return e._asyncToGenerator(function*(){k.remove(d.id)})()}}),"editing-new-feature":()=>({id:"editing-new-feature",setUp(){var d=this;return e._asyncToGenerator(function*(){const c=a.edits.feature,w=c.sourceLayer,n=a.viewModel,p=n.sketchViewModel;var q=f.findLayerInfo(n.layerInfos,
w);q=null==q?void 0:q.formTemplate;const {spatialReference:E}=n.view;n.featureFormViewModel.set({feature:c,formTemplate:q,spatialReference:E});p.allowDeleteKey=!1;const l=f.getVisualVariableAttributes(c);yield f.startUpdatingFeature(p,c,w,l,g);q=p.on("update",function(){var F=e._asyncToGenerator(function*(m){var h=m.graphics[0];if("complete"===m.state)return f.startUpdatingFeature(p,h,w,l,g);yield f.visualVariableInteractiveUpdate(p.view,h,m,l,g);m=h.attributes;x.isSome(l.rotation)&&({field:h}=l.rotation,
n.featureFormViewModel.setValue(h,m[h]));x.isSome(l.size)&&({field:h}=l.size,n.featureFormViewModel.setValue(h,m[h]))});return function(m){return F.apply(this,arguments)}}());k.add([a.viewModel.featureFormViewModel.on("value-change",e._asyncToGenerator(function*(){a.edits.updateAttributes(a.viewModel.featureFormViewModel.getValues());c.attributes=a.edits.feature.attributes;"3d"===p.view.type&&(yield f.updateGraphicSymbolWhenRequired(c,g))})),q],d.id)})()},tearDown(d){var c=this;return e._asyncToGenerator(function*(){d.cancelled&&
a.viewModel.sketchViewModel.layer.removeAll();k.remove(c.id)})()}})});return f.avoidFeatureTemplateSelectionWithOnlyOneItem(a,b)};return r}(D);return t=u=z.__decorate([A.subclass("esri.widgets.Editor.CreateWorkflow")],t)});