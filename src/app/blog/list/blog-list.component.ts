import {Component, OnInit} from "@angular/core";
import {BaseService} from "../../share/service/base.service";
import {Blog} from "../Blog";
import {Router} from "@angular/router";
import {Product} from "../../share/models/product";
/**
 * Created by yitala on 2017/9/2.
 */

@Component({
    selector:'blog-list',
    templateUrl:'./blog-list.component.html',
    styleUrls:['./blog-list.component.css']
})

export class BlogListComponent implements OnInit{

    blogList:Array<Blog> = [];
    loading:boolean = false;
    total:number;
    page:number = 1;
    size:number = 10;
    moreLoading:boolean = false;
    recommendProducts:Array<Product> = [];
    constructor(
        private baseService:BaseService,
        private router:Router
    ){}

    ngOnInit(): void {
        this.getBlogList();
        this.queryNewProducts();
    }

    getBlogList(){
        this.loading = true;
        this.baseService.get(`api/blog/list?page=${this.page-1}&size=${this.size}`,{}).subscribe(
            (data:any)=>{
                this.loading = false;
                this.blogList = data.list;
                this.total = data.total;
            }
        );
    }

    gotoDetail(id:string){
        //this.router.navigate([`blog/detail/${id}`])
        //window.open("")
    }

    loadmore():void{
        this.moreLoading = true;
        let page = this.page+1;
        this.baseService.get(`api/blog/list?page=${page-1}&size=${this.size}`,{}).subscribe(
            (data:any)=>{
                this.moreLoading = false;
                this.blogList = this.blogList.concat(data.list);
                this.total = data.total;
            }
        );
    }

    queryNewProducts() {
        let url = "api/product/page?page=0&size=20&type=all&status=all&sort=createTime";
        this.baseService.get(url)
            .subscribe(
                (response) => {
                    console.log(response);
                    let data = response.content;
                    let maxNumber = data.length > 20 ? 20 : data.length;
                    let items = data.sort(function () {
                        return 0.5 - Math.random()
                    });
                    this.recommendProducts = items.slice(0, Math.min(maxNumber, 4));
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