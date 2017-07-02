/**
 * Created by yitala on 2017/5/30.
 */

import {Injectable} from "@angular/core";
import {Http,Headers,RequestOptionsArgs} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {JwtService} from "./jwt.service";
@Injectable()
export class BaseService{

    constructor(
        private http:Http,
        private jwtService:JwtService
    ){}

    get(url:string,params?:any){
        let options:RequestOptionsArgs = {};
        options.headers = this.setHeaders();
        return this.http.get(url,options)
            .map(res=>res.json());
    }

    post(url:string,params:any){
        let options:RequestOptionsArgs = {};
        options.headers = this.setHeaders();
        return this.http.post(url,params,options)
            .map(res=>res.json());
    }

    postNoRepeat(url:string,params:any){
        let options:RequestOptionsArgs = {};
        options.headers = this.setAuthHeaders();
        return this.http.post(url,params,options)
            .publishLast()
            .refCount()
            .map(res=>res.json());
    }


    authGet(url:string,params?:any){
        let options:RequestOptionsArgs = {};
        options.headers = this.setAuthHeaders();
        return this.http.get(url,options)
            .map(res=>{
                return res.json();
            });
    }

    authPost(url:string,params:any){
        let options:RequestOptionsArgs = {};
        options.headers = this.setAuthHeaders();
        return this.http.post(url,params,options)
            .map(res=>{
                return res.json();
            });
    }


    private setHeaders():Headers{
        let headers = new Headers();
        headers.append("Content-Type", 'application/json');
        return headers;
    }

    private setAuthHeaders():Headers{
        let headers = new Headers();
        headers.append("Content-Type", 'application/json');
        headers.append("Authorization",this.jwtService.getToken());
        return headers;
    }


}