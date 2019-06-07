import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosicionesComponent } from './components/posiciones/posiciones.component'

const routes: Routes = [
  { path: '', redirectTo: 'posiciones/ARG', pathMatch: 'full' },
  { path: 'posiciones/:pais', component: PosicionesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
