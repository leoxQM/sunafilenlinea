import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeCapitalizePipe } from './pipe-capitalize.pipe';



@NgModule({
  declarations: [
    PipeCapitalizePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipeCapitalizePipe
  ]
})
export class PipeAppModule { }
