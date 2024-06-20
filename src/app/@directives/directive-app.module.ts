import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumeroDirective } from './numero.directive';
import { EmailValidatorDirective } from './email-validator.directive';
import { FechaFormatoDirective } from './fecha-validator.directive';
import { NoSpaceDirective } from './no-space.directive';
import { NoDigitar0Directive } from './no-digitar0.directive';



@NgModule({
  declarations: [
    NumeroDirective,
    EmailValidatorDirective,
    FechaFormatoDirective,
    NoSpaceDirective,
    NoDigitar0Directive
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumeroDirective,
    EmailValidatorDirective,
    FechaFormatoDirective,
    NoSpaceDirective,
    NoDigitar0Directive
  ]
})
export class DirectiveAppModule { }
