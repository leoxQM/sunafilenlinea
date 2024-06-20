import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { procesoComponents, viewComponents } from '@constantes';
import { I_ChangeViewComponents } from '@interfaces';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-c-sunafil-trabajador',
  templateUrl: './c-sunafil-trabajador.component.html',
  styleUrls: ['./c-sunafil-trabajador.component.scss'],
  animations: [
    trigger('aparecerAnimacion', [
      transition(':enter', [
        query('.cajitaAnimacion', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger('300ms', [
            animate('500ms ease-out', style({ opacity: 1, transform: 'none' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class CSunafilTrabajadorComponent implements OnInit, OnDestroy {
  @Output() OA_FollowingBack = new EventEmitter<I_ChangeViewComponents>();
  private navigationSubscription: Subscription;

  constructor(private router: Router) { }

  ngOnInit(): void {
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

  resetAnimation() {
    this.triggerAnimation = false;
    setTimeout(() => this.triggerAnimation = true, 0);
  }

  triggerAnimation = true;

  changeComponent() {
    this.OA_FollowingBack.emit({
      proceso: procesoComponents.Back,
      view: viewComponents.Trabajador,
    });
  }

}
