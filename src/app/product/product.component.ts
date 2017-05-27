/**
 * Created by yitala on 2017/5/24.
 */
import {Component, HostListener} from "@angular/core";
@Component({
    selector:'product',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css']
})

export class ProductComponent{

    images = [
        "http://ojp8ivtxn.bkt.clouddn.com/20170113_463667199203471127.jpg",
        "http://ojp8ivtxn.bkt.clouddn.com/20170113_463667199203471127.jpg",
        "http://ojp8ivtxn.bkt.clouddn.com/20170113_WechatIMG786.jpeg",
        "http://ojp8ivtxn.bkt.clouddn.com/20170114_WechatIMG783.jpeg"
    ]
}