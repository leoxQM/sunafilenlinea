import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNoDigitar0]'
})
export class NoDigitar0Directive {

  @Input() allowDecimal: boolean = false; // Permite números decimales

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const initialValue = this.el.nativeElement.value;
    let newValue = initialValue.replace(/[^0-9]/g, '');

    // Si el valor es 0, asignar null
    if (newValue === '0') {
      newValue = null;
    }

    if (!newValue) {
      // Si no hay ningún valor, asignar null
      newValue = null;
    } 
     else if (newValue.indexOf('0') === 0 && newValue.indexOf('.') !== 1) {
      // Eliminar el 0 si no es seguido por un punto
      newValue = newValue.slice(1);
    }

    if (this.allowDecimal) {
      const parts = newValue.split('.');
      if (parts.length > 2) {
        const integerPart = parts.shift();
        const decimalPart = parts.join('');
        newValue = `${integerPart}.${decimalPart}`;
      }
    }

    if (initialValue !== newValue) {
      this.el.nativeElement.value = newValue;
      event.preventDefault();
    }
  }

}
