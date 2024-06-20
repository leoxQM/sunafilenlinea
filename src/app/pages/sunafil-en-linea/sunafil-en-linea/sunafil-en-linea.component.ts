import { Component, EventEmitter, Output } from '@angular/core';
import { procesoComponents, viewComponents } from '@constantes';
import { I_ChangeViewComponents } from '@interfaces';

@Component({
  selector: 'app-sunafil-en-linea',
  templateUrl: './sunafil-en-linea.component.html',
  styleUrls: ['./sunafil-en-linea.component.scss']
})
export class SunafilEnLineaComponent {
  
   vistaInicio: boolean = true;
   vistaEmpleador: boolean = false;
   vistaTrabajador: boolean = false;

   constructor(){ }

   getNextOrBack(dataChange: I_ChangeViewComponents){
      this.vistaInicio = false;
      this.vistaEmpleador = false;
      this.vistaTrabajador = false;

      switch(dataChange.view){
         case viewComponents.Inicio:
          if(dataChange.proceso == procesoComponents.nextEmpleador){
            this.vistaEmpleador = true;
          }else if(dataChange.proceso == procesoComponents.nextTrabajador){
             this.vistaTrabajador = true;
          }
          break;
         case viewComponents.Empleador:
          if(dataChange.proceso == procesoComponents.Back){
            this.vistaInicio = true;
          }
          break; 
        case viewComponents.Trabajador:
          if(dataChange.proceso == procesoComponents.Back){
            this.vistaInicio = true;
          }
          break; 
      }
   }

}
