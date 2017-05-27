var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from "./app.component";
import './rxjs-extensions';
import '../assets/css/styles.css';
import { ShareModule } from "./share/share.module";
import { AppRoutingModule } from "./app-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./share/layout/header/header.component";
import { FooterComponent } from "./share/layout/footer/footer.component";
import { ProductComponent } from "./product/product.component";
import { ProductZoomComponent } from "./product/productzoom/product-zoom.component";
import { HomeComponent } from "./home/home.component";
import { CartComponent } from "./cart/cart.component";
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
            CartComponent
        ],
        providers: [],
        bootstrap: [AppComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map