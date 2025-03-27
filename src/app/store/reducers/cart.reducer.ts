import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart } from '../actions/cart.actions';
import { Product } from '../../modules/product.model';
export interface CartState {
  products: Product[];
}

export const initialState: CartState = {
  products: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
  })),
  on(removeFromCart, (state, { productId }) => {
    const index = state.products.findIndex((product) => product.id === productId);
    if (index === -1) return state; // If product not found, return current state

    return {
      ...state,
      products: state.products.filter((_, i) => i !== index), // Remove only the first matching item
    };
  })
);



