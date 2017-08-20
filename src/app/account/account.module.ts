/**
 * Created by yitala on 2017/7/25.
 */

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ShareModule} from "../share/share.module";
import {AccountComponent} from "./account.component";
import {AuthGuard} from "../share/service/auth-guard.service";
import {AddressComponent} from "./addressinfo/address/address.component";
import {OrderComponent} from "./order/order.component";
import {AddressInfoComponent} from "./addressinfo/addressinfo.component";
import {OrderDetailComponent} from "./order/orderdetail/orderdetail.component";

const accountRoutes:Routes = [
    {
        path:'',component:AccountComponent,
        children:[
            {
                path:'addressinfo',component:AddressInfoComponent
            },
            {
                path:'order',component:OrderComponent
            },
            {
                path:'orderdetail/:id',component:OrderDetailComponent
            },
            {
                path:'',redirectTo:'addressinfo'
            }
        ],
        canActivate:[AuthGuard]
    }
]

@NgModule({
    imports:[
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        ShareModule,
        RouterModule.forChild(accountRoutes)
    ],
    declarations:[
        AccountComponent,
        AddressInfoComponent,
        AddressComponent,
        OrderComponent,
        OrderDetailComponent

    ],
    schemas:[
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class AccountModule{

}