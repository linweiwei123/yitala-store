/**
 * Created by yitala on 2017/6/18.
 */

import {Component, Input, OnInit} from "@angular/core";
import {Product} from "../../share/models/product";
import {CartService} from "../../share/service/cart.service";
@Component({
    selector:'add-to-cart',
    templateUrl:'./add-to-cart.component.html',
    styleUrls:['./add-to-cart.component.css']
})

export class AddToCartComponent{

    @Input()
    public product:Product;
    public status:string = "unadd";

    constructor(
        private cartService:CartService
    ){}

    addToCart(){
        console.log(this.product);
        this.status = "adding";
        let result = this.cartService.addToCart(this.product);
        result.subscribe(
            (res)=>{
                this.status = "added";
                setTimeout(()=>{
                    this.status = "unadd";
                },2000)
            },
            (error)=>{
                console.log(error);
            }
        )

    }
}