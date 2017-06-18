/**
 * Created by yitala on 2017/3/15.
 */

import {Component, ElementRef, OnInit} from "@angular/core";
import {CartService} from "../../service/cart.service";
import {Product} from "../../models/product";
import {List} from "immutable";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector:'layout-footer',
    templateUrl:'./footer.component.html',
    styleUrls:['./footer.component.css'],
    animations:[
        trigger('productInOut',[
            state('in',style({
                transform:'translateX(0)',
                opacity:1
            })),
            transition('void => *',[
                style({
                    transform:'translateX(-100%)',
                    opacity:0
                }),
                animate('200ms ease-in')
            ]),
            transition('* => void',[
                animate('200ms ease-out',style({
                    transform:'translateX(100%)',
                    opacity:0
                }))
            ])
        ])
    ]
})

export class FooterComponent implements OnInit{


    private cartNumber:number = 0;
    private cartProducts:Array<Product>=[];
    private cartTotalPrice:number= 0;
    private cartOpen:boolean = false;
    private serviceOpen:boolean = false;

    constructor(
        private cartService:CartService,
        private elementRef:ElementRef
    ){}

    ngOnInit(): void {
        this.cartService.cartProducts$.subscribe(
            (cartProducts: List<Product>)=>{
                this.cartNumber = cartProducts.size;
                this.cartProducts = cartProducts.toArray();
                let totalPrice = 0;
                for(let item of this.cartProducts){
                    totalPrice += item.discount?item.price*item.discount/100:item.price;
                }
                this.cartTotalPrice = parseFloat(totalPrice.toFixed(1));
            }
        )
    }

    scrollTop():void{
        window.scrollTo(0,0);
    }

    //显示隐藏客服模块
    toggleServiceBox():void{
        this.serviceOpen = !this.serviceOpen;
    }

    //显示隐藏购物车
    toggleCartBox():void{
        this.serviceOpen = false;
        this.cartOpen = !this.cartOpen;
    }

    //关闭cartBox
    closeCartBox():void{
        this.cartOpen = false;
    }

    //删除商品
    removeProduct(product:Product):void{
        this.cartService.removeFromCart(product);
    }
}