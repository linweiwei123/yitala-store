/**
 * Created by yitala on 2017/3/12.
 */

import {Component, OnInit} from "@angular/core";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
@Component({
    selector:'layout-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent implements OnInit{

    mobileMenu:boolean = false;
    categorySubMenuStatus:boolean = false;

    constructor(
        private router:Router
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

    gotoPage(type:string):void{
        this.categorySubMenuStatus = true;
        this.router.navigate(['/category',type]);
    }

    toggleCategory():void{
        this.categorySubMenuStatus = !this.categorySubMenuStatus;
    }

}