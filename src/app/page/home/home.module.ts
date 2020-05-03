import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { RouterModule } from '@angular/router';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
},


)
export class HomeModule { }
