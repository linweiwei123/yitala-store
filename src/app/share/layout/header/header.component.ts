/**
 * Created by yitala on 2017/3/12.
 */

import {Component, OnInit} from "@angular/core";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {CartService} from "../../service/cart.service";
import {Product} from "../../models/product";
import {List} from 'immutable';
import {AuthenticationService} from "../../service/authentication.service";
@Component({
    selector:'layout-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent implements OnInit{

    mobileMenu:boolean = false;
    categorySubMenuStatus:boolean = false;
    private cartNumber:number = 0;
    username:string;

    constructor(
        private router:Router,
        private cartService:CartService,
        private authenticationService:AuthenticationService
    ){
        router.events.subscribe((event:any) => {
            if(!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0,0);
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
    }

    ngOnInit(): void {
        this.mouseScroll();
        this.cartService.cartProducts$.subscribe(
            (cartProducts: List<Product>)=>{
                this.cartNumber = cartProducts.size;
                console.log(cartProducts,cartProducts.toArray());
                //this.cartNumber = cartProducts.length;
            }
        )

        this.authenticationService.currentUser.subscribe(
            (data)=>{
                this.username = data.username;
            }
        )
    }


    toggleMobileMenu():void{
        this.mobileMenu = !this.mobileMenu;
    }

    mouseScroll():void{
        document.addEventListener("mousewheel",(e)=>{
            let scrollY = window.scrollY;
            if(scrollY>52){
                $("#header").addClass('header-fixed');
            }
            else {
                $("#header").removeClass('header-fixed');
            }
        },false)
    }

    gotoCategory(type:string,event:any):void{
        event.stopPropagation();
        this.categorySubMenuStatus = false;
        this.router.navigate(['/category',type]);
    }

    toggleCategory(status:boolean):void{
        this.categorySubMenuStatus = status;
    }

    logout():void{
        this.authenticationService.cleanAuth();
    }

}