import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
products: Product[];
  constructor(
    private productservice: ProductService
  ) { }
  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this.productservice.getProducts().subscribe(Data =>{
      this.products = Data
    })
    // this.products = this.productService.getProducts();
  }
  

}