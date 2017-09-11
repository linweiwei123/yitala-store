/**
 * Created by yitala on 2017/9/7.
 */

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {ContactComponent} from "./contact.component";

const contactRoutes:Routes = [
    {
        path:'',component:ContactComponent
    }
]

@NgModule({
    imports:[
        CommonModule,
        HttpModule,
        RouterModule.forChild(contactRoutes)
    ],
    declarations:[
        ContactComponent
    ]
})

export class ContactModule{

}