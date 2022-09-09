// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../core/maybe ../../../core/unitUtils ../../../chunks/mat3f64 ../../../chunks/mat4 ../../../chunks/mat4f64 ../../../chunks/mat3 ../../projection ../../projectionEllipsoid ../MeshTransform ../buffer/BufferView ../../../chunks/vec32 ./geographicUtils ./projection".split(" "),function(n,l,u,I,z,A,B,J,K,L,k,p,r,m){function v(b,a,c){if(r.isGeographicMesh(a.spatialReference,c)){var e=a.spatialReference,f=C(a,c,w);c=new Float64Array(b.position.length);var d=b.position,g=f;a=e;var h=
c;p.transformMat4(k.BufferViewVec3f64.fromTypedArray(h),k.BufferViewVec3f64.fromTypedArray(d),g);d=new Float64Array(d.length);a=m.projectFromPCPF(h,d,a);f=B.normalFromMat4(D,f);h=c;d=b.normal;g=f;var t=e;if(l.isNone(d))h=null;else{var q=new Float32Array(d.length);p.transformMat3(k.BufferViewVec3f.fromTypedArray(q),k.BufferViewVec3f.fromTypedArray(d),g);m.projectNormalFromPCPF(q,a,h,t,q);h=q}b=b.tangent;if(l.isNone(b))b=null;else{d=new Float32Array(b.length);p.transformMat3(k.BufferViewVec3f.fromTypedArray(d,
4*Float32Array.BYTES_PER_ELEMENT),k.BufferViewVec3f.fromTypedArray(b,4*Float32Array.BYTES_PER_ELEMENT),f);for(f=3;f<d.length;f+=4)d[f]=b[f];m.projectTangentFromPCPF(d,a,c,e,d);b=d}b={position:a,normal:h,tangent:b}}else{{e=new Float64Array(b.position.length);f=b.position;h=a.x;d=a.y;g=a.z||0;const {horizontal:E,vertical:M}=x(c?c.unit:null,a.spatialReference);for(a=0;a<f.length;a+=3)e[a+0]=f[a+0]*E+h,e[a+1]=f[a+1]*E+d,e[a+2]=f[a+2]*M+g;b={position:e,normal:b.normal,tangent:b.tangent}}}return b}function F(b,
a,c){const {position:e,normal:f,tangent:d}=b;if(l.isNone(a))return{position:e,normal:f,tangent:d};var g=a.localMatrix;b=m.transformPosition(e,new Float64Array(e.length),g);const h=l.isSome(f)?m.transformNormal(f,new Float32Array(f.length),g):null;g=l.isSome(d)?m.transformTangent(d,new Float32Array(d.length),g):null;return v({position:b,normal:h,tangent:g},a.getOriginPoint(c),{geographic:a.geographic})}function G(b,a,c){return r.isGeographicMesh(a.spatialReference,c)?H(b,a,c):y(b,a,c)}function y(b,
a,c){const e=new Float64Array(b.position.length),f=b.position,d=a.x,g=a.y,h=a.z||0,{horizontal:t,vertical:q}=x(c?c.unit:null,a.spatialReference);for(a=0;a<f.length;a+=3)e[a+0]=(f[a+0]-d)/t,e[a+1]=(f[a+1]-g)/t,e[a+2]=(f[a+2]-h)/q;return{position:e,normal:b.normal,tangent:b.tangent}}function H(b,a,c){var e=a.spatialReference;C(a,c,w);var f=z.invert(N,w);a=new Float64Array(b.position.length);var d=m.projectToPCPF(b.position,e,a);c=k.BufferViewVec3f64.fromTypedArray(d);d=new Float64Array(d.length);var g=
k.BufferViewVec3f64.fromTypedArray(d);p.transformMat4(g,c,f);c=d;f=B.normalFromMat4(D,f);d=b.normal;g=b.position;l.isNone(d)?d=null:(d=m.projectNormalToPCPF(d,g,a,e,new Float32Array(d.length)),g=k.BufferViewVec3f.fromTypedArray(d),p.transformMat3(g,g,f));g=b.tangent;b=b.position;l.isNone(g)?e=null:(e=m.projectTangentToPCPF(g,b,a,e,new Float32Array(g.length)),b=k.BufferViewVec3f.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),p.transformMat3(b,b,f));return{position:c,normal:d,tangent:e}}function C(b,
a,c){J.computeTranslationToOriginAndRotation(b.spatialReference,[b.x,b.y,b.z||0],c,K.getSphericalPCPF(b.spatialReference));const {horizontal:e,vertical:f}=x(a?a.unit:null,b.spatialReference);z.scale(c,c,[e,e,f]);return c}function x(b,a){if(l.isNone(b))return O;const c=a.isGeographic?1:u.getMetersPerUnitForSR(a);a=a.isGeographic?1:u.getMetersPerVerticalUnitForSR(a);b=u.convertUnit(1,b,"meters");return{horizontal:b*c,vertical:b*a}}const w=A.create(),N=A.create(),D=I.create(),O={horizontal:1,vertical:1};
n.georeference=v;n.georeferenceApplyTransform=F;n.georeferenceByTransform=function(b,a,c){if(null!=c&&c.useTransform){var e;const {position:f,normal:d,tangent:g}=b;return{vertexAttributes:{position:f,normal:d,tangent:g},transform:new L({origin:[a.x,a.y,null!=(e=a.z)?e:0],geographic:r.isGeographicMesh(a.spatialReference,c)})}}return{vertexAttributes:v(b,a,c),transform:null}};n.ungeoreference=G;n.ungeoreferenceByTransform=function(b,a,c,e){if(l.isNone(a))return G(b,c,e);b=F(b,a,c.spatialReference);
return c.equals(a.getOriginPoint(c.spatialReference))?y(b,c,e):r.isGeographicMesh(c.spatialReference,e)?H(b,c,e):y(b,c,e)};Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});