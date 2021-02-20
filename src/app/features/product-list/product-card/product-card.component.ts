import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartModel } from 'src/app/models/cart.model';
import { ProductModel } from 'src/app/models/product.model';
import { SnackbarService } from 'src/app/shared/components/snackbar/snackbar.service';
import { Product } from '../interfaces/product.interfaces';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;

  constructor(
    private store: Store<{cart: CartModel}>,
    private snackbarService: SnackbarService,
  ) { }

  ngOnInit(): void {
  }

  add(): void {
    const newProduct = new ProductModel({...this.product, quantity: 1});
    this.store.dispatch({type: 'ADD', payload: newProduct});
    this.snackbarService.show('Produto adicionado ao carrinho', 'success');
  }

}
