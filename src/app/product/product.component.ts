/**
 * Created by yitala on 2017/5/24.
 */
import {Component, HostListener} from "@angular/core";
@Component({
    selector:'product',
    templateUrl:'product.component.html',
    styleUrls:['./product.component.css']
})

export class ProductComponent{

    smallImageSrc:string = "http://ojp8ivtxn.bkt.clouddn.com/20170113_463667199203471127.jpg";
    zoomedImageSrc:string = "http://ojp8ivtxn.bkt.clouddn.com/20170113_463667199203471127.jpg";
    width:string = "300";
    height:string = "300";
    minZoomLevel:number = 1;
    maxZoomLevel:number = 2;
    lensHeight:number = 500;
    lensWidth:number = 500;
    lensBorder:number = 1;
    allowZoom:boolean = true;

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(event:any) {
    console.log(window.scrollY);
    if(window.scrollY>0){
        this.allowZoom = false;
    }
    else{
        this.allowZoom =true;
    }
    }
}