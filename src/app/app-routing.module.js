var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { AccountModule } from './account/account.module';
import { CategoryModule } from './category/category.module';
export function loadAccountModule() {
    // return System.import('./account/account.module').then((r: any) => r.AccountModule);
    return AccountModule;
}
export function loadCategoryModule() {
    return CategoryModule;
}
var appRoutes = [
    { path: 'home', component: HomeComponent },
    { path: 'category/:type', loadChildren: './category/category.module#CategoryModule' },
    { path: 'product/:id', component: ProductComponent },
    { path: 'cart', component: CartComponent },
    { path: 'account', loadChildren: './account/account.module#AccountModule' },
    // {   path: 'account', component:LoginComponent},
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map