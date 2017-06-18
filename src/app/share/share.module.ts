/**
 * Created by Linweiwei on 2016/12/22.
 */

import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {GlobalLoadingComponent} from "./loading/global-loading.component";
import {FilterImagePipe} from "./layout/pipes/FilterImagePipe";
import {AddToCartComponent} from "../cart/addtocard/add-to-cart.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        GlobalLoadingComponent,
        FilterImagePipe,
        AddToCartComponent
    ],
    providers:[],
    exports:[
        GlobalLoadingComponent,
        FilterImagePipe,
        AddToCartComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ShareModule{

}
