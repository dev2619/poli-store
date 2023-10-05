import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private productService: ProductsService) { }

  products: Product[] = [];
  searchProduct(): void {
    this.productService.getProducts().subscribe((res) => {
      console.log("🚀 ~ file: home.component.ts:19 ~ HomeComponent ~ this.productService.getProducts ~ res:", res)
      this.products = res
    });
  }

  ngOnInit(): void {
    this.searchProduct();
  }

}
