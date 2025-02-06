import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http:HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }

  searchProducts(query: string): Observable<any> {
    const limit = 3; 
    return this.http.get<any>(`${this.apiUrl}/search?q=${query}&limit=${limit}`).pipe(
      map(response => response.products)
    );
  }
  
}
