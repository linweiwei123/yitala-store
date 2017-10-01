/**
 * Created by yitala on 2017/8/7.
 */

/**
 * Created by yitala on 2017/6/3.
 */

import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
    name:'orderState'
})

export class OrderStatePipe implements PipeTransform{

    transform(value: any, ...args: any[]) {
        let text = "";
        switch (value){
            case 'confirm':text = "确认中";break;
            case 'shipped':text = "已发货";break;
            case 'finish':text = "结束";break;
            default:text = value;break;
        }
        return text;
    }

}

@Pipe({
    name:'productCategory'
})

export class productCategory implements PipeTransform{

    transform(value: any, ...args: any[]) {
        let result = "";
        switch (value){
            case 'earring':result="耳夹／耳钉";break;
            case 'necklace':result="项链";break;
            case 'bracelet':result="手链";break;
            case 'ring':result="戒子";break;
            case 'brooch':result="胸针";break;
            case 'bag':result="包包";break;
            case 'watch':result="手表";break;
            case 'other':result="其他";break;
            default:result="其他";break;
        }
        return result;
    }

}