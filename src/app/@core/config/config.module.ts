import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { FormsModule } from '@angular/forms';
import { SharedPrimeNgModule } from '@primeNgModule';

@NgModule({
  declarations: [
    ConfigComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedPrimeNgModule
  ],
  exports: [
    ConfigComponent
  ]
})
export class ConfigModule { }
