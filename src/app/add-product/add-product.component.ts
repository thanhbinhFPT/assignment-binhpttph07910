import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
product: Product = new Product();
  constructor( private productService: ProductService ) { }

  ngOnInit(): void {
  }
  addProduct(){
    this.productService.addProduct(this.product);
    //console.log(this.product);
  }

}