import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { procesoComponents, viewComponents } from '@constantes';
import { I_ChangeViewComponents } from '@interfaces';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { PagesService } from '../../pages.service';


@Component({
  selector: 'app-c-sunafil-trabajador',
  templateUrl: './c-sunafil-trabajador.component.html',
  styleUrls: ['./c-sunafil-trabajador.component.scss'],
  animations: [
    trigger('aparecerAnimacion', [
      transition(':enter', [
        query(
          '.cajitaAnimacion',
          [
            style({ opacity: 0, transform: 'translateY(-20px)' }),
            stagger('300ms', [
              animate(
                '500ms ease-out',
                style({ opacity: 1, transform: 'none' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class CSunafilTrabajadorComponent implements OnInit, OnDestroy {
  @Output() OA_FollowingBack = new EventEmitter<I_ChangeViewComponents>();
  @Input({ required: true }) nombreApp: string;
  listDataServicios: any[] = [];
  filteredDataServicios: any[] = [];
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
    this.servicePages.getServiciosTrabajador().subscribe({
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

  triggerAnimation = true;

  changeComponent() {
    this.OA_FollowingBack.emit({
      proceso: procesoComponents.Back,
      view: viewComponents.Trabajador,
    });
  }
}
