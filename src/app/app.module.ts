import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductService } from './product.service';
import { AdminComponent } from './backend/admin/admin.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { HomeComponent } from './front/home/home.component';
import { SlideHomeComponent } from './front/slide-home/slide-home.component';
import { ProductDetailComponent } from './front/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductAddComponent } from './backend/product-add/product-add.component';




@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,HttpClientModule,NgbModule],
  declarations: [ AppComponent, HelloComponent, AdminComponent, DashboardComponent,  HomeComponent, SlideHomeComponent, ProductDetailComponent, ProductAddComponent],
  bootstrap:    [ AppComponent ],
  providers: [ProductService] 
})
export class AppModule { }
