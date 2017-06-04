/**
 * Created by yitala on 2017/6/4.
 */
import {Component, Input} from "@angular/core";
import {Product} from "../../share/layout/models/product";
import {Router} from "@angular/router";
@Component({
    selector:'recommend-products',
    templateUrl:'./recommend.component.html',
    styleUrls:['./recommend.component.css']
})

export class RecommendComponent{

    @Input()
    private products:Array<Product> = [];
    @Input()
    private showProducts:Array<Product> = [];

    constructor(
        private router:Router
    ){}

    showMore(){
        this.showProducts = this.products;
    }

    gotoProductDetail(id: string) {
        this.router.navigate([`/product`, id]);
    }
}