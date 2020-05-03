import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CarritoPage } from './carrito.page';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [CarritoPage],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: CarritoPage
      }
    ])
  ]
})
export class CarritoModule { }
