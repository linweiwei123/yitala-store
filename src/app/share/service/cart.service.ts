import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Product} from "../models/product";
import {BaseService} from "./base.service";
import {List} from 'immutable';
import {Observable} from "rxjs/Observable";
import {AuthenticationService} from "./authentication.service";
import {Router} from "@angular/router";
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';

/**
 * Created by yitala on 2017/6/17.
 */

@Injectable()
export class CartService{

    private username:string;
    public cartId:number;
    private cartProducts : BehaviorSubject<List<Product>> = new BehaviorSubject(List([]));
    public cartProducts$ = this.cartProducts.asObservable();
    public isAuthenticated:boolean;

    constructor(
        private baseService:BaseService,
        private authenticationService:AuthenticationService,
        private router:Router
    ){
        this.initCartInfo()
    }

    //init cart info
    initCartInfo(){
        //初始化用户的购物车
        this.authenticationService.currentUser.flatMap(
                (data:any)=>{
                    console.log("用户信息",data.username);
                    if(data.username){
                        this.username = data.username;
                        return this.baseService.authGet(`api/cart/${data.username}`)
                    }
                    else{
                        return Observable.from([1]);
                    }
                }
            )
            .subscribe(
                (res:any)=>{
                    if(res.cartId){
                        this.cartId = res.cartId;
                    }
                    if(res.products && res.products.length>0){
                        let products:Product[] = [];
                        for(let item of res.products) {
                            products.push(item);
                        }
                        this.cartProducts.next(List(products));
                    }

                },
                (error:any)=>{
                    console.log("car error",error);
                }
            )

        this.authenticationService.isAuthenticated.subscribe(
            (isAuthenticated:any)=>{
                this.isAuthenticated = isAuthenticated;
            }
        )
    }


    //添加到购物车
    addToCart(product:Product):Observable<any>{
        this.checkAuthenticated();
        //保存到服务端
        let saveObs = this.addToCartBackend(product);
        saveObs.subscribe(
            (res:any)=>{
                if(res != null && res.cartId != null){
                    this.cartProducts.next(this.cartProducts.getValue().push(product));
                }
            },
            (error:any)=>{
                console.log(error);
            }

        )
        return saveObs;
    }

    //从购物车中移除
    removeFromCart(product:Product):void{
        this.checkAuthenticated();
         let removeObs = this.removeFromCartBackend(product);
         removeObs.subscribe(
             (res:any)=>{
                 if(res != null){
                     this.cartProducts.next(
                         this.cartProducts.getValue().delete(this.cartProducts.getValue().indexOf(product))
                     )
                 }
                 else{
                     console.log(res);
                 }

             },
             (error:any)=>{
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
        params['username'] = this.username;
        params["productNums"] = productsArr.length;
        params["relationList"] = relations;

        return this.baseService.postNoRepeat("api/cart/saveCartInfo",params);
        //this.baseService.post("api/product/new",product);
    }

    removeFromCartBackend(product:Product){
        let productsArr:Product[] = this.cartProducts.getValue().toArray();
        productsArr = productsArr.filter(
            (item:any)=>{
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
        params['username'] = this.username;
        params["productNums"] = productsArr.length;
        params["relationList"] = relations;

        return this.baseService.postNoRepeat("api/cart/saveCartInfo",params);
    }


    checkAuthenticated(){
        if(!this.isAuthenticated){
            this.router.navigate(["auth/login"]);
        }
        return;
    }

    reloadCartInfo(){
        this.baseService.authGet(`api/cart/${this.username}`).subscribe(
            (res:any)=>{
                if(res.cartId){
                    this.cartId = res.cartId;
                }
                if(res.products && res.products.length>0){
                    let products:Product[] = [];
                    for(let item of res.products){
                        products.push(item);
                    }
                    this.cartProducts.next(List(products));
                }
                else {
                    this.cartId = null;
                }
            },
            (error:any)=>{
                console.log("car error",error);
            }
        );
    }

}