/**
 * Created by yitala on 2017/7/2.
 */

import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthenticationService} from "./authentication.service";
@Injectable()
export class AuthGuard implements CanActivate{


    constructor(
        private authenticationService:AuthenticationService,
        private router:Router
    ){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        this.authenticationService.isAuthenticated.subscribe(
            (isAuthenticated)=>{
                if(!isAuthenticated){
                    this.router.navigate(["auth/login"])
                }
            }
        );
        return this.authenticationService.isAuthenticated.take(1);
    }

}