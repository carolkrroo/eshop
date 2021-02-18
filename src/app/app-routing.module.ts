import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'product-list'
  },
  {
    path: 'product-list',
    loadChildren: () =>
      import('./features/product-list/product-list.module').then(m => m.ProductListModule)
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./features/cart/cart.module').then(m => m.CartModule)
  },
  {
    path: '**',
    redirectTo: 'product-list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
