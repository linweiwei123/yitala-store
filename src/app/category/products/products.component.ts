import {Component, OnInit} from "@angular/core";
import {NgbPaginationConfig} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {BaseService} from "../../share/service/base.service";
import {Product} from "../../share/models/product";
/**
 * Created by yitala on 2017/3/18.
 */

@Component({
    selector:'products',
    templateUrl:'./products.component.html',
    styleUrls:['./products.component.css']
})

export class ProductsComponent implements OnInit {

    public type: string;
    public page: number = 1;
    public size: number = 12;
    public sort: string = "createTime";
    public direction: string = "DESC";
    public totalElements: number;
    public productsList: Array<Product> = [];
    public randomList: Array<Product> = [];
    public loading: boolean = false;
    public typeLoading: boolean = false;

    constructor(config: NgbPaginationConfig,
                private router: Router,
                private activedRoute: ActivatedRoute,
                private baseService: BaseService) {
        // customize default values of paginations used by this component tree
        config.size = 'lg';
        config.boundaryLinks = true;
        activedRoute.params.subscribe(
            params => {
                if (this.type != params["type"]) {
                    this.type = params["type"];
                    this.queryProductsByType();
                }

            }
        )
    }

    ngOnInit(): void {
        //this.queryProductsByType();
        this.queryNewProducts();
    }

    changeType(type: string) {
        this.type = type;
        this.queryProductsByType("typeLoading");
    }

    gotoProductDetail(id: string) {
        this.router.navigate([`/product`, id]);
    }

    queryNewProducts() {
        let url = "api/product/page?page=0&size=20&type=all&status=all&sort=createTime";
        this.baseService.get(url)
            .subscribe(
                (response) => {
                    //console.log(response);
                    let data = response.content;
                    let maxNumber = data.length > 20 ? 20 : data.length;
                    let items = data.sort(function () {
                        return 0.5 - Math.random()
                    });
                    this.randomList = items.slice(0, Math.min(maxNumber, 4));
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    console.log("complete");
                }
            )
    }

    queryProductsByType(loadingType?:string) {
        let url = `api/product/page?page=${this.page - 1}&size=${this.size}&type=${this.type}&status=all&sort=${this.sort},${this.direction}`;
        loadingType?this.typeLoading = true:this.loading = true;
        this.baseService.get(url)
            .subscribe(
                (response) => {
                    //console.log(response);
                    let data = response.content;
                    for (let item of data) {
                        item.images = item.images.substring(0, item.images.indexOf(','));
                    }
                    this.productsList = data;
                    this.totalElements = response.totalElements;
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    console.log("complete");
                    loadingType?this.typeLoading = false:this.loading = false;
                }
            )
    }

    changeSort(sortDirection: string): void {
        let arr = sortDirection.split("-");
        this.sort = arr[0];
        this.direction = arr[1];
        this.queryProductsByType();
    }

    changePageSize(size: number): void {
        this.size = size;
        this.queryProductsByType();
    }

}