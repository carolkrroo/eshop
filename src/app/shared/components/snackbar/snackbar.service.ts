import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Snackbar } from './snackbar.interfaces';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  snackbarSubject$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }

  show(message: string, type: 'success' | 'danger'): void {
    this.snackbarSubject$.next({
      show: true,
      message,
      type
    });
  }
}
