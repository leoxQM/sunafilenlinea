import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../service/service.service';
import { I_ChangeViewComponents } from '@interfaces';
import { procesoComponents, viewComponents } from '@constantes';

@Component({
  selector: 'app-topbar',
  templateUrl: './app-topbar.component.html',
  styleUrls: ['./app-topbar.component.scss'],
})
export class AppTopbarComponent {
  @ViewChild('menubutton') menuButton!: ElementRef;
  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;
  @ViewChild('topbarmenu') menu!: ElementRef;

  @Output() OA_FollowingBack = new EventEmitter<I_ChangeViewComponents>();
  @Output() OS_BuscarServicio = new EventEmitter<string>();
  @Input() visInicioHeader = false;
  @Input() visTrabajadorHeader = false;
  @Input() visEmpleadorHeader = false;
  nombreServicio: string = '';
  items!: MenuItem[];

  constructor(public layoutService: LayoutService) {}

  backEmpleador() {
    this.OA_FollowingBack.emit({
      proceso: procesoComponents.Back,
      view: viewComponents.Empleador,
    });
  }

  backTrabajador() {
    this.OA_FollowingBack.emit({
      proceso: procesoComponents.Back,
      view: viewComponents.Trabajador,
    });
  }

  buscarServicio(){
    this.OS_BuscarServicio.emit(this.nombreServicio);
  }
}
