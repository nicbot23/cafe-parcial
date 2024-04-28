import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafesComponent } from './cafes.component';
import { RouterModule } from '@angular/router';
import { CafesRoutingmodule } from './cafes.routing';



@NgModule({
  declarations: [
    CafesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CafesRoutingmodule
  ]
})
export class CafesModule { }
