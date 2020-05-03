import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaproductosPage, DialogOverviewExampleDialog } from './listaproductos.page';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListaproductosPage],
  imports: [
    CommonModule,
    FormsModule,
    
    RouterModule.forChild([
      {
        path: '',
        component: ListaproductosPage
      },
      
    ]),
    MaterialModule,
  ],
})
export class ListaproductosModule { }
