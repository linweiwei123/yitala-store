/**
 * Created by yitala on 2017/5/30.
 */

import {Injectable} from "@angular/core";
import {Http,Headers,RequestOptionsArgs} from "@angular/http";
@Injectable()
export class BaseService{

    constructor(
        private http:Http
    ){}

    get(url:string,params?:any){
        let options:RequestOptionsArgs = {};
        options.headers = this.setHeaders();
        return this.http.get(url,options)
            .map(res=>res.json());
    }

    private setHeaders():Headers{
        let headers = new Headers();
        headers.append("Content-Type", 'application/json');
        return headers;
    }
}