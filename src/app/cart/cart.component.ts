/**
 * Created by yitala on 2017/5/25.
 */
import {Component, OnInit} from "@angular/core";
import {Product} from "../share/models/product";
import {CartService} from "../share/service/cart.service";
import {List} from "immutable";
import {Address} from "../share/models/address.model";
import {BaseService} from "../share/service/base.service";
import {AuthenticationService} from "../share/service/authentication.service";
import {Observable} from "rxjs/Observable";
import {Order} from "../share/models/order.model";
import {Router} from "@angular/router";
import {OrderService} from "../share/service/order.service";
@Component({
    selector:'cart',
    templateUrl:'./cart.component.html',
    styleUrls:['./cart.component.css']
})

export class CartComponent implements OnInit{

    public cartProducts:Array<Product>=[];
    public cartTotalPrice:number= 0;
    username:string;
    addressArray:Array<Address> = [];
    order:Order = new Order();
    tipsStatus:boolean = false;

    constructor(
        private cartService:CartService,
        private baseService:BaseService,
        private authService:AuthenticationService,
        private router:Router,
        private orderService:OrderService
    ){}

    ngOnInit(): void {
        this.loadCartInfo();
        this.loadAddressInfo();
    }

    //加载购物车信息
    loadCartInfo():void{
        this.cartService.cartProducts$.subscribe(
            (cartProducts: List<Product>)=>{
                this.cartProducts = cartProducts.toArray();
                let totalPrice = 0;
                for(let item of this.cartProducts){
                    totalPrice += item.discount?item.price*item.discount/100:item.price;
                }
                this.cartTotalPrice = parseFloat(totalPrice.toFixed(1));
            }
        )
    }

    loadAddressInfo():void{
        this.authService.currentUser.flatMap(
            (data:any)=>{
                if(data.username){
                    this.username = data.username;
                    return this.baseService.authGet(`api/address/${data.username}`)
                }
                else{
                    return Observable.from([1]);
                }
            }
        ).subscribe(
            (response:any)=>{
                this.addressArray = response;
                if(this.addressArray.length>0){
                    this.order.address = this.addressArray[0];
                }
            },
            (error:any)=>{
                console.log(error);
            }
        )
    }

    //提交订单
    submitOrder(){
        if(!this.order.address){
            this.tipsStatus = true;
            return;
        }
        //this.order.products = this.cartProducts;
        let products  = [];
        for(let item of this.cartProducts){
            products.push(item.productId);
        }
        let param = {
            words:this.order.words,
            addressId:this.order.address.id,
            cartId:this.cartService.cartId
        }
        this.baseService.authPost("api/order/save",param).subscribe(
            (response:any)=>{
                if(response == true){
                    //success
                    this.cartService.reloadCartInfo();
                    this.orderService.reloadOrderInfo();
                    this.router.navigate(['./cartcontact']);
                }
                else{
                    console.log(response);
                }
            },
            (error:any)=>{
                console.log(error);
           }
        )

    }

    close():void{
        this.tipsStatus = false;
    }

    //移除商品
    removeProduct(product:Product):void{
        this.cartService.removeFromCart(product);
    }

}