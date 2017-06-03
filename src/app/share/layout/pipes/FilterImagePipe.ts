/**
 * Created by yitala on 2017/6/3.
 */

import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
    name:'filterImage'
})

export class FilterImagePipe implements PipeTransform{

    transform(value: any, ...args: any[]) {
        if(value!=null && value != ""){
            return value.substring(value,value.indexOf(","));
        }
        else{
          return value;
        }
    }

}