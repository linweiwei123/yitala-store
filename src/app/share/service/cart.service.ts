import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Product} from "../models/product";
import {BaseService} from "../layout/service/base.service";
import {List} from 'immutable';
import {Observable} from "rxjs/Observable";
/**
 * Created by yitala on 2017/6/17.
 */

@Injectable()
export class CartService{

    private cartProducts : BehaviorSubject<List<Product>> = new BehaviorSubject(List([]));

    public cartProducts$ = this.cartProducts.asObservable();

    constructor(
        private baseService:BaseService
    ){
        //初始化用户的购物车
    }


    addToCart(product:Product):void{
        //保存到服务端
        let saveObs = this.addToCartBackend(product);
        saveObs.subscribe(
            (res)=>{
                this.cartProducts.next(this.cartProducts.getValue().push(product));
            },
            (error)=>{
                console.log(error);
            }

        )

    }

    /********** 保存到服务端 *************/
    addToCartBackend(product:Product){
        return this.baseService.get("api/product/new");
        //this.baseService.post("api/product/new",product);
    }

}