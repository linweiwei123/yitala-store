import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";


const appRoutes: Routes = [

    {   path: 'home', component: HomeComponent},
    {   path: 'category/:type', loadChildren:'./category/category.module#CategoryModule'},
    {   path: 'product/:id', component:ProductComponent},
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