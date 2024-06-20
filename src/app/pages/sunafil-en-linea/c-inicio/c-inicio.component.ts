import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { procesoComponents, viewComponents } from '@constantes';
import { I_ChangeViewComponents } from '@interfaces';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-c-inicio',
  templateUrl: './c-inicio.component.html',
  styleUrls: ['./c-inicio.component.scss'],
  animations: [
    trigger('moverIzquierdaDerecha', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('moverDerechaIzquierda', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class CInicioComponent implements OnInit {
  @Output() OA_FollowingBack = new EventEmitter<I_ChangeViewComponents>();
  constructor(){

  }
  
  ngOnInit(): void {
      
  }

  siguiente(proceso: string) {
    this.OA_FollowingBack.emit({
      proceso: proceso == 'EM' ? procesoComponents.nextEmpleador :procesoComponents.nextTrabajador,
      view: viewComponents.Inicio,
    });
  }

}
