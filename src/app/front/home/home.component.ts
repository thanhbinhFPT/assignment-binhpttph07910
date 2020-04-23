import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import{ Data } from '../../MockData'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products=Data;
  selected: Product;
  constructor(

    
  ) { }

  ngOnInit() {
   
  }

    // this.products= this.productService.getProducts();
}
