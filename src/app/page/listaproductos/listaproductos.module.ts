import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaproductosPage } from './listaproductos.page';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [ListaproductosPage],
  imports: [
    CommonModule,
    
    RouterModule.forChild([
      {
        path: '',
        component: ListaproductosPage
      },
      
    ]),
    MaterialModule,
  ]
})
export class ListaproductosModule { }
