/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{E as a}from"./common.js";function t(a,t){return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=t[11],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a}function s(a,t,s,n,h,M,r,o,u,b,c,e,i,f,m,x,l){return a[0]=t,a[1]=s,a[2]=n,a[3]=h,a[4]=M,a[5]=r,a[6]=o,a[7]=u,a[8]=b,a[9]=c,a[10]=e,a[11]=i,a[12]=f,a[13]=m,a[14]=x,a[15]=l,a}function n(a){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function h(a,t){if(a===t){const s=t[1],n=t[2],h=t[3],M=t[6],r=t[7],o=t[11];a[1]=t[4],a[2]=t[8],a[3]=t[12],a[4]=s,a[6]=t[9],a[7]=t[13],a[8]=n,a[9]=M,a[11]=t[14],a[12]=h,a[13]=r,a[14]=o}else a[0]=t[0],a[1]=t[4],a[2]=t[8],a[3]=t[12],a[4]=t[1],a[5]=t[5],a[6]=t[9],a[7]=t[13],a[8]=t[2],a[9]=t[6],a[10]=t[10],a[11]=t[14],a[12]=t[3],a[13]=t[7],a[14]=t[11],a[15]=t[15];return a}function M(a,t){const s=t[0],n=t[1],h=t[2],M=t[3],r=t[4],o=t[5],u=t[6],b=t[7],c=t[8],e=t[9],i=t[10],f=t[11],m=t[12],x=t[13],l=t[14],q=t[15],p=s*o-n*r,j=s*u-h*r,d=s*b-M*r,g=n*u-h*o,k=n*b-M*o,v=h*b-M*u,w=c*x-e*m,y=c*l-i*m,z=c*q-f*m,A=e*l-i*x,E=e*q-f*x,B=i*q-f*l;let C=p*B-j*E+d*A+g*z-k*y+v*w;return C?(C=1/C,a[0]=(o*B-u*E+b*A)*C,a[1]=(h*E-n*B-M*A)*C,a[2]=(x*v-l*k+q*g)*C,a[3]=(i*k-e*v-f*g)*C,a[4]=(u*z-r*B-b*y)*C,a[5]=(s*B-h*z+M*y)*C,a[6]=(l*d-m*v-q*j)*C,a[7]=(c*v-i*d+f*j)*C,a[8]=(r*E-o*z+b*w)*C,a[9]=(n*z-s*E-M*w)*C,a[10]=(m*k-x*d+q*p)*C,a[11]=(e*d-c*k-f*p)*C,a[12]=(o*y-r*A-u*w)*C,a[13]=(s*A-n*y+h*w)*C,a[14]=(x*j-m*g-l*p)*C,a[15]=(c*g-e*j+i*p)*C,a):null}function r(a,t,s){const n=t[0],h=t[1],M=t[2],r=t[3],o=t[4],u=t[5],b=t[6],c=t[7],e=t[8],i=t[9],f=t[10],m=t[11],x=t[12],l=t[13],q=t[14],p=t[15];let j=s[0],d=s[1],g=s[2],k=s[3];return a[0]=j*n+d*o+g*e+k*x,a[1]=j*h+d*u+g*i+k*l,a[2]=j*M+d*b+g*f+k*q,a[3]=j*r+d*c+g*m+k*p,j=s[4],d=s[5],g=s[6],k=s[7],a[4]=j*n+d*o+g*e+k*x,a[5]=j*h+d*u+g*i+k*l,a[6]=j*M+d*b+g*f+k*q,a[7]=j*r+d*c+g*m+k*p,j=s[8],d=s[9],g=s[10],k=s[11],a[8]=j*n+d*o+g*e+k*x,a[9]=j*h+d*u+g*i+k*l,a[10]=j*M+d*b+g*f+k*q,a[11]=j*r+d*c+g*m+k*p,j=s[12],d=s[13],g=s[14],k=s[15],a[12]=j*n+d*o+g*e+k*x,a[13]=j*h+d*u+g*i+k*l,a[14]=j*M+d*b+g*f+k*q,a[15]=j*r+d*c+g*m+k*p,a}function o(a,t,s){const n=s[0],h=s[1],M=s[2];if(t===a)a[12]=t[0]*n+t[4]*h+t[8]*M+t[12],a[13]=t[1]*n+t[5]*h+t[9]*M+t[13],a[14]=t[2]*n+t[6]*h+t[10]*M+t[14],a[15]=t[3]*n+t[7]*h+t[11]*M+t[15];else{const s=t[0],r=t[1],o=t[2],u=t[3],b=t[4],c=t[5],e=t[6],i=t[7],f=t[8],m=t[9],x=t[10],l=t[11];a[0]=s,a[1]=r,a[2]=o,a[3]=u,a[4]=b,a[5]=c,a[6]=e,a[7]=i,a[8]=f,a[9]=m,a[10]=x,a[11]=l,a[12]=s*n+b*h+f*M+t[12],a[13]=r*n+c*h+m*M+t[13],a[14]=o*n+e*h+x*M+t[14],a[15]=u*n+i*h+l*M+t[15]}return a}function u(a,t,s){const n=s[0],h=s[1],M=s[2];return a[0]=t[0]*n,a[1]=t[1]*n,a[2]=t[2]*n,a[3]=t[3]*n,a[4]=t[4]*h,a[5]=t[5]*h,a[6]=t[6]*h,a[7]=t[7]*h,a[8]=t[8]*M,a[9]=t[9]*M,a[10]=t[10]*M,a[11]=t[11]*M,a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a}function b(t,s,n,h){let M,r,o,u,b,c,e,i,f,m,x,l,q,p,j,d,g,k,v,w,y,z,A,E,B=h[0],C=h[1],D=h[2],F=Math.sqrt(B*B+C*C+D*D);return F<a?null:(F=1/F,B*=F,C*=F,D*=F,M=Math.sin(n),r=Math.cos(n),o=1-r,u=s[0],b=s[1],c=s[2],e=s[3],i=s[4],f=s[5],m=s[6],x=s[7],l=s[8],q=s[9],p=s[10],j=s[11],d=B*B*o+r,g=C*B*o+D*M,k=D*B*o-C*M,v=B*C*o-D*M,w=C*C*o+r,y=D*C*o+B*M,z=B*D*o+C*M,A=C*D*o-B*M,E=D*D*o+r,t[0]=u*d+i*g+l*k,t[1]=b*d+f*g+q*k,t[2]=c*d+m*g+p*k,t[3]=e*d+x*g+j*k,t[4]=u*v+i*w+l*y,t[5]=b*v+f*w+q*y,t[6]=c*v+m*w+p*y,t[7]=e*v+x*w+j*y,t[8]=u*z+i*A+l*E,t[9]=b*z+f*A+q*E,t[10]=c*z+m*A+p*E,t[11]=e*z+x*A+j*E,s!==t&&(t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15]),t)}function c(a,t,s){const n=Math.sin(s),h=Math.cos(s),M=t[4],r=t[5],o=t[6],u=t[7],b=t[8],c=t[9],e=t[10],i=t[11];return t!==a&&(a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]),a[4]=M*h+b*n,a[5]=r*h+c*n,a[6]=o*h+e*n,a[7]=u*h+i*n,a[8]=b*h-M*n,a[9]=c*h-r*n,a[10]=e*h-o*n,a[11]=i*h-u*n,a}function e(a,t,s){const n=Math.sin(s),h=Math.cos(s),M=t[0],r=t[1],o=t[2],u=t[3],b=t[8],c=t[9],e=t[10],i=t[11];return t!==a&&(a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]),a[0]=M*h-b*n,a[1]=r*h-c*n,a[2]=o*h-e*n,a[3]=u*h-i*n,a[8]=M*n+b*h,a[9]=r*n+c*h,a[10]=o*n+e*h,a[11]=u*n+i*h,a}function i(a,t,s){const n=Math.sin(s),h=Math.cos(s),M=t[0],r=t[1],o=t[2],u=t[3],b=t[4],c=t[5],e=t[6],i=t[7];return t!==a&&(a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=t[11],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]),a[0]=M*h+b*n,a[1]=r*h+c*n,a[2]=o*h+e*n,a[3]=u*h+i*n,a[4]=b*h-M*n,a[5]=c*h-r*n,a[6]=e*h-o*n,a[7]=i*h-u*n,a}function f(a,t){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=t[0],a[13]=t[1],a[14]=t[2],a[15]=1,a}function m(a,t){return a[0]=t[0],a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=t[1],a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=t[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function x(t,s,n){let h,M,r,o=n[0],u=n[1],b=n[2],c=Math.sqrt(o*o+u*u+b*b);return c<a?null:(c=1/c,o*=c,u*=c,b*=c,h=Math.sin(s),M=Math.cos(s),r=1-M,t[0]=o*o*r+M,t[1]=u*o*r+b*h,t[2]=b*o*r-u*h,t[3]=0,t[4]=o*u*r-b*h,t[5]=u*u*r+M,t[6]=b*u*r+o*h,t[7]=0,t[8]=o*b*r+u*h,t[9]=u*b*r-o*h,t[10]=b*b*r+M,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function l(a,t){const s=Math.sin(t),n=Math.cos(t);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=n,a[6]=s,a[7]=0,a[8]=0,a[9]=-s,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function q(a,t){const s=Math.sin(t),n=Math.cos(t);return a[0]=n,a[1]=s,a[2]=0,a[3]=0,a[4]=-s,a[5]=n,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function p(a,t){return a[0]=t[12],a[1]=t[13],a[2]=t[14],a}function j(a,t){const s=t[0],n=t[1],h=t[2],M=t[4],r=t[5],o=t[6],u=t[8],b=t[9],c=t[10];return a[0]=Math.sqrt(s*s+n*n+h*h),a[1]=Math.sqrt(M*M+r*r+o*o),a[2]=Math.sqrt(u*u+b*b+c*c),a}function d(a,t){const s=t[0],n=t[1],h=t[2],M=t[3],r=s+s,o=n+n,u=h+h,b=s*r,c=n*r,e=n*o,i=h*r,f=h*o,m=h*u,x=M*r,l=M*o,q=M*u;return a[0]=1-e-m,a[1]=c+q,a[2]=i-l,a[3]=0,a[4]=c-q,a[5]=1-b-m,a[6]=f+x,a[7]=0,a[8]=i+l,a[9]=f-x,a[10]=1-b-e,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function g(a,t,s,n,h,M,r){const o=1/(s-t),u=1/(h-n),b=1/(M-r);return a[0]=2*M*o,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2*M*u,a[6]=0,a[7]=0,a[8]=(s+t)*o,a[9]=(h+n)*u,a[10]=(r+M)*b,a[11]=-1,a[12]=0,a[13]=0,a[14]=r*M*2*b,a[15]=0,a}function k(a,t,s,n,h,M,r){const o=1/(t-s),u=1/(n-h),b=1/(M-r);return a[0]=-2*o,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=-2*u,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2*b,a[11]=0,a[12]=(t+s)*o,a[13]=(h+n)*u,a[14]=(r+M)*b,a[15]=1,a}function v(t,s,h,M){let r,o,u,b,c,e,i,f,m,x;const l=s[0],q=s[1],p=s[2],j=M[0],d=M[1],g=M[2],k=h[0],v=h[1],w=h[2];return Math.abs(l-k)<a&&Math.abs(q-v)<a&&Math.abs(p-w)<a?n(t):(i=l-k,f=q-v,m=p-w,x=1/Math.sqrt(i*i+f*f+m*m),i*=x,f*=x,m*=x,r=d*m-g*f,o=g*i-j*m,u=j*f-d*i,x=Math.sqrt(r*r+o*o+u*u),x?(x=1/x,r*=x,o*=x,u*=x):(r=0,o=0,u=0),b=f*u-m*o,c=m*r-i*u,e=i*o-f*r,x=Math.sqrt(b*b+c*c+e*e),x?(x=1/x,b*=x,c*=x,e*=x):(b=0,c=0,e=0),t[0]=r,t[1]=b,t[2]=i,t[3]=0,t[4]=o,t[5]=c,t[6]=f,t[7]=0,t[8]=u,t[9]=e,t[10]=m,t[11]=0,t[12]=-(r*l+o*q+u*p),t[13]=-(b*l+c*q+e*p),t[14]=-(i*l+f*q+m*p),t[15]=1,t)}function w(a,t,s,n){const h=t[0],M=t[1],r=t[2],o=n[0],u=n[1],b=n[2];let c=h-s[0],e=M-s[1],i=r-s[2],f=c*c+e*e+i*i;f>0&&(f=1/Math.sqrt(f),c*=f,e*=f,i*=f);let m=u*i-b*e,x=b*c-o*i,l=o*e-u*c;return f=m*m+x*x+l*l,f>0&&(f=1/Math.sqrt(f),m*=f,x*=f,l*=f),a[0]=m,a[1]=x,a[2]=l,a[3]=0,a[4]=e*l-i*x,a[5]=i*m-c*l,a[6]=c*x-e*m,a[7]=0,a[8]=c,a[9]=e,a[10]=i,a[11]=0,a[12]=h,a[13]=M,a[14]=r,a[15]=1,a}function y(a,t){return a[0]===t[0]&&a[1]===t[1]&&a[2]===t[2]&&a[3]===t[3]&&a[4]===t[4]&&a[5]===t[5]&&a[6]===t[6]&&a[7]===t[7]&&a[8]===t[8]&&a[9]===t[9]&&a[10]===t[10]&&a[11]===t[11]&&a[12]===t[12]&&a[13]===t[13]&&a[14]===t[14]&&a[15]===t[15]}function z(t,s){if(t===s)return!0;const n=t[0],h=t[1],M=t[2],r=t[3],o=t[4],u=t[5],b=t[6],c=t[7],e=t[8],i=t[9],f=t[10],m=t[11],x=t[12],l=t[13],q=t[14],p=t[15],j=s[0],d=s[1],g=s[2],k=s[3],v=s[4],w=s[5],y=s[6],z=s[7],A=s[8],E=s[9],B=s[10],C=s[11],D=s[12],F=s[13],G=s[14],H=s[15];return Math.abs(n-j)<=a*Math.max(1,Math.abs(n),Math.abs(j))&&Math.abs(h-d)<=a*Math.max(1,Math.abs(h),Math.abs(d))&&Math.abs(M-g)<=a*Math.max(1,Math.abs(M),Math.abs(g))&&Math.abs(r-k)<=a*Math.max(1,Math.abs(r),Math.abs(k))&&Math.abs(o-v)<=a*Math.max(1,Math.abs(o),Math.abs(v))&&Math.abs(u-w)<=a*Math.max(1,Math.abs(u),Math.abs(w))&&Math.abs(b-y)<=a*Math.max(1,Math.abs(b),Math.abs(y))&&Math.abs(c-z)<=a*Math.max(1,Math.abs(c),Math.abs(z))&&Math.abs(e-A)<=a*Math.max(1,Math.abs(e),Math.abs(A))&&Math.abs(i-E)<=a*Math.max(1,Math.abs(i),Math.abs(E))&&Math.abs(f-B)<=a*Math.max(1,Math.abs(f),Math.abs(B))&&Math.abs(m-C)<=a*Math.max(1,Math.abs(m),Math.abs(C))&&Math.abs(x-D)<=a*Math.max(1,Math.abs(x),Math.abs(D))&&Math.abs(l-F)<=a*Math.max(1,Math.abs(l),Math.abs(F))&&Math.abs(q-G)<=a*Math.max(1,Math.abs(q),Math.abs(G))&&Math.abs(p-H)<=a*Math.max(1,Math.abs(p),Math.abs(H))}function A(t){const s=a,n=t[0],h=t[1],M=t[2],r=t[4],o=t[5],u=t[6],b=t[8],c=t[9],e=t[10];return Math.abs(1-(n*n+r*r+b*b))<=s&&Math.abs(1-(h*h+o*o+c*c))<=s&&Math.abs(1-(M*M+u*u+e*e))<=s}export{l as A,q as a,u as b,t as c,i as d,o as e,f,d as g,x as h,n as i,M as j,A as k,v as l,r as m,e as n,k as o,g as p,m as q,c as r,s,h as t,b as u,z as v,y as w,p as x,j as y,w as z};
