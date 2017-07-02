/**
 * Created by yitala on 2017/7/2.
 */
import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from "@angular/core";
import {AuthenticationService} from "../service/authentication.service";
@Directive({
    selector:'[showAuthed]'
})
export class ShowAuthedDirective implements OnInit{

    public condition:boolean;

    constructor(
        private templateRef:TemplateRef<any>,
        private authenticationService:AuthenticationService,
        private viewContainer:ViewContainerRef
    ){}

    ngOnInit(): void {
        this.authenticationService.isAuthenticated.subscribe(
            (isAuthenticated)=>{
                if(isAuthenticated && this.condition || !isAuthenticated && !this.condition){
                    this.viewContainer.createEmbeddedView(this.templateRef);
                }
                else{
                    this.viewContainer.clear();
                }
            }
        )
    }

    @Input() set showAuthed(condition:boolean){
            this.condition = condition;
    }

}