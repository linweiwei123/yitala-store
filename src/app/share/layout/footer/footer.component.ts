/**
 * Created by yitala on 2017/3/15.
 */

import {Component, ElementRef, OnInit} from "@angular/core";
import {CartService} from "../../service/cart.service";
import {Product} from "../../models/product";
import {List} from "immutable";

@Component({
    selector:'layout-footer',
    templateUrl:'./footer.component.html',
    styleUrls:['./footer.component.css']
})

export class FooterComponent implements OnInit{


    private cartNumber:number = 0;
    private cartProducts:Array<Product>=[];
    private cartOpen:boolean = false;

    constructor(
        private cartService:CartService,
        private elementRef:ElementRef
    ){}

    ngOnInit(): void {
        this.cartService.cartProducts$.subscribe(
            (cartProducts: List<Product>)=>{
                this.cartNumber = cartProducts.size;
                this.cartProducts = cartProducts.toArray();
                console.log(cartProducts,cartProducts.toArray());
                //this.cartNumber = cartProducts.length;
            }
        )

        let fixed = this.elementRef.nativeElement.querySelector("#cart-box");

        fixed.addEventListener('touchmove', (e:MouseEvent)=>{

            e.preventDefault();

        }, false);
    }

    scrollTop():void{
        window.scrollTo(0,0);
    }

    toggleCartBox():void{
        this.cartOpen = !this.cartOpen
    }
}