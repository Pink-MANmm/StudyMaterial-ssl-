// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Evented ../../core/HandleOwner ../../core/maybe ../../core/ObjectPool ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./TemplateItem ./TemplateItemGroup".split(" "),function(v,f,d,z,A,t,w,B,h,H,I,C,x,D){function E(k){return k.reduce((q,e)=>[...q,...e.templates],[])}var r;const F=
({layer:k})=>({key:k,label:k.title}),G=({layer:k})=>({key:k.geometryType,label:k.geometryType});d=r=function(k){function q(a){a=k.call(this,a)||this;a._itemPool=new w(x);a._groupPool=new w(D);a.filterFunction=null;a.selectedItem=null;return a}v._inheritsLoose(q,k);var e=q.prototype;e.initialize=function(){this._get("groupBy")||(this.groupBy="layer")};e.destroy=function(){this._templateToLayer.clear()};e.refresh=function(){this.notifyChange("items")};e.select=function(a){a=(null==a?void 0:a.clone())||
null;this._set("selectedItem",a);this.emit("select",{item:a,template:(null==a?void 0:a.template)||null})};e._createItem=function(a,b){const c=this._itemPool.acquire();c.set({template:a,layer:b});return c};e._createGroup=function(a,b){const c=this._groupPool.acquire();c.set("label",a);c.items=b;return c};e._releasePreviousItems=function(){this._destroyItems(this._get("items"))};e._destroyItems=function(a){a&&(a[0]instanceof x?a.forEach(b=>this._destroyItem(b)):a.forEach(b=>this._destroyGroup(b)))};
e._destroyGroup=function(a){a.items.forEach(b=>this._destroyItem(b));a.items.length=0;this._groupPool.release(a)};e._destroyItem=function(a){a.layer=null;a.template=null;this._itemPool.release(a)};e._ensureGroupByObject=function(a){return"string"===typeof a?{key:a,label:a}:a};v._createClass(q,[{key:"_templateToLayer",get:function(){const a=new Map;for(const [b,c]of this._featureTemplatesByLayer)for(const g of c)a.set(g,b);return a}},{key:"groupBy",set:function(a){this._set("groupBy",a);if("function"===
typeof a)this._groupByFunction=b=>this._ensureGroupByObject(a(b));else switch(a){case "none":this._groupByFunction=null;break;case "layer":this._groupByFunction=F;break;case "geometry":this._groupByFunction=G}}},{key:"layers",get:function(){return this._get("layers")},set:function(a){this.handles.remove("layers");if(a){const b=()=>this.notifyChange("state");this.handles.add(a.map(c=>B.when(()=>c.loadStatus,b)),"layers")}this._set("layers",a)}},{key:"state",get:function(){const {layers:a}=this;return a&&
0!==a.length?a.some(b=>"loading"===b.loadStatus||"not-loaded"===b.loadStatus)?"loading":"ready":"disabled"}},{key:"_featureTemplatesByLayer",get:function(){if(!this.layers)return new Map;const a=[];for(const b of this.layers){const c="templates"in b&&b.templates?b.templates:[],g="types"in b&&b.types?E(b.types):[];a.push([b,[...c,...g]])}return new Map(a)}},{key:"numberOfFeatureTemplates",get:function(){return Array.from(this._featureTemplatesByLayer.values()).reduce((a,b)=>a+b.length,0)}},{key:"items",
get:function(){if(0===this.numberOfFeatureTemplates)return this._releasePreviousItems(),[];var a=this._featureTemplatesByLayer,b=[],c=t.isSome(this.filterFunction)?this.filterFunction:r._nullFilterFunction;for(const [l,n]of a){const {loadStatus:m,capabilities:{operations:{supportsEditing:p,supportsAdd:u}}}=l;if("loaded"===m&&p&&u)for(const y of n)b.push({layer:l,template:y,matchesFilter:c({label:y.name})})}if(t.isNone(this._groupByFunction))return c=b.filter(({matchesFilter:l})=>l).map(({template:l,
layer:n})=>this._createItem(l,n)),this._releasePreviousItems(),c;a=new Map;for(var g of b){const {template:l,layer:n}=g;b=this._groupByFunction({template:l,layer:n});const {key:m,label:p}=t.isSome(b.key)?b:r.nullGroupBy;a.has(m)||a.set(m,{label:p,templateItemInfos:[]});a.get(m).templateItemInfos.push(g)}g=[];for(const l of a.values()){const {label:n,templateItemInfos:m}=l;b=m.filter(({matchesFilter:p})=>p);b=c({label:n})?m:0<m.length?b:[];0<b.length&&(b=b.map(({template:p,layer:u})=>this._createItem(p,
u)),g.push(this._createGroup(n,b)))}if(1===g.length&&g[0].label===r.nullGroupBy.label)return this._releasePreviousItems(),g[0].items;this._releasePreviousItems();return g}}]);return q}(A.HandleOwnerMixin(z.EventedAccessor));d.nullGroupBy={key:Symbol(),label:"Other\u200b"};d._nullFilterFunction=k=>!0;f.__decorate([h.property()],d.prototype,"_groupByFunction",void 0);f.__decorate([h.property({readOnly:!0})],d.prototype,"_templateToLayer",null);f.__decorate([h.property()],d.prototype,"filterFunction",
void 0);f.__decorate([h.property()],d.prototype,"groupBy",null);f.__decorate([h.property()],d.prototype,"layers",null);f.__decorate([h.property()],d.prototype,"state",null);f.__decorate([h.property({readOnly:!0})],d.prototype,"_featureTemplatesByLayer",null);f.__decorate([h.property({readOnly:!0})],d.prototype,"numberOfFeatureTemplates",null);f.__decorate([h.property({readOnly:!0})],d.prototype,"items",null);f.__decorate([h.property({readOnly:!0})],d.prototype,"selectedItem",void 0);f.__decorate([h.property()],
d.prototype,"select",null);return d=r=f.__decorate([C.subclass("esri.widgets.FeatureTemplates.FeatureTemplatesViewModel")],d)});