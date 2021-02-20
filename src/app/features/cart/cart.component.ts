import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CartModel } from 'src/app/models/cart.model';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cart$: Observable<CartModel>;
  private productsStateSubscription: Subscription = new Subscription();
  products: ProductModel[] = [];
  total = 0;

  constructor(
    private store: Store<{cart: CartModel}>,
  ) {
    this.cart$ = this.store.select('cart');
  }

  ngOnInit(): void {
    this.productsStateSubscription = this.cart$.subscribe(({products, total}) => {
      this.products = products;
      this.total = total;
    });
  }

  ngOnDestroy(): void {
    this.productsStateSubscription.unsubscribe();
  }

}
