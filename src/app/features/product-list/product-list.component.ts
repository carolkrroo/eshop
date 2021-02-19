import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './interfaces/product.interfaces';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts() {
    this.products$ = this.productService.getProducts();
  }

}
