/**
 * Created by yitala on 2017/5/24.
 */
import {Component, ElementRef, HostListener, OnInit, ViewChild} from "@angular/core";
import {BaseService} from "../share/service/base.service";
import {Product} from "../share/models/product";
import {ActivatedRoute} from "@angular/router";
import {Base64} from "js-base64";
import {CartService} from "../share/service/cart.service";
@Component({
    selector:'product',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css']
})

export class ProductComponent implements OnInit{

    public product:Product = new Product();
    public productId:string;
    public recProducts:Array<Product> = [];
    public recShowProducts:Array<Product> =[];
    public desc:string;
    status:string = "unadd";

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
        this.queryRecProducts();
        this.addScanTimes(this.productId);
    }

    //获取商品详细信息
    getProduct(id:string):void{
        this.baseService.get(`api/product/${id}`).subscribe(
            (response)=>{
                this.product = response;
                this.product.imagesArray = response.images.substring(0,response.images.length-1).split(",");
            },
            (error)=>{
                console.log(error);
            }
        );

    }

    getDesc(id:string):void{
        this.baseService.get(`api/productDesc/${id}`).subscribe(
            (response)=>{
                if(!response || response.status == 204){
                    this.desc = "";
                }
                else{
                    this.desc = Base64.decode(response.description);
                }
                this.descContainer.nativeElement.innerHTML = this.desc;
            },
            (error)=>{
                console.log(error);
            }
        );
    }

    addScanTimes(id:string){
        this.baseService.post(`api/product/read/${id}`,{}).subscribe(
            ()=>{},
            (error)=>{
                console.log(error);
            }
        )
    }

    queryRecProducts() {
        let recUrl = "api/product/recommend";
        this.baseService.get(recUrl)
            .subscribe(
                (response) => {
                    this.recProducts = response;
                    this.recShowProducts = this.recProducts.slice(0,Math.min(4,this.recProducts.length));
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    console.log("complete");
                }
            )
    }

}