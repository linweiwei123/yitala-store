import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {BaseService} from "../../share/service/base.service";
import {ActivatedRoute} from "@angular/router";
import {Base64} from "js-base64";
import {Blog} from "../Blog";
/**
 * Created by yitala on 2017/9/2.
 */

@Component({
    selector:'blog-detail',
    templateUrl:'./blog-detail.component.html',
    styleUrls:['./blog-detail.component.css']
})

export class BlogDetailComponent implements OnInit{

    id:string;
    content:string;
    @ViewChild('contentContainer')
    contentContainer:ElementRef;
    blog:Blog = new Blog();

    constructor(
        private baseService:BaseService,
        private activatedRoute:ActivatedRoute
    ){
        this.activatedRoute.params.subscribe(
            params=>{
                this.id = params["id"];
            }
        );
    }

    ngOnInit(): void {
        this.getBlogDetail(this.id);
    }

    getBlogDetail(id:string){
        this.baseService.get(`api/blog/get/${id}`).subscribe(
            (response)=>{
                console.log(response);
                if(!response || response.status == 204){
                    this.content = "";
                }
                else{
                    this.blog = response;
                    this.content = Base64.decode(response.content);
                    console.log(this.content);
                }
                this.contentContainer.nativeElement.innerHTML = this.content;
            },
            (error)=>{
                console.log(error);
            }
        );
    };

}