import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
import { procesoComponents, viewComponents } from '@constantes';
import { I_ChangeViewComponents } from '@interfaces';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { PagesService } from '../../pages.service';


@Component({
  selector: 'app-c-sunafil-empleador',
  templateUrl: './c-sunafil-empleador.component.html',
  styleUrls: ['./c-sunafil-empleador.component.scss'],
  animations: [
    trigger('aparecerAnimacion', [
      transition(':enter', [
        query(
          '.cajitaAnimacion',
          [
            style({ opacity: 0, transform: 'scale(0)' }),
            animate(
              '500ms ease-out',
              style({ opacity: 1, transform: 'scale(1)' })
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class CSunafilEmpleadorComponent implements OnInit, OnDestroy, OnChanges  {
  @Output() OA_FollowingBack = new EventEmitter<I_ChangeViewComponents>();
  @Input({ required: true }) nombreApp: string;
  listDataServicios: any[] = [];
  filteredDataServicios: any[] = [];
  triggerAnimation: boolean = true;
  private navigationSubscription: Subscription;
  constructor(private router: Router, private servicePages: PagesService) {}

  ngOnInit(): void {
    this.getDataServicios();
    this.navigationSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.resetAnimation();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['nombreApp'] && !changes['nombreApp'].firstChange) {
      this.applyFilter();
    }
  }

  getDataServicios(): void {
    this.servicePages.getServiciosEmpleador().subscribe({
      next: (rpta) => {
        console.log('listado: ', rpta);
        this.listDataServicios = rpta;
        this.filteredDataServicios = this.listDataServicios;
        this.applyFilter();
        console.log('filteredDataServicios: ', this.filteredDataServicios);
      },
      error: () => {
        console.error('Error al obtener los servicios');
      },
      complete() {
        console.log('getDataServicios completado');
      },
    });
  }
  

  normalizeString(str: string): string {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  applyFilter(): void {
    if (this.nombreApp) {
      const normalizedNombreApp = this.normalizeString(this.nombreApp);
      this.filteredDataServicios = this.listDataServicios.filter(servicio =>
        this.normalizeString(servicio.nombreServicioEmpleador).includes(normalizedNombreApp)
      );
    } else {
      this.filteredDataServicios = this.listDataServicios; 
    }
    console.log('filteredDataServicios: ', this.filteredDataServicios);
  }

  resetAnimation() {
    this.triggerAnimation = false;
    setTimeout(() => (this.triggerAnimation = true), 0);
  }

  changeComponent() {
    this.OA_FollowingBack.emit({
      proceso: procesoComponents.Back,
      view: viewComponents.Empleador,
    });
  }
}
