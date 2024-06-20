import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFechaFormato]',
})
export class FechaFormatoDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
onInput(event: any) {
  const input = event.target;
  let value = input.value.replace(/\D/g, '');

  const day = value.slice(0, 2);
  const month = value.slice(2, 4);
  const year = value.slice(4, 8) || '';

  // Ajustar la longitud de la cadena y el formato
  if (value.length >= 2 && value.length < 4) {
    value = `${day}/${month}${year}`;
  } else if (value.length >= 4) {
    value = `${day}/${month}/${year}`;
  }

  input.value = value;
}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const key = event.key;

    if (key === 'Backspace' && input.selectionStart === input.selectionEnd) {
      // Permitir borrar el último "/" cuando se presiona la tecla "Backspace"
      const value = input.value.replace(/\D/g, '');
      const slicedValue = value.slice(0, -1);
      input.value = slicedValue.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
      event.preventDefault();
    }

  }
}
