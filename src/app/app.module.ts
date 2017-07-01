import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { AppComponent } from "./app.component";
import './rxjs-extensions';
import '../assets/css/styles.css';
import {ShareModule} from "./share/share.module";
import {AppRoutingModule} from "./app-routing.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./share/layout/header/header.component";
import {FooterComponent} from "./share/layout/footer/footer.component";
import {ProductComponent} from "./product/product.component";
import {ProductZoomComponent} from "./product/productzoom/product-zoom.component";
import {HomeComponent} from "./home/home.component";
import {CartComponent} from "./cart/cart.component";
import {BaseService} from "./share/service/base.service";
import {FilterImagePipe} from "./share/layout/pipes/FilterImagePipe";
import {RecommendComponent} from "./home/recommend/recommend.component";
import {CartService} from "./share/service/cart.service";
import {NewProductsComponent} from "./category/newproducts/new-products.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AddToCartComponent} from "./cart/addtocard/add-to-cart.component";
import {AuthenticationService} from "./share/service/authentication.service";
import {JwtService} from "./share/service/jwt.service";

@NgModule({
    imports: [
        NgbModule.forRoot(),
        BrowserModule.withServerTransition({
            appId: 'toh-universal'
        }),
        HttpModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        ShareModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        RecommendComponent,
        ProductComponent,
        ProductZoomComponent,
        CartComponent
    ],
    providers:[
        BaseService,
        AuthenticationService,
        JwtService,
        CartService
    ],
    bootstrap: [ AppComponent ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {


}
