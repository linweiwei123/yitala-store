/**
 * Created by yitala on 2017/5/25.
 */
import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, NavigationStart, Router, RoutesRecognized} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../share/service/authentication.service";

function validatePhoneNO(c:FormControl){
    let PHONE_NO = /^0{0,1}(13[0-9]|15[0-9]|153|156|18[7-9])[0-9]{8}$/;
    return PHONE_NO.test(c.value)?null:{
        validatePhoneNO:{
            valid:false
        }
    }
}

function passwordConfirm(g:FormGroup){
    return g.get('password').value === g.get('passwordConfirm').value?null:{'misMatch':true};
}

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent implements OnInit,OnDestroy{

    private routerSubscrition:any;
    private previosUrl:string;
    private loginForm:FormGroup;
    public error:string = "";
    public authFlag:string;
    public registerSuccess:boolean = false;
    public timeOutId:any;
    public timeIntervalId:any;
    public time:number = 3;

    constructor(
        private activatedRoute:ActivatedRoute,
        private router:Router,
        private fb:FormBuilder,
        private authenticationService:AuthenticationService
    ){
        this.loginForm = fb.group({
            'phoneNO':['',Validators.compose([Validators.required,validatePhoneNO])],
            // 'username':['',Validators.required],
            'password':['',Validators.required]
        })
    }


    ngOnInit(): void {

        this.activatedRoute.url.subscribe(
            data=>{
                this.authFlag = data[data.length-1].path;
                if(this.authFlag === 'register'){
                    this.loginForm.addControl('passwordConfirm',new FormControl('',Validators.required));
                    this.loginForm.setValidators(passwordConfirm);
                }
            }
        )
    }


    login():void{

        //let url  = this.previosUrl?this.previosUrl:'/cart';
        let url = "/cart";
        this.router.navigate([`${url}`]);
    }

    ngOnDestroy(): void {
        //this.routerSubscrition.unsubscribe();
        clearTimeout(this.timeOutId);
        clearInterval(this.timeIntervalId);
    }

    submitForm(form:any){
        console.log(form);
        if(this.authFlag == 'login'){
            this.authenticationService.login(form.phoneNO,form.password)
                .subscribe(
                    (response)=>{
                        console.log(response);
                        this.router.navigate(["/home"])
                    },
                    (error)=>{
                        if(error.status == '401'){
                            this.error = "账号密码错误";
                        }
                        else{
                            this.error = error.statusText;
                        }
                    }
                );
        }
        else{
            this.authenticationService.register(form.phoneNO,form.password)
                .subscribe(
                    (response)=>{
                        if(response.errorCode == 500){
                            this.error = response.message;
                        }
                        else{
                            this.registerSuccess = true;
                            this.timeOutId = setTimeout(()=>{
                                this.router.navigate(["/account/login"]);
                            },3000);
                            this.timeIntervalId = setInterval(()=>{
                                this.time--;
                            },1000)
                        }
                    },
                    (error)=>{
                        if(error.status == '401'){
                            this.error = "账号密码错误";
                        }
                        else{
                            this.error = error.statusText;
                        }
                    }
                );
        }

        //this.error = "账号密码错误"
    }
}