/**
 * Created by yitala on 2017/7/1.
 */

import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {User} from "../models/user.model";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {BaseService} from "./base.service";
import {Observable} from "rxjs/Observable";
import {JwtService} from "./jwt.service";

@Injectable()
export class AuthenticationService{

    private currentUserSubject = new BehaviorSubject<User>(new User());
    public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

    private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    constructor(
        private baseService:BaseService,
        private jwtService:JwtService
    ){}


    //app启动时检查token是否有效，有效则获取用户，无效则删除用户信息
    autoLogin(){
       this.baseService.authGet("api/user")
           .subscribe(
               (data)=>{
                   console.log(data);
               },
               (error)=>{
                   console.log(error);
               }
           );
    }


    //认证用户
    login(username:string,password:string):Observable<User>{
        let param = {username:username,password:password};
        return this.baseService.post('api/authenticate',param)
            .map((response)=>{
                if(response.token){
                    let user = new User();
                    user.phoneNO = user.username = username;
                    user.token = response.token;
                    this.setAuth(user);
                    this.jwtService.saveToken(response.token);
                }
                return response;
            })
    }

    setAuth(user:User){
        this.jwtService.saveToken(user.token);
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
    }

}