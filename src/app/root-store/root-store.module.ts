import { NgModule } from '@angular/core';
import { CartStoreModule } from './cart-store';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './cart-store/reducer';

@NgModule({
  declarations: [],
  imports: [
    CartStoreModule,
    StoreModule.forRoot({cart: cartReducer}),
  ]
})
export class RootStoreModule { }
