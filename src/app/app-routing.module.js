"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var product_component_1 = require("./product/product.component");
var cart_component_1 = require("./cart/cart.component");
var category_module_1 = require("./category/category.module");
var auth_guard_service_1 = require("./share/service/auth-guard.service");
var auth_module_1 = require("./auth/auth.module");
var account_module_1 = require("./account/account.module");
var contact_component_1 = require("./cart/contact/contact.component");
var blog_module_1 = require("./blog/blog.module");
function loadAuthModule() {
    // return System.import('./auth/auth.module').then((r: any) => r.AccountModule);
    return auth_module_1.AuthModule;
}
exports.loadAuthModule = loadAuthModule;
function loadAccountModule() {
    // return System.import('./auth/auth.module').then((r: any) => r.AccountModule);
    return account_module_1.AccountModule;
}
exports.loadAccountModule = loadAccountModule;
function loadCategoryModule() {
    return category_module_1.CategoryModule;
}
exports.loadCategoryModule = loadCategoryModule;
function loadBlogModule() {
    return blog_module_1.BlogModule;
}
exports.loadBlogModule = loadBlogModule;
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'category/:type', loadChildren: './category/category.module#CategoryModule' },
    { path: 'product/:id', component: product_component_1.ProductComponent },
    { path: 'cart', component: cart_component_1.CartComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'cartcontact', component: contact_component_1.CartContactComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'account', loadChildren: './account/account.module#AccountModule' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
    { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
    // {   path: 'auth', component:LoginComponent},
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', redirectTo: '/auth/404' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(appRoutes, { useHash: true })],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map