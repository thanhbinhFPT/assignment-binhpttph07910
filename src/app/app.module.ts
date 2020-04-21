import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { HomeComponent } from './home/home.component';
import { ProductService } from './product.service';
import { AdminTextComponent } from './admin/admin-text/admin-text.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, AdminTextComponent, ProductManagerComponent, DashboardComponent, HomeComponent, ProductDetailComponent, AddProductComponent],
  bootstrap:    [ AppComponent ],
  providers: [ProductService] 
})
export class AppModule { }
