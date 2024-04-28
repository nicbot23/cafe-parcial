import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CafesComponent } from "./cafes.component";


const cafesRoutes: Routes = [
  {
    path: '',
    component: CafesComponent,
    children: [
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(cafesRoutes)],
  exports: [RouterModule],
})
export class CafesRoutingmodule {}
