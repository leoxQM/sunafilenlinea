import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SunafilEnLineaComponent } from './sunafil-en-linea/sunafil-en-linea.component';

const routes: Routes = [
  {
    path: '',
    component: SunafilEnLineaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SunafilEnLineaRoutingModule { }
