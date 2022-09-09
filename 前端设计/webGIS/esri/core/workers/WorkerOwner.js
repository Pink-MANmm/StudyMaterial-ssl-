// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../kernel ../Error ../Logger ../maybe ../promiseUtils ./utils ./workerFactory".split(" "),function(r,v,w,x,t,q,h,y){const z=x.getLogger("esri.core.workers"),{ABORT:u,INVOKE:A,OPEN:B,OPENED:C,RESPONSE:l}=h.MessageType;return function(){function n(a,c){this._outJobs=new Map;this._inJobs=new Map;this.worker=a;this.id=c;a.addEventListener("message",this._onMessage.bind(this));a.addEventListener("error",b=>{b.preventDefault();z.error(b)})}n.create=function(){var a=
r._asyncToGenerator(function*(c){const b=yield y.createWorker();return new n(b,c)});return function(c){return a.apply(this,arguments)}}();var d=n.prototype;d.terminate=function(){this.worker.terminate()};d.open=function(){var a=r._asyncToGenerator(function*(c,b={}){const {signal:m}=b,k=h.newJobId();return new Promise((f,p)=>{const g=q.onAbortOrThrow(m,()=>{this._outJobs.delete(k);this._post({type:u,jobId:k})});this._outJobs.set(k,{resolve:f,reject:p,abortHandle:g});this._post({type:B,jobId:k,modulePath:c})})});
return function(c){return a.apply(this,arguments)}}();d._onMessage=function(a){if(a=h.receiveMessage(a))switch(a.type){case C:this._onOpenedMessage(a);break;case l:this._onResponseMessage(a);break;case u:this._onAbortMessage(a);break;case A:this._onInvokeMessage(a)}};d._onAbortMessage=function(a){const c=this._inJobs;a=a.jobId;const b=c.get(a);b&&(b.controller&&b.controller.abort(),c.delete(a))};d._onInvokeMessage=function(a){const {methodName:c,jobId:b,data:m,abortable:k}=a;a=k?new AbortController:
null;const f=this._inJobs,p=v.workerMessages[c];let g;try{if("function"!==typeof p)throw new TypeError(`${c} is not a function`);g=p.call(null,m,{signal:a?a.signal:null})}catch(e){this._post({type:l,jobId:b,error:h.toInvokeError(e)});return}q.isPromiseLike(g)?(f.set(b,{controller:a,promise:g}),g.then(e=>{f.has(b)&&(f.delete(b),this._post({type:l,jobId:b},e))},e=>{f.has(b)&&(f.delete(b),e||(e={message:"Error encountered at method"+c}),q.isAbortError(e)||this._post({type:l,jobId:b,error:h.toInvokeError(e||
{message:`Error encountered at method ${c}`})}))})):this._post({type:l,jobId:b},g)};d._onOpenedMessage=function(a){const {jobId:c,data:b}=a;if(a=this._outJobs.get(c))this._outJobs.delete(c),t.removeMaybe(a.abortHandle),a.resolve(b)};d._onResponseMessage=function(a){const {jobId:c,error:b,data:m}=a;if(a=this._outJobs.get(c))this._outJobs.delete(c),t.removeMaybe(a.abortHandle),b?a.reject(w.fromJSON(JSON.parse(b))):a.resolve(m)};d._post=function(a,c,b){return h.postMessage(this.worker,a,c,b)};return n}()});