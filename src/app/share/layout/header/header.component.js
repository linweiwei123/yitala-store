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
import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.mobileMenu = false;
        this.categorySubMenuStatus = false;
        router.events.subscribe(function (event) {
            if (!(event instanceof NavigationEnd)) {
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
        this.mouseScroll();
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
    HeaderComponent.prototype.gotoPage = function (type) {
        this.categorySubMenuStatus = true;
        this.router.navigate(['/category', type]);
    };
    HeaderComponent.prototype.toggleCategory = function () {
        this.categorySubMenuStatus = !this.categorySubMenuStatus;
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Component({
        selector: 'layout-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    }),
    __metadata("design:paramtypes", [Router])
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map