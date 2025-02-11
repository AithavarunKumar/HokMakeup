import { createAction, props } from '@ngrx/store';
import { Product } from '../../modules/product.model';
export const addToCart = createAction(
  '[Cart] Add to Cart',
  props<{ product: Product }>()  
);

export const removeFromCart = createAction(
  '[Cart] Remove from Cart',
  props<{ productId: number }>()  
);

