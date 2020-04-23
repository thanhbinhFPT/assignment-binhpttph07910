import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products: Product[];
  constructor(
    private productService: ProductService,
    
  ) { }

  ngOnInit() {
    this.getProducts();
  }
getProducts(){
    this.productService.getProducts().subscribe(Data=>{ this.products=Data})
    // this.products= this.productService.getProducts();
}
}