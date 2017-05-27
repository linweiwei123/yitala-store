/**
 * Created by Linweiwei on 2016/12/22.
 */
import {Component, OnInit} from "@angular/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {GlobalLoadingComponent} from "../share/loading/global-loading.component";
@Component({
    selector:"my-dashboard",
    templateUrl:"./home.component.html",
    styleUrls:["./home.component.css"]
})

export class HomeComponent extends GlobalLoadingComponent implements OnInit{

    constructor(
        private modalService:NgbModal
    ){
        super();
    }

    ngOnInit(): void {

    }


}