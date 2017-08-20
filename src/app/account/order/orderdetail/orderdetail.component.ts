import {Component, OnInit} from "@angular/core";
import {OrderInfo} from "../../../share/models/order-info.model";
import {OrderService} from "../../../share/service/order.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../share/models/product";
/**
 * Created by yitala on 2017/8/19.
 */

@Component({
    selector:'account-orderdetail',
    templateUrl:'./orderdetail.component.html',
    styleUrls:['./orderdetail.component.css']
})

export class OrderDetailComponent implements OnInit{

    orderInfo:OrderInfo = new OrderInfo;
    orderCode:string;
    products:Array<Product> = [];

    constructor(
        private orderService:OrderService,
        private router:Router,
        private activatedRouter:ActivatedRoute
    ){
        this.activatedRouter.params.subscribe(
            (param)=>{
                this.orderCode = param["id"];
                console.log(param["id"]);
            }
        )
    }

    ngOnInit(): void {
        let orderInfo = this.orderService.getOrderInfo(this.orderCode);

        if(orderInfo === null){
            console.log("路由要跳转了");
            this.router.navigate(['account/order']);
            return;
        }
        this.orderInfo = orderInfo;
        let products = this.orderInfo == null? []:this.orderInfo.products;
        products.map((item)=>{
            item.images = item.images.substring(0,item.images.indexOf(","));
        })
        this.products = products;
        console.log(products);
    }

}