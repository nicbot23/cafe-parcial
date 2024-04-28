import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafesModule } from './cafes/cafes.module';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, // Redirecciona a 'home' por defecto
  { path: '', loadChildren: () => CafesModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
