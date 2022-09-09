/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{L as e}from"./Logger.js";import{i as t,a as s}from"./maybe.js";import{d as i}from"./screenUtils.js";import{c as r}from"./vec2.js";import{s as o,d as a,j as n,o as l,b as p,a as c,e as u,v as d,w as h,h as f}from"./mathUtils.js";import{O as m}from"./vec4f64.js";import{P as g}from"./frustum.js";import{c as S,d as P,f as v,b as x}from"./lineSegment.js";import{c as C,j as T,k as y,n as O}from"./plane.js";import{B as A,c as _}from"./BufferView.js";import{S as R,T as b,a as w,F as j,b as E,d as L,k as N,g as I,s as V,R as U,c as D,P as B,r as z,l as q,n as M,o as W,D as H,G as F,w as X}from"./glUtil3D.js";import{b as G}from"./geometryDataUtils.js";import{g as $,D as k,M as Q,c as J,a as K}from"./Material.js";import{R as Y}from"./RenderSlot.js";import{i as Z}from"./Util.js";import{V as ee}from"./VertexAttribute.js";import{b as te,d as se,D as ie}from"./CameraSpace.glsl.js";import{i as re}from"./utils4.js";import{V as oe}from"./VertexColor.glsl.js";import{L as ae}from"./lineUtils.js";import{B as ne,P as le}from"./enums.js";import{s as pe,m as ce,d as ue,a as de}from"./OrderIndependentTransparency.js";import{_ as he}from"./tslib.es6.js";import{p as fe}from"./ShaderTechniqueConfiguration.js";const me=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new R;t.include(b),t.include(oe,e),t.include(ae,e),w(t,e);const{vertex:s,fragment:i}=t;return e.stippleEnabled&&(t.attributes.add(ee.UV0,"vec2"),t.attributes.add(ee.AUXPOS1,"vec3"),s.uniforms.add(new j("viewport",((e,t)=>t.camera.fullViewport)))),t.attributes.add(ee.POSITION,"vec3"),t.varyings.add("vpos","vec3"),s.code.add($`void main(void) {
vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),e.stippleEnabled&&(s.code.add($`vec4 vpos2 = transformPosition(proj, view, auxpos1);
vec2 ndcToPixel = viewport.zw * 0.5;
float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);`),e.draped?s.uniforms.add(new E("worldToScreenRatio",((e,t)=>1/t.screenToPCSRatio))):s.code.add($`vec3 segmentCenter = (position + auxpos1) * 0.5;
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),s.code.add($`float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);`),e.draped?s.code.add($`float startPseudoScreen = uv0.y * discreteWorldToScreenRatio - mix(0.0, lineSegmentPixelSize, uv0.x);
float segmentLengthPseudoScreen = lineSegmentPixelSize;`):s.code.add($`float segmentLengthRender = length(position - auxpos1);
float startPseudoScreen = mix(uv0.y, uv0.y - segmentLengthRender, uv0.x) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),s.code.add($`vec2 stippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, lineSegmentPixelSize, stipplePatternPixelSize);
vStippleDistance = mix(stippleDistanceLimits.x, stippleDistanceLimits.y, uv0.x);
vStippleDistance *= gl_Position.w;`)),s.code.add($`}`),e.output===L.Highlight&&t.include(N),t.include(I,e),i.uniforms.add(new E("alphaCoverage",((e,t)=>Math.min(1,e.width*t.camera.pixelRatio)))),e.hasVertexColors||i.uniforms.add(new j("constantColor",(e=>e.color))),i.code.add($`
  void main() {
    discardBySlice(vpos);

    vec4 color = ${e.hasVertexColors?"vColor":"constantColor"};

    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 finalColor = blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha);

    if (finalColor.a < ${$.float(V)}) {
      discard;
    }

    ${e.output===L.Color?$`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${e.output===L.Highlight?$`outputHighlight();`:""}
  }
  `),t}},Symbol.toStringTag,{value:"Module"}));class ge extends D{constructor(e,t,s){super(e,t,s),this.stipplePattern=null,this.stippleTextureBind=null,this.stippleTextureRepository=e.stippleTextureRepository}get stippleEnabled(){return this.configuration.stippleEnabled&&this.configuration.output!==L.Highlight}initializeProgram(e){const t=ge.shader.get().build(this.configuration);return new B(e.rctx,t,k)}destroy(){super.destroy(),this.stippleTextureRepository.release(this.stipplePattern),this.stipplePattern=null,this.stippleTextureBind=null}bindPass(e,s){if(this.program.bindPass(e,s),this.stipplePattern!==e.stipplePattern){const t=e.stipplePattern;this.stippleTextureBind=this.stippleTextureRepository.swap(this.stipplePattern,t),this.stipplePattern=t}if(this.stippleEnabled){const{pixelSize:e,sdfNormalizer:s,pixels:i}=t(this.stippleTextureBind)?this.stippleTextureBind(this.program):{pixelSize:1,sdfNormalizer:1,pixels:1};this.program.setUniform1f("stipplePatternSDFNormalizer",s),this.program.setUniform1f("stipplePatternTextureSize",i),this.program.setUniform1f("stipplePatternPixelSize",e),this.program.setUniform1f("stipplePatternPixelSizeInv",1/e)}}initializePipeline(){const e=this.configuration,t=pe(ne.SRC_ALPHA,ne.ONE,ne.ONE_MINUS_SRC_ALPHA,ne.ONE_MINUS_SRC_ALPHA),s=(t,s=null,i=null)=>ce({blending:s,depthTest:z,depthWrite:i,colorWrite:ue,stencilWrite:e.hasOccludees?q:null,stencilTest:e.hasOccludees?t?M:W:null});return e.output===L.Color?(this._occludeePipelineState=s(!0,e.transparent||this.stippleEnabled?t:null,de),s(!1,e.transparent||this.stippleEnabled?t:null,de)):s(!1)}get primitiveType(){return le.LINES}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}ge.shader=new U(me,(()=>Promise.resolve().then((()=>me))));class Se extends H{constructor(){super(...arguments),this.output=L.Color,this.hasSlicePlane=!1,this.hasVertexColors=!1,this.transparent=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.hasOccludees=!1}}he([fe({count:L.COUNT})],Se.prototype,"output",void 0),he([fe()],Se.prototype,"hasSlicePlane",void 0),he([fe()],Se.prototype,"hasVertexColors",void 0),he([fe()],Se.prototype,"transparent",void 0),he([fe()],Se.prototype,"draped",void 0),he([fe()],Se.prototype,"stippleEnabled",void 0),he([fe()],Se.prototype,"stippleOffColorEnabled",void 0),he([fe()],Se.prototype,"stipplePreferContinuous",void 0),he([fe()],Se.prototype,"hasOccludees",void 0),he([fe({constValue:!1})],Se.prototype,"stippleRequiresClamp",void 0),he([fe({constValue:!1})],Se.prototype,"stippleScaleWithLineWidth",void 0),he([fe({constValue:!1})],Se.prototype,"stippleRequiresStretchMeasure",void 0);const Pe=e.getLogger("esri.views.3d.webgl-engine.materials.NativeLineMaterial");var ve;!function(e){e[e.START=0]="START",e[e.END=1]="END"}(ve||(ve={}));class xe extends Q{constructor(e){super(e,new ye),this._techniqueConfig=new Se}getConfiguration(e,s){this._techniqueConfig.output=e,this._techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this._techniqueConfig.hasVertexColors=this.parameters.hasVertexColors,this._techniqueConfig.transparent=this.parameters.color[3]<1||this.parameters.width<1,this._techniqueConfig.draped=s.slot===Y.DRAPED_MATERIAL;const i=t(this.parameters.stipplePattern);return this._techniqueConfig.stippleEnabled=i,this._techniqueConfig.stippleOffColorEnabled=i&&t(this.parameters.stippleOffColor),this._techniqueConfig.hasOccludees=this.parameters.hasOccludees,this._techniqueConfig.stipplePreferContinuous=this.parameters.stipplePreferContinuous,this._techniqueConfig}intersect(e,s,i,r,o,a,n,l,p){t(p)?J(e,r,p,a,1,n):this._intersectLineGeometry(e,s,i,r,n)}_intersectLineGeometry(e,t,s,i,h){if(!i.options.selectionMode||re(t))return;if(!Z(s))return void Pe.error("intersection assumes a translation-only matrix");const f=e.vertexAttributes.get(ee.POSITION).data,m=i.camera,S=Ie;r(S,i.point),o(Ve[0],S[0]-2,S[1]+2,0),o(Ve[1],S[0]+2,S[1]+2,0),o(Ve[2],S[0]+2,S[1]-2,0),o(Ve[3],S[0]-2,S[1]-2,0);for(let e=0;e<4;e++)if(!m.unprojectFromRenderScreen(Ve[e],Ue[e]))return;T(m.eye,Ue[0],Ue[1],De),T(m.eye,Ue[1],Ue[2],Be),T(m.eye,Ue[2],Ue[3],ze),T(m.eye,Ue[3],Ue[0],qe);let C=Number.MAX_VALUE,A=0;for(let e=0;e<f.length-5;e+=3){if(Oe[0]=f[e]+s[12],Oe[1]=f[e+1]+s[13],Oe[2]=f[e+2]+s[14],Ae[0]=f[e+3]+s[12],Ae[1]=f[e+4]+s[13],Ae[2]=f[e+5]+s[14],y(De,Oe)<0&&y(De,Ae)<0||y(Be,Oe)<0&&y(Be,Ae)<0||y(ze,Oe)<0&&y(ze,Ae)<0||y(qe,Oe)<0&&y(qe,Ae)<0)continue;if(m.projectToRenderScreen(Oe,be),m.projectToRenderScreen(Ae,we),be[2]<0&&we[2]>0){a(_e,Oe,Ae);const e=m.frustum,t=-y(e[g.NEAR],Oe)/n(_e,O(e[g.NEAR]));l(_e,_e,t),p(Oe,Oe,_e),m.projectToRenderScreen(Oe,be)}else if(be[2]>0&&we[2]<0){a(_e,Ae,Oe);const e=m.frustum,t=-y(e[g.NEAR],Ae)/n(_e,O(e[g.NEAR]));l(_e,_e,t),p(Ae,Ae,_e),m.projectToRenderScreen(Ae,we)}else if(be[2]<0&&we[2]<0)continue;be[2]=0,we[2]=0;const t=P(v(be,we,Le),S);t<C&&(C=t,c(je,Oe),c(Ee,Ae),A=e/3)}const _=i.rayBegin,R=i.rayEnd;if(C<4){let e=Number.MAX_VALUE;if(x(v(je,Ee,Le),v(_,R,Ne),Re)){a(Re,Re,_);const t=u(Re);l(Re,Re,1/t),e=t/d(_,R)}h(e,Re,A,!1)}}computeAttachmentOrigin(e,t){const s=e.vertexAttributes;if(!s)return!1;const i=s.get(ee.POSITION);return G(i,null,!1,t)}requiresSlot(e){return e===Y.OPAQUE_MATERIAL||e===Y.DRAPED_MATERIAL}createGLMaterial(e){return e.output===L.Color||e.output===L.Highlight?new Ce(e):null}createBufferWriter(){const e=this.parameters.hasVertexColors?te:se;return s(this.parameters.stipplePattern)?new ie(e):new Te(e.clone().vec3f(ee.AUXPOS1).vec2f(ee.UV0))}}class Ce extends F{_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output===L.Color&&this._updateOccludeeState(e),this.ensureTechnique(ge,e)}}class Te{constructor(e){this.vertexBufferLayout=e}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(ee.POSITION).length}write(e,t,s,i){X(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,s,i),this._writeAuxpos1(e,t,s,i),this._writeUV0(e,t,s,i)}_writeAuxpos1(e,t,s,i){const r=s.getField(ee.AUXPOS1,A),o=t.indices.get(ee.POSITION),a=t.vertexAttributes.get(ee.POSITION).data,n=e.transformation,l=r.typedBufferStride,p=r.typedBuffer;i*=l;for(let e=0;e<o.length-1;e+=2)for(const t of[1,0]){const s=3*o[e+t],r=a[s],c=a[s+1],u=a[s+2],d=n[0]*r+n[4]*c+n[8]*u+n[12],h=n[1]*r+n[5]*c+n[9]*u+n[13],f=n[2]*r+n[6]*c+n[10]*u+n[14];p[i]=d,p[i+1]=h,p[i+2]=f,i+=l}}_writeUV0(e,t,s,i){const r=s.getField(ee.UV0,_),a=t.indices.get(ee.POSITION),n=t.vertexAttributes.get(ee.POSITION).data,l=t.vertexAttributes.get(ee.DISTANCETOSTART)?.data,p=e.transformation,u=r.typedBufferStride,f=r.typedBuffer;let m=0;f[i*=u]=ve.START,f[i+1]=m,i+=u;const g=3*a[0],S=o(Oe,n[g],n[g+1],n[g+2]);p&&h(S,S,p);const P=Ae,v=a.length-1;let x=1;const C=l?(e,t,s)=>m=l[s]:(e,t,s)=>m+=d(e,t);for(let e=1;e<v;e+=2){const t=3*a[e];o(P,n[t],n[t+1],n[t+2]),p&&h(P,P,p),C(S,P,x++);for(let e=0;e<2;++e)f[i]=1-e,f[i+1]=m,i+=u;c(S,P)}const T=3*a[v];o(P,n[T],n[T+1],n[T+2]),p&&h(P,P,p),C(S,P,x),f[i]=ve.END,f[i+1]=m}}class ye extends K{constructor(){super(...arguments),this.color=m,this.hasVertexColors=!1,this.hasSlicePlane=!1,this.width=1,this.stipplePreferContinuous=!0,this.hasOccludees=!1}}const Oe=f(),Ae=f(),_e=f(),Re=f(),be=i(),we=i(),je=f(),Ee=f(),Le=S(),Ne=S(),Ie=f(),Ve=[i(),i(),i(),i()],Ue=[f(),f(),f(),f()],De=C(),Be=C(),ze=C(),qe=C();export{xe as N};
