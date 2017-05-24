import {Component} from "@angular/core";
import {NgbPaginationConfig} from "@ng-bootstrap/ng-bootstrap";
/**
 * Created by yitala on 2017/3/18.
 */

@Component({
    selector:'products',
    templateUrl:'products.component.html',
    styleUrls:['products.component.css']
})

export class ProductsComponent{

    private page:number = 4;
    private productsList:any[] = [
        {},
        {}
    ]

    constructor(config: NgbPaginationConfig) {
        // customize default values of paginations used by this component tree
        config.size = 'lg';
        config.boundaryLinks = true;
    }
}