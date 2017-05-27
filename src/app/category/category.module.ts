/**
 * Created by yitala on 2017/5/23.
 */

import {NgModule} from "@angular/core";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ShareModule} from "../share/share.module";
import {ProductsComponent} from "./products/products.component";
import {RouterModule, Routes} from "@angular/router";
import {NewProductsComponent} from "./newproducts/new-products.component";

const categoryRoutes:Routes = [
    {
        path:'',component:ProductsComponent
    }
]

@NgModule({
    imports:[
        NgbModule,
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        ShareModule,
        RouterModule.forChild(categoryRoutes)
    ],
    declarations:[
        ProductsComponent,
        NewProductsComponent
    ],
    schemas:[

    ]
})

export class CategoryModule{

}