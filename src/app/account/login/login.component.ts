/**
 * Created by yitala on 2017/5/25.
 */
import {Component, OnDestroy, OnInit} from "@angular/core";
import {NavigationStart, Router, RoutesRecognized} from "@angular/router";
@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent implements OnInit,OnDestroy{

    private routerSubscrition:any;
    private previosUrl:string;

    constructor(
        private router:Router
    ){

    }


    ngOnInit(): void {
        // this.routerSubscrition = this.router.events
        //     .pairwise().subscribe((e) => {
        //    console.log(e[0]);
        //    if( e[0] instanceof NavigationStart){
        //        this.previosUrl = e[0]["url"];
        //        console.log(this.previosUrl);
        //    }
        // })
    }


    login():void{

        //let url  = this.previosUrl?this.previosUrl:'/cart';
        let url = "/cart";
        this.router.navigate([`${url}`]);
    }

    ngOnDestroy(): void {
        //this.routerSubscrition.unsubscribe();
    }
}