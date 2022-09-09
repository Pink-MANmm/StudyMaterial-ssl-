/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{i as e}from"./maybe.js";import{s as t}from"../core/lang.js";import{g as n}from"./assets.js";import{N as o}from"./I3SNode.js";var r,s;function i(e){return n(`esri/libs/i3s/${e}`)}let a,f,c;function u(e){const t=e.modifications,n=c._malloc(8*t.length),o=new Float64Array(c.HEAPU8.buffer,n,t.length);for(let e=0;e<t.length;++e)o[e]=t[e];c.setModifications(e.context,n,t.length,e.isGeodetic),c._free(n)}function l(n,o){if(!c)return null;const{context:s,localOrigin:i,globalTrafo:a,mbs:f,obb:u,elevationOffset:l,geometryBuffer:d,geometryDescriptor:y,indexToVertexProjector:b,vertexToRenderProjector:h}=n,p=c._malloc(d.byteLength),E=c._malloc(33*Float64Array.BYTES_PER_ELEMENT),g=new Uint8Array(c.HEAPU8.buffer,p,d.byteLength);g.set(new Uint8Array(d));const w=new Float64Array(c.HEAPU8.buffer,E,33);m(w,i);let _=w.byteOffset+3*w.BYTES_PER_ELEMENT,I=new Float64Array(w.buffer,_);m(I,a),_+=16*w.BYTES_PER_ELEMENT,I=new Float64Array(w.buffer,_),m(I,f),_+=4*w.BYTES_PER_ELEMENT,e(u)&&(I=new Float64Array(w.buffer,_),m(I,u.center),_+=3*w.BYTES_PER_ELEMENT,I=new Float64Array(w.buffer,_),m(I,u.halfSize),_+=3*w.BYTES_PER_ELEMENT,I=new Float64Array(w.buffer,_),m(I,u.quaternion));const A=y,L={isDraco:!1,isLegacy:!1,color:n.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:n.needNormals&&n.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:n.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:n.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:A.featureIndex},P=c.process(s,!!n.obb,p,g.byteLength,A,L,E,l,b,h,n.normalReferenceFrame);if(c._free(E),c._free(p),P.error.length>0)throw`i3s.wasm: ${P.error}`;if(P.discarded)return null;const T=P.componentOffsets.length>0?t(P.componentOffsets):null,M=P.featureIds.length>0?t(P.featureIds):null,O=t(P.interleavedVertedData).buffer,F=P.indicesType===r.Int16?t(new Uint16Array(P.indices.buffer,P.indices.byteOffset,P.indices.byteLength/2)):t(new Uint32Array(P.indices.buffer,P.indices.byteOffset,P.indices.byteLength/4)),S=t(P.positions),R=P.positionIndicesType===r.Int16?t(new Uint16Array(P.positionIndices.buffer,P.positionIndices.byteOffset,P.positionIndices.byteLength/2)):t(new Uint32Array(P.positionIndices.buffer,P.positionIndices.byteOffset,P.positionIndices.byteLength/4)),U={layout:n.layouts[0],interleavedVertexData:O,indices:F,hasColors:P.hasColors,hasModifications:P.hasModifications,positionData:{data:S,indices:R}};return M&&o.push(M.buffer),T&&o.push(T.buffer),o.push(O),o.push(F.buffer),o.push(S.buffer),o.push(R.buffer),{componentOffsets:T,featureIds:M,transformedGeometry:U,obb:P.obb}}function d(e){return 0===e?o.Unmodified:1===e?o.PotentiallyModified:2===e?o.Culled:o.Unknown}function y(e){const{context:t,buffer:n}=e,o=c._malloc(n.byteLength),r=n.byteLength/Float64Array.BYTES_PER_ELEMENT,s=new Float64Array(c.HEAPU8.buffer,o,r),i=new Float64Array(n);s.set(i),c.filterOBBs(t,o,r),i.set(s),c._free(o)}function b(e){c&&c.destroy(e)}function m(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}function h(){return c?Promise.resolve():(f||(f=(a||(a=new Promise((e=>import("./i3s.js").then((e=>e.i)).then((({default:t})=>{const n=t({locateFile:i,onRuntimeInitialized:()=>e(n)});delete n.then})))).catch((e=>{throw e}))),a).then((e=>{c=e,f=null}))),f)}!function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(r||(r={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(s||(s={}));const p={transform:l,destroy:b},E=Object.freeze(Object.defineProperty({__proto__:null,process:async function(e){await h();const t=[e.geometryBuffer];return{result:l(e,t),transferList:t}},dracoDecompressPointCloudData:async function(e){await h();const n=[e.geometryBuffer],{geometryBuffer:o}=e,r=o.byteLength,s=c._malloc(r),i=new Uint8Array(c.HEAPU8.buffer,s,r);i.set(new Uint8Array(o));const a=c.dracoDecompressPointCloudData(s,i.byteLength);if(c._free(s),a.error.length>0)throw`i3s.wasm: ${a.error}`;const f=a.featureIds?.length>0?t(a.featureIds):null,u=t(a.positions);return f&&n.push(f.buffer),n.push(u.buffer),{result:{positions:u,featureIds:f},transferList:n}},filterObbsForModifications:async function(e){await h(),y(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}},setModifications:async function(e){await h(),u(e)},setLegacySchema:async function(e){await h(),c.setLegacySchema(e.context,e.jsonSchema)},destroyContext:function(e){b(e)},setModificationsSync:u,interpretObbModificationResults:d,filterObbsForModificationsSync:y,initialize:h,test:p},Symbol.toStringTag,{value:"Module"}));export{s as M,E as S,d as a,y as f,h as i,u as s};
