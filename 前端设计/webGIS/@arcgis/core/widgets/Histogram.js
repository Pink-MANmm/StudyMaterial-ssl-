/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{substitute as e}from"../intl.js";import{a as s}from"../chunks/maybe.js";import{aliasOf as i}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/lang.js";import"../chunks/ensureType.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import o from"./Widget.js";import n from"./Histogram/HistogramViewModel.js";import{o as l}from"../chunks/widgetUtils.js";import{m as d}from"../chunks/messageBundle.js";import{t as h}from"../chunks/jsxFactory.js";import"../chunks/number2.js";import"../chunks/jsonMap.js";import"../chunks/object.js";import"../chunks/locale.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/string.js";import"../chunks/messages.js";import"../core/Error.js";import"../core/promiseUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/tracking.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Accessor.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Handles.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";var c;let u=c=class extends o{constructor(t,e){super(t,e),this._bgFillId=`${this.id}-bg-fill`,this._containerNode=null,this._containerDimensions={width:0,height:0},this._defaultBarColor="#d8d8d8",this.average=null,this.barCreatedFunction=null,this.bins=null,this.dataLines=null,this.dataLineCreatedFunction=null,this.dataLineUpdatedFunction=null,this.label=void 0,this.labelFormatFunction=null,this.max=null,this.messages=null,this.min=null,this.state=null,this.viewModel=new n}set layout(t){"vertical"!==t&&(t="horizontal"),this._set("layout",t)}static fromHistogramResult(t){const{bins:e,maxValue:s,minValue:i}=t;return new c({bins:e,max:s,min:i})}render(){const{label:t,layout:e,state:s}=this,i=this.classes("esri-histogram","esri-widget","horizontal"===e?"esri-histogram--horizontal":"esri-histogram--vertical","disabled"===s?"esri-disabled":null);return h("div",{"aria-label":t,class:i,bind:this,afterCreate:this._afterContainerNodeCreate},"ready"===s?this.renderContent():null)}renderContent(){if(!this._containerNode)return;const t=this._bgFillId,e=`clip-path: url(#${t})`;return h("div",{class:"esri-histogram__content"},h("svg",{class:"esri-histogram__svg",xmlns:"http://www.w3.org/2000/svg"},h("defs",null,this.renderFillDefinition(t)),h("g",{style:e},this.renderBarsGroup()),this.renderLinesGroup()))}renderBarsGroup(){return h("g",{class:this.classes("esri-histogram__bars")},this.renderBars())}renderBars(){const{layout:t,viewModel:{binRange:e,range:s}}=this;if(!e||!s)return;const i=e/s,{width:r,height:a}=this._containerDimensions;if(0===a&&0===r)return;if(0===a&&0!==r)return void this.scheduleRender();const[o,n]="vertical"===t?[a*i,r]:[a,r*i];return this._getBarDimensions(o,n).map((([t,e],s)=>this.renderBar(s,t,e)))}renderBar(t,s,i){const{bins:r,layout:a,max:o,messages:n,viewModel:{range:l}}=this,{width:d,height:c}=this._containerDimensions,u=r.slice()[t],{count:p,maxValue:m,minValue:g}=u,b=o-m,[v,_]="vertical"===a?[0,b*(c/l)]:[d-i-b*(d/l),c-s],j=e(n.barLabel,{count:p,maxValue:m,minValue:g});return h("rect",{"aria-label":j,afterCreate:this._afterBarCreate,bind:this,class:"esri-histogram__bar","data-index":t,fill:this._defaultBarColor,height:s,role:"img","shape-rendering":"crispEdges","stroke-width":"0",width:i,x:v,y:_})}renderLinesGroup(){return h("g",{class:this.classes("esri-histogram__data-lines")},this.renderAverageLine(),this.renderCustomLines())}renderAverageLine(){const{average:t}=this;if(s(t))return;const e=[h("tspan",{class:this.classes("esri-histogram__average-symbol")},"x̄ "),h("tspan",{class:this.classes("esri-histogram__average-label")},this.labelFormatFunction?this.labelFormatFunction(t,"average"):t)];return h("g",{afterCreate:this._afterLinesSubgroupCreate,afterUpdate:this._afterLinesSubgroupUpdate,bind:this,class:this.classes("esri-histogram__data-lines-subgroup")},h("title",{key:"title"},t),this.renderLine(t,this.classes("esri-histogram__average-data-line")),this.renderLabel(t,e))}renderCustomLines(){if(this.dataLines&&this.dataLines.length)return this.dataLines.map((({value:t,label:e},s)=>this.renderLineSubgroup(s,t,String(e))))}renderLineSubgroup(t,e,s){return h("g",{afterCreate:this._afterLinesSubgroupCreate,afterUpdate:this._afterLinesSubgroupUpdate,bind:this,class:this.classes("esri-histogram__data-lines-subgroup"),"data-index":t},h("title",{key:"title"},e),this.renderLine(e),this.renderLabel(e,s))}renderLine(t,e){const[s,i,r,a]=this._getLinePosition(t);return h("line",{class:this.classes("esri-histogram__data-line",e),x1:s,x2:i,y1:r,y2:a,"shape-rendering":"crispEdges"})}renderLabel(t,e,s){const[i,r]=this._getLabelPosition(t);return h("text",{class:this.classes("esri-histogram__label",s),"text-anchor":"end",transform:"horizontal"===this.layout?"rotate(270)":null,x:i,y:r-2},e)}renderFillDefinition(t){const{width:e,height:s}=this._containerDimensions;return h("clipPath",{id:t},h("rect",{x:"0",y:"0",width:e,height:s}))}_afterContainerNodeCreate(t){this._containerNode=t,this.own(l(t,(t=>{const{width:e,height:s}=t.contentRect;this._containerDimensions={width:e,height:s}})))}_afterBarCreate(t){if(this.barCreatedFunction){const e=t.dataset?parseInt(t.dataset.index,10):t.getAttribute("data-index")?parseInt(t.getAttribute("data-index"),10):null;this.barCreatedFunction(isNaN(e)?null:e,t)}}_afterLinesSubgroupCreate(t){if(this.dataLineCreatedFunction){const e=t.dataset?parseInt(t.dataset.index,10):t.getAttribute("data-index")?parseInt(t.getAttribute("data-index"),10):null,s=t.childNodes[0],i=t.childNodes[1]?t.childNodes[1]:null;this.dataLineCreatedFunction(s,i,isNaN(e)?null:e)}}_afterLinesSubgroupUpdate(t){if(this.dataLineUpdatedFunction){const e=t.dataset?parseInt(t.dataset.index,10):t.getAttribute("data-index")?parseInt(t.getAttribute("data-index"),10):null,s=t.childNodes[0],i=t.childNodes[1]?t.childNodes[1]:null;this.dataLineUpdatedFunction(s,i,isNaN(e)?null:e)}}_getBarDimensions(t,e){const{bins:s,layout:i}=this,r=s?s.map((t=>t.count)):[],a=Math.max.apply(Math,r);return r.map((s=>"vertical"===i?[t/r.length,0!==a?s/a*e:0]:[0!==a?s/a*t:0,e/r.length]))}_getLinePosition(t){const{layout:e,min:s,viewModel:{range:i}}=this,r=Math.round((t-s)/i*100)/100,{width:a,height:o}=this._containerDimensions,[n,l]=[r*a||1,o-r*o||1];return"vertical"===e?[0,"100%",l,l]:[n,n,"100%",0]}_getLabelPosition(t){const{layout:e,min:s,viewModel:{range:i}}=this,r=Math.round((t-s)/i*100)/100,{width:a,height:o}=this._containerDimensions;return"vertical"===e?[a,o-r*o]:[0,r*a]}};t([r()],u.prototype,"_bgFillId",void 0),t([r()],u.prototype,"_containerNode",void 0),t([r()],u.prototype,"_containerDimensions",void 0),t([r()],u.prototype,"_defaultBarColor",void 0),t([i("viewModel.average")],u.prototype,"average",void 0),t([r()],u.prototype,"barCreatedFunction",void 0),t([i("viewModel.bins")],u.prototype,"bins",void 0),t([r()],u.prototype,"dataLines",void 0),t([r()],u.prototype,"dataLineCreatedFunction",void 0),t([r()],u.prototype,"dataLineUpdatedFunction",void 0),t([r({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],u.prototype,"label",void 0),t([i("viewModel.labelFormatFunction")],u.prototype,"labelFormatFunction",void 0),t([r({value:"horizontal"})],u.prototype,"layout",null),t([i("viewModel.max")],u.prototype,"max",void 0),t([r(),d("esri/widgets/Histogram/t9n/Histogram")],u.prototype,"messages",void 0),t([i("viewModel.min")],u.prototype,"min",void 0),t([i("viewModel.state")],u.prototype,"state",void 0),t([r()],u.prototype,"viewModel",void 0),u=c=t([a("esri.widgets.Histogram")],u);const p=u;export{p as default};
