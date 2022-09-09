/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import s from"../Color.js";import t from"../Graphic.js";import o from"../core/Accessor.js";import{H as l}from"./mathUtils.js";import{i,a as r}from"./maybe.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import h from"../symbols/PointSymbol3D.js";import p from"../symbols/SimpleFillSymbol.js";import y from"../symbols/TextSymbol.js";import m from"../symbols/TextSymbol3DLayer.js";const b=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let c=class extends o{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=b.map((e=>new p({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}}))),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const e=this.getTiles(),o=new Array,a=new Set((this._labels.size,this._labels.keys()));e.forEach(((n,p)=>{const b=n.lij.toString();a.delete(b);const c=n.lij[0],g=n.geometry;if(this.enablePolygons&&!this._polygons.has(b)){const e=new t({geometry:g,symbol:this._symbols[c%this._symbols.length]});this._polygons.set(b,e),o.push(e)}if(this.enableLabels){const a=(e=>{if(i(e.label))return e.label;let s=e.lij.toString();return i(e.loadPriority)&&(s+=` (${e.loadPriority})`),s})(n),c=p/(e.length-1),d=l(0,200,c),_=l(20,6,c)/.75,u=i(n.loadPriority)&&n.loadPriority>=e.length,f=new s([d,u?0:d,u?0:d]),w="3d"===this.view.type?()=>new h({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new m({text:a,halo:{color:"white",size:1/.75},material:{color:f},size:_})]}):()=>new y({text:a,haloColor:"white",haloSize:1/.75,color:f,size:_});if(this._labels.has(b)){const e=this._labels.get(b),s=w();(r(e.symbol)||JSON.stringify(s)!==JSON.stringify(e.symbol))&&(e.symbol=s)}else{const e=new t({geometry:g.extent.center,symbol:w()});this._labels.set(b,e),o.push(e)}}}));const n=new Array;a.forEach((e=>{this._polygons.has(e)&&(n.push(this._polygons.get(e)),this._polygons.delete(e)),this._labels.has(e)&&(n.push(this._labels.get(e)),this._labels.delete(e))})),this.view.graphics.removeMany(n),this.view.graphics.addMany(o)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};e([a({constructOnly:!0})],c.prototype,"view",void 0),e([a({readOnly:!0})],c.prototype,"updating",void 0),e([a()],c.prototype,"enabled",null),c=e([n("esri.views.support.TileTreeDebugger")],c);export{c as T};
