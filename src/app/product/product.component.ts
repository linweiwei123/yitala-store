/**
 * Created by yitala on 2017/5/24.
 */
import {Component, HostListener, OnInit} from "@angular/core";
import {BaseService} from "../share/layout/service/base.service";
import {Product} from "../share/layout/models/product";
import {ActivatedRoute} from "@angular/router";
@Component({
    selector:'product',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css']
})

export class ProductComponent implements OnInit{

    private product:Product = new Product();
    private productId:string;

    constructor(
        private baseService:BaseService,
        private activatedRoute:ActivatedRoute
    ){
        this.activatedRoute.params.subscribe(
            params=>{
                this.productId = params["id"];
            }
        );
    }

    ngOnInit(): void {
        this.getProduct(this.productId);
    }

    images = [
        "http://ojp8ivtxn.bkt.clouddn.com/20170113_463667199203471127.jpg",
        "http://ojp8ivtxn.bkt.clouddn.com/20170113_463667199203471127.jpg",
        "http://ojp8ivtxn.bkt.clouddn.com/20170113_WechatIMG786.jpeg",
        "http://ojp8ivtxn.bkt.clouddn.com/20170114_WechatIMG783.jpeg"
    ]

    //获取商品详细信息
    getProduct(id:string):void{
        this.baseService.get(`api/product/${id}`).subscribe(
            (response)=>{
                this.product = response;
                this.product.imagesArray = response.images.substring(0,response.images.length-1).split(",");
                console.log(this.product);
            },
            (error)=>{
                console.log(error);
            }
        );

    }
}