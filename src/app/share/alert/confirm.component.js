"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by yitala on 2017/2/20.
 */
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ConfirmComponent = (function () {
    function ConfirmComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ConfirmComponent.prototype.confirm = function () {
        //this.activeModal.dismiss();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ConfirmComponent.prototype, "msg", void 0);
    ConfirmComponent = __decorate([
        core_1.Component({
            selector: 'confirm-modal-content',
            templateUrl: './confirm.component.html'
        }), 
        __metadata('design:paramtypes', [ng_bootstrap_1.NgbActiveModal])
    ], ConfirmComponent);
    return ConfirmComponent;
}());
exports.ConfirmComponent = ConfirmComponent;
//# sourceMappingURL=confirm.component.js.map