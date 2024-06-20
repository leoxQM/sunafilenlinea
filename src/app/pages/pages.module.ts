import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsModule } from 'primeng/steps';
import { PagesRoutingModule } from './pages-routing.module';
import { AppLayoutModule } from '../@core/app-layout.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AppLayoutModule,
    StepsModule
  ],
  providers:[ ]
})
export class PagesModule {}
