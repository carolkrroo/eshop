import { Action } from '@ngrx/store';
import { ProductModel } from 'src/app/models/product.model';

export class ActionModel implements Action {
  type = '';
  payload?: any;
}

export enum ActionTypes {
  ADD = 'ADD',
}

export class AddAction implements Action {
  readonly type = ActionTypes.ADD;
  constructor(public payload: ProductModel) {}
}

export type Actions = AddAction;
