import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product();
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit():void {
  }
   addProduct(){
this.productService.addProduct(this.product).subscribe(Data => {
      this.router.navigateByUrl('dashboard');
      })
}
}