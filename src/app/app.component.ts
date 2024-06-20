import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig,
    protected router: Router,) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.primengConfig.setTranslation({
      monthNames: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ],
      monthNamesShort: [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic',
      ],
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
      emptyMessage: 'No se encontró resultados',
      choose: 'Seleccionar',
      upload: 'Subir archivo',
      cancel: 'Cancelar',
      
    });

    this.router.navigate(['/pages/sunafil-en-linea'])  
  }
}