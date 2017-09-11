/**
 * Created by yitala on 2017/7/25.
 */

import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {BaseService} from "../share/service/base.service";
import {AuthenticationService} from "../share/service/authentication.service";
import {Observable} from "rxjs/Observable";
import {Address} from "../share/models/address.model";
@Component({
    selector:'user-account',
    templateUrl:'./account.component.html',
    styleUrls:['./account.component.css']
})
export class AccountComponent implements OnInit{

    username:string;
    firstname:string;

    constructor(
        private authenticationService:AuthenticationService
    ){

    }


    ngOnInit(): void {
        this.authenticationService.currentUser.subscribe(
            (data)=>{
                this.username = data.username;
                this.firstname = data.firstname;
            }
        )
    }


}