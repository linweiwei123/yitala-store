import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {CartComponent} from './cart/cart.component';
import {CategoryModule} from './category/category.module';
import {AuthGuard} from "./share/service/auth-guard.service";
import {AuthModule} from "./auth/auth.module";
import {AccountModule} from "./account/account.module";
import {CartContactComponent} from "./cart/contact/contact.component";
import {BlogModule} from "./blog/blog.module";

export function loadAuthModule(){
    // return System.import('./auth/auth.module').then((r: any) => r.AccountModule);
    return AuthModule;
}

export function loadAccountModule(){
    // return System.import('./auth/auth.module').then((r: any) => r.AccountModule);
    return AccountModule;
}

export function loadCategoryModule(){
    return CategoryModule;
}
export function loadBlogModule(){
    return BlogModule;
}


const appRoutes: Routes = [

    {   path: 'home', component: HomeComponent},
    {   path: 'category/:type', loadChildren: './category/category.module#CategoryModule'},
    {   path: 'product/:id', component: ProductComponent},
    {   path: 'cart', component: CartComponent,canActivate:[AuthGuard]},
    {   path: 'cartcontact', component: CartContactComponent,canActivate:[AuthGuard]},
    {   path: 'account', loadChildren: './account/account.module#AccountModule'},
    {   path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
    {   path: 'blog', loadChildren: './blog/blog.module#BlogModule'},
    {   path: 'contact', loadChildren: './contact/contact.module#ContactModule'},
    // {   path: 'auth', component:LoginComponent},
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {path:'**', redirectTo: '/auth/404'}
];


@NgModule({
    imports:[RouterModule.forRoot(appRoutes,{ useHash: true })],
    exports:[RouterModule]
})

export class AppRoutingModule{

}