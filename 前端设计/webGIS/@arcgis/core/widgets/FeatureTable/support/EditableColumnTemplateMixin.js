/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import{property as r}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import{types as e}from"../../../form/elements/support/inputs.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/maybe.js";import"../../../chunks/string.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../core/Error.js";import"../../../chunks/tracking.js";import"../../../form/elements/inputs/BarcodeScannerInput.js";import"../../../form/elements/inputs/TextInput.js";import"../../../form/elements/inputs/Input.js";import"../../../core/JSONSupport.js";import"../../../core/Accessor.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../form/elements/inputs/ComboBoxInput.js";import"../../../form/elements/inputs/DateTimePickerInput.js";import"../../../chunks/reader.js";import"../../../chunks/writer.js";import"../../../form/elements/inputs/RadioButtonsInput.js";import"../../../form/elements/inputs/SwitchInput.js";import"../../../form/elements/inputs/TextAreaInput.js";import"../../../form/elements/inputs/TextBoxInput.js";const o=o=>{let p=class extends o{constructor(){super(...arguments),this.editable=!0,this.hint=null,this.input=null,this.required=!1}};return t([r({type:Boolean,json:{write:!0}})],p.prototype,"editable",void 0),t([r({type:String,json:{write:!0}})],p.prototype,"hint",void 0),t([r({types:e,json:{read:{source:"inputType"},write:{target:"inputType"}}})],p.prototype,"input",void 0),t([r()],p.prototype,"required",void 0),p=t([s("esri.widgets.FeatureTable.support.EditableColumnTemplateMixin")],p),p};export{o as EditableColumnTemplateMixin};
