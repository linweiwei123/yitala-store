/**
 * Created by yitala on 2017/3/15.
 */

import {Component, ElementRef, OnInit} from "@angular/core";
import {CartService} from "../../service/cart.service";
import {Product} from "../../models/product";
import {List} from "immutable";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

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

    public cartNumber:number = 0;
    public cartProducts:Array<Product>=[];
    public cartTotalPrice:number= 0;
    public cartOpen:boolean = false;
    public serviceOpen:boolean = false;
    public cartId:number;
    public showTools:boolean = true;

    constructor(
        private cartService:CartService,
        private router:Router
    ){
        //登录与注册页面隐藏footer的悬浮操作栏
        router.events.subscribe((event:any) => {
            if(event instanceof NavigationEnd) {
                this.showTools = event.urlAfterRedirects.indexOf("/auth/register") == -1 && event.urlAfterRedirects.indexOf("/auth/login") == -1;
            }
            // window.scrollTo(0,0);
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
    }

    ngOnInit(): void {

        // this.activatedRoute

        this.cartService.cartProducts$.subscribe(
            (cartProducts: List<Product>)=>{
                console.log(cartProducts.toArray());
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

    //置顶
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
        let result = this.cartService.removeFromCart(product);
    }

}