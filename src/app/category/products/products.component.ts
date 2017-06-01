import {Component, OnInit} from "@angular/core";
import {NgbPaginationConfig} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {BaseService} from "../../share/layout/service/base.service";
import {Product} from "../../share/layout/models/product";
/**
 * Created by yitala on 2017/3/18.
 */

@Component({
    selector:'products',
    templateUrl:'./products.component.html',
    styleUrls:['./products.component.css']
})

export class ProductsComponent implements OnInit{

    private type:string;
    page:number = 1;
    size:number = 12;
    private totalElements:number;
    private productsList:Array<Product> =[]

    constructor(
        config: NgbPaginationConfig,
        private router:Router,
        private activedRoute:ActivatedRoute,
        private baseService:BaseService
    ) {
        // customize default values of paginations used by this component tree
        config.size = 'lg';
        config.boundaryLinks = true;
        activedRoute.params.subscribe(
            params =>{
                if(this.type != params["type"]){
                    this.type = params["type"];
                    this.queryProductsByType();
                }

            }
        )
    }

    ngOnInit(): void {
        //this.queryProductsByType();
    }


    gotoProductDetail(id:string){
        console.log(id);
        this.router.navigate([`/product`,id]);
    }

    queryProductsByType(){
        let url =`api/product/page?page=${this.page-1}&size=${this.size}&type=${this.type}&status=all`;
        this.baseService.get(url)
            .subscribe(
                (response)=>{
                    //console.log(response);
                    let data = response.content;
                    for(let item of data){
                        item.images = item.images.substring(0,item.images.indexOf(','));
                    }
                    this.productsList = data.concat(data).concat(data);
                    this.totalElements = response.totalElements;
                },
                (error)=>{
                    console.log(error);
                },
                ()=>{
                    console.log("complete");
                }
            )
    }
}