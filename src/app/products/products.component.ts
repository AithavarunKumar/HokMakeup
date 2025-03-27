// src/app/products/products.component.ts
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
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
  visibleProducts: Product[] = [];
  currentIndex: number = 0;
  itemsPerPage: number = 4; // Number of products shown at a time

  constructor(private dataService: DataService, private store: Store, private toastService: ToastService) {}

  ngOnInit(): void {
    this.dataService.getProducts().subscribe(
      (response) => {
        this.Products = response;
        this.updateVisibleProducts();
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  updateVisibleProducts(): void {
    this.visibleProducts = this.Products.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

  nextProducts(): void {
    if (this.currentIndex + this.itemsPerPage < this.Products.length) {
      this.currentIndex += this.itemsPerPage;
      this.updateVisibleProducts();
    }
  }

  prevProducts(): void {
    if (this.currentIndex - this.itemsPerPage >= 0) {
      this.currentIndex -= this.itemsPerPage;
      this.updateVisibleProducts();
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.nextProducts();
    } else if (event.key === 'ArrowLeft') {
      this.prevProducts();
    }
  }

  addToCart(product: Product): void {
    this.store.dispatch(addToCart({ product }));
    this.toastService.showToast('Added to the cart!');
  }
}