/**
 * Created by yitala on 2017/3/12.
 */

import {Component, OnInit} from "@angular/core";
@Component({
    selector:'layout-header',
    templateUrl:'header.component.html',
    styleUrls:['header.component.css']
})

export class HeaderComponent implements OnInit{

    mobileMenu:boolean = false;

    constructor(
    ){}

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

    }
}