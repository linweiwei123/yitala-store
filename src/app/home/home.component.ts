/**
 * Created by Linweiwei on 2016/12/22.
 */
import {Component, OnInit} from "@angular/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {GlobalLoadingComponent} from "../share/loading/global-loading.component";
import {BaseService} from "../share/layout/service/base.service";
import {Product} from "../share/models/product";
@Component({
    selector:"my-dashboard",
    templateUrl:"./home.component.html",
    styleUrls:["./home.component.css"]
})

export class HomeComponent extends GlobalLoadingComponent implements OnInit{

    public recProducts:Array<Product> = [];
    public recShowProducts:Array<Product> =[];
    public discountProducts:Array<Product> = [];
    public discountShowProducts:Array<Product> =[];
    public newProducts:Array<Product> = [];
    public newShowProducts:Array<Product> =[];

    constructor(
        private modalService:NgbModal,
        private baseService:BaseService
    ){
        super();
    }

    ngOnInit(): void {
        this.queryRecProducts();
    }

    queryRecProducts() {
        let recUrl = "api/product/recommend";
        let discountUrl = "api/product/discount";
        let newUrl = "api/product/new";

        this.baseService.get(recUrl)
            .subscribe(
                (response) => {
                    this.recProducts = response;
                    this.recShowProducts = this.recProducts.slice(0,Math.min(4,this.recProducts.length));
                    console.log(response);
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    console.log("complete");
                }
            )


        this.baseService.get(discountUrl)
            .subscribe(
                (response) => {
                    this.discountProducts = response;
                    this.discountShowProducts = this.discountProducts.slice(0,Math.min(4,this.discountProducts.length));
                    console.log(response);
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    console.log("complete");
                }
            )

        this.baseService.get(newUrl)
            .subscribe(
                (response) => {
                    this.newProducts = response;
                    this.newShowProducts = this.newProducts.slice(0,Math.min(4,this.newProducts.length));
                    console.log(response);
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