/**
 * Created by yitala on 2017/7/2.
 */

import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthenticationService} from "./authentication.service";
import 'rxjs/add/operator/take';
@Injectable()
export class NoAuthGuard implements CanActivate{

    constructor(
        private authenticationService:AuthenticationService
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authenticationService.isAuthenticated.take(1).map((isAuth:any) => !isAuth);
    }

}