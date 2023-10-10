import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }
  private products = '../../assets/data/product.json';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.products);
  }

}
