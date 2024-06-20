import { Component,OnInit } from '@angular/core';
import { LayoutService } from '../service/service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
      this.model = [
          {
              label: 'Principal',
              items: [
                {
                  label: 'Inicio',
                  icon: 'pi pi-fw pi-user',
                  routerLink: ['/pages/asistencia-tecnica']
                },
              ]
          },

      ];
  }
}
