/**
 * Created by yitala on 2017/8/7.
 */
import {Component, OnInit} from "@angular/core";
import {BaseService} from "../../share/service/base.service";
import {OrderInfo} from "../../share/models/order-info.model";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {OrderService} from "../../share/service/order.service";
@Component({
    selector:'account-order',
    templateUrl:'./order.component.html',
    styleUrls:['./order.component.css']
})

export class OrderComponent implements OnInit{

    orderInfoArr:Array<OrderInfo> = [];
    loading:boolean = false;

    constructor(
        private baseService:BaseService,
        private orderService:OrderService,
        private router:Router
    ){}

    ngOnInit(): void {
        this.loading = true;
        this.baseService.authGet("api/order/getOrderInfo",{}).subscribe(
            (data)=>{
                this.loading = false;
                this.orderInfoArr = data;
                this.orderService.setOrderInfo(data);
            }
        );

    }

    goDetail(item:any):void{
          this.router.navigate(['account/orderdetail',item.orderCode])
    }
}