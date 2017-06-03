/**
 * Created by Linweiwei on 2016/12/22.
 */
import {Component, OnInit} from "@angular/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {GlobalLoadingComponent} from "../share/loading/global-loading.component";
import {BaseService} from "../share/layout/service/base.service";
import {Product} from "../share/layout/models/product";
@Component({
    selector:"my-dashboard",
    templateUrl:"./home.component.html",
    styleUrls:["./home.component.css"]
})

export class HomeComponent extends GlobalLoadingComponent implements OnInit{

    private recProducts:Array<Product>;

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
        let url = "api/product/recommend";
        this.baseService.get(url)
            .subscribe(
                (response) => {
                    this.recProducts = response;
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