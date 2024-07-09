import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../service/service.service';
import { I_ChangeViewComponents } from '@interfaces';
import { procesoComponents, viewComponents } from '@constantes';

@Component({
  selector: 'app-topbar',
  templateUrl: './app-topbar.component.html',
  styleUrls: ['./app-topbar.component.scss'],
})
export class AppTopbarComponent implements OnInit {
  @ViewChild('menubutton') menuButton!: ElementRef;
  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;
  @ViewChild('topbarmenu') menu!: ElementRef;

  @Output() OA_FollowingBack = new EventEmitter<I_ChangeViewComponents>();
  @Output() OS_BuscarServicio = new EventEmitter<string>();
  @Input() visInicioHeader = false;
  @Input() visTrabajadorHeader = false;
  @Input() visEmpleadorHeader = false;
  nombreServicio: string = '';
  rutaImg: string;
  rutaImgMobile: string;
  items!: MenuItem[];

  constructor(public layoutService: LayoutService) {}

  ngOnInit(): void {
      // this.rutaImg = this.visTrabajadorHeader == true ? '':''
      // this.rutaImgMobile = this.visTrabajadorHeader == true ? '':''
  }

  backEmpleador() {
    this.nombreServicio = '';
    this.buscarServicio()
    this.OA_FollowingBack.emit({
      proceso: procesoComponents.Back,
      view: viewComponents.Empleador,
    });
  }

  backTrabajador() {
    this.nombreServicio = '';
    this.buscarServicio()
    this.OA_FollowingBack.emit({
      proceso: procesoComponents.Back,
      view: viewComponents.Trabajador,
    });
  }

  buscarServicio(){
    console.log("valor enviado: ", this.nombreServicio)
    this.OS_BuscarServicio.emit(this.nombreServicio);
  }
}
