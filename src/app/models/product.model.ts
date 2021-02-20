export class ProductModel {
  id: string;
  name: string;
  price: string;
  photo: string;
  quantity: number;

  constructor(
    fields?: {
      id?: string,
      name?: string,
      price?: string,
      photo?: string,
      quantity?: number,
    }
  ) {
    this.id = '';
    this.name = '';
    this.price = '';
    this.photo = '';
    this.quantity = 0;
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
