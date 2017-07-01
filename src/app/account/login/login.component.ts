/**
 * Created by yitala on 2017/5/25.
 */
import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, NavigationStart, Router, RoutesRecognized} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../share/service/authentication.service";

function validatePhoneNO(c:FormControl){
    let PHONE_NO = /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/;
    return PHONE_NO.test(c.value)?null:{
        validatePhoneNO:{
            valid:false
        }
    }
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
                console.log(data);
            }
        )

        // this.routerSubscrition = this.router.events
        //     .pairwise().subscribe((e) => {
        //    console.log(e[0]);
        //    if( e[0] instanceof NavigationStart){
        //        this.previosUrl = e[0]["url"];
        //        console.log(this.previosUrl);
        //    }
        // })
    }


    login():void{

        //let url  = this.previosUrl?this.previosUrl:'/cart';
        let url = "/cart";
        this.router.navigate([`${url}`]);
    }

    ngOnDestroy(): void {
        //this.routerSubscrition.unsubscribe();
    }

    submitForm(form:any){
        console.log(form);
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
        //this.error = "账号密码错误"
    }
}