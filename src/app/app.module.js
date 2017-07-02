"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
require("./rxjs-extensions");
require("../assets/css/styles.css");
var share_module_1 = require("./share/share.module");
var app_routing_module_1 = require("./app-routing.module");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var forms_1 = require("@angular/forms");
var header_component_1 = require("./share/layout/header/header.component");
var footer_component_1 = require("./share/layout/footer/footer.component");
var product_component_1 = require("./product/product.component");
var product_zoom_component_1 = require("./product/productzoom/product-zoom.component");
var home_component_1 = require("./home/home.component");
var cart_component_1 = require("./cart/cart.component");
var base_service_1 = require("./share/service/base.service");
var recommend_component_1 = require("./home/recommend/recommend.component");
var cart_service_1 = require("./share/service/cart.service");
var animations_1 = require("@angular/platform-browser/animations");
var authentication_service_1 = require("./share/service/authentication.service");
var jwt_service_1 = require("./share/service/jwt.service");
var auth_guard_service_1 = require("./share/service/auth-guard.service");
var no_auth_guard_service_1 = require("./share/service/no-auth-guard.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            ng_bootstrap_1.NgbModule.forRoot(),
            platform_browser_1.BrowserModule.withServerTransition({
                appId: 'toh-universal'
            }),
            http_1.HttpModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            share_module_1.ShareModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            home_component_1.HomeComponent,
            recommend_component_1.RecommendComponent,
            product_component_1.ProductComponent,
            product_zoom_component_1.ProductZoomComponent,
            cart_component_1.CartComponent
        ],
        providers: [
            base_service_1.BaseService,
            authentication_service_1.AuthenticationService,
            jwt_service_1.JwtService,
            auth_guard_service_1.AuthGuard,
            no_auth_guard_service_1.NoAuthGuard,
            cart_service_1.CartService
        ],
        bootstrap: [app_component_1.AppComponent],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map