import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './front/home/home.component';
import { AdminComponent } from './backend/admin/admin.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { ProductDetailComponent } from './front/product-detail/product-detail.component';
import { ProductAddComponent } from './backend/product-add/product-add.component';








const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'home/:productID', component:  ProductDetailComponent},
  {path: 'admin', component: AdminComponent,
children: [
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent,},
  {path: 'add', component: ProductAddComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }