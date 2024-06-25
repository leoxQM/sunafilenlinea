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
  getServiciosEmpleador(): Observable<any> {
    const url = 'assets/data/serviciosEmpleador.json';
    return this.http.get<any>(url);
  }
  getServiciosTrabajador(): Observable<any> {
    const url = 'assets/data/serviciosTrabajador.json';
    return this.http.get<any>(url);
  }
  //---------

  getDataPrecargada(): Observable<any> {
    const url = 'assets/data/datosPrueba.json';
    return this.http.get<any>(url);
  }

  getTipoServicio(): Observable<any> {
    const url = 'assets/data/tipoServicio.json';
    return this.http.get<any>(url);
  }

  getModalidad(): Observable<any> {
    const url = 'assets/data/modalidad.json';
    return this.http.get<any>(url);
  }

  getDepartamentos() {
    const url = `${constantesApiWeb.departamentos}`;
    return this.http.get<any>(url);
  }

  getProvincias(codDepartamento: string) {
    const url = `${constantesApiWeb.provincias}${codDepartamento}/provincias`;
    return this.http.get<any>(url);
  }

  getDistritos(codDepartamento: string, codProvincia: string) {
    const url = `${constantesApiWeb.provincias}${codDepartamento}/provincias/${codProvincia}/distritos`;
    return this.http.get<any>(url);
  }

  getvalidacionRUC(nroRuc: string) {
    const url = `${constantesApiWeb.validarRUC}?nroRuc=${nroRuc}`;
    return this.http.get<any>(url);
  }

  getBuscarPersona(codTipoDoc: string, nroDocumento: string) {
    const url = `${constantesApiWeb.persona}${codTipoDoc}/${nroDocumento}`;
    return this.http.get<any>(url);
  }

  getTipoDocumentos() {
    const url = `${constantesApiWeb.tipoDocumentos}`;
    return this.http.get<any>(url);
  }

  getMensajesEnvio(): Observable<any> {
    const url = 'assets/data/dataMensaje.json';
    return this.http.get<any>(url);
  }

  getMaterias(codreglab: number) {
    const url = `${constantesApiWeb.materias}?codreglab=${codreglab}`;
    return this.http.get<any>(url);
  }

  guardarAsistenciaTecnica(objeto: any) {
    const url = `${constantesApiWeb.guardarAsistenciaTecnica}`;
    return this.http.post<any>(url, objeto);
  }
}
