import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo:'verifica-inspector', pathMatch:'full'},
  // { path:'asistencia-tecnica', loadChildren:() => import('./asistencia-tecnica/asistencia-tecnica.module').then(m=>m.AsistenciaTecnicaModule)},
   { path:'sunafil-en-linea', loadChildren:() => import('./sunafil-en-linea/sunafil-en-linea.module').then(m=>m.SunafilEnLineaModule)},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
