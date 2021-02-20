import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { ImageLoaderComponent } from './components/image-loader/image-loader.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@NgModule({
  declarations: [LoadingComponent, ImageLoaderComponent, SnackbarComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    LoadingComponent,
    ImageLoaderComponent,
    SnackbarComponent,
  ],
})
export class SharedModule { }
