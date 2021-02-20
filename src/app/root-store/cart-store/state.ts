import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { CartModel } from 'src/app/models/cart.model';
import { ProductModel } from 'src/app/models/product.model';

export const cartAdapter: EntityAdapter<CartModel> = createEntityAdapter<CartModel>();

export interface State extends EntityState<CartModel> {
  products: ProductModel[];
  quantity: number;
  total: number;
}

export const initialState: State = cartAdapter.getInitialState({
  products: [],
  quantity: 0,
  total: 0,
});
