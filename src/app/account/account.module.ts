import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ShareModule} from "../share/share.module";
/**
 * Created by yitala on 2017/5/25.
 */
const accountRoutes:Routes = [
    {
        path:'login',component:LoginComponent
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
        RouterModule.forChild(accountRoutes)
    ],
    declarations:[
        LoginComponent
    ],
    schemas:[

    ]
})

export class AccountModule{

}