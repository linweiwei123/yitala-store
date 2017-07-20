/**
 * Created by yitala on 2017/5/25.
 */
import {Component, OnInit} from "@angular/core";
import {Product} from "../share/models/product";
import {CartService} from "../share/service/cart.service";
import {List} from "immutable";
@Component({
    selector:'cart',
    templateUrl:'./cart.component.html',
    styleUrls:['./cart.component.css']
})

export class CartComponent implements OnInit{

    public cartProducts:Array<Product>=[];
    public cartTotalPrice:number= 0;

    constructor(
        private cartService:CartService
    ){}

    ngOnInit(): void {
        this.cartService.cartProducts$.subscribe(
            (cartProducts: List<Product>)=>{
                this.cartProducts = cartProducts.toArray();
                let totalPrice = 0;
                for(let item of this.cartProducts){
                    totalPrice += item.discount?item.price*item.discount/100:item.price;
                }
                this.cartTotalPrice = parseFloat(totalPrice.toFixed(1));
                console.log(cartProducts);
            }
        )
    }


}