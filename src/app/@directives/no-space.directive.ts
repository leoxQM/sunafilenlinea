import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoSpace]'
})
export class NoSpaceDirective {

  constructor() { }

  @HostListener('input', ['$event']) onInput(event: any) {
    const initialValue = event.target.value;
    const trimmedValue = initialValue.trim(); // Elimina los espacios en blanco al principio y al final
    if (initialValue !== trimmedValue) {
      event.target.value = trimmedValue; // Establece el valor sin espacios en blanco
      event.target.dispatchEvent(new Event('input')); // Dispara el evento de entrada nuevamente para actualizar el modelo
    }
  }
}
