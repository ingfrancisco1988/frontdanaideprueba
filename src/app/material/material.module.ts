import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
 

const material = [ 
  MatIconModule,
  ];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
