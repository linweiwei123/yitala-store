/**
 * Created by Linweiwei on 2016/12/22.
 */

import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {GlobalLoadingComponent} from "./loading/global-loading.component";
import {FilterImagePipe} from "./layout/pipes/FilterImagePipe";

@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        GlobalLoadingComponent,
        FilterImagePipe
    ],
    providers:[],
    exports:[
        GlobalLoadingComponent,
        FilterImagePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ShareModule{

}
