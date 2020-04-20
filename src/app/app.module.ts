import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AdminComponent } from './backend/admin/admin.component';
import { ProductManagerComponent } from './backend/product-manager/product-manager.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProductService } from './product.service';
import { ProductDetailComponent } from './backend/product-detail/product-detail.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, AdminComponent, ProductManagerComponent, DashboardComponent, HomeComponent, ProductDetailComponent],
  bootstrap:    [ AppComponent ],
  providers: [ProductService] 
})
export class AppModule { }
