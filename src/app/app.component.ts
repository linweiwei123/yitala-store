/**
 * Created by Administrator on 2016/11/25.
 */
import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./share/service/authentication.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
    title = '英雄帖';
    isSignOn:boolean = false;


    constructor(
        private authenticationService:AuthenticationService
    ){}

    ngOnInit(): void {
        this.authenticationService.autoLogin();
    }


}