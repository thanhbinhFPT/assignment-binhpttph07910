import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selected: Product;
  products: Product[];
  constructor(
    private productSevice: ProductService
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  showDetail(product){
    this.selected = product;
  }
  getProduct(){
    this.productSevice.getProducts().subscribe(data => {
      this.products = data;
    })
  }
}