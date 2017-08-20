import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Address} from "../../../share/models/address.model";
/**
 * Created by yitala on 2017/7/29.
 */

function validatePhoneNO(c:FormControl){
    let PHONE_NO = /^0{0,1}(13[0-9]|15[0-9]|153|156|18[7-9])[0-9]{8}$/;
    return PHONE_NO.test(c.value)?null:{
        validatePhoneNO:{
            valid:false
        }
    }
}

@Component({
    selector:'account-address',
    templateUrl:'./address.component.html',
    styleUrls:['./address.component.css']
})

export class AddressComponent implements OnInit,OnChanges{

    @Input()
    addressInfo:Address;

    @Output()
    onSubmit = new EventEmitter<Address>();

    addressForm:FormGroup;

    constructor(
        private fb:FormBuilder
    ){}

    ngOnInit(): void {
        this.initForm();
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}): void {
        let addressIn = changes["addressInfo"];
        console.log("address changes",changes);
        if(addressIn.currentValue != addressIn.previousValue){
            if(addressIn.currentValue !=null){
                let data = changes["addressInfo"].currentValue;
                this.addressForm = this.fb.group({
                    username:[data.username,Validators.required],
                    phone:[data.phone,Validators.compose([Validators.required,validatePhoneNO])],
                    address:[data.address,Validators.required]
                })
                this.addressInfo = data;
            }
            else{
                this.addressForm = this.fb.group({
                    username:['',Validators.required],
                    phone:['',Validators.compose([Validators.required,validatePhoneNO])],
                    address:['',Validators.required]
                })
            }
        }
    }


    initForm():void{
        if(this.addressInfo){
            this.addressForm = this.fb.group({
                username:[this.addressInfo.username,Validators.required],
                phone:[this.addressInfo.phone,Validators.compose([Validators.required,validatePhoneNO])],
                address:[this.addressInfo.address,Validators.required]
            })
        }
        else{
            this.addressForm = this.fb.group({
                username:['',Validators.required],
                phone:['',Validators.compose([Validators.required,validatePhoneNO])],
                address:['',Validators.required]
            })
        }
    }

    submitForm(form:any):void{
        console.log(form);
        if(this.addressInfo){
            form.id = this.addressInfo.id;
        }
        this.onSubmit.emit(form);
    }
}