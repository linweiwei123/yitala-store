import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BlogListComponent} from "./list/blog-list.component";
import {BlogComponent} from "./blog.component";
import {BlogDetailComponent} from "./detail/blog-detail.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ShareModule} from "../share/share.module";

const blogRoutes:Routes = [
    {
        path:'',component:BlogComponent,
        children:[
            {
                path:'list',component:BlogListComponent
            },
            {
                path:'detail/:id',component:BlogDetailComponent
            },
            {
                path:'',redirectTo:'list'
            }
        ]
    }
]

@NgModule({
    imports:[
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        ShareModule,
        RouterModule.forChild(blogRoutes)
    ],
    declarations:[
        BlogComponent,
        BlogListComponent,
        BlogDetailComponent
    ],
    schemas:[
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class BlogModule{

}