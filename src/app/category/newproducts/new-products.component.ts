/**
 * Created by Linweiwei on 2017/5/24.
 */

import {Component, Input} from "@angular/core";
import {Product} from "../../share/layout/models/product";
import {Router} from "@angular/router";
@Component({
    selector:'new-products',
    templateUrl:'./new-products.component.html',
    styleUrls:['./new-products.component.css']
})

export class NewProductsComponent{

    @Input()
    private items:Array<Product>;

    constructor(
        private router:Router
    ){

    }

    gotoProductDetail(id:string){
        console.log(id);
        this.router.navigate([`/product`,id]);
    }

}