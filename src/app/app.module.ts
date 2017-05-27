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
import {HomeComponent} from "./home/home.component";
import {FooterComponent} from "./share/layout/footer/footer.component";
import {ProductComponent} from "./product/product.component";
import {ProductZoomComponent} from "./product/productzoom/product-zoom.component";
import {CartComponent} from "./cart/cart.component";
import {LoginComponent} from "./account/login/login.component";
import {ProductsComponent} from "./category/products/products.component";
import {NewProductsComponent} from "./category/newproducts/new-products.component";

@NgModule({
    imports: [
        NgbModule.forRoot(),
        BrowserModule.withServerTransition({
            appId: 'toh-universal'
        }),
        HttpModule,
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
        ProductComponent,
        ProductZoomComponent,
        CartComponent,
        LoginComponent,
        ProductsComponent,
        NewProductsComponent
    ],
    providers:[
    ],
    bootstrap: [ AppComponent ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {


}
