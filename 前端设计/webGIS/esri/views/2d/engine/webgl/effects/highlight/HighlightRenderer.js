// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../definitions ./parameters ../../shaders/HighlightPrograms ../../../../../webgl/BufferObject ../../../../../webgl/enums ../../../../../webgl/ProgramTemplate ../../../../../webgl/VertexArrayObject ../../../../../webgl/VertexElementDescriptor".split(" "),function(e,h,l,q,c,m,r,n){return function(){function p(){this._height=this._width=void 0;this._resources=null}var f=p.prototype;f.dispose=function(){this._resources&&(this._resources.quadGeometry.dispose(),this._resources.quadVAO.dispose(),
this._resources.highlightProgram.dispose(),this._resources.blurProgram.dispose(),this._resources=null)};f.preBlur=function(a,b){a.bindTexture(b,e.TEXTURE_BINDING_HIGHLIGHT_0);a.useProgram(this._resources.blurProgram);this._resources.blurProgram.setUniform4fv("u_direction",[1,0,1/this._width,0]);this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",h.ALPHA_TO_RGBA_CHANNEL_SELECTOR_MATRIX);a.bindVAO(this._resources.quadVAO);a.drawArrays(c.PrimitiveType.TRIANGLE_STRIP,0,4);a.bindVAO()};
f.finalBlur=function(a,b){a.bindTexture(b,e.TEXTURE_BINDING_HIGHLIGHT_0);a.useProgram(this._resources.blurProgram);this._resources.blurProgram.setUniform4fv("u_direction",[0,1,0,1/this._height]);this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",h.RGBA_TO_RGBA_CHANNEL_SELECTOR_MATRIX);a.bindVAO(this._resources.quadVAO);a.drawArrays(c.PrimitiveType.TRIANGLE_STRIP,0,4);a.bindVAO()};f.renderHighlight=function(a,b,d){a.bindTexture(b,e.TEXTURE_BINDING_HIGHLIGHT_0);a.useProgram(this._resources.highlightProgram);
d.applyHighlightOptions(a,this._resources.highlightProgram);a.bindVAO(this._resources.quadVAO);a.setBlendingEnabled(!0);a.setBlendFunction(c.BlendFactor.ONE,c.BlendFactor.ONE_MINUS_SRC_ALPHA);a.drawArrays(c.PrimitiveType.TRIANGLE_STRIP,0,4);a.bindVAO()};f._initialize=function(a,b,d){this._width=b;this._height=d;b=q.BufferObject.createVertex(a,c.Usage.STATIC_DRAW,(new Int8Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1])).buffer);d=new r.VertexArrayObject(a,new Map([["a_position",0],["a_texcoord",1]]),
{geometry:[new n.VertexElementDescriptor("a_position",2,c.DataType.BYTE,0,4),new n.VertexElementDescriptor("a_texcoord",2,c.DataType.UNSIGNED_BYTE,2,4)]},{geometry:b});const g=m.createProgram(a,l.highlight),k=m.createProgram(a,l.blur);a.useProgram(g);g.setUniform1i("u_texture",e.TEXTURE_BINDING_HIGHLIGHT_0);g.setUniform1i("u_shade",e.TEXTURE_BINDING_HIGHLIGHT_1);g.setUniform1f("u_sigma",h.SIGMA);a.useProgram(k);k.setUniform1i("u_texture",e.TEXTURE_BINDING_HIGHLIGHT_0);k.setUniform1f("u_sigma",h.SIGMA);
this._resources={quadGeometry:b,quadVAO:d,highlightProgram:g,blurProgram:k}};f.setup=function(a,b,d){this._resources?(this._width=b,this._height=d):this._initialize(a,b,d)};return p}()});