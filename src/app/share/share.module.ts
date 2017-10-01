/**
 * Created by Linweiwei on 2016/12/22.
 */

import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {GlobalLoadingComponent} from "./loading/global-loading.component";
import {FilterImagePipe} from "./layout/pipes/FilterImagePipe";
import {AddToCartComponent} from "../cart/addtocard/add-to-cart.component";
import {ShowAuthedDirective} from "./directive/show-authed.directive";
import {ValidateOnBlurDirective} from "./directive/validate-on-blur.directive";
import {OrderStatePipe, productCategory} from "./pipe/common.pipe";
import {NewProductsComponent} from "../category/newproducts/new-products.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        GlobalLoadingComponent,
        FilterImagePipe,
        OrderStatePipe,
        productCategory,
        AddToCartComponent,
        NewProductsComponent,
        ShowAuthedDirective,
        ValidateOnBlurDirective
    ],
    providers:[],
    exports:[
        GlobalLoadingComponent,
        FilterImagePipe,
        OrderStatePipe,
        productCategory,
        AddToCartComponent,
        NewProductsComponent,
        ShowAuthedDirective,
        ValidateOnBlurDirective
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ShareModule{

}
