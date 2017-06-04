import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {CartComponent} from './cart/cart.component';
import {AccountModule} from './account/account.module';
import {CategoryModule} from './category/category.module';

export function loadAccountModule(){
    // return System.import('./account/account.module').then((r: any) => r.AccountModule);
    return AccountModule;
}

export function loadCategoryModule(){
    return CategoryModule;
}

const appRoutes: Routes = [

    {   path: 'home', component: HomeComponent},
    {   path: 'category/:type', loadChildren: './category/category.module#CategoryModule'},
    {   path: 'product/:id', component: ProductComponent},
    {   path: 'cart', component: CartComponent},
    {   path: 'account', loadChildren: './account/account.module#AccountModule'},
    // {   path: 'account', component:LoginComponent},
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {path:'**', redirectTo: '/account/404'}
];


@NgModule({
    imports:[RouterModule.forRoot(appRoutes,{ useHash: true })],
    exports:[RouterModule]
})

export class AppRoutingModule{

}