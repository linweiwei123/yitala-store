import {Product} from "./product";
/**
 * Created by yitala on 2017/8/7.
 */
export class OrderInfo{
    orderCode:string;
    images:Array<String>;
    quantity:number;
    price:number;
    date:string;
    state:string;
    words:string;
    products:Array<Product>;
}