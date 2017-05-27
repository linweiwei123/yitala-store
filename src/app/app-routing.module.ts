import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {CartComponent} from "./cart/cart.component";

import {ProductsComponent} from "./category/products/products.component";
import {LoginComponent} from "./account/login/login.component";

// export function loadAboutModule() {
//     return System.import('./account/account.module').then((r: any) => r.AccountModule);
// }

const appRoutes: Routes = [

    {   path: 'home', component: HomeComponent},
    {   path: 'category/:type', component:ProductsComponent},
    {   path: 'product/:id', component:ProductComponent},
    {   path: 'cart', component:CartComponent},
    //{   path: 'account', loadChildren:loadAboutModule},
    {   path: 'account', component:LoginComponent},
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];


@NgModule({
    imports:[RouterModule.forRoot(appRoutes,{ useHash: true })],
    exports:[RouterModule]
})

export class AppRoutingModule{

}