/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{p as t,H as e,c as n,h as i,F as a}from"../widgets/Widget.js";import{g as o,t as s,f as l}from"./dom.js";import{g as c}from"./guid.js";import{c as r}from"./observers.js";import{c as m,d as u}from"./conditionalSlot.js";import{d}from"./action.js";import{d as p}from"./icon.js";import{d as h}from"./loader.js";import{d as f}from"./popover2.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */function g(t,e){return(t+e)%e}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */const v={tooltip:"tooltip",trigger:"trigger"},b=["ArrowUp","ArrowDown"],x=["ArrowUp","ArrowDown","End","Home"],y=t(class extends e{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionMenuOpenChange=n(this,"calciteActionMenuOpenChange",7),this.expanded=!1,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.actionElements=[],this.mutationObserver=r("mutation",(()=>this.getActions())),this.guid=`calcite-action-menu-${c()}`,this.menuId=`${this.guid}-menu`,this.menuButtonId=`${this.guid}-menu-button`,this.activeMenuItemIndex=-1,this.connectMenuButtonEl=()=>{const{el:t,menuButtonId:e,menuId:n,open:i,label:a}=this,l=o(t,v.trigger)||this.defaultMenuButtonEl;this.menuButtonEl!==l&&(this.disconnectMenuButtonEl(),this.menuButtonEl=l,this.setTooltipReferenceElement(),l&&(l.active=i,l.setAttribute("aria-controls",n),l.setAttribute("aria-expanded",s(i)),l.setAttribute("aria-haspopup","true"),l.id||(l.id=e),l.label||(l.label=a),l.text||(l.text=a),l.addEventListener("click",this.menuButtonClick),l.addEventListener("keydown",this.menuButtonKeyDown),l.addEventListener("keyup",this.menuButtonKeyUp)))},this.disconnectMenuButtonEl=()=>{const{menuButtonEl:t}=this;t&&(t.removeEventListener("click",this.menuButtonClick),t.removeEventListener("keydown",this.menuButtonKeyDown),t.removeEventListener("keyup",this.menuButtonKeyUp))},this.setDefaultMenuButtonEl=t=>{this.defaultMenuButtonEl=t,this.connectMenuButtonEl()},this.handleCalciteActionClick=()=>{this.open=!1,this.setFocus()},this.menuButtonClick=()=>{this.toggleOpen()},this.updateTooltip=t=>{const e=t.target.assignedElements({flatten:!0}).filter((t=>null==t?void 0:t.matches("calcite-tooltip")));this.tooltipEl=e[0],this.setTooltipReferenceElement()},this.setTooltipReferenceElement=()=>{const{tooltipEl:t,expanded:e,menuButtonEl:n}=this;t&&(t.referenceElement=e?null:n)},this.updateAction=(t,e)=>{const{guid:n,activeMenuItemIndex:i}=this,a=`${n}-action-${e}`;t.tabIndex=-1,t.setAttribute("role","menuitem"),t.id||(t.id=a),t.active=e===i},this.updateActions=t=>{null==t||t.forEach(this.updateAction)},this.getActions=()=>{const{el:t}=this,e=o(t,{all:!0,matches:"calcite-action"});this.updateActions(e),this.actionElements=e,this.connectMenuButtonEl()},this.menuButtonKeyUp=t=>{const{key:e}=t,{actionElements:n}=this;this.isValidKey(e,b)&&(t.preventDefault(),n.length&&(this.toggleOpen(!0),this.handleActionNavigation(e,n)))},this.menuButtonKeyDown=t=>{const{key:e}=t;this.isValidKey(e,b)&&t.preventDefault()},this.menuActionsContainerKeyDown=t=>{const{key:e}=t,{actionElements:n,activeMenuItemIndex:i}=this;if("Tab"!==e)if(" "!==e&&"Enter"!==e)this.isValidKey(e,x)&&t.preventDefault();else{t.preventDefault();const e=n[i];e?e.click():this.toggleOpen(!1)}else this.open=!1},this.menuActionsContainerKeyUp=t=>{const{key:e}=t,{actionElements:n}=this;"Escape"!==e?this.isValidKey(e,x)&&(t.preventDefault(),n.length&&this.handleActionNavigation(e,n)):this.toggleOpen(!1)},this.handleActionNavigation=(t,e)=>{const n=this.activeMenuItemIndex;"Home"===t&&(this.activeMenuItemIndex=0),"End"===t&&(this.activeMenuItemIndex=e.length-1),"ArrowUp"===t&&(this.activeMenuItemIndex=g(Math.max(n-1,-1),e.length)),"ArrowDown"===t&&(this.activeMenuItemIndex=g(n+1,e.length))},this.toggleOpenEnd=()=>{this.setFocus(),this.el.removeEventListener("calcitePopoverOpen",this.toggleOpenEnd)},this.toggleOpen=(t=!this.open)=>{this.el.addEventListener("calcitePopoverOpen",this.toggleOpenEnd),this.open=t}}connectedCallback(){var t;null===(t=this.mutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0}),this.getActions(),m(this)}disconnectedCallback(){var t;null===(t=this.mutationObserver)||void 0===t||t.disconnect(),this.disconnectMenuButtonEl(),u(this)}expandedHandler(){this.open=!1,this.setTooltipReferenceElement()}openHandler(t){this.activeMenuItemIndex=this.open?0:-1,this.menuButtonEl&&(this.menuButtonEl.active=t),this.calciteActionMenuOpenChange.emit(t)}closeCalciteActionMenuOnClick(t){t.composedPath().includes(this.el)||(this.open=!1)}activeMenuItemIndexHandler(){this.updateActions(this.actionElements)}async setFocus(){l(this.open?this.menuEl:this.menuButtonEl)}renderMenuButton(){const{label:t,scale:e}=this;return i("slot",{name:v.trigger},i("calcite-action",{class:"default-trigger",icon:"ellipsis",ref:this.setDefaultMenuButtonEl,scale:e,text:t}))}renderMenuItems(){const{actionElements:t,activeMenuItemIndex:e,open:n,menuId:a,menuButtonEl:o,label:s,placement:l,overlayPositioning:c,flipPlacements:r}=this,m=t[e],u=(null==m?void 0:m.id)||null;return i("calcite-popover",{disablePointer:!0,flipPlacements:r,label:s,offsetDistance:0,open:n,overlayPositioning:c,placement:l,referenceElement:o},i("div",{"aria-activedescendant":u,"aria-labelledby":null==o?void 0:o.id,class:"menu",id:a,onClick:this.handleCalciteActionClick,onKeyDown:this.menuActionsContainerKeyDown,onKeyUp:this.menuActionsContainerKeyUp,ref:t=>this.menuEl=t,role:"menu",tabIndex:-1},i("slot",null)))}render(){return i(a,null,this.renderMenuButton(),this.renderMenuItems(),i("slot",{name:v.tooltip,onSlotchange:this.updateTooltip}))}isValidKey(t,e){return!!e.find((e=>e===t))}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size-1);color:var(--calcite-ui-text-2)}.menu ::slotted(calcite-action){margin:0.125rem;display:-ms-flexbox;display:flex;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}::slotted(calcite-action[active]){outline:2px solid var(--calcite-ui-brand);outline-offset:0px}.default-trigger{position:relative;height:100%;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:stretch;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;height:100%;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:stretch;align-self:stretch}.menu{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;outline:2px solid transparent;outline-offset:2px}"}},[1,"calcite-action-menu",{expanded:[516],flipPlacements:[16],label:[1],open:[1540],overlayPositioning:[1,"overlay-positioning"],placement:[513],scale:[513],activeMenuItemIndex:[32],setFocus:[64]},[[8,"click","closeCalciteActionMenuOnClick"]]]);function E(){"undefined"!=typeof customElements&&["calcite-action-menu","calcite-action","calcite-icon","calcite-loader","calcite-popover"].forEach((t=>{switch(t){case"calcite-action-menu":customElements.get(t)||customElements.define(t,y);break;case"calcite-action":customElements.get(t)||d();break;case"calcite-icon":customElements.get(t)||p();break;case"calcite-loader":customElements.get(t)||h();break;case"calcite-popover":customElements.get(t)||f()}}))}E();export{y as A,v as S,E as d};
