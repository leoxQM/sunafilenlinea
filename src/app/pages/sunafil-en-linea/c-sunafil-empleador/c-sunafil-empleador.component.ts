import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
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
export class CSunafilEmpleadorComponent implements OnInit, OnDestroy {
  @Output() OA_FollowingBack = new EventEmitter<I_ChangeViewComponents>();
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

  getDataServicios() {
    this.servicePages.getServiciosEmpleador().subscribe({
      next: (rpta) => {
        console.log('listado: ', rpta);
        this.listDataServicios = rpta;
        setTimeout(() => (this.triggerAnimation = true), 0);
      },
      error: () => {},
      complete() {},
    });
  }

  filterData(searchText: string) {
    this.filteredDataServicios = this.listDataServicios.filter((service) =>
      service.nombreServicioEmpleador
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
  }

  resetAnimation() {
    this.triggerAnimation = false;
    setTimeout(() => (this.triggerAnimation = true), 0);
  }

  triggerAnimation = true;

  changeComponent() {
    this.OA_FollowingBack.emit({
      proceso: procesoComponents.Back,
      view: viewComponents.Empleador,
    });
  }
}
