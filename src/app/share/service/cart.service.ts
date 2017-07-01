import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Product} from "../models/product";
import {BaseService} from "./base.service";
import {List} from 'immutable';
import {Observable} from "rxjs/Observable";
/**
 * Created by yitala on 2017/6/17.
 */

@Injectable()
export class CartService{

    private cartId:number;
    private cartProducts : BehaviorSubject<List<Product>> = new BehaviorSubject(List([]));

    public cartProducts$ = this.cartProducts.asObservable();

    constructor(
        private baseService:BaseService
    ){
        this.initCartInfo()
    }

    //init cart info
    initCartInfo(){
        //初始化用户的购物车
        this.baseService.get(`api/cart/linweiwei`).subscribe(
            (res)=>{
                let products:Product[] = [];
                for(let item of res){
                    this.cartId = item.cartId;
                    console.log(item.product);
                    products.push(item.product);
                }
                this.cartProducts.next(List(products));
            }
        )
    }


    //添加到购物车
    addToCart(product:Product):Observable<boolean>{
        //保存到服务端
        let saveObs = this.addToCartBackend(product);
        saveObs.subscribe(
            (res)=>{
                if(res == true){
                    this.cartProducts.next(this.cartProducts.getValue().push(product));
                }
            },
            (error)=>{
                console.log(error);
            }

        )
        return saveObs;
    }

    //从购物车中移除
    removeFromCart(product:Product):void{
         let removeObs = this.removeFromCartBackend(product);
         removeObs.subscribe(
             (res)=>{
                 if(res == true){
                     this.cartProducts.next(
                         this.cartProducts.getValue().delete(this.cartProducts.getValue().indexOf(product))
                     )
                 }
                 else{
                     console.log(res);
                 }

             },
             (error)=>{
                 console.log(error);
             }
         )
    }

    /********** 保存到服务端 *************/
    addToCartBackend(product:Product){
        let productsArr:Product[] = this.cartProducts.getValue().toArray();
        productsArr.push(product);
        let relations = [];
        for(let product of productsArr){
            let relation = {id:100,cartId:this.cartId,productId:product.productId};
            relations.push(relation);
        }
        //拼装参数
        let params = {};
        params['cartId'] = this.cartId;
        params['username'] = "linweiwei";
        params["productNums"] = productsArr.length;
        params["relationList"] = relations;

        return this.baseService.postNoRepeat("api/cart/saveCartInfo",params);
        //this.baseService.post("api/product/new",product);
    }

    removeFromCartBackend(product:Product){
        let productsArr:Product[] = this.cartProducts.getValue().toArray();
        productsArr = productsArr.filter(
            (item)=>{
            return item != product
        })
        let relations = [];
        for(let product of productsArr){
            let relation = {id:100,cartId:this.cartId,productId:product.productId};
            relations.push(relation);
        }
        //拼装参数
        let params = {};
        params['cartId'] = this.cartId;
        params['username'] = "linweiwei";
        params["productNums"] = productsArr.length;
        params["relationList"] = relations;

        return this.baseService.postNoRepeat("api/cart/saveCartInfo",params);
    }

}