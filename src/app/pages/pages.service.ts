import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constantesApiWeb } from '../@models/apiVariable';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class PagesService {
  constructor(private http: HttpClient) {}

  //--------Sunafil en linea
  getServiciosEmpleador() {
    const url = constantesApiWeb.serviciosEmpleador;
    // const url = 'assets/data/serviciosEmpleador.json';
    return this.http.get<any>(url);
  }
  getServiciosTrabajador(){
    const url = constantesApiWeb.serviciosTrabajador;
    // const url = 'assets/data/serviciosTrabajador.json';
    return this.http.get<any>(url);
  }
  //---------

  

  
}
