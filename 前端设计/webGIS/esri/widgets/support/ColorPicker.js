// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/Handles ../../core/handleUtils ../../core/maybe ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../Widget ./Popover ./widgetUtils ./decorators/messageBundle ./jsxFactory".split(" "),function(p,d,v,e,r,y,w,f,t,x,g,F,G,H,z,A,
B,I,C,h){function D(l,n){const c=setTimeout(l,n);return w.makeHandle(()=>clearTimeout(c))}var k;(function(l){l.ColorPickerFocus="hex-input-poll-timeout";l.ButtonFocusTimeout="button-focus-timeout"})(k||(k={}));d.ColorPicker=function(l){function n(a,b){a=l.call(this,a,b)||this;a.value=new r;a.alphaEnabled=!0;a._handles=new y;a._containerElement=null;a._popover=null;a._popoverElement=null;a._buttonElement=null;a._colorPickerCreated=!1;return a}v._inheritsLoose(n,l);var c=n.prototype;c.initialize=function(){this.own(x.watch(()=>
({container:this._containerElement,value:this.value}),({container:a,value:b})=>{f.applySome(a,m=>{m.style.setProperty("--esri-color-picker-value",b.toCss(!0))})},x.syncAndInitial))};c.loadDependencies=function(){return Promise.all([new Promise((a,b)=>p(["../../chunks/calcite-button"],a,b)),new Promise((a,b)=>p(["../../chunks/calcite-color-picker"],a,b)),new Promise((a,b)=>p(["../../chunks/calcite-label"],a,b)),new Promise((a,b)=>p(["../../chunks/calcite-slider"],a,b))])};c.destroy=function(){this._destroyPopover();
this._handles=f.destroyMaybe(this._handles);this._buttonElement=null};c.render=function(){var a=this._messages;a=f.isSome(this._popover)&&this._popover.open?a.close:a.open;return h.tsx("div",{class:this.classes("esri-color-picker",this.class),bind:this,afterCreate:this._onContainerAfterCreate},h.tsx("div",{class:"esri-color-picker__bg-pattern"}),h.tsx("calcite-button",{appearance:"transparent",label:a,class:"esri-color-picker__toggle-button",color:"neutral",id:this.id,scale:"s",tabIndex:-1,title:a,
bind:this,onclick:this._togglePopover,afterCreate:this._onButtonAfterCreate}))};c._onContainerAfterCreate=function(a){this._containerElement=a};c._onButtonAfterCreate=function(a){this._destroyPopover();this._buttonElement=a;this._popover=new B({owner:this,anchorElement:a,placement:"bottom-start",renderContentFunction:this._renderPopoverContent})};c._destroyPopover=function(){this._handles.remove(k.ColorPickerFocus);this._popover=f.destroyMaybe(this._popover);this._popoverElement=null};c._renderPopoverContent=
function(){const a=this.value,b=this._messages;return h.tsx("div",{class:"esri-color-picker__popover",tabIndex:-1,bind:this,afterCreate:this._onPopoverAfterCreate,onfocusout:this._onPopoverFocusOut,onkeydown:this._onPopoverKeyDown},h.tsx("calcite-color-picker",{appearance:"minimal",hideSaved:!0,hideChannels:!0,scale:"m",value:this._colorPickerCreated?a.toCss():null,bind:this,onCalciteColorPickerInput:this._onColorInput,afterCreate:this._onColorPickerAfterCreate,afterRemoved:()=>this._colorPickerCreated=
!1}),this.alphaEnabled&&h.tsx("section",{class:"esri-color-picker__opacity-slider-container"},h.tsx("calcite-label",{scale:"s"},b.opacity,h.tsx("calcite-slider",{class:"esri-color-picker__opacity-slider",labelHandles:!0,min:0,max:1,step:.01,value:a.a,bind:this,onCalciteSliderInput:this._onOpacityChange}))))};c._onColorInput=function(a){a=a.target.value;a="string"===typeof a?new r(a):new r;a.a=this.value.a;this._onChange(a)};c._onOpacityChange=function(a){a=a.target;const b=this.value.clone();b.a=
a.value;this._onChange(b)};c._onChange=function(a){this.value=a;if(f.isSome(this.onChange))this.onChange(a)};c._onColorPickerAfterCreate=function(a){var b=this;this._handles.remove(k.ColorPickerFocus);const m=t.createTask(function(){var q=v._asyncToGenerator(function*(u){yield null==a.componentOnReady?void 0:a.componentOnReady();t.throwIfAborted(u);b._colorPickerCreated=!0;yield new Promise(E=>requestAnimationFrame(E));t.throwIfAborted(u);a.setFocus()});return function(u){return q.apply(this,arguments)}}());
this._handles.add(w.makeHandle(()=>{m.abort();this._colorPickerCreated=!1}),k.ColorPickerFocus)};c._togglePopover=function(a){f.isSome(this._popover)&&this._popover.open?this._closePopover():this._openPopover()};c._openPopover=function(){f.applySome(this._popover,a=>a.open=!0)};c._closePopover=function(){this._handles.remove(k.ColorPickerFocus);f.applySome(this._popover,a=>a.open=!1);this._setFocusOnButton()};c._setFocusOnButton=function(){this._handles.remove(k.ButtonFocusTimeout);this._handles.add(D(()=>
{f.applySome(this._buttonElement,a=>a.setFocus())}),k.ButtonFocusTimeout)};c._onPopoverAfterCreate=function(a){this._popoverElement=a};c._onPopoverFocusOut=function(a){const b=this._popoverElement;f.isNone(b)||(a=a.relatedTarget)&&a instanceof Node&&(b.contains(a)||a===this._buttonElement||this._isAssociatedLabel(a))||this._closePopover()};c._isAssociatedLabel=function(a){var b;const m=this.id,q=null==(b=a.tagName)?void 0:b.toLowerCase();return"calcite-label"===q&&a.for===m||"label"===q&&a.htmlFor===
m};c._onPopoverKeyDown=function(a){if("Escape"===a.key||"Enter"===a.key)a.stopPropagation(),this._closePopover()};return n}(A);e.__decorate([g.property()],d.ColorPicker.prototype,"class",void 0);e.__decorate([g.property()],d.ColorPicker.prototype,"value",void 0);e.__decorate([g.property()],d.ColorPicker.prototype,"alphaEnabled",void 0);e.__decorate([g.property()],d.ColorPicker.prototype,"onChange",void 0);e.__decorate([g.property()],d.ColorPicker.prototype,"_containerElement",void 0);e.__decorate([g.property()],
d.ColorPicker.prototype,"_popover",void 0);e.__decorate([g.property()],d.ColorPicker.prototype,"_popoverElement",void 0);e.__decorate([g.property()],d.ColorPicker.prototype,"_buttonElement",void 0);e.__decorate([g.property(),C.messageBundle("esri/widgets/support/t9n/ColorPicker")],d.ColorPicker.prototype,"_messages",void 0);e.__decorate([g.property()],d.ColorPicker.prototype,"_colorPickerCreated",void 0);d.ColorPicker=e.__decorate([z.subclass("esri.widgets.support.ColorPicker")],d.ColorPicker);Object.defineProperties(d,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});