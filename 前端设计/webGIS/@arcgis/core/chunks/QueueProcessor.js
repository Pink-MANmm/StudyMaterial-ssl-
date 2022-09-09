/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{i as e,a as s}from"./maybe.js";import{onAbort as t,onAbortOrThrow as r,createDeferred as i,isPromiseLike as h,createAbortError as o}from"../core/promiseUtils.js";import{Q as c}from"./Queue.js";import{schedule as n}from"../core/scheduling.js";class u{constructor(e,s){this.item=e,this.controller=s,this.promise=null}}class l{constructor(s){this._deferreds=new Map,this._controllers=new Map,this._processingItems=new Map,this._isPaused=!1,this._schedule=null,this._task=null,this.concurrency=1,s.concurrency&&(this.concurrency=s.concurrency),this._queue=new c(s.peeker),this.process=s.process;const t=s.scheduler;s.priority&&e(t)&&(this._task=t.registerTask(s.priority,this))}destroy(){this.clear(),this._schedule&&(this._schedule.remove(),this._schedule=null),this._task&&(this._task.remove(),this._task=null)}get length(){return this._processingItems.size+this._queue.length}abort(e){const s=this._controllers.get(e);s&&s.abort()}clear(){this._queue.clear();const e=[];this._controllers.forEach((s=>e.push(s))),this._controllers.clear(),e.forEach((e=>e.abort())),this._processingItems.clear(),this._cancelNext()}forEach(e){this._deferreds.forEach(((s,t)=>e(t)))}get(e){const s=this._deferreds.get(e);return s?s.promise:void 0}isOngoing(e){return this._processingItems.has(e)}has(e){return this._deferreds.has(e)}pause(){this._isPaused||(this._isPaused=!0,this._cancelNext())}push(s,h){const c=this.get(s);if(c)return c;const n=new AbortController;let u=null;h&&(u=t(h,(()=>n.abort())));const l=()=>{_.remove(),e(u)&&u.remove(),this._deferreds.delete(s),this._controllers.delete(s),this._queue.remove(s),this._processingItems.delete(s),this._scheduleNext()},_=r(n.signal,(()=>{const e=this._processingItems.get(s);e&&e.controller.abort(),l(),a.reject(o())})),a=i();return this._deferreds.set(s,a),this._controllers.set(s,n),a.promise.then(l,l),this._queue.push(s),this._scheduleNext(),a.promise}last(){return this._queue.last()}peek(){return this._queue.peek()}popLast(){return this._queue.popLast()}reset(){const e=[];this._processingItems.forEach((s=>e.push(s))),this._processingItems.clear();for(const s of e)this._queue.push(s.item),s.controller.abort();this._scheduleNext()}resume(){this._isPaused&&(this._isPaused=!1,this._scheduleNext())}takeAll(){const e=[];for(;this._queue.length;)e.push(this._queue.pop());return this.clear(),e}get running(){return!this._isPaused&&this._queue.length>0&&this._processingItems.size<this.concurrency}runTask(e){for(;!e.done&&this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop()),e.madeProgress()}_scheduleNext(){this._task||this._isPaused||this._schedule||(this._schedule=n((()=>{this._schedule=null,this._next()})))}_next(){for(;this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop())}_cancelNext(){this._schedule&&(this._schedule.remove(),this._schedule=null)}_processResult(e,s){this._canProcessFulfillment(e)&&(this._scheduleNext(),this._deferreds.get(e.item).resolve(s))}_processError(e,s){this._canProcessFulfillment(e)&&(this._scheduleNext(),this._deferreds.get(e.item).reject(s))}_canProcessFulfillment(e){return!!this._deferreds.get(e.item)&&this._processingItems.get(e.item)===e}_process(e){if(s(e))return;let t;const r=new AbortController,i=new u(e,r);this._processingItems.set(e,i);try{t=this.process(e,r.signal)}catch(e){this._processError(i,e)}h(t)?(i.promise=t,t.then((e=>this._processResult(i,e)),(e=>this._processError(i,e)))):this._processResult(i,t)}get test(){return{update:e=>this.runTask(e)}}}export{l as Q};
