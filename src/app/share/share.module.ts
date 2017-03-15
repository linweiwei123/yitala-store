/**
 * Created by Linweiwei on 2016/12/22.
 */

import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {GlobalLoadingComponent} from "./loading/global-loading.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        GlobalLoadingComponent
    ],
    providers:[],
    exports:[
        GlobalLoadingComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ShareModule{

}
