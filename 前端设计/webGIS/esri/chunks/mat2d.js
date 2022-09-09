// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./common"],function(e,m){function u(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];return a}function v(a){a[0]=1;a[1]=0;a[2]=0;a[3]=1;a[4]=0;a[5]=0;return a}function w(a,b,c,d,f,g,k){a[0]=b;a[1]=c;a[2]=d;a[3]=f;a[4]=g;a[5]=k;return a}function x(a,b){const c=b[0],d=b[1],f=b[2],g=b[3],k=b[4];b=b[5];let h=c*g-d*f;if(!h)return null;h=1/h;a[0]=g*h;a[1]=-d*h;a[2]=-f*h;a[3]=c*h;a[4]=(f*b-g*k)*h;a[5]=(d*k-c*b)*h;return a}function y(a){return a[0]*a[3]-a[1]*a[2]}function r(a,
b,c){const d=b[0],f=b[1],g=b[2],k=b[3],h=b[4];b=b[5];const l=c[0],n=c[1],p=c[2],q=c[3],z=c[4];c=c[5];a[0]=d*l+g*n;a[1]=f*l+k*n;a[2]=d*p+g*q;a[3]=f*p+k*q;a[4]=d*z+g*c+h;a[5]=f*z+k*c+b;return a}function A(a,b,c){const d=b[0],f=b[1],g=b[2],k=b[3],h=b[4];b=b[5];const l=Math.sin(c);c=Math.cos(c);a[0]=d*c+g*l;a[1]=f*c+k*l;a[2]=d*-l+g*c;a[3]=f*-l+k*c;a[4]=h;a[5]=b;return a}function B(a,b,c){const d=b[1],f=b[2],g=b[3],k=b[4],h=b[5],l=c[0];c=c[1];a[0]=b[0]*l;a[1]=d*l;a[2]=f*c;a[3]=g*c;a[4]=k;a[5]=h;return a}
function C(a,b,c){const d=b[0],f=b[1],g=b[2],k=b[3],h=b[4];b=b[5];const l=c[0];c=c[1];a[0]=d;a[1]=f;a[2]=g;a[3]=k;a[4]=d*l+g*c+h;a[5]=f*l+k*c+b;return a}function D(a,b){const c=Math.sin(b);b=Math.cos(b);a[0]=b;a[1]=c;a[2]=-c;a[3]=b;a[4]=0;a[5]=0;return a}function E(a,b){a[0]=b[0];a[1]=0;a[2]=0;a[3]=b[1];a[4]=0;a[5]=0;return a}function F(a,b){a[0]=1;a[1]=0;a[2]=0;a[3]=1;a[4]=b[0];a[5]=b[1];return a}function G(a){return"mat2d("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+")"}function H(a){return Math.sqrt(a[0]**
2+a[1]**2+a[2]**2+a[3]**2+a[4]**2+a[5]**2+1)}function I(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];a[2]=b[2]+c[2];a[3]=b[3]+c[3];a[4]=b[4]+c[4];a[5]=b[5]+c[5];return a}function t(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];a[2]=b[2]-c[2];a[3]=b[3]-c[3];a[4]=b[4]-c[4];a[5]=b[5]-c[5];return a}function J(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;a[2]=b[2]*c;a[3]=b[3]*c;a[4]=b[4]*c;a[5]=b[5]*c;return a}function K(a,b,c,d){a[0]=b[0]+c[0]*d;a[1]=b[1]+c[1]*d;a[2]=b[2]+c[2]*d;a[3]=b[3]+c[3]*d;a[4]=b[4]+c[4]*d;a[5]=b[5]+c[5]*d;return a}
function L(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]&&a[4]===b[4]&&a[5]===b[5]}function M(a,b){const c=a[0],d=a[1],f=a[2],g=a[3],k=a[4];a=a[5];const h=b[0],l=b[1],n=b[2],p=b[3],q=b[4];b=b[5];return Math.abs(c-h)<=m.EPSILON*Math.max(1,Math.abs(c),Math.abs(h))&&Math.abs(d-l)<=m.EPSILON*Math.max(1,Math.abs(d),Math.abs(l))&&Math.abs(f-n)<=m.EPSILON*Math.max(1,Math.abs(f),Math.abs(n))&&Math.abs(g-p)<=m.EPSILON*Math.max(1,Math.abs(g),Math.abs(p))&&Math.abs(k-q)<=m.EPSILON*Math.max(1,
Math.abs(k),Math.abs(q))&&Math.abs(a-b)<=m.EPSILON*Math.max(1,Math.abs(a),Math.abs(b))}const N=Object.freeze(Object.defineProperty({__proto__:null,copy:u,identity:v,set:w,invert:x,determinant:y,multiply:r,rotate:A,scale:B,translate:C,fromRotation:D,fromScaling:E,fromTranslation:F,str:G,frob:H,add:I,subtract:t,multiplyScalar:J,multiplyScalarAndAdd:K,exactEquals:L,equals:M,mul:r,sub:t},Symbol.toStringTag,{value:"Module"}));e.add=I;e.copy=u;e.determinant=y;e.equals=M;e.exactEquals=L;e.frob=H;e.fromRotation=
D;e.fromScaling=E;e.fromTranslation=F;e.identity=v;e.invert=x;e.mat2d=N;e.mul=r;e.multiply=r;e.multiplyScalar=J;e.multiplyScalarAndAdd=K;e.rotate=A;e.scale=B;e.set=w;e.str=G;e.sub=t;e.subtract=t;e.translate=C});