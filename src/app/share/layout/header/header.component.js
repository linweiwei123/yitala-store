"use strict";
/**
 * Created by yitala on 2017/3/12.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var cart_service_1 = require("../../service/cart.service");
var authentication_service_1 = require("../../service/authentication.service");
var order_service_1 = require("../../service/order.service");
var HeaderComponent = (function () {
    function HeaderComponent(router, cartService, orderService, authenticationService) {
        this.router = router;
        this.cartService = cartService;
        this.orderService = orderService;
        this.authenticationService = authenticationService;
        this.mobileMenu = false;
        this.categorySubMenuStatus = false;
        this.cartNumber = 0;
        this.orderNumber = 0;
        router.events.subscribe(function (event) {
            if (!(event instanceof router_1.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mouseScroll();
        this.cartService.cartProducts$.subscribe(function (cartProducts) {
            _this.cartNumber = cartProducts.size;
            //console.log(cartProducts,cartProducts.toArray());
            //this.cartNumber = cartProducts.length;
        });
        this.authenticationService.currentUser.subscribe(function (data) {
            _this.username = data.username;
            _this.firstname = data.firstname;
        });
        //初始化未支付订单数
        this.initOrderInfo();
    };
    HeaderComponent.prototype.toggleMobileMenu = function () {
        this.mobileMenu = !this.mobileMenu;
    };
    HeaderComponent.prototype.mouseScroll = function () {
        document.addEventListener("mousewheel", function (e) {
            var scrollY = window.scrollY;
            if (scrollY > 52) {
                $("#header").addClass('header-fixed');
            }
            else {
                $("#header").removeClass('header-fixed');
            }
        }, false);
    };
    HeaderComponent.prototype.gotoCategory = function (type, event) {
        event.stopPropagation();
        this.categorySubMenuStatus = false;
        this.router.navigate(['/category', type]);
    };
    HeaderComponent.prototype.toggleCategory = function (status) {
        this.categorySubMenuStatus = status;
    };
    HeaderComponent.prototype.logout = function () {
        this.authenticationService.cleanAuth();
    };
    //init cart info
    HeaderComponent.prototype.initOrderInfo = function () {
        var _this = this;
        this.orderService.orderNum$.subscribe(function (res) {
            _this.orderNumber = res;
        }, function () {
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'layout-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        cart_service_1.CartService,
        order_service_1.OrderService,
        authentication_service_1.AuthenticationService])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map