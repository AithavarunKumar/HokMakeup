// src/app/data.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from './modules/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  // Fetch the products from the API and return them as an array of Product objects
  getProducts(): Observable<Product[]> {
    return this.http.get<{ products: Product[] }>(this.apiUrl).pipe(
      map(response => response.products.slice(1,9)) 
    );
  }

  // Search for products based on a query and return an array of Product objects
  searchProducts(query: string): Observable<Product[]> {
    const limit = 3; 
    return this.http.get<{ products: Product[] }>(`${this.apiUrl}/search?q=${query}&limit=${limit}`).pipe(
      map(response => response.products)  // Extract the 'products' array from the response
    );
  }
}
