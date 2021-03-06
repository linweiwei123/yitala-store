/**
 * Created by yitala on 2017/6/18.
 */

import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {Product} from "../../share/models/product";
import {CartService} from "../../share/service/cart.service";
import {AuthenticationService} from "../../share/service/authentication.service";
@Component({
    selector:'add-to-cart',
    templateUrl:'./add-to-cart.component.html',
    styleUrls:['./add-to-cart.component.css']
})

export class AddToCartComponent{

    @Input()
    public product:Product;
    public status:string = "unadd";
    public error:string = "";

    constructor(
        private cartService:CartService
    ){}

    addToCart(){
        this.status = "adding";
        let result = this.cartService.addToCart(this.product);
        result.subscribe(
            (res)=>{
                if(res != null){
                    this.status = "added";
                    this.cartService.cartId = res.cartId;
                }
                else{
                    this.status = "unadd";
                }
            },
            (error)=>{
                this.status = "unadd";
                this.error = error;
            }
        )

    }
}