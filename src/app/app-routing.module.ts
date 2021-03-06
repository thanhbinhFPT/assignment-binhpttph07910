import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './front/home/home.component';
import { AdminComponent } from './backend/admin/admin.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { ProductDetailComponent } from './front/product-detail/product-detail.component';
import { ProductAddComponent } from './backend/product-add/product-add.component';
import { ProductEditComponent } from './backend/product-edit/product-edit.component';
import { ProducListComponent } from './front/produc-list/produc-list.component';
import { AboutComponent } from './front/about/about.component';
import { NewsComponent } from './front/news/news.component';
import { NewsDetailComponent } from './front/news-detail/news-detail.component';
import { TuyendungComponent } from './front/tuyendung/tuyendung.component';
import { ContactComponent } from './front/contact/contact.component';
import { DashboardDetailComponent } from './backend/dashboard-detail/dashboard-detail.component';

const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'product', component: ProducListComponent},
  {path: 'news', component: NewsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'newsDetail', component:NewsDetailComponent}, 
  {path: 'tuyendung', component: TuyendungComponent},
  {path: 'home/product/:productID', component:  ProductDetailComponent},
  {path: 'admin', component: AdminComponent,
children: [
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent,},
  {path: 'dashboard/:productID', component:  DashboardDetailComponent},
  {path: 'add', component: ProductAddComponent},
  {path: 'dashboard/edit/:productID', component: ProductEditComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }