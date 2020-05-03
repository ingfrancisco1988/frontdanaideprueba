import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MaterialModule
  ],
  exports: [SpinnerComponent]
})
export class SpinnerModule { }
