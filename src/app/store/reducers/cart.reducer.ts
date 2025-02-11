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
  on(removeFromCart, (state, { productId }) => ({
    ...state,
    products: state.products.filter((product) => product.id !== productId),
  })),

);


