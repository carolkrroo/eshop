import {
  createFeatureSelector,
  MemoizedSelector
} from '@ngrx/store';

import { CartModel } from 'src/app/models/cart.model';

import { cartAdapter, State } from './state';

export const selectCartState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('cart');

export const selectCart: (
  state: object
) => CartModel[] = cartAdapter.getSelectors(selectCartState).selectAll;
