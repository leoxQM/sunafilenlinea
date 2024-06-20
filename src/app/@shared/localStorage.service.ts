import { Injectable } from '@angular/core';
import { variableStorage } from '../config/configApp';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setearData(rpta:any) {
    localStorage.setItem(variableStorage, JSON.stringify(rpta));
  }

  obtenerDataGeneral(){
    const DG:any = JSON.parse(localStorage.getItem(variableStorage)!);
    return DG;
  }
  
  limpiarDataStorage() {
    localStorage.removeItem(variableStorage);
  }
}
