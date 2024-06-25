import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
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
  listDataServicios: any[] = [];
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
    this.servicePages.getServiciosTrabajador().subscribe({
      next: (rpta) => {
        console.log('listado: ', rpta);
        this.listDataServicios = rpta;
        setTimeout(() => (this.triggerAnimation = true), 0);
      },
      error: () => {},
      complete() {},
    });
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
