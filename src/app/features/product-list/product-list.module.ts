import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [ProductListComponent, ProductCardComponent],
  imports: [
    SharedModule,
    ProductListRoutingModule
  ]
})
export class ProductListModule { }
