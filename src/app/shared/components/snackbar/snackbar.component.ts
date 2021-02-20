import { Component, OnDestroy, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Snackbar } from './snackbar.interfaces';
import { SnackbarService } from './snackbar.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [
    trigger('state', [
      transition(':enter', [
        style({ bottom: '-100px', transform: 'translate(-50%, 0%) scale(0.3)' }),
        animate('150ms cubic-bezier(0, 0, 0.2, 1)', style({
          transform: 'translate(-50%, 0%) scale(1)',
          opacity: 1,
          bottom: '20px',
        })),
      ]),
      transition(':leave', [
        animate('150ms cubic-bezier(0.4, 0.0, 1, 1)', style({
          transform: 'translate(-50%, 0%) scale(0.3)',
          opacity: 0,
          bottom: '-100px',
        })),
      ]),
    ])
  ]
})
export class SnackbarComponent implements OnInit, OnDestroy {
  snackbar: Snackbar = {
    show: false,
    message: '',
    type: 'success',
  };
  private snackbarSubscription = new Subscription();

  constructor(private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.snackbarSubscription = this.snackbarService.snackbarSubject$
      .pipe(filter(value => !!value))
      .subscribe((value) => {
        this.snackbar = value;
        setTimeout(() => {
          this.snackbar.show = false;
        }, 3000);
      }
    );
  }

  ngOnDestroy(): void {
    this.snackbarSubscription.unsubscribe();
  }

}
