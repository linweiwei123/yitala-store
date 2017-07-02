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
       if(this.jwtService.getToken()){
           this.baseService.authGet("api/user")
               .subscribe(
                   (data)=>{
                       let user = new User();
                       user.phoneNO = user.username = data.username;
                       user.email =  data.email;
                       user.token = this.jwtService.getToken();
                       this.setAuth(user);
                   },
                   (error)=>{
                       this.cleanAuth();
                   }
               );
       }
       else {
           this.cleanAuth();
       }
    }


    //认证用户
    login(username:string,password:string):Observable<User>{
        let param = {username:username,password:password};
        return this.baseService.post('api/authenticate',param)
            .map((response)=>{
                if(response.token){
                    this.jwtService.saveToken(response.token);
                    this.baseService.authGet("api/user")
                        .subscribe(
                            (data)=>{
                                let user = new User();
                                user.phoneNO = user.username = data.username;
                                user.email =  data.email;
                                user.token = response.token;
                                this.setAuth(user);
                            },
                            (error)=>{
                                console.log(error);
                            }
                        )
                    // this.jwtService.saveToken(response.token);
                }
                return response;
            })
    }

    setAuth(user:User){
        this.jwtService.saveToken(user.token);
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
    }

    cleanAuth(){
        this.jwtService.destoryToken();
        this.currentUserSubject.next(new User());
        this.isAuthenticatedSubject.next(false);
    }
}