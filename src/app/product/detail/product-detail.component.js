/**
 * Created by yitala on 2017/3/1.
 */
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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var product_service_1 = require("../../share/service/product.service");
var router_1 = require("@angular/router");
var alert_component_1 = require("../../share/alert/alert.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var product_1 = require("../product");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(http, productService, modalService, activedRoute, router) {
        var _this = this;
        this.http = http;
        this.productService = productService;
        this.modalService = modalService;
        this.activedRoute = activedRoute;
        this.router = router;
        this.product = new product_1.Product();
        this.img = "";
        this.queryLoading = false;
        activedRoute.params.subscribe(function (params) {
            _this.productId = params["id"];
        });
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.productId) {
            //查询loading
            this.queryLoading = true;
            this.productService.getJson("api/product/" + this.productId)
                .then(function (response) {
                _this.queryLoading = false;
                var data = JSON.parse(response["_body"]);
                _this.product = data;
                var imgs = _this.product.images;
                _this.img = imgs.split(",")[0];
                console.log(_this.product);
            })
                .catch(function (error) {
                _this.queryLoading = false;
                console.log(error);
                _this.openModel("系统错误，请联系管理员");
            });
        }
    };
    ProductDetailComponent.prototype.openModel = function (msg) {
        var modalRef = this.modalService.open(alert_component_1.AlertComponent, { backdrop: "static", keyboard: false, size: "sm" });
        modalRef.componentInstance.msg = "" + msg;
    };
    ProductDetailComponent.prototype.back = function () {
        this.router.navigate(['/productList']);
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'product-detail',
            templateUrl: 'product-detail.component.html',
            styleUrls: ['product-detail.component.css']
        }), 
        __metadata('design:paramtypes', [http_1.Http, product_service_1.ProductService, ng_bootstrap_1.NgbModal, router_1.ActivatedRoute, router_1.Router])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map