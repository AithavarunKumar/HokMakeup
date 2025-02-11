// src/app/products/products.component.ts
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { select, Store } from '@ngrx/store';
import { addToCart } from '../store/actions/cart.actions';
import { Product } from '../modules/product.model';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-products',
  imports:[CommonModule,CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  Products: Product[] = [];
  constructor(private dataService: DataService, private store: Store , private toastService:ToastService) {}

  ngOnInit(): void {
    this.dataService.getProducts().subscribe(
      (response) => {
        this.Products = response; 
        console.log(this.Products);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addToCart(product: Product): void {
    // Dispatch the action to add the product to the cart
    this.store.dispatch(addToCart({ product }));
    this.toastService.showToast('added to the cart!');
    
  }
}
