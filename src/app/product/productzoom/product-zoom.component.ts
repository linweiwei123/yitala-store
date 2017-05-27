/**
 * Created by yitala on 2017/5/25.
 */
import {Component} from "@angular/core";
@Component({
    selector:'product-zoom',
    templateUrl:'./product-zoom.component.html',
    styleUrls:['./product-zoom.component.css']
})

export class ProductZoomComponent{

    smallImageSrc:string = "http://ojp8ivtxn.bkt.clouddn.com/20170113_463667199203471127.jpg";
    private zoomOptions = {
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
    private SwipeOptions:any;
    imgs = [
        "http://ojp8ivtxn.bkt.clouddn.com/20170113_463667199203471127.jpg",
        "http://ojp8ivtxn.bkt.clouddn.com/20170113_463667199203471127.jpg",
        "http://ojp8ivtxn.bkt.clouddn.com/20170113_WechatIMG786.jpeg",
        "http://ojp8ivtxn.bkt.clouddn.com/20170114_WechatIMG783.jpeg"
    ]
    chooseImg(img:string):void{
        this.smallImageSrc = img;
    }

}