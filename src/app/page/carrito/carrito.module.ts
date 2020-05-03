import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CarritoPage } from './carrito.page';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CarritoPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CarritoPage
      }
    ])
  ]
})
export class CarritoModule { }
