import { ProductModel } from './product.model';

export interface Cart {
  products: ProductModel[];
  quantity: number;
  total: number;
}

export class CartModel implements Cart {
  products: ProductModel[];
  quantity: number;
  total: number;

  constructor() {
    this.products = [];
    this.quantity = 0;
    this.total = 0;
  }
}
