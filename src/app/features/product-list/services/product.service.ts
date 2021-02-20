import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../interfaces/product.interfaces';
import { SnackbarService } from 'src/app/shared/components/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'https://5ee744ce52bb0500161fd6e4.mockapi.io/products';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private snackbarService: SnackbarService,
  ) { }

    /** GET products from the server */
    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.productsUrl)
        .pipe(
          catchError(this.handleError<Product[]>('getProducts', []))
        );
    }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      this.snackbarService.show('Erro ao carregar lista de produtos', 'danger');

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
