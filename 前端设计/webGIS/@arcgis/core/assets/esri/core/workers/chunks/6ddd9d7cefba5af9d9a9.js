"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3117],{82673:(t,e,r)=>{r.d(e,{I:()=>n});var i=r(29768),s=r(17533);let o=0;const n=t=>{let e=class extends t{constructor(...t){super(...t),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+o++})}};return e=(0,i._)([(0,s.j)("esri.core.Identifiable")],e),e};let a=class extends(n(class{})){};a=(0,i._)([(0,s.j)("esri.core.Identifiable")],a)},54179:(t,e,r)=>{r.d(e,{M:()=>f,a:()=>m});var i=r(29768),s=r(21972),o=r(71252),n=r(12047),a=r(76506),l=r(66396),p=r(17533);class u{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(s.a),this._values=new Map,this.multipleOriginsSupported=!0}clone(t){const e=new u,r=this._originStores[s.O.DEFAULTS];r&&r.forEach(((t,r)=>{e.set(r,(0,a.d9)(t),s.O.DEFAULTS)}));for(let r=s.O.SERVICE;r<s.a;r++){const i=this._originStores[r];i&&i.forEach(((i,s)=>{t&&t.has(s)||e.set(s,(0,a.d9)(i),r)}))}return e}get(t,e){const r=void 0===e?this._values:this._originStores[e];return r?r.get(t):void 0}keys(t){const e=null==t?this._values:this._originStores[t];return e?[...e.keys()]:[]}set(t,e,r=s.O.USER){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(t,e),!this._values.has(t)||(0,o.b)(this._propertyOriginMap.get(t))<=r){const i=this._values.get(t);return this._values.set(t,e),this._propertyOriginMap.set(t,r),i!==e}return!1}delete(t,e=s.O.USER){const r=this._originStores[e];if(!r)return;const i=r.get(t);if(r.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===e){this._values.delete(t);for(let r=e-1;r>=0;r--){const e=this._originStores[r];if(e&&e.has(t)){this._values.set(t,e.get(t)),this._propertyOriginMap.set(t,r);break}}}return i}has(t,e){const r=void 0===e?this._values:this._originStores[e];return!!r&&r.has(t)}revert(t,e){for(;e>0&&!this.has(t,e);)--e;const r=this._originStores[e],i=r&&r.get(t),s=this._values.get(t);return this._values.set(t,i),this._propertyOriginMap.set(t,e),s!==i}originOf(t){return this._propertyOriginMap.get(t)||s.O.DEFAULTS}forEach(t){this._values.forEach(t)}}const d=t=>{let e=class extends t{constructor(...t){super(...t);const e=(0,o.b)((0,l.g)(this)),r=e.store,i=new u;e.store=i,(0,n.s)(e,r,i)}read(t,e){(0,n.r)(this,t,e)}getAtOrigin(t,e){const r=h(this),i=(0,s.n)(e);if("string"==typeof t)return r.get(t,i);const o={};return t.forEach((t=>{o[t]=r.get(t,i)})),o}originOf(t){return(0,s.b)(this.originIdOf(t))}originIdOf(t){return h(this).originOf(t)}revert(t,e){const r=h(this),i=(0,s.n)(e),o=(0,l.g)(this);let n;n="string"==typeof t?"*"===t?r.keys(i):[t]:t,n.forEach((t=>{o.invalidate(t),r.revert(t,i),o.commit(t)}))}};return e=(0,i._)([(0,p.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],e),e};function h(t){return(0,l.g)(t).store}let c=class extends(d(s.Z)){};c=(0,i._)([(0,p.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],c);const y=t=>{let e=class extends t{constructor(...t){super(...t)}clear(t,e="user"){return g(this).delete(t,(0,s.n)(e))}write(t={},e){return(0,n.w)(this,t=t||{},e),t}setAtOrigin(t,e,r){(0,l.g)(this).setAtOrigin(t,e,(0,s.n)(r))}removeOrigin(t){const e=g(this),r=(0,s.n)(t),i=e.keys(r);for(const t of i)e.originOf(t)===r&&e.set(t,e.get(t,r),s.O.USER)}updateOrigin(t,e){const r=g(this),i=(0,s.n)(e),o=this.get(t);for(let e=i+1;e<s.a;++e)r.delete(t,e);r.set(t,o,i)}toJSON(t){return this.write({},t)}};return e=(0,i._)([(0,p.j)("esri.core.WriteableMultiOriginJSONSupport")],e),e.prototype.toJSON.isDefaultToJSON=!0,e};function g(t){return(0,l.g)(t).store}const f=t=>{let e=class extends(y(d(t))){constructor(...t){super(...t)}};return e=(0,i._)([(0,p.j)("esri.core.MultiOriginJSONSupport")],e),e};let m=class extends(f(s.Z)){};m=(0,i._)([(0,p.j)("esri.core.MultiOriginJSONSupport")],m)},41617:(t,e,r)=>{r.d(e,{Z:()=>v});var i=r(29768),s=(r(74569),r(82058)),o=r(60991),n=r(75067),a=r(82673),l=r(81184),p=r(92143),u=r(50406),d=r(32101),h=r(34250),c=(r(76506),r(91306),r(17533)),y=r(31450),g=r(21801),f=r(60947);r(73796),r(12047),r(21972),r(60474),r(66396),r(86656),r(91055),r(6540),r(19657),r(6906),r(71552),r(40642),r(97714),r(2906),r(84069),r(91597),r(86787),r(35132),r(89623),r(44567),r(98380),r(92896),r(22781),r(57251),r(32422),r(88762),r(33101);const m=p.L.getLogger("esri.layers.support.fromPortalItem");let b=0,_=class extends(n.Z.EventedMixin((0,a.I)(l.Z))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new g.Z(-180,-90,180,90,f.Z.WGS84),this.id=Date.now().toString(16)+"-layer-"+b++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=f.Z.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(t){const e="string"==typeof t?{url:t}:t;return(await r.e(6601).then(r.bind(r,66601))).fromUrl(e)}static fromPortalItem(t){return async function(t){const e="portalItem"in t?t:{portalItem:t},i=await Promise.all([r.e(1623),r.e(6458)]).then(r.bind(r,36458));try{return await i.fromItem(e)}catch(t){const r=e&&e.portalItem,i=r&&r.id||"unset",s=r&&r.portal&&r.portal.url||y.Z.portalUrl;throw m.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+s+"', id: '"+i+"')",t),t}}(t)}initialize(){this.when().catch((t=>{(0,u.D_)(t)||p.L.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:t})}))}destroy(){if(this.parent){const t=this,e=this.parent;"layers"in e&&e.layers.includes(t)?e.layers.remove(t):"tables"in e&&e.tables.includes(t)?e.tables.remove(t):"baseLayers"in e&&e.baseLayers.includes(t)?e.baseLayers.remove(t):"baseLayers"in e&&e.referenceLayers.includes(t)&&e.referenceLayers.remove(t)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const t=this.url;return t?(0,d.mN)(t):null}async fetchAttributionData(){const t=this.attributionDataUrl;if(this.hasAttributionData&&t)return(await(0,s.default)(t,{query:{f:"json"},responseType:"json"})).data;throw new o.Z("layer:no-attribution-data","Layer does not have attribution data")}};(0,i._)([(0,h.Cb)({type:String})],_.prototype,"attributionDataUrl",void 0),(0,i._)([(0,h.Cb)({type:g.Z})],_.prototype,"fullExtent",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],_.prototype,"hasAttributionData",null),(0,i._)([(0,h.Cb)({type:String,clonable:!1})],_.prototype,"id",void 0),(0,i._)([(0,h.Cb)({type:Boolean,nonNullable:!0})],_.prototype,"legendEnabled",void 0),(0,i._)([(0,h.Cb)({type:["show","hide","hide-children"]})],_.prototype,"listMode",void 0),(0,i._)([(0,h.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0})],_.prototype,"opacity",void 0),(0,i._)([(0,h.Cb)({clonable:!1})],_.prototype,"parent",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],_.prototype,"parsedUrl",null),(0,i._)([(0,h.Cb)({type:Boolean})],_.prototype,"popupEnabled",void 0),(0,i._)([(0,h.Cb)({type:Boolean})],_.prototype,"attributionVisible",void 0),(0,i._)([(0,h.Cb)({type:f.Z})],_.prototype,"spatialReference",void 0),(0,i._)([(0,h.Cb)({type:String})],_.prototype,"title",void 0),(0,i._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],_.prototype,"type",void 0),(0,i._)([(0,h.Cb)()],_.prototype,"url",void 0),(0,i._)([(0,h.Cb)({type:Boolean,nonNullable:!0})],_.prototype,"visible",void 0),_=(0,i._)([(0,c.j)("esri.layers.Layer")],_);const v=_},63117:(t,e,r)=>{r.r(e),r.d(e,{default:()=>h});var i=r(29768),s=r(60991),o=r(54179),n=r(6906),a=r(34250),l=(r(76506),r(91306),r(17533)),p=r(41617),u=r(39241);r(92143),r(31450),r(71552),r(40642),r(21972),r(60474),r(66396),r(86656),r(91055),r(6540),r(19657),r(50406),r(12047),r(74569),r(21801),r(73796),r(97714),r(60947),r(2906),r(91597),r(86787),r(35132),r(89623),r(84069),r(44567),r(98380),r(92896),r(22781),r(57251),r(32422),r(82058),r(88762),r(32101),r(75067),r(82673),r(81184),r(33101),r(41864),r(49900),r(3482),r(67477),r(78533),r(74653),r(91091),r(58943),r(56420),r(73173),r(74742),r(28239);let d=class extends((0,u.I)((0,o.M)(p.Z))){constructor(t){super(t),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise(((t,e)=>{(0,n.Os)((()=>{const t=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let r="Unknown layer type";t&&(r+=" "+t),e(new s.Z("layer:unknown-layer-type",r,{layerType:t}))}))})))}read(t,e){super.read({resourceInfo:t},e)}write(){return null}};(0,i._)([(0,a.Cb)({readOnly:!0})],d.prototype,"resourceInfo",void 0),(0,i._)([(0,a.Cb)({type:["show","hide"]})],d.prototype,"listMode",void 0),(0,i._)([(0,a.Cb)({json:{read:!1},readOnly:!0,value:"unknown"})],d.prototype,"type",void 0),d=(0,i._)([(0,l.j)("esri.layers.UnknownLayer")],d);const h=d},39241:(t,e,r)=>{r.d(e,{I:()=>v});var i=r(29768),s=r(88762),o=r(82058),n=r(41864),a=r(60991),l=r(92143),p=r(71252),u=r(50406),d=r(32101),h=r(34250),c=(r(76506),r(91306),r(97714)),y=r(17533),g=r(2906),f=r(49900),m=r(56420),b=r(74653);r(31450),r(71552),r(40642),r(60474),r(66396),r(86656),r(6540),r(12047),r(21972),r(91055),r(19657),r(6906),r(81184),r(33101),r(21801),r(73796),r(60947),r(91597),r(86787),r(35132),r(89623),r(3482),r(67477),r(57251),r(78533),r(73173),r(74742),r(28239),r(91091),r(58943);const _=l.L.getLogger("esri.layers.mixins.PortalLayer"),v=t=>{let e=class extends t{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0}destroy(){this.portalItem?.destroy(),this.portalItem=null}set portalItem(t){t!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",t))}readPortalItem(t,e,r){if(e.itemId)return new m.default({id:e.itemId,portal:r&&r.portal})}writePortalItem(t,e){t&&t.id&&(e.itemId=t.id)}async loadFromPortal(t,e){if(this.portalItem&&this.portalItem.id)try{const i=await r.e(8642).then(r.bind(r,8642)).then((t=>t.l));return(0,u.k_)(e),await i.load({instance:this,supportedTypes:t.supportedTypes,validateItem:t.validateItem,supportsData:t.supportsData},e)}catch(t){throw(0,u.D_)(t)||_.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${t}`),t}}async finishLoadEditablePortalLayer(t){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(t).catch((t=>((0,u.r9)(t),!0))))}async _fetchUserHasEditingPrivileges(t){const e=this.url?s.id?.findCredential(this.url):null;if(!e)return!0;const r=w.credential===e?w.user:await this._fetchEditingUser(t);return w.credential=e,w.user=r,(0,p.a)(r)||null==r.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(t){const e=this.portalItem?.portal?.user;if(e)return e;const r=s.id.findServerInfo(this.url);if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,a=f.Z.getDefault();if(a&&a.loaded&&(0,d.Fv)(a.restUrl)===(0,d.Fv)(i))return a.user;const l=`${i}/community/self`,u=(0,p.i)(t)?t.signal:null,h=await(0,n.r)((0,o.default)(l,{authMode:"no-prompt",query:{f:"json"},signal:u}));return h.ok?b.default.fromJSON(h.value.data):null}read(t,e){e&&(e.layer=this),super.read(t,e)}write(t,e){const r=e&&e.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||f.Z.getDefault());return r&&i&&!(0,d.tm)(i.restUrl,r.restUrl)?(e.messages&&e.messages.push(new a.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(t,{...e,layer:this})}};return(0,i._)([(0,h.Cb)({type:m.default})],e.prototype,"portalItem",null),(0,i._)([(0,c.r)("web-document","portalItem",["itemId"])],e.prototype,"readPortalItem",null),(0,i._)([(0,g.w)("web-document","portalItem",{itemId:{type:String}})],e.prototype,"writePortalItem",null),(0,i._)([(0,h.Cb)({clonable:!1})],e.prototype,"resourceReferences",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],e.prototype,"userHasEditingPrivileges",void 0),e=(0,i._)([(0,y.j)("esri.layers.mixins.PortalLayer")],e),e},w={credential:null,user:null}}}]);