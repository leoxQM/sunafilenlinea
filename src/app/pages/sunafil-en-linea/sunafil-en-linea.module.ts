import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SunafilEnLineaRoutingModule } from './sunafil-en-linea-routing.module';
import { CInicioComponent } from './c-inicio/c-inicio.component';
import { CSunafilTrabajadorComponent } from './c-sunafil-trabajador/c-sunafil-trabajador.component';
import { CSunafilEmpleadorComponent } from './c-sunafil-empleador/c-sunafil-empleador.component';
import { SunafilEnLineaComponent } from './sunafil-en-linea/sunafil-en-linea.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedPrimeNgModule } from '@primeNgModule';
import { DirectiveAppModule } from 'src/app/@directives/directive-app.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SharedAppService } from '@sharedApp';
import { CServiciosSunafilComponent } from './c-servicios-sunafil/c-servicios-sunafil.component';
import { AppTopbarComponent } from 'src/app/@core/topbar/app-topbar.component';
import { AppLayoutModule } from 'src/app/@core/app-layout.module';


@NgModule({
  declarations: [
    CInicioComponent,
    CSunafilTrabajadorComponent,
    CSunafilEmpleadorComponent,
    SunafilEnLineaComponent,
    CServiciosSunafilComponent
  ],
  imports: [
    CommonModule,
    SunafilEnLineaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedPrimeNgModule,
    DirectiveAppModule,
    AppLayoutModule
  ],
  providers:[
    ConfirmationService, MessageService, SharedAppService
  ]
})
export class SunafilEnLineaModule { }
