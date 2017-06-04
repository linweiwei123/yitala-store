"use strict";
/**
 * Created by Linweiwei on 2016/12/22.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var global_loading_component_1 = require("./loading/global-loading.component");
var FilterImagePipe_1 = require("./layout/pipes/FilterImagePipe");
var ShareModule = (function () {
    function ShareModule() {
    }
    return ShareModule;
}());
ShareModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        declarations: [
            global_loading_component_1.GlobalLoadingComponent,
            FilterImagePipe_1.FilterImagePipe
        ],
        providers: [],
        exports: [
            global_loading_component_1.GlobalLoadingComponent,
            FilterImagePipe_1.FilterImagePipe
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], ShareModule);
exports.ShareModule = ShareModule;
//# sourceMappingURL=share.module.js.map