import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';


@NgModule({
  declarations: [CartComponent],
  imports: [
    SharedModule,
    CartRoutingModule,
  ]
})
export class CartModule { }
