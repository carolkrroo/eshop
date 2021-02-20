import { CartModel } from 'src/app/models/cart.model';
import { ActionModel, ActionTypes } from './actions';

export function cartReducer(state = new CartModel(), action: ActionModel): CartModel {
  switch (action.type) {
    case ActionTypes.ADD: {
      return {
        ...state,
        quantity: state.quantity + 1,
        total: state.total + +action.payload.price,
        products: state.products.concat([action.payload]),
      };
    }
    default: return state;
  }
}
