/**
 * Created by yitala on 2017/5/24.
 */
import {Component, ElementRef, HostListener, OnInit, ViewChild} from "@angular/core";
import {BaseService} from "../share/service/base.service";
import {Product} from "../share/models/product";
import {ActivatedRoute} from "@angular/router";
import {Base64} from "js-base64";
@Component({
    selector:'product',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css']
})

export class ProductComponent implements OnInit{

    public product:Product = new Product();
    public productId:string;
    public desc:string;

    @ViewChild('descContainer')
    descContainer:ElementRef;

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
        this.getDesc(this.productId);
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

    getDesc(id:string):void{
        this.baseService.get(`api/productDesc/${id}`).subscribe(
            (response)=>{
                if(response.status == 204){
                    this.desc = "";
                }
                else{
                    this.desc = Base64.decode(response.description);
                    console.log(this.desc);
                }
                this.descContainer.nativeElement.innerHTML = this.desc;
            },
            (error)=>{
                console.log(error);
            }
        );
    }


}