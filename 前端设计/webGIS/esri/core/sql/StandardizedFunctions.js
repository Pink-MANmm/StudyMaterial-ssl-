// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../string"],function(g,k){let l=function(){function a(){this.op="+";this.minute=this.year=this.month=this.hour=this.second=this.day=0}a._fixDefaults=function(b){if(null!==b.precision||null!==b.secondary)throw Error("Primary and Secondary SqlInterval qualifiers not supported");};a.createFromMilliseconds=function(b){const c=new a;c.second=b/1E3;return c};a.createFromValueAndQualifer=function(b,c,f){let e=null;const d=new a;d.op="-"===f?"-":"+";if("interval-period"===c.type){a._fixDefaults(c);
if("year"===c.period||"month"===c.period)throw Error("Year-Month Intervals not supported");if(/^[0-9]{1,}$/.test(b))d[c.period]=parseFloat(b);else throw Error("Illegal Interval");}else{a._fixDefaults(c.start);a._fixDefaults(c.end);if("year"===c.start.period||"month"===c.start.period)throw Error("Year-Month Intervals not supported");if("year"===c.end.period||"month"===c.end.period)throw Error("Year-Month Intervals not supported");switch(c.start.period){case "day":switch(c.end.period){case "hour":e=
/^[0-9]{1,} [0-9]{1,}$/;if(e.test(b))d[c.start.period]=parseFloat(b.split(" ")[0]),d[c.end.period]=parseFloat(b.split(" ")[1]);else throw Error("Illegal Interval");break;case "minute":e=/^[0-9]{1,} [0-9]{1,2}:[0-9]{1,}$/;if(e.test(b))d[c.start.period]=parseFloat(b.split(" ")[0]),b=b.split(" ")[1].split(":"),d.hour=parseFloat(b[0]),d.minute=parseFloat(b[1]);else throw Error("Illegal Interval");break;case "second":e=/^[0-9]{1,} [0-9]{1,2}:[0-9]{1,2}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$/;if(e.test(b))d[c.start.period]=
parseFloat(b.split(" ")[0]),b=b.split(" ")[1].split(":"),d.hour=parseFloat(b[0]),d.minute=parseFloat(b[1]),d.second=parseFloat(b[2]);else throw Error("Illegal Interval");break;default:throw Error("Invalid Interval.");}break;case "hour":switch(c.end.period){case "minute":e=/^[0-9]{1,}:[0-9]{1,}$/;if(e.test(b))d.hour=parseFloat(b.split(":")[0]),d.minute=parseFloat(b.split(":")[1]);else throw Error("Illegal Interval");break;case "second":e=/^[0-9]{1,}:[0-9]{1,2}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$/;if(e.test(b))b=
b.split(":"),d.hour=parseFloat(b[0]),d.minute=parseFloat(b[1]),d.second=parseFloat(b[2]);else throw Error("Illegal Interval");break;default:throw Error("Invalid Interval.");}break;case "minute":switch(c.end.period){case "second":e=/^[0-9]{1,}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$/;if(e.test(b))b=b.split(":"),d.minute=parseFloat(b[0]),d.second=parseFloat(b[1]);else throw Error("Illegal Interval");break;default:throw Error("Invalid Interval.");}break;default:throw Error("Invalid Interval.");}}return d};
a.prototype.valueInMilliseconds=function(){return("-"===this.op?-1:1)*(1E3*this.second+6E4*this.minute+36E5*this.hour+864E5*this.day+365/12*this.month*864E5+31536E6*this.year)};return a}();const h={extract:{minParams:2,maxParams:2,evaluate:([a,b])=>{if(null==b)return null;if(b instanceof Date)switch(a.toUpperCase()){case "SECOND":return b.getSeconds();case "MINUTE":return b.getMinutes();case "HOUR":return b.getHours();case "DAY":return b.getDate();case "MONTH":return b.getMonth()+1;case "YEAR":return b.getFullYear()}throw Error("Invalid Parameter for call to EXTRACT");
}},substring:{minParams:2,maxParams:3,evaluate:a=>{if(2===a.length){const [b,c]=a;return null==b||null==c?null:b.toString().substring(c-1)}if(3===a.length){const [b,c,f]=a;return null==b||null==c||null==f?null:0>=f?"":b.toString().substring(c-1,c+f-1)}}},position:{minParams:2,maxParams:2,evaluate:([a,b])=>null==a||null==b?null:b.indexOf(a)+1},trim:{minParams:2,maxParams:3,evaluate:a=>{var b=3===a.length,c=b?a[1]:" ";b=b?a[2]:a[1];if(null==c||null==b)return null;c=`(${k.escapeRegExpString(c)})`;switch(a[0]){case "BOTH":return b.replace(new RegExp(`^${c}*|${c}*$`,
"g"),"");case "LEADING":return b.replace(new RegExp(`^${c}*`,"g"),"");case "TRAILING":return b.replace(new RegExp(`${c}*$`,"g"),"")}throw Error("Invalid Parameter for call to TRIM");}},abs:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.abs(a[0])},ceiling:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.ceil(a[0])},floor:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.floor(a[0])},log:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.log(a[0])},log10:{minParams:1,
maxParams:1,evaluate:a=>null==a[0]?null:Math.log(a[0])*Math.LOG10E},sin:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.sin(a[0])},cos:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.cos(a[0])},tan:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.tan(a[0])},asin:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.asin(a[0])},acos:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.acos(a[0])},atan:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.atan(a[0])},
sign:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:0<a[0]?1:0>a[1]?-1:0},power:{minParams:2,maxParams:2,evaluate:a=>null==a[0]||null==a[1]?null:a[0]**a[1]},mod:{minParams:2,maxParams:2,evaluate:a=>null==a[0]||null==a[1]?null:a[0]%a[1]},round:{minParams:1,maxParams:2,evaluate:a=>{const b=a[0];a=2===a.length?10**a[1]:1;return null==b?null:Math.round(b*a)/a}},truncate:{minParams:1,maxParams:2,evaluate:a=>null==a[0]?null:1===a.length?parseInt(a[0].toFixed(0),10):parseFloat(a[0].toFixed(a[1]))},
char_length:{minParams:1,maxParams:1,evaluate:a=>"string"===typeof a[0]||a[0]instanceof String?a[0].length:0},concat:{minParams:1,maxParams:Infinity,evaluate:a=>{let b="";for(let c=0;c<a.length;c++){if(null==a[c])return null;b+=a[c].toString()}return b}},lower:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:a[0].toString().toLowerCase()},upper:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:a[0].toString().toUpperCase()}};g.SqlInterval=l;g.evaluateFunction=function(a,b){const c=h[a.toLowerCase()];
if(null==c)throw Error("Function Not Recognised");if(b.length<c.minParams||b.length>c.maxParams)throw Error(`Invalid Parameter count for call to ${a.toUpperCase()}`);return c.evaluate(b)};g.isStandardized=function(a,b){a=h[a.toLowerCase()];return null!=a&&b>=a.minParams&&b<=a.maxParams};Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});