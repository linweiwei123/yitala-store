/**
 * Created by yitala on 2017/8/7.
 */

import {Component, OnInit} from "@angular/core";
import {Address} from "../../share/models/address.model";
import {BaseService} from "../../share/service/base.service";
import {AuthenticationService} from "../../share/service/authentication.service";
import {Observable} from "rxjs/Observable";
@Component({
    selector:'account-addressinfo',
    templateUrl:'./addressinfo.component.html',
    styleUrls:['./addressinfo.component.css']
})

export class AddressInfoComponent implements OnInit{

    username:string;
    state:string = "";
    addressArray:Array<Address>=[];
    formStatus:boolean = false;
    editAddress:Address = new Address();
    toDeleteAddress:Address = new Address();
    confirmStatus:boolean = false;

    constructor(
        private baseService:BaseService,
        private authenticationService:AuthenticationService
    ){

    }

    ngOnInit(): void {
        this.initAddressList();
    }

    initAddressList():void{
        this.authenticationService.currentUser.flatMap(
            (data:any)=>{
                if(data.username){
                    this.username = data.username;
                    return this.baseService.authGet(`api/address/${data.username}`)
                }
                else{
                    return Observable.from([1]);
                }
            }
        ).subscribe(
            (response:any)=>{
                this.addressArray = response;
                if(response.length>0){
                    this.state = "update";
                    // this.addressArray.push(new Address(1,'林伟伟','15959047128','福建省福州市仓上区中庚城30栋301室'));
                    // this.addressArray.push(new Address(2,'伟伟','15959047128','福建省福州市仓上区中庚城30栋301室'));
                    this.editAddress = this.addressArray[0];
                }
                else {
                    this.editAddress = null;
                }
            },
            (error:any)=>{
                console.log(error);
            }
        )

    }

    reFresh():void{
        this.baseService.authGet(`api/address/${this.username}`).subscribe(
            (response:any)=>{
                this.addressArray = response;
                if(response.length>0){
                    this.state = "update";
                    // this.addressArray.push(new Address(1,'林伟伟','15959047128','福建省福州市仓上区中庚城30栋301室'));
                    // this.addressArray.push(new Address(2,'伟伟','15959047128','福建省福州市仓上区中庚城30栋301室'));
                    this.editAddress = this.addressArray[0];
                }
                else {
                    this.editAddress = null;
                }
            },
            (error:any)=>{
                console.log(error);
            }
        )
    }


    newAddress():void{
        this.state = "create";
        this.editAddress = null;
    }

    onSubmitForm(param:any):void{

        this.formStatus = true;
        param.account = this.username;
        this.baseService.authPost(`api/address/save`,param).
        subscribe(
            (res)=>{
                console.log('respose',res);
                if(res == true){
                    this.formStatus = false;
                    this.reFresh();
                }
                else{
                    this.formStatus = false;
                }
            },
            (error)=>{
                this.formStatus = false;
                console.log(error);
            }
        )
    }

    edit(item:Address):void{
        console.log(item);
        this.state = "update";
        this.editAddress = item;
    }

    delete(item:Address):void{
        this.confirmStatus = true;
        this.toDeleteAddress = item;

    }

    confirm():void{
        this.baseService.authDelete(`api/address/${this.toDeleteAddress.id}`).
        subscribe(
            (res)=>{
                if(res == true){
                    this.confirmStatus = false;
                    this.reFresh();
                }
                else{
                    this.confirmStatus = false;
                }
            },
            (error)=>{
                this.confirmStatus = false;
                console.log(error);
            }
        )
    }

    cancelDelete(){
        this.confirmStatus = false;
    }

}