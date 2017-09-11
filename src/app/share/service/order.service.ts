import {Injectable} from "@angular/core";
import {OrderInfo} from "../models/order-info.model";
import {AuthenticationService} from "./authentication.service";
import {BaseService} from "./base.service";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
/**
 * Created by yitala on 2017/8/19.
 */

@Injectable()
export class OrderService{
    private orders:Array<OrderInfo>=[];
    private orderNum:BehaviorSubject<number> = new BehaviorSubject(0);
    public orderNum$ = this.orderNum.asObservable();

    constructor(
        private baseService:BaseService,
        private authenticationService:AuthenticationService
    ){
      this.initOrderInfo();
    }


    //用户认证之后，查询未支付订单数
    initOrderInfo(){
        this.authenticationService.currentUser.flatMap(
            (data:any)=>{
                if(data.username){
                    return this.baseService.authGet("api/order/getOrderNum",{})
                }
                else{
                    return Observable.from([0]);
                }
            }
        )
            .subscribe(
                (res:any)=>{
                   this.orderNum.next(res);
                },
                (error:any)=>{
                    console.log("car error",error);
                }
            )
    }

    //刷新订单数
    reloadOrderInfo(){
        this.baseService.authGet(`api/order/getOrderNum`).subscribe(
            (res:any)=>{
                this.orderNum.next(res);
            },
            (error:any)=>{
                console.log("car error",error);
            }
        );
    }



    getOrderInfo(id:string):OrderInfo{
        if(this.orders && this.orders){
            let arr = this.orders.filter((item)=>{
                return item.orderCode == id
            });
            return arr.length>0?arr[0]:null;
        }
        return null;
    }

    setOrderInfo(orders:Array<OrderInfo>):void{
        this.orders = orders;
    }

}