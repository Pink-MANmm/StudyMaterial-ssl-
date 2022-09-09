// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/vec3f64","../../../../chunks/sphere","./Octree"],function(g,k,l,m){function n(c,a=!1){const b=c instanceof m?c.root:c,e={};c instanceof m&&a&&(e.center=k.clone(l.getCenter(c.bounds)),e.size=2*c.halfSize);0<b.terminals.length&&(e.terminals=b.terminals.map(d=>d.id));null!==b.residents&&0<b.residents.length&&(e.residents=b.residents.map(d=>d.id));null===b.residents&&b.children.forEach((d,h)=>{d&&(e["child"+h]=n(d))});return e}function p(c,a,b,e){for(let d=0;3>d;d++)if(c[d]<
a[d]||c[d]>b[d])throw Error("[Octree Validation] Object is not within node bounds");a=.25*(b[0]-a[0]);if(e&&c[3]<a)throw Error("[Octree Validation] Object is too small to be a terminal");if(!e&&c[3]>a)throw Error("[Octree Validation] Object is too large to be a resident");}function q(c,a,b){b[0]=c[0]+a;b[1]=c[1]+a;b[2]=c[2]+a;return b}g.assert=function(c,a){c.forEachNode((b,e,d)=>{const h=q(l.getCenter(e),-d,k.create()),r=q(l.getCenter(e),d,k.create());b.terminals.forAll(f=>p(a(f),h,r,!0));if(null!==
b.residents){if(b.residents.length>c.maximumObjectsPerNode)throw Error("[Octree Validation] Number of objects "+b.residents.length+" exceeds maximum allowed ("+c.maximumObjectsPerNode+")");b.residents.forAll(f=>p(a(f),h,r,!1))}let t=!1;b.children.forEach(f=>{if(f&&(t=!0,null!==b.residents))throw Error("[Octree Validation] Node has residents and children");});if(!t&&(null===b.residents||0===b.residents.length)&&0===b.terminals.length)throw Error("[Octree Validation] dangling empty node");return!0});
return!0};g.debugDump=n;g.stats=function(c){const a={numNodes:0,numObjects:0,numTerminals:0,numResidents:0,numOutsiders:0,numInnerNodes:0,numTerminalNodes:0,maximumDepth:0,maxNumTerminals:0,maxNumResidents:0,maxNumObjects:0};c.forEachNode((b,e,d)=>{null===b.residents?a.numInnerNodes++:a.numTerminalNodes++;a.numTerminals+=b.terminals.length;a.maxNumTerminals=Math.max(b.terminals.length,a.maxNumTerminals);e=b.terminals.length;null!==b.residents&&(a.numResidents+=b.residents.length,a.maxNumResidents=
Math.max(b.residents.length,a.maxNumResidents),e+=b.residents.length);a.maxNumObjects=Math.max(e,a.maxNumObjects);a.maximumDepth=Math.max(a.maximumDepth,Math.round(Math.log(2*c.halfSize/d)*Math.LOG2E));return!0});a.numObjects=a.numOutsiders+a.numTerminals+a.numResidents;a.numNodes=a.numInnerNodes+a.numTerminalNodes;return a};Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});