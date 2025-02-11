import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { removeFromCart } from '../store/actions/cart.actions';
import { CartState } from '../store/reducers/cart.reducer';
import { Product } from '../modules/product.model';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products$: Observable<Product[]>;
  totalPrice$: Observable<number>;

  constructor(private store: Store<{ cart: CartState }>) {
    // Ensure products$ is always an array (even if empty initially)
    this.products$ = this.store.pipe(select(state => state.cart.products));

    // Calculate total price
    this.totalPrice$ = this.products$.pipe(
      map(products => {
        if (!products) return 0;
        return products.reduce((sum, product) => sum + product.price, 0);
      })
    );
  }
  removeFromCart(productId: number): void {
    // Dispatch the action to remove the product from the cart
    this.store.dispatch(removeFromCart({ productId }));
  }
}
