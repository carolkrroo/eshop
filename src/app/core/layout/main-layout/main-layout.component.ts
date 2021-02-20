import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CartModel } from 'src/app/models/cart.model';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  cart$: Observable<CartModel>;
  private quantityStateSubscription = new Subscription();
  quantity = 0;

  constructor(
    private store: Store<{cart: CartModel}>,
  ) {
    this.cart$ = this.store.select('cart');
  }

  ngOnInit(): void {
    this.quantityStateSubscription = this.cart$.subscribe(({quantity}) => {
      this.quantity = quantity;
    });
  }

  ngOnDestroy(): void {
    this.quantityStateSubscription.unsubscribe();
  }

}
