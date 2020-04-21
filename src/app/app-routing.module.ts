import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminTextComponent } from './admin/admin-text/admin-text.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { AddProductComponent } from './add-product/add-product.component';






const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminTextComponent,
children: [
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'product', component: ProductManagerComponent},
  {path: 'product/:ProductID', component:ProductManagerComponent},
  { path: 'product/add', component: AddProductComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }