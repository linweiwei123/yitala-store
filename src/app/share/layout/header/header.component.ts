/**
 * Created by yitala on 2017/3/12.
 */

import {Component, OnInit} from "@angular/core";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {CartService} from "../../service/cart.service";
import {Product} from "../../models/product";
import {List} from 'immutable';
import {AuthenticationService} from "../../service/authentication.service";
import {BaseService} from "../../service/base.service";
import {Observable} from "rxjs/Observable";
import {OrderService} from "../../service/order.service";
@Component({
    selector:'layout-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent implements OnInit{

    mobileMenu:boolean = false;
    categorySubMenuStatus:boolean = false;
    cartNumber:number = 0;
    orderNumber:number = 0;
    username:string;
    firstname:string;

    constructor(
        private router:Router,
        private cartService:CartService,
        private orderService:OrderService,
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

        this.initMobileMenu();

        this.cartService.cartProducts$.subscribe(
            (cartProducts: List<Product>)=>{
                this.cartNumber = cartProducts.size;
                //console.log(cartProducts,cartProducts.toArray());
                //this.cartNumber = cartProducts.length;
            }
        )

        this.authenticationService.currentUser.subscribe(
            (data)=>{
                this.username = data.username;
                this.firstname = data.firstname;
            }
        )

        //初始化未支付订单数
        this.initOrderInfo();

    }

    initMobileMenu():void{
        $(".mobile-second-menu").click(function(){
            if($(this).hasClass("submenu-open")){
                $(this).removeClass("submenu-open");
                $(this).find("ul").slideUp(200);
            }
            else {
                $(this).addClass("submenu-open");
                $(this).find("ul").slideDown(200);
            }
        })
    }

    openMobileMenu():void{
        this.mobileMenu = true;
    }

    closeModileMenu():void{
        this.mobileMenu = false;
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

    //init cart info
    initOrderInfo(){
        this.orderService.orderNum$.subscribe(
            (res)=>{
                this.orderNumber = res;
            },
            ()=>{

            }
        )
    }
}