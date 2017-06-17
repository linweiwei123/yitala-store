/**
 * Created by yitala on 2017/5/25.
 */
import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
@Component({
    selector:'product-zoom',
    templateUrl:'./product-zoom.component.html',
    styleUrls:['./product-zoom.component.css']
})

export class ProductZoomComponent implements OnChanges{

    public smallImageSrc:string="";

    @Input()
    public images:any[];

    public zoomOptions = {
        hoverView: {
            zIndex: '10'
        },
        peepView: {
            borderColor: '#fff',
            borderWidth: '2px',
            borderStyle: 'solid',
            cursor: 'zoom-in',
        },
        zoomView: {
            position: 'absolute',
            zIndex: '10'
        },
        settings: {
            zoom: 3   // 4x zoom
        }
    }

    constructor(){

    }

    ngOnChanges(changes: SimpleChanges): void {
        this.smallImageSrc = this.images[0];
    }


    chooseImg(img:string):void{
        this.smallImageSrc = img;
    }

}