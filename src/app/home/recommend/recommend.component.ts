/**
 * Created by yitala on 2017/6/4.
 */
import {Component, Input} from "@angular/core";
import {Product} from "../../share/models/product";
import {Router} from "@angular/router";
import {CartService} from "../../share/service/cart.service";
@Component({
    selector:'recommend-products',
    templateUrl:'./recommend.component.html',
    styleUrls:['./recommend.component.css']
})

export class RecommendComponent{

    @Input()
    public products:Array<Product> = [];
    @Input()
    public showProducts:Array<Product> = [];

    constructor(
        private router:Router,
        private cartService:CartService
    ){}

    showMore(){
        this.showProducts = this.products;
    }

    gotoProductDetail(id: string) {
        this.router.navigate([`/product`, id]);
    }

    addToCart(item:Product){
        this.cartService.addToCart(item);
    }

}