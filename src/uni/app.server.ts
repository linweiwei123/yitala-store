/**
 * Created by yitala on 2017/5/27.
 */

import { NgModule } from "@angular/core";
import { ServerModule } from "@angular/platform-server";
import { AppModule } from "../app/app.module";
import { AppComponent } from "../app/app.component";
import { APP_BASE_HREF } from "@angular/common";
@NgModule({
    imports: [
        ServerModule,
        AppModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        {
            provide: APP_BASE_HREF , useValue: '/'
        }
    ]
})

export class AppServerModule {

}